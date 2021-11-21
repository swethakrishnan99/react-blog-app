import { createContext } from "react";

const news = [
  {
    id: 1,
    category: "technology",
    title: "Apple announces self-service repair scheme in win for campaigners",
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/772D/production/_121590503_gettyimages-1235543028.jpg",
    content:
      'Apple has announced a "self-service repair" programme so "customers who are comfortable" can fix their own devices At launch, in early 2022 in the US, it will cover replacing the batteries, screens and cameras of recent iPhones. But Apple\'s new repair store will sell more than 200 parts and tools. It comes after months of increasing pressure on Apple from the grassroots right-to-repair movement, which wants individuals and independent repair shops to be able to fix electronics."Self Service Repair is intended for individual technicians with the knowledge and experience to repair electronic devices," Apple said. But "for the vast majority of customers" visiting a certified professional repair shop would be a better option."Creating greater access to Apple genuine parts gives our customers even more choice if a repair is needed," Apple chief operating officer Jeff Williams said."By designing products for durability, longevity, and increased repairability, customers enjoy a long-lasting product that holds its value for years," the company said.',
  },
  {
    id: 2,
    category: "technology",
    title: "Evil Corp: 'My hunt for the world's most wanted hackers'",
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/15836/production/_121581188_thumbnail.jpg",
    content:
      "Many of the people on the FBI's cyber most wanted list are Russian. While some allegedly work for the government earning a normal salary, others are accused of making a fortune from ransomware attacks and online theft. If they left Russia they'd be arrested - but at home they appear to be given free rein.\"We're wasting our time,\" I thought, as I watched a cat licking the carcass of a discarded takeaway chicken. Surely there would no longer be any trace of an alleged multi-millionaire cyber-criminal on this dilapidated estate in a run-down town 700km (400 miles) east of Moscow. But I pressed on with an interpreter and cameraman, shooing the mangy cat away from the entrance to the block of flats. When we knocked at one of the doors, a young man answered and a curious elderly woman peered around the corner at us from the kitchen. \"Igor Turashev? No, I don't recognise the name,\" he said.",
  },
  {
    id: 3,
    category: "technology",
    title: "TikTok takes extra steps to curb dangerous challenges",
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/3B04/production/_121580151_teenagersgettyimages-1283408017-1.jpg",
    content:
      'TikTok is trying to strengthen the detection and enforcement of rules against dangerous online challenges and hoaxes.Just over one in five teenagers has participated in an online challenge, a survey commissioned by TikTok suggests. But only one in 50 has taken part in a "risky and dangerous" - and fewer than one in 300 a "really dangerous" - one. The survey looked at teenagers\' broad online experience, without focusing on any one platform.\'Skull-breaker\' challenge There has been widespread concern about the proliferation, across various platforms, of potentially harmful online challenges. Last year, the "skull-breaker" challenge, shared on TikTok, was linked to injuries. And this year, doctors warned of the risk to life and limb of the "milk-crate challenge", which invited the foolhardy to climb pyramids of milk crates. But online challenges can also be positive and promote worthwhile causes, experts note, such as the "ice-bucket challenge", which helped raise awareness of amyotrophic lateral sclerosis (ALS).',
  },
  {
    id: 4,
    category: "technology",
    title: "Vaccine research among cyber attack targets",
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/16ABA/production/_121585829_mediaitem121585828.jpg",
    content:
      "Organisations working on Covid vaccine research were one of the main targets of cyber attacks dealt with by UK computer security experts last year. The National Cyber Security Centre says it handled a record 777 incidents between August 2020 and September 2021. Its annual review said protecting the health sector became an urgent priority over the period. The NCSC - part of GCHQ - said one in five incidents were aimed at organisations with links to health. In one case, it helped the University of Oxford, where the AstraZeneca vaccine was developed, to protect itself against an incident which had the potential to cause significant disruption to the UK's pandemic response.According to the NCSC, the growth in reported incidents - from 723 the previous year - was due to it working to proactively identify cyber threats.",
  },
  {
    id: 5,
    category: "technology",
    title: "Amazon to stop accepting Visa credit cards in UK",
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/E901/production/_121594695_976_gettyimages-1353801672.jpg",
    content:
      'Amazon will stop accepting Visa credit cards issued in the UK from 19 January, the online retail giant has said It said the move was due to high credit card transaction fees but said Visa debit cards would still be accepted. Visa said it was "very disappointed that Amazon is threatening to restrict consumer choice in the future". Amazon said: "The cost of accepting card payments continues to be an obstacle for businesses striving to provide the best prices for customers." The online retailer said costs should be going down over time due to advances in technology, "but instead they continue to stay high or even rise". An Amazon spokesperson said the dispute was to do with "pretty egregious" price rises from Visa over a number of years with no additional value to its service. Amazon is offering £20 for Prime customers to switch from using Visa to an alternative payment method, and £10 for other customers.Visa said in a statement it was "very disappointed that Amazon is threatening to restrict consumer choice in the future. When consumer choice is limited, nobody wins."It said it had "a long-standing relationship with Amazon" and that it was trying to resolve the situation so customers would be able to use Visa credit cards with Amazon UK. Amazon declined to say how much Visa charges the retailer to process transactions made on credit cards. Visa also declined to comment though it claimed that on average it takes less than 0.1% of the value of a purchase.',
  },
  {
    id: 6,
    category: "technology",
    title: "The robots behind the bar that want to pull your next pint",
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/10632/production/_121522176_cecilia.ai_square_photo2-credit-avivgotlib.jpg",
    content:
      'When you go to a pub or bar, if the staff are friendly and helpful it very much adds to your enjoyment of the experience. By contrast, having to deal with a surly person serving up your pint or margarita it risks significantly reducing your happiness levels. For people with a regular drinking establishment of choice, the person behind the bar can even become a friend and confidant. Or, as renowned Canadian economist, Harry Gordon Johnson once said: "The greatest accomplishment of a bartender lies in his ability to exactly suit his customer."Soon, however, those bar staff might not even be human. Enter Cecilia, a robotic bartender that mixes and serves cocktails, and uses artificial intelligence (AI) to talk to customers in much the same way that Alexa, on an Amazon Echo speaker, or Siri, on an iPhone can respond to you. The unit looks a bit like a tall fruit machine, only with an animated female barmaid - Cecilia - appearing on a large, upright video screen. You either tell her what cocktail you want, or order it on the below touch-screen, and pay for the drink by tapping your bank card or phone. Your cocktail is then mixed and made inside the machine, and dispensed into a glass at the vending slot.',
  },
  {
    id: 7,
    category: "technology",
    title: "Should firms have to put carbon labels on all products?",
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/13DF4/production/_121369318_caronlabelsonproducts_fromfoodsteps.jpg",
    content:
      'Lou Palmer-Masterton, the owner of three vegan restaurants, says it was a logical progression to add carbon labelling to the menus All three branches of her Stem & Glory mini-chain were already using only renewable energy, and participating in reusable lunchbox and cup schemes, but she wanted to go one step further. So, now the menus at the two outlets in London, and one in Cambridge, are set to include a carbon dioxide emission score for each and every item."This is something I\'ve thought about for a while, and even though all our products are plant-based, I was still curious about the impact they have on the environment," says Ms Palmer-Masterton."This movement [carbon labelling] is exploding right now, and it makes sense."',
  },
  {
    id: 8,
    category: "bollywood",
    title:
      "Gulshan Grover: To stay relevant is a lot of hard work, you have to constantly evolve - Exclusive!",
    image:
      "https://static.toiimg.com/thumb/msid-87771312,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-46794/87771312.jpg",
    content:
      "The inimitable Gulshan Grover aka Bad Man is enjoying a purple patch in his career. Playing the chief antagonist in Rohit Shetty and Akshay Kumar’s ‘Sooryavanshi’ has won him rave reviews. Despite having spent more than 40 years in films, he’s still excited about the adulation like a newcomer. In an exclusive chat with ETimes, the celebrated villain of yesteryear movies and a still sought after actor in Bollywood and Hollywood, talks about his career and building a brand out of his ‘Bad Man’ image. Excerpts:",
  },
  {
    id: 9,
    category: "bollywood",
    title:
      "Vicky Arora on facing the casting couch: The sleazy gentleman who harassed Ranveer Singh tried to negotiate with me too",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDllZmI3ZjktNjk3MC00OWRjLWFiMTgtNjQxYWMzYWM3OWVmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
    content:
      "Vicky Arora, who has featured in late Raj Kaushal’s last directorial, has been garnering praise from all quarters for his turn. From featuring in multi-starrers to bagging his first international series with Gurinder Chadha--he has indeed come a long way. In an exclusive interview with ETimes, Vicky opened up about his fond memories with Raj, the casting couch experience he faced in the industry, an actor he looks up to in Bollywood, and more",
  },
  {
    id: 10,
    category: "bollywood",
    title:
      "When Katrina Kaif said she wants the entire world to attend her wedding",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202109/kat-sixteen_nine.jpg?size=948:533",
    content:
      "Katrina Kaif is all set to tie the knot with Vicky Kaushal in December and ETimes was the first to inform you about their wedding plans.While the couple is busy prepping up for their big day, we got our hands on a throwback interview of Katrina where she had opened up about her wedding plans. In a throwback interview with a news portal in 2015, the actress said that when she decides to get married, she would tell the entire world about it. According to her, when you are prepared to tell the world that you are ready to commit, you become comfortable talking about it. The actress also stated that she would want the entire world to attend her wedding.",
  },
  {
    id: 11,
    category: "bollywood",
    title:
      "Rohit Shetty opens up about people who are criticising 'Tip Tip Barsa' song in 'Sooryavanshi', says they are right in their own way",
    image:
      "https://static.toiimg.com/thumb/msid-87770716,width-800,height-600,resizemode-75,imgsize-52946,pt-32,y_pad-40/87770716.jpg",
    content:
      "Rohit Shetty recently reacted to criticism that the recreated version of ‘Tip Tip Barsa Paani’ in Akshay Kumar and Katrina Kaif starrer, ‘Sooryavanshi’ has received. The original song is from the movie, ‘Mohra’ featuring Akshay Kumar and Raveena Tandon. Speaking about the same in a radio interview, the director stated that the die-hard fans of the original song who are now against the remixed version are right in their own way. According to him, they tried to retain the essence of the original song, right from the singers to the instruments. However, he agreed that sometimes it does backfire. The filmmaker added that ‘Tip Tip Barsa’ is a cult song and with this, it just got revived for the new generation.",
  },
  {
    id: 12,
    category: "bollywood",
    title:
      "Kangana Ranaut demands strict action against Vir Das for 'Two Indias' video; also calls him a 'creepy man'",
    image:
      "https://static.toiimg.com/thumb/msid-87769844,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-55310/87769844.jpg",
    content:
      "Actor Kangana Ranaut is the latest celebrity to slam comedian Vir Das for his recently uploaded video on YouTube, titled 'I come from two Indias' that was a part of his recent performance at the John F Kennedy Center in Washington. In the six-minute-long video that Vir uploaded on his YouTube channel on Monday, he could be heard contrasting the dark sides of India by taking a dig at issues like- its battle against COVID-19, gang rapes, farmers' protest and more. Several social media users including politicians have mocked Vir for insulting his motherland in a foreign country.",
  },
  {
    id: 13,
    category: "bollywood",
    title: "Shahid Kapoor-starrer 'Bull' to release in April, 2023",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2021/11/17/1005750-fotojet-2021-11-17t181402.245.jpg",
    content:
      "Actor Shahid Kapoor's next film titled 'Bull' has been locked for a 2023 release. The film will hit the big screen on April 7, 2023. The film directed by debutant director Aditya Nimbalkar, is set in the 1980s and is inspired by real-life events. Bhushan Kumar, said: \"'Bull' is an ambitious project and one the biggest action movies coming out of Music company stable, we continue to reassure audience's long standing romance with the silver screen with this release. It is a Shahid Kapoor film tailor-made to be viewed at your nearest theatre.\" 'Bull' is presented by Gulshan Kumar and popular Music company, with story by Parveez Shaikh and Aseem Arrora and directed by Aditya Nimbalkar. Produced by Bhushan Kumar, Krishan Kumar, Amar Butala and Garima Mehta, the film is slated to hit the floors in early 2022.",
  },
  {
    id: 14,
    category: "bollywood",
    title:
      "Akshay Kumar excited to see how Manushi Chhillar makes a mark in Hindi film industry",
    image:
      "https://static.toiimg.com/thumb/msid-87760330,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-28126/87760330.jpg",
    content:
      'Bollywood star Akshay Kumar has heaped praises on his co-actor Manushi Chhillar. He is excited to see how the "effortless" debutante makes a mark in the Hindi film industry. Akshay said: "Manushi is undoubtedly a talent to watch out for. Despite Prithviraj being her first film, she was so effortless, so inquisitive and so dedicated that she won the entire team\'s heart." Manushi plays the role of his princess Sanyogita in the film. He added: "Our director Dr. Chandraprakash Dwivedi has found the perfect Sanyogita because Manushi through her grace and her life values instilled by her parents, embodies the spirit of Indian women who are beautiful inside out."',
  },
  {
    id: 15,
    category: "food",
    title: "Looking for Healthy Sweet Alternative? Mishti Doi Can Help",
    image:
      "https://images.news18.com/ibnlive/uploads/2021/11/mishti-doi-16372083143x2.jpg?impolicy=website&width=510&height=356",
    content:
      "Having sweets and not gaining weight may seem like the most utopian idea. After all, who wouldn’t love to satisfy their sweet tooth gorging on favourite desserts? However, the calorie intake shoots up your weight on scales and hence, you think sweets are best avoided. But, there are always alternatives. So to satiate your sugar cravings and at the same time not worry about the scale, try finding a healthy sweet alternative.Mishti Doi, popular from West Bengal, is one of the best go-tos in this department. Set in clay pots, the sweet curd absorbs the fragrance and flavour of the earthen vessel. It is fermented sweet dahi, which is an excellent probiotic, among other things. A popular dessert all over India and many other parts of the world, mishti doi is known to have anti-inflammatory properties and regenerative potential in the degenerated digestive tract.",
  },
  {
    id: 16,
    category: "food",
    title: "Here’s What to Eat to Fight Fatigue",
    image:
      "https://images.news18.com/ibnlive/uploads/2021/11/fatigue-16371598633x2.jpg?impolicy=website&width=510&height=356",
    content:
      "What you offer your body is what it runs on. The easiest method to obtain the most energy from your diet is to feed yourself the best food available. Aside from what you eat, when you eat might also have an effect on your energy levels. Have you ever noticed how lethargic you feel after a heavy lunch or dinner? This is because your body is using its fuel in digesting that large meal rather than powering the body.",
  },
  {
    id: 17,
    category: "food",
    title: "Weight Loss: Should You Avoid Milk While Dieting?",
    image:
      "https://images.news18.com/ibnlive/uploads/2021/07/1627130333_shutterstock_1823907725-1200x800.png?impolicy=website&width=510&height=356",
    content:
      "250 ml of whole milk (1 cup) has nearly 5 grams of fat and 152 calories. It also has a fair amount of nutrients like calcium, zinc, magnesium, vitamin B12, and vitamin D. People who are trying to shed some weight, usually struggle in finalising foods and beverages they should consume and avoid while dieting. One of the most common beverages is milk. Right from a very young age, we have been taught that milk is healthy and there is no doubt about it. However, this healthy drink contains fat, a macronutrient associated with weight gain. Therefore, the question is should you really avoid it during your weight loss plan. Milk consists of saturated fat and high calories, the two important factors that cannot be ignored when it comes to weight loss. 250 ml of whole milk (1 cup) has nearly 5 grams of fat and 152 calories. So the question is should people who are on a low-calorie diet avoid milk and milk-based products in their diet to limit their calorie intake in a day?. Can milk lead to weight gain? Not really.",
  },
  {
    id: 18,
    category: "food",
    title:
      "Father of Tiramisu: Italian Food Legend Ado Campeol Dies at the Age of 93",
    image:
      "https://images.news18.com/ibnlive/uploads/2021/11/shutterstock_1922631782-16357709323x2.jpg?impolicy=website&width=510&height=356",
    content:
      'Ado Campeol, Italian food legend,  has passed away. Ado was known for his contribution to the world of food by introducing the globally renowned dessert - the Tiramisu. In fact, he is often referred to as the ‘Father of Tiramisu’. Ado passed away over the weekend. He was 93. The governor of the Veneta region, Luco Zaia, confirmed the news in an announcement on Facebook. “With Ado Campeol, gone today at age 93, Treviso loses another one of its gastronomical stars," he wrote. “I extend to all the family members my deepest condolences in the memory of a figure like Aldo, who contributed to the great Treviso," wrote the governor in his Facebook post.https://www.facebook.com/zaiaufficiale/posts/1912367518965154 Ado owned of Le Beccherie restaurant in Treviso, and besides the hospitality and great food served by the restaurant, one of the most popular dishes on the meny was the Ado’s invention, Tiramisu. The restaurant was the first in the world to offer the amazing Tiramisu which had the delicious mixture of espresso-coated biscuits topped with mascarpone cheese and finished off with cocoa powder.',
  },
  {
    id: 19,
    category: "food",
    title: "Is it Healthy to Drink Green Tea Before Bedtime?",
    image:
      "https://images.news18.com/ibnlive/uploads/2021/10/green-tea-2-16348937313x2.jpg?impolicy=website&width=510&height=356",
    content:
      "The tea market of India has witnessed a slight shift. Even today, while many prefer to have traditional tea, a section of people are inclined towards consuming green tea. This is because of the number of health benefits linked to it. From losing weight to relaxing nerves after a hectic day, people prefer to drink a cup of green tea before sleeping. But the question is – Is it safe to drink green tea every day, before sleeping? We have got all your questions answered. WHAT IS GREEN TEA? The green tea leaves are extracted from the Camellia Sinensis plant. It is loaded with the goodness of antioxidants and nutrients. A cup of green tea not just relaxes the nerves, but also boosts brain functioning and reduces cell damage. A compound named, Catechins is present in green tea which has antioxidants like epigallocatechin gallate (EGCGC) and epigallocatechin (EGC). The tea is also helpful in relaxing nerves due to the presence of Theanine, which is an Amino acid. Theanine works as a nerve relaxant which also improves brain health, reduces stress, boosts memory, and induces sleep.",
  },
  {
    id: 20,
    category: "food",
    title: "This is the Ideal Healthy Way to Eat Your Eggs, Read on",
    image:
      "https://images.news18.com/ibnlive/uploads/2021/10/untitled-3-41-16336844923x2.jpg?impolicy=website&width=510&height=356",
    content:
      "Eggs are a popular breakfast option across the world. People prefer to have eggs in different ways. While some like to boil them, others opt for scrambled or in the form of omelette. No matter how you like to have your eggs, the important thing is that they should be a part of your everyday meal. People usually pair their egg dish with toasted bread but at times they like to create some variations in it. Egg preparation matters a lot, and it is essential to keep a track of how much protein is entering the body. Dietician and nutritionist Nmami Agarwal, in her latest Instagram post, shared that the “sunny side up” preparation of eggs is quite healthy. Along with her post, she mentioned a fun fact that highlighted the importance of the yolk. She opined that eating the egg white and yolk together provides the right balance of protein, fat, and calories. Agarwal said that the combination of egg white and yolk allows most people to feel fuller and more satisfied.",
  },
  {
    id: 21,
    category: "food",
    title: "Did you Know These Health Benefits of Amla? Read on",
    image:
      "https://images.news18.com/ibnlive/uploads/2021/11/amla-16357561603x2.jpg?impolicy=website&width=510&height=356",
    content:
      'Amla, which is grown throughout India and neighboring countries, has earned a global following as a “super fruit." It comes as no surprise that a 100-gram serving of fresh amla berries provides the same amount of vitamin C as 20 oranges. Indian Gooseberry is a tangy fruit that is usually accessible during the winter months. You should be aware that there are numerous health benefits of eating amla on a daily basis, and there is no doubt that amla is a nutrient bomb. HEALTH BENEFITS OF EATING AMLA Immunity One 100g serving (approximately a half cup) of amla berries contains 300mg of vitamin C, which is more than double the daily recommended dose for adults.',
  },
  {
    id: 22,
    category: "hollywood",
    title:
      "Lady Gaga on essaying Patrizia Reggiani in ‘House Of Gucci’; Avoided reading or watching anything with opinion, because I really wanted to create my own",
    image: "https://static.toiimg.com/photo/msid-87770593/87770593.jpg?41526",
    content:
      "With the trailer drop of ‘House of Gucci’, Indian audiences have gone ‘gaga’ over the stellar star cast, the stylish costumes that are fashion goals, and the much-talked accent of the characters. The movie stars Lady Gaga stepping into the shoes of Patrizia Reggiani. Her look, screen presence, and performance as the iconic character in the trailer have been garnering a lot of appreciation. It is believed that the sensational singer and Academy Award-winning actor didn't want anyone to tell her about Patrizia Reggiani as she wanted to discover the person on her own. Talking about her preparation, Gaga said, “I spent a lot of time reading about [Patrizia Reggiani], and watching interviews that she gave. I have also watched interviews about her. But I tried not to read anything, or watch anything that had too much of an opinion, because I really wanted to create my own.”",
  },
  {
    id: 23,
    category: "hollywood",
    title:
      "'Spider-Man: No Way Home' trailer: Tom Holland goes up against a multiverse of villains; thrills even without Tobey Maguire and Andrew Garfield",
    image:
      "https://static.toiimg.com/thumb/msid-87748902,width-400,resizemode-4/87748902.jpg",
    content:
      "Marvel Studios dropped the highly anticipated trailer Wednesday morning, which offered an action-packed glimpse into the superhero film. While the first trailer saw Peter Parker, with Benedict Cumberbatch's Doctor Strange accidentally open up the multiverse while trying to make the world forget Spider-Man, the new clip sees the return of villains of the past return. These include Willem Dafoe’s Green Goblin from 2002’s 'Spider-Man', Alfred Molina’s Otto Octavius from 2004’s 'Spider-Man 2', Thomas Haden Church’s Sandman from 2007’s 'Spider-Man 3', Rhys Ifans’ Lizard from 2012’s 'The Amazing Spider-Man', and Jamie Foxx’s Electro from 2014’s 'The Amazing Spider-Man 2'.",
  },
  {
    id: 24,
    category: "hollywood",
    title:
      "Did you know that Tom Felton came close to land Harry Potter's role before being cast as Draco Malfoy?",
    image:
      "https://static.toiimg.com/thumb/msid-87730458,imgsize-36460,width-800,height-600,resizemode-75/87730458.jpg",
    content:
      "Actor Tom Felton almost beat actor Daniel Radcliffe to his iconic role of Harry Potter. The actor is best known for playing Draco Malfoy in the wizarding saga but director Chris Columbus, who helmed the first two movies, has revealed Warner Bros. officials were keen to cast him in the lead role. The filmmaker \"knew\" the young actor would be better as the villainous schoolboy, explaining: \"Tom was a great actor as well, so we thought, let's just dye Tom's hair, give him a scar, give him the glasses and let's see. He did a great Harry Potter reading. The problem is you can really kind of tell when an 11 or 12-year-old kid's hair is dyed.\"",
  },
  {
    id: 25,
    category: "hollywood",
    title:
      "Henry Cavill has unfinished business as 'Superman'; says 'the cape is still in the closet'",
    image:
      "https://static.toiimg.com/thumb/msid-87733427,imgsize-49782,width-800,height-600,resizemode-75/87733427.jpg",
    content:
      "English actor Henry Cavill believes that there is still \"a lot of storytelling\" for him to do as Superman and revealed that he would be prepared to don the cape once again. He played the iconic superhero in the DC Extended Universe (DCEU) but believes that lack of follow-up to the 2013 movie 'Man of Steel' has left him with more stories to tell as the character. Cavill told The Hollywood Reporter, \"There is a lot of storytelling for me to do as Superman, and I would absolutely love the opportunity.\"The killing of Zod gave a reason for the character never to kill again. Superman falling to the ground and screaming afterward - I don't think that was originally in the script, but I wanted to show the pain he had. He just killed the last remaining member of his species. That's the choice he made in that moment, and he'll never do that again.\"",
  },
  {
    id: 26,
    category: "hollywood",
    title:
      "Will Smith reveals his guilt for failing to protect mother from abusive father",
    image:
      "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/8/2/w900X450/Will_Smith_AP.jpeg?w=400&dpr=2.6",
    content:
      "Hollywood star Will Smith recently revealed that he has suffered from guilt because he believes as a child he failed to protect his mother when his father beat her to the ground in the family's Philadelphia home. According to a report, the 'Men in Black' actor recounted the domestic abuse in his new book 'Will' and called the traumatizing attack a defining moment, as per an excerpt of the book published in a news outlet. The excerpt read, \"When I was nine years old, I watched my father punch my mother in the side of the head so hard that she collapsed. I saw her spit blood.\"",
  },
  {
    id: 27,
    category: "hollywood",
    title:
      "Exclusive! Sonalee Kulkarni: I am so honoured to see that Hollywood filmmakers are interested in Marathi cinema",
    image:
      "https://static.toiimg.com/thumb/msid-87753758,width-400,resizemode-4/87753758.jpg",
    content:
      "Marathi cinema's 'Apasara' Sonalee Kulkarni is currently gearing up for her dream project 'Chhatrapati Tararani'. This will be the first and one of the biggest Marathi-Hollywood films to go on floors with an international film studio. Rahul Jadhav's directorial 'Chhatrapati Tararaani' is based on one of the greatest epics of valour of the warrior queen Chhatrapati Tararani who fought with the Mughals, Nizamshahi, Aadilshahi, Qutubshahi, Dutch, British, Portuguese, Siddis at the same time! In an exclusive chat with Etimes, Sonalee Kulkarni said \"I was part of Chhatrapati Shivaji Maharaj's era because of 'Hirkani' but it was not part of the royal family of Chhatrapati Shivaji Maharaj. Hirkani was not a direct descendent of Maharaj's family. But here, I am playing a character of Maharaj's lineage and it comes with a huge responsibility to portray it with the same kind of dignity, respect and grace\"",
  },
  {
    id: 28,
    category: "hollywood",
    title:
      "Marvel confirms Chadwick Boseman's 'Black Panther' character won't be recast; T'Challa fans are not too happy",
    image: "https://static.toiimg.com/photo/msid-87765874/87765874.jpg?39318",
    content:
      "Late Hollywood star Chadwick Boseman's King T'Challa/Black Panther will never be recast by Marvel following his tragic death, the studio's VP of Development Nate Moore has confirmed. Moore told The Ringer-verse Podcast, \"I'm being quite honest, you will not see T'Challa in the MCU.\" Moore revealed that he had discussed potential casting decisions with Ryan Coogler, who is returning to direct 'Black Panther: Wakanda Forever', but the pair ultimately decided that they \"couldn't do it\" without Boseman. He shared, \"We have to figure out how to move this franchise on without that character. Because I think we all feel so much of T'Challa in the MCU on the screen... is tied to Chadwick's performance.",
  },
  {
    id: 29,
    category: "fitness",
    title: "Fighting pollution: Five yoga asanas for stronger lungs",
    image:
      "https://images.indianexpress.com/2021/11/pixabay_breathing_yoga_1200.jpg",
    content:
      "Many states in the northern parts of the country have been engulfed in smog. While it happens every year, long-term pollution can harm the body in many ways, and in the pandemic, it is all the more important to protect and take care of one’s health. Lung health, especially, needs to be prioritised. The pollution can cause many respiratory problems or aggravate some existing ones. Grand Master Akshar, a philanthropist, spiritual master, lifestyle coach, yoga-preneur and author says it is possible to work on making your lungs stronger.",
  },
  {
    id: 30,
    category: "fitness",
    title:
      "‘Don’t overdo it’: Why Ayurveda advises against exercising too much",
    image:
      "https://images.indianexpress.com/2021/07/over-exercise_1200_getty.jpg",
    content:
      "Just like everything else, exercising too much can also be detrimental to the body. Which is why instead of mindlessly pushing yourself, experts suggest paying attention to ones capacity and understanding ones body. As such, the Indian science of Ayurveda too recommends that people refrain from over exercising. Ayurvedic practitioner Dr Aiswarya Santhosh took to Instagram to underline what one should keep in mind. “Ayurveda suggests to do exercise only up to half of the strength,” she said.",
  },
  {
    id: 31,
    category: "fitness",
    title:
      "When Rashmika Mandanna set massive fitness goals with this pushup challenge",
    image:
      "https://images.indianexpress.com/2021/10/rashmika-mandanna_200_insta.jpg",
    content:
      "Rashmika Mandanna is immensely popular. So much so that it has earned the actor the tag of Forbes’ Most Influential South Stars this year. But did you know that Rashmika is also known for her commitment to fitness? As such, the star, who is gearing up for her Bollywood debut with Mission Majnu, once set massive fitness goals with this pushup challenge video. Have you seen it yet?",
  },
  {
    id: 32,
    category: "fitness",
    title:
      "Will Smith scales the Burj Khalifa to get his cardio exercise; watch here",
    image: "https://images.indianexpress.com/2021/11/Will-Smith_1200.jpg",
    content:
      "It is one thing to ‘feel’ like you are on top of the world — having accomplished something for which you were working hard — and it is another thing to actually, physically be there. Will Smith has felt both these feelings. The 53-year-old actor recently posted a video on Instagram, wherein he was seen scaling the world’s tallest building, Burj Khalifa in Dubai. So, in case you are looking for some weekend inspiration, here is Smith teaching you how to do some cardio while also making the experience fun.",
  },
  {
    id: 33,
    category: "fitness",
    title: "Effective tips to ensure you aren’t breaking your fitness habits",
    image:
      "https://images.indianexpress.com/2021/05/Squats-GettyImages-1173095448.jpg",
    content:
      "With the festivities just behind us, it’s common for one to indulge in sweets for a few more days and then wonder if giving into temptations may sabotage our health goals. During festivals, many people may suffer from the “all or nothing” mindset – either they work out and eat healthy 24/7, or blame themselves after indulging a little over the week and lose their momentum.",
  },
  {
    id: 34,
    category: "fitness",
    title: "Yoga trainer suggests top 3 tips to overcome binge eating",
    image:
      "https://images.indianexpress.com/2016/03/binge-eating-thinkstock-1.jpg",
    content:
      "We often find ourselves giving in to our cravings and binge eating foods we otherwise would not. This is especially true during the festive season when we just can’t resist the sweets and fried delicacies. However, it must be noted that frequently consuming large amounts of food can lead to many health issues like weight gain, heart disease, type 2 diabetes and even gastroesophageal reflux disease (GERD). As such, it becomes necessary to manage one’s diet and exercise portion control.",
  },
  {
    id: 35,
    category: "fitness",
    title: "Release pent-up emotions with these three simple yoga techniques",
    image: "https://images.indianexpress.com/2021/10/yoga_1200_getty.jpg",
    content:
      "There are days when you just cannot seem to control your emotions, which can, in turn, affect your work and personal life. While it is considered healthy to release emotions — whether anger or sadness — sometimes you just cannot.“There are times when you just can’t control yourself, whether it is anger or tears. You end up feeling broken in situations where you want to be strong but your tears are sometimes just not in your control,” said yoga practitioner and fitness influencer Juhi Kapoor.",
  },
];
const NewsProvider = createContext(news);
export default NewsProvider;
