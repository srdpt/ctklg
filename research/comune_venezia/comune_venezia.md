# Comune Venezia

## Millefoglie

Dataflows are ISTAT queriable documents, they are identified
by a short id following the `XX+_YYY+` format.

```bash
curl 'https://portale.comune.venezia.it/millefoglie/statistiche/scheda/QUARTIERE-POPOLA-1$2$---2-3--'
```

### Base URL

```
https://portale.comune.venezia.it/millefoglie/statistiche/scheda/
```

### Query Format

| Base URL      | Sheet              | Geo           | Filters             |
| ------------- | ------------------ | ------------- | ------------------- |
| [millevoglie] | `QUARTIERE-POPOLA` | `-1$2$`       | `---2-3--`          |
| \*            | Population by sex  | Venice Island | From age 2 to age 3 |

### Response

```html
<div id="stat_filtri">
  <select
    onChange="this.options[this.selectedIndex].onclick()"
    name="cittadinanza"
    id="cittadinanza"
    ><option value="--">Filtra per provenienza</option
    ><optgroup label="Area geografica"
      ><option onclick="stat_filtri();" value="--1">Unione Europea</option
      ><option onclick="stat_filtri();" value="--2">Altri Paesi Europei</option
      ><option onclick="stat_filtri();" value="--3">Africa</option
      ><option onclick="stat_filtri();" value="--4">America</option
      ><option onclick="stat_filtri();" value="--5">Asia</option
      ><option onclick="stat_filtri();" value="--6">Oceania</option
      ><option onclick="stat_filtri();" value="--9">Apolide</option></optgroup
    ><optgroup label="Cittadinanza"
      ><option onclick="stat_filtri();" value="-301-">AFGHANA</option
      ><option onclick="stat_filtri();" value="-201-">ALBANESE</option
      ><option onclick="stat_filtri();" value="-401-">ALGERINA</option
      ><option onclick="stat_filtri();" value="-202-">ANDORRA</option
      ><option onclick="stat_filtri();" value="-402-">ANGOLANA</option
      ><option onclick="stat_filtri();" value="-503-">ANTIGUA</option
      ><option onclick="stat_filtri();" value="-999-">APOLIDE</option
      ><option onclick="stat_filtri();" value="-602-">ARGENTINA</option
      ><option onclick="stat_filtri();" value="-358-">ARMENA</option
      ><option onclick="stat_filtri();" value="-701-">AUSTRALIANA</option
      ><option onclick="stat_filtri();" value="-203-">AUSTRIACA</option
      ><option onclick="stat_filtri();" value="-359-">AZERBAIGIAN</option
      ><option onclick="stat_filtri();" value="-505-">BAHAMA</option
      ><option onclick="stat_filtri();" value="-305-">BANGLADESH</option
      ><option onclick="stat_filtri();" value="-506-">BARBADOS</option
      ><option onclick="stat_filtri();" value="-206-">BELGA</option
      ><option onclick="stat_filtri();" value="-507-">BELIZE</option
      ><option onclick="stat_filtri();" value="-406-">BENIN</option
      ><option onclick="stat_filtri();" value="-508-">BERMUDE</option
      ><option onclick="stat_filtri();" value="-304-">BHAREIN</option
      ><option onclick="stat_filtri();" value="-306-">BHUTAN</option
      ><option onclick="stat_filtri();" value="-208-">BIELORUSSA</option
      ><option onclick="stat_filtri();" value="-307-">BIRMANA</option
      ><option onclick="stat_filtri();" value="-604-">BOLIVIANA</option
      ><option onclick="stat_filtri();" value="-252-">BOSNIA-ERZEGOVINA</option
      ><option onclick="stat_filtri();" value="-408-">BOTSWANA</option
      ><option onclick="stat_filtri();" value="-605-">BRASILIANA</option
      ><option onclick="stat_filtri();" value="-219-">BRITANNICA</option
      ><option onclick="stat_filtri();" value="-309-">BRUNEI</option
      ><option onclick="stat_filtri();" value="-209-">BULGARA</option
      ><option onclick="stat_filtri();" value="-409-">BURKI</option
      ><option onclick="stat_filtri();" value="-410-">BURUNDI</option
      ><option onclick="stat_filtri();" value="-310-">CAMBOGIANA</option
      ><option onclick="stat_filtri();" value="-411-">CAMERUNESE</option
      ><option onclick="stat_filtri();" value="-509-">CANADESE</option
      ><option onclick="stat_filtri();" value="-413-">CAPO VERDE</option
      ><option onclick="stat_filtri();" value="-257-">CECA</option
      ><option onclick="stat_filtri();" value="-210-">CECA</option
      ><option onclick="stat_filtri();" value="-414-">CENTRO AFRICA</option
      ><option onclick="stat_filtri();" value="-415-">CIAD</option
      ><option onclick="stat_filtri();" value="-606-">CILENA</option
      ><option onclick="stat_filtri();" value="-314-">CINESE</option
      ><option onclick="stat_filtri();" value="-313-">CINESE</option
      ><option onclick="stat_filtri();" value="-315-">CIPRIOTA</option
      ><option onclick="stat_filtri();" value="-246-"
        >CITTA' DEL VATICANO</option
      ><option onclick="stat_filtri();" value="-608-">COLOMBIANA</option
      ><option onclick="stat_filtri();" value="-417-">COMORE</option
      ><option onclick="stat_filtri();" value="-418-">CONGO</option
      ><option onclick="stat_filtri();" value="-463-">CONGOLESE</option
      ><option onclick="stat_filtri();" value="-319-">COREA DEL NORD</option
      ><option onclick="stat_filtri();" value="-320-">COREA DEL SUD</option
      ><option onclick="stat_filtri();" value="-404-">COSTA D'AVORIO</option
      ><option onclick="stat_filtri();" value="-513-">COSTARICANA</option
      ><option onclick="stat_filtri();" value="-250-">CROATA</option
      ><option onclick="stat_filtri();" value="-514-">CUBANA</option
      ><option onclick="stat_filtri();" value="-212-">DANESE</option
      ><option onclick="stat_filtri();" value="-515-">DOMINICA</option
      ><option onclick="stat_filtri();" value="-516-">DOMINICANA</option
      ><option onclick="stat_filtri();" value="-609-">ECUADOREGNA</option
      ><option onclick="stat_filtri();" value="-419-">EGIZIANA</option
      ><option onclick="stat_filtri();" value="-322-"
        >EMIRATI ARABI UNITI</option
      ><option onclick="stat_filtri();" value="-466-">ERITREA</option
      ><option onclick="stat_filtri();" value="-247-">ESTONIA</option
      ><option onclick="stat_filtri();" value="-420-">ETIOPICA</option
      ><option onclick="stat_filtri();" value="-323-">FILIPPINA</option
      ><option onclick="stat_filtri();" value="-214-">FINLANDESE</option
      ><option onclick="stat_filtri();" value="-215-">FRANCESE</option
      ><option onclick="stat_filtri();" value="-421-">GABON</option
      ><option onclick="stat_filtri();" value="-422-">GAMBIA</option
      ><option onclick="stat_filtri();" value="-360-">GEORGIA</option
      ><option onclick="stat_filtri();" value="-216-">GERMANICA</option
      ><option onclick="stat_filtri();" value="-423-">GHANESE</option
      ><option onclick="stat_filtri();" value="-518-">GIAMAICANA</option
      ><option onclick="stat_filtri();" value="-326-">GIAPPONESE</option
      ><option onclick="stat_filtri();" value="-424-">GIBUTI</option
      ><option onclick="stat_filtri();" value="-327-">GIORDANA</option
      ><option onclick="stat_filtri();" value="-220-">GRECA</option
      ><option onclick="stat_filtri();" value="-519-">GRENADA</option
      ><option onclick="stat_filtri();" value="-523-">GUATEMALA</option
      ><option onclick="stat_filtri();" value="-425-">GUINEA</option
      ><option onclick="stat_filtri();" value="-426-">GUINEA-BISSAO</option
      ><option onclick="stat_filtri();" value="-427-">GUINEA-EQUATORIALE</option
      ><option onclick="stat_filtri();" value="-612-">GUYANA</option
      ><option onclick="stat_filtri();" value="-524-">HAITIANA</option
      ><option onclick="stat_filtri();" value="-525-">HONDURAS</option
      ><option onclick="stat_filtri();" value="-998-">IGNOTA</option
      ><option onclick="stat_filtri();" value="-330-">INDIANA</option
      ><option onclick="stat_filtri();" value="-331-">INDONESIANA</option
      ><option onclick="stat_filtri();" value="-333-">IRACHENA</option
      ><option onclick="stat_filtri();" value="-332-">IRANIANA</option
      ><option onclick="stat_filtri();" value="-221-">IRLANDESE</option
      ><option onclick="stat_filtri();" value="-223-">ISLANDESE</option
      ><option onclick="stat_filtri();" value="-703-">ISOLE FIGI</option
      ><option onclick="stat_filtri();" value="-334-">ISRAELIANA</option
      ><option onclick="stat_filtri();" value="-100-">ITALIANA</option
      ><option onclick="stat_filtri();" value="-224-">JUGOSLAVA</option
      ><option onclick="stat_filtri();" value="-356-">KAZAKISTAN</option
      ><option onclick="stat_filtri();" value="-428-">KENYA</option
      ><option onclick="stat_filtri();" value="-361-">KHIRGIZIA</option
      ><option onclick="stat_filtri();" value="-272-">KOSOVARA</option
      ><option onclick="stat_filtri();" value="-335-">KUWAITIANA</option
      ><option onclick="stat_filtri();" value="-336-">LAOTIANA</option
      ><option onclick="stat_filtri();" value="-429-">LESOTHO</option
      ><option onclick="stat_filtri();" value="-248-">LETTONIA</option
      ><option onclick="stat_filtri();" value="-337-">LIBANESE</option
      ><option onclick="stat_filtri();" value="-430-">LIBERIANA</option
      ><option onclick="stat_filtri();" value="-431-">LIBICA</option
      ><option onclick="stat_filtri();" value="-225-">LIECHTENSTEIN</option
      ><option onclick="stat_filtri();" value="-249-">LITUANIA</option
      ><option onclick="stat_filtri();" value="-226-">LUSSEMBURGHESE</option
      ><option onclick="stat_filtri();" value="-253-">MACEDONE</option
      ><option onclick="stat_filtri();" value="-432-">MADAGASCAR</option
      ><option onclick="stat_filtri();" value="-434-">MALAWI</option
      ><option onclick="stat_filtri();" value="-339-">MALDIVE</option
      ><option onclick="stat_filtri();" value="-340-">MALESE</option
      ><option onclick="stat_filtri();" value="-435-">MALI</option
      ><option onclick="stat_filtri();" value="-227-">MALTESE</option
      ><option onclick="stat_filtri();" value="-436-">MAROCCHINA</option
      ><option onclick="stat_filtri();" value="-437-">MAURITANIA</option
      ><option onclick="stat_filtri();" value="-438-">MAURIZIANA</option
      ><option onclick="stat_filtri();" value="-527-">MESSICANA</option
      ><option onclick="stat_filtri();" value="-254-">MOLDOVA</option
      ><option onclick="stat_filtri();" value="-341-">MONGOLIA</option
      ><option onclick="stat_filtri();" value="-270-">MONTENEGRINA</option
      ><option onclick="stat_filtri();" value="-440-">MOZAMBICANA</option
      ><option onclick="stat_filtri();" value="-441-">NAMIBIA</option
      ><option onclick="stat_filtri();" value="-719-">NEOZELANDESE</option
      ><option onclick="stat_filtri();" value="-342-">NEPAL</option
      ><option onclick="stat_filtri();" value="-529-">NICARAGUENSE</option
      ><option onclick="stat_filtri();" value="-442-">NIGER</option
      ><option onclick="stat_filtri();" value="-443-">NIGERIANA</option
      ><option onclick="stat_filtri();" value="-997-">NON DEFINITA</option
      ><option onclick="stat_filtri();" value="-231-">NORVEGESE</option
      ><option onclick="stat_filtri();" value="-232-">OLANDESE</option
      ><option onclick="stat_filtri();" value="-343-">OMAN</option
      ><option onclick="stat_filtri();" value="-344-">PAKISTANA</option
      ><option onclick="stat_filtri();" value="-530-">PANAMENSE</option
      ><option onclick="stat_filtri();" value="-721-">PAPUASIA</option
      ><option onclick="stat_filtri();" value="-614-">PARAGUAY</option
      ><option onclick="stat_filtri();" value="-615-">PERUVIANA</option
      ><option onclick="stat_filtri();" value="-233-">POLACCA</option
      ><option onclick="stat_filtri();" value="-234-">PORTOGHESE</option
      ><option onclick="stat_filtri();" value="-229-"
        >PRINCIPATO DI MONACO</option
      ><option onclick="stat_filtri();" value="-345-">QATAR</option
      ><option onclick="stat_filtri();" value="-446-">RUANDA</option
      ><option onclick="stat_filtri();" value="-235-">RUMENA</option
      ><option onclick="stat_filtri();" value="-245-">RUSSA</option
      ><option onclick="stat_filtri();" value="-532-">SAINT LUCIA</option
      ><option onclick="stat_filtri();" value="-533-">SAINT VINCENT</option
      ><option onclick="stat_filtri();" value="-517-">SALVADOREGNA</option
      ><option onclick="stat_filtri();" value="-236-">SAN MARINESE</option
      ><option onclick="stat_filtri();" value="-448-">SAO TOME'</option
      ><option onclick="stat_filtri();" value="-302-">SAUDITA</option
      ><option onclick="stat_filtri();" value="-449-">SEICELLE</option
      ><option onclick="stat_filtri();" value="-450-">SENEGALESE</option
      ><option onclick="stat_filtri();" value="-271-">SERBA</option
      ><option onclick="stat_filtri();" value="-451-">SIERRA LEONE</option
      ><option onclick="stat_filtri();" value="-346-">SINGAPORE</option
      ><option onclick="stat_filtri();" value="-348-">SIRIANA</option
      ><option onclick="stat_filtri();" value="-255-">SLOVACCA</option
      ><option onclick="stat_filtri();" value="-251-">SLOVENA</option
      ><option onclick="stat_filtri();" value="-453-">SOMALA</option
      ><option onclick="stat_filtri();" value="-239-">SPAGNOLA</option
      ><option onclick="stat_filtri();" value="-311-">SRI LANKA</option
      ><option onclick="stat_filtri();" value="-536-">STATUNITENSE</option
      ><option onclick="stat_filtri();" value="-454-">SUDAFRICANA</option
      ><option onclick="stat_filtri();" value="-455-">SUDANESE</option
      ><option onclick="stat_filtri();" value="-467-">SUDANESE DEL SUD</option
      ><option onclick="stat_filtri();" value="-616-">SURINAME</option
      ><option onclick="stat_filtri();" value="-240-">SVEDESE</option
      ><option onclick="stat_filtri();" value="-241-">SVIZZERA</option
      ><option onclick="stat_filtri();" value="-456-">SWAZILAND</option
      ><option onclick="stat_filtri();" value="-362-">TAGIKISTAN</option
      ><option onclick="stat_filtri();" value="-349-">TAILANDESE</option
      ><option onclick="stat_filtri();" value="-457-">TANZANIA</option
      ><option onclick="stat_filtri();" value="-458-">TOGO</option
      ><option onclick="stat_filtri();" value="-730-">TONGANO</option
      ><option onclick="stat_filtri();" value="-617-">TRINIDAD E TOBAGO</option
      ><option onclick="stat_filtri();" value="-460-">TUNISINA</option
      ><option onclick="stat_filtri();" value="-351-">TURCA</option
      ><option onclick="stat_filtri();" value="-364-">TURKMENISTAN</option
      ><option onclick="stat_filtri();" value="-243-">UCRAINA</option
      ><option onclick="stat_filtri();" value="-461-">UGANDESE</option
      ><option onclick="stat_filtri();" value="-244-">UNGHERESE</option
      ><option onclick="stat_filtri();" value="-618-">URUGUAIANA</option
      ><option onclick="stat_filtri();" value="-357-">UZBEKISTAN</option
      ><option onclick="stat_filtri();" value="-619-">VENEZUELANA</option
      ><option onclick="stat_filtri();" value="-353-">VIETNAMITA</option
      ><option onclick="stat_filtri();" value="-354-">YEMEN</option
      ><option onclick="stat_filtri();" value="-464-">ZAMBIA</option
      ><option onclick="stat_filtri();" value="-465-"
        >ZIMBABWE</option
      ></optgroup
    ></select
  ><select
    onChange="this.options[this.selectedIndex].onclick()"
    name="statocivile"
    id="statocivile"
    ><option value="-">Filtra per stato civile</option
    ><option onclick="stat_filtri();" value="-2">CONIUGATA/CONIUGATO</option
    ><option onclick="stat_filtri();" value="-1">NUBILE/CELIBE</option
    ><option onclick="stat_filtri();" value="-3">VEDOVA/VEDOVO</option
    ><option onclick="stat_filtri();" value="-4"
      >GIA' CONIUGATA/GIA' CONIUGATO</option
    ><option onclick="stat_filtri();" value="-9">IGNOTO/IGNOTO</option></select
  ><select
    onChange="this.options[this.selectedIndex].onclick()"
    name="eta_da"
    id="eta_da"
    ><option onclick="stat_filtri();" value="">Età: da</option
    ><option onclick="stat_filtri();" value="0">0</option
    ><option onclick="stat_filtri();" value="1">1</option
    ><option onclick="stat_filtri();" value="2">2</option
    ><option onclick="stat_filtri();" value="3">3</option
    ><option onclick="stat_filtri();" value="4">4</option
    ><option onclick="stat_filtri();" value="5">5</option
    ><option onclick="stat_filtri();" value="6">6</option
    ><option onclick="stat_filtri();" value="7">7</option
    ><option onclick="stat_filtri();" value="8">8</option
    ><option onclick="stat_filtri();" value="9">9</option
    ><option onclick="stat_filtri();" value="10">10</option
    ><option onclick="stat_filtri();" value="11">11</option
    ><option onclick="stat_filtri();" value="12">12</option
    ><option onclick="stat_filtri();" value="13">13</option
    ><option onclick="stat_filtri();" value="14">14</option
    ><option onclick="stat_filtri();" value="15">15</option
    ><option onclick="stat_filtri();" value="16">16</option
    ><option onclick="stat_filtri();" value="17">17</option
    ><option onclick="stat_filtri();" value="18">18</option
    ><option onclick="stat_filtri();" value="19">19</option
    ><option onclick="stat_filtri();" value="20">20</option
    ><option onclick="stat_filtri();" value="21">21</option
    ><option onclick="stat_filtri();" value="22">22</option
    ><option onclick="stat_filtri();" value="23">23</option
    ><option onclick="stat_filtri();" value="24">24</option
    ><option onclick="stat_filtri();" value="25">25</option
    ><option onclick="stat_filtri();" value="26">26</option
    ><option onclick="stat_filtri();" value="27">27</option
    ><option onclick="stat_filtri();" value="28">28</option
    ><option onclick="stat_filtri();" value="29">29</option
    ><option onclick="stat_filtri();" value="30">30</option
    ><option onclick="stat_filtri();" value="31">31</option
    ><option onclick="stat_filtri();" value="32">32</option
    ><option onclick="stat_filtri();" value="33">33</option
    ><option onclick="stat_filtri();" value="34">34</option
    ><option onclick="stat_filtri();" value="35">35</option
    ><option onclick="stat_filtri();" value="36">36</option
    ><option onclick="stat_filtri();" value="37">37</option
    ><option onclick="stat_filtri();" value="38">38</option
    ><option onclick="stat_filtri();" value="39">39</option
    ><option onclick="stat_filtri();" value="40">40</option
    ><option onclick="stat_filtri();" value="41">41</option
    ><option onclick="stat_filtri();" value="42">42</option
    ><option onclick="stat_filtri();" value="43">43</option
    ><option onclick="stat_filtri();" value="44">44</option
    ><option onclick="stat_filtri();" value="45">45</option
    ><option onclick="stat_filtri();" value="46">46</option
    ><option onclick="stat_filtri();" value="47">47</option
    ><option onclick="stat_filtri();" value="48">48</option
    ><option onclick="stat_filtri();" value="49">49</option
    ><option onclick="stat_filtri();" value="50">50</option
    ><option onclick="stat_filtri();" value="51">51</option
    ><option onclick="stat_filtri();" value="52">52</option
    ><option onclick="stat_filtri();" value="53">53</option
    ><option onclick="stat_filtri();" value="54">54</option
    ><option onclick="stat_filtri();" value="55">55</option
    ><option onclick="stat_filtri();" value="56">56</option
    ><option onclick="stat_filtri();" value="57">57</option
    ><option onclick="stat_filtri();" value="58">58</option
    ><option onclick="stat_filtri();" value="59">59</option
    ><option onclick="stat_filtri();" value="60">60</option
    ><option onclick="stat_filtri();" value="61">61</option
    ><option onclick="stat_filtri();" value="62">62</option
    ><option onclick="stat_filtri();" value="63">63</option
    ><option onclick="stat_filtri();" value="64">64</option
    ><option onclick="stat_filtri();" value="65">65</option
    ><option onclick="stat_filtri();" value="66">66</option
    ><option onclick="stat_filtri();" value="67">67</option
    ><option onclick="stat_filtri();" value="68">68</option
    ><option onclick="stat_filtri();" value="69">69</option
    ><option onclick="stat_filtri();" value="70">70</option
    ><option onclick="stat_filtri();" value="71">71</option
    ><option onclick="stat_filtri();" value="72">72</option
    ><option onclick="stat_filtri();" value="73">73</option
    ><option onclick="stat_filtri();" value="74">74</option
    ><option onclick="stat_filtri();" value="75">75</option
    ><option onclick="stat_filtri();" value="76">76</option
    ><option onclick="stat_filtri();" value="77">77</option
    ><option onclick="stat_filtri();" value="78">78</option
    ><option onclick="stat_filtri();" value="79">79</option
    ><option onclick="stat_filtri();" value="80">80</option
    ><option onclick="stat_filtri();" value="81">81</option
    ><option onclick="stat_filtri();" value="82">82</option
    ><option onclick="stat_filtri();" value="83">83</option
    ><option onclick="stat_filtri();" value="84">84</option
    ><option onclick="stat_filtri();" value="85">85</option
    ><option onclick="stat_filtri();" value="86">86</option
    ><option onclick="stat_filtri();" value="87">87</option
    ><option onclick="stat_filtri();" value="88">88</option
    ><option onclick="stat_filtri();" value="89">89</option
    ><option onclick="stat_filtri();" value="90">90</option
    ><option onclick="stat_filtri();" value="91">91</option
    ><option onclick="stat_filtri();" value="92">92</option
    ><option onclick="stat_filtri();" value="93">93</option
    ><option onclick="stat_filtri();" value="94">94</option
    ><option onclick="stat_filtri();" value="95">95</option
    ><option onclick="stat_filtri();" value="96">96</option
    ><option onclick="stat_filtri();" value="97">97</option
    ><option onclick="stat_filtri();" value="98">98</option
    ><option onclick="stat_filtri();" value="99">99</option
    ><option onclick="stat_filtri();" value="100">100</option
    ><option onclick="stat_filtri();" value="101">101</option
    ><option onclick="stat_filtri();" value="102">102</option
    ><option onclick="stat_filtri();" value="103">103</option
    ><option onclick="stat_filtri();" value="104">104</option
    ><option onclick="stat_filtri();" value="105">105</option
    ><option onclick="stat_filtri();" value="106">106</option
    ><option onclick="stat_filtri();" value="107">107</option
    ><option onclick="stat_filtri();" value="108">108</option
    ><option onclick="stat_filtri();" value="109">109</option
    ><option onclick="stat_filtri();" value="110">110</option
    ><option onclick="stat_filtri();" value="111">111</option
    ><option onclick="stat_filtri();" value="112">112</option
    ><option onclick="stat_filtri();" value="113">113</option
    ><option onclick="stat_filtri();" value="114">114</option
    ><option onclick="stat_filtri();" value="115">115</option
    ><option onclick="stat_filtri();" value="116">116</option
    ><option onclick="stat_filtri();" value="117">117</option
    ><option onclick="stat_filtri();" value="118">118</option
    ><option onclick="stat_filtri();" value="119">119</option
    ><option onclick="stat_filtri();" value="120">120</option></select
  ><select
    onChange="this.options[this.selectedIndex].onclick()"
    name="eta_a"
    id="eta_a"
    ><option onclick="stat_filtri();" value="">Età: a</option
    ><option onclick="stat_filtri();" value="0">0</option
    ><option onclick="stat_filtri();" value="1">1</option
    ><option onclick="stat_filtri();" value="2">2</option
    ><option onclick="stat_filtri();" value="3">3</option
    ><option onclick="stat_filtri();" value="4">4</option
    ><option onclick="stat_filtri();" value="5">5</option
    ><option onclick="stat_filtri();" value="6">6</option
    ><option onclick="stat_filtri();" value="7">7</option
    ><option onclick="stat_filtri();" value="8">8</option
    ><option onclick="stat_filtri();" value="9">9</option
    ><option onclick="stat_filtri();" value="10">10</option
    ><option onclick="stat_filtri();" value="11">11</option
    ><option onclick="stat_filtri();" value="12">12</option
    ><option onclick="stat_filtri();" value="13">13</option
    ><option onclick="stat_filtri();" value="14">14</option
    ><option onclick="stat_filtri();" value="15">15</option
    ><option onclick="stat_filtri();" value="16">16</option
    ><option onclick="stat_filtri();" value="17">17</option
    ><option onclick="stat_filtri();" value="18">18</option
    ><option onclick="stat_filtri();" value="19">19</option
    ><option onclick="stat_filtri();" value="20">20</option
    ><option onclick="stat_filtri();" value="21">21</option
    ><option onclick="stat_filtri();" value="22">22</option
    ><option onclick="stat_filtri();" value="23">23</option
    ><option onclick="stat_filtri();" value="24">24</option
    ><option onclick="stat_filtri();" value="25">25</option
    ><option onclick="stat_filtri();" value="26">26</option
    ><option onclick="stat_filtri();" value="27">27</option
    ><option onclick="stat_filtri();" value="28">28</option
    ><option onclick="stat_filtri();" value="29">29</option
    ><option onclick="stat_filtri();" value="30">30</option
    ><option onclick="stat_filtri();" value="31">31</option
    ><option onclick="stat_filtri();" value="32">32</option
    ><option onclick="stat_filtri();" value="33">33</option
    ><option onclick="stat_filtri();" value="34">34</option
    ><option onclick="stat_filtri();" value="35">35</option
    ><option onclick="stat_filtri();" value="36">36</option
    ><option onclick="stat_filtri();" value="37">37</option
    ><option onclick="stat_filtri();" value="38">38</option
    ><option onclick="stat_filtri();" value="39">39</option
    ><option onclick="stat_filtri();" value="40">40</option
    ><option onclick="stat_filtri();" value="41">41</option
    ><option onclick="stat_filtri();" value="42">42</option
    ><option onclick="stat_filtri();" value="43">43</option
    ><option onclick="stat_filtri();" value="44">44</option
    ><option onclick="stat_filtri();" value="45">45</option
    ><option onclick="stat_filtri();" value="46">46</option
    ><option onclick="stat_filtri();" value="47">47</option
    ><option onclick="stat_filtri();" value="48">48</option
    ><option onclick="stat_filtri();" value="49">49</option
    ><option onclick="stat_filtri();" value="50">50</option
    ><option onclick="stat_filtri();" value="51">51</option
    ><option onclick="stat_filtri();" value="52">52</option
    ><option onclick="stat_filtri();" value="53">53</option
    ><option onclick="stat_filtri();" value="54">54</option
    ><option onclick="stat_filtri();" value="55">55</option
    ><option onclick="stat_filtri();" value="56">56</option
    ><option onclick="stat_filtri();" value="57">57</option
    ><option onclick="stat_filtri();" value="58">58</option
    ><option onclick="stat_filtri();" value="59">59</option
    ><option onclick="stat_filtri();" value="60">60</option
    ><option onclick="stat_filtri();" value="61">61</option
    ><option onclick="stat_filtri();" value="62">62</option
    ><option onclick="stat_filtri();" value="63">63</option
    ><option onclick="stat_filtri();" value="64">64</option
    ><option onclick="stat_filtri();" value="65">65</option
    ><option onclick="stat_filtri();" value="66">66</option
    ><option onclick="stat_filtri();" value="67">67</option
    ><option onclick="stat_filtri();" value="68">68</option
    ><option onclick="stat_filtri();" value="69">69</option
    ><option onclick="stat_filtri();" value="70">70</option
    ><option onclick="stat_filtri();" value="71">71</option
    ><option onclick="stat_filtri();" value="72">72</option
    ><option onclick="stat_filtri();" value="73">73</option
    ><option onclick="stat_filtri();" value="74">74</option
    ><option onclick="stat_filtri();" value="75">75</option
    ><option onclick="stat_filtri();" value="76">76</option
    ><option onclick="stat_filtri();" value="77">77</option
    ><option onclick="stat_filtri();" value="78">78</option
    ><option onclick="stat_filtri();" value="79">79</option
    ><option onclick="stat_filtri();" value="80">80</option
    ><option onclick="stat_filtri();" value="81">81</option
    ><option onclick="stat_filtri();" value="82">82</option
    ><option onclick="stat_filtri();" value="83">83</option
    ><option onclick="stat_filtri();" value="84">84</option
    ><option onclick="stat_filtri();" value="85">85</option
    ><option onclick="stat_filtri();" value="86">86</option
    ><option onclick="stat_filtri();" value="87">87</option
    ><option onclick="stat_filtri();" value="88">88</option
    ><option onclick="stat_filtri();" value="89">89</option
    ><option onclick="stat_filtri();" value="90">90</option
    ><option onclick="stat_filtri();" value="91">91</option
    ><option onclick="stat_filtri();" value="92">92</option
    ><option onclick="stat_filtri();" value="93">93</option
    ><option onclick="stat_filtri();" value="94">94</option
    ><option onclick="stat_filtri();" value="95">95</option
    ><option onclick="stat_filtri();" value="96">96</option
    ><option onclick="stat_filtri();" value="97">97</option
    ><option onclick="stat_filtri();" value="98">98</option
    ><option onclick="stat_filtri();" value="99">99</option
    ><option onclick="stat_filtri();" value="100">100</option
    ><option onclick="stat_filtri();" value="101">101</option
    ><option onclick="stat_filtri();" value="102">102</option
    ><option onclick="stat_filtri();" value="103">103</option
    ><option onclick="stat_filtri();" value="104">104</option
    ><option onclick="stat_filtri();" value="105">105</option
    ><option onclick="stat_filtri();" value="106">106</option
    ><option onclick="stat_filtri();" value="107">107</option
    ><option onclick="stat_filtri();" value="108">108</option
    ><option onclick="stat_filtri();" value="109">109</option
    ><option onclick="stat_filtri();" value="110">110</option
    ><option onclick="stat_filtri();" value="111">111</option
    ><option onclick="stat_filtri();" value="112">112</option
    ><option onclick="stat_filtri();" value="113">113</option
    ><option onclick="stat_filtri();" value="114">114</option
    ><option onclick="stat_filtri();" value="115">115</option
    ><option onclick="stat_filtri();" value="116">116</option
    ><option onclick="stat_filtri();" value="117">117</option
    ><option onclick="stat_filtri();" value="118">118</option
    ><option onclick="stat_filtri();" value="119">119</option
    ><option onclick="stat_filtri();" value="120">120</option></select
  ><input
    type="hidden"
    id="filtro_attuale"
    value="millefoglie/statistiche/scheda/QUARTIERE-POPOLA-1$2$---2-3--"
  /><a
    onclick=""
    style="position:absolute;top:-1000px;left:-1000px;"
    id="href_filtra"
    ><span
      style="font-size:1.3em;font-weight:bold;padding:3px;background-color:#054B81;color:#ffffff;margin-left:10px"
      >Filtra</span
    ></a
  >
</div>
<table class="sticky-enabled">
  <thead>
    <tr>
      <th rowspan="2" style="text-align:center">Quartiere</th>
      <th colspan="3" style="text-align:center">Popolazione</th>
    </tr>
    <tr>
      <th ="" style="text-align:center">Maschi</th>
      <th ="" style="text-align:center">Femmine</th>
      <th ="" style="text-align:center">Totale</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td valign='"top"' rowspan="1">
        S. MARCO, CASTELLO, S. ELENA, CANNAREGIO
      </td>
      <td style="text-align:right">171</td>
      <td style="text-align:right">156</td>
      <td style="text-align:right">327</td>
    </tr>
    <tr class="even">
      <td valign='"top"' rowspan="1">
        DORSODURO, S. POLO, S. CROCE, GIUDECCA, SACCA FISO
      </td>
      <td style="text-align:right">105</td>
      <td style="text-align:right">118</td>
      <td style="text-align:right">223</td>
    </tr>
    <tr class="odd">
      <td style="font-weight:bold" valign='"top"' rowspan="1">TOTALI</td>
      <td style="font-weight:bold;text-align:right">276</td>
      <td style="font-weight:bold;text-align:right">274</td>
      <td style="font-weight:bold;text-align:right">550</td>
    </tr>
  </tbody>
</table>
<em>Dati aggiornati al 27/08/2020</em><br />Fonte dei dati: Comune di Venezia -
Anagrafe della popolazione residente
```

[millevoglie]: https://portale.comune.venezia.it/millefoglie/statistiche/scheda/
