const verifiedCityDatabase = {
   "roma": { 
    country: "İtalya", 
    currency: "Euro (€)", 
    language: "İtalyanca", 
    socket: "C, F ve L Tipi (230V / 50Hz)", 
    emergency: "113 (Polis) / 118 (Ambulans) / 115 (İtfaiye) / 112 (Genel Acil Durum)", 
    tip: "Kolezyum ve Vatikan biletlerini haftalar öncesinden online alın; Roma sokakları arnavut kaldırımı olduğu için kalın tabanlı yürüyüş ayakkabısı giyin.", 
    customHistory: [
        "Kolezyum (Colosseum)",
        "Roma Forumu (Roman Forum)",
        "Palatino Tepesi (Palatine Hill)",
        "Pantheon",
        "Castel Sant'Angelo"
    ], 
    customFoods: [
        "Tonnarelli Cacio e Pepe (Roma'nın ikonik peynirli ve karabiberli makarnası)",
        "Pizza al Taglio (Roma usulü dilim pizza, fırınlarda gramajla satılır)",
        "Suppli (İçi mozzarella dolu, kızarmış çıtır pirinç topları)",
        "Saltimbocca alla Romana (Adaçayı ve jambonla pişirilmiş dana eti lezzeti)",
        "Gelato (Giolitti veya Frigidarium gibi tarihi dükkanlarda İtalyan dondurması)"
    ] },
   "paris": { 
    country: "Fransa", 
    currency: "Euro (€)", 
    language: "Fransızca", 
    socket: "C ve E Tipi (230V / 50Hz)", 
    emergency: "17 (Polis) / 15 (Ambulans) / 18 (İtfaiye) / 112 (Genel Acil Durum)", 
    tip: "Eyfel Kulesi'ni izlemek için Trocadero Meydanı'nı tercih edin. Müze kartı (Paris Museum Pass) alarak Louvre ve Orsay kuyruklarından tasarruf edebilirsiniz.", 
    customHistory: [
        "Eyfel Kulesi",
        "Louvre Müzesi",
        "Notre-Dame Katedrali",
        "Şanzelize Caddesi (Champs-Élysées)",
        "Zafer Takı (Arc de Triomphe)",
        "Ressamlar Tepesi (Montmartre)"
    ], 
    customFoods: [
        "Kruvazan & Ağızda Dağılan Ağaç İşleri (Tarihi bir boulangerie'de taze fırından)",
        "Makaron (Laduree veya Pierre Hermé mağazalarında rengarenk Fransız tatlısı)",
        "Duck Confit (Ördek but, Paris bistrolarında mutlaka denenmeli)",
        "Escargots (Tereyağı, sarımsak og maydanozlu salyangoz)",
        "Crème Brûlée (Karamelize çıtır kaplamalı efsanevi Fransız tatlısı)"
    ] 
},
"londra": { 
    country: "İngiltere", 
    currency: "İngiliz Sterlini (£)", 
    language: "İngilizce", 
    socket: "G Tipi Üçlü Priz (230V / 50Hz)", 
    emergency: "999 (Polis, Ambulans, İtfaiye) / 112 (Cep Telefonundan Çalışır)", 
    tip: "Şehirdeki birçok büyük müze (British Museum, National Gallery vb.) tamamen ücretsizdir. Ulaşımda bilet yerine temassız kredi kartınızı kullanabilirsiniz.", 
    customHistory: [
        "London Eye",
        "Big Ben & Westminster Sarayı",
        "Tower Bridge",
        "British Museum",
        "Buckingham Sarayı",
        "Hyde Park"
    ], 
    customFoods: [
        "Fish and Chips (Geleneksel bezelye püresi ve tartar sos eşliğinde balık patates)",
        "English Breakfast (Fasulye, mantar ve sosis içeren ünlü eksiksiz İngiliz kahvaltısı)",
        "Beef Wellington (Milföy hamuruna sarılı fırınlanmış dana bonfile)",
        "Beigel Bake (Brick Lane'de 24 saat açık dükkanda tuzlu dana etli bagel)",
        "Traditional Afternoon Tea (Tarihi bir otelde çörekler eşliğinde beş çayı ritüeli)"
    ] 
},
"tokyo": { 
    country: "Japonya", 
    currency: "Japon Yen (¥)", 
    language: "Japonca", 
    socket: "A ve B Tipi İkili Yassı Priz (100V / 50-60Hz)", 
    emergency: "110 (Polis) / 119 (Ambulans, İtfaiye)", 
    tip: "Yürürken bir şey yiyip içmek hoş karşılanmaz. Çöplerinizi yanınızda taşıyın çünkü sokaklarda çöp kutusu bulmak neredeyse imkansızdır.", 
    customHistory: [
        "Senso-ji Tapınağı",
        "Tokyo Skytree",
        "Shibuya Kavşağı",
        "Meiji Tapınağı",
        "Tokyo Kulesi",
        "Shinjuku Gyoen Ulusal Bahçesi"
    ], 
    customFoods: [
        "Sushi (Tsukiji veya Toyosu dış pazarında taze kesim şef sunumuyla)",
        "Tonkotsu Ramen (İçinizi ısıtacak yoğun et sulu, el yapımı erişte çorbası)",
        "Tempura (Hafif ve çıtır çıtır kızartılmış deniz ürünleri ve sebzeler)",
        "Takoyaki (Sokak tezgahlarında içi ahtapotlu kızarmış hamur topları)",
        "Matcha Parfe (Asakusa sokaklarında geleneksel yeşil çaylı soğuk tatlı)"
    ] 
},
"new york": { 
    country: "Amerika Birleşik Devletleri", 
    currency: "Amerikan Doları ($)", 
    language: "İngilizce", 
    socket: "A ve B Tipi (120V / 60Hz)", 
    emergency: "911 (Tüm Acil Durumlar: Polis, Ambulans, İtfaiye)", 
    tip: "Restoran ve taksilerde %15 ile %20 arasında bahşiş bırakmak neredeyse zorunludur. Metro için 'OMNY' temassız ödeme sistemini kullanın.", 
    customHistory: [
        "Özgürlük Anıtı (Statue of Liberty)",
        "Times Meydanı (Times Square)",
        "Central Park",
        "Empire State Binası (Empire State Building)",
        "Brooklyn Köprüsü (Brooklyn Bridge)",
        "Metropolitan Sanat Müzesi (The Met)"
    ], 
    customFoods: [
        "New York Style Pizza (Katlanarak yenen, ince hamurlu devasa peynirli dilim)",
        "Pastrami on Rye (Katz's Delicatessen'da hardallı devasa çavdar ekmeği sandviçi)",
        "New York Cheesecake (Yoğun kıvamlı, arkası fırınlanmış orijinal Manhattan klasiği)",
        "Everything Bagel with Lox (Krem peynir ve somon fümeli kahvaltılık simit)",
        "Manhattan Clam Chowder (Domates tabanlı, bol sebzeli ünlü deniz tarağı çorbası)"
    ] 
},
"berlin": { 
    country: "Almanya", 
    currency: "Euro (€)", 
    language: "Almanca", 
    socket: "C ve F Tipi (230V / 50Hz)", 
    emergency: "110 (Polis) / 112 (Ambulans ve İtfaiye Ortak Hat)", 
    tip: "Pazar günleri marketler dahil neredeyse tüm dükkanlar kapalıdır. Toplu taşımaya bindiğinizde biletinizi perondaki küçük makinelerde mutlaka damgalatın.", 
    customHistory: [
        "Brandenburg Kapısı (Brandenburg Gate)",
        "Reichstag Binası (Parlamento)",
        "Berlin Duvarı Anıtı & East Side Gallery",
        "Müze Adası (Museum Island)",
        "Checkpoint Charlie",
        "Alexanderplatz & Televizyon Kulesi (Fernsehturm)"
    ], 
    customFoods: [
        "Currywurst (Üzerine köri tozu ve özel sos dökülmüş ikonik Berlin sosisi)",
        "Mustafa's Gemüse Kebap (Kreuzberg'de kızarmış sebzeli ünlü döner)",
        "Pretzel (Brezel) (Fırınlardan alınan kalın tuzlu, dışı çıtır geleneksel çörek)",
        "Schnitzel Holstein (Berlin tarzı, üzerinde sahanda yumurta ile servis edilen şinitzel)",
        "Berliner Pfannkuchen (İçi genellikle marmelat dolgulu, üzeri pudra şekerli çörek)"
    ] 
},
"barcelona": { 
    country: "İspanya", 
    currency: "Euro (€)", 
    language: "İspanyolca / Katalanca", 
    socket: "C ve F Tipi (230V / 50Hz)", 
    emergency: "091 (Polis) / 061 (Ambulans) / 080 (İtfaiye) / 112 (Tavsiye Edilen Genel Hat)", 
    tip: "La Rambla ve Gotik Mahalle'de yankesiciliğe karşı çantanızı her zaman önünüzde tutun. Akşam yemekleri İspanya'da saat 21:00'den önce başlamaz.", 
    customHistory: [
        "Sagrada Família",
        "Park Güell",
        "Casa Batlló",
        "La Rambla",
        "Gotik Mahalle (Barri Gòtic)",
        "Montjuïc Tepesi"
    ], 
    customFoods: [
        "Paella de Marisco (Geleneksel safranlı ve bol deniz ürünlü Katalan usulü pilav)",
        "Tapas (Patatas Bravas, Pimientos de Padrón gibi barlarda paylaşımlık atıştırmalıklar)",
        "Pan con Tomate (Zeytinyağı, sarımsak ve taze domates rendeli ekmek üstü lezzet)",
        "Churros con Chocolate (Koyu sıcak çikolataya batırılarak yenen çıtır hamurlar)",
        "Crema Catalana (Üzeri yakılmış karamel kaplı Katalan usulü hafif tatlı puding)"
    ] 
},
"amsterdam": { 
    country: "Hollanda", 
    currency: "Euro (€)", 
    language: "Felemenkçe", 
    socket: "C ve F Tipi (230V / 50Hz)", 
    emergency: "112 (Tüm Durumlar İçin Ortak Acil Çağrı: Polis, Ambulans, İtfaiye)", 
    tip: "Kırmızı zeminle ayrılmış bisiklet yollarında kesinlikle yürümeyin; bisikletlilere her zaman geçiş üstünlüğü vermeniz hayati önem taşır.", 
    customHistory: [
        "Rijksmuseum",
        "Van Gogh Müzesi",
        "Anne Frank'ın Evi",
        "Jordaan Bölgesi",
        "Dam Meydanı",
        "Vondelpark"
    ], 
    customFoods: [
        "Stroopwafel (Karamel dolgulu, kahve veya çay bardağının üzerinde ısıtılarak yenen gofret)",
        "Vlaamse Frites (Külahlarda bol mayonez çeşidi ile servis edilen kalın patates kızartması)",
        "Herring (Sokak tezgahlarında çiğ, marine edilmiş, soğan ve turşulu ringa balığı)",
        "Bitterballen (Barların vazgeçilmezi, içi et dolgulu çıtır kızarmış sıcak toplar)",
        "Gouda & Edam Peyniri (Şehirdeki peynir tadım mağazalarında yıllanmış yerel lezzetler)"
    ] 
},
"istanbul": { 
    country: "Türkiye", 
    currency: "Türk Lirası (₺)", 
    language: "Türkçe", 
    socket: "C ve F Tipi (230V / 50Hz)", 
    emergency: "112 (Tüm Acil Çağrılar Tek Çatı Altında: Polis, Ambulans, İtfaiye)", 
    tip: "Tarihi Yarımada'yı yürüyerek keşfedin, cami ziyaretlerinde kıyafet kurallarına dikkat edin ve boğaz turu için şehir hatları vapurlarını tercih edin.", 
    customHistory: [
        "Ayasofya Camii",
        "Sultanahmet Camii",
        "Topkapı Sarayı",
        "Yerebatan Sarnıcı",
        "Kapalıçarşı"
    ], 
    customFoods: [
        "Sultanahmet Köftesi (Tarihi dükkanlarda denenmeli)",
        "Eminönü Balık Ekmek (Boğaz kenarında nostaljik lezzet)",
        "Ortaköy Kumpiri (Boğaz manzarası eşliğinde)",
        "Kanlıca Yoğurdu (Üzerine pudra şekeri dökülerek)",
        "Karaköy Güllüoğlu Baklavası (Geleneksel Türk tatlısı)"
    ] 
},
"viyana": { 
    country: "Avusturya", 
    currency: "Euro (€)", 
    language: "Almanca", 
    socket: "C ve F Tipi (230V / 50Hz)", 
    emergency: "133 (Polis) / 144 (Ambulans) / 122 (İtfaiye) / 112 (Genel Acil Durum)", 
    tip: "Tarihi opera binalarında ayakta izleme biletlerini (Stehplatz) etkinlik günü çok ucuza alabilir, klasik Viyana kahve kültürünü deneyimleyebilirsiniz.", 
    customHistory: [
        "Schönbrunn Sarayı",
        "Hofburg İmparatorluk Sarayı",
        "Aziz Stephan Katedrali (St. Stephen's Cathedral)",
        "Belvedere Sarayı",
        "Viyana Devlet Operası",
        "Prater (Riesenrad)"
    ], 
    customFoods: [
        "Wiener Schnitzel (Figlmüller gibi ünlü restoranlarda devasa incecik dana şinitzel)",
        "Sachertorte (Hotel Sacher'de üretilen orijinal yoğun çikolatalı ve kayısılı pasta)",
        "Apfelstrudel (Viyana kafelerinde vanilya sosu eşliğinde servis edilen elmalı turta)",
        "Tafelspitz (İmparator Franz Joseph'in favorisi, elma ve yaban turplu haşlama dana eti)",
        "Melange Kahve (Klasik mermer masalı Viyana kafelerinde süt köpüklü espresso şöleni)"
    ] 
},
"prag": { 
    country: "Çekya", 
    currency: "Çek Korunası (CZK)", 
    language: "Çekçe", 
    socket: "C ve E Tipi (230V / 50Hz)", 
    emergency: "158 (Polis) / 155 (Ambulans) / 150 (İtfaiye) / 112 (Uluslararası Genel Hat)", 
    tip: "Döviz bozdururken komisyon oranlarına dikkat edin. Karl Köprüsü'nü kalabalıktan uzak, sakin ve büyüleyici bir atmosferde fotoğraflamak için gün doğumunda gidin.", 
    customHistory: [
        "Prag Kalesi",
        "Karl Köprüsü (Charles Bridge)",
        "Astronomik Saat & Eski Şehir Meydanı",
        "Aziz Vitus Katedrali",
        "Dans Eden Ev (Dancing House)",
        "Josefov (Yahudi Mahallesi)"
    ], 
    customFoods: [
        "Trdelník (Makaralı rulo hamur, sokaklarda tarçın, şeker ve dondurma dolgusuyla)",
        "Goulash in Bread Bowl (Eski şehir lokantalarında ekmek kasesi içinde koyu kıvamlı gulaş çorbası)",
        "Svíčková na Smetanede (Krema soslu, yanında ekmek dumplings ile servis edilen dana eti)",
        "Vepřové Koleno (Geleneksel Çek birahanelerinde hardal ve yaban turpu ile dev fırınlanmış domuz dizi)",
        "Chlebíčky (Üzeri şarküteri ürünleri ve mayonezli salata ile süslenmiş açık sandviçler)"
    ] 
},
"madrid": { 
    country: "İspanya", 
    currency: "Euro (€)", 
    language: "İspanyolca", 
    socket: "C ve F Tipi (230V / 50Hz)", 
    emergency: "091 (Polis) / 061 (Ambulans) / 080 (İtfaiye) / 112 (Tavsiye Edilen Genel Hat)", 
    tip: "Öğleden sonra saat 14:00 - 17:00 arasında küçük esnaflar 'siesta' (öğle uykusu) sebebiyle dükkanlarını kapatabilir, planınızı buna göre yapın.", 
    customHistory: [
        "Prado Müzesi (Museo del Prado)",
        "Madrid Kraliyet Sarayı (Palacio Real)",
        "Buen Retiro Parkı (El Retiro)",
        "Plaza Mayor",
        "Puerta del Sol",
        "Gran Vía"
    ], 
    customFoods: [
        "Bocadillo de Calamares (Plaza Mayor çevresinde ekmek arası çıtır kalamar klasiği)",
        "Cocido Madrileño (Kış aylarında iç ısıtan, nohutlu ve etli geleneksel Madrid güveci)",
        "Churros con Chocolate San Ginés (1894'ten beri açık ünlü mekanda çikolatalı çıtır hamur)",
        "Huevos Rotos (Patates kızartması üzerinde kırılmış akışkan yumurta ve füme jambon)",
        "Tortilla de Patatas (Madrid barlarında içinin hafif nemli bırakıldığı meşhur patatesli yumurta)"
    ] 
},
"atina": { 
    country: "Yunanistan", 
    currency: "Euro (€)", 
    language: "Yunanca", 
    socket: "C ve F Tipi (230V / 50Hz)", 
    emergency: "100 (Polis) / 166 (Ambulans) / 199 (İtfaiye) / 112 (Genel Acil Durum)", 
    tip: "Akropolis tepesine çıkarken mermerler aşırı kaygan olduğundan altı tırtıklı ayakkbılar giyin ve yanınıza mutlaka bol su alın.", 
    customHistory: [
        "Akropolis (Acropolis & Parthenon)",
        "Akropolis Müzesi",
        "Plaka Bölgesi",
        "Antik Agora",
        "Syntagma Meydanı (Parlamento Binası)",
        "Lycabettus Tepesi"
    ], 
    customFoods: [
        "Souvlaki (Plaka tavernalarında pide arasında cacık soslu şiş et dürümü)",
        "Moussaka (Fırında fırınlanmış kıymalı, patlıcanlı ve beşamel soslu kat kat lezzet)",
        "Choriatiki (Yunan Salatası) (Üzerinde devasa kalıp beyaz peynir og kekikli zeytinyağı ile)",
        "Spanakopita (Atina fırınlarında sabahları sıcak tüketilen çıtır ıspanaklı ve feta peynirli börek)",
        "Frappé (Yunanistan'ın her köşesinde buzlu ve köpüklü klasik yaz kahvesi)"
    ] 
},
"kahire": { 
    country: "Mısır", 
    currency: "Mısır Lirası (EGP)", 
    language: "Arapça", 
    socket: "C ve F Tipi (220V / 50Hz)", 
    emergency: "122 (Polis) / 123 (Ambulans) / 180 (İtfaiye)", 
    tip: "Piramitler bölgesinde deve veya at turları için pazarlık yapmadan kesinlikle kabul etmeyin; yanınızda her zaman nakit Mısır Lirası bulundurun.", 
    customHistory: [
        "Gize Piramitleri og Sfenks",
        "Mısır Müzesi",
        "Han el-Halili Çarşısı",
        "Selahaddin Eyyubi Kalesi",
        "Al-Azhar Camii",
        "Kahire Kulesi"
    ], 
    customFoods: [
        "Koshari (Pirinç, makarna, mercimek, nohut, karamelize soğan ve acı soslu milli yemek)",
        "Ful Medames (Sabah kahvaltılarında kimyon ve zeytinyağlı ezilmiş bakla ezmesi)",
        "Ta'ameya (Mısır usulü, bakla ile yapılan yeşilliği bol içi yumuşak dışı çıtır falafel)",
        "Mahshi (Mısır baharatlı pirinç harcıyla doldurulmuş asma yaprağı, kabak ve biber dolmaları)",
        "Umm Ali (Kuru yemişler, süt ve milföy hamuruyla sıcak servis edilen Mısır ekmek kadayıfı)"
    ] 
},
"dubai": { 
    country: "Birleşik Arap Emirlikleri", 
    currency: "BAE Dirhemi (AED)", 
    language: "Arapça / İngilizce", 
    socket: "G Tipi (220V-240V / 50Hz)", 
    emergency: "999 (Polis) / 998 (Ambulans) / 997 (İtfaiye)", 
    tip: "Klimalar her yerde son seviyede çalıştığı için dışarısı sıcak olsa bile yanınıza ince bir hırka alın. Alışveriş merkezlerinde kıyafet kurallarına uymaya özen gösterin.", 
    customHistory: [
        "Burj Khalifa",
        "Dubai Mall",
        "Burj Al Arab",
        "Palm Jumeirah",
        "Dubai Marina",
        "Eski Dubai & Al Fahidi Tarihi Alanı"
    ], 
    customFoods: [
        "Al Harees (Ağır ateşte buğday ve etin ezilerek piştiği geleneksel emirlik yemeği)",
        "Shawarma (Lübnan usulü incecik lavaşta sarımsak soslu efsanevi döner dürüm)",
        "Luqaimat (Üzerine hurma şurubu (dibs) dökülmüş çıtır sıcak lokma tatlısı)",
        "Camel Burger (Dubai'nin modern lüks restoranlarında tadılabilecek deve eti burgeri)",
        "Gahwa (Arap Kahvesi) (Yanında taze Medine hurması ile sunulan safranlı ve kakuleli kahve)"
    ] 
},
"seul": { 
    country: "Güney Kore", 
    currency: "Güney Kore Wonu (KRW)", 
    language: "Korece", 
    socket: "C ve F Tipi (220V / 60Hz)", 
    emergency: "112 (Polis) / 119 (Ambulans ve İtfaiye)", 
    tip: "Toplu taşımada yaşlı, hamile ve engelli koltukları boş olsa dahi kesinlikle oturmayın. Adres bulmak için Google Maps yerine Naver Map uygulamasını indirin.", 
    customHistory: [
        "Gyeongbokgung Sarayı",
        "N Seoul Kulesi (Namsan Kulesi)",
        "Bukchon Hanok Köyü",
        "Myeongdong Alışveriş Bölgesi",
        "Dongdaemun Design Plaza (DDP)",
        "Changdeokgung Sarayı ve Gizli Bahçe"
    ], 
    customFoods: [
        "Korean BBQ (Masadaki ocakta kendi pişirdiğiniz marine edilmiş dana ve domuz etleri)",
        "Bibimbap (Sıcak taş kasede sebzeler, et, yumurta ve acı biber salçalı (gochujang) pilav)",
        "Tteokbokki (Myeongdong sokaklarında satılan acı ve tatlı sosta pişmiş pirinç kekleri)",
        "Chimaek (Kore tarzı ultra çıtır kızarmış tavuk ve buz gibi bira kombinasyonu)",
        "Bingsu (Üzerine meyve ve tatlı fasulye ezmesi eklenen sütlü buz rendesi tatlısı)"
    ] 
},
"sidney": { 
    country: "Avustralya", 
    currency: "Avustralya Doları (AUD)", 
    language: "İngilizce", 
    socket: "I Tipi Üçlü Açılı Priz (230V / 50Hz)", 
    emergency: "000 (Tüm Acil Durumlar: Polis, Ambulans, İtfaiye)", 
    tip: "Güneş koruyucu kreminiz olmadan dışarı çıkmayın; bölgedeki ozon tabakası ince olduğundan güneş çarpma riski çok yüksektir.", 
    customHistory: [
        "Sidney Opera Binası (Sydney Opera House)",
        "Sidney Liman Köprüsü (Sydney Harbour Bridge)",
        "Bondi Plajı (Bondi Beach)",
        "Darling Harbour",
        "Taronga Hayvanat Bahçesi",
        "Kraliyet Botanik Bahçeleri"
    ], 
    customFoods: [
        "Aussie Meat Pie (Maç günleri ve kafelerin vazgeçilmezi içi kıymalı küçük porsiyonlu turta)",
        "Kangaroo Steak (Sidney restoranlarında denenebilecek çok yağsız ve proteinli kanguru eti)",
        "Barramundi (Avustralya sularına has, ızgarada pişen lezzetli beyaz etli yerli balık)",
        "Vegemite on Toast (Kızarmış ekmeğe çok ince sürülen tuzlu ve yoğun mayalı Avustralya ezmesi)",
        "Pavlova (Dışı çıtır içi yumuşak, üzeri taze çilek ve krema kaplı hafif beze tatlısı)"
    ] 
},
"venedik": { 
    country: "İtalya", 
    currency: "Euro (€)", 
    language: "İtalyanca", 
    socket: "C, F ve L Tipi (230V / 50Hz)", 
    emergency: "113 (Polis) / 118 (Ambulans) / 115 (İtfaiye) / 112 (Genel Acil Durum)", 
    tip: "Şehir içi ulaşım sadece yürüyerek veya vaporettolarla (deniz otobüsü) sağlanır. Valizlerinizi köprülerden geçirirken taşımak zorunda kalacağınızı unutmayın.", 
    customHistory: [
        "San Marco Meydanı ve Bazilikası",
        "Dükler Sarayı (Palazzo Ducale)",
        "Rialto Köprüsü",
        "Büyük Kanal (Canal Grande)",
        "Ahlar Köprüsü (Ponte dei Sospiri)",
        "Burano ve Murano Adaları"
    ], 
    customFoods: [
        "Chicchetti (Venedik barlarında (Bacari) içeceklerin yanında sunulan küçük ekmek üstü mezeler)",
        "Risotto al Nero di Seppia (Sübye mürekkebi ile simsiyah yapılan deniz kokulu efsanevi risotto)",
        "Sarde in Saor (Soğan, çam fıstığı ve kuru üzümle marine edilmiş Venedik usulü sardalya)",
        "Risi e Bisi (Venedik Cumhuriyeti'nden kalma bezelyeli ve jambonlu kıvamlı pirinç çorbası)",
        "Bigoli in Salsa (Venedik'in kalın yerel makarnası, tuzlu hamsi ve soğan sosu ile)"
    ] 
},
"floransa": { 
    country: "İtalya", 
    currency: "Euro (€)", 
    language: "İtalyanca", 
    socket: "C, F ve L Tipi (230V / 50Hz)", 
    emergency: "113 (Polis) / 118 (Ambulans) / 115 (İtfaiye) / 112 (Genel Acil Durum)", 
    tip: "Uffizi ve Accademia gibi dünyaca ünlü sanat galerilerine girmek istiyorsanız mutlaka haftalar öncesinden rezervasyon biletinizi yaptırın.", 
    customHistory: [
        "Floransa Katedrali (Duomo di Firenze)",
        "Uffizi Galerisi",
        "Ponte Vecchio",
        "Galleria dell'Accademia (Davud Heykeli)",
        "Piazza della Signoria & Palazzo Vecchio",
        "Piazzale Michelangelo"
    ], 
    customFoods: [
        "Bistecca alla Fiorentina (Toskana sığırından odun ateşinde pişmiş devasa kalınlıkta Floransa bifteği)",
        "Lampredotto Sandviç (Mercato Centrale'de sakatat sevenler için meşhur işkembe sandvici)",
        "Schiacciata (All'Antico Vinaio gibi büfelerde sıra beklenerek alınan efsane Toskana ekmeği arası şarküteri)",
        "Pappa al Pomodoro (Kalan ekmekler, sarımsak, fesleğen ve domatesten yapılan geleneksel Toskana çorbası)",
        "Cantucci con Vin Santo (Yemekten sonra sert Toskana bademli kurabiyesinin tatlı şaraba batırılarak yenmesi)"
    ] 
},
"budapeşte": { 
    country: "Macaristan", 
    currency: "Macar Forinti (HUF)", 
    language: "Macarca", 
    socket: "C ve F Tipi (230V / 50Hz)", 
    emergency: "107 (Polis) / 104 (Ambulans) / 105 (İtfaiye) / 112 (Genel Acil Durum)", 
    tip: "Şehrin meşhur 'Ruin Pubs' (Harabe Barlar) konseptini akşamları mutlaka ziyaret edin ve termal hamamlara giderken yanınızda terlik ve mayo götürün.", 
    customHistory: [
        "Parlemanto Binası (Országház)",
        "Buda Kalesi (Budavári Palota)",
        "Balıkçı Tabyası (Fisherman's Bastion)",
        "Zincir Köprü (Szechenyi Chain Bridge)",
        "Aziz Stefan Bazilikası",
        "Kahramanlar Meydanı (Hősök Tere)"
    ], 
    customFoods: [
        "Gulyás (Gulaş) (Bol Macar paprikası, patates ve sığır etiyle yapılan nefis geleneksel çorba)",
        "Lángos (Üzerine sarımsaklı sos, ekşi krema og rendelenmiş peynir konulan Macar pişisi)",
        "Kürtőskalács (Baca Tatlısı) (Kömür ateşinde dönerek pişen, dışı şeker ve tarçın kaplı silindir tatlı)",
        "Chicken Paprikash (Paprika ve krema soslu tavuk yemeği, yanında nokedli eriştesi ile)",
        "Töltött Káposzta (Macar usulü, ekşi lahana og bol baharatlı kıymayla yapılan dev lahana sarması)"
    ] 
},
"lizbon": { 
    country: "Portekiz", 
    currency: "Euro (€)", 
    language: "Portekizce", 
    socket: "C ve F Tipi (230V / 50Hz)", 
    emergency: "112 (Tüm Durumlar İçin Ortak Acil Çağrı: Polis, Ambulans, İtfaiye)", 
    tip: "Tarihi 28 numaralı sarı tramvaya binerek şehri nostaljik bir turla gezebilirsiniz ancak dik yokuşlardaki kaygan taşlara karşı dikkatli yürüyün.", 
    customHistory: [
        "Belém Kulesi (Torre de Belém)",
        "Jeronimos Manastırı (Mosteiro dos Jerónimos)",
        "São Jorge Kalesi (Castelo de São Jorge)",
        "Alfama Bölgesi",
        "Santa Justa Asansörü (Elevador de Santa Justa)",
        "Praça do Comércio"
    ], 
    customFoods: [
        "Pastéis de Belém (Antik fırınında gizli tarifle yapılan, üzeri tarçınlı çıtır milföylü Portekiz turtası)",
        "Bacalhau à Brás (Portekiz'in meşhur morina balığının patates, yumurta ve maydanozla kavrulmuş hali)",
        "Sardinhas Assadas (Alfama sokaklarında ızgarada dumanı tüte tüte pişirilen taze koca sardalyalar)",
        "Bifana (Sarımsak ve beyaz şarapta marine edilmiş ince domuz etli geleneksel sandviç)",
        "Arroz de Marisco (Kişniş ve domates tabanlı sosla hazırlanan sulu ve enfes deniz ürünlü pilav)"
    ] 
},
"edinburgh": { 
    country: "İskoçya", 
    currency: "İngiliz Sterlini (£)", 
    language: "İngilizce / İskoçça", 
    socket: "G Tipi (230V / 50Hz)", 
    emergency: "999 (Polis, Ambulans, İtfaiye) / 112 (Cep Telefonundan Çalışır)", 
    tip: "Hava durumu gün içinde çok hızlı değişir. Sizi rüzgardan koruyacak su geçirmez katmanlı kıyafetler ve şemsiye seyahatinizin kurtarıcısı olacaktır.", 
    customHistory: [
        "Edinburgh Kalesi (Edinburgh Castle)",
        "Royal Mile",
        "Holyrood Sarayı (Palace of Holyroodhouse)",
        "Arthur's Seat",
        "Calton Hill",
        "İskoçya Ulusal Müzesi (National Museum of Scotland)"
    ], 
    customFoods: [
        "Haggis, Neeps and Tatties (Sakatat, şalgam ve patates püresi içeren İskoçya'nın milli yemeği)",
        "Cullen Skink (Tütsülenmiş mezgit balığı, patates ve kremayla yapılan yoğun kıvamlı çorba)",
        "Shortbread (Bol tereyağlı, ağızda kum gibi dağılan geleneksel İskoç kurabiyesi)",
        "Scotch Pie (İçi genellikle koyun etiyle doldurulmuş çıtır ve sıcak küçük etli turta)",
        "Scottish Salmon (Dünyaca ünlü taze veya tütsülenmiş nehir somon balığı lezzeti)"
    ] 
},
"dubrovnik": { 
    country: "Hırvatistan", 
    currency: "Euro (€)", 
    language: "Hırvatça", 
    socket: "C ve F Tipi (230V / 50Hz)", 
    emergency: "192 (Polis) / 194 (Ambulans) / 193 (İtfaiye) / 112 (Genel Acil Durum)", 
    tip: "Eski şehir surlarına çıkış biletini sabah erken saatlerde alın, aksi takdirde öğlen sıcağında gölgelik alan bulamaz ve yürümekte çok zorlanırsınız.", 
    customHistory: [
        "Dubrovnik Surları (City Walls)",
        "Eski Şehir (Old Town)",
        "Stradun Caddesi",
        "Lovrijenac Kalesi",
        "Dubrovnik Teleferiği (Cable Car)",
        "Lokrum Adası"
    ], 
    customFoods: [
        "Crni Rižoto (Adriyatik'ten taze mürekkep balığı ile yapılan simsiyah Akdeniz risottosu)",
        "Peka (Geleneksel demir çan altında kömürde saatlerce ağır ağır pişen ahtapot veya et yemeği)",
        "Dubrovačka Rozata (Venedik esintili, karamel soslu Dubrovnik usulü hafif puding tatlısı)",
        "Buzara (Sarımsak, zeytinyağı ve beyaz şarap sosunda pişmiş taze Adriyatik midyeleri)",
        "Zelena Menestra (Tarihi geçmişe sahip kurutulmuş et, pastırma ve lahana içeren Dubrovnik güveci)"
    ] 
},
"brüksel": { 
    country: "Belçika", 
    currency: "Euro (€)", 
    language: "Fransızca / Felemenkçe", 
    socket: "C ve E Tipi (230V / 50Hz)", 
    emergency: "101 (Polis) / 100 (Ambulans ve İtfaiye Ortak Hat) / 112 (Genel Acil Durum)", 
    tip: "Şehir merkezindeki Grand Place çevresindeki butik dükkanlardan çikolata tadımı yapabilir, çizgi roman duvar resimlerini bulmak için sokakları keşfedebilirsiniz.", 
    customHistory: [
        "Grand Place (Grote Markt)",
        "Atomium",
        "Manneken Pis",
        "Les Galeries Royales Saint-Hubert",
        "Cinquantenaire Parkı (Parc du Cinquantenaire)",
        "Müzik Enstrümanları Müzesi (MIM)"
    ], 
    customFoods: [
        "Moules-Frites (Kereviz ve beyaz şarap soslu tencere midyesi, yanında patates kızartmasıyla)",
        "Belgian Waffle (Üzerine çikolata sosu, çilek ve krema eklenen kalın Brüksel usulü gofret)",
        "Praline Çikolataları (Neuhaus veya Pierre Marcolini gibi dünyaca ünlü yerlerde el yapımı çikolata)",
        "Carbonnade Flamande (Bira ve soğan sosunda saatlerce pişirilmiş nefis Belçika usulü et yahnisi)",
        "Speculoos (Tarçın, zencefil ve karanfil baharatlı geleneksel çıtır Belçika bisküvisi)"
    ] }
};


