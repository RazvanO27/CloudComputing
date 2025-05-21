PROIECT CLOUD COMPUTING

Gym Notes


 




NUME: OPREA MARIUS RĂZVAN
GRUPA: 1133


Link prezentare proiect:
https://youtu.be/Yp-4CWFnsUo
Link publicare proiect:
http://localhost:3000/
Link GitHub:
https://github.com/RazvanO27/CloudComputing

INTRODUCERE
"Gym Notes" este o aplicație web modernă, care permite utilizatorilor să creeze, editeze, șteargă și organizeze notițe și sarcini zilnice. Aplicația are scopul de a ne organiza timpul in ceea ce privește activitatea sportivă printr-o interfață intuitivă și prin utilizarea a două servicii cloud integrate prin API-uri REST.
Prin intermediul operațiilor CRUD (Create, Read, Update, Delete), aplicația permite adăugarea, vizualizarea, modificarea și ștergerea sarcinilor într-un mod simplu și rapid. Indiferent dacă este vorba despre activități personale sau profesionale, aplicația oferă un mod eficient de gestionare a listei zilnice de responsabilități.
Un element principal al aplicației este posibilitatea de a atribui un status fiecărei sarcini. Astfel, putem urmări cu ușurință progresul fiecărei activități fie că este în desfășurare, fie că a fost deja finalizată și putem actualiza acest status printr-un singur clic.
Stocarea datelor este realizată într-o bază de date fiabilă, construită pe MongoDB, asigurând siguranța și disponibilitatea informațiilor în orice moment. În plus, utilizarea platformei de hosting Vercel ne garantează o aplicație web performantă, accesibilă rapid, de oriunde și oricând.
Începeți chiar acum să vă organizați mai eficient activitățile zilnice cu ajutorul acestei aplicații „Gym Notes”. Gestionați sarcinile cu ușurință, monitorizați progresul și atingeți-vă obiectivele cu mai multă claritate și eficiență ca niciodată.
DESCRIERE PROBLEMA
Într-o eră digitală în care informația circulă rapid, iar volumul de sarcini crește constant, este nevoia de un instrument eficient prin care ne putem organiza activitatea sportivă. Mulți utilizatori se confruntă cu dificultăți în a-și gestiona timpul, a prioritiza activitățile și a urmări progresul obiectivelor, fie că este vorba despre proiecte personale sau profesionale.
Gym Notes este o aplicație web modernă care răspunde acestor nevoi, oferind o platformă simplă, intuitivă și accesibilă pentru gestionarea notițelor și a sarcinilor. Proiectul are ca scop îmbunătățirea productivității utilizatorului printr-o interfață clară și funcționalități pentru o organizare cat mai eficientă.

DESCRIEREA TEHNOLOGIE CLOUD FOLOSITE
Pentru gestionarea bazei de date a aplicației, am optat pentru MongoDB, o soluție de tip NoSQL cunoscută pentru flexibilitatea și scalabilitatea sa ridicată. Această tehnologie este folosita pentru aplicații web moderne, întrucât permite stocarea și manipularea eficientă atât a datelor structurate, cât și a celor semi-structurate. Datorită capabilităților sale avansate de interogare și indexare, MongoDB facilitează gestionarea rapidă și fiabilă a informațiilor legate de sarcinile și notițele din aplicația Gym Notes, contribuind la performanța generală a sistemului.
În ceea ce privește găzduirea aplicației, am ales platforma Vercel, o soluție cloud modernă, concepută pentru implementarea rapidă și scalabilă a aplicațiilor web. Vercel oferă un mediu optim pentru proiecte dezvoltate cu tehnologii precum React și Next.js, asigurând un proces simplificat de deployment și o experiență de utilizare rapidă și stabilă. Platforma se ocupă automat de gestionarea serverelor, distribuirea traficului și scalarea resurselor, permițându-ne să ne concentrăm pe dezvoltarea funcționalităților aplicației, fără grija infrastructurii.
Prin integrarea acestor două tehnologii cloud – MongoDB pentru stocarea datelor și Vercel pentru găzduirea aplicației, asigurăm o arhitectură robustă, scalabilă și ușor de întreținut. Astfel, aplicația Gym Notes poate răspunde eficient cerințelor utilizatorilor, oferind o experiență fluentă și performantă, indiferent de volum sau complexitate.

