title:: Proyecto: Sincronario

- title:: Proyecto: Sincronario
- web:: Tzolkin.me
- ## Existing web/apps related to Tzolkin
	- Web
		- https://www.13lunas.net/
			- Español
			- Fundación Para La Ley Del Tiempo
			- Bioregión del Guerrero
			- Contact
				- https://www.13lunas.net/contacto.htm
				- 13lunas.es@gmail.com
		- https://lawoftime.org/
			- English
			- Foundation For the Law Of Time
			- Contact
				- info@lawoftime.org
		- www.galacticspacebook.com
	- Android
		- [Tzolkin Explorer](https://play.google.com/store/apps/details?id=com.tlt.tzolkin)
		- [Alma Maya](https://play.google.com/store/apps/details?id=alma.maya)
		- [Dreamspell Calendar](https://play.google.com/store/apps/details?id=net.anotherworld.maya)
		- [MCP Mayan Tzolkin](https://play.google.com/store/apps/details?id=air.tzolkin)
			- Non-free
			- [Lite Version](https://play.google.com/store/apps/details?id=air.com.lucitainc.MCPTzolkinLite)
			- [Renamed version?](https://play.google.com/store/apps/details?id=air.com.lucitainc.TzolkinMaya)
			-
		- [Sincronário 13:20](https://play.google.com/store/apps/details?id=com.tzolkin.sincronario1320)
		- [Tzolkin](https://play.google.com/store/apps/details?id=social.plah.tzolkin)
			- Sort of social-media thing?
		- [MayaCal](https://play.google.com/store/apps/details?id=b4a.mayacal)
		- [Mayan Nawal](https://play.google.com/store/apps/details?id=com.huawei.android.mayannawal)
	- iPhone
		- https://www.1320sync.com/
		-
			-
- ## Scope of the app
	- Calendar app with the ability to add and share events
	- Sync with Google Calendar
	- Connections list with their galactic signature
		- Mostrar conexiones en el calendario
	- Tzolkin view
	- Posibilidad de clickear cualquier cosa y que te muestre información sobre ello
	- Public NPM library for Tzolkin
- ## Tasks
	- {{query (and (todo later now done) (page <% current page %>))}}
	  query-table:: false
	-
	-
- ## Log
	- 34.1.23
	  id:: 62fd024b-85c5-4bdd-b7f0-788ab2ecf9d1
		- NOW I'll be finishing the Favicon! 
		  :LOGBOOK:
		  CLOCK: [2022-08-17 Wed 12:00:15]
		  :END:
		-
	- 34.1.10
		- 13:19
			- I'm not sure how to manage a project with LogSeq but I'll be learning, so here is my first attempt.
			- {{embed ((62ed30ac-81a9-47cd-a334-bc68ff3e9ffd))}}
			- I did a quick research on existing Android apps and webs for the Tzolkin calendar. In terms of web apps there is the one from the Law of Time and on spanish the 13 Lunas; but none is build is a web app but as a general informational portal; which is fine, it complements what I'm attempting to create.
			- So I'll be moving the existing TODO stuff to another directory and creating a UI for the 13-moon calendar.
			- NOW Move TODO things to another directory
			  :LOGBOOK:
			  CLOCK: [2022-08-05 Fri 13:33:42]--[2022-08-05 Fri 13:33:43] =>  00:00:01
			  CLOCK: [2022-08-05 Fri 13:33:46]
			  CLOCK: [2022-08-05 Fri 13:33:47]--[2022-08-05 Fri 13:33:50] =>  00:00:03
			  CLOCK: [2022-08-05 Fri 13:35:55]--[2022-08-05 Fri 13:35:56] =>  00:00:01
			  CLOCK: [2022-08-05 Fri 13:35:56]--[2022-08-05 Fri 13:35:57] =>  00:00:01
			  CLOCK: [2022-08-05 Fri 13:35:59]--[2022-08-05 Fri 13:36:00] =>  00:00:01
			  CLOCK: [2022-08-05 Fri 13:36:01]--[2022-08-05 Fri 13:36:01] =>  00:00:00
			  CLOCK: [2022-08-05 Fri 13:36:01]--[2022-08-05 Fri 13:41:57] =>  00:05:56
			  CLOCK: [2022-08-05 Fri 13:41:57]
			  :END:
			- Cannot figure out how to make a query for the tasks 😣
				- Figured out! It was "current page" instead of "current_page"; I'm still unsure about the LogSeq query language, gotta research that later.
			- LATER Create Moon calendar view and show current moon and day
			- LATER Publish app on Github and start deploying on Tzolkin.me
			- Updated readme:
				- I'll be building 3 starting sections:
					- 13 Moon calendar view
					- Tzolkin view
					- Connections list to store people you have calculated their galactic signature and show them on the other two views
				- Later I'll be adding the ability to invite those people to the apps, save the connections to the other accounts and create events that those connections can see in their network calendars. All accounts and information will be totally public, no secrets.
			- LATER Change engine to Astro.js and use TypeScript
			-
	-
-