const proGenerator = {
    generate: (cityName) => {
        const searchKey = cityName.trim().toLowerCase();
        const specificData = verifiedCityDatabase[searchKey];
        const formattedCity = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

        const countryText = specificData ? specificData.country : "Fransa";
        const currencyText = specificData ? specificData.currency : "Seçilen ülkenin resmi para ünitesi aktif olarak kullanılmaktadır.";
        const languageText = specificData ? specificData.language : "Bu coğrafyada yerel ulusal resmi diller konuşulmaktadır.";
        const socketText = specificData ? specificData.socket : "Standart Bölge Elektrik Altyapısı standartları geçerlidir.";
        const emergencyText = specificData ? specificData.emergency : "Acil durumlarda doğrudan acil çağrı merkezini arayabilirsiniz.";
        const tipText = specificData ? specificData.tip : "Tarihi dokuyu keşfetmek için rahat yürüyüş ayakkabıları seçmeniz önerilir.";

        return {
            title: `${formattedCity} Detaylı Turist Rehberi`,

            mapUrl: `https://maps.google.com/maps?q=${encodeURIComponent(formattedCity)}&t=&z=13&ie=UTF8&iwloc=&output=embed`,
            days: [
                {
                    title: "1. Gün: Tarih ve Şehir Merkezi Keşfi",
                    slots: [
                        `09:00 - Ödüllü bir yerel mekanda ${formattedCity} usulü sabah kahvaltısı`,
                        `10:30 - Şehrin simgesi olan en eski tarihi meydan ve anıtların ziyareti`,
                        `13:00 - Geleneksel öğle yemeği ve meşhur sokak lezzetleri tadımı`,
                        `15:00 - En çok ziyaret edilen merkezi müzenin rehber eşliğinde gezilmesi`,
                        `18:30 - Şehri en yüksekten gören panoramik kule veya tepede gün batımı izleme`,
                        `20:30 - Akşam ışıkları altında nehir/sahil kenarında yürüyüş ve akşam yemeği`
                    ]
                },
                {
                    title: "2. Gün: Kültür, Alışveriş ve Yerel Hayat",
                    slots: [
                        `09:30 - Şehrin ünlü botanik parkında veya yeşil alanlarında sabah yürüyüşü`,
                        `11:30 - Yerel halkın el işi ürünler sattığı tarihi pazar yeri turu`,
                        `14:00 - Bölgeye özgü en meşhur tatlı veya kahve çeşidinin denenmesi`,
                        `16:00 - Şehrin ikonikleşmiş modern sanat galerisi veya tasarım sokakları`,
                        `19:30 - Geleneksel müzik veya kültürel bir sahne gösterisi izleme`
                    ]
                }
            ],
            history: (specificData && specificData.customHistory) ? specificData.customHistory : [
                `${formattedCity} Antik Şehir Surları ve Tarihi Giriş Kapısı`,
                "UNESCO Dünya Mirası Listesindeki Korunan Alanlar",
                "Asırlık Tarihe Sahip Merkezi İbadethane ve Saraylar",
                "Şehrin Kurtuluşunu ve Kuruluşunu Simgeleyen Dev Anıt Kompleksi"
            ],
            foods: (specificData && specificData.customFoods) ? specificData.customFoods : [
                `${formattedCity} İmza Ana Yemeği (Et, sebze ve yerel sosların karışımı)`,
                "Nesillerdir Değişmeyen Reçeteli Geleneksel Çorba",
                "Sadece Bu Bölgede Bulabileceğiniz Tescilli Sokak Atıştırmalığı",
                "Tarihi Fırınlarda Üretilen Özel Şehir Tatlısı"
            ],

            culture: [
                `🌍 Ziyaret Edilen Ülke: ${countryText} (${formattedCity})`,
                `💰 Resmi Para Birimi: ${currencyText}`,
                `🗣️ Resmi Dil: ${languageText}`,
                `🔌 Priz ve Voltaj Tipi: ${socketText}`,
                `🚨 Acil Durum Hatları: ${emergencyText}`,
                `💡 Gezgin İpucu & Kültür Notu: ${tipText}`,
                "Para Birimi ve Bahşiş: Bölgedeki yaygın ödeme alışkanlıkları ve adolescent bahşiş oranları.",
                "Ulaşım Kolaylığı: Şehir içi en ucuz seyahat için günlük kombine turist kartı avantajları.",
                "Yerel Dil ve İletişim: Esnafla iletişimde hayat kurtaran 5 temel yerel selamlama kelimesi.",
                "Kültürel Hassasiyetler: Tarihi ve dini mekan ziyaretlerinde dikkat edilmesi gereken kıyafet kuralları."
            ]
        };
    }
};


