const container = document.querySelector(".container");
const questionBox = document.querySelector(".question");
const choicesBox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");
const scoreCard = document.querySelector(".scoreCard");
const alert = document.querySelector(".alert");
const startBtn = document.querySelector(".btnStart");
const timer = document.querySelector(".timer");

// make an array of objects thats stores question choices of answers
const quiz = [
  {
    question:
      "Q. Which of the following statements is incorrect about XPoSat ?\n1.NASA has launched XPoSat, short for X-ray Polarimeter Satellite.\n2. During the mission, the PSLV Orbital Experimental Module-3(POEM-3) experiment was executed to meet the objective of 10 other payloads.",
    choices: ["1 Only", "2 Only", "Both", "none"],
    answer: "1 Only",
  },
  {
    question:
      "Q.Which of the following statements is correct about  All India Judicial Services(AIJS)? \n1. Article 233 of the Constitution Provides for the  creation of an AIJS. \n2. Is says district judges will get recruited centrally through an all-India examination",
    choices: ["1 Only", "2 Only", "Both", "none"],
    answer: "2 Only",
  },
  {
    question:
      "Q.Which of the following statements are true ? \n1.Hornbill festival is a Critically Endangered Bird. \n2.Hornbill bird is the state bird of Nagaland.",
    choices: ["1 Only", "2 Only", "Both", "none"],
    answer: "both",
  },
  {
    question:
      "Q. The objective of the programme is to celebrate, reaffirm and rediscover the age-old links between Tamil Nadu and Kashi - two of the country's ancient seats of learning. \n How many of the above statements is/are Incorrect?",
    choices: ["Only two", "All three", "Only One", "None"],
    answer: "Only One",
  },
  {
    question:
      "Q. Pi Day is also known as International Day of Mathematics on December 22 every year to recognize the mathematical constant, Pi. \n Which of the statements given above is/are incorrect ? ",
    choices: ["1 Only", "2 and 3 Only", "2 Only", "1 and 3 Only"],
    answer: "1 and 3 Only",
  },
  {
    question:
      "Q. With Reference to START Treaty Consider the Following. \n1. Strategic Arms Reduction Treaty”, known as START-I, was signed between the US and the erstwhile USSR in 1991, and came into force in 1994. \n2. START-I, capped the numbers of nuclear warheads and intercontinental ballistic missiles (ICBMs) that each side could deploy at 6,000 and 1,600 respectively. \n3. START treaty lapsed in 2010 and was replaced first by the Strategic Arms Limitation Treaty  (SALT) and then by the New START treaty.",
    choices: ["1 & 2 Only", "2 Only", "3 Only", "All are correct"],
    answer: "3 Only",
  },
  {
    question:
      "Q.Consider the following statements regarding “Index of Industrial Production (IIP)”: 1. IIP is a composite indicator that measures changes in the volume of production of a basket of industrial products. \n2. The Base year of IIP is 2011–12. \n3. It is measured by the Office of Economic Advisor",
    choices: ["1 Only", "2 Only", "3 Only", "None"],
    answer: "2 Only",
  },
  {
    question:
      "Q. Consider the following statements regarding Loss and Damage funds. \n1. The fund has been created at COP 28-Dubai. \n2. It will be managed by the World Bank. \n3. It will have initial funding of $475 billion. \nWhich of the Above Statements are Incorrect?",
    choices: ["1 & 2 Only", "2 & 3 Only", "1 & 3 Only", "3 Only"],
    answer: "3 Only",
  },
  {
    question:
      "Q. Consider the following statements regarding the Green Credit Programme. \n1.India’s Green Credits Programme is a market-based mechanism to incentivize voluntary environmental actions across diverse sectors. \n2. It was first announced in the Union Budget 2023-24 and launched by the Environment Ministry in October 2023. \nWhich of the Above Statements are correct?",
    choices: ["1 Only", "2 Only", "Both", "None"],
    answer: "Both",
  },
  {
    question:
      "Q. Which of the following is not part of India’s Panchamrit Climate strategy?",
    choices: [
      " Reduce Carbon Emissions by 1 billion tonnes by 2030",
      "Meet 50% of energy requirement from renewable sources by 2030",
      " Non fossil energy production by 500 GW by 2030",
      "Become net zero emitter by 2030",
    ],
    answer: "Become net zero emitter by 2030",
  },
  {
    question:
      "Q. Widespread resistance of malarial parasites to drugs like chloroquine has prompted attempts to develop a malaria vaccine to combat malaria. Why is it difficult to develop an effective malaria vaccine?",
    choices: [
      "Malaria is caused by several species of Plasmodium",
      "Man does not develop immunity to malaria during natural infection",
      "Vaccines can be developed only against bacteria",
      "Man is only an intermediate host and not the definitive host",
    ],
    answer: "Man does not develop immunity to malaria during natural infection",
  },
  {
    question:
      "Q. Which of the following statements are correct about Section 6A of the Citizenship Act? \n1. Immigrants who entered Assam before 1 January 1966 would be considered Indian citizens and were allowed to vote. \n2. Immigrants who entered Assam after 1 January 1966 but before 24 March 1971 will be detected as “foreigners” and will be deported out of India",
    choices: ["1 Only", "2 Only", "Both", "None"],
    answer: "1 Only",
  },
  {
    question:
      "Q.Immigrants who entered Assam after 1 January 1966 but before 24 March 1971 will be detected as “foreigners”. But they would have the opportunity to register themselves according to rules made by the Central Government.",
    choices: [
      "Environment Protection",
      "Nuclear proliferation",
      "Ozone layer depletion",
      "Welfare of people with disability",
    ],
    answer: "Welfare of people with disability",
  },
  {
    question:
      "Q.With reference to the Coalition for Disaster Resilient Infrastructure (CDRI), consider the following statements: \n1. It is an intergovernmental organization with the objective of promoting the resilience of infrastructure systems to climate and disaster risks. \n2. The policies, standards and other outputs of CDRI would be binding on its members. \nWhich of the statements given above is/are correct?",
    choices: ["1 Only", "2 Only", "Both", "None"],
    answer: "None",
  },
  {
    question:
      "Q.Which of the following statements about the aim of the United Nations are true? \n1. To foster a mutual appreciation for each other’s culture and literature amongst the nations.\n2. To achieve international cooperation in solving problems of economic, social, cultural and humanitarian character.\n3. To foster relations between scholars and academics in different countries. \n4. To organise international conferences. ",
    choices: ["1 Only", "1, 2 and 4", "2 Only", "1, 2 and 3"],
    answer: "2 Only",
  },
  {
    question:
      "Q.With reference to Climate Club, consider the following statements: \n1. The Climate Club is an intergovernmental forum that aims to mitigate climate change by reducing carbon emissions .\n2. It was first proposed by Brazil during a G7 summit meeting in 2022. \n3. Climate Club is a group of 36 nations in which India is included.  \nHow many of the above statements is/are correct?",
    choices: ["Only One", "Only two", "all three", "None"],
    answer: "Only One",
  },
  {
    question:
      "Q.Which of the following statements are correct about the deposits of ‘methane hydrate? \n1. Global warming might trigger the release of methane gas from these deposits. \n2. Large deposits of ‘methane hydrate’ are found in Arctic Tundra and under the seafloor. \n3. Methane in the atmosphere oxidised to carbon dioxide after a decade or two.Select the correct answer using the code given below.",
    choices: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    answer: "1, 2 and 3",
  },
  {
    question:
      "Q. Consider the following statements regarding the Bt Cotton: \n1. It is an insect-resistant transgenic crop that can combat the bollworm. \n2. It is the only Genetically modified (GM) crop which is yet to be approved in India. \nWhich of the statements given above is/are correct?",
    choices: ["1 Only", "2 Only", "Both", "None"],
    answer: "1 Only",
  },
  {
    question:
      "Q.With reference to Piezoelectric Effect, consider the following statements: \n1. It is the ability of certain materials to generate an electric charge in response to applied mechanical stress. \n2. One of the unique characteristics of the piezoelectric effect is that it is irreversible. \nWhich of the statements given above is/are correct?",
    choices: ["1 Only", "2 Only", "Both", "None"],
    answer: "1 Only",
  },
  {
    question:
      "Q.Consider the following with respect to ‘National Medical Commission (NMC)’ \n1. It has been constituted via a resolution of the Union Cabinet. \n2. Involved in formulating policies related to medical education and profession. \n3. NMC operates under the Ministry of Health and Family Welfare. \nSelect the correct statement(s)",
    choices: ["1 and 2 Only", "2 and 3 Only", "1 and 3 Only", "All the above"],
    answer: "2 and 3 Only",
  },
  {
    question:
      "Q.With reference to 'Initiative for Nutritional Security through Intensive Millets Promotion', which of the following statements is/are correct? \n1. This initiative aims to demonstrate the improved production and post-harvest technologies and to demonstrate value addition techniques, in an integrated manner, with cluster approach.\n2. Poor, small, marginal and tribal farmers have a larger stake in this scheme. \n3. An important objective of the scheme is to encourage farmers of commercial crops to shift to millet cultivation by offering them free kits of critical inputs of nutrients and micro-irrigation equipment. \nSelect the correct answer using the code given below",
    choices: ["1 Only", "2 and 3 Only", "1 and 2 Only", "1 , 2 and 3"],
    answer: "1 and 2 Only",
  },
  {
    question:
      "Q. With reference to the Organizations of Petroleum Exporting Countries (OPEC), consider the following statements: \n1. OPEC was established in 1960 by founding members- Iran, Iraq, Kuwait, Saudi Arabia and Angola. \n2. The main emphasis of OPEC is on production and control over prices of petroleum. \n3. Recently Angola decided to pull out of OPEC amid a dispute over oil production quotas. \nHow many of the statements given above is/are correct?",
    choices: ["Only One", "Only two", "all three", "None"],
    answer: "Only two",
  },
  {
    question:
      "Q. Which of the following are correctly arranged regarding their time of addition into UNESCO's list of intangible cultural heritage?\n1. Garba \n2. Durga Puja \n3. Kalbelia folk songs and dance of Rajasthan \n4. Ramlila \nChoose from the following options ",
    choices: ["4-3-2-1", "1-2-4-3", "3-4-2-1", "4-3-1-2"],
    answer: "4-3-2-1",
  },
  {
    question:
      "Q. Consider the following statements about Multimodal Artificial Intelligence (AI) \n1. It refers to the integration of multiple modes of information or sensory data to facilitate human-like reasoning and decision-making. \n2. Gemini is a multimodal large language model being developed by OpenAI.\n3. Gemini is the 2nd AI model to outperform human experts on the Massive Multitask Language Understanding (MMLU) benchmark. \nHow many of the statements given above is/are correct?",
    choices: ["All three", "Only two", "None", "Only one"],
    answer: "Only one",
  },
  {
    question:
      "Q.Consider the following statements regarding Article 99 of the United Nations (UN) Charter, \n1. The article allows the UN Secretary-General to bring to the attention of the UNSC any matter that may threaten international peace and security.\n2. It is the Fourth instance that this provision has been invoked since the inception of the UN. \n3. When this article is invoked, the President of the UN Security Council is under the obligation to call a meeting of the Security Council. \n4. Recently by invoking it, the Secretary General urged the UNSC for a humanitarian pause in Gaza. \nHow many of the statements given above is/are correct?",
    choices: ["Only One", "Only Two", "Only Three", "All four"],
    answer: "Only Three",
  },
  {
    question:
      "Q.Consider the following statements about Pompe disease: \n1. It is a common acquired disorder caused by a deficiency of the enzyme acid alpha-glucosidase (GAA). \n2. There is currently no cure for Pompe disease, but there are treatments to manage symptoms and enhance patient’s quality of life. \n3. Enzyme Replacement Therapy (ERT) is a common treatment method that entails infusing the deficient enzyme to mitigate glycogen accumulation.\nWhich of the above statements is/are incorrect?",
    choices: ["1 Only", "2 Only", "1 and 3 Only", "3 Only"],
    answer: "1 Only",
  },
  {
    question:
      "Q. Consider the following statements about National Human Rights Commission: \n1. The National Human Rights Commission of India is a constitutional body. \n2. It was established in conformity with the Paris Principles, adopted for the promotion and protection of human rights in Paris (October, 1991). \n3. It has been amended by the Protection of Human Rights (Amendment) Act, 2006, and Human Rights (Amendment) Act, 2019. \nWhich of the above statements is/are correct?",
    choices: ["1 Only", "2 Only", "3 Only", "2 and 3 Only"],
    answer: "3 Only",
  },
  {
    question:
      "Q.Consider the following statements about Rohingyas: \n1. Rohingya is ethnic minority group, largely comprising Muslims living primarily in Myanmar’s western Rakhine state. \n2. According to United Nations, the Rohingya crisis is majorly a result of ethnic cleansing being done by the Myanmar state. \n3. Rohingyas are recognized as an official ethnic group.\n4. They speak Bengali dialect, as opposed to commonly spoken burmese language in Myanmar. \nHow many of the statements given above is/are correct?",
    choices: ["Only One", "Only Two", "Only Three", "All four"],
    answer: "Only Three",
  },
  {
    question:
      "Q. Consider the following statements about the Free Movement Regime: \n1. Free Movement Regime (FMR) was implemented in 2018 as part of India's Act East policy. \n2. The Free Movement Regime (FMR), allows people residing on either side of the India-Myanmar border to venture 16 km into each other’s territory without visa. \n3. They can cross over, on production of a border pass with one-year validity and can stay up to one week. \nWhich of the above statements is/are incorrect?",
    choices: ["1 Only", "2 Only", "1 and 3 Only", "3 Only"],
    answer: "3 Only",
  },
  {
    question:
      "Q. Consider the following statements about Asia-Pacific Economic Cooperation (APEC): \n1. Asia-Pacific Economic Cooperation (APEC) is a regional forum founded by Bob Hawke.\n2. The headquarters of the Forum is in Malaysia. \n3. The APEC 2023 summit's theme was 'Creating a Resilient and Sustainable Future for All'.\n4. India currently has the 'observer' status. \nHow many of the statements given above is/are correct?",
    choices: ["Only One", "Only Two", "Only Three", "All four"],
    answer: "Only Three",
  },
  {
    question:
      "Q. Arrange the following events in a chronological order and select the correct answer from the codes given below: \nI. Maharaja Hari Singh signed the Instrument of Accession. \nII. The Constitution of India was enforced. \nIII. Accession to India ratified by the Sovereign Constituent Assembly of Jammu and Kashmir. \nIV. New Constitution of the State of Jammu and Kashmir came into force",
    choices: [
      " I, III, IV, II ",
      " III, IV, II, I",
      " I, II, III, IV",
      "II, I, III, IV",
    ],
    answer: "I, II, III, IV ",
  },
  {
    question:
      "Q.Consider the following statements with respect to NAMO Drone Didi Scheme: \n1. It is a Central Sponsored Scheme. \n2. It aims to Make Women as Pioneers of Agricultural Revolution. \n3. Duration of the scheme-2023-24 to 2025-2026. \n4. The scheme will augment and ensure effective fertigation through new emerging liquid fertilizers like Nano Urea and Nano DAP. \nHow many of the above statements are incorrect?",
    choices: ["Only One", "Only Two", "Only Three", "All four"],
    answer: "Only One",
  },
  {
    question:
      "Q. . Which of the following statements about the Olive ridley Turtles is/are correct? \n1. They are the smallest and most scarce of all sea turtles found in the world.They live in warm waters of Pacific, Atlantic and Indian ocean \n3. The Coromandel coast in India is the largest mass nesting site for the olive ridley turtles. \n4. They are categorized as Least Concern in the IUCN Red List. \nHow many of the above statements are incorrect?",
    choices: ["Only One", "Only Two", "Only Three", "All four"],
    answer: "Only Three",
  },
  {
    question:
      "Q.With reference to the Civil Aviation Sector of India, consider the following statements: \n1. India is currently the 7th largest civil aviation market in the world. \n2. UDAN Scheme is an innovative scheme to develop the regional aviation market. \n3. The scheme creates affordability yet economically viable and profitable flight on regional routes. \nWhich of the statements given above is/are correct?",
    choices: ["1,2 Only", "2 Only", "2 and 3 Only", "1,2 and 3"],
    answer: "1,2 and 3",
  },
  {
    question:
      "Q. Consider the following statements with respect to ‘Ethanol’ \n1. Ethanol is an agricultural by-product obtained from sources such as rice husks or maize \n2. It aids in more complete combustion, lowers emissions, and improves the fuel’s environmental performance \n3. All vehicles in India will have E20 (20% ethanol in petrol) compatible material by 2030. \n4. Flex-fuel vehicles (FFV) have engines that can run on flexible fuel, which can include up to 100% ethanol. \nHow many of the above statements are correct?",
    choices: ["Only One", "Only Two", "Only Three", "All four"],
    answer: "Only Three",
  },
  {
    question:
      "Q.Consider the following statements with respect to Fixed dose combination (FDC): \n1. Fixed dose combination (FDC) drugs are those which contain a combination of two or more active pharmaceutical ingredients (APIs) in a fixed ratio. \n2. Last year the Centre banned 14 fixed dose combination (FDC) drugs in the country under section 26 A of the Indian Medical Council Act, 1956. \n3. FDC Draft Guidelines are issued by Central Drugs Standard Control Organization (CDSCO), Directorate General of Health Services, Government of India. \nWhich of the above statements is/are correct? ",
    choices: ["1 and 2 Only", "2 and 3 Only", "1 and 3 Only", "All of above"],
    answer: "1 and 3 Only",
  },
  {
    question:
      "Q. Which of the following statements is not correct as per the Climate Change Performance Index (CCPI)? ",
    choices: [
      "India has jumped 1 spot higher in CCPI-2024",
      "India is placed at the 7th rank in CCPI-2024",
      "ndia is amongst the top 5 best performing countries in the world on climate change",
      "India is placed lower in rank in this index than Sweden and Norway",
    ],
    answer:
      "India is placed lower in rank in this index than Sweden and Norway",
  },
  {
    question:
      "Q.Which one of the following statements best describes the role of B cells and T cells in the human body?",
    choices: [
      "They protect the body from environmental allergens",
      "They alleviate the body's pain and inflammation",
      "They act as immunosuppressants in the body",
      "They protect the body from the diseases caused by pathogens.",
    ],
    answer: "They protect the body from the diseases caused by pathogens.",
  },
  {
    question:
      "Q.With reference to the Central Drugs Standard Control Organisation (CDSCO), consider the following statements: \n1. CDSCO under Directorate General of Health Services, Union Ministry of Health is the National Regulatory Authority (NRA) of India. \n2. Under the Drugs & Cosmetics Act, 1940, CDSCO is responsible for approval of Drugs, Conduct of Clinical Trials, laying down the standards for Drugs, control over the quality of imported Drugs in the country. \n3. CDSCO is also responsible for regulating the prices of essential medicines. \nHow many of the statements given above are incorrect?",
    choices: ["Only One", "Only Two", "Only Three", "None"],
    answer: "Only One",
  },
  {
    question:
      "Q. Consider the following statements with respect to ‘Global Partnership on Artificial Intelligence (GPAI)’: \n1. It is a multi-stakeholder initiative which aims to bridge the gap between theory and practice on AI by supporting cutting-edge research and applied activities on AI-related priorities.\n2. The secretariat of GPAI is hosted at the G-20 and India is a founding member. \n3. It has two Centers of Expertise: One in Montreal and another in Paris. \n4. It was launched in June 2020. \nHow many of the statements given above are correct?",
    choices: ["Only One", "Only Two", "Only Three", "All four"],
    answer: "Only Three",
  },
  {
    question:
      "Q.Consider the following statements with respect to New Pension Scheme and Old Pension Scheme: \n1. National Pension Scheme (NPS) is regulated and administered by the Central Pension Accounting Office (CPAO). \n2. The Central Government introduced the National Pension System (NPS) with effect from January 2004 except for armed forces and .\n3. The old pension scheme used to give a fixed yearly income to government employees after retirement. \n4. Under the Old Pension Scheme (OPS), there was the provision of the General Provident Fund (GPF).\nWhich of the above statements is/are incorrect?",
    choices: ["1 and 2 only", " 1 and 3 only", " 2 and 3 only", " 4 only"],
    answer: "1 and 3 only",
  },
  {
    question:
      "Q. With reference to ‘Shanghai Cooperation Organisation’, consider the following statements: \n1. It is the world’s largest regional organization in terms of geographic scope and population\n2. The official working languages of SCO are Chinese and English\n3. The Council of Heads of State is the top decision-making body in the SCO. \nHow many of the above statements is/are correct?",
    choices: ["Only One", "Only Two", "Only Three", "None"],
    answer: "Only Two",
  },
  {
    question:
      "Q.Consider the following statements regarding the Saiga antelope: \n1. It is a large migratory herbivore species.\n2. It is mainly found in the steppe grasslands and semi-arid desert region. \n3. Saiga tatarica mongolica has been recently categorized as near threatened in IUCN Red data book. \nHow many of the above statements are incorrect? ",
    choices: ["Only One", "Only Two", "Only Three", "None"],
    answer: "Only One",
  },
  {
    question:
      "Q. Consider the following statements regarding ‘Kashi Tamil Sangamam’: \n1. This programme is part of the Swadesh Darshan Scheme. \n2. IIT Madras and Banaras Hindu University (BHU) are the two implementing agencies for this programme. \n3. The objective of the programme is to celebrate, reaffirm and rediscover the age-old links between Tamil Nadu and Kashi - two of the country’s ancient seats of learning.\nHow many of the above statements is/ are incorrect?",
    choices: ["Only One", "Only Two", "Only Three", "None"],
    answer: "Only One",
  },
  {
    question:
      "Q.. Consider the following statements regarding Operation Vijay: \n1. It was launched to liberate Portuguese territories in India. \n2. It was executed by all the three sections of the Indian armed forces.\n3. It was launched during the prime ministership of Lal Bahadur shastri. \nHow many of the above statements is/ are correct?",
    choices: ["Only One", "Only Two", "Only Three", "None"],
    answer: "Only Two",
  },
  {
    question:
      "Q. With reference to the Arctic Council, consider the following statements: \n1. The eight Arctic States are - Canada, Denmark,Finland, Iceland, Norway, Russia, Sweden and the United Kingdom.\n2. The Council was established by the eight Arctic States through the Svalbard Declaration of 1996. \n3. The Arctic Council has it’s permanent secretariat at Tromso, Norway. \n4. India got observer status at the Kiruna Ministerial Meeting in 2013.\nHow many of the above statements is/ are correct?",
    choices: ["Only One", "Only Two", "Only Three", "None"],
    answer: "Only Two",
  },
  {
    question:
      "Q. With respect to the Places of Worship (Special Provisions) Act, 1991, which of the following statements is incorrect?",
    choices: [
      "The Act prohibits conversion of any place of worship.",
      "The Act provides for the maintenance of the religious character of any place of worship as it existed on the day of commencement of this Act.",
      "Nothing contained in this Act shall apply to the Ram Janma Bhumi-Babri Masjid situated in Ayodhya.",
      "The Act also exempted any place of worship that is covered by the Ancient Monuments and Archaeological Sites and Remains Act, 1958",
    ],
    answer:
      "The Act provides for the maintenance of the religious character of any place of worship as it existed on the day of commencement of this Act.",
  },
  {
    question:
      "Q.Consider the following statements with refer to Terms of Trade (ToT): \n1. Terms of trade can be simply described as the relationship between how much money a country pays for its imports and how much money it brings in from its exports.\n2. The ratio is calculated by dividing the price of the exports by the price of the imports and multiplying the result by 100.\nWhich of the statements given above is/are correct?",
    choices: ["1 Only", "2 Only", "Both", "None"],
    answer: "Both",
  },
  {
    question:
      "Q.Who among the following, from Assam, has been conferred with Jnanpith Award?\n1. Birendra Kumar Bhattacharya \n2. Homen Borgohain \n3. Mamoni Roisom Goswami",
    choices: ["1 Only", "1 and 2 Only", "1 and 3 Only", "1, 2 and 3 Only"],
    answer: "1 and 3 Only",
  },
  {
    question:
      "Q.With reference to Bharatiya Nyaya Sanhita Bill Act, 2023 (BNS), consider the following statements: \n1. BNS introduces Clause 69 that seems to ostensibly tackle the love jihad narrative by criminalizing deceitful promise to marry.\n2. BNS provisions codify offences linked to mob lynching and hate-crime murders.\n3. BNS brings terrorism under the ambit of ordinary criminal law.\n4. Erstwhile Section 124A was changed to Rajdroh with a wider definition. \nHow many of the above statements are correct?",
    choices: ["Only One", "Only Two", "Only Three", "All four"],
    answer: "Only Three",
  },
  {
    question:
      "Q.4. Consider the following statements regarding CIBIL (Credit Information Bureau (India) Limited) score:\n1. It is a three-digit numeric summary of your credit history.\n2. Lenders can check the CIBIL report and CIBIL Score/CIBIL Rank to evaluate the risk of lending to applicants and accordingly approve or reject new loan/credit card applications.\nWhich of the statements given above is/are correct?",
    choices: ["1 Only", "2 Only", "1 and 2 Both", "Neither 1 nor 2"],
    answer: "1 and 2 Both",
  },
  {
    question:
      "Q.Consider the following statements regarding the Raising & Accelerating MSME Performance (RAMP) programme:\n1. It aims to improve access to market and credit for MSMEs in India.\n2. It is an IMF assisted Central Sector Scheme.\nWhich of the statements given above is/are incorrect?",
    choices: ["1 Only", "2 Only", "1 and 2 Both", "None"],
    answer: "2 Only",
  },
  {
    question:
      "Q.With reference to the MSME Sustainable (ZED) Certification Scheme, consider the following statements: \n1. This Scheme is an extensive drive to enable and facilitate MSMEs adopt Zero Defect Zero Effect (ZED) practices. \n2. For ZED certification, women-led MSMEs have to pay Rs. 10,000 compulsory registration fee. \nWhich of the statements given above is/are correct? ",
    choices: ["1 Only", "2 Only", "1 and 2 Both", "None"],
    answer: "1 Only",
  },
  {
    question:
      "Q. Consider the following statements with respect to Republic Day:\n1. The first Chief Guest of the parade in 1950 was President Sukarno of Indonesia.\n2. The selection process for the chief guest starts six months in advance of the Republic Day.\n3. Till date, no chief guest for Republic day has been invited from Pakistan.\nWhich of the statements given above is/are incorrect?",
    choices: ["1 Only", "2 Only", "3 Only", "2 and 3 Only"],
    answer: "3 Only",
  },
  {
    question:
      "Q.With respect to International Thermonuclear Experimental Reactor (ITER), consider the following statements:\n1. It is an international collaborative project for advancing magnetic fusion that includes 35 countries.\n2. International Thermonuclear Experimental Reactor (ITER) cryostat, that is, a chamber that can maintain very low temperatures is manufactured by China.\nWhich of the statements given above is/are incorrect?",
    choices: ["1 Only", "2 Only", "Both", "None"],
    answer: "2 Only",
  },
  {
    question:
      "Q.With respect to Nuclear Power Strategy of India, consider the following statements:\n1. The 3 Stage Nuclear Program in India was developed by the late H. J. Bhabha.\n2. India has a large amount of the World's Uranium reserves.\n3. The third and final stage of India’s nuclear program involves the use of thorium-based reactors fuelled by uranium.\nWhich of the above statements is/are incorrect?",
    choices: ["2 and 3 Only", "2 Only", "3 Only", "1,2 and 3"],
    answer: "2 Only",
  },
  {
    question:
      "Q.Which of the following statements are correct regarding 'Chatra Diwas' 2023?\n1. It was observed on 31st March. \n2. It is observed on the death anniversary of Bodofa Upendranath Brahma.\n3. As a tribute to Bodofa Upendranath Brahma, CM of Assam appealed to the students to learn at least two ethnic languages as a mark of respect to the great soul.\n4. Funds to the tune of Rs. 50,000 under the Abhinandan scheme as government subsidy was disbursed to students pursuing higher education by taking educational loans.\nHow many of the above statements is/are correct?",
    choices: ["Only One", "Only Two", "Only Three", "Only Four"],
    answer: "Only Two",
  },
  {
    question:
      "Q. Consider the following statements regarding Guru Gobind Singh: \n1. He succeeded Guru Tegh Bahadur.\n2. He founded the principles of Khalsa or the Five ‘K’s. \n3. The holy book Guru Granth Sahib was named by him. \n4. Sahibzada Zorawar Singh and Sahibzada Fateh Singh, sons of Sri Guru Gobind Singh, attained martyrdom by the execution order of Jahangir. \nHow many of the above statements is/are correct?",
    choices: ["Only One", "Only Two", "Only Three", "Only Four"],
    answer: "Only Three",
  },
  {
    question:
      "Q.With respect to Dark Matter, consider the following statements:\n1. Only 5% of the universe is made up of all matter and 27% is dark matter and 68% dark energy, that is, 95% of the total mass energy content.\n2. Dark matter is made up of particles that do not have a charge.\nWhich of the above statement(s) is/are correct?",
    choices: ["1 Only", "2 Only", "Both", "None"],
    answer: "Both",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 120;
let timerID = null;

const showQuestions = () => {
  const questionDetails = quiz[currentQuestionIndex];
  questionBox.innerHTML = questionDetails.question.replace(/\n/g, "<br>");

  choicesBox.textContent = "";
  for (let i = 0; i < questionDetails.choices.length; i++) {
    const currentChoice = questionDetails.choices[i];
    const choiceDiv = document.createElement("div");
    choiceDiv.textContent = currentChoice;
    choiceDiv.classList.add("choice");
    choicesBox.appendChild(choiceDiv);

    choiceDiv.addEventListener("click", () => {
      if (choiceDiv.classList.contains("selected")) {
        choiceDiv.classList.remove("selected");
      } else {
        choiceDiv.classList.add("selected");
      }
    });
  }
  if (currentQuestionIndex < quiz.length) {
    startTimer();
  }
};
//function to check answer

const checkAnswer = () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
    displayAlert("Correct Answer cutie");
    score++;
  } else {
    displayAlert(
      `Wrong Answer ! ${quiz[currentQuestionIndex].answer} is the Correct Answer`
    );
  }

  timeLeft = 120;
  currentQuestionIndex++;
  if (currentQuestionIndex < quiz.length) {
    showQuestions();
  } else {
    showScore();
    stopTime();
  }
};

