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

major("Agricultural Communication").

class("Agricultural Communication", "AGC102").
class("Agricultural Communication", "AGC205").
class("Agricultural Communication", "AGC207").
class("Agricultural Communication", "AGC225").
class("Agricultural Communication", "AGC301").
class("Agricultural Communication", "AGC339").
class("Agricultural Communication", "AG339").
class("Agricultural Communication", "AGED339").
class("Agricultural Communication", "AGC404").
class("Agricultural Communication", "AGC407").
class("Agricultural Communication", "AGC425").
class("Agricultural Communication", "JOUR390").
class("Agricultural Communication", "AGC426").
class("Agricultural Communication", "AGC463").
class("Agricultural Communication", "AGC475").
class("Agricultural Communication", "BIO111").
class("Agricultural Communication", "BIO161").
class("Agricultural Communication", "CHEM110").
class("Agricultural Communication", "COMS316").
class("Agricultural Communication", "ECON222").
class("Agricultural Communication", "ENGL310").
class("Agricultural Communication", "JOUR203").
class("Agricultural Communication", "JOUR312").
class("Agricultural Communication", "MATH118").
class("Agricultural Communication", "STAT217").
class("Agricultural Communication", "STAT218").
class("Agricultural Communication", "AGB212").
class("Agricultural Communication", "AGB260").
class("Agricultural Communication", "AGB301").
class("Agricultural Communication", "AGB312").
class("Agricultural Communication", "BRAE121").
class("Agricultural Communication", "BRAE141").
class("Agricultural Communication", "ASCI112").
class("Agricultural Communication", "ASCI221").
class("Agricultural Communication", "ASCI222").
class("Agricultural Communication", "ASCI223").
class("Agricultural Communication", "ASCI224").
class("Agricultural Communication", "ASCI225").
class("Agricultural Communication", "DSCI230").
class("Agricultural Communication", "BRAE340").
class("Agricultural Communication", "NR308").
class("Agricultural Communication", "ES308").
class("Agricultural Communication", "NR323").
class("Agricultural Communication", "SS120").
class("Agricultural Communication", "SS130").
class("Agricultural Communication", "FSN230").
class("Agricultural Communication", "FSN275").
class("Agricultural Communication", "PLSC120").
class("Agricultural Communication", "AG452").
class("Agricultural Communication", "AGC452").
class("Agricultural Communication", "PLSC329").

prerequisite("AGC102", []).
prerequisite("AGC205", []).
prerequisite("AGC207", ["AGC205"]).
prerequisite("AGC225", ["AGC207"]).
prerequisite("AGC301", ["AGC225"]).
prerequisite("AGC339", ["AGC301"]).
prerequisite("AG339", ["AGC301"]).
prerequisite("AGED339", ["AGC301"]).
prerequisite("AGC404", ["AGC301"]).
prerequisite("AGC407", ["AGC225"]).
prerequisite("AGC425", ["AGC207"]).
prerequisite("JOUR390", []).
prerequisite("AGC426", ["AGC225"]).
prerequisite("AGC463", ["AGC301"]).
prerequisite("AGC475", ["AGC301"]).
prerequisite("BIO111", []).
prerequisite("BIO161", []).
prerequisite("CHEM110", []).
prerequisite("COMS316", []).
prerequisite("ECON222", []).
prerequisite("ENGL310", []).
prerequisite("JOUR203", []).
prerequisite("JOUR312", ["JOUR203"]).
prerequisite("MATH118", []).
prerequisite("STAT217", ["MATH118"]).
prerequisite("STAT218", ["MATH118"]).
prerequisite("AGB212", []).
prerequisite("AGB260", []).
prerequisite("AGB301", ["AGB212"]).
prerequisite("AGB312", ["AGB212"]).
prerequisite("BRAE121", []).
prerequisite("BRAE141", []).
prerequisite("ASCI112", []).
prerequisite("ASCI221", ["ASCI112"]).
prerequisite("ASCI222", ["ASCI112"]).
prerequisite("ASCI223", ["ASCI112"]).
prerequisite("ASCI224", ["ASCI112"]).
prerequisite("ASCI225", ["ASCI112"]).
prerequisite("DSCI230", ["ASCI112"]).
prerequisite("BRAE340", []).
prerequisite("NR308", []).
prerequisite("ES308", []).
prerequisite("NR323", []).
prerequisite("SS120", []).
prerequisite("SS130", []).
prerequisite("FSN230", []).
prerequisite("FSN275", []).
prerequisite("PLSC120", []).
prerequisite("AG452", []).
prerequisite("AGC452", []).
prerequisite("PLSC329", []).

major("Agricultural Communication").

class("Agricultural Communication", "AGC102").
class("Agricultural Communication", "AGC205").
class("Agricultural Communication", "AGC207").
class("Agricultural Communication", "AGC225").
class("Agricultural Communication", "AGC301").
class("Agricultural Communication", "AGC339").
class("Agricultural Communication", "AG339").
class("Agricultural Communication", "AGED339").
class("Agricultural Communication", "AGC404").
class("Agricultural Communication", "AGC407").
class("Agricultural Communication", "AGC425").
class("Agricultural Communication", "JOUR390").
class("Agricultural Communication", "AGC426").
class("Agricultural Communication", "AGC463").
class("Agricultural Communication", "AGC475").
class("Agricultural Communication", "BIO111").
class("Agricultural Communication", "BIO161").
class("Agricultural Communication", "CHEM110").
class("Agricultural Communication", "COMS316").
class("Agricultural Communication", "ECON222").
class("Agricultural Communication", "ENGL310").
class("Agricultural Communication", "JOUR203").
class("Agricultural Communication", "JOUR312").
class("Agricultural Communication", "MATH118").
class("Agricultural Communication", "STAT217").
class("Agricultural Communication", "STAT218").
class("Agricultural Communication", "AGB212").
class("Agricultural Communication", "AGB260").
class("Agricultural Communication", "AGB301").
class("Agricultural Communication", "AGB312").
class("Agricultural Communication", "BRAE121").
class("Agricultural Communication", "BRAE141").
class("Agricultural Communication", "ASCI112").
class("Agricultural Communication", "ASCI221").
class("Agricultural Communication", "ASCI222").
class("Agricultural Communication", "ASCI223").
class("Agricultural Communication", "ASCI224").
class("Agricultural Communication", "ASCI225").
class("Agricultural Communication", "DSCI230").
class("Agricultural Communication", "BRAE340").
class("Agricultural Communication", "NR308").
class("Agricultural Communication", "ES308").
class("Agricultural Communication", "NR323").
class("Agricultural Communication", "SS120").
class("Agricultural Communication", "SS130").
class("Agricultural Communication", "FSN230").
class("Agricultural Communication", "FSN275").
class("Agricultural Communication", "PLSC120").
class("Agricultural Communication", "AG452").
class("Agricultural Communication", "AGC452").
class("Agricultural Communication", "PLSC329").

prerequisite("AGC102", []).
prerequisite("AGC205", []).
prerequisite("AGC207", []).
prerequisite("AGC225", ["AGC207"]).
prerequisite("AGC301", ["JOUR203"]).
prerequisite("AGC339", ["AGC301"]).
prerequisite("AG339", ["AGC301"]).
prerequisite("AGED339", ["AGC301"]).
prerequisite("AGC404", []).
prerequisite("AGC407", ["JOUR205", "AGC207"]).
prerequisite("AGC425", ["AGC207"]).
prerequisite("JOUR390", []).
prerequisite("AGC426", ["AGC225"]).
prerequisite("AGC463", ["AG452", "PLSC329"]).
prerequisite("AGC475", []).
prerequisite("BIO111", []).
prerequisite("BIO161", []).
prerequisite("CHEM110", []).
prerequisite("COMS316", []).
prerequisite("ECON222", ["AGB212"]).
prerequisite("ENGL310", []).
prerequisite("JOUR203", []).
prerequisite("JOUR312", ["JOUR203"]).
prerequisite("MATH118", []).
prerequisite("STAT217", ["MATH118"]).
prerequisite("STAT218", ["MATH118"]).
prerequisite("AGB212", []).
prerequisite("AGB260", []).
prerequisite("AGB301", ["AGB212"]).
prerequisite("AGB312", ["AGB212"]).
prerequisite("BRAE121", []).
prerequisite("BRAE141", []).
prerequisite("ASCI112", []).
prerequisite("ASCI221", ["ASCI112"]).
prerequisite("ASCI222", ["ASCI112"]).
prerequisite("ASCI223", ["ASCI112"]).
prerequisite("ASCI224", ["ASCI112"]).
prerequisite("ASCI225", ["ASCI112"]).
prerequisite("DSCI230", ["ASCI112"]).
prerequisite("BRAE340", []).
prerequisite("NR308", []).
prerequisite("ES308", []).
prerequisite("NR323", []).
prerequisite("SS120", []).
prerequisite("SS130", []).
prerequisite("FSN230", []).
prerequisite("FSN275", []).
prerequisite("PLSC120", []).
prerequisite("AG452", []).
prerequisite("AGC452", []).
prerequisite("PLSC329", []).

major("Agricultural Science").

class("Agricultural Science", "AGC102").
class("Agricultural Science", "AGC404").
class("Agricultural Science", "AGC452").
class("Agricultural Science", "AG360").
class("Agricultural Science", "AG452").
class("Agricultural Science", "AGC463").
class("Agricultural Science", "AGED410").
class("Agricultural Science", "AGC314").
class("Agricultural Science", "AGB202").
class("Agricultural Science", "AGB212").
class("Agricultural Science", "AGB301").
class("Agricultural Science", "WVIT343").
class("Agricultural Science", "ASCI112").
class("Agricultural Science", "ASCI221").
class("Agricultural Science", "ASCI222").
class("Agricultural Science", "ASCI223").
class("Agricultural Science", "ASCI224").
class("Agricultural Science", "ASCI225").
class("Agricultural Science", "DSCI230").
class("Agricultural Science", "BRAE121").
class("Agricultural Science", "BRAE141").
class("Agricultural Science", "BRAE321").
class("Agricultural Science", "BRAE340").
class("Agricultural Science", "PLSC120").
class("Agricultural Science", "PLSC190").
class("Agricultural Science", "PLSC230").
class("Agricultural Science", "PLSC240").
class("Agricultural Science", "PLSC245").
class("Agricultural Science", "NR308").
class("Agricultural Science", "NR323").
class("Agricultural Science", "SS120").
class("Agricultural Science", "SS130").
class("Agricultural Science", "DSCI229").
class("Agricultural Science", "FSN230").
class("Agricultural Science", "FSN275").
class("Agricultural Science", "BOT121").
class("Agricultural Science", "MCRO221").
class("Agricultural Science", "PHYS121").
class("Agricultural Science", "CHEM110").
class("Agricultural Science", "CHEM127").
class("Agricultural Science", "MATH118").
class("Agricultural Science", "MATH119").
class("Agricultural Science", "MATH141").
class("Agricultural Science", "MATH161").
class("Agricultural Science", "MATH221").

prerequisite("AGC102", []).
prerequisite("AGC404", []).
prerequisite("AGC452", []).
prerequisite("AG360", []).
prerequisite("AG452", []).
prerequisite("AGC463", []).
prerequisite("AGED410", []).
prerequisite("AGC314", []).
prerequisite("AGB202", []).
prerequisite("AGB212", []).
prerequisite("AGB301", ["AGB212"]).
prerequisite("WVIT343", []).
prerequisite("ASCI112", []).
prerequisite("ASCI221", []).
prerequisite("ASCI222", []).
prerequisite("ASCI223", []).
prerequisite("ASCI224", []).
prerequisite("ASCI225", []).
prerequisite("DSCI230", []).
prerequisite("BRAE121", []).
prerequisite("BRAE141", []).
prerequisite("BRAE321", []).
prerequisite("BRAE340", []).
prerequisite("PLSC120", []).
prerequisite("PLSC190", ["PLSC120"]).
prerequisite("PLSC230", []).
prerequisite("PLSC240", ["PLSC120"]).
prerequisite("PLSC245", []).
prerequisite("NR308", []).
prerequisite("NR323", []).
prerequisite("SS120", []).
prerequisite("SS130", []).
prerequisite("DSCI229", []).
prerequisite("FSN230", []).
prerequisite("FSN275", []).
prerequisite("BOT121", []).
prerequisite("MCRO221", ["CHEM110"]).
prerequisite("MCRO221", ["CHEM127"]).
prerequisite("PHYS121", ["MATH118"]).
prerequisite("PHYS121", ["MATH119"]).
prerequisite("PHYS121", ["MATH141"]).
prerequisite("PHYS121", ["MATH161"]).
prerequisite("PHYS121", ["MATH221"]).
prerequisite("CHEM110", ["MATH118"]).
prerequisite("CHEM110", ["MATH119"]).
prerequisite("CHEM110", ["MATH141"]).
prerequisite("CHEM110", ["MATH161"]).
prerequisite("CHEM110", ["MATH221"]).
prerequisite("CHEM127", ["MATH118"]).
prerequisite("CHEM127", ["MATH119"]).
prerequisite("CHEM127", ["MATH141"]).
prerequisite("CHEM127", ["MATH161"]).
prerequisite("CHEM127", ["MATH221"]).
prerequisite("MATH118", []).
prerequisite("MATH119", []).
prerequisite("MATH141", ["MATH118"]).
prerequisite("MATH141", ["MATH119"]).
prerequisite("MATH161", ["MATH118"]).
prerequisite("MATH161", ["MATH119"]).
prerequisite("MATH221", ["MATH118"]).
prerequisite("MATH221", ["MATH119"]).

major("Agricultural Systems Management").

class("Agricultural Systems Management", "BRAE128").
class("Agricultural Systems Management", "BRAE129").
class("Agricultural Systems Management", "BRAE142").
class("Agricultural Systems Management", "BRAE150").
class("Agricultural Systems Management", "BRAE152").
class("Agricultural Systems Management", "BRAE203").
class("Agricultural Systems Management", "BRAE237").
class("Agricultural Systems Management", "BRAE239").
class("Agricultural Systems Management", "BRAE301").
class("Agricultural Systems Management", "BRAE317").
class("Agricultural Systems Management", "BRAE321").
class("Agricultural Systems Management", "BRAE324").
class("Agricultural Systems Management", "BRAE340").
class("Agricultural Systems Management", "BRAE342").
class("Agricultural Systems Management", "BRAE343").
class("Agricultural Systems Management", "BRAE348").
class("Agricultural Systems Management", "BRAE418").
class("Agricultural Systems Management", "BRAE419").
class("Agricultural Systems Management", "BRAE425").
class("Agricultural Systems Management", "BRAE432").
class("Agricultural Systems Management", "BRAE438").
class("Agricultural Systems Management", "BRAE440").
class("Agricultural Systems Management", "BRAE460").
class("Agricultural Systems Management", "BRAE465").
class("Agricultural Systems Management", "AGB212").
class("Agricultural Systems Management", "AGB260").
class("Agricultural Systems Management", "AGB310").
class("Agricultural Systems Management", "AGB369").
class("Agricultural Systems Management", "BUS212").
class("Agricultural Systems Management", "AGB214").
class("Agricultural Systems Management", "CHEM110").
class("Agricultural Systems Management", "CHEM127").
class("Agricultural Systems Management", "ENGL147").
class("Agricultural Systems Management", "MATH119").
class("Agricultural Systems Management", "STAT217").
class("Agricultural Systems Management", "STAT218").
class("Agricultural Systems Management", "MATH221").
class("Agricultural Systems Management", "PHYS121").

prerequisite("BRAE128", []).
prerequisite("BRAE129", []).
prerequisite("BRAE142", ["MATH116"]).
prerequisite("BRAE150", []).
prerequisite("BRAE152", ["BRAE133", "BRAE151", "BRAE150"]).
prerequisite("BRAE203", ["MATH118"]).
prerequisite("BRAE237", ["MATH119"]).
prerequisite("BRAE239", ["MATH119"]).
prerequisite("BRAE301", ["BRAE152", "PHYS121"]).
prerequisite("BRAE317", ["BRAE203"]).
prerequisite("BRAE321", ["Junior standing"]).
prerequisite("BRAE324", ["MATH119", "PHYS121"]).
prerequisite("BRAE340", ["Junior standing"]).
prerequisite("BRAE342", ["PHYS121", "SS120", "MATH119"]).
prerequisite("BRAE343", ["BRAE342"]).
prerequisite("BRAE348", ["Junior standing"]).
prerequisite("BRAE418", ["BRAE301"]).
prerequisite("BRAE419", ["BRAE301"]).
prerequisite("BRAE425", ["BRAE324"]).
prerequisite("BRAE432", ["BRAE342"]).
prerequisite("BRAE438", ["BRAE340"]).
prerequisite("BRAE440", ["BRAE340"]).
prerequisite("BRAE460", ["BRAE317"]).
prerequisite("BRAE465", ["BRAE317"]).
prerequisite("AGB212", []).
prerequisite("AGB260", []).
prerequisite("AGB310", ["AGB212"]).
prerequisite("AGB369", ["AGB212"]).
prerequisite("BUS212", []).
prerequisite("AGB214", []).
prerequisite("CHEM110", ["MATH119"]).
prerequisite("CHEM127", ["MATH119"]).
prerequisite("ENGL147", []).
prerequisite("MATH119", []).
prerequisite("STAT217", ["MATH119"]).
prerequisite("STAT218", ["MATH119"]).
prerequisite("MATH221", ["MATH119"]).
prerequisite("PHYS121", ["MATH119"]).

major("Animal Science").

class("Animal Science", "ASCI101").
class("Animal Science", "ASCI112").
class("Animal Science", "ASCI211").
class("Animal Science", "ASCI220").
class("Animal Science", "ASCI229").
class("Animal Science", "ASCI290").
class("Animal Science", "ASCI490").
class("Animal Science", "ASCI302").
class("Animal Science", "ASCI304").
class("Animal Science", "ASCI340").
class("Animal Science", "ASCI351").
class("Animal Science", "ASCI363").
class("Animal Science", "ASCI477").
class("Animal Science", "ASCI478").
class("Animal Science", "ASCI479").
class("Animal Science", "ASCI221").
class("Animal Science", "ASCI223").
class("Animal Science", "DSCI230").
class("Animal Science", "ASCI222").
class("Animal Science", "ASCI225").
class("Animal Science", "ASCI224").
class("Animal Science", "ASCI227").
class("Animal Science", "ASCI239").
class("Animal Science", "ASCI319").
class("Animal Science", "CHEM314").
class("Animal Science", "CHEM369").
class("Animal Science", "ASCI346").
class("Animal Science", "ASCI350").
class("Animal Science", "ASCI355").
class("Animal Science", "ASCI419").
class("Animal Science", "DSCI301").
class("Animal Science", "ASCI333").
class("Animal Science", "ASCI366").
class("Animal Science", "ASCI405").
class("Animal Science", "ASCI406").
class("Animal Science", "ASCI438").
class("Animal Science", "ASCI440").
class("Animal Science", "ASCI455").
class("Animal Science", "DSCI321").
class("Animal Science", "DSCI330").
class("Animal Science", "BIO111").
class("Animal Science", "BIO161").
class("Animal Science", "CHEM127").
class("Animal Science", "CHEM128").
class("Animal Science", "CHEM216").
class("Animal Science", "CHEM312").
class("Animal Science", "MATH118").
class("Animal Science", "MATH161").
class("Animal Science", "STAT218").

prerequisite("ASCI101", []).
prerequisite("ASCI112", []).
prerequisite("ASCI211", ["ASCI112"]).
prerequisite("ASCI220", ["ASCI112"]).
prerequisite("ASCI229", ["BIO111"]).
prerequisite("ASCI290", ["ASCI101"]).
prerequisite("ASCI490", ["ASCI290"]).
prerequisite("ASCI302", ["ASCI229"]).
prerequisite("ASCI304", ["ASCI302"]).
prerequisite("ASCI340", ["ASCI112"]).
prerequisite("ASCI351", ["ASCI229"]).
prerequisite("ASCI363", []).
prerequisite("ASCI477", ["ASCI363"]).
prerequisite("ASCI478", ["ASCI363"]).
prerequisite("ASCI479", ["ASCI363"]).
prerequisite("ASCI221", ["ASCI112"]).
prerequisite("ASCI223", ["ASCI112"]).
prerequisite("DSCI230", ["ASCI112"]).
prerequisite("ASCI222", ["ASCI112"]).
prerequisite("ASCI225", ["ASCI112"]).
prerequisite("ASCI224", ["ASCI112"]).
prerequisite("ASCI227", ["ASCI112"]).
prerequisite("ASCI239", ["ASCI112"]).
prerequisite("ASCI319", ["CHEM127"]).
prerequisite("CHEM314", ["CHEM127"]).
prerequisite("CHEM369", ["CHEM127"]).
prerequisite("ASCI346", ["ASCI220"]).
prerequisite("ASCI350", ["ASCI220"]).
prerequisite("ASCI355", ["ASCI220"]).
prerequisite("ASCI419", ["ASCI220"]).
prerequisite("DSCI301", ["ASCI220"]).
prerequisite("ASCI333", ["ASCI351"]).
prerequisite("ASCI366", ["ASCI351"]).
prerequisite("ASCI405", ["ASCI351"]).
prerequisite("ASCI406", ["ASCI351"]).
prerequisite("ASCI438", ["ASCI351"]).
prerequisite("ASCI440", ["ASCI351"]).
prerequisite("ASCI455", ["ASCI351"]).
prerequisite("DSCI321", ["ASCI351"]).
prerequisite("DSCI330", ["ASCI351"]).
prerequisite("BIO111", []).
prerequisite("BIO161", []).
prerequisite("CHEM127", ["MATH118"]).
prerequisite("CHEM128", ["CHEM127"]).
prerequisite("CHEM216", ["CHEM128"]).
prerequisite("CHEM312", ["CHEM128"]).
prerequisite("MATH118", []).
prerequisite("MATH161", ["MATH118"]).
prerequisite("STAT218", ["MATH118"]).

