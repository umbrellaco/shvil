// Generated by CoffeeScript 1.3.3
(function() {
  var Cities, City, CityList, CityListItem, CityMap, MarkerLayer, blue, israelExtent, rdbu, red, root, scoreGrades,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.guide = [
    {
      "category": "דרכי התקשרות עם הרשות המקומית וראש הרשות",
      "fields": ["הכתובת הפיזית של משרדי הרשות", "מספרי טלפון (מרכזיית הרשות/שלוחות)", "4. אימייל כללי לרשות/ טופס פניה מקוון", "5. שם ראש הרשות", "6. מספר טלפון של ראש הרשות", "7. אימייל/ טופס מקוון ליצירת קשר עם ראש הרשות"]
    }, {
      "category": "דרכי התקשרות עם האגף והמחלקה",
      "fields": ["8. קיים מוקד עירוני באתר הרשות", "9. במוקד העירוני יש אפשרות מעקב אחר הטיפול בפניות", "10. שם מנהל/ת האגף", "11. רמת האגף: טלפון", "רמת האגף: אימייל/טופס מקוון/צור קשר", "14. כתובת פיזית של האגף", "15. שעות קבלת קהל באגף", "16. שם מנהל/ת המחלקה (בהנחה ששמות המחלקות קיימים)", "17. רמת המחלקה: טלפון"]
    }, {
      "category": "דרכי התקשרות עם חברי מועצה",
      "fields": ["18. רשימה של חברי מועצה", "19. מופיעה רשימה של סמכויותיהם של חברי המועצה(לדוגמה, נושא תיק התחדשות עירונית, או חבר/ה בוועדה עירונית מסוימת)", "20. לכל חבר/ת מועצה מצוין אימייל/טופס מקוון", "21. מצוין מספר טלפון נייח", "22. יש/אין פורומים", "23. כן/לא נוכחות בפייסבוק / טוויטר ועוד"]
    }, {
      "category": "מבקר העירייה",
      "fields": ["24. פרסום הדו\"ח השנתי האחרון (2011) של מבקר הרשות", "25. פרסום דו\"חות השנתיים הקודמות (2009-2010) של מבקר הרשות", "26. פרסום פרטי קשר של מבקר הרשות, ודרכי הפנייה אליו"]
    }, {
      "category": "שקיפות: לפי חוק חופש המידע",
      "fields": ["27. פרסום הדו\"ח השנתי האחרון (2011)", "28. פרסום דו\"חות השנתיים הקודמות (2010-2009)", "29. המבנה הארגוני מוצג באתר", "30. פרסום חוק חופש המידע", "31. פרסום שם הממונה על חופש המידע", "32. אימייל אישי/טופס פנייה מקוון לממונה", "33. מספר הטלפון במשרד הממונה"]
    }, {
      "category": "פניות הציבור",
      "fields": ["34. פרסום שם הממונה על פניות/תלונות הציבור", "35. אימייל אישי/טופס פנייה מקוון לממונה", "36. מספר הטלפון במשרד הממונה"]
    }, {
      "category": "שקיפות: נדרש ע\"פ חוק חופש המידע",
      "fields": ["37. רשימת מאגרי מידע", "38. פרסום מאגרי מידע באתר", "39. פרטי קשר למנהל/ת מאגר המידע", "40. סקירת עיקרי פעולות הרשות המתוכננות לשנה הנוכחית (2012)", "41. פרסום חוקי עזר עירוניים (מספיק אם יש קישור)"]
    }, {
      "category": "מענקים ותמיכות",
      "fields": ["42. רשימת קרנות ומלגות שבמימון הרשות הציבורית (ע\"פ חוק חופש המידע)", "43. קריטריונים למתן קרנות ומלגות שבמימון הרשות הציבורית (תוספת – המידע אינו נדרש ע\"פ חוק חופש המידע)", "44. רשימת תמיכות וחסויות שנתנה הרשות הציבורית בשנה החולפת (ע\"פ חוק חופש המידע)", "45. קריטריונים למתן תמיכות וחסויות (תוספת – המידע אינו נדרש ע\"פ חוק חופש המידע)", "46. רשימת מוסדות הציבור שזכו לתמיכה בשנה החולפת", "47. היקף התמיכה במוסדות הציבור", "48. ניתן להגיש בקשה למענק באמצעות אתר האינטרנט", "49. הקצאת מבני ציבור", "50. שינוי ייעוד של מבני ציבור", "51. פרסום מידע בנוגע להקצאת קרקע כתמיכה למטרות ציבוריות", "52. פרסום הקריטריונים לזכייה", "53. פרסום שמות המבקשים", "54. פרסום שמות הזוכים", "55. פרסום מוקדם של סדר יום של ועדת מענקים תמיכות", "56. פרסום של הפרוטוקולים של דיוני ועדת מענקים ותמיכות"]
    }, {
      "category": "שקיפות: לא נדרש ע\"פ החוק",
      "fields": ["57. פרסום קוד אתי", "58. פרסום טפסים לגבי ניגודי עניינים של נבחרי ציבור ובכירים (לדוגמה, ראש הרשות וסגניו, חברי מועצה, מנכ\"ל והנהלה בכירה)", "59. פרסום הסכמים קואליציוניים", "60. מידע סטטיסטי: פרסום המידע הסטטיסטי המופק ברשות המקומית (דמוגרפיה/חינוך; ללא קשר למאגרי המידע)", "61. מידע סטטיסטי: פרסום המידע הנ\"ל תוך התייחסות בעיבוד הנתונים להשלכות מגדריות; בעקבות תיקון חקיקה"]
    }, {
      "category": "ישיבות מועצה",
      "fields": ["62. פרסום מועדי הישיבות ומיקומן", "63. האם קיימת הזמנה/עידוד/קריאה לתושבים להשתתף בדיון", "64. פרסום מסמכים וטיוטות הקשורים לישיבות הקרובות", "65. ישיבות: מוצג מראש סדר היום (לא בפרוטוקול)", "66. פרוטוקולים: גם בווידיאו ואודיו (לציין אם נמצאו פרוטוקולים באודיו בלבד)"]
    }, {
      "category": "כספים: תקציב – לפי חוק חופש המידע",
      "fields": ["פרסום התקציב לשנה הנוכחית (2012)", "פרסום תקציר המספק את עיקרי המידע, כולל סכומים", "פרסום תקציב השנתיים הקודמות (לפי החוק: רק לשנה החולפת)", "פירוט הוצאות הרשות הציבורית בשנה החולפת, לפי סעיפי התקציב", "פרסום תכנון לעומת ביצוע (מקורות כספיים ושימושים לכל מחלקה)"]
    }, {
      "category": "כספים: תקציב – המידע אינו נדרש לפי חוק חופש המידע",
      "fields": ["ריכוז מידע על סעיפי ההכנסות הגבוהים ביותר (תקבולים, זיכיונות) – כולל הסברים", "ריכוז מידע על סעיפי ההוצאות הגבוהים ביותר (ספקים, דלק לסוגיו, השימוש בכלי רכב של הרשות) – כולל הסברים", "פרסום חמשת מקבלי השכר הגבוה ברשות לפי תפקידים בלבד (ללא שמות)", "פרסום הדו\"חות הכספיים של הרשות לשנה החולפת (2011: מאזן + דו\"ח רווח והפסד)", "פרסום הדו\"חות הכספיים בשנתיים הקודמות (2009-2010)", "פרסום מוקדם של סדר היום, והפרוטוקולים של דיוני התקציב בוועדת הכספים"]
    }, {
      "category": "כספים: ארנונה",
      "fields": ["78. תעריפי ארנונה (פרטית, עסקית, ציבורית)", "79. קריטריונים להנחות ופטורים בארנונה"]
    }, {
      "category": "חוזים ומכרזים: תשתית",
      "fields": ["80. פרסום המכרזים באתר", "81. פרסום קריטריונים במכרז והמשקל לכל קריטריון", "82. האם העירייה אימצה מסמך מדיניות נגד שחיתות במכרזים", "83. פרסום תכנון שנתי של תכניות הרכש", "84. פרסום פרוטוקולים של ועדת הפטורים ו/או החלטות ונימוקים (פטור ממכרז ו/או הכרזה על ספק יחיד)", "85. פרסום תוצאות המכרזים באתר העירייה (בנפרד מפרוטוקול הוועדה)", "86. יש RSS (הודעות ע\"י אמייל/לנייד על עדכון באתר)", "87. פרסום מתן זיכיונות על ידי העירייה"]
    }, {
      "category": "חוזים ומכרזים: כוח אדם",
      "fields": ["88. פרסום המכרזים באתר", "89. פרסום קריטריונים במכרז והמשקל לכל קריטריון", "90. פרסום קריטריונים לקבלת עובד/ת שלא במסגרת מכרז"]
    }, {
      "category": "רישוי עסקים",
      "fields": ["91. פרסום מידע על התנאים למתן רישיון עסק ותהליך הרישוי למבקשי הרישיון", "92. פרסום מידע לציבור על הבקשות לרישוי עסקים (במיוחד באזורים שיש בהם תמהיל של מסחר ומגורים)"]
    }, {
      "category": "תכנון ובנייה",
      "fields": ["93. פרסום תכניות הבנייה לאנשי מקצוע (ארכיטקטים, עורכי דין)", "94. פרסום תכניות הבנייה בשפה ברורה ובאופן המאפשר התמצאות קלה (לדוגמה, אפשרות חיפוש/סינון ע\"פ מיקום, ע\"פ ועדות, ע\"פ לו\"ז וכד'. אפשר לתאר את המידע הקיים)", "95. מידע קונקרטי לתושב בנושאי רישוי ופיקוח והיתרי בנייה (התהליך לאישור סגירת מרפסת)", "96. פרסום הנוהל לשינוי ייעוד של מבני ציבור", "97. פרסום הצעות/ מועמדים לפני שינוי ייעוד של מבני ציבור", "98. פרסום החלטות ונימוקים לגבי שינוי ייעוד של מבני ציבור", "99. העלאת טיוטות של תוכניות תכנון ובנייה לדיון ציבורי (לציין אם התוכניות כוללות שינוי ייעודי קרקע)", "100. מערכת GIS (הצגת נתונים על גבי מפה) כוללת מידע על ייעודי קרקע."]
    }, {
      "category": "תכנון וסביבה: לפי חוק חופש המידע (סכימת ממצאים לכלל סוגי הזיהום; פירוט בטבלה)",
      "fields": ["101. זהות המקור לפליטת הזיהום (חומרים לסביבה או לרעש, ריח או קרינה) שלא ברשות היחיד", "102. שם החומר או קבוצת חומרים הנפלטים לסביבה, כמותם וריכוזם", "103. הסוג והרמה של הרעש הריח והקרינה הנמדדים בסביבה", "104. מיקום מועד ושיטת איסוף המידע וכן הגורם שאסף את המידע בעבור הרשות", "105. אזור גיאוגרפי ומועד פליטת החומר לסביבה ויצירת הרעש, הריח החומר או הקרינה", "106. האם החומר נפלט אל האוויר, הים, הקרקע או המים", "107. המידע הסביבתי מוצג בליווי ביאורים והקשרים, וכולל מידע מעובד כמו דו\"חות תקופתיים"]
    }, {
      "category": "תכנון וסביבה: המידע אינו נדרש לפי חוק חופש המידע",
      "fields": ["108. המידע הסביבתי כולל הסבר על ההשלכות הבריאותיות והסביבתיות של סוגי הזיהום השונים", "109. המידע הסביבתי ברור וגלוי. לתאר את אופני הצגתו: דיווח טכני בלבד/ שורה תחתונה/ מפה/ מגמות", "110. לציין אם, בנוסף למידע מעובד, יש גישה למאגר הנתונים (המאפשר, לדוגמה, השוואות לאורך זמן, בין רשויות, בין שכונות וכד')", "111. האם יש פרסום של תהליכי קבלת החלטות בתחום איכות סביבה (בנוסף לבדיקת ועדת איכות הסביבה כחלק מבדיקת הוועדות לעיל)", "112. האם יש פרסום קריטריונים לזיהום סביבתי, או קישור לחקיקה הארצית בנושא", "113. האם קיים פרסום מדידת זיהום אויר, בתדירות גבוהה", "114. האם יש פרסום של מיקום פחי מחזור, מכל הסוגים: נייר, רטוב, פלסטיק, זכוכית, סוללות, מצברים, שמנים", "115. האם יש פרסום של מיקום קומפוסטרים, אתרי מחזור לפסולת", "116. האם יש מידע על נוהל פינוי במקרה שלתושב אין יכולת לפנות בעצמו", "117. האם יש פרסום של מספר גנים ציבוריים ביחס לשטח העיר", "118. האם יש פרסום לגבי מיקום למסירת בגדי יד שנייה", "119. לפרט האם קיימים מסמכים בנושאים: זיהום אוויר, מים, אנרגיה, והתייעלות אנרגטית (UN) (טווח הציונים: 0-3)  האנרגיה. יש קידום של נושא הפרדת האשפה הביתית וקריאה להצטרפות לשולחן עגול בהשתתפות התושבים לדיון על הפרויקט. יש פרויקט של נטיעות עצים http://www.ashdod.muni.il/RESIDENTSERVICE/NETIOT/Pages/default.aspx ותכנית ל\"עיר ירוקה\".", "120. פרסום תוכניות קיימות ומדיניות פיתוח (בנייה/סביבה)"]
    }, {
      "category": "חברות עירוניות",
      "fields": ["121. פרסום רשימת החברות העירוניות", "122. פרסום רשימת חברי הדירקטוריון של כל החברות העירוניות (כולל חברי מועצה ונציגי ציבור)", "123. קישור לאתר החברות שבבעלות העירייה, כולל בעלות חלקית, או תת-אתר באתר העירוני עבורן", "125. דו\"חות שנתיים של החברות העירוניות"]
    }
  ];

  root.data = [
    {
      "website": "http://www.tel-aviv.gov.il/Hebrew/Index.asp",
      "data": [[1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0], [1.0, 0.5, 1.0, 1.0, 0.0, 1.0], [1.0, 1.0, 1.0], [0.5, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0], [1.0, 1.0, 0.0, 1.0, 1.0], [0.5, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0], [0.0, 0.0, 1.0, 1.0, 0.0], [1.0, 0.0, 0.0, 1.0, 1.0], [1.0, 0.5, 1.0, 1.0, 0.5], [0.0, 0.0, 0.0, 0.0, 0.0, 1.0], [1.0, 1.0], [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.5, 0.0], [1.0, 0.0], [1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.5], [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], [1.0, 0.5, 0.5, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.5, 1.0], [1.0, 1.0, 1.0, 1.0]],
      "name": "תל אביב-יפו",
      "coordinates": [34.777821, 32.066157],
      "id": 3
    }, {
      "website": "http://www.jerusalem.muni.il/jer_main/defaultnew.asp?lng=1",
      "data": [[1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 0.0, 1.0], [1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0], [0.0, 0.0, 0.0, 1.0, 1.0], [1.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0], [1.0, 0.0, 0.0, 1.0, 0.0], [1.0, 0.0, 0.0, 0.0, 1.0], [0.5, 0.5, 0.5, 0.5, 0.5], [1.0, 0.0, 0.0, 1.0, 1.0, 0.0], [1.0, 1.0], [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.5, 1.0], [1.0, 0.0], [0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0], [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.5, 1.0], [1.0, 0.0, 1.0, 0.0]],
      "name": "ירושלים",
      "coordinates": [35.213711, 31.768318],
      "id": 2
    }, {
      "website": "http://www.holon.muni.il/",
      "data": [[1.0, 1.0, 0.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 0.5, 0.5, 1.0, 1.0], [0.0, 1.0, 1.0], [0.5, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0], [1.0, 0.0, 1.0], [0.0, 0.0, 0.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0], [0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 0.0, 0.0, 1.0, 0.0], [1.0, 0.5, 0.5, 1.0, 0.0], [0.5, 0.5, 0.0, 1.0, 1.0, 0.0], [1.0, 1.0], [1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0], [1.0, 0.5, 0.0], [1.0, 0.0], [1.0, 1.0, 0.5, 0.0, 0.0, 0.0, 1.0, 1.0], [1.0, 0.5, 0.5, 0.5, 1.0, 0.5, 0.5], [1.0, 0.5, 0.5, 0.0, 1.0, 1.0, 0.5, 0.0, 0.0, 0.0, 1.0, 0.5, 1.0], [1.0, 1.0, 1.0, 0.0]],
      "name": "חולון",
      "coordinates": [34.787386, 32.015832],
      "id": 1
    }, {
      "website": "http://www.rishonlezion.muni.il/",
      "data": [[1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0], [0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0], [1.0, 0.0, 0.0, 0.0, 1.0], [0.0, 0.0, 0.5, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0], [0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 0.0, 0.0, 1.0, 0.5], [0.5, 0.0, 0.5, 1.0, 0.0], [0.5, 0.5, 0.0, 0.0, 0.0, 0.0], [1.0, 1.0], [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 0.5, 0.0], [1.0, 0.0], [1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0], [0.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 0.0, 1.0, 1.0, 0.5, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0], [1.0, 0.0, 1.0, 0.0]],
      "name": "ראשון לציון",
      "coordinates": [34.80705, 31.961544],
      "id": 7
    }, {
      "website": "http://www.haifa.muni.il/haifa/Pages/haifa.aspx",
      "data": [[1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 0.5, 0.5, 0.5, 0.0, 1.0], [1.0, 1.0, 1.0], [0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0], [0.0, 0.0, 1.0], [1.0, 0.0, 0.0, 1.0, 1.0], [0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 1.0, 1.0], [1.0, 1.0, 0.0, 1.0, 0.0], [1.0, 0.0, 0.5, 1.0, 1.0], [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 1.0], [1.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.5, 0.0], [1.0, 0.0], [1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0], [0.5, 0.5, 0.0, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0], [1.0, 1.0, 1.0, 0.5]],
      "name": "חיפה",
      "coordinates": [34.974339, 32.83036],
      "id": 1
    }, {
      "website": "http://www.kfar-saba.muni.il/",
      "data": [[1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 0.0, 0.5, 1.0, 0.0, 1.0], [0.0, 1.0, 1.0], [0.5, 0.5, 1.0, 0.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0], [1.0, 0.0, 0.0, 1.0, 1.0], [0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0], [0.0, 0.0, 1.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 1.0], [0.5, 0.5, 1.0, 0.5, 0.0], [0.5, 0.5, 0.0, 0.0, 1.0, 0.0], [1.0, 1.0], [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 0.5, 0.0], [1.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0], [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], [0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0], [1.0, 1.0, 1.0, 0.0]],
      "name": "כפר סבא",
      "coordinates": [34.907612, 32.178194],
      "id": 5
    }, {
      "website": "http://www.raanana.muni.il/",
      "data": [[1.0, 1.0, 0.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0], [1.0, 0.0, 0.5, 0.5, 0.0, 1.0], [1.0, 1.0, 1.0], [0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0], [0.0, 0.0, 0.0, 0.0, 1.0], [0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0], [0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.0, 0.5, 1.0, 0.0], [0.0, 0.0, 0.0, 1.0, 1.0, 0.0], [1.0, 1.0], [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 0.5, 0.0], [1.0, 0.0], [0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0], [0.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0], [0.0, 0.0, 0.5, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 0.0]],
      "name": "רעננה",
      "coordinates": [34.871328, 32.18478],
      "id": 10
    }, {
      "website": "http://www.netanya.muni.il/",
      "data": [[1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 0.5, 0.5, 1.0, 0.0, 0.0], [1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0], [0.0, 0.0, 0.0, 1.0, 1.0], [1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 1.0, 0.0], [0.0, 0.0, 0.0, 1.0, 0.0], [0.0, 0.0, 1.0, 0.5, 0.5], [0.0, 0.0, 0.0, 1.0, 1.0, 0.0], [0.0, 0.0], [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 0.5, 0.0], [1.0, 0.0], [0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0], [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 1.0, 1.0, 1.0]],
      "name": "נתניה",
      "coordinates": [34.853197, 32.321457],
      "id": 9
    }, {
      "website": "http://www.beer-sheva.muni.il/openning.asp?Lang=1",
      "data": [[1.0, 1.0, 0.0, 1.0, 1.0, 1.0], [1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 0.5, 0.5, 0.5, 0.0, 0.0], [0.0, 1.0, 1.0], [0.5, 0.5, 0.5, 0.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0], [1.0, 0.0, 0.0, 0.0, 1.0], [0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.0, 0.5, 0.0, 0.0], [0.0, 0.0, 0.0, 1.0, 1.0, 0.0], [1.0, 1.0], [1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.5, 0.0], [1.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], [1.0, 0.5, 0.5, 1.0, 0.0, 1.0, 0.5, 1.0, 0.0, 0.0, 0.0, 0.5, 1.0], [1.0, 0.0, 1.0, 0.0]],
      "name": "באר שבע",
      "coordinates": [34.791464, 31.252972],
      "id": 8
    }, {
      "website": "http://www.ashdod.muni.il/ResidentService/bitahon/Pages/mazavherum.aspx ",
      "data": [[1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.5, 1.0, 0.0], [1.0, 0.5, 0.5, 0.0, 0.0, 1.0], [1.0, 1.0, 1.0], [0.5, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0], [0.0, 0.0, 0.0, 1.0, 1.0], [1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 1.0, 1.0], [1.0, 1.0, 0.0, 0.0, 0.5], [0.5, 0.0, 0.0, 0.5, 0.5], [0.5, 0.5, 0.0, 1.0, 1.0, 0.0], [1.0, 1.0], [1.0, 0.5, 0.0, 0.5, 0.0, 0.0, 1.0, 0.0], [1.0, 0.5, 0.0], [1.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0], [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0], [1.0, 0.0, 1.0, 0.0]],
      "name": "אשדוד",
      "coordinates": [34.655316, 31.80438],
      "id": 14
    }, {
      "website": "http://www.herzliya.muni.il/",
      "data": [[1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 0.5, 0.5, 0.5, 0.0, 1.0], [1.0, 1.0, 1.0], [0.0, 0.5, 0.0, 0.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0], [0.0, 0.0, 0.0, 0.0, 1.0], [1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.5, 0.5, 0.5], [0.5, 0.5, 0.0, 0.0, 0.0, 0.0], [1.0, 1.0], [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.5, 0.0], [1.0, 0.0], [1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0], [0.0, 0.5, 0.0, 0.5, 0.5, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.0, 1.0, 0.0]],
      "name": "הרצליה",
      "coordinates": [34.844677, 32.162412],
      "id": 12
    }, {
      "website": "http://www.petah-tikva.muni.il/",
      "data": [[1.0, 1.0, 0.0, 1.0, 1.0, 1.0], [1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 0.0], [1.0, 1.0, 0.5, 0.0, 0.0, 1.0], [0.0, 1.0, 1.0], [0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0], [1.0, 1.0, 1.0], [0.0, 0.0, 0.0, 0.0, 1.0], [0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 1.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.5, 1.0, 0.0], [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 1.0], [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 0.5, 0.0], [0.0, 0.0], [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0], [0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.5], [0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.5, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0], [0.0, 0.5, 1.0, 0.0]],
      "name": "פתח תקווה",
      "coordinates": [34.887764, 32.08404],
      "id": 13
    }, {
      "website": "http://www.ramat-gan.muni.il/",
      "data": [[1.0, 1.0, 0.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 0.0, 0.5, 0.5, 0.0, 0.0], [0.0, 0.0, 1.0], [0.5, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0], [1.0, 0.0, 0.0, 1.0, 1.0], [0.5, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0], [0.0, 0.0, 0.0, 0.0, 0.0], [0.5, 0.0, 0.0, 0.0, 0.0], [0.5, 0.0, 0.0, 0.0, 0.5], [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 1.0], [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 0.5, 0.0], [0.5, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0], [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 0.0, 0.0, 0.0]],
      "name": "רמת גן",
      "coordinates": [34.824787, 32.068423],
      "id": 11
    }, {
      "website": "http://www.rehovot.muni.il/",
      "data": [[1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 0.5, 0.0, 1.0], [0.0, 0.5, 1.0], [0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0], [1.0, 0.0, 1.0], [0.0, 0.0, 0.0, 0.0, 1.0], [0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 1.0, 0.0, 1.0, 0.0], [1.0, 0.0, 0.5, 1.0, 0.0], [0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 1.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 0.5, 0.0], [0.0, 0.0], [1.0, 1.0, 0.5, 0.0, 0.0, 0.0, 1.0, 1.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0], [0.0, 0.0, 0.0, 0.0]],
      "name": "רחובות",
      "coordinates": [34.811274, 31.89277199999999],
      "id": 15
    }, {
      "website": "http://www.hadera.muni.il/",
      "data": [[1.0, 1.0, 1.0, 1.0, 0.0, 1.0], [1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 0.0, 0.0, 0.0, 0.0, 1.0], [0.0, 1.0, 1.0], [0.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0], [0.0, 0.0, 0.0, 0.0, 1.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.5, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [1.0, 1.0], [1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [1.0, 0.5, 0.0], [1.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [0.5, 1.0, 0.5, 1.0, 0.5, 0.5, 0.75], [0.75, 0.75, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0], [1.0, 0.0, 1.0, 0.0]],
      "name": "חדרה",
      "coordinates": [34.92088, 32.442784],
      "id": 6
    }
  ];

  red = d3.rgb('#ba3047');

  blue = d3.rgb('#3d73b9');

  rdbu = d3.interpolateLab(red, blue);

  scoreGrades = d3.scale.quantile().domain([0, 0.5, 0.6, 1]).range([0, 0.5, 1]);

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  City = (function(_super) {

    __extends(City, _super);

    function City() {
      return City.__super__.constructor.apply(this, arguments);
    }

    City.prototype._isInt = function(n) {
      return typeof n === 'number' && parseFloat(n) === parseInt(n, 10) && !isNaN(n);
    };

    City.prototype._sum = function(scores) {
      return _.reduce(scores, function(memo, score) {
        return memo + score;
      });
    };

    City.prototype._average = function(scores) {
      return this._sum(scores) / scores.length;
    };

    City.prototype.categoryScores = function(category) {
      return this.get('data')[category];
    };

    City.prototype.categoryAverage = function(category) {
      return this._average(this.categoryScores(category));
    };

    City.prototype.total = function() {
      var scores;
      return this._sum((function() {
        var _i, _len, _ref, _results;
        _ref = this.get('data');
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          scores = _ref[_i];
          _results.push(this._sum(scores));
        }
        return _results;
      }).call(this));
    };

    City.prototype.totalAverage = function() {
      return this.total() / this.totalMax();
    };

    City.prototype.totalMax = function() {
      return this._sum(_.map(this.get('data'), function(d) {
        return d.length;
      }));
    };

    City.prototype.score = function(category, criteria) {
      return this.get('data')[category][criteria];
    };

    City.prototype.marker = function(category, criteria) {
      var m;
      m = {
        geometry: {
          type: 'Point',
          coordinates: this.get('coordinates')
        },
        properties: {
          title: this.get('name'),
          id: this.id
        }
      };
      if (this._isInt(criteria)) {
        m['properties']['description'] = root.guide[category]['fields'][criteria];
        m['properties']['value'] = this.score(category, criteria);
        m['properties']['marker-color'] = rdbu(m['properties']['value']);
      } else if (this._isInt(category)) {
        m['properties']['description'] = root.guide[category]['category'];
        m['properties']['value'] = this.categoryAverage(category);
        m['properties']['marker-color'] = rdbu(scoreGrades(m['properties']['value']));
      } else {
        m['properties']['description'] = this.totalAverage();
        m['properties']['value'] = this.totalAverage();
        m['properties']['marker-color'] = rdbu(scoreGrades(m['properties']['value']));
      }
      return m;
    };

    return City;

  })(Backbone.Model);

  Cities = (function(_super) {

    __extends(Cities, _super);

    function Cities() {
      return Cities.__super__.constructor.apply(this, arguments);
    }

    Cities.prototype.model = City;

    return Cities;

  })(Backbone.Collection);

  israelExtent = new MM.Extent(33.6006300456776, 33.9, 29.223819169667124, 36.1);

  CityMap = (function(_super) {

    __extends(CityMap, _super);

    function CityMap() {
      return CityMap.__super__.constructor.apply(this, arguments);
    }

    CityMap.prototype.el = $('#map');

    CityMap.prototype.initialize = function() {
      return this.render();
    };

    CityMap.prototype.render = function() {
      this.map = mapbox.map(this.el);
      this.baseLayerLocalized = mapbox.layer().id('idan.map-468vpvim').composite(false);
      this.baseLayerEnglish = mapbox.layer().id('idan.map-b25l9lse').composite(false);
      this.map.addTileLayer(this.baseLayerLocalized);
      this.map.addTileLayer(this.baseLayerEnglish.disable());
      this.map.ui.zoomer.add();
      this.map.setPanLimits(israelExtent);
      this.map.setExtent(israelExtent);
      return this;
    };

    CityMap.prototype.localize = function(localized) {
      if (localized) {
        this.baseLayerLocalized.enable();
        return this.baseLayerEnglish.disable();
      } else {
        this.baseLayerEnglish.enable();
        return this.baseLayerLocalized.disable();
      }
    };

    return CityMap;

  })(Backbone.View);

  MarkerLayer = (function(_super) {

    __extends(MarkerLayer, _super);

    function MarkerLayer() {
      return MarkerLayer.__super__.constructor.apply(this, arguments);
    }

    MarkerLayer.prototype.initialize = function() {
      var _this = this;
      this.layer = mapbox.markers.layer();
      mapbox.markers.interaction(this.layer);
      this.layer.key(function(d) {
        return d.properties.id;
      });
      this.options.map.addLayer(this.layer);
      this.render();
      this.collection.on('all', function() {
        return _this.render();
      });
      this.category = void 0;
      return this.criteria = void 0;
    };

    MarkerLayer.prototype.setCriteria = function(category, criteria) {
      this.category = category;
      return this.criteria = criteria;
    };

    MarkerLayer.prototype.render = function() {
      var markers;
      markers = this.collection.map(function(d) {
        return d.marker(this.category, this.criteria);
      });
      this.layer.features(markers);
      return this;
    };

    return MarkerLayer;

  })(Backbone.View);

  CityList = (function(_super) {

    __extends(CityList, _super);

    function CityList() {
      return CityList.__super__.constructor.apply(this, arguments);
    }

    CityList.prototype.tagName = 'ul';

    CityList.prototype["class"] = 'city_list';

    CityList.prototype.initialize = function() {
      var _this = this;
      this.render();
      return this.collection.on('all', function() {
        return _this.render();
      });
    };

    CityList.prototype.render = function() {
      var _this = this;
      this.collection.each(function(city) {
        var c;
        return c = new CityListItem({
          model: city
        });
      });
      $('#content').html(this.el);
      return this;
    };

    return CityList;

  })(Backbone.View);

  CityListItem = (function(_super) {

    __extends(CityListItem, _super);

    function CityListItem() {
      return CityListItem.__super__.constructor.apply(this, arguments);
    }

    CityListItem.prototype.tagName = 'li';

    CityListItem.prototype["class"] = 'city_listitem';

    CityListItem.prototype.initialize = function() {
      var _this = this;
      this.model.on('all', function() {
        return _this.render();
      });
      return this.render();
    };

    CityListItem.prototype.render = function() {
      return this;
    };

    return CityListItem;

  })(Backbone.View);

  root.data = data;

  root.guide = guide;

  root.City = City;

  root.Cities = Cities;

  root.cities = new Cities(_.map(data, function(d) {
    return new City(d);
  }));

  $(function() {
    root.cm = new CityMap();
    root.ml = new MarkerLayer({
      collection: root.cities,
      map: cm.map
    });
    return root.cl = new CityList({
      collection: root.cities
    });
  });

}).call(this);
