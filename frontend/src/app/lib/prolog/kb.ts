export const knowledgeBase = String.raw
`major("Computer Science").

class("Computer Science", "CSC101").
class("Computer Science", "CSC202").
class("Computer Science", "CSC203").
class("Computer Science", "CSC225").
class("Computer Science", "CSC248").
class("Computer Science", "CSC300").
class("Computer Science", "CSC349").
class("Computer Science", "CSC307").
class("Computer Science", "CSC308").
class("Computer Science", "CSC309").
class("Computer Science", "CSC357").
class("Computer Science", "CSC365").
class("Computer Science", "CSC366").
class("Computer Science", "CSC369").
class("Computer Science", "CSC371").
class("Computer Science", "CSC377").
class("Computer Science", "CSC378").
class("Computer Science", "CSC430").
class("Computer Science", "CSC321").
class("Computer Science", "CSC323").
class("Computer Science", "CSC325").
class("Computer Science", "CSC364").
class("Computer Science", "CSC402").
class("Computer Science", "CSC409").
class("Computer Science", "CSC410").
class("Computer Science", "CSC421").
class("Computer Science", "CSC422").
class("Computer Science", "CSC424").
class("Computer Science", "CSC430").
class("Computer Science", "CSC431").
class("Computer Science", "CSC436").
class("Computer Science", "CSC437").
class("Computer Science", "CSC445").
class("Computer Science", "CSC448").
class("Computer Science", "CSC453").
class("Computer Science", "CSC454").
class("Computer Science", "CSC466").
class("Computer Science", "CSC468").
class("Computer Science", "CSC469").
class("Computer Science", "CSC471").
class("Computer Science", "CSC473").
class("Computer Science", "CSC474").
class("Computer Science", "CSC476").
class("Computer Science", "CSC480").
class("Computer Science", "CSC481").
class("Computer Science", "CSC482").
class("Computer Science", "CSC484").
class("Computer Science", "CSC487").
class("Computer Science", "CSC491").
class("Computer Science", "CSC492").
class("Computer Science", "CSC497").
class("Computer Science", "CSC498").

class("Computer Science", "PHIL230").
class("Computer Science", "PHIL231").
class("Computer Science", "PHIL323").
class("Computer Science", "MATH141").
class("Computer Science", "MATH142").
class("Computer Science", "MATH143").
class("Computer Science", "MATH206").
class("Computer Science", "MATH244").
class("Computer Science", "CHEM124").
class("Computer Science", "CHEM125").
class("Computer Science", "CHEM126").
class("Computer Science", "PHYS141").
class("Computer Science", "PHYS142").
class("Computer Science", "PHYS143").
class("Computer Science", "STAT312").
class("Computer Science", "ES350").
class("Computer Science", "ES351").
class("Computer Science", "WGQS350").
class("Computer Science", "WGQS351").

prerequisite("CSC101", []).
prerequisite("CSC202", ["CSC101"]).
prerequisite("CSC203", ["CSC202"]).
prerequisite("CSC225", ["CSC202"]).
prerequisite("CSC248", ["CSC202", "CSC203"]).
prerequisite("CSC349", ["CSC248","CSC202","MATH142"]).
prerequisite("CSC307", ["CSC248","CSC357"]).
prerequisite("CSC308", ["CSC248"]).
prerequisite("CSC309", ["CSC308","CSC357"]).
prerequisite("CSC357",["CSC202","CSC203","CSC225"]).
prerequisite("CSC365", ["CSC248"]).
prerequisite("CSC366", ["CSC365"]).
prerequisite("CSC369", ["CSC202", "CSC203", "STAT312"]).
prerequisite("CSC371", ["CSC202"]).
prerequisite("CSC377", ["CSC202"]).
prerequisite("CSC378", ["CSC202"]).
prerequisite("CSC321", ["CSC357"]).
prerequisite("CSC323", ["CSC357"]).
%prerequisite("CSC325", ["CSC300",]).
%prerequisite("CSC325", ["CSC203"]).
%prerequisite("CSC325", ["PHIL323"]).
prerequisite("CSC325", ["CSC300"]).
prerequisite("CSC325", ["CSC203"]).
prerequisite("CSC325", ["PHIL323"]).
prerequisite("CSC402", ["CSC307"]).
prerequisite("CSC402", ["CSC309"]).
prerequisite("CSC409", ["CSC307"]).
prerequisite("CSC409", ["CSC309"]).
prerequisite("CSC410", ["CSC349", "STAT312"]).
prerequisite("CSC421", ["CSC321", "CSC300"]).
prerequisite("CSC421", ["CSC321", "PHIL323"]).
prerequisite("CSC422", ["CSC364"]).
% prerequisite("CSC424", ["CSC321", "CSC307"]).
% prerequisite("CSC424", ["CSC321", "CSC309"]).
prerequisite("CSC424", ["CSC321", "CSC307"]).
prerequisite("CSC424", ["CSC321", "CSC309"]).
prerequisite("CSC430", ["CSC349"]).
prerequisite("CSC431", ["CSC430"]).
prerequisite("CSC436", ["CSC357"]).
prerequisite("CSC437", ["CSC203"]).
prerequisite("CSC445", ["CSC248"]).
prerequisite("CSC448", ["CSC349"]).
prerequisite("CSC453", ["CSC357", "CSC225"]).
prerequisite("CSC454", ["CSC453"]).
prerequisite("CSC466", ["CSC4349", "STAT312"]).
prerequisite("CSC468", ["CSC365"]).
prerequisite("CSC469", ["CSC357"]).
prerequisite("CSC471", ["CSC357"]).
prerequisite("CSC473", ["CSC471"]).
prerequisite("CSC474", ["CSC474"]).
prerequisite("CSC476", ["CSC476"]).
prerequisite("CSC480", ["CSC202"]).
prerequisite("CSC481", ["CSC480"]).
prerequisite("CSC482", ["CSC480"]).
prerequisite("CSC484", ["CSC307"]).
prerequisite("CSC484", ["CSC308"]).
prerequisite("CSC487", ["CSC349", "MATH206"]).
prerequisite("CSC487", ["CSC349", "MATH244"]).
prerequisite("CSC364", ["CSC203"]).
prerequisite("CSC300", ["CSC357"]).
prerequisite("CSC491", ["CSC307"]).
prerequisite("CSC491", ["CSC309"]).
prerequisite("CSC492", ["CSC491"]).
prerequisite("CSC497", ["CSC307"]).
prerequisite("CSC497", ["CSC309"]).
prerequisite("CSC498", ["CSC497"]).


disqualified("CSC307", ["CSC308", "CSC309"]).

major("Aerospace Engineering").

class("Aerospace Engineering", "AERO121").
class("Aerospace Engineering", "AERO215").
class("Aerospace Engineering", "AERO220").
class("Aerospace Engineering", "AERO299").
class("Aerospace Engineering", "AERO300").
class("Aerospace Engineering", "AERO302").
class("Aerospace Engineering", "AERO303").
class("Aerospace Engineering", "AERO320").
class("Aerospace Engineering", "AERO321").
class("Aerospace Engineering", "AERO331").
class("Aerospace Engineering", "AERO350").
class("Aerospace Engineering", "AERO431").
class("Aerospace Engineering", "AERO433").
class("Aerospace Engineering", "AERO460").
class("Aerospace Engineering", "AERO465").
class("Aerospace Engineering", "CE204").
class("Aerospace Engineering", "CE207").
class("Aerospace Engineering", "CE208").
class("Aerospace Engineering", "EE201").
class("Aerospace Engineering", "EE251").
class("Aerospace Engineering", "CHEM124").
class("Aerospace Engineering", "IME144").
class("Aerospace Engineering", "MATE210").
class("Aerospace Engineering", "MATH141").
class("Aerospace Engineering", "MATH142").
class("Aerospace Engineering", "MATH143").
class("Aerospace Engineering", "MATH241").
class("Aerospace Engineering", "MATH244").
class("Aerospace Engineering", "ME211").
class("Aerospace Engineering", "ME212").
class("Aerospace Engineering", "PHYS141").
class("Aerospace Engineering", "PHYS142").
class("Aerospace Engineering", "PHYS143").
class("Aerospace Engineering", "STAT312").

prerequisite("AERO121", []).
prerequisite("AERO215", []).
prerequisite("AERO220", []).
prerequisite("AERO299", ["ME212"]).
prerequisite("AERO300", ["AERO215", "MATH244", "ME211", "PHYS133", "PHYS143"]).
prerequisite("AERO302", ["ME212"]).
prerequisite("AERO303", ["AERO299", "AERO302"]).
prerequisite("AERO320", ["AERO300", "ME212"]).
prerequisite("AERO321", ["AERO300"]).
prerequisite("AERO331", ["AERO300", "CE207", "ME212"]).
prerequisite("AERO350", ["AERO220"]).
prerequisite("AERO431", ["AERO331"]).
prerequisite("AERO433", ["AERO331", "AERO431"]).
prerequisite("AERO460", []).
prerequisite("AERO465", ["AERO303", "AERO320", "AERO431"]).
prerequisite("CE204", ["ME211"]).
prerequisite("CE207", ["ME211"]).
prerequisite("CE208", ["ME211"]).
prerequisite("EE201", ["PHYS142"]).
prerequisite("EE251", ["EE201"]).
prerequisite("CHEM124", []).
prerequisite("IME144", []).
prerequisite("MATE210", ["CHEM124"]).
prerequisite("MATH141", []).
prerequisite("MATH142", ["MATH141"]).
prerequisite("MATH143", ["MATH142"]).
prerequisite("MATH241", ["MATH143"]).
prerequisite("MATH244", ["MATH241"]).
prerequisite("ME211", ["MATH143"]).
prerequisite("ME212", ["ME211"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS142", ["PHYS141"]).
prerequisite("PHYS143", ["PHYS142"]).
prerequisite("STAT312", ["MATH142"]).

prerequisite("AERO 121", []).
prerequisite("AERO 215", ["AERO 121", "MATH 143"]).
prerequisite("AERO 220", ["AERO 121"]).
prerequisite("AERO 299", ["ME 212"]).
prerequisite("AERO 300", ["AERO 215", "MATH 244", "ME 211", "PHYS 133", "PHYS 143"]).
prerequisite("AERO 302", ["ME 212"]).
prerequisite("AERO 303", ["AERO 299", "AERO 302"]).
prerequisite("AERO 320", ["AERO 300", "ME 212"]).
prerequisite("AERO 321", ["AERO 300"]).
prerequisite("AERO 331", ["AERO 300", "CE 207", "ME 212"]).
prerequisite("AERO 350", ["AERO 220"]).
prerequisite("AERO 431", ["AERO 331"]).
prerequisite("AERO 433", ["AERO 331", "AERO 431"]).
prerequisite("AERO 460", []).
prerequisite("AERO 465", ["AERO 303", "AERO 320", "AERO 431"]).
prerequisite("CE 204", ["ME 211"]).
prerequisite("CE 207", ["ME 211"]).
prerequisite("CE 208", ["ME 211"]).
prerequisite("EE 201", ["PHYS 142"]).
prerequisite("EE 251", ["EE 201"]).
prerequisite("CHEM 124", []).
prerequisite("IME 144", []).
prerequisite("MATE 210", ["CHEM 124"]).
prerequisite("MATH 141", []).
prerequisite("MATH 142", ["MATH 141"]).
prerequisite("MATH 143", ["MATH 142"]).
prerequisite("MATH 241", ["MATH 143"]).
prerequisite("MATH 244", ["MATH 241"]).
prerequisite("ME 211", ["MATH 143"]).
prerequisite("ME 212", ["ME 211"]).
prerequisite("PHYS 141", ["MATH 141"]).
prerequisite("PHYS 142", ["PHYS 141"]).
prerequisite("PHYS 143", ["PHYS 142"]).
prerequisite("STAT 312", ["MATH 142"]).

major("Agribusiness").

class("Agribusiness", "AGB101").
class("Agribusiness", "AGB202").
class("Agribusiness", "AGB212").
class("Agribusiness", "AGB214").
class("Agribusiness", "AGB260").
class("Agribusiness", "AGB301").
class("Agribusiness", "AGB308").
class("Agribusiness", "AGB312").
class("Agribusiness", "AGB313").
class("Agribusiness", "AGB323").
class("Agribusiness", "AGB327").
class("Agribusiness", "AGB328").
class("Agribusiness", "AGB369").
class("Agribusiness", "AGB462").
class("Agribusiness", "AGB463").
class("Agribusiness", "AGC314").
class("Agribusiness", "AGC452").
class("Agribusiness", "AGC475").
class("Agribusiness", "NR326").
class("Agribusiness", "NR408").
class("Agribusiness", "NR413").
class("Agribusiness", "WVIT343").
class("Agribusiness", "WVIT423").
class("Agribusiness", "WVIT450").
class("Agribusiness", "BUS207").
class("Agribusiness", "ECON222").
class("Agribusiness", "MATH221").
class("Agribusiness", "STAT251").
class("Agribusiness", "ASCI112").
class("Agribusiness", "ASCI211").
class("Agribusiness", "ASCI215").
class("Agribusiness", "ASCI239").
class("Agribusiness", "DSCI229").
class("Agribusiness", "FSN275").
class("Agribusiness", "PLSC120").
class("Agribusiness", "PLSC150").
class("Agribusiness", "PLSC230").
class("Agribusiness", "SS120").
class("Agribusiness", "SS130").

prerequisite("AGB101", []).
prerequisite("AGB202", []).
prerequisite("AGB212", []).
prerequisite("AGB214", []).
prerequisite("AGB260", []).
prerequisite("AGB301", ["AGB212"]).
prerequisite("AGB308", ["AGB214"]).
prerequisite("AGB312", ["AGB212"]).
prerequisite("AGB313", ["AGB212", "MATH221"]).
prerequisite("AGB323", ["AGB214"]).
prerequisite("AGB327", ["STAT251"]).
prerequisite("AGB328", ["AGB327"]).
prerequisite("AGB369", []).
prerequisite("AGB462", ["AGB308", "AGB328"]).
prerequisite("AGB463", ["AGB308", "AGB328"]).
prerequisite("AGC314", []).
prerequisite("AGC452", []).
prerequisite("AGC475", []).
prerequisite("NR326", []).
prerequisite("NR408", []).
prerequisite("NR413", []).
prerequisite("WVIT343", []).
prerequisite("WVIT423", []).
prerequisite("WVIT450", []).
prerequisite("BUS207", []).
prerequisite("ECON222", ["AGB212"]).
prerequisite("MATH221", ["MATH141"]).
prerequisite("STAT251", ["MATH221"]).
prerequisite("ASCI112", []).
prerequisite("ASCI211", ["ASCI112"]).
prerequisite("ASCI215", ["ASCI112"]).
prerequisite("ASCI239", ["ASCI112"]).
prerequisite("DSCI229", ["ASCI112"]).
prerequisite("FSN275", ["CHEM124"]).
prerequisite("PLSC120", ["BIO111"]).
prerequisite("PLSC150", ["BIO111"]).
prerequisite("PLSC230", ["BIO111"]).
prerequisite("SS120", ["CHEM124"]).
prerequisite("SS130", ["SS120"]).


% taken("CSC202").
% taken("CSC321").
% taken("CSC307").
% taken("CSC300").

%Predicates

testPrereqs(Class) :-
    prerequisite(Class, Prereqs),
    preReqsTaken(Prereqs),
    \+ taken(Class). % avoid returning classes that are already taken

preReqsTaken([]).
preReqsTaken([P|Prereqs]) :-
    taken(P),
    preReqsTaken(Prereqs).

% Could put down every combination of prereqs for a class as multiple different objects, 
% but seems inefficient if a prolog could do that with a predicate.`;