major("Anthropology and Geography").

class("Anthropology and Geography", "ANT201").
class("Anthropology and Geography", "ANT202").
class("Anthropology and Geography", "ANT250").
class("Anthropology and Geography", "ANT360").
class("Anthropology and Geography", "ANT384").
class("Anthropology and Geography", "GEOG384").
class("Anthropology and Geography", "ANTGEOG455").
class("Anthropology and Geography", "ANT465").
class("Anthropology and Geography", "GEOG465").
class("Anthropology and Geography", "GEOG150").
class("Anthropology and Geography", "GEOG218").
class("Anthropology and Geography", "GEOGERSC250").
class("Anthropology and Geography", "GEOG308").
class("Anthropology and Geography", "GEOG350").
class("Anthropology and Geography", "ANT310").
class("Anthropology and Geography", "ANT311").
class("Anthropology and Geography", "ANT393").
class("Anthropology and Geography", "GEOG328").
class("Anthropology and Geography", "GEOG441").
class("Anthropology and Geography", "GEOG340").
class("Anthropology and Geography", "GEOG370").
class("Anthropology and Geography", "GEOG380").
class("Anthropology and Geography", "STAT217").
class("Anthropology and Geography", "ANT461").
class("Anthropology and Geography", "ANT462").
class("Anthropology and Geography", "GEOG461").
class("Anthropology and Geography", "GEOG462").

prerequisite("ANT201", []).
prerequisite("ANT202", []).
prerequisite("ANT250", []).
prerequisite("ANT360", ["ANT201"]).
prerequisite("ANT384", []).
prerequisite("GEOG384", []).
prerequisite("ANTGEOG455", ["ANT201", "GEOG150"]).
prerequisite("ANT465", ["ANT201"]).
prerequisite("GEOG465", ["GEOG150"]).
prerequisite("GEOG150", []).
prerequisite("GEOG218", ["GEOG150"]).
prerequisite("GEOGERSC250", ["GEOG150"]).
prerequisite("GEOG308", ["GEOG150"]).
prerequisite("GEOG350", ["GEOG150"]).
prerequisite("ANT310", ["ANT201"]).
prerequisite("ANT311", ["ANT201"]).
prerequisite("ANT393", ["ANT201"]).
prerequisite("GEOG328", ["GEOG150"]).
prerequisite("GEOG441", ["GEOG218"]).
prerequisite("GEOG340", ["GEOG150"]).
prerequisite("GEOG370", ["GEOG150"]).
prerequisite("GEOG380", ["GEOG150"]).
prerequisite("STAT217", ["MATH118"]).
prerequisite("ANT461", ["ANT455"]).
prerequisite("ANT462", ["ANT461"]).
prerequisite("GEOG461", ["GEOG455"]).
prerequisite("GEOG462", ["GEOG461"]).

major("Architectural Engineering").

class("Architectural Engineering", "ARCE106").
class("Architectural Engineering", "ARCE211").
class("Architectural Engineering", "ARCE212").
class("Architectural Engineering", "ARCE223").
class("Architectural Engineering", "ARCE224").
class("Architectural Engineering", "ARCE227").
class("Architectural Engineering", "ARCE257").
class("Architectural Engineering", "ARCE302").
class("Architectural Engineering", "ARCE303").
class("Architectural Engineering", "ARCE304").
class("Architectural Engineering", "ARCE305").
class("Architectural Engineering", "ARCE306").
class("Architectural Engineering", "ARCE352").
class("Architectural Engineering", "ARCE353").
class("Architectural Engineering", "ARCE354").
class("Architectural Engineering", "ARCE371").
class("Architectural Engineering", "ARCE372").
class("Architectural Engineering", "ARCE412").
class("Architectural Engineering", "ARCE421").
class("Architectural Engineering", "ARCE422").
class("Architectural Engineering", "ARCE444").
class("Architectural Engineering", "ARCE451").
class("Architectural Engineering", "ARCE452").
class("Architectural Engineering", "ARCE476").
class("Architectural Engineering", "ARCE483").
class("Architectural Engineering", "ME212").
class("Architectural Engineering", "ARCE415").
class("Architectural Engineering", "ARCH131").
class("Architectural Engineering", "ARCH132").
class("Architectural Engineering", "ARCH133").
class("Architectural Engineering", "ARCH217").
class("Architectural Engineering", "ARCH218").
class("Architectural Engineering", "ARCH219").
class("Architectural Engineering", "ARCE260").
class("Architectural Engineering", "BRAE237").
class("Architectural Engineering", "CHEM124").
class("Architectural Engineering", "CM115").
class("Architectural Engineering", "CM232").
class("Architectural Engineering", "IME314").
class("Architectural Engineering", "CSC231").
class("Architectural Engineering", "EE201").
class("Architectural Engineering", "GEOL201").
class("Architectural Engineering", "MATH141").
class("Architectural Engineering", "MATH142").
class("Architectural Engineering", "MATH143").
class("Architectural Engineering", "MATH241").
class("Architectural Engineering", "MATH244").
class("Architectural Engineering", "ME302").
class("Architectural Engineering", "ME341").
class("Architectural Engineering", "PHYS141").
class("Architectural Engineering", "PHYS142").
class("Architectural Engineering", "PHYS143").
class("Architectural Engineering", "STAT312").
class("Architectural Engineering", "STAT321").

