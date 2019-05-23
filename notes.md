
Clicking on a diveistecard should render a show page of divesite details. routing is working but need to get correct data.



DEfine a dive
  belongs to Profile
  belongs to DIvesite
  { Depth:"",
    Temp:
    Bottom Time
    Date
    Start Time
  }

  Create a Dive Form:
    Find or Add Divesite
    Divers dove with(Divemaster if so)



DEfine a dive site
  has_many Dives
  has_many divers through dives



DEfine A profile
  List of Certifications earned
  List of previous dives?
  total Bottom time
  List of dive buddies
  List of Divemasters dove with


Auth0 DEsign
  Fronttend react
  Access of APi Rails
