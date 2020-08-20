import YAML from "yaml";
import url from "url";
import fs from "fs";
import path from "path";

import Debug from "debug";
const debug = Debug("ecosystem");

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const home = path.join(__dirname, "..");
const dirent = fs.readdirSync(home, { withFileTypes: true });

debug("searching for widgets...");

function validateManifest(manifest) {
  return !!manifest.name && !!manifest.script;
}

const widgets = [];

for (const ent of dirent) {
  if (!ent.isDirectory()) continue;
  const dir = path.join(home, ent.name);
  const manifestPath = path.join(dir, "widget.yml");
  if (!fs.existsSync(manifestPath) || fs.file) continue;
  try {
    const manifestSrc = fs.readFileSync(manifestPath, "utf-8");
    const manifest = YAML.parse(manifestSrc);
    if (validateManifest(manifest)) {
      widgets.push([dir, manifest]);
      debug("`%s` was added", ent.name);
    } else {
      debug("skipping `%s`: manifest must have name & script", ent.name);
    }
  } catch (e) {
    debug("skipping `%s`: %s", ent.name, e.message);
    continue;
  }
}

debug("found %d widget[s]", widgets.length);
if (widgets.length === 0) {
  debug("no action required. exiting...");
  process.exit(0);
}

const apps = widgets.map(([dir, manifest]) => {
  manifest.script = path.join(dir, manifest.script);
  manifest.script = path.relative(home, manifest.script);
  return manifest;
});

debug("writing `ecosystem.yml` file...");

const ecosystem = YAML.stringify({ apps });
fs.writeFileSync(path.join(home, "ecosystem.yml"), ecosystem);

debug("... done!");