prerequisite("ARCE106", []).
prerequisite("ARCE211", ["PHYS141", "MATH142"]).
prerequisite("ARCE212", ["ARCE211"]).
prerequisite("ARCE223", ["ARCE211"]).
prerequisite("ARCE224", ["ARCE211"]).
prerequisite("ARCE227", ["ARCE211"]).
prerequisite("ARCE257", ["ARCE211"]).
prerequisite("ARCE302", ["ARCE223"]).
prerequisite("ARCE303", ["ARCE302"]).
prerequisite("ARCE304", ["ARCE302"]).
prerequisite("ARCE305", ["ARCE302"]).
prerequisite("ARCE306", ["ARCE302"]).
prerequisite("ARCE352", ["ARCE211"]).
prerequisite("ARCE353", ["ARCE352"]).
prerequisite("ARCE354", ["ARCE353"]).
prerequisite("ARCE371", ["ARCE302"]).
prerequisite("ARCE372", ["ARCE302"]).
prerequisite("ARCE412", ["ARCE302"]).
prerequisite("ARCE421", ["ARCE302"]).
prerequisite("ARCE422", ["ARCE421"]).
prerequisite("ARCE444", ["ARCE302"]).
prerequisite("ARCE451", ["ARCE304", "ARCE305"]).
prerequisite("ARCE452", ["ARCE444"]).
prerequisite("ARCE476", ["ARCE302"]).
prerequisite("ARCE483", ["ARCE302"]).
prerequisite("ME212", ["PHYS141", "MATH142"]).
prerequisite("ARCE415", ["ARCE372"]).
prerequisite("ARCH131", []).
prerequisite("ARCH132", ["ARCH131"]).
prerequisite("ARCH133", ["ARCH132"]).
prerequisite("ARCH217", []).
prerequisite("ARCH218", ["ARCH217"]).
prerequisite("ARCH219", ["ARCH218"]).
prerequisite("ARCE260", ["ARCH217"]).
prerequisite("BRAE237", ["PHYS141"]).
prerequisite("CHEM124", ["MATH118"]).
prerequisite("CM115", []).
prerequisite("CM232", ["CM115"]).
prerequisite("IME314", ["MATH141"]).
prerequisite("CSC231", ["MATH141"]).
prerequisite("EE201", ["PHYS141"]).
prerequisite("GEOL201", ["CHEM124"]).
prerequisite("MATH141", ["MATH118"]).
prerequisite("MATH142", ["MATH141"]).
prerequisite("MATH143", ["MATH142"]).
prerequisite("MATH241", ["MATH143"]).
prerequisite("MATH244", ["MATH241"]).
prerequisite("ME302", ["MATH241"]).
prerequisite("ME341", ["ME302"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS142", ["PHYS141"]).
prerequisite("PHYS143", ["PHYS142"]).
prerequisite("STAT312", ["MATH141"]).
prerequisite("STAT321", ["MATH141"]).

major("Architecture").

class("Architecture", "ARCH101").
class("Architecture", "ARCH131").
class("Architecture", "ARCH132").
class("Architecture", "ARCH133").
class("Architecture", "ARCH207").
class("Architecture", "ARCH217").
class("Architecture", "ARCH218").
class("Architecture", "ARCH219").
class("Architecture", "ARCH241").
class("Architecture", "ARCH242").
class("Architecture", "ARCH251").
class("Architecture", "ARCH252").
class("Architecture", "ARCH253").
class("Architecture", "ARCH307").
class("Architecture", "ARCH341").
class("Architecture", "ARCH342").
class("Architecture", "ARCH351").
class("Architecture", "ARCH352").
class("Architecture", "ARCH353").
class("Architecture", "ARCH420").
class("Architecture", "ARCH320").
class("Architecture", "ARCH443").
class("Architecture", "ARCH451").
class("Architecture", "ARCH452").
class("Architecture", "ARCH453").
class("Architecture", "ARCH481").
class("Architecture", "ARCH492").
class("Architecture", "ARCE211").
class("Architecture", "ARCE212").
class("Architecture", "ARCE226").
class("Architecture", "ARCE315").
class("Architecture", "ARCE316").
class("Architecture", "ARCH470").
class("Architecture", "EDES123").
class("Architecture", "MATH141").
class("Architecture", "MATH182").
class("Architecture", "PHYS121").
class("Architecture", "PHYS141").
class("Architecture", "PHYS122").
class("Architecture", "PHYS142").

prerequisite("ARCH101", []).
prerequisite("ARCH131", []).
prerequisite("ARCH132", ["ARCH131"]).
prerequisite("ARCH133", ["ARCH132"]).
prerequisite("ARCH207", ["ARCH133"]).
prerequisite("ARCH217", []).
prerequisite("ARCH218", ["ARCH217"]).
prerequisite("ARCH219", ["ARCH218"]).
prerequisite("ARCH241", ["ARCH133"]).
prerequisite("ARCH242", ["ARCH241"]).
prerequisite("ARCH251", ["ARCH133"]).
prerequisite("ARCH252", ["ARCH251"]).
prerequisite("ARCH253", ["ARCH252"]).
prerequisite("ARCH307", ["ARCH207"]).
prerequisite("ARCH341", ["ARCH242"]).
prerequisite("ARCH342", ["ARCH341"]).
prerequisite("ARCH351", ["ARCH253"]).
prerequisite("ARCH352", ["ARCH351"]).
prerequisite("ARCH353", ["ARCH352"]).
prerequisite("ARCH420", ["ARCH219"]).
prerequisite("ARCH320", ["ARCH219"]).
prerequisite("ARCH443", ["ARCH353"]).
prerequisite("ARCH451", ["ARCH353"]).
prerequisite("ARCH452", ["ARCH451"]).
prerequisite("ARCH453", ["ARCH452"]).
prerequisite("ARCH481", ["ARCH453"]).
prerequisite("ARCH492", ["ARCH481"]).
prerequisite("ARCE211", ["PHYS121"]).
prerequisite("ARCE212", ["ARCE211"]).
prerequisite("ARCE226", ["ARCE211"]).
prerequisite("ARCE315", ["ARCE226"]).
prerequisite("ARCE316", ["ARCE315"]).
prerequisite("ARCH470", ["ARCE315"]).
prerequisite("EDES123", []).
prerequisite("MATH141", ["MATH118"]).
prerequisite("MATH182", ["MATH141"]).
prerequisite("PHYS121", ["MATH141"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS122", ["PHYS121"]).
prerequisite("PHYS142", ["PHYS141"]).

major("Art and Design").

class("Art and Design", "ART101").
class("Art and Design", "ART102").
class("Art and Design", "ART104").
class("Art and Design", "ART182").
class("Art and Design", "ART183").
class("Art and Design", "ART203").
class("Art and Design", "ART209").
class("Art and Design", "ART212").
class("Art and Design", "ART213").
class("Art and Design", "ART224").
class("Art and Design", "ART260").
class("Art and Design", "ART315").
class("Art and Design", "ART310").
class("Art and Design", "ART311").
class("Art and Design", "ART313").
class("Art and Design", "ART314").
class("Art and Design", "ART317").
class("Art and Design", "ART318").
class("Art and Design", "ART370").
class("Art and Design", "ART371").
class("Art and Design", "ART373").
class("Art and Design", "ARTWGQS375").
class("Art and Design", "COMS316").
class("Art and Design", "ES310").
class("Art and Design", "ES320").
class("Art and Design", "ES321").
class("Art and Design", "ES322").
class("Art and Design", "ES323").
class("Art and Design", "ES330").
class("Art and Design", "ES335").
class("Art and Design", "ESWGQS345").
class("Art and Design", "ES380").
class("Art and Design", "ES381").
class("Art and Design", "HIST309").
class("Art and Design", "PSY304").
class("Art and Design", "SOC315").
class("Art and Design", "WGQS301").
class("Art and Design", "WGQS302").
class("Art and Design", "WGQS320").
class("Art and Design", "WGQS340").

prerequisite("ART101", []).
prerequisite("ART102", []).
prerequisite("ART104", ["ART102"]).
prerequisite("ART182", []).
prerequisite("ART183", ["ART182"]).
prerequisite("ART203", []).
prerequisite("ART209", ["ART101"]).
prerequisite("ART212", ["ART101"]).
prerequisite("ART213", ["ART212"]).
prerequisite("ART224", ["ART101"]).
prerequisite("ART260", ["ART104"]).
prerequisite("ART315", ["ART213"]).
prerequisite("ART310", ["ART213"]).
prerequisite("ART311", ["ART213"]).
prerequisite("ART313", ["ART213"]).
prerequisite("ART314", ["ART213"]).
prerequisite("ART317", ["ART213"]).
prerequisite("ART318", ["ART213"]).
prerequisite("ART370", ["ART213"]).
prerequisite("ART371", ["ART213"]).
prerequisite("ART373", ["ART213"]).
prerequisite("ARTWGQS375", ["ART213"]).
prerequisite("COMS316", []).
prerequisite("ES310", []).
prerequisite("ES320", []).
prerequisite("ES321", []).
prerequisite("ES322", []).
prerequisite("ES323", []).
prerequisite("ES330", []).
prerequisite("ES335", []).
prerequisite("ESWGQS345", []).
prerequisite("ES380", []).
prerequisite("ES381", []).
prerequisite("HIST309", []).
prerequisite("PSY304", []).
prerequisite("SOC315", []).
prerequisite("WGQS301", []).
prerequisite("WGQS302", []).
prerequisite("WGQS320", []).
prerequisite("WGQS340", []).

major("Biochemistry").

class("Biochemistry", "CHEM124").
class("Biochemistry", "CHEM125").
class("Biochemistry", "CHEM126").
class("Biochemistry", "CHEM203").
class("Biochemistry", "CHEM216").
class("Biochemistry", "CHEM217").
class("Biochemistry", "CHEM218").
class("Biochemistry", "CHEM221").
class("Biochemistry", "CHEM303").
class("Biochemistry", "CHEM324").
class("Biochemistry", "CHEM331").
class("Biochemistry", "CHEM351").
class("Biochemistry", "CHEM352").
class("Biochemistry", "CHEM353").
class("Biochemistry", "CHEM356").
class("Biochemistry", "CHEM369").
class("Biochemistry", "CHEM372").
class("Biochemistry", "CHEM373").
class("Biochemistry", "CHEM403").
class("Biochemistry", "CHEMBIO475").
class("Biochemistry", "BIO476").
class("Biochemistry", "CHEM474").
class("Biochemistry", "CHEM302").
class("Biochemistry", "CHEM341").
class("Biochemistry", "CHEM357").
class("Biochemistry", "CHEM377").
class("Biochemistry", "CHEM401").
class("Biochemistry", "CHEM405").
class("Biochemistry", "CHEM414").
class("Biochemistry", "CHEM418").
class("Biochemistry", "CHEM420").
class("Biochemistry", "CHEM428").
class("Biochemistry", "CHEM432").
class("Biochemistry", "CHEM439").
class("Biochemistry", "CHEM441").
class("Biochemistry", "CHEM444").
class("Biochemistry", "CHEM445").
class("Biochemistry", "CHEMMATE446").
class("Biochemistry", "CHEM447").
class("Biochemistry", "CHEM448").
class("Biochemistry", "CHEM449").
class("Biochemistry", "CHEM450").
class("Biochemistry", "CHEM451").
class("Biochemistry", "CHEM454").
class("Biochemistry", "CHEM458").
class("Biochemistry", "CHEM463").
class("Biochemistry", "CHEM465").
class("Biochemistry", "CHEM466").
class("Biochemistry", "CHEM470").
class("Biochemistry", "CHEM477").
class("Biochemistry", "CHEM481").
class("Biochemistry", "CHEM484").
class("Biochemistry", "CHEM485").
class("Biochemistry", "CHEM495").
class("Biochemistry", "SCM302").
class("Biochemistry", "ENGR322").
class("Biochemistry", "BIOCHEM308").
class("Biochemistry", "CHEM349").
class("Biochemistry", "ENVE324").
class("Biochemistry", "SCM360").
class("Biochemistry", "BIO351").
class("Biochemistry", "BIO361").
class("Biochemistry", "BIO405").
class("Biochemistry", "BIO406").
class("Biochemistry", "BIO407").
class("Biochemistry", "BIO408").
class("Biochemistry", "BIO409").
class("Biochemistry", "BIO410").
class("Biochemistry", "BIO426").
class("Biochemistry", "BIO452").
class("Biochemistry", "MCRO402").
class("Biochemistry", "MCRO423").
class("Biochemistry", "MCRO424").
class("Biochemistry", "STAT312").
class("Biochemistry", "BIO161").
class("Biochemistry", "BIO452").
class("Biochemistry", "CHEM432").
class("Biochemistry", "MCRO224").
class("Biochemistry", "MATH141").
class("Biochemistry", "MATH142").
class("Biochemistry", "MATH143").
class("Biochemistry", "PHYS141").
class("Biochemistry", "PHYS142").
class("Biochemistry", "PHYS143").

prerequisite("CHEM124", ["MATH141"]).
prerequisite("CHEM125", ["CHEM124"]).
prerequisite("CHEM126", ["CHEM125"]).
prerequisite("CHEM203", []).
prerequisite("CHEM216", ["CHEM125"]).
prerequisite("CHEM217", ["CHEM216"]).
prerequisite("CHEM218", ["CHEM217"]).
prerequisite("CHEM221", ["CHEM216"]).
prerequisite("CHEM303", ["CHEM203"]).
prerequisite("CHEM324", ["CHEM221"]).
prerequisite("CHEM331", ["CHEM126"]).
prerequisite("CHEM351", ["CHEM331"]).
prerequisite("CHEM352", ["CHEM351"]).
prerequisite("CHEM353", ["CHEM352"]).
prerequisite("CHEM356", ["CHEM353"]).
prerequisite("CHEM369", ["CHEM217"]).
prerequisite("CHEM372", ["CHEM369"]).
prerequisite("CHEM373", ["CHEM369"]).
prerequisite("CHEM403", ["CHEM303"]).
prerequisite("CHEMBIO475", ["CHEM373"]).
prerequisite("BIO476", ["BIO161"]).
prerequisite("CHEM474", ["CHEM373"]).
prerequisite("CHEM302", ["CHEM126"]).
prerequisite("CHEM341", ["CHEM331"]).
prerequisite("CHEM357", ["CHEM353"]).
prerequisite("CHEM377", ["CHEM217"]).
prerequisite("CHEM401", ["CHEM331"]).
prerequisite("CHEM405", ["CHEM352"]).
prerequisite("CHEM414", ["CHEM218"]).
prerequisite("CHEM418", ["CHEM369"]).
prerequisite("CHEM420", ["CHEM218"]).
prerequisite("CHEM428", ["CHEM369"]).
prerequisite("CHEM432", ["CHEM353"]).
prerequisite("CHEM439", ["CHEM331"]).
prerequisite("CHEM441", ["CHEM373"]).
prerequisite("CHEM444", ["CHEM217"]).
prerequisite("CHEM445", ["CHEM444"]).
prerequisite("CHEMMATE446", ["CHEM331"]).
prerequisite("CHEM447", ["CHEM445"]).
prerequisite("CHEM448", ["CHEM447"]).
prerequisite("CHEM449", ["CHEM448"]).
prerequisite("CHEM450", ["CHEM449"]).
prerequisite("CHEM451", ["CHEM450"]).
prerequisite("CHEM454", ["CHEM450"]).
prerequisite("CHEM458", ["CHEM218"]).
prerequisite("CHEM463", ["CHEM353"]).
prerequisite("CHEM465", ["CHEM369"]).
prerequisite("CHEM466", ["CHEM465"]).
prerequisite("CHEM470", ["CHEM353"]).
prerequisite("CHEM477", ["CHEM369"]).
prerequisite("CHEM481", ["CHEM353"]).
prerequisite("CHEM484", ["CHEM481"]).
prerequisite("CHEM485", ["CHEM353"]).
prerequisite("CHEM495", ["CHEM485"]).
prerequisite("SCM302", ["CHEM124"]).
prerequisite("ENGR322", ["CHEM124"]).
prerequisite("BIOCHEM308", ["CHEM217"]).
prerequisite("CHEM349", ["CHEM217"]).
prerequisite("ENVE324", ["CHEM126"]).
prerequisite("SCM360", ["CHEM124"]).
prerequisite("BIO351", ["BIO161"]).
prerequisite("BIO361", ["BIO351"]).
prerequisite("BIO405", ["BIO351"]).
prerequisite("BIO406", ["BIO351"]).
prerequisite("BIO407", ["BIO351"]).
prerequisite("BIO408", ["BIO351"]).
prerequisite("BIO409", ["BIO351"]).
prerequisite("BIO410", ["BIO351"]).
prerequisite("BIO426", ["BIO351"]).
prerequisite("BIO452", ["BIO351"]).
prerequisite("MCRO402", ["BIO351"]).
prerequisite("MCRO423", ["BIO351"]).
prerequisite("MCRO424", ["BIO351"]).
prerequisite("STAT312", ["MATH142"]).
prerequisite("BIO161", ["CHEM124"]).
prerequisite("BIO452", ["BIO351"]).
prerequisite("CHEM432", ["CHEM353"]).
prerequisite("MCRO224", ["BIO161"]).
prerequisite("MATH141", ["MATH118"]).
prerequisite("MATH142", ["MATH141"]).
prerequisite("MATH143", ["MATH142"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS142", ["PHYS141"]).
prerequisite("PHYS143", ["PHYS142"]).

major("Biological Sciences").

class("Biological Sciences", "BIO150").
class("Biological Sciences", "BIO161").
class("Biological Sciences", "BIO162").
class("Biological Sciences", "BIO263").
class("Biological Sciences", "BIO351").
class("Biological Sciences", "BIO413").
class("Biological Sciences", "BIO414").
class("Biological Sciences", "BIO461").
class("Biological Sciences", "BIO462").
class("Biological Sciences", "BIO327").
class("Biological Sciences", "BIO363").
class("Biological Sciences", "BIO442").
class("Biological Sciences", "BOT326").
class("Biological Sciences", "MCRO436").
class("Biological Sciences", "MSCI300").
class("Biological Sciences", "BIO361").
class("Biological Sciences", "BIO434").
class("Biological Sciences", "BIO435").
class("Biological Sciences", "CHEM127").
class("Biological Sciences", "CHEM128").
class("Biological Sciences", "CHEM129").
class("Biological Sciences", "CHEM216").
class("Biological Sciences", "CHEM312").
class("Biological Sciences", "MATH161").
class("Biological Sciences", "MATH162").
class("Biological Sciences", "PHYS121").
class("Biological Sciences", "PHYS122").
class("Biological Sciences", "PHYS123").
class("Biological Sciences", "STAT218").

prerequisite("BIO150", []).
prerequisite("BIO161", ["CHEM124"]).
prerequisite("BIO162", ["BIO161"]).
prerequisite("BIO263", ["BIO161", "BIO162"]).
prerequisite("BIO351", ["BIO161", "BIO263"]).
prerequisite("BIO413", ["BIO351"]).
prerequisite("BIO414", ["BIO351"]).
prerequisite("BIO461", ["BIO351"]).
prerequisite("BIO462", ["BIO461"]).
prerequisite("BIO327", ["BIO263"]).
prerequisite("BIO363", ["BIO263"]).
prerequisite("BIO442", ["BIO263"]).
prerequisite("BOT326", ["BIO263"]).
prerequisite("MCRO436", ["BIO263"]).
prerequisite("MSCI300", ["BIO263"]).
prerequisite("BIO361", ["BIO263"]).
prerequisite("BIO434", ["BIO263"]).
prerequisite("BIO435", ["BIO263"]).
prerequisite("CHEM127", ["MATH118"]).
prerequisite("CHEM128", ["CHEM127"]).
prerequisite("CHEM129", ["CHEM128"]).
prerequisite("CHEM216", ["CHEM128"]).
prerequisite("CHEM312", ["CHEM128"]).
prerequisite("MATH161", ["MATH118"]).
prerequisite("MATH162", ["MATH161"]).
prerequisite("PHYS121", ["MATH141"]).
prerequisite("PHYS122", ["PHYS121"]).
prerequisite("PHYS123", ["PHYS122"]).
prerequisite("STAT218", ["MATH118"]).

major("Biomedical Engineering").

class("Biomedical Engineering", "BMED101").
class("Biomedical Engineering", "BMED102").
class("Biomedical Engineering", "BMED212").
class("Biomedical Engineering", "BMED310").
class("Biomedical Engineering", "BMED410").
class("Biomedical Engineering", "BMED420").
class("Biomedical Engineering", "BMED425").
class("Biomedical Engineering", "BMED430").
class("Biomedical Engineering", "BMED440").
class("Biomedical Engineering", "BMED450").
class("Biomedical Engineering", "BMED455").
class("Biomedical Engineering", "BMED456").
class("Biomedical Engineering", "BMED460").
class("Biomedical Engineering", "BIO161").
class("Biomedical Engineering", "BIO231").
class("Biomedical Engineering", "BIO232").
class("Biomedical Engineering", "CE204").
class("Biomedical Engineering", "CHEM124").
class("Biomedical Engineering", "CHEM125").
class("Biomedical Engineering", "CSC231").
class("Biomedical Engineering", "EE201").
class("Biomedical Engineering", "ENGL147").
class("Biomedical Engineering", "MATE210").
class("Biomedical Engineering", "MATH141").
class("Biomedical Engineering", "MATH142").
class("Biomedical Engineering", "MATH143").
class("Biomedical Engineering", "MATH241").
class("Biomedical Engineering", "MATH244").
class("Biomedical Engineering", "ME211").
class("Biomedical Engineering", "ME212").
class("Biomedical Engineering", "ME302").
class("Biomedical Engineering", "ME341").
class("Biomedical Engineering", "PHYS141").
class("Biomedical Engineering", "PHYS142").
class("Biomedical Engineering", "PHYS143").
class("Biomedical Engineering", "STAT312").

prerequisite("BMED101", []).
prerequisite("BMED102", ["BMED101"]).
prerequisite("BMED212", ["BMED102"]).
prerequisite("BMED310", ["BMED212"]).
prerequisite("BMED410", ["BMED310"]).
prerequisite("BMED420", ["BMED310"]).
prerequisite("BMED425", ["BMED310"]).
prerequisite("BMED430", ["BMED310"]).
prerequisite("BMED440", ["BMED310"]).
prerequisite("BMED450", ["BMED310"]).
prerequisite("BMED455", ["BMED450"]).
prerequisite("BMED456", ["BMED455"]).
prerequisite("BMED460", ["BMED310"]).
prerequisite("BIO161", ["CHEM124"]).
prerequisite("BIO231", ["BIO161"]).
prerequisite("BIO232", ["BIO231"]).
prerequisite("CE204", ["ME211"]).
prerequisite("CHEM124", ["MATH141"]).
prerequisite("CHEM125", ["CHEM124"]).
prerequisite("CSC231", ["MATH141"]).
prerequisite("EE201", ["PHYS141"]).
prerequisite("ENGL147", []).
prerequisite("MATE210", ["CHEM124"]).
prerequisite("MATH141", ["MATH118"]).
prerequisite("MATH142", ["MATH141"]).
prerequisite("MATH143", ["MATH142"]).
prerequisite("MATH241", ["MATH143"]).
prerequisite("MATH244", ["MATH241"]).
prerequisite("ME211", ["MATH241"]).
prerequisite("ME212", ["ME211"]).
prerequisite("ME302", ["MATH241"]).
prerequisite("ME341", ["ME302"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS142", ["PHYS141"]).
prerequisite("PHYS143", ["PHYS142"]).
prerequisite("STAT312", ["MATH142"]).

major("BioResource and Agricultural Engineering").

class("BioResource and Agricultural Engineering", "BRAE128").
class("BioResource and Agricultural Engineering", "BRAE129").
class("BioResource and Agricultural Engineering", "BRAE150").
class("BioResource and Agricultural Engineering", "BRAE152").
class("BioResource and Agricultural Engineering", "BRAE216").
class("BioResource and Agricultural Engineering", "BRAE232").
class("BioResource and Agricultural Engineering", "BRAE234").
class("BioResource and Agricultural Engineering", "BRAE236").
class("BioResource and Agricultural Engineering", "BRAE239").
class("BioResource and Agricultural Engineering", "BRAE312").
class("BioResource and Agricultural Engineering", "BRAE320").
class("BioResource and Agricultural Engineering", "BRAE328").
class("BioResource and Agricultural Engineering", "BRAE331").
class("BioResource and Agricultural Engineering", "BRAE332").
class("BioResource and Agricultural Engineering", "BRAE403").
class("BioResource and Agricultural Engineering", "BRAE414").
class("BioResource and Agricultural Engineering", "BRAE421").
class("BioResource and Agricultural Engineering", "BRAE422").
class("BioResource and Agricultural Engineering", "BRAE428").
class("BioResource and Agricultural Engineering", "BRAE433").
class("BioResource and Agricultural Engineering", "BRAE460").
class("BioResource and Agricultural Engineering", "BRAE465").
class("BioResource and Agricultural Engineering", "BRAE302").
class("BioResource and Agricultural Engineering", "BRAE333").
class("BioResource and Agricultural Engineering", "BRAE335").
class("BioResource and Agricultural Engineering", "BRAE345").
class("BioResource and Agricultural Engineering", "BRAE348").
class("BioResource and Agricultural Engineering", "BRAENR349").
class("BioResource and Agricultural Engineering", "BRAE400").
class("BioResource and Agricultural Engineering", "BRAE405").
class("BioResource and Agricultural Engineering", "BRAEEE434").
class("BioResource and Agricultural Engineering", "BRAE435").
class("BioResource and Agricultural Engineering", "BRAE436").
class("BioResource and Agricultural Engineering", "BRAE447").
class("BioResource and Agricultural Engineering", "BRAE448").
class("BioResource and Agricultural Engineering", "BRAE450").
class("BioResource and Agricultural Engineering", "BRAE532").
class("BioResource and Agricultural Engineering", "BRAE533").
class("BioResource and Agricultural Engineering", "CHEM312").
class("BioResource and Agricultural Engineering", "IME319").
class("BioResource and Agricultural Engineering", "MCRO421").

prerequisite("BRAE128", []).
prerequisite("BRAE129", []).
prerequisite("BRAE150", []).
prerequisite("BRAE152", []).
prerequisite("BRAE216", ["MATH142"]).
prerequisite("BRAE232", ["BRAE129"]).
prerequisite("BRAE234", ["BRAE150"]).
prerequisite("BRAE236", ["BRAE150"]).
prerequisite("BRAE239", ["MATH142"]).
prerequisite("BRAE312", ["BRAE216"]).
prerequisite("BRAE320", ["BRAE216"]).
prerequisite("BRAE328", ["BRAE234"]).
prerequisite("BRAE331", ["BRAE236"]).
prerequisite("BRAE332", ["BRAE216"]).
prerequisite("BRAE403", ["BRAE328"]).
prerequisite("BRAE414", ["BRAE236"]).
prerequisite("BRAE421", ["BRAE234"]).
prerequisite("BRAE422", ["BRAE421"]).
prerequisite("BRAE428", ["BRAE234"]).
prerequisite("BRAE433", ["BRAE232"]).
prerequisite("BRAE460", ["BRAE403"]).
prerequisite("BRAE465", ["BRAE460"]).
prerequisite("BRAE302", ["BRAE216"]).
prerequisite("BRAE333", ["BRAE236"]).
prerequisite("BRAE335", ["BRAE234"]).
prerequisite("BRAE345", ["BRAE236"]).
prerequisite("BRAE348", ["BRAE236"]).
prerequisite("BRAENR349", ["BRAE236"]).
prerequisite("BRAE400", ["BRAE236"]).
prerequisite("BRAE405", ["BRAE236"]).
prerequisite("BRAEEE434", ["BRAE236"]).
prerequisite("BRAE435", ["BRAE236"]).
prerequisite("BRAE436", ["BRAE236"]).
prerequisite("BRAE447", ["BRAE236"]).
prerequisite("BRAE448", ["BRAE236"]).
prerequisite("BRAE450", ["BRAE236"]).
prerequisite("BRAE532", ["BRAE236"]).
prerequisite("BRAE533", ["BRAE236"]).
prerequisite("CHEM312", ["CHEM125"]).
prerequisite("IME319", ["MATH141"]).
prerequisite("MCRO421", ["MCRO224"]).

major("Business Administration").

class("Business Administration", "BUS206").
class("Business Administration", "BUS207").
class("Business Administration", "BUS214").
class("Business Administration", "BUS215").
class("Business Administration", "BUS342").
class("Business Administration", "BUS346").
class("Business Administration", "BUS387").
class("Business Administration", "BUS391").
class("Business Administration", "BUS401").
class("Business Administration", "BUS411").
class("Business Administration", "BUS404").
class("Business Administration", "ITP303").
class("Business Administration", "ITP326").
class("Business Administration", "ITP330").
class("Business Administration", "ITP341").
class("Business Administration", "ITP371").
class("Business Administration", "BUS301").
class("Business Administration", "BUS302").
class("Business Administration", "BUS303").
class("Business Administration", "BUS304").
class("Business Administration", "BUS410").
class("Business Administration", "BUS446").
class("Business Administration", "ECON330").
class("Business Administration", "BUS416").
class("Business Administration", "BUS461").
class("Business Administration", "BUS462").
class("Business Administration", "BUS463").
class("Business Administration", "BUS464").
class("Business Administration", "ECON464").
class("Business Administration", "ECON221").
class("Business Administration", "ECON222").
class("Business Administration", "MATH221").
class("Business Administration", "STAT251").
class("Business Administration", "STAT252").

prerequisite("BUS206", []).
prerequisite("BUS207", ["ECON221"]).
prerequisite("BUS214", ["MATH221"]).
prerequisite("BUS215", ["BUS214"]).
prerequisite("BUS342", ["BUS214"]).
prerequisite("BUS346", ["ECON221"]).
prerequisite("BUS387", ["ECON221"]).
prerequisite("BUS391", ["STAT251"]).
prerequisite("BUS401", ["BUS346"]).
prerequisite("BUS411", ["BUS401"]).
prerequisite("BUS404", ["BUS207"]).
prerequisite("ITP303", []).
prerequisite("ITP326", []).
prerequisite("ITP330", []).
prerequisite("ITP341", []).
prerequisite("ITP371", []).
prerequisite("BUS301", ["ECON221"]).
prerequisite("BUS302", ["ECON221"]).
prerequisite("BUS303", ["ECON221"]).
prerequisite("BUS304", ["ECON221"]).
prerequisite("BUS410", ["BUS207"]).
prerequisite("BUS446", ["BUS346"]).
prerequisite("ECON330", ["ECON221"]).
prerequisite("BUS416", ["BUS214"]).
prerequisite("BUS461", ["BUS401"]).
prerequisite("BUS462", ["BUS461"]).
prerequisite("BUS463", ["BUS214"]).
prerequisite("BUS464", ["BUS401"]).
prerequisite("ECON464", ["ECON221"]).
prerequisite("ECON221", ["MATH221"]).
prerequisite("ECON222", ["ECON221"]).
prerequisite("MATH221", ["MATH118"]).
prerequisite("STAT251", ["MATH221"]).
prerequisite("STAT252", ["STAT251"]).

major("Chemistry").

class("Chemistry", "CHEM124").
class("Chemistry", "CHEM125").
class("Chemistry", "CHEM126").
class("Chemistry", "CHEM203").
class("Chemistry", "CHEM216").
class("Chemistry", "CHEM217").
class("Chemistry", "CHEM218").
class("Chemistry", "CHEM221").
class("Chemistry", "CHEM303").
class("Chemistry", "CHEM324").
class("Chemistry", "CHEM331").
class("Chemistry", "CHEM351").
class("Chemistry", "CHEM352").
class("Chemistry", "CHEM353").
class("Chemistry", "CHEM356").
class("Chemistry", "CHEM357").
class("Chemistry", "CHEM369").
class("Chemistry", "CHEM403").
class("Chemistry", "CHEM439").
class("Chemistry", "CHEM481").
class("Chemistry", "CHEM484").
class("Chemistry", "BIO308").
class("Chemistry", "CHEM349").
class("Chemistry", "ENVE324").
class("Chemistry", "SCM360").
class("Chemistry", "BIO441").
class("Chemistry", "CHEM475").
class("Chemistry", "CHEM302").
class("Chemistry", "CHEM341").
class("Chemistry", "CHEM372").
class("Chemistry", "CHEM373").
class("Chemistry", "CHEM377").
class("Chemistry", "CHEM401").
class("Chemistry", "CHEM405").
class("Chemistry", "CHEM414").
class("Chemistry", "CHEM418").
class("Chemistry", "CHEM420").
class("Chemistry", "CHEM428").
class("Chemistry", "CHEM432").
class("Chemistry", "CHEM444").
class("Chemistry", "CHEM445").
class("Chemistry", "CHEM446").
class("Chemistry", "CHEM447").
class("Chemistry", "CHEM448").
class("Chemistry", "CHEM449").
class("Chemistry", "CHEM450").
class("Chemistry", "CHEM451").
class("Chemistry", "CHEM454").
class("Chemistry", "CHEM458").
class("Chemistry", "CHEM463").
class("Chemistry", "CHEM465").
class("Chemistry", "CHEM466").
class("Chemistry", "CHEM470").
class("Chemistry", "CHEM474").
class("Chemistry", "CHEM477").
class("Chemistry", "CHEM485").
class("Chemistry", "CHEM495").
class("Chemistry", "SCM302").
class("Chemistry", "ENGR322").
class("Chemistry", "BIO161").
class("Chemistry", "MATH141").
class("Chemistry", "MATH142").
class("Chemistry", "MATH143").
class("Chemistry", "MATH241").
class("Chemistry", "CSC232").
class("Chemistry", "CSC234").
class("Chemistry", "MATH206").
class("Chemistry", "MATH244").
class("Chemistry", "STAT218").
class("Chemistry", "STAT312").
class("Chemistry", "PHYS141").
class("Chemistry", "PHYS142").
class("Chemistry", "PHYS143").

prerequisite("CHEM124", ["MATH141"]).
prerequisite("CHEM125", ["CHEM124"]).
prerequisite("CHEM126", ["CHEM125"]).
prerequisite("CHEM203", ["CHEM124"]).
prerequisite("CHEM216", ["CHEM125"]).
prerequisite("CHEM217", ["CHEM216"]).
prerequisite("CHEM218", ["CHEM217"]).
prerequisite("CHEM221", ["CHEM217"]).
prerequisite("CHEM303", ["CHEM203"]).
prerequisite("CHEM324", ["CHEM221"]).
prerequisite("CHEM331", ["CHEM126"]).
prerequisite("CHEM351", ["CHEM126"]).
prerequisite("CHEM352", ["CHEM351"]).
prerequisite("CHEM353", ["CHEM352"]).
prerequisite("CHEM356", ["CHEM352"]).
prerequisite("CHEM357", ["CHEM353"]).
prerequisite("CHEM369", ["CHEM218"]).
prerequisite("CHEM403", ["CHEM303"]).
prerequisite("CHEM439", ["CHEM331"]).
prerequisite("CHEM481", ["CHEM352"]).
prerequisite("CHEM484", ["CHEM481"]).
prerequisite("BIO308", ["BIO161"]).
prerequisite("CHEM349", ["CHEM217"]).
prerequisite("ENVE324", ["CHEM126"]).
prerequisite("SCM360", ["CHEM126"]).
prerequisite("BIO441", ["BIO161"]).
prerequisite("CHEM475", ["CHEM217"]).
prerequisite("CHEM302", ["CHEM126"]).
prerequisite("CHEM341", ["CHEM331"]).
prerequisite("CHEM372", ["CHEM369"]).
prerequisite("CHEM373", ["CHEM372"]).
prerequisite("CHEM377", ["CHEM217"]).
prerequisite("CHEM401", ["CHEM331"]).
prerequisite("CHEM405", ["CHEM353"]).
prerequisite("CHEM414", ["CHEM217"]).
prerequisite("CHEM418", ["CHEM369"]).
prerequisite("CHEM420", ["CHEM414"]).
prerequisite("CHEM428", ["CHEM372"]).
prerequisite("CHEM432", ["CHEM369"]).
prerequisite("CHEM444", ["CHEM331"]).
prerequisite("CHEM445", ["CHEM444"]).
prerequisite("CHEM446", ["CHEM445"]).
prerequisite("CHEM447", ["CHEM444"]).
prerequisite("CHEM448", ["CHEM447"]).
prerequisite("CHEM449", ["CHEM448"]).
prerequisite("CHEM450", ["CHEM449"]).
prerequisite("CHEM451", ["CHEM450"]).
prerequisite("CHEM454", ["CHEM451"]).
prerequisite("CHEM458", ["CHEM414"]).
prerequisite("CHEM463", ["CHEM331"]).
prerequisite("CHEM465", ["CHEM331"]).
prerequisite("CHEM466", ["CHEM331"]).
prerequisite("CHEM470", ["CHEM331"]).
prerequisite("CHEM474", ["CHEM475"]).
prerequisite("CHEM477", ["CHEM372"]).
prerequisite("CHEM485", ["CHEM331"]).
prerequisite("CHEM495", ["CHEM331"]).
prerequisite("SCM302", ["CHEM126"]).
prerequisite("ENGR322", ["CHEM126"]).
prerequisite("BIO161", ["CHEM124"]).
prerequisite("MATH141", ["MATH118"]).
prerequisite("MATH142", ["MATH141"]).
prerequisite("MATH143", ["MATH142"]).
prerequisite("MATH241", ["MATH143"]).
prerequisite("CSC232", ["MATH141"]).
prerequisite("CSC234", ["MATH141"]).
prerequisite("MATH206", ["MATH141"]).
prerequisite("MATH244", ["MATH143"]).
prerequisite("STAT218", ["MATH142"]).
prerequisite("STAT312", ["MATH142"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS142", ["PHYS141"]).
prerequisite("PHYS143", ["PHYS142"]).

major("Child Development").

class("Child Development", "CD102").
class("Child Development", "CD131").
class("Child Development", "CD230").
class("Child Development", "CD254").
class("Child Development", "CD256").
class("Child Development", "CD302").
class("Child Development", "CD304").
class("Child Development", "CD305").
class("Child Development", "CD306").
class("Child Development", "PSY323").
class("Child Development", "CD329").
class("Child Development", "CD356").
class("Child Development", "CD350").
class("Child Development", "CD351").
class("Child Development", "CD411").
class("Child Development", "CD417").
class("Child Development", "CD431").
class("Child Development", "CD460").
class("Child Development", "CD448").
class("Child Development", "CD449").
class("Child Development", "CD453").
class("Child Development", "CD454").
class("Child Development", "CD424").
class("Child Development", "CD450").
class("Child Development", "CD461").
class("Child Development", "CD462").
class("Child Development", "BIO111").
class("Child Development", "BIO123").
class("Child Development", "BIO161").
class("Child Development", "BIO302").
class("Child Development", "PSY344").
class("Child Development", "PSY201").
class("Child Development", "PSY202").
class("Child Development", "STAT217").
class("Child Development", "PSY304").
class("Child Development", "PSY324").
class("Child Development", "PSY372").
class("Child Development", "PSY465").
class("Child Development", "PSY475").

prerequisite("CD102", []).
prerequisite("CD131", []).
prerequisite("CD230", ["CD131"]).
prerequisite("CD254", []).
prerequisite("CD256", ["PSY201"]).
prerequisite("CD302", ["CD131", "CD256"]).
prerequisite("CD304", ["CD256"]).
prerequisite("CD305", ["CD256"]).
prerequisite("CD306", ["CD256"]).
prerequisite("PSY323", ["PSY201"]).
prerequisite("CD329", ["STAT217"]).
prerequisite("CD356", ["CD256"]).
prerequisite("CD350", []).
prerequisite("CD351", []).
prerequisite("CD411", ["CD256"]).
prerequisite("CD417", ["CD256"]).
prerequisite("CD431", ["CD256", "CD329"]).
prerequisite("CD460", ["CD256"]).
prerequisite("CD448", ["CD329"]).
prerequisite("CD449", ["CD448"]).
prerequisite("CD453", ["CD329"]).
prerequisite("CD454", ["CD453"]).
prerequisite("CD424", ["CD256"]).
prerequisite("CD450", ["CD329", "CD356"]).
prerequisite("CD461", ["CD329"]).
prerequisite("CD462", ["CD461"]).
prerequisite("BIO111", []).
prerequisite("BIO123", []).
prerequisite("BIO161", []).
prerequisite("BIO302", ["BIO161"]).
prerequisite("PSY344", ["PSY201"]).
prerequisite("PSY201", []).
prerequisite("PSY202", []).
prerequisite("STAT217", ["MATH118"]).
prerequisite("PSY304", ["PSY201"]).
prerequisite("PSY324", ["PSY201"]).
prerequisite("PSY372", ["PSY201"]).
prerequisite("PSY465", ["PSY201"]).
prerequisite("PSY475", ["PSY201"]).

major("City and Regional Planning").

class("City and Regional Planning", "CRP201").
class("City and Regional Planning", "CRP202").
class("City and Regional Planning", "CRP203").
class("City and Regional Planning", "CRP204").
class("City and Regional Planning", "CRP211").
class("City and Regional Planning", "CRP212").
class("City and Regional Planning", "CRP213").
class("City and Regional Planning", "CRP214").
class("City and Regional Planning", "CRP215").
class("City and Regional Planning", "CRP216").
class("City and Regional Planning", "CRP314").
class("City and Regional Planning", "CRP315").
class("City and Regional Planning", "CRP336").
class("City and Regional Planning", "CRP341").
class("City and Regional Planning", "CRP342").
class("City and Regional Planning", "CRP409").
class("City and Regional Planning", "CRP410").
class("City and Regional Planning", "CRP411").
class("City and Regional Planning", "CRP412").
class("City and Regional Planning", "CRP420").
class("City and Regional Planning", "CRP430").
class("City and Regional Planning", "CRP457").
class("City and Regional Planning", "CRP461").
class("City and Regional Planning", "CRP462").
class("City and Regional Planning", "CRP463").
class("City and Regional Planning", "AG350").
class("City and Regional Planning", "EDES350").
class("City and Regional Planning", "ENGR350").
class("City and Regional Planning", "ISLA350").
class("City and Regional Planning", "SCM350").
class("City and Regional Planning", "UNIV350").
class("City and Regional Planning", "ANT360").
class("City and Regional Planning", "ARCH445").
class("City and Regional Planning", "ARCH461").
class("City and Regional Planning", "BUS382").
class("City and Regional Planning", "BUS384").
class("City and Regional Planning", "BUS477").
class("City and Regional Planning", "CM475").
class("City and Regional Planning", "CRP303").
class("City and Regional Planning", "CRP325").
class("City and Regional Planning", "CRP334").
class("City and Regional Planning", "CRP400").
class("City and Regional Planning", "CRP402").
class("City and Regional Planning", "CRP404").
class("City and Regional Planning", "NR404").
class("City and Regional Planning", "CRP408").
class("City and Regional Planning", "NR408").
class("City and Regional Planning", "CRP426").
class("City and Regional Planning", "CRP428").
class("City and Regional Planning", "CRP435").
class("City and Regional Planning", "CRP440").
class("City and Regional Planning", "CRP442").
class("City and Regional Planning", "CRP445").
class("City and Regional Planning", "CRP446").
class("City and Regional Planning", "CRP448").
class("City and Regional Planning", "CRP452").
class("City and Regional Planning", "CRP455").
class("City and Regional Planning", "CRP456").
class("City and Regional Planning", "CRP458").
class("City and Regional Planning", "CRP470").
class("City and Regional Planning", "CRP471").
class("City and Regional Planning", "CRP500").
class("City and Regional Planning", "CRP513").
class("City and Regional Planning", "CRP516").
class("City and Regional Planning", "CRP520").
class("City and Regional Planning", "CRP525").
class("City and Regional Planning", "CRP545").
class("City and Regional Planning", "ECON303").
class("City and Regional Planning", "EDES123").
class("City and Regional Planning", "EDES406").
class("City and Regional Planning", "EDES408").
class("City and Regional Planning", "EDES410").
class("City and Regional Planning", "ENGL310").
class("City and Regional Planning", "ENGL317").
class("City and Regional Planning", "ENVE323").
class("City and Regional Planning", "ENVE324").
class("City and Regional Planning", "ERSC325").
class("City and Regional Planning", "GEOG325").
class("City and Regional Planning", "ERSC333").
class("City and Regional Planning", "GEOG333").
class("City and Regional Planning", "ERSC414").
class("City and Regional Planning", "GEOG414").
class("City and Regional Planning", "GEOG218").
class("City and Regional Planning", "GEOG308").
class("City and Regional Planning", "JOUR312").
class("City and Regional Planning", "LA218").
class("City and Regional Planning", "NR218").
class("City and Regional Planning", "LA317").
class("City and Regional Planning", "NR317").
class("City and Regional Planning", "NR306").
class("City and Regional Planning", "NR323").
class("City and Regional Planning", "NR326").
class("City and Regional Planning", "NR416").
class("City and Regional Planning", "NR425").
class("City and Regional Planning", "NR435").
class("City and Regional Planning", "NR465").
class("City and Regional Planning", "NR475").
class("City and Regional Planning", "PHIL333").
class("City and Regional Planning", "PHIL334").
class("City and Regional Planning", "PHIL335").
class("City and Regional Planning", "PHIL336").
class("City and Regional Planning", "PHIL337").
class("City and Regional Planning", "PHIL340").
class("City and Regional Planning", "PHIL350").
class("City and Regional Planning", "POLS310").
class("City and Regional Planning", "POLS316").
class("City and Regional Planning", "POLS325").
class("City and Regional Planning", "POLS332").
class("City and Regional Planning", "POLS338").
class("City and Regional Planning", "POLS375").
class("City and Regional Planning", "POLS419").
class("City and Regional Planning", "POLS451").
class("City and Regional Planning", "POLS459").
class("City and Regional Planning", "POLS471").
class("City and Regional Planning", "POLS515").
class("City and Regional Planning", "PSC320").
class("City and Regional Planning", "PSY302").
class("City and Regional Planning", "PSY304").
class("City and Regional Planning", "PSY311").
class("City and Regional Planning", "PSY350").
class("City and Regional Planning", "PSY352").
class("City and Regional Planning", "RPTA450").
class("City and Regional Planning", "SOC315").
class("City and Regional Planning", "SOC323").
class("City and Regional Planning", "SOC355").
class("City and Regional Planning", "SOC395").
class("City and Regional Planning", "STAT313").
class("City and Regional Planning", "STAT321").
class("City and Regional Planning", "MATH118").
class("City and Regional Planning", "BIO263").
class("City and Regional Planning", "LA220").
class("City and Regional Planning", "POLS316").
class("City and Regional Planning", "POLS338").
class("City and Regional Planning", "POLS340").
class("City and Regional Planning", "POLS341").
class("City and Regional Planning", "POLS343").
class("City and Regional Planning", "POLS349").
class("City and Regional Planning", "POLS351").
class("City and Regional Planning", "POLS375").
class("City and Regional Planning", "POLS471").
class("City and Regional Planning", "STAT217").
class("City and Regional Planning", "STAT218").

prerequisite("CRP201", []).
prerequisite("CRP202", []).
prerequisite("CRP203", ["CRP201", "CRP202"]).
prerequisite("CRP204", []).
prerequisite("CRP211", []).
prerequisite("CRP212", []).
prerequisite("CRP213", ["CRP212"]).
prerequisite("CRP214", ["CRP212"]).
prerequisite("CRP215", []).
prerequisite("CRP216", []).
prerequisite("CRP314", ["CRP212"]).
prerequisite("CRP315", ["CRP212"]).
prerequisite("CRP336", ["CRP212"]).
prerequisite("CRP341", ["CRP203"]).
prerequisite("CRP342", ["CRP336"]).
prerequisite("CRP409", ["CRP212"]).
prerequisite("CRP410", ["CRP341"]).
prerequisite("CRP411", ["CRP410"]).
prerequisite("CRP412", ["CRP411"]).
prerequisite("CRP420", ["CRP212"]).
prerequisite("CRP430", ["CRP341"]).
prerequisite("CRP457", ["CRP212"]).
prerequisite("CRP461", ["CRP341"]).
prerequisite("CRP462", ["CRP461"]).
prerequisite("CRP463", ["CRP341"]).
prerequisite("AG350", []).
prerequisite("EDES350", []).
prerequisite("ENGR350", []).
prerequisite("ISLA350", []).
prerequisite("SCM350", []).
prerequisite("UNIV350", []).
prerequisite("ANT360", []).
prerequisite("ARCH445", []).
prerequisite("ARCH461", []).
prerequisite("BUS382", ["BUS207"]).
prerequisite("BUS384", ["BUS207"]).
prerequisite("BUS477", ["BUS342"]).
prerequisite("CM475", ["CM113"]).
prerequisite("CRP303", ["CRP213"]).
prerequisite("CRP325", ["CRP213"]).
prerequisite("CRP334", ["CRP213"]).
prerequisite("CRP400", ["CRP341"]).
prerequisite("CRP402", ["CRP341"]).
prerequisite("CRP404", ["CRP341"]).
prerequisite("NR404", ["NR302"]).
prerequisite("CRP408", ["CRP342"]).
prerequisite("NR408", ["NR302"]).
prerequisite("CRP426", ["CRP212"]).
prerequisite("CRP428", ["CRP341"]).
prerequisite("CRP435", ["CRP341"]).
prerequisite("CRP440", ["CRP341"]).
prerequisite("CRP442", ["CRP341"]).
prerequisite("CRP445", ["CRP341"]).
prerequisite("CRP446", ["CRP341"]).
prerequisite("CRP448", ["CRP341"]).
prerequisite("CRP452", ["CRP341"]).
prerequisite("CRP455", ["CRP341"]).
prerequisite("CRP456", ["CRP341"]).
prerequisite("CRP458", ["CRP341"]).
prerequisite("CRP470", ["CRP341"]).
prerequisite("CRP471", ["CRP341"]).
prerequisite("CRP500", ["CRP341"]).
prerequisite("CRP513", ["CRP341"]).
prerequisite("CRP516", ["CRP341"]).
prerequisite("CRP520", ["CRP341"]).
prerequisite("CRP525", ["CRP341"]).
prerequisite("CRP545", ["CRP341"]).
prerequisite("ECON303", ["ECON222"]).
prerequisite("EDES123", []).
prerequisite("EDES406", ["EDES103"]).
prerequisite("EDES408", ["EDES406"]).
prerequisite("EDES410", ["EDES406"]).
prerequisite("ENGL310", ["ENGL214"]).
prerequisite("ENGL317", ["ENGL214"]).
prerequisite("ENVE323", ["ENVE225"]).
prerequisite("ENVE324", ["ENVE225"]).
prerequisite("ERSC325", ["ERSC110"]).
prerequisite("GEOG325", ["ERSC110"]).
prerequisite("ERSC333", ["ERSC110"]).
prerequisite("GEOG333", ["ERSC110"]).
prerequisite("ERSC414", ["ERSC110"]).
prerequisite("GEOG414", ["ERSC110"]).
prerequisite("GEOG218", ["GEOG214"]).
prerequisite("GEOG308", ["GEOG214"]).
prerequisite("JOUR312", ["JOUR201"]).
prerequisite("LA218", ["LA101"]).
prerequisite("NR218", ["NR101"]).
prerequisite("LA317", ["LA218"]).
prerequisite("NR317", ["NR218"]).
prerequisite("NR306", ["BIO111"]).
prerequisite("NR323", ["NR306"]).
prerequisite("NR326", ["NR306"]).
prerequisite("NR416", ["NR306"]).
prerequisite("NR425", ["NR306"]).
prerequisite("NR435", ["NR306"]).
prerequisite("NR465", ["NR306"]).
prerequisite("NR475", ["NR306"]).
prerequisite("PHIL333", ["PHIL230"]).
prerequisite("PHIL334", ["PHIL230"]).
prerequisite("PHIL335", ["PHIL230"]).
prerequisite("PHIL336", ["PHIL230"]).
prerequisite("PHIL337", ["PHIL230"]).
prerequisite("PHIL340", ["PHIL230"]).
prerequisite("PHIL350", ["PHIL230"]).
prerequisite("POLS310", ["POLS110"]).
prerequisite("POLS316", ["POLS110"]).
prerequisite("POLS325", ["POLS110"]).
prerequisite("POLS332", ["POLS110"]).
prerequisite("POLS338", ["POLS110"]).
prerequisite("POLS375", ["POLS110"]).
prerequisite("POLS419", ["POLS110"]).
prerequisite("POLS451", ["POLS110"]).
prerequisite("POLS459", ["POLS110"]).
prerequisite("POLS471", ["POLS110"]).
prerequisite("POLS515", ["POLS110"]).
prerequisite("PSC320", ["PSC110"]).
prerequisite("PSY302", ["PSY201"]).
prerequisite("PSY304", ["PSY201"]).
prerequisite("PSY311", ["PSY201"]).
prerequisite("PSY350", ["PSY201"]).
prerequisite("PSY352", ["PSY201"]).
prerequisite("RPTA450", ["RPTA201"]).
prerequisite("SOC315", ["SOC110"]).
prerequisite("SOC323", ["SOC110"]).
prerequisite("SOC355", ["SOC110"]).
prerequisite("SOC395", ["SOC110"]).
prerequisite("STAT313", ["STAT217"]).
prerequisite("STAT321", ["STAT217"]).
prerequisite("MATH118", []).
prerequisite("BIO263", ["BIO150"]).
prerequisite("LA220", ["LA101"]).
prerequisite("POLS316", ["POLS110"]).
prerequisite("POLS338", ["POLS110"]).
prerequisite("POLS340", ["POLS110"]).
prerequisite("POLS341", ["POLS110"]).
prerequisite("POLS343", ["POLS110"]).
prerequisite("POLS349", ["POLS110"]).
prerequisite("POLS351", ["POLS110"]).
prerequisite("POLS375", ["POLS110"]).
prerequisite("POLS471", ["POLS110"]).
prerequisite("STAT217", []).
prerequisite("STAT218", ["STAT217"]).

major("Civil Engineering").

class("Civil Engineering", "CE111").
class("Civil Engineering", "CE112").
class("Civil Engineering", "CE113").
class("Civil Engineering", "CE204").
class("Civil Engineering", "CE207").
class("Civil Engineering", "CE208").
class("Civil Engineering", "CE222").
class("Civil Engineering", "CE251").
class("Civil Engineering", "CE259").
class("Civil Engineering", "CE321").
class("Civil Engineering", "CE322").
class("Civil Engineering", "CE336").
class("Civil Engineering", "CE337").
class("Civil Engineering", "CE352").
class("Civil Engineering", "CE355").
class("Civil Engineering", "CECM371").
class("Civil Engineering", "CE381").
class("Civil Engineering", "CE382").
class("Civil Engineering", "CE465").
class("Civil Engineering", "CE466").
class("Civil Engineering", "CE467").
class("Civil Engineering", "ENVE325").
class("Civil Engineering", "ENVE331").
class("Civil Engineering", "BIO213").
class("Civil Engineering", "BMED213").
class("Civil Engineering", "BRAE239").
class("Civil Engineering", "CHEM124").
class("Civil Engineering", "CHEM125").
class("Civil Engineering", "GEOL201").
class("Civil Engineering", "MATE210").
class("Civil Engineering", "MATE215").
class("Civil Engineering", "MATH141").
class("Civil Engineering", "MATH142").
class("Civil Engineering", "MATH143").
class("Civil Engineering", "MATH241").
class("Civil Engineering", "MATH244").
class("Civil Engineering", "ME211").
class("Civil Engineering", "ME212").
class("Civil Engineering", "ME341").
class("Civil Engineering", "PHYS141").
class("Civil Engineering", "PHYS142").
class("Civil Engineering", "PHYS143").
class("Civil Engineering", "STAT312").

prerequisite("CE111", []).
prerequisite("CE112", []).
prerequisite("CE113", []).
prerequisite("CE204", ["ME211"]).
prerequisite("CE207", ["CE204"]).
prerequisite("CE208", ["CE204"]).
prerequisite("CE222", []).
prerequisite("CE251", ["CSC231"]).
prerequisite("CE259", []).
prerequisite("CE321", ["CE222"]).
prerequisite("CE322", ["CE321"]).
prerequisite("CE336", ["CE204", "MATH244"]).
prerequisite("CE337", ["CE336"]).
prerequisite("CE352", ["CE207"]).
prerequisite("CE355", ["CE352"]).
prerequisite("CECM371", ["CE259"]).
prerequisite("CE381", ["CE208"]).
prerequisite("CE382", ["CE381"]).
prerequisite("CE465", ["CE466"]).
prerequisite("CE466", ["CE467"]).
prerequisite("CE467", ["CE466"]).
prerequisite("ENVE325", ["CE336"]).
prerequisite("ENVE331", ["CHEM124"]).
prerequisite("BIO213", ["CHEM124"]).
prerequisite("BMED213", ["BIO213"]).
prerequisite("BRAE239", []).
prerequisite("CHEM124", ["MATH141"]).
prerequisite("CHEM125", ["CHEM124"]).
prerequisite("GEOL201", []).
prerequisite("MATE210", ["CHEM125"]).
prerequisite("MATE215", ["MATE210"]).
prerequisite("MATH141", []).
prerequisite("MATH142", ["MATH141"]).
prerequisite("MATH143", ["MATH142"]).
prerequisite("MATH241", ["MATH143"]).
prerequisite("MATH244", ["MATH241"]).
prerequisite("ME211", ["MATH141"]).
prerequisite("ME212", ["ME211"]).
prerequisite("ME341", ["ME212"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS142", ["PHYS141"]).
prerequisite("PHYS143", ["PHYS142"]).
prerequisite("STAT312", ["MATH142"]).

major("Communication Studies").

class("Communication Studies", "COMS100").
class("Communication Studies", "COMS205").
class("Communication Studies", "COMS206").
class("Communication Studies", "COMS208").
class("Communication Studies", "COMS211").
class("Communication Studies", "COMS213").
class("Communication Studies", "COMS215").
class("Communication Studies", "COMS217").
class("Communication Studies", "COMS250").
class("Communication Studies", "COMS312").
class("Communication Studies", "COMS313").
class("Communication Studies", "COMS332").
class("Communication Studies", "COMS385").
class("Communication Studies", "COMS316").
class("Communication Studies", "COMS460").
class("Communication Studies", "COMS461").
class("Communication Studies", "COMS308").
class("Communication Studies", "COMS319").
class("Communication Studies", "COMS320").
class("Communication Studies", "COMS331").
class("Communication Studies", "COMS350").
class("Communication Studies", "COMS351").
class("Communication Studies", "COMS387").
class("Communication Studies", "COMS418").
class("Communication Studies", "COMS420").
class("Communication Studies", "COMS421").
class("Communication Studies", "COMS428").
class("Communication Studies", "COMS435").
class("Communication Studies", "COMS317").
class("Communication Studies", "COMS384").
class("Communication Studies", "COMS386").
class("Communication Studies", "COMS395").
class("Communication Studies", "COMS404").
class("Communication Studies", "COMS422").
class("Communication Studies", "COMS458").
class("Communication Studies", "ISLA303").
class("Communication Studies", "COMS201").
class("Communication Studies", "COMS226").
class("Communication Studies", "COMS301").
class("Communication Studies", "COMS322").
class("Communication Studies", "COMS330").
class("Communication Studies", "COMS390").
class("Communication Studies", "COMS413").

prerequisite("COMS100", []).
prerequisite("COMS205", []).
prerequisite("COMS206", []).
prerequisite("COMS208", []).
prerequisite("COMS211", []).
prerequisite("COMS213", []).
prerequisite("COMS215", []).
prerequisite("COMS217", []).
prerequisite("COMS250", []).
prerequisite("COMS312", ["COMS205", "COMS206"]).
prerequisite("COMS313", ["COMS205", "COMS206"]).
prerequisite("COMS332", ["COMS205", "COMS206"]).
prerequisite("COMS385", ["COMS205", "COMS206"]).
prerequisite("COMS316", ["COMS205", "COMS206"]).
prerequisite("COMS460", ["COMS205", "COMS206"]).
prerequisite("COMS461", ["COMS460"]).
prerequisite("COMS308", []).
prerequisite("COMS319", ["COMS205", "COMS206"]).
prerequisite("COMS320", ["COMS205", "COMS206"]).
prerequisite("COMS331", ["COMS205", "COMS206"]).
prerequisite("COMS350", ["COMS250"]).
prerequisite("COMS351", ["COMS250"]).
prerequisite("COMS387", ["COMS205", "COMS206"]).
prerequisite("COMS418", ["COMS205", "COMS206"]).
prerequisite("COMS420", ["COMS205", "COMS206"]).
prerequisite("COMS421", ["COMS205", "COMS206"]).
prerequisite("COMS428", ["COMS205", "COMS206"]).
prerequisite("COMS435", ["COMS205", "COMS206"]).
prerequisite("COMS317", ["COMS205", "COMS206"]).
prerequisite("COMS384", ["COMS205", "COMS206"]).
prerequisite("COMS386", ["COMS205", "COMS206"]).
prerequisite("COMS395", ["COMS205", "COMS206"]).
prerequisite("COMS404", ["COMS205", "COMS206"]).
prerequisite("COMS422", ["COMS205", "COMS206"]).
prerequisite("COMS458", ["COMS205", "COMS206"]).
prerequisite("ISLA303", []).
prerequisite("COMS201", ["COMS100"]).
prerequisite("COMS226", ["COMS100"]).
prerequisite("COMS301", ["COMS100"]).
prerequisite("COMS322", ["COMS100"]).
prerequisite("COMS330", ["COMS100"]).
prerequisite("COMS390", ["COMS100"]).
prerequisite("COMS413", ["COMS100"]).

major("Ethnic Studies").

class("Ethnic Studies", "ES112").
class("Ethnic Studies", "ES114").
class("Ethnic Studies", "ES252").
class("Ethnic Studies", "ES253").
class("Ethnic Studies", "ES254").
class("Ethnic Studies", "ES255").
class("Ethnic Studies", "ES256").
class("Ethnic Studies", "ES320").
class("Ethnic Studies", "ES321").
class("Ethnic Studies", "ES322").
class("Ethnic Studies", "ES323").
class("Ethnic Studies", "ES340").
class("Ethnic Studies", "ES345").
class("Ethnic Studies", "ES350").
class("Ethnic Studies", "ES380").
class("Ethnic Studies", "ES390").
class("Ethnic Studies", "ES450").
class("Ethnic Studies", "ES461").

prerequisite("ES112", []).
prerequisite("ES114", []).
prerequisite("ES252", []).
prerequisite("ES253", []).
prerequisite("ES254", []).
prerequisite("ES255", []).
prerequisite("ES256", []).
prerequisite("ES320", []).
prerequisite("ES321", []).
prerequisite("ES322", []).
prerequisite("ES323", []).
prerequisite("ES340", []).
prerequisite("ES345", []).
prerequisite("ES350", []).
prerequisite("ES380", []).
prerequisite("ES390", []).
prerequisite("ES450", []).
prerequisite("ES461", []).

major("Computer Engineering").

class("Computer Engineering", "CPE100").
class("Computer Engineering", "CPE101").
class("Computer Engineering", "CSC101").
class("Computer Engineering", "CPE123").
class("Computer Engineering", "CSC123").
class("Computer Engineering", "CPE133").
class("Computer Engineering", "EE133").
class("Computer Engineering", "CPE202").
class("Computer Engineering", "CSC202").
class("Computer Engineering", "CPE203").
class("Computer Engineering", "CSC203").
class("Computer Engineering", "CPE233").
class("Computer Engineering", "EE233").
class("Computer Engineering", "CPE315").
class("Computer Engineering", "CPE333").
class("Computer Engineering", "CPE329").
class("Computer Engineering", "EE329").
class("Computer Engineering", "CPE316").
class("Computer Engineering", "CPE357").
class("Computer Engineering", "CPE350").
class("Computer Engineering", "CPE450").
class("Computer Engineering", "CPE453").
class("Computer Engineering", "CSC453").
class("Computer Engineering", "CPE461").
class("Computer Engineering", "CPE462").
class("Computer Engineering", "CSC497").
class("Computer Engineering", "CSC498").
class("Computer Engineering", "CPE464").
class("Computer Engineering", "CSC248").
class("Computer Engineering", "CPE327").
class("Computer Engineering", "CPE367").
class("Computer Engineering", "EE228").
class("Computer Engineering", "CPE321").
class("Computer Engineering", "CPE422").
class("Computer Engineering", "CPE426").
class("Computer Engineering", "EE115").
class("Computer Engineering", "EE145").
class("Computer Engineering", "EE215").
class("Computer Engineering", "EE245").
class("Computer Engineering", "EE315").
class("Computer Engineering", "CHEM124").
class("Computer Engineering", "PHIL230").
class("Computer Engineering", "PHIL231").
class("Computer Engineering", "PHIL323").
class("Computer Engineering", "PHIL327").
class("Computer Engineering", "PHIL328").
class("Computer Engineering", "PHIL339").
class("Computer Engineering", "PHIL340").
class("Computer Engineering", "ES350").
class("Computer Engineering", "ES351").
class("Computer Engineering", "MATH141").
class("Computer Engineering", "MATH142").
class("Computer Engineering", "MATH143").
class("Computer Engineering", "MATH241").
class("Computer Engineering", "MATH244").
class("Computer Engineering", "PHYS141").
class("Computer Engineering", "PHYS142").
class("Computer Engineering", "PHYS143").
class("Computer Engineering", "STAT350").

prerequisite("CPE100", []).
prerequisite("CPE101", []).
prerequisite("CSC101", []).
prerequisite("CPE123", []).
prerequisite("CSC123", []).
prerequisite("CPE133", []).
prerequisite("EE133", []).
prerequisite("CPE202", ["CPE101", "CPE123"]).
prerequisite("CSC202", ["CSC101", "CSC123"]).
prerequisite("CPE203", ["CPE202"]).
prerequisite("CSC203", ["CSC202"]).
prerequisite("CPE233", ["CPE133", "CPE202"]).
prerequisite("EE233", ["EE133"]).
prerequisite("CPE315", ["CPE233"]).
prerequisite("CPE333", ["CPE233"]).
prerequisite("CPE329", ["CPE233"]).
prerequisite("EE329", ["EE233"]).
prerequisite("CPE316", ["CPE233"]).
prerequisite("CPE357", ["CPE202", "CPE203"]).
prerequisite("CPE350", []).
prerequisite("CPE450", ["CPE350"]).
prerequisite("CPE453", ["CPE357"]).
prerequisite("CSC453", ["CSC357"]).
prerequisite("CPE461", ["CPE450"]).
prerequisite("CPE462", ["CPE461"]).
prerequisite("CSC497", ["CPE450"]).
prerequisite("CSC498", ["CSC497"]).
prerequisite("CPE464", ["CPE357"]).
prerequisite("CSC248", ["MATH142"]).
prerequisite("CPE327", ["MATH244"]).
prerequisite("CPE367", ["CPE327"]).
prerequisite("EE228", ["MATH244"]).
prerequisite("CPE321", ["CPE357"]).
prerequisite("CPE422", ["CPE357"]).
prerequisite("CPE426", ["CPE357"]).
prerequisite("EE115", ["PHYS141", "MATH141"]).
prerequisite("EE145", ["EE115"]).
prerequisite("EE215", ["EE115"]).
prerequisite("EE245", ["EE215"]).
prerequisite("EE315", ["EE215"]).
prerequisite("PHIL327", []).
prerequisite("PHIL328", []).
prerequisite("PHIL339", []).
prerequisite("PHIL340", []).
prerequisite("ES350", []).
prerequisite("ES351", []).
prerequisite("MATH141", []).
prerequisite("MATH142", ["MATH141"]).
prerequisite("MATH143", ["MATH142"]).
prerequisite("MATH241", ["MATH143"]).
prerequisite("MATH244", ["MATH241"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS142", ["PHYS141"]).
prerequisite("PHYS143", ["PHYS142"]).
prerequisite("STAT350", ["MATH143"]).

major("Construction Management").

class("Construction Management", "CM102").
class("Construction Management", "CM113").
class("Construction Management", "CM114").
class("Construction Management", "CM115").
class("Construction Management", "CM214").
class("Construction Management", "CM232").
class("Construction Management", "CM280").
class("Construction Management", "CM313").
class("Construction Management", "CM314").
class("Construction Management", "CM317").
class("Construction Management", "CM318").
class("Construction Management", "CM334").
class("Construction Management", "CM335").
class("Construction Management", "CM411").
class("Construction Management", "CM413").
class("Construction Management", "CM443").
class("Construction Management", "CM450").
class("Construction Management", "CM460").
class("Construction Management", "CM461").
class("Construction Management", "CM462").
class("Construction Management", "CE413").
class("Construction Management", "CE429").
class("Construction Management", "CE474").
class("Construction Management", "CM420").
class("Construction Management", "CM421").
class("Construction Management", "CM422").
class("Construction Management", "CM423").
class("Construction Management", "CM424").
class("Construction Management", "CM425").
class("Construction Management", "CM426").
class("Construction Management", "CM475").
class("Construction Management", "CM485").
class("Construction Management", "ARCE211").
class("Construction Management", "ARCE212").
class("Construction Management", "ME211").
class("Construction Management", "CE204").
class("Construction Management", "ARCE226").
class("Construction Management", "ARCE315").
class("Construction Management", "ARCE421").
class("Construction Management", "BRAE239").
class("Construction Management", "CM239").
class("Construction Management", "BUS207").
class("Construction Management", "BUS212").
class("Construction Management", "BUS214").
class("Construction Management", "BUS215").
class("Construction Management", "ECON201").
class("Construction Management", "EDES123").
class("Construction Management", "ENGL310").
class("Construction Management", "GEOL201").
class("Construction Management", "MATH141").
class("Construction Management", "MATH182").
class("Construction Management", "PHYS141").
class("Construction Management", "PHYS142").
class("Construction Management", "CHEM124").
class("Construction Management", "CHEM127").
class("Construction Management", "STAT251").
class("Construction Management", "STAT312").

prerequisite("CM102", []).
prerequisite("CM113", []).
prerequisite("CM114", ["CM113"]).
prerequisite("CM115", ["CM102", "CM113", "CM114"]).
prerequisite("CM214", ["CM115"]).
prerequisite("CM232", ["CM115"]).
prerequisite("CM280", ["CM113"]).
prerequisite("CM313", ["CM214"]).
prerequisite("CM314", ["CM313"]).
prerequisite("CM317", ["CM313"]).
prerequisite("CM318", ["CM313"]).
prerequisite("CM334", ["CM313"]).
prerequisite("CM335", ["CM313"]).
prerequisite("CM411", ["CM313"]).
prerequisite("CM413", ["CM313"]).
prerequisite("CM443", ["CM413"]).
prerequisite("CM450", ["CM413"]).
prerequisite("CM460", ["CM413"]).
prerequisite("CM461", ["CM460"]).
prerequisite("CM462", ["CM461"]).
prerequisite("CE413", ["CE113"]).
prerequisite("CE429", ["CE321"]).
prerequisite("CE474", ["CE336"]).
prerequisite("CM420", ["CM313"]).
prerequisite("CM421", ["CM313"]).
prerequisite("CM422", ["CM313"]).
prerequisite("CM423", ["CM313"]).
prerequisite("CM424", ["CM313"]).
prerequisite("CM425", ["CM313"]).
prerequisite("CM426", ["CM313"]).
prerequisite("CM475", ["CM313"]).
prerequisite("CM485", ["CM313"]).
prerequisite("ARCE211", []).
prerequisite("ARCE212", ["ARCE211"]).
prerequisite("ME211", ["PHYS141", "MATH141"]).
prerequisite("CE204", ["ME211"]).
prerequisite("ARCE226", ["ME211"]).
prerequisite("ARCE315", ["ARCE212"]).
prerequisite("ARCE421", ["ARCE315"]).
prerequisite("BRAE239", []).
prerequisite("CM239", ["MATH141"]).
prerequisite("BUS207", ["BUS214"]).
prerequisite("BUS212", ["BUS214"]).
prerequisite("BUS214", ["BUS215"]).
prerequisite("BUS215", ["BUS214"]).
prerequisite("ECON201", []).
prerequisite("EDES123", []).
prerequisite("ENGL310", ["ENGL133"]).
prerequisite("GEOL201", ["PHYS141"]).
prerequisite("MATH141", ["MATH118"]).
prerequisite("MATH182", ["MATH141"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS142", ["PHYS141"]).
prerequisite("CHEM124", ["MATH118"]).
prerequisite("CHEM127", ["MATH118"]).
prerequisite("STAT251", ["MATH118"]).
prerequisite("STAT312", ["MATH118"]).

major("Dairy Science").

class("Dairy Science", "ASCI101").
class("Dairy Science", "ASCI220").
class("Dairy Science", "ASCI340").
class("Dairy Science", "ASCI363").
class("Dairy Science", "DSCI102").
class("Dairy Science", "ASCI339").
class("Dairy Science", "DSCI202").
class("Dairy Science", "DSCI229").
class("Dairy Science", "DSCI230").
class("Dairy Science", "DSCI233").
class("Dairy Science", "DSCI241").
class("Dairy Science", "DSCI301").
class("Dairy Science", "DSCI321").
class("Dairy Science", "DSCI330").
class("Dairy Science", "DSCI333").
class("Dairy Science", "DSCI422").
class("Dairy Science", "DSCI432").
class("Dairy Science", "ASCI477").
class("Dairy Science", "ASCI479").
class("Dairy Science", "DSCI401").
class("Dairy Science", "DSCI402").
class("Dairy Science", "DSCI410").
class("Dairy Science", "DSCI412").
class("Dairy Science", "DSCI444").
class("Dairy Science", "BIO111").
class("Dairy Science", "BIO161").
class("Dairy Science", "CHEM127").
class("Dairy Science", "MATH118").
class("Dairy Science", "MCRO221").
class("Dairy Science", "STAT218").
class("Dairy Science", "AGB212").
class("Dairy Science", "AGB214").
class("Dairy Science", "AGB301").
class("Dairy Science", "AGB310").
class("Dairy Science", "AGB369").
class("Dairy Science", "AGC102").
class("Dairy Science", "AGC205").
class("Dairy Science", "AGC404").
class("Dairy Science", "ASCI112").
class("Dairy Science", "ASCI221").
class("Dairy Science", "ASCI226").
class("Dairy Science", "ASCI229").
class("Dairy Science", "ASCI290").
class("Dairy Science", "ASCI302").
class("Dairy Science", "ASCI304").
class("Dairy Science", "ASCI310").
class("Dairy Science", "ASCI311").
class("Dairy Science", "ASCI312").
class("Dairy Science", "ASCI319").
class("Dairy Science", "ASCI351").
class("Dairy Science", "ASCI366").
class("Dairy Science", "ASCI405").
class("Dairy Science", "ASCI406").
class("Dairy Science", "ASCI407").
class("Dairy Science", "ASCI410").
class("Dairy Science", "ASCI419").
class("Dairy Science", "ASCI438").
class("Dairy Science", "ASCI440").
class("Dairy Science", "ASCI490").
class("Dairy Science", "BIO150").
class("Dairy Science", "BIO162").
class("Dairy Science", "BIO303").
class("Dairy Science", "BRAE121").
class("Dairy Science", "BRAE141").
class("Dairy Science", "BUS212").
class("Dairy Science", "CHEM128").
class("Dairy Science", "CHEM129").
class("Dairy Science", "CHEM216").
class("Dairy Science", "CHEM217").
class("Dairy Science", "CHEM218").
class("Dairy Science", "CHEM220").
class("Dairy Science", "CHEM223").
class("Dairy Science", "CHEM312").
class("Dairy Science", "CHEM314").
class("Dairy Science", "CHEM369").
class("Dairy Science", "COMS301").
class("Dairy Science", "FSN125").
class("Dairy Science", "FSN204").
class("Dairy Science", "FSN230").
class("Dairy Science", "FSN275").
class("Dairy Science", "FSN311").
class("Dairy Science", "FSN330").
class("Dairy Science", "FSN335").
class("Dairy Science", "FSN370").
class("Dairy Science", "JOUR203").
class("Dairy Science", "MCRO342").
class("Dairy Science", "MCRO421").
class("Dairy Science", "NR141").
class("Dairy Science", "PHYS121").
class("Dairy Science", "PHYS122").
class("Dairy Science", "PHYS125").
class("Dairy Science", "PLSC150").
class("Dairy Science", "PLSC230").
class("Dairy Science", "STAT313").

prerequisite("ASCI101", []).
prerequisite("ASCI220", ["ASCI101"]).
prerequisite("ASCI340", ["ASCI220"]).
prerequisite("ASCI363", ["ASCI220"]).
prerequisite("DSCI102", []).
prerequisite("ASCI339", ["ASCI220"]).
prerequisite("DSCI202", ["DSCI102"]).
prerequisite("DSCI229", ["CHEM127"]).
prerequisite("DSCI230", ["ASCI101"]).
prerequisite("DSCI233", ["CHEM127"]).
prerequisite("DSCI241", ["ASCI220"]).
prerequisite("DSCI301", ["ASCI220"]).
prerequisite("DSCI321", ["BIO111"]).
prerequisite("DSCI330", ["BIO111"]).
prerequisite("DSCI333", ["DSCI301"]).
prerequisite("DSCI422", ["BIO111"]).
prerequisite("DSCI432", ["DSCI333"]).
prerequisite("ASCI477", ["ASCI363"]).
prerequisite("ASCI479", ["ASCI363"]).
prerequisite("DSCI401", ["DSCI229"]).
prerequisite("DSCI402", ["DSCI229"]).
prerequisite("DSCI410", ["DSCI301"]).
prerequisite("DSCI412", ["DSCI301"]).
prerequisite("DSCI444", ["DSCI229"]).
prerequisite("BIO111", []).
prerequisite("BIO161", []).
prerequisite("CHEM127", ["MATH118"]).
prerequisite("MATH118", ["High school algebra"]).
prerequisite("MCRO221", ["CHEM127"]).
prerequisite("STAT218", ["MATH118"]).
prerequisite("AGB212", []).
prerequisite("AGB214", []).
prerequisite("AGB301", ["AGB212"]).
prerequisite("AGB310", ["AGB212"]).
prerequisite("AGB369", ["AGB212"]).
prerequisite("AGC102", []).
prerequisite("AGC205", ["AGC102"]).
prerequisite("AGC404", ["AGC205"]).
prerequisite("ASCI112", []).
prerequisite("ASCI221", ["ASCI101"]).
prerequisite("ASCI226", ["ASCI101"]).
prerequisite("ASCI229", ["ASCI101"]).
prerequisite("ASCI290", ["ASCI101"]).
prerequisite("ASCI302", ["ASCI220"]).
prerequisite("ASCI304", ["ASCI220"]).
prerequisite("ASCI310", ["ASCI220"]).
prerequisite("ASCI311", ["ASCI220"]).
prerequisite("ASCI312", ["ASCI220"]).
prerequisite("ASCI319", ["ASCI220"]).
prerequisite("ASCI351", ["ASCI220"]).
prerequisite("ASCI366", ["ASCI220"]).
prerequisite("ASCI405", ["ASCI220"]).
prerequisite("ASCI406", ["ASCI220"]).
prerequisite("ASCI407", ["ASCI220"]).
prerequisite("ASCI410", ["ASCI220"]).
prerequisite("ASCI419", ["ASCI220"]).
prerequisite("ASCI438", ["ASCI220"]).
prerequisite("ASCI440", ["ASCI220"]).
prerequisite("ASCI490", ["ASCI220"]).
prerequisite("BIO150", ["BIO111"]).
prerequisite("BIO162", ["BIO111"]).
prerequisite("BIO303", ["BIO111"]).
prerequisite("BRAE121", ["MATH118"]).
prerequisite("BRAE141", ["MATH118"]).
prerequisite("BUS212", ["MATH118"]).
prerequisite("CHEM128", ["CHEM127"]).
prerequisite("CHEM129", ["CHEM128"]).
prerequisite("CHEM216", ["CHEM129"]).
prerequisite("CHEM217", ["CHEM216"]).
prerequisite("CHEM218", ["CHEM217"]).
prerequisite("CHEM220", ["CHEM217"]).
prerequisite("CHEM223", ["CHEM218"]).
prerequisite("CHEM312", ["CHEM218"]).
prerequisite("CHEM314", ["CHEM312"]).
prerequisite("CHEM369", ["CHEM312"]).
prerequisite("COMS301", ["COMS101"]).
prerequisite("FSN125", ["CHEM127"]).
prerequisite("FSN204", ["CHEM127"]).
prerequisite("FSN230", ["CHEM127"]).
prerequisite("FSN275", ["CHEM127"]).
prerequisite("FSN311", ["CHEM127"]).
prerequisite("FSN330", ["CHEM127"]).
prerequisite("FSN335", ["CHEM127"]).
prerequisite("FSN370", ["CHEM127"]).
prerequisite("JOUR203", ["ENGL101"]).
prerequisite("MCRO342", ["MCRO221"]).
prerequisite("MCRO421", ["MCRO221"]).
prerequisite("NR141", ["BIO111"]).
prerequisite("PHYS121", ["MATH118"]).
prerequisite("PHYS122", ["PHYS121"]).
prerequisite("PHYS125", ["PHYS121"]).
prerequisite("PLSC150", ["BIO111"]).
prerequisite("PLSC230", ["BIO111"]).
prerequisite("STAT313", ["STAT218"]).

major("Economics").

class("Economics", "ECON221").
class("Economics", "ECON222").
class("Economics", "ECON311").
class("Economics", "ECON312").
class("Economics", "ECON313").
class("Economics", "ECON339").
class("Economics", "ECON460").
class("Economics", "ECON461").
class("Economics", "ECON462").
class("Economics", "ECON464").
class("Economics", "ECON202").
class("Economics", "ECON400-LevelElectives").
class("Economics", "BUS207").
class("Economics", "BUS214").
class("Economics", "BUS215").
class("Economics", "MATH141").
class("Economics", "STAT301").
class("Economics", "STAT302").
class("Economics", "BUS391").
class("Economics", "BUS392").
class("Economics", "CSC101").
class("Economics", "ECON395").

prerequisite("ECON221", []).
prerequisite("ECON222", []).
prerequisite("ECON311", ["ECON221"]).
prerequisite("ECON312", ["ECON311"]).
prerequisite("ECON313", ["ECON222"]).
prerequisite("ECON339", ["STAT301"]).
prerequisite("ECON460", ["ECON339"]).
prerequisite("ECON461", ["ECON460"]).
prerequisite("ECON462", ["ECON461"]).
prerequisite("ECON464", ["ECON460"]).
prerequisite("ECON202", ["ECON221"]).
prerequisite("ECON400-LevelElectives", ["ECON312", "ECON313"]).
prerequisite("BUS207", []).
prerequisite("BUS214", []).
prerequisite("BUS215", ["BUS214"]).
prerequisite("STAT301", ["MATH141"]).
prerequisite("STAT302", ["STAT301"]).
prerequisite("BUS391", ["CSC101"]).
prerequisite("BUS392", ["BUS391"]).
prerequisite("CSC101", []).
prerequisite("ECON395", ["CSC101"]).

major("Electrical Engineering").

class("Electrical Engineering", "CPE/EE133").
class("Electrical Engineering", "CPE/EE233").
class("Electrical Engineering", "EE111").
class("Electrical Engineering", "EE151").
class("Electrical Engineering", "EE113").
class("Electrical Engineering", "EE143").
class("Electrical Engineering", "EE112").
class("Electrical Engineering", "IME156").
class("Electrical Engineering", "EE211").
class("Electrical Engineering", "EE241").
class("Electrical Engineering", "EE212").
class("Electrical Engineering", "EE242").
class("Electrical Engineering", "EE228").
class("Electrical Engineering", "EE255").
class("Electrical Engineering", "EE295").
class("Electrical Engineering", "EE302").
class("Electrical Engineering", "EE342").
class("Electrical Engineering", "EE306").
class("Electrical Engineering", "EE346").
class("Electrical Engineering", "EE307").
class("Electrical Engineering", "EE347").
class("Electrical Engineering", "EE308").
class("Electrical Engineering", "EE348").
class("Electrical Engineering", "EE314").
class("Electrical Engineering", "EE328").
class("Electrical Engineering", "EE368").
class("Electrical Engineering", "EE/CPE329").
class("Electrical Engineering", "EE336").
class("Electrical Engineering", "EE335").
class("Electrical Engineering", "EE375").
class("Electrical Engineering", "EE402").
class("Electrical Engineering", "EE409").
class("Electrical Engineering", "EE449").
class("Electrical Engineering", "EE460").
class("Electrical Engineering", "EE461").
class("Electrical Engineering", "EE462").
class("Electrical Engineering", "EE463").
class("Electrical Engineering", "EE464").
class("Electrical Engineering", "BIO213").
class("Electrical Engineering", "BMED213").
class("Electrical Engineering", "CHEM124").
class("Electrical Engineering", "CSC/CPE101").
class("Electrical Engineering", "MATH141").
class("Electrical Engineering", "MATH142").
class("Electrical Engineering", "MATH143").
class("Electrical Engineering", "MATH241").
class("Electrical Engineering", "MATH244").
class("Electrical Engineering", "PHYS141").
class("Electrical Engineering", "PHYS142").
class("Electrical Engineering", "PHYS143").
class("Electrical Engineering", "PHYS211").
class("Electrical Engineering", "STAT350").

prerequisite("CPE/EE133", []).
prerequisite("CPE/EE233", ["CPE/EE133"]).
prerequisite("EE111", []).
prerequisite("EE151", []).
prerequisite("EE113", ["EE111", "EE151"]).
prerequisite("EE143", ["EE111", "EE151"]).
prerequisite("EE112", ["EE111", "EE151"]).
prerequisite("IME156", ["EE111", "EE151"]).
prerequisite("EE211", ["EE113"]).
prerequisite("EE241", ["EE113"]).
prerequisite("EE212", ["EE211", "EE241"]).
prerequisite("EE242", ["EE211", "EE241"]).
prerequisite("EE228", ["EE113", "MATH244"]).
prerequisite("EE255", ["EE113"]).
prerequisite("EE295", ["EE113"]).
prerequisite("EE302", ["EE212", "EE242"]).
prerequisite("EE342", ["EE212", "EE242"]).
prerequisite("EE306", ["EE211"]).
prerequisite("EE346", ["EE211"]).
prerequisite("EE307", ["EE212"]).
prerequisite("EE347", ["EE212"]).
prerequisite("EE308", ["EE212"]).
prerequisite("EE348", ["EE212"]).
prerequisite("EE314", ["EE228"]).
prerequisite("EE328", ["EE228"]).
prerequisite("EE368", ["EE328"]).
prerequisite("EE/CPE329", ["EE233"]).
prerequisite("EE336", ["EE233"]).
prerequisite("EE335", ["EE228"]).
prerequisite("EE375", ["EE335"]).
prerequisite("EE402", ["EE335"]).
prerequisite("EE409", ["EE308", "EE348"]).
prerequisite("EE449", ["EE409"]).
prerequisite("EE460", [""]).
prerequisite("EE461", ["EE460"]).
prerequisite("EE462", ["EE461"]).
prerequisite("EE463", ["EE460"]).
prerequisite("EE464", ["EE463"]).
prerequisite("BIO213", []).
prerequisite("BMED213", ["BIO213"]).
prerequisite("CHEM124", [""]).
prerequisite("CSC/CPE101", []).
prerequisite("MATH142", ["MATH141"]).
prerequisite("MATH143", ["MATH142"]).
prerequisite("MATH241", ["MATH143"]).
prerequisite("MATH244", ["MATH143"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS142", ["PHYS141"]).
prerequisite("PHYS143", ["PHYS142"]).
prerequisite("PHYS211", ["PHYS143"]).
prerequisite("STAT350", ["MATH241"]).

major("English").

class("English", "ENGL202").
class("English", "ENGL203").
class("English", "ENGL204").
class("English", "ENGL205").
class("English", "ENGL220").
class("English", "ENGL221").
class("English", "ENGL/HNRS251").
class("English", "ENGL290").
class("English", "ENGL303").
class("English", "ENGL304").
class("English", "ENGL305").
class("English", "ENGL306").
class("English", "ENGL345").
class("English", "ENGL346").
class("English", "ENGL347").
class("English", "ENGL348").
class("English", "ENGL349").
class("English", "ENGL381").
class("English", "ENGL382").
class("English", "ENGL300-levelElective").
class("English", "ENGL300-levelNon-literatureElective").
class("English", "ENGL310").
class("English", "ENGL311").
class("English", "ENGL312").
class("English", "ENGL317").
class("English", "ENGL319").
class("English", "ENGL361").
class("English", "ENGL368").
class("English", "ENGL370").
class("English", "ENGL371").
class("English", "ENGL372").
class("English", "ENGL373").
class("English", "ENGL387").
class("English", "ENGL388").
class("English", "ENGL390").
class("English", "ENGL391").
class("English", "ENGL395").
class("English", "ENGL400-levelDiversityElective").
class("English", "ENGL421").
class("English", "ENGL439").
class("English", "ENGL449").
class("English", "ENGL459").
class("English", "ENGL467").
class("English", "ENGL495").
class("English", "ENGL461").
class("English", "CHIN201").
class("English", "CHIN202").
class("English", "FR201").
class("English", "FR202").
class("English", "GER201").
class("English", "GER202").
class("English", "ITAL201").
class("English", "JPNS201").
class("English", "SPAN201").
class("English", "SPAN202").
class("English", "Upper-DivisionStanding").

prerequisite("ENGL202", []).
prerequisite("ENGL203", []).
prerequisite("ENGL204", []).
prerequisite("ENGL205", []).
prerequisite("ENGL220", []).
prerequisite("ENGL221", []).
prerequisite("ENGL/HNRS251", []).
prerequisite("ENGL290", []).
prerequisite("ENGL303", ["ENGL203"]).
prerequisite("ENGL304", ["ENGL204"]).
prerequisite("ENGL305", ["ENGL205"]).
prerequisite("ENGL306", ["ENGL205"]).
prerequisite("ENGL345", ["Upper-DivisionStanding"]).
prerequisite("ENGL346", ["Upper-DivisionStanding"]).
prerequisite("ENGL347", ["Upper-DivisionStanding"]).
prerequisite("ENGL348", ["Upper-DivisionStanding"]).
prerequisite("ENGL349", ["Upper-DivisionStanding"]).
prerequisite("ENGL381", ["Upper-DivisionStanding"]).
prerequisite("ENGL382", ["Upper-DivisionStanding"]).
prerequisite("ENGL300-levelElective", ["Upper-DivisionStanding"]).
prerequisite("ENGL300-levelNon-literatureElective", ["Upper-DivisionStanding"]).
prerequisite("ENGL310", ["Upper-DivisionStanding"]).
prerequisite("ENGL311", ["Upper-DivisionStanding"]).
prerequisite("ENGL312", ["Upper-DivisionStanding"]).
prerequisite("ENGL317", ["Upper-DivisionStanding"]).
prerequisite("ENGL319", ["Upper-DivisionStanding"]).
prerequisite("ENGL361", ["Upper-DivisionStanding"]).
prerequisite("ENGL368", ["Upper-DivisionStanding"]).
prerequisite("ENGL370", ["Upper-DivisionStanding"]).
prerequisite("ENGL371", ["Upper-DivisionStanding"]).
prerequisite("ENGL372", ["Upper-DivisionStanding"]).
prerequisite("ENGL373", ["Upper-DivisionStanding"]).
prerequisite("ENGL387", ["Upper-DivisionStanding"]).
prerequisite("ENGL388", ["Upper-DivisionStanding"]).
prerequisite("ENGL390", ["Upper-DivisionStanding"]).
prerequisite("ENGL391", ["Upper-DivisionStanding"]).
prerequisite("ENGL395", ["Upper-DivisionStanding"]).
prerequisite("ENGL400-levelDiversityElective", ["Upper-DivisionStanding"]).
prerequisite("ENGL421", ["Upper-DivisionStanding"]).
prerequisite("ENGL439", ["Upper-DivisionStanding"]).
prerequisite("ENGL449", ["Upper-DivisionStanding"]).
prerequisite("ENGL459", ["Upper-DivisionStanding"]).
prerequisite("ENGL467", ["Upper-DivisionStanding"]).
prerequisite("ENGL495", ["Upper-DivisionStanding"]).
prerequisite("ENGL461", ["SeniorStanding"]).
prerequisite("CHIN201", ["CHIN101", "CHIN102"]).
prerequisite("CHIN202", ["CHIN201"]).
prerequisite("FR201", ["FR101", "FR102", "FR103"]).
prerequisite("FR202", ["FR201"]).
prerequisite("GER201", ["GER101", "GER102", "GER103"]).
prerequisite("GER202", ["GER201"]).
prerequisite("ITAL201", ["ITAL101", "ITAL102"]).
prerequisite("JPNS201", ["JPNS101", "JPNS102"]).
prerequisite("SPAN201", ["SPAN101", "SPAN102", "SPAN103"]).
prerequisite("SPAN202", ["SPAN201"]).

major("Environmental Earth and Soil Sciences").

% List of classes
class("Environmental Earth and Soil Sciences", "NR140").
class("Environmental Earth and Soil Sciences", "UNIV100").
class("Environmental Earth and Soil Sciences", "ERSC144").
class("Environmental Earth and Soil Sciences", "ERSC223").
class("Environmental Earth and Soil Sciences", "ERSC303").
class("Environmental Earth and Soil Sciences", "ERSC/GEOG333").
class("Environmental Earth and Soil Sciences", "BRAE345").
class("Environmental Earth and Soil Sciences", "GEOG325").
class("Environmental Earth and Soil Sciences", "GEOG350").
class("Environmental Earth and Soil Sciences", "MATH142").
class("Environmental Earth and Soil Sciences", "SS120").
class("Environmental Earth and Soil Sciences", "SS221").
class("Environmental Earth and Soil Sciences", "SS321").
class("Environmental Earth and Soil Sciences", "SS422").
class("Environmental Earth and Soil Sciences", "ERSC423").
class("Environmental Earth and Soil Sciences", "SS423").
class("Environmental Earth and Soil Sciences", "SS424").
class("Environmental Earth and Soil Sciences", "BOT121").
class("Environmental Earth and Soil Sciences", "CHEM127").
class("Environmental Earth and Soil Sciences", "CHEM128").
class("Environmental Earth and Soil Sciences", "CHEM129").
class("Environmental Earth and Soil Sciences", "CHEM312").
class("Environmental Earth and Soil Sciences", "GEOL201").
class("Environmental Earth and Soil Sciences", "GEOL241").
class("Environmental Earth and Soil Sciences", "GEOL415").
class("Environmental Earth and Soil Sciences", "GEOL330").
class("Environmental Earth and Soil Sciences", "MATH161").
class("Environmental Earth and Soil Sciences", "MATH141").
class("Environmental Earth and Soil Sciences", "NR/LA218").
class("Environmental Earth and Soil Sciences", "NR310").
class("Environmental Earth and Soil Sciences", "NR363").
class("Environmental Earth and Soil Sciences", "NR418").
class("Environmental Earth and Soil Sciences", "NR355").
class("Environmental Earth and Soil Sciences", "NR416").
class("Environmental Earth and Soil Sciences", "SS431").
class("Environmental Earth and Soil Sciences", "PHYS121").
class("Environmental Earth and Soil Sciences", "PHYS141").
class("Environmental Earth and Soil Sciences", "STAT218").
class("Environmental Earth and Soil Sciences", "STAT217").

% List of prerequisites
prerequisite("NR140", []).
prerequisite("UNIV100", []).
prerequisite("ERSC144", []).
prerequisite("ERSC223", []).
prerequisite("ERSC303", ["ERSC144"]).
prerequisite("ERSC/GEOG333", []).
prerequisite("BRAE345", []).
prerequisite("GEOG325", []).
prerequisite("GEOG350", []).
prerequisite("MATH142", ["MATH141"]).
prerequisite("SS120", []).
prerequisite("SS221", ["SS120"]).
prerequisite("SS321", ["SS120"]).
prerequisite("SS422", ["SS321"]).
prerequisite("ERSC423", ["SS321"]).
prerequisite("SS423", ["SS120"]).
prerequisite("SS424", ["SS423"]).
prerequisite("BOT121", []).
prerequisite("CHEM127", []).
prerequisite("CHEM128", ["CHEM127"]).
prerequisite("CHEM129", ["CHEM128"]).
prerequisite("CHEM312", ["CHEM129"]).
prerequisite("GEOL201", []).
prerequisite("GEOL241", ["GEOL201"]).
prerequisite("GEOL415", ["GEOL241"]).
prerequisite("GEOL330", ["GEOL201"]).
prerequisite("MATH161", ["MATH118"]).
prerequisite("MATH141", ["MATH118"]).
prerequisite("NR/LA218", []).
prerequisite("NR310", ["NR140"]).
prerequisite("NR363", ["NR140"]).
prerequisite("NR418", ["NR/LA218"]).
prerequisite("NR355", ["NR/LA218"]).
prerequisite("NR416", ["NR/LA218"]).
prerequisite("SS431", ["NR/LA218"]).
prerequisite("PHYS121", []).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("STAT218", ["MATH118"]).
prerequisite("STAT217", ["MATH118"]).

major("Environmental Engineering").

class("Environmental Engineering", "CE113").
class("Environmental Engineering", "CE204").
class("Environmental Engineering", "CE207").
class("Environmental Engineering", "CE208").
class("Environmental Engineering", "CE251").
class("Environmental Engineering", "CE336").
class("Environmental Engineering", "CE337").
class("Environmental Engineering", "CE381").
class("Environmental Engineering", "CE434").
class("Environmental Engineering", "CE433").
class("Environmental Engineering", "CE435").
class("Environmental Engineering", "CE440").
class("Environmental Engineering", "CE465").
class("Environmental Engineering", "ENVE111").
class("Environmental Engineering", "ENVE264").
class("Environmental Engineering", "ENVE304").
class("Environmental Engineering", "ENVE309").
class("Environmental Engineering", "ENVE325").
class("Environmental Engineering", "ENVE331").
class("Environmental Engineering", "ENVE421").
class("Environmental Engineering", "ENVE426").
class("Environmental Engineering", "ENVE434").
class("Environmental Engineering", "ENVE438").
class("Environmental Engineering", "ENVE450").
class("Environmental Engineering", "ENVE466").
class("Environmental Engineering", "ENVE467").
class("Environmental Engineering", "ENVE411").
class("Environmental Engineering", "ENVE436").
class("Environmental Engineering", "ENVE439").
class("Environmental Engineering", "ENVE443").
class("Environmental Engineering", "ENVE455").
class("Environmental Engineering", "ENVE480").
class("Environmental Engineering", "CHEM124").
class("Environmental Engineering", "CHEM125").
class("Environmental Engineering", "CHEM126").
class("Environmental Engineering", "CHEM312").
class("Environmental Engineering", "MATH141").
class("Environmental Engineering", "MATH142").
class("Environmental Engineering", "MATH143").
class("Environmental Engineering", "MATH241").
class("Environmental Engineering", "MATH244").
class("Environmental Engineering", "MCRO221").
class("Environmental Engineering", "MCRO224").
class("Environmental Engineering", "ME211").
class("Environmental Engineering", "PHYS141").
class("Environmental Engineering", "PHYS142").
class("Environmental Engineering", "PHYS143").
class("Environmental Engineering", "STAT312").

prerequisite("CE113", []).
prerequisite("CE204", []).
prerequisite("CE207", ["CE204"]).
prerequisite("CE208", ["CE204"]).
prerequisite("CE251", []).
prerequisite("CE336", []).
prerequisite("CE337", []).
prerequisite("CE381", []).
prerequisite("CE434", ["CE381"]).
prerequisite("CE433", ["CE336"]).
prerequisite("CE435", ["CE336"]).
prerequisite("CE440", ["CE336"]).
prerequisite("CE465", []).
prerequisite("ENVE111", []).
prerequisite("ENVE264", []).
prerequisite("ENVE304", []).
prerequisite("ENVE309", []).
prerequisite("ENVE325", []).
prerequisite("ENVE331", []).
prerequisite("ENVE421", []).
prerequisite("ENVE426", ["ENVE325"]).
prerequisite("ENVE434", []).
prerequisite("ENVE438", []).
prerequisite("ENVE450", []).
prerequisite("ENVE466", []).
prerequisite("ENVE467", ["ENVE466"]).
prerequisite("ENVE411", ["ENVE325"]).
prerequisite("ENVE436", ["ENVE325"]).
prerequisite("ENVE439", ["ENVE325"]).
prerequisite("ENVE443", ["ENVE325"]).
prerequisite("ENVE455", ["ENVE325"]).
prerequisite("ENVE480", ["ENVE325"]).
prerequisite("CHEM124", ["High School Chemistry"]).
prerequisite("CHEM125", ["CHEM124"]).
prerequisite("CHEM126", ["CHEM125"]).
prerequisite("CHEM312", ["CHEM126"]).
prerequisite("MATH142", ["MATH141"]).
prerequisite("MATH143", ["MATH142"]).
prerequisite("MATH241", ["MATH143"]).
prerequisite("MATH244", ["MATH241"]).
prerequisite("MCRO221", ["CHEM124"]).
prerequisite("MCRO224", ["CHEM124"]).
prerequisite("ME211", ["PHYS141", "MATH141"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS142", ["PHYS141"]).
prerequisite("PHYS143", ["PHYS142"]).
prerequisite("STAT312", ["MATH141"]).

major("Environmental Management and Protection").

class("Environmental Management and Protection", "NR140").
class("Environmental Management and Protection", "UNIV100").
class("Environmental Management and Protection", "NR142").
class("Environmental Management and Protection", "NR208").
class("Environmental Management and Protection", "BIO162").
class("Environmental Management and Protection", "BIO222").
class("Environmental Management and Protection", "BIO227").
class("Environmental Management and Protection", "GEOL201").
class("Environmental Management and Protection", "NR215").
class("Environmental Management and Protection", "NR/LA218").
class("Environmental Management and Protection", "NR306").
class("Environmental Management and Protection", "NR304").
class("Environmental Management and Protection", "NR305").
class("Environmental Management and Protection", "NR314").
class("Environmental Management and Protection", "NR445").
class("Environmental Management and Protection", "NR320").
class("Environmental Management and Protection", "NR402").
class("Environmental Management and Protection", "ERSC303").
class("Environmental Management and Protection", "NR323").
class("Environmental Management and Protection", "NR324").
class("Environmental Management and Protection", "NR328").
class("Environmental Management and Protection", "NR326").
class("Environmental Management and Protection", "NR335").
class("Environmental Management and Protection", "NR363").
class("Environmental Management and Protection", "NR/CRP404").
class("Environmental Management and Protection", "NR/CRP408").
class("Environmental Management and Protection", "NR416").
class("Environmental Management and Protection", "NR425").
class("Environmental Management and Protection", "NR435").
class("Environmental Management and Protection", "NR465").
class("Environmental Management and Protection", "NR474").
class("Environmental Management and Protection", "NR475").
class("Environmental Management and Protection", "BIO111").
class("Environmental Management and Protection", "BIO150").
class("Environmental Management and Protection", "BIO161").
class("Environmental Management and Protection", "BIO114").
class("Environmental Management and Protection", "BOT121").
class("Environmental Management and Protection", "BRAE237").
class("Environmental Management and Protection", "BRAE345").
class("Environmental Management and Protection", "BRAE348").
class("Environmental Management and Protection", "ENVE324").
class("Environmental Management and Protection", "NR310").
class("Environmental Management and Protection", "CHEM127").
class("Environmental Management and Protection", "MATH161").
class("Environmental Management and Protection", "MATH221").
class("Environmental Management and Protection", "PHYS121").
class("Environmental Management and Protection", "SS120").
class("Environmental Management and Protection", "STAT217").
class("Environmental Management and Protection", "STAT218").

prerequisite("NR140", []).
prerequisite("UNIV100", []).
prerequisite("NR142", []).
prerequisite("NR208", []).
prerequisite("BIO162", []).
prerequisite("BIO222", []).
prerequisite("BIO227", []).
prerequisite("GEOL201", []).
prerequisite("NR215", []).
prerequisite("NR/LA218", []).
prerequisite("NR306", []).
prerequisite("NR304", []).
prerequisite("NR305", []).
prerequisite("NR314", []).
prerequisite("NR445", []).
prerequisite("NR320", []).
prerequisite("NR402", []).
prerequisite("ERSC303", []).
prerequisite("NR323", []).
prerequisite("NR324", []).
prerequisite("NR328", []).
prerequisite("NR326", []).
prerequisite("NR335", []).
prerequisite("NR363", []).
prerequisite("NR/CRP404", []).
prerequisite("NR/CRP408", []).
prerequisite("NR416", []).
prerequisite("NR425", []).
prerequisite("NR435", []).
prerequisite("NR465", []).
prerequisite("NR474", []).
prerequisite("NR475", []).
prerequisite("BIO111", []).
prerequisite("BIO150", []).
prerequisite("BIO161", []).
prerequisite("BIO114", []).
prerequisite("BOT121", []).
prerequisite("BRAE237", []).
prerequisite("BRAE345", []).
prerequisite("BRAE348", []).
prerequisite("ENVE324", []).
prerequisite("NR310", []).
prerequisite("CHEM127", [""]).
prerequisite("MATH161", [""]).
prerequisite("MATH221", [""]).
prerequisite("PHYS121", ["MATH141"]).
prerequisite("SS120", []).
prerequisite("STAT217", ["MATH118"]).
prerequisite("STAT218", ["MATH118"]).

major("Food Science").

class("Food Science", "FSN102").
class("Food Science", "FSN125").
class("Food Science", "FSN230").
class("Food Science", "FSN202").
class("Food Science", "FSN204").
class("Food Science", "FSN250").
class("Food Science", "FSN311").
class("Food Science", "FSN330").
class("Food Science", "FSN334").
class("Food Science", "FSN335").
class("Food Science", "FSN364").
class("Food Science", "FSN368").
class("Food Science", "FSN370").
class("Food Science", "FSN374").
class("Food Science", "FSN375").
class("Food Science", "FSN407").
class("Food Science", "FSN408").
class("Food Science", "FSN469").
class("Food Science", "BIO111").
class("Food Science", "CHEM127").
class("Food Science", "CHEM128").
class("Food Science", "CHEM312").
class("Food Science", "CHEM314").
class("Food Science", "MATH161").
class("Food Science", "MATH141").
class("Food Science", "MCRO221").
class("Food Science", "MCRO421").
class("Food Science", "PHYS121").
class("Food Science", "STAT218").
class("Food Science", "STAT314").

prerequisite("FSN102", []).
prerequisite("FSN125", []).
prerequisite("FSN230", []).
prerequisite("FSN202", []).
prerequisite("FSN204", ["FSN125", "CHEM127"]).
prerequisite("FSN250", []).
prerequisite("FSN311", ["FSN125"]).
prerequisite("FSN330", ["PHYS121", "MATH161"]).
prerequisite("FSN334", ["CHEM128"]).
prerequisite("FSN335", ["FSN204"]).
prerequisite("FSN364", ["CHEM312"]).
prerequisite("FSN368", ["CHEM312"]).
prerequisite("FSN370", ["MCRO221"]).
prerequisite("FSN374", ["FSN204"]).
prerequisite("FSN375", ["MCRO221"]).
prerequisite("FSN407", ["FSN364"]).
prerequisite("FSN408", ["FSN335", "FSN364"]).
prerequisite("FSN469", ["FSN408"]).
prerequisite("BIO111", []).
prerequisite("CHEM127", [""]).
prerequisite("CHEM128", ["CHEM127"]).
prerequisite("CHEM312", ["CHEM128"]).
prerequisite("CHEM314", ["CHEM312"]).
prerequisite("MATH161", [""]).
prerequisite("MATH141", [""]).
prerequisite("MCRO221", ["CHEM127"]).
prerequisite("MCRO421", ["MCRO221"]).
prerequisite("PHYS121", ["MATH141"]).
prerequisite("STAT218", [""]).
prerequisite("STAT314", ["STAT218"]).

major("Forest and Fire Sciences").

class("Forest and Fire Sciences", "NR140").
class("Forest and Fire Sciences", "NR141").
class("Forest and Fire Sciences", "NR204").
class("Forest and Fire Sciences", "NR208").
class("Forest and Fire Sciences", "NR215").
class("Forest and Fire Sciences", "NR218").
class("Forest and Fire Sciences", "NR260").
class("Forest and Fire Sciences", "NR305").
class("Forest and Fire Sciences", "NR307").
class("Forest and Fire Sciences", "NR308").
class("Forest and Fire Sciences", "NR310").
class("Forest and Fire Sciences", "NR315").
class("Forest and Fire Sciences", "NR320").
class("Forest and Fire Sciences", "NR326").
class("Forest and Fire Sciences", "NR335").
class("Forest and Fire Sciences", "NR350").
class("Forest and Fire Sciences", "NR365").
class("Forest and Fire Sciences", "NR402").
class("Forest and Fire Sciences", "NR414").
class("Forest and Fire Sciences", "NR416").
class("Forest and Fire Sciences", "NR435").
class("Forest and Fire Sciences", "NR465").
class("Forest and Fire Sciences", "NR474").
class("Forest and Fire Sciences", "NR475").
class("Forest and Fire Sciences", "ASCI239").
class("Forest and Fire Sciences", "BIO227").
class("Forest and Fire Sciences", "BIO363").
class("Forest and Fire Sciences", "BIO427").
class("Forest and Fire Sciences", "PHYS121").
class("Forest and Fire Sciences", "BOT121").
class("Forest and Fire Sciences", "BRAE237").
class("Forest and Fire Sciences", "BRAE239").
class("Forest and Fire Sciences", "BRAE345").
class("Forest and Fire Sciences", "CHEM127").
class("Forest and Fire Sciences", "MATH161").
class("Forest and Fire Sciences", "MATH221").
class("Forest and Fire Sciences", "SS120").
class("Forest and Fire Sciences", "STAT217").
class("Forest and Fire Sciences", "STAT218").

prerequisite("NR140", []).
prerequisite("NR141", []).
prerequisite("NR204", []).
prerequisite("NR208", []).
prerequisite("NR215", []).
prerequisite("NR218", []).
prerequisite("NR260", ["NR141"]).
prerequisite("NR305", ["NR141"]).
prerequisite("NR307", ["NR204"]).
prerequisite("NR308", ["NR204"]).
prerequisite("NR310", []).
prerequisite("NR315", ["NR141"]).
prerequisite("NR320", ["NR208"]).
prerequisite("NR326", ["NR141"]).
prerequisite("NR335", ["NR141"]).
prerequisite("NR350", ["NR141"]).
prerequisite("NR365", ["NR305"]).
prerequisite("NR402", ["NR141"]).
prerequisite("NR414", ["NR305"]).
prerequisite("NR416", ["NR305"]).
prerequisite("NR435", ["NR416"]).
prerequisite("NR465", ["NR416"]).
prerequisite("NR474", ["NR305"]).
prerequisite("NR475", ["NR474"]).
prerequisite("ASCI239", []).
prerequisite("BIO227", ["BIO111"]).
prerequisite("BIO363", ["BIO111"]).
prerequisite("BIO427", ["BIO111"]).
prerequisite("PHYS121", ["MATH118"]).
prerequisite("BOT121", []).
prerequisite("BRAE237", []).
prerequisite("BRAE239", []).
prerequisite("BRAE345", []).
prerequisite("CHEM127", []).
prerequisite("MATH161", []).
prerequisite("MATH221", []).
prerequisite("SS120", []).
prerequisite("STAT217", []).
prerequisite("STAT218", []).

major("General Engineering").

class("General Engineering", "CE204").
class("General Engineering", "CSC101").
class("General Engineering", "CPE101").
class("General Engineering", "EE201").
class("General Engineering", "EE251").
class("General Engineering", "ENGR110").
class("General Engineering", "IME144").
class("General Engineering", "IME314").
class("General Engineering", "IME315").
class("General Engineering", "MATE210").
class("General Engineering", "MATE215").
class("General Engineering", "ME211").
class("General Engineering", "ME212").
class("General Engineering", "ME302").
class("General Engineering", "ME341").
class("General Engineering", "ME343").
class("General Engineering", "ENGR459").
class("General Engineering", "ENGR460").
class("General Engineering", "ENGR461").
class("General Engineering", "CHEM124").
class("General Engineering", "CHEM125").
class("General Engineering", "CHEM127").
class("General Engineering", "CHEM128").
class("General Engineering", "ES350").
class("General Engineering", "ES351").
class("General Engineering", "MATH141").
class("General Engineering", "MATH142").
class("General Engineering", "MATH143").
class("General Engineering", "MATH241").
class("General Engineering", "MATH244").
class("General Engineering", "MATH344").
class("General Engineering", "STAT312").
class("General Engineering", "STAT350").
class("General Engineering", "PHYS141").
class("General Engineering", "PHYS142").
class("General Engineering", "PHYS143").
class("General Engineering", "CHEM126").
class("General Engineering", "CHEM129").
class("General Engineering", "GEOL102").
class("General Engineering", "GEOL201").
class("General Engineering", "GEOL241").
class("General Engineering", "GEOL305").
class("General Engineering", "PHYS211").
class("General Engineering", "PHYS323").

prerequisite("CE204", []).
prerequisite("CSC101", []).
prerequisite("CPE101", []).
prerequisite("EE201", []).
prerequisite("EE251", []).
prerequisite("ENGR110", []).
prerequisite("IME144", []).
prerequisite("IME314", []).
prerequisite("IME315", []).
prerequisite("MATE210", []).
prerequisite("MATE215", ["MATE210"]).
prerequisite("ME211", []).
prerequisite("ME212", ["ME211"]).
prerequisite("ME302", ["ME211"]).
prerequisite("ME341", ["ME212"]).
prerequisite("ME343", ["ME341"]).
prerequisite("ENGR459", ["Senior Standing"]).
prerequisite("ENGR460", ["ENGR459"]).
prerequisite("ENGR461", ["ENGR460"]).
prerequisite("CHEM124", []).
prerequisite("CHEM125", ["CHEM124"]).
prerequisite("CHEM127", []).
prerequisite("CHEM128", ["CHEM127"]).
prerequisite("ES350", []).
prerequisite("ES351", []).
prerequisite("MATH141", []).
prerequisite("MATH142", ["MATH141"]).
prerequisite("MATH143", ["MATH142"]).
prerequisite("MATH241", ["MATH143"]).
prerequisite("MATH244", ["MATH241"]).
prerequisite("MATH344", ["MATH244"]).
prerequisite("STAT312", ["MATH241"]).
prerequisite("STAT350", ["MATH241"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS142", ["PHYS141"]).
prerequisite("PHYS143", ["PHYS142"]).
prerequisite("CHEM126", ["CHEM125"]).
prerequisite("CHEM129", ["CHEM128"]).
prerequisite("GEOL102", []).
prerequisite("GEOL201", []).
prerequisite("GEOL241", ["GEOL201"]).
prerequisite("GEOL305", ["GEOL201"]).
prerequisite("PHYS211", ["PHYS143"]).
prerequisite("PHYS323", ["PHYS211"]).

major("Graphic Communication").

class("Graphic Communication", "GRC101").
class("Graphic Communication", "GRC102").
class("Graphic Communication", "GRC201").
class("Graphic Communication", "GRC203").
class("Graphic Communication", "GRC204").
class("Graphic Communication", "GRC211").
class("Graphic Communication", "GRC301").
class("Graphic Communication", "GRC316").
class("Graphic Communication", "GRC318").
class("Graphic Communication", "GRC320").
class("Graphic Communication", "GRC328").
class("Graphic Communication", "GRC331").
class("Graphic Communication", "GRC337").
class("Graphic Communication", "GRC338").
class("Graphic Communication", "GRC361").
class("Graphic Communication", "GRC372").
class("Graphic Communication", "GRC402").
class("Graphic Communication", "GRC404").
class("Graphic Communication", "GRC411").
class("Graphic Communication", "GRC422").
class("Graphic Communication", "GRC461").
class("Graphic Communication", "GRC462").
class("Graphic Communication", "GRC463").
class("Graphic Communication", "CHEM110").
class("Graphic Communication", "MATH118").
class("Graphic Communication", "PHYS104").
class("Graphic Communication", "PHYS121").
class("Graphic Communication", "STAT217").

prerequisite("GRC101", []).
prerequisite("GRC102", []).
prerequisite("GRC201", ["GRC101"]).
prerequisite("GRC203", ["GRC101", "GRC102"]).
prerequisite("GRC204", ["GRC101", "GRC102"]).
prerequisite("GRC211", ["GRC101", "GRC102"]).
prerequisite("GRC301", ["GRC201", "GRC203"]).
prerequisite("GRC316", ["GRC203"]).
prerequisite("GRC318", ["GRC203"]).
prerequisite("GRC320", ["GRC204"]).
prerequisite("GRC328", ["GRC203", "GRC204"]).
prerequisite("GRC331", ["GRC204"]).
prerequisite("GRC337", ["GRC204"]).
prerequisite("GRC338", ["GRC204"]).
prerequisite("GRC361", ["GRC204"]).
prerequisite("GRC372", ["GRC204"]).
prerequisite("GRC402", ["GRC204"]).
prerequisite("GRC404", ["GRC204"]).
prerequisite("GRC411", ["GRC204"]).
prerequisite("GRC422", ["GRC204"]).
prerequisite("GRC461", [""]).
prerequisite("GRC462", [""]).
prerequisite("GRC463", [""]).
prerequisite("CHEM110", []).
prerequisite("MATH118", []).
prerequisite("PHYS104", []).
prerequisite("PHYS121", ["MATH118"]).
prerequisite("STAT217", ["MATH118"]).

major("History").

class("History", "HIST100").
class("History", "HIST110").
class("History", "HIST111").
class("History", "HIST201").
class("History", "HIST202").
class("History", "HIST213").
class("History", "HIST210").
class("History", "HIST221").
class("History", "HIST222").
class("History", "HIST223").
class("History", "HIST303").
class("History", "HIST304").
class("History", "HIST460").
class("History", "HIST461").
class("History", "HIST308").
class("History", "HIST309").
class("History", "HIST310").
class("History", "HIST311").
class("History", "HIST313").
class("History", "HIST316").
class("History", "HIST317").
class("History", "HIST318").
class("History", "HIST319").
class("History", "HIST337").
class("History", "HIST338").
class("History", "HIST341").
class("History", "HIST409").
class("History", "HIST416").
class("History", "HIST417").
class("History", "HIST418").
class("History", "HIST419").
class("History", "HIST421").
class("History", "HIST422").
class("History", "HIST423").
class("History", "HIST426").
class("History", "HIST427").
class("History", "HIST428").
class("History", "HIST429").
class("History", "HIST430").
class("History", "HIST442").
class("History", "HIST443").
class("History", "HIST444").
class("History", "HIST445").
class("History", "HIST459").
class("History", "HIST475").
class("History", "CHIN201").
class("History", "FR201").
class("History", "GER201").
class("History", "ITAL201").
class("History", "JPNS201").
class("History", "SPAN201").

prerequisite("HIST100", []).
prerequisite("HIST110", []).
prerequisite("HIST111", []).
prerequisite("HIST201", []).
prerequisite("HIST202", []).
prerequisite("HIST213", []).
prerequisite("HIST210", []).
prerequisite("HIST221", []).
prerequisite("HIST222", []).
prerequisite("HIST223", []).
prerequisite("HIST303", ["HIST100"]).
prerequisite("HIST304", ["HIST303"]).
prerequisite("HIST460", ["HIST303", "HIST304"]).
prerequisite("HIST461", ["HIST460"]).
prerequisite("HIST308", ["Upper-Division Standing"]).
prerequisite("HIST309", ["Upper-Division Standing"]).
prerequisite("HIST310", ["Upper-Division Standing"]).
prerequisite("HIST311", ["Upper-Division Standing"]).
prerequisite("HIST313", ["Upper-Division Standing"]).
prerequisite("HIST316", ["Upper-Division Standing"]).
prerequisite("HIST317", ["Upper-Division Standing"]).
prerequisite("HIST318", ["Upper-Division Standing"]).
prerequisite("HIST319", ["Upper-Division Standing"]).
prerequisite("HIST337", ["Upper-Division Standing"]).
prerequisite("HIST338", ["Upper-Division Standing"]).
prerequisite("HIST341", ["Upper-Division Standing"]).
prerequisite("HIST409", ["Upper-Division Standing"]).
prerequisite("HIST416", ["Upper-Division Standing"]).
prerequisite("HIST417", ["Upper-Division Standing"]).
prerequisite("HIST418", ["Upper-Division Standing"]).
prerequisite("HIST419", ["Upper-Division Standing"]).
prerequisite("HIST421", ["Upper-Division Standing"]).
prerequisite("HIST422", ["Upper-Division Standing"]).
prerequisite("HIST423", ["Upper-Division Standing"]).
prerequisite("HIST426", ["Upper-Division Standing"]).
prerequisite("HIST427", ["Upper-Division Standing"]).
prerequisite("HIST428", ["Upper-Division Standing"]).
prerequisite("HIST429", ["Upper-Division Standing"]).
prerequisite("HIST430", ["Upper-Division Standing"]).
prerequisite("HIST442", ["Upper-Division Standing"]).
prerequisite("HIST443", ["Upper-Division Standing"]).
prerequisite("HIST444", ["Upper-Division Standing"]).
prerequisite("HIST445", ["Upper-Division Standing"]).
prerequisite("HIST459", ["Upper-Division Standing"]).
prerequisite("HIST475", ["Upper-Division Standing"]).
prerequisite("CHIN201", ["CHIN101", "CHIN102"]).
prerequisite("FR201", ["FR101", "FR102"]).
prerequisite("GER201", ["GER101", "GER102"]).
prerequisite("ITAL201", ["ITAL101", "ITAL102"]).
prerequisite("JPNS201", ["JPNS101", "JPNS102"]).
prerequisite("SPAN201", ["SPAN101", "SPAN102"]).

major("Industrial Engineering").

class("Industrial Engineering", "IME101").
class("Industrial Engineering", "IME141").
class("Industrial Engineering", "IME144").
class("Industrial Engineering", "IME156").
class("Industrial Engineering", "IME212").
class("Industrial Engineering", "IME223").
class("Industrial Engineering", "IME301").
class("Industrial Engineering", "IME305").
class("Industrial Engineering", "IME312").
class("Industrial Engineering", "IME315").
class("Industrial Engineering", "IME319").
class("Industrial Engineering", "IME326").
class("Industrial Engineering", "IME372").
class("Industrial Engineering", "IME410").
class("Industrial Engineering", "IME417").
class("Industrial Engineering", "IME420").
class("Industrial Engineering", "IME429").
class("Industrial Engineering", "IME430").
class("Industrial Engineering", "IME443").
class("Industrial Engineering", "IME481").
class("Industrial Engineering", "IME482").
class("Industrial Engineering", "IME483").
class("Industrial Engineering", "DATA301").
class("Industrial Engineering", "EE321").
class("Industrial Engineering", "EE361").
class("Industrial Engineering", "EE434").
class("Industrial Engineering", "IME303").
class("Industrial Engineering", "IME331").
class("Industrial Engineering", "IME335").
class("Industrial Engineering", "IME336").
class("Industrial Engineering", "IME356").
class("Industrial Engineering", "IME400").
class("Industrial Engineering", "IME403").
class("Industrial Engineering", "IME408").
class("Industrial Engineering", "IME409").
class("Industrial Engineering", "IME415").
class("Industrial Engineering", "IME416").
class("Industrial Engineering", "IME418").
class("Industrial Engineering", "IME424").
class("Industrial Engineering", "IME428").
class("Industrial Engineering", "IME432").
class("Industrial Engineering", "IME435").
class("Industrial Engineering", "IME451").
class("Industrial Engineering", "IME456").
class("Industrial Engineering", "IME457").
class("Industrial Engineering", "IME458").
class("Industrial Engineering", "IME470").
class("Industrial Engineering", "IME471").
class("Industrial Engineering", "IME510").
class("Industrial Engineering", "IME511").
class("Industrial Engineering", "IME520").
class("Industrial Engineering", "IME527").
class("Industrial Engineering", "IME535").
class("Industrial Engineering", "IME541").
class("Industrial Engineering", "IME542").
class("Industrial Engineering", "IME543").
class("Industrial Engineering", "IME544").
class("Industrial Engineering", "IME545").
class("Industrial Engineering", "IME549").
class("Industrial Engineering", "IME565").
class("Industrial Engineering", "MATH344").
class("Industrial Engineering", "MATH350").
class("Industrial Engineering", "ME302").
class("Industrial Engineering", "ME305").
class("Industrial Engineering", "ME341").
class("Industrial Engineering", "STAT324").
class("Industrial Engineering", "STAT330").
class("Industrial Engineering", "STAT331").
class("Industrial Engineering", "STAT414").
class("Industrial Engineering", "STAT415").
class("Industrial Engineering", "STAT416").
class("Industrial Engineering", "STAT419").
class("Industrial Engineering", "STAT431").
class("Industrial Engineering", "AG350").
class("Industrial Engineering", "ISLA350").
class("Industrial Engineering", "EDES350").
class("Industrial Engineering", "ENGR350").
class("Industrial Engineering", "SCM350").
class("Industrial Engineering", "UNIV350").
class("Industrial Engineering", "BUS310").
class("Industrial Engineering", "ENGR310").
class("Industrial Engineering", "BUS311").
class("Industrial Engineering", "BUS346").
class("Industrial Engineering", "BUS382").
class("Industrial Engineering", "CE204").
class("Industrial Engineering", "CE207").
class("Industrial Engineering", "CPE202").
class("Industrial Engineering", "IME239").
class("Industrial Engineering", "IME244").
class("Industrial Engineering", "IME401").
class("Industrial Engineering", "IME421").
class("Industrial Engineering", "IME441").
class("Industrial Engineering", "IME460").
class("Industrial Engineering", "ME212").
class("Industrial Engineering", "PSY350").
class("Industrial Engineering", "BIO213").
class("Industrial Engineering", "BMED213").
class("Industrial Engineering", "CHEM124").
class("Industrial Engineering", "CSC232").
class("Industrial Engineering", "CPE101").
class("Industrial Engineering", "CSC101").
class("Industrial Engineering", "EE201").
class("Industrial Engineering", "EE251").
class("Industrial Engineering", "ENGL147").
class("Industrial Engineering", "MATE210").
class("Industrial Engineering", "MATE215").
class("Industrial Engineering", "MATH141").
class("Industrial Engineering", "MATH142").
class("Industrial Engineering", "MATH143").
class("Industrial Engineering", "MATH241").
class("Industrial Engineering", "MATH244").
class("Industrial Engineering", "ME211").
class("Industrial Engineering", "PHYS141").
class("Industrial Engineering", "PHYS142").
class("Industrial Engineering", "PHYS143").
class("Industrial Engineering", "PSY201").
class("Industrial Engineering", "PSY202").
class("Industrial Engineering", "STAT321").

prerequisite("IME101", []).
prerequisite("IME141", []).
prerequisite("IME144", []).
prerequisite("IME156", ["IME144"]).
prerequisite("IME212", ["CSC101"]).
prerequisite("IME223", ["STAT312"]).
prerequisite("IME301", ["MATH244"]).
prerequisite("IME305", ["IME301"]).
prerequisite("IME312", ["IME212"]).
prerequisite("IME315", ["STAT312"]).
prerequisite("IME319", ["PSY201"]).
prerequisite("IME326", ["STAT312"]).
prerequisite("IME372", ["IME212"]).
prerequisite("IME410", ["IME223"]).
prerequisite("IME417", ["IME223"]).
prerequisite("IME420", ["IME223"]).
prerequisite("IME429", ["IME319"]).
prerequisite("IME430", ["STAT312"]).
prerequisite("IME443", ["IME223"]).
prerequisite("IME481", ["Senior Standing"]).
prerequisite("IME482", ["IME481"]).
prerequisite("IME483", ["IME482"]).
prerequisite("DATA301", ["STAT312"]).
prerequisite("EE321", ["EE201"]).
prerequisite("EE361", ["EE201"]).
prerequisite("EE434", ["Senior Standing"]).
prerequisite("IME303", ["IME223"]).
prerequisite("IME331", ["IME144"]).
prerequisite("IME335", ["IME144"]).
prerequisite("IME336", ["IME335"]).
prerequisite("IME356", ["IME335"]).
prerequisite("IME400", ["Senior Standing"]).
prerequisite("IME403", ["Senior Standing"]).
prerequisite("IME408", ["Senior Standing"]).
prerequisite("IME409", ["STAT312"]).
prerequisite("IME415", ["Senior Standing"]).
prerequisite("IME416", ["Senior Standing"]).
prerequisite("IME418", ["Senior Standing"]).
prerequisite("IME424", ["Senior Standing"]).
prerequisite("IME428", ["Senior Standing"]).
prerequisite("IME432", ["IME144"]).
prerequisite("IME435", ["STAT312"]).
prerequisite("IME451", ["IME144"]).
prerequisite("IME456", ["IME144"]).
prerequisite("IME457", ["IME144"]).
prerequisite("IME458", ["IME144"]).
prerequisite("IME470", ["Senior Standing"]).
prerequisite("IME471", ["Senior Standing"]).
prerequisite("IME510", ["Senior Standing"]).
prerequisite("IME511", ["Senior Standing"]).
prerequisite("IME520", ["Senior Standing"]).
prerequisite("IME527", ["STAT312"]).
prerequisite("IME535", ["Senior Standing"]).
prerequisite("IME541", ["Senior Standing"]).
prerequisite("IME542", ["Senior Standing"]).
prerequisite("IME543", ["Senior Standing"]).
prerequisite("IME544", ["Senior Standing"]).
prerequisite("IME545", ["Senior Standing"]).
prerequisite("IME549", ["Senior Standing"]).
prerequisite("IME565", ["STAT312"]).
prerequisite("MATH344", ["MATH241"]).
prerequisite("MATH350", ["MATH241"]).
prerequisite("ME302", ["ME212"]).
prerequisite("ME305", ["ME211"]).
prerequisite("ME341", ["ME212"]).
prerequisite("STAT324", ["STAT312"]).
prerequisite("STAT330", ["STAT312"]).
prerequisite("STAT331", ["STAT312"]).
prerequisite("STAT414", ["STAT312"]).
prerequisite("STAT415", ["STAT312"]).
prerequisite("STAT416", ["STAT312"]).
prerequisite("STAT419", ["STAT312"]).
prerequisite("STAT431", ["STAT312"]).
prerequisite("AG350", ["Junior Standing"]).
prerequisite("ISLA350", ["Junior Standing"]).
prerequisite("EDES350", ["Junior Standing"]).
prerequisite("ENGR350", ["Junior Standing"]).
prerequisite("SCM350", ["Junior Standing"]).
prerequisite("UNIV350", ["Junior Standing"]).
prerequisite("BUS310", ["Junior Standing"]).
prerequisite("ENGR310", ["Junior Standing"]).
prerequisite("BUS311", ["Junior Standing"]).
prerequisite("BUS346", ["Junior Standing"]).
prerequisite("BUS382", ["Junior Standing"]).
prerequisite("CE204", ["ME211"]).
prerequisite("CE207", ["CE204"]).
prerequisite("CPE202", ["CPE101"]).
prerequisite("IME239", ["IME144"]).
prerequisite("IME244", ["IME144"]).
prerequisite("IME401", ["Senior Standing"]).
prerequisite("IME421", ["Senior Standing"]).
prerequisite("IME441", ["Senior Standing"]).
prerequisite("IME460", ["Senior Standing"]).
prerequisite("ME212", ["ME211"]).
prerequisite("PSY350", ["PSY201"]).
prerequisite("BIO213", ["Junior Standing"]).
prerequisite("BMED213", ["BIO213"]).
prerequisite("CHEM124", ["Junior Standing"]).
prerequisite("CSC232", ["CSC101"]).
prerequisite("CPE101", ["Junior Standing"]).
prerequisite("CSC101", ["Junior Standing"]).
prerequisite("EE201", ["Junior Standing"]).
prerequisite("EE251", ["EE201"]).
prerequisite("ENGL147", ["Junior Standing"]).
prerequisite("MATE210", ["Junior Standing"]).
prerequisite("MATE215", ["MATE210"]).
prerequisite("MATH141", ["Junior Standing"]).
prerequisite("MATH142", ["MATH141"]).
prerequisite("MATH143", ["MATH142"]).
prerequisite("MATH241", ["MATH143"]).
prerequisite("MATH244", ["MATH241"]).
prerequisite("ME211", ["Junior Standing"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS142", ["PHYS141"]).
prerequisite("PHYS143", ["PHYS142"]).
prerequisite("PSY201", ["Junior Standing"]).
prerequisite("PSY202", ["PSY201"]).
prerequisite("STAT321", ["STAT312"]).

major("Industrial Technology and Packaging").

class("Industrial Technology and Packaging", "ITP100").
class("Industrial Technology and Packaging", "ITP125").
class("Industrial Technology and Packaging", "ITP150").
class("Industrial Technology and Packaging", "ITP211").
class("Industrial Technology and Packaging", "ITP233").
class("Industrial Technology and Packaging", "ITP303").
class("Industrial Technology and Packaging", "ITP326").
class("Industrial Technology and Packaging", "ITP330").
class("Industrial Technology and Packaging", "ITP341").
class("Industrial Technology and Packaging", "ITP371").
class("Industrial Technology and Packaging", "ITP406").
class("Industrial Technology and Packaging", "ITP409").
class("Industrial Technology and Packaging", "ITP411").
class("Industrial Technology and Packaging", "ITP415").
class("Industrial Technology and Packaging", "ITP461").
class("Industrial Technology and Packaging", "ITP462").
class("Industrial Technology and Packaging", "BUS346").
class("Industrial Technology and Packaging", "BUS391").
class("Industrial Technology and Packaging", "CHEM124").
class("Industrial Technology and Packaging", "CHEM127").
class("Industrial Technology and Packaging", "ECON201").
class("Industrial Technology and Packaging", "MATH141").
class("Industrial Technology and Packaging", "MATH221").
class("Industrial Technology and Packaging", "PHYS121").
class("Industrial Technology and Packaging", "PHYS123").
class("Industrial Technology and Packaging", "STAT217").
class("Industrial Technology and Packaging", "STAT218").
class("Industrial Technology and Packaging", "STAT251").

prerequisite("ITP100", []).
prerequisite("ITP125", []).
prerequisite("ITP150", ["ITP125"]).
prerequisite("ITP211", ["ITP125"]).
prerequisite("ITP233", ["ITP125"]).
prerequisite("ITP303", ["ITP211"]).
prerequisite("ITP326", ["ITP125"]).
prerequisite("ITP330", ["CHEM124"]).
prerequisite("ITP341", ["CHEM124"]).
prerequisite("ITP371", ["ITP125"]).
prerequisite("ITP406", ["ITP211"]).
prerequisite("ITP409", ["ITP125"]).
prerequisite("ITP411", ["ITP125"]).
prerequisite("ITP415", ["ITP125"]).
prerequisite("ITP461", ["Senior Standing"]).
prerequisite("ITP462", ["ITP461"]).
prerequisite("BUS346", ["ECON201"]).
prerequisite("BUS391", ["ITP125"]).
prerequisite("CHEM124", []).
prerequisite("CHEM127", ["CHEM124"]).
prerequisite("ECON201", []).
prerequisite("MATH141", []).
prerequisite("MATH221", ["MATH141"]).
prerequisite("PHYS121", ["MATH141"]).
prerequisite("PHYS123", ["PHYS121"]).
prerequisite("STAT217", ["MATH141"]).
prerequisite("STAT218", ["MATH141"]).
prerequisite("STAT251", ["MATH141"]).

major("Interdisciplinary Studies").

class("Interdisciplinary Studies", "ES112").
class("Interdisciplinary Studies", "HIST206").
class("Interdisciplinary Studies", "HIST216").
class("Interdisciplinary Studies", "ISLA123").
class("Interdisciplinary Studies", "JOUR219").
class("Interdisciplinary Studies", "JOUR228").
class("Interdisciplinary Studies", "RELS201").
class("Interdisciplinary Studies", "WGQS201").
class("Interdisciplinary Studies", "WGQS210").
class("Interdisciplinary Studies", "ISLA201").
class("Interdisciplinary Studies", "ISLA255").
class("Interdisciplinary Studies", "STAT130").
class("Interdisciplinary Studies", "STAT217").
class("Interdisciplinary Studies", "STAT218").
class("Interdisciplinary Studies", "COMS213").
class("Interdisciplinary Studies", "COMS322").
class("Interdisciplinary Studies", "COMS385").
class("Interdisciplinary Studies", "ENGL311").
class("Interdisciplinary Studies", "ENGL312").
class("Interdisciplinary Studies", "ENGL317").
class("Interdisciplinary Studies", "ENGL467").
class("Interdisciplinary Studies", "PSY304").
class("Interdisciplinary Studies", "COMS395").
class("Interdisciplinary Studies", "ISLA303").
class("Interdisciplinary Studies", "ISLA305").
class("Interdisciplinary Studies", "ISLA320").
class("Interdisciplinary Studies", "ISLA335").
class("Interdisciplinary Studies", "ISLA340").
class("Interdisciplinary Studies", "ISLA341").
class("Interdisciplinary Studies", "ISLA350").
class("Interdisciplinary Studies", "ISLA465").
class("Interdisciplinary Studies", "ISLA355").
class("Interdisciplinary Studies", "ISLA440").
class("Interdisciplinary Studies", "ISLA461").

prerequisite("ES112", []).
prerequisite("HIST206", []).
prerequisite("HIST216", []).
prerequisite("ISLA123", []).
prerequisite("JOUR219", []).
prerequisite("JOUR228", []).
prerequisite("RELS201", []).
prerequisite("WGQS201", []).
prerequisite("WGQS210", []).
prerequisite("ISLA201", []).
prerequisite("ISLA255", ["ISLA201"]).
prerequisite("STAT130", []).
prerequisite("STAT217", []).
prerequisite("STAT218", []).
prerequisite("COMS213", []).
prerequisite("COMS322", ["COMS213"]).
prerequisite("COMS385", ["COMS213"]).
prerequisite("ENGL311", ["ENGL213"]).
prerequisite("ENGL312", ["ENGL213"]).
prerequisite("ENGL317", ["ENGL213"]).
prerequisite("ENGL467", ["ENGL213"]).
prerequisite("PSY304", ["PSY201"]).
prerequisite("COMS395", ["COMS213"]).
prerequisite("ISLA303", ["ISLA201"]).
prerequisite("ISLA305", ["ISLA201"]).
prerequisite("ISLA320", ["ISLA201"]).
prerequisite("ISLA335", ["ISLA201"]).
prerequisite("ISLA340", ["ISLA201"]).
prerequisite("ISLA341", ["ISLA201"]).
prerequisite("ISLA350", ["ISLA201"]).
prerequisite("ISLA465", ["ISLA201"]).
prerequisite("ISLA355", ["ISLA255"]).
prerequisite("ISLA440", ["ISLA255", "ISLA355"]).
prerequisite("ISLA461", ["ISLA440"]).

major("Journalism").

class("Journalism", "JOUR102").
class("Journalism", "JOUR203").
class("Journalism", "JOUR219").
class("Journalism", "JOUR401").
class("Journalism", "JOUR228").
class("Journalism", "JOUR285").
class("Journalism", "JOUR302").
class("Journalism", "JOUR303").
class("Journalism", "JOUR312").
class("Journalism", "JOUR334").
class("Journalism", "JOUR390").
class("Journalism", "JOUR402").
class("Journalism", "JOUR444").
class("Journalism", "JOUR201").
class("Journalism", "JOUR220").
class("Journalism", "JOUR270").
class("Journalism", "JOUR320").
class("Journalism", "JOUR331").
class("Journalism", "JOUR387").
class("Journalism", "JOUR400").
class("Journalism", "JOUR418").
class("Journalism", "JOUR455").
class("Journalism", "JOUR470").
class("Journalism", "JOUR471").
class("Journalism", "STAT130").
class("Journalism", "STAT217").
class("Journalism", "STAT218").
class("Journalism", "STAT251").

prerequisite("JOUR102", []).
prerequisite("JOUR203", ["JOUR102"]).
prerequisite("JOUR219", ["JOUR102"]).
prerequisite("JOUR401", ["JOUR219"]).
prerequisite("JOUR228", ["JOUR102"]).
prerequisite("JOUR285", ["JOUR102"]).
prerequisite("JOUR302", ["JOUR203"]).
prerequisite("JOUR303", ["JOUR285"]).
prerequisite("JOUR312", ["JOUR203"]).
prerequisite("JOUR334", ["JOUR203"]).
prerequisite("JOUR390", ["JOUR285"]).
prerequisite("JOUR402", ["JOUR302"]).
prerequisite("JOUR444", ["JOUR285"]).
prerequisite("JOUR201", ["JOUR102"]).
prerequisite("JOUR220", ["JOUR102"]).
prerequisite("JOUR270", ["JOUR102"]).
prerequisite("JOUR320", ["JOUR220"]).
prerequisite("JOUR331", ["JOUR102"]).
prerequisite("JOUR387", ["JOUR203"]).
prerequisite("JOUR400", ["JOUR203"]).
prerequisite("JOUR418", ["JOUR302"]).
prerequisite("JOUR455", ["JOUR203"]).
prerequisite("JOUR470", ["JOUR203"]).
prerequisite("JOUR471", ["JOUR203"]).
prerequisite("STAT130", []).
prerequisite("STAT217", []).
prerequisite("STAT218", []).
prerequisite("STAT251", []).

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