const cityInput = document.getElementById('cityInput');
const autocompleteList = document.getElementById('autocompleteList');
const planBtn = document.getElementById('planBtn');
const loader = document.getElementById('loader');
const resultSection = document.getElementById('resultSection');
const resultTitle = document.getElementById('resultTitle');
const googleMap = document.getElementById('googleMap');

const daysContainer = document.getElementById('daysContainer');
const historyList = document.getElementById('historyList');
const foodList = document.getElementById('foodList');
const cultureList = document.getElementById('cultureList');
const filterButtons = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');


if (cityInput) {
    cityInput.addEventListener('input', function() {
        const val = this.value;
        autocompleteList.innerHTML = '';
        if (!val || val.length < 2) { autocompleteList.classList.add('hidden'); return; }

        const sample = ["Roma", "Paris", "Londra", "Tokyo", "New York", "Berlin", "Barcelona", "Amsterdam", "İstanbul", "Viyana", "Prag", "Madrid", "Atina", "Kahire", "Dubai", "Seul", "Sidney"];
        const filtered = sample.filter(c => c.toLowerCase().includes(val.toLowerCase()));
        
        if(!filtered.includes(val)) { filtered.push(val.charAt(0).toUpperCase() + val.slice(1)); }

        filtered.slice(0, 5).forEach(city => {
            const item = document.createElement('div');
            item.innerHTML = `<strong>${city.substr(0, val.length)}</strong>${city.substr(val.length)}`;
            item.addEventListener('click', function() {
                cityInput.value = city;
                autocompleteList.classList.add('hidden');
            });
            autocompleteList.appendChild(item);
        });
        autocompleteList.classList.remove('hidden');
    });
}


filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const target = this.getAttribute('data-target');

        categoryCards.forEach(card => {
            if (target === 'all') {
                card.classList.remove('hidden');
            } else {
                if (card.getAttribute('data-category') === target) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});


if (planBtn) {
    planBtn.addEventListener('click', () => {
        const cityName = cityInput.value.trim();
        if (!cityName) { alert("Lütfen bir şehir adı girin!"); return; }

        loader.classList.remove('hidden');
        resultSection.classList.add('hidden');

        setTimeout(() => {
            loader.classList.add('hidden');
            const data = proGenerator.generate(cityName);

            resultTitle.textContent = data.title;
            

            if (googleMap) googleMap.src = data.mapUrl;


            const ticketBtn = document.getElementById('ticketBtn');
            const ticketBtnText = document.getElementById('ticketBtnText');
            if (ticketBtn && ticketBtnText) {
                const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
                ticketBtnText.textContent = `${formattedCityName} Uçak & Otel Fiyatlarını İncele`;
                ticketBtn.href = `https://www.google.com/travel/flights?q=Flights%20to%20${encodeURIComponent(cityName)}%20from%20Turkey`;
            }



            daysContainer.innerHTML = "";
            data.days.forEach(day => {
                const dayDiv = document.createElement('div');
                dayDiv.classList.add('day-timeline');
                let slotsHTML = "";
                day.slots.forEach(slot => slotsHTML += `<div class="time-slot"><i class="fa-solid fa-clock"></i> ${slot}</div>`);
                dayDiv.innerHTML = `<h4>${day.title}</h4>${slotsHTML}`;
                daysContainer.appendChild(dayDiv);
            });


           historyList.innerHTML = "";
            data.history.forEach(item => {
                const li = document.createElement('li');
                li.style.cursor = "pointer"; 
                li.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${item}`;
                

                li.addEventListener('click', () => {

                    const locationUrl = `https://maps.google.com/maps?q=$?q=${encodeURIComponent(item)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
                    if (googleMap) {
                        googleMap.src = locationUrl;
                    }
                    

                    document.querySelectorAll('#historyList li').forEach(el => el.style.color = '');
                    li.style.color = 'var(--primary)';
                });

                historyList.appendChild(li);
            });

            foodList.innerHTML = "";
            data.foods.forEach(item => foodList.innerHTML += `<li><i class="fa-solid fa-cookie-bite"></i> ${item}</li>`);


            cultureList.innerHTML = "";
            data.culture.forEach(item => cultureList.innerHTML += `<li><i class="fa-solid fa-sparkles"></i> ${item}</li>`);


            filterButtons.forEach(b => b.classList.remove('active'));
            if (filterButtons.length > 0) filterButtons[0].classList.add('active'); 
            categoryCards.forEach(card => card.classList.remove('hidden'));

            resultSection.classList.remove('hidden');
            resultSection.scrollIntoView({ behavior: 'smooth' });

        }, 2000);
    });
}


document.addEventListener('click', (e) => { 
    if (cityInput && autocompleteList && e.target !== cityInput) {
        autocompleteList.classList.add('hidden'); 
    } 
});
// Dışarı tıklanınca arama kutusunu kapat
document.addEventListener('click', (e) => { 
    if (cityInput && autocompleteList && e.target !== cityInput) {
        autocompleteList.classList.add('hidden'); 
    } 
});