// function to show score
const showScore = () => {
  questionBox.textContent = "";
  choicesBox.textContent = "";
  scoreCard.textContent = `You scored ${score} out of ${quiz.length} cutie`;
  displayAlert("You have completed the Quiz.. ");
  nextBtn.textContent = "Play Again";
  quizOver = true;
  timer.style.display = "none";
};
// function to show alert
const displayAlert = (msg) => {
  alert.style.display = "block";
  alert.textContent = msg;
  setTimeout(() => {
    alert.style.display = "none";
  }, 5000);
};
//adding event listener to start button
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  container.style.display = "block";
  startQuiz();
});

//function to start timer
const startTimer = () => {
  clearInterval(timerID);
  timer.textContent = timeLeft; //check if any existing timer
  const countDown = () => {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft === 0) {
      const confirmUser = confirm(
        "Time Up!! Do You want to play the quiz again"
      );
      if (confirmUser) {
        timeLeft = 120;
        startQuiz();
      } else {
        startBtn.style.display = "block";
        container.style.display = "none";
        return;
      }
    }
  };
  timerID = setInterval(countDown, 1000);
};

//function to stop time
const stopTime = () => {
  clearInterval(timerID);
};

//function to start quiz
const startQuiz = () => {
  timeLeft = 120;
  timer.style.display = "flex";
  shuffleQuestions();
};

//function to shuffle questions
const shuffleQuestions = () => {
  for (let i = quiz.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
  }
  currentQuestionIndex = 0;
  showQuestions();
};

nextBtn.addEventListener("click", () => {
  const selectedChoice = document.querySelector(".choice.selected");
  if (!selectedChoice && nextBtn.textContent === "Next") {
    displayAlert("Select Your Answer babe take it easy !!");
    return;
  }
  if (quizOver) {
    nextBtn.textContent = "Next";
    scoreCard.textContent = "";
    currentQuestionIndex = 0;
    startQuiz();
    quizOver = false;
    score = 0;
  } else {
    checkAnswer();
  }
});