DESCRIERE API
În cadrul aplicației Gym Notes, logica de backend este susținută de un API REST care permite gestionarea completă a înregistrărilor (denumite records). Acesta oferă suport pentru operațiile CRUD (Create, Read, Update, Delete), utilizând metodele HTTP corespunzătoare: GET, POST, PUT și DELETE.

Funcționalitățile oferite de API:
•	GET /api/records
Returnează toate înregistrările existente în baza de date.
o	Răspuns: un array de obiecte dacă există înregistrări, altfel un array gol ([]).
•	GET /api/records?id=:id
Returnează o înregistrare specifică, identificată prin parametru de query id.
o	Dacă înregistrarea există, aceasta va fi returnată ca obiect JSON.
o	În caz contrar, răspunsul va fi gol ({}).
•	POST /api/records
Creează o nouă înregistrare pe baza datelor primite în corpul cererii, în format JSON.
o	Răspuns: obiectul nou creat, cu toate câmpurile sale.
•	PUT /api/records
Actualizează o înregistrare existentă. Corpul cererii trebuie să conțină datele actualizate, inclusiv id-ul înregistrării.
o	Răspuns: obiectul actualizat, reflectând noile valori.
•	DELETE /api/records?id=:id
Șterge o înregistrare identificată prin id.
o	Răspuns: mesaj de confirmare a ștergerii.
Structura datelor pentru obiectele record:
Fiecare înregistrare conține următoarele câmpuri:
•	title: Titlul sarcinii sau al notiței.
•	content: Conținutul detaliat al înregistrării.
•	completed: Statusul sarcinii – true dacă este completată, false dacă este încă în lucru.
1.	FLUX DE DATE:
Exemple de request-uri și response-uri:
1. GET /api/records
• Request: GET /api/records
• Response:
 [
  {
    "_id": "6621cfc31ae34500123abcde",
    "title": "Întâlnire echipă",
    "content": "Participă la întâlnirea de planificare a sprintului.",
    "completed": false
  },
  {
    "_id": "6621d0021ae34500123abcdf",
    "title": "Trimite email client",
    "content": "Trimite propunerea finală către clientul X.",
    "completed": true
  }
]

2.	POST /api/records
Request 
{
  "title": "Plată factură electricitate",
  "content": "Achită factura la energie electrică până pe 25 mai.",
  "completed": false
}
Response:
{
  "_id": "6621d0451ae34500123abce0",
  "title": "Plată factură electricitate",
  "content": "Achită factura la energie electrică până pe 25 mai.",
  "completed": false
}

3.	PUT /api/records
Request:
{
  "_id": "6621d0451ae34500123abce0",
  "title": "Plată factură electricitate",
  "content": "Factura a fost achitată prin aplicația bancară.",
  "completed": true
}
Response:
{
  "_id": "6621d0451ae34500123abce0",
  "title": "Plată factură electricitate",
  "content": "Factura a fost achitată prin aplicația bancară.",
  "completed": true
}
4.	DELETE /api/record
Request:
DELETE /api/records?id=6621d0451ae34500123abce0
Response:
{
  "acknowledged": true,
  "deletedCount": 1
}

METODE HTTP UTILIZATE:
• GET: Pentru a obține înregistrări existente.
• POST: Pentru a crea o nouă înregistrare.
• PUT: Pentru a actualiza o înregistrare existentă.
• DELETE: Pentru a șterge o înregistrare existentă.






Capturi de ecran aplicație:
 

 

 

