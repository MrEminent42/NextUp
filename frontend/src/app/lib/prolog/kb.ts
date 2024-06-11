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
class("Computer Science", "MATH118").
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

major("Agricultural Business").

class("Agricultural Business", "AGB101").
class("Agricultural Business", "AGB202").
class("Agricultural Business", "AGB212").
class("Agricultural Business", "AGB214").
class("Agricultural Business", "AGB260").
class("Agricultural Business", "AGB301").
class("Agricultural Business", "AGB308").
class("Agricultural Business", "AGB312").
class("Agricultural Business", "AGB313").
class("Agricultural Business", "AGB323").
class("Agricultural Business", "AGB327").
class("Agricultural Business", "AGB328").
class("Agricultural Business", "AGB369").
class("Agricultural Business", "AGB462").
class("Agricultural Business", "AGB463").
class("Agricultural Business", "AGC314").
class("Agricultural Business", "AGC452").
class("Agricultural Business", "AGC475").
class("Agricultural Business", "NR326").
class("Agricultural Business", "NR408").
class("Agricultural Business", "NR413").
class("Agricultural Business", "WVIT343").
class("Agricultural Business", "WVIT423").
class("Agricultural Business", "WVIT450").
class("Agricultural Business", "BUS207").
class("Agricultural Business", "ECON222").
class("Agricultural Business", "MATH221").
class("Agricultural Business", "STAT251").
class("Agricultural Business", "ASCI112").
class("Agricultural Business", "ASCI211").
class("Agricultural Business", "ASCI215").
class("Agricultural Business", "ASCI239").
class("Agricultural Business", "DSCI229").
class("Agricultural Business", "FSN275").
class("Agricultural Business", "PLSC120").
class("Agricultural Business", "PLSC150").
class("Agricultural Business", "PLSC230").
class("Agricultural Business", "SS120").
class("Agricultural Business", "SS130").

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


major("Kinesiology").

class("Kinesiology", "KINE180").
class("Kinesiology", "HLTH250").
class("Kinesiology", "HLTH255").
class("Kinesiology", "HLTH260").
class("Kinesiology", "KINE266").
class("Kinesiology", "KINE301").
class("Kinesiology", "KINE303").
class("Kinesiology", "KINE304").
class("Kinesiology", "KINE307").
class("Kinesiology", "KINE312").
class("Kinesiology", "KINE319").
class("Kinesiology", "KINE349").
class("Kinesiology", "KINE401").
class("Kinesiology", "KINE403").
class("Kinesiology", "KINE412").
class("Kinesiology", "KINE451").
class("Kinesiology", "KINE459").
class("Kinesiology", "KINE460").
class("Kinesiology", "KINE461").
class("Kinesiology", "KINE462").
class("Kinesiology", "KINE463").
class("Kinesiology", "BIO162").
class("Kinesiology", "BIO253").
class("Kinesiology", "BIO305").
class("Kinesiology", "CHEM129").
class("Kinesiology", "CHEM217").
class("Kinesiology", "CHEM220").
class("Kinesiology", "CHEM314").
class("Kinesiology", "COMS211").
class("Kinesiology", "COMS213").
class("Kinesiology", "COMS301").
class("Kinesiology", "COMS313").
class("Kinesiology", "COMS316").
class("Kinesiology", "FSN310").
class("Kinesiology", "FSN315").
class("Kinesiology", "FSN415").
class("Kinesiology", "FSN416").
class("Kinesiology", "HLTH297").
class("Kinesiology", "HLTH305").
class("Kinesiology", "HLTH320").
class("Kinesiology", "IME320").
class("Kinesiology", "KINE181").
class("Kinesiology", "KINE201").
class("Kinesiology", "KINE308").
class("Kinesiology", "KINE323").
class("Kinesiology", "KINE382").
class("Kinesiology", "KINE400").
class("Kinesiology", "KINE406").
class("Kinesiology", "KINE409").
class("Kinesiology", "KINE446").
class("Kinesiology", "PHYS122").
class("Kinesiology", "PHYS123").
class("Kinesiology", "PSY201").
class("Kinesiology", "PSY202").
class("Kinesiology", "PSY252").
class("Kinesiology", "PSY256").
class("Kinesiology", "PSY302").
class("Kinesiology", "PSY310").
class("Kinesiology", "PSY318").
class("Kinesiology", "PSY320").
class("Kinesiology", "PSY340").
class("Kinesiology", "PSY350").
class("Kinesiology", "RPTA160").
class("Kinesiology", "RPTA255").
class("Kinesiology", "RPTA275").
class("Kinesiology", "RPTA450").
class("Kinesiology", "BIO161").
class("Kinesiology", "BIO231").
class("Kinesiology", "BIO232").
class("Kinesiology", "CHEM127").
class("Kinesiology", "CHEM128").
class("Kinesiology", "CHEM312").
class("Kinesiology", "CHEM216").
class("Kinesiology", "MATH119").
class("Kinesiology", "MATH141").
class("Kinesiology", "PHYS121").
class("Kinesiology", "STAT218").


major("Landscape Architecture").

class("Landscape Architecture", "LA101").
class("Landscape Architecture", "LA170").
class("Landscape Architecture", "LA171").
class("Landscape Architecture", "LA202").
class("Landscape Architecture", "LA203").
class("Landscape Architecture", "LA204").
class("Landscape Architecture", "LA211").
class("Landscape Architecture", "LA212").
class("Landscape Architecture", "LA220").
class("Landscape Architecture", "LA221").
class("Landscape Architecture", "PLSC381").
class("Landscape Architecture", "LA241").
class("Landscape Architecture", "LA242").
class("Landscape Architecture", "LA243").
class("Landscape Architecture", "LA320").
class("Landscape Architecture", "LA330").
class("Landscape Architecture", "LA349").
class("Landscape Architecture", "LA370").
class("Landscape Architecture", "LA371").
class("Landscape Architecture", "LA401").
class("Landscape Architecture", "LA402").
class("Landscape Architecture", "LA403").
class("Landscape Architecture", "LA404").
class("Landscape Architecture", "LA405").
class("Landscape Architecture", "LA406").
class("Landscape Architecture", "LA431").
class("Landscape Architecture", "LA432").
class("Landscape Architecture", "LA433").
class("Landscape Architecture", "LA434").
class("Landscape Architecture", "LA435").
class("Landscape Architecture", "LA436").
class("Landscape Architecture", "LA437").
class("Landscape Architecture", "LA438").
class("Landscape Architecture", "LA439").
class("Landscape Architecture", "LA461").
class("Landscape Architecture", "BOT121").
class("Landscape Architecture", "BIO114").
class("Landscape Architecture", "CRP212").
class("Landscape Architecture", "EDES123").
class("Landscape Architecture", "MATH118").
class("Landscape Architecture", "MATH119").
class("Landscape Architecture", "PLSC233").
class("Landscape Architecture", "PLSC234").
class("Landscape Architecture", "BIO227").
class("Landscape Architecture", "BRAE337").
class("Landscape Architecture", "SS120").
class("Landscape Architecture", "STAT217").
class("Landscape Architecture", "STAT218").


major("Liberal Arts and Engineering Studies").

class("Liberal Arts and Engineering Studies", "CHEM124").
class("Liberal Arts and Engineering Studies", "LAES301").
class("Liberal Arts and Engineering Studies", "LAES302").
class("Liberal Arts and Engineering Studies", "LAES461").
class("Liberal Arts and Engineering Studies", "LAES462").
class("Liberal Arts and Engineering Studies", "MATH141").
class("Liberal Arts and Engineering Studies", "MATH142").
class("Liberal Arts and Engineering Studies", "MATH143").
class("Liberal Arts and Engineering Studies", "MATH241").
class("Liberal Arts and Engineering Studies", "MATH244").
class("Liberal Arts and Engineering Studies", "PHYS141").
class("Liberal Arts and Engineering Studies", "PHYS142").
class("Liberal Arts and Engineering Studies", "PHYS143").
class("Liberal Arts and Engineering Studies", "STAT312").
class("Liberal Arts and Engineering Studies", "STAT321").
class("Liberal Arts and Engineering Studies", "STAT350").


major("Liberal Studies").

class("Liberal Studies", "LS201").
class("Liberal Studies", "LS211").
class("Liberal Studies", "LS214").
class("Liberal Studies", "LS230").
class("Liberal Studies", "LS250").
class("Liberal Studies", "LS255").
class("Liberal Studies", "LS301").
class("Liberal Studies", "LS310").
class("Liberal Studies", "LS370").
class("Liberal Studies", "LS411").
class("Liberal Studies", "LS412").
class("Liberal Studies", "LS413").
class("Liberal Studies", "LS461").
class("Liberal Studies", "LS462").
class("Liberal Studies", "ASTR101").
class("Liberal Studies", "BIO111").
class("Liberal Studies", "BIO211").
class("Liberal Studies", "ENGL391").
class("Liberal Studies", "GEOG308").
class("Liberal Studies", "HIST201").
class("Liberal Studies", "HIST208").
class("Liberal Studies", "HIST210").
class("Liberal Studies", "KINE310").
class("Liberal Studies", "HLTH443").
class("Liberal Studies", "MATH227").
class("Liberal Studies", "MATH328").
class("Liberal Studies", "MATH329").
class("Liberal Studies", "MATH330").
class("Liberal Studies", "PHIL230").
class("Liberal Studies", "PHIL231").
class("Liberal Studies", "PSC101").
class("Liberal Studies", "PSC102").
class("Liberal Studies", "PSC103").
class("Liberal Studies", "PSY201").
class("Liberal Studies", "PSY202").
class("Liberal Studies", "STAT130").
class("Liberal Studies", "STAT217").
class("Liberal Studies", "CD207").
class("Liberal Studies", "EDUC207").
class("Liberal Studies", "EDUC427").
class("Liberal Studies", "EDUC428").


major("Manufacturing Engineering").

class("Manufacturing Engineering", "IME101").
class("Manufacturing Engineering", "IME141").
class("Manufacturing Engineering", "IME142").
class("Manufacturing Engineering", "IME144").
class("Manufacturing Engineering", "IME156").
class("Manufacturing Engineering", "IME223").
class("Manufacturing Engineering", "IME244").
class("Manufacturing Engineering", "IME314").
class("Manufacturing Engineering", "IME315").
class("Manufacturing Engineering", "IME327").
class("Manufacturing Engineering", "IME330").
class("Manufacturing Engineering", "IME335").
class("Manufacturing Engineering", "IME342").
class("Manufacturing Engineering", "IME356").
class("Manufacturing Engineering", "IME417").
class("Manufacturing Engineering", "IME418").
class("Manufacturing Engineering", "IME430").
class("Manufacturing Engineering", "IME450").
class("Manufacturing Engineering", "IME481").
class("Manufacturing Engineering", "IME482").
class("Manufacturing Engineering", "IME483").


major("Marine Sciences").

class("Marine Sciences", "BIO150").
class("Marine Sciences", "BIO161").
class("Marine Sciences", "BIO162").
class("Marine Sciences", "BIO263").
class("Marine Sciences", "BIO461").
class("Marine Sciences", "BIO462").
class("Marine Sciences", "CHEM302").
class("Marine Sciences", "MSCI100").
class("Marine Sciences", "MSCI300").
class("Marine Sciences", "MSCI301").
class("Marine Sciences", "MSCI403").
class("Marine Sciences", "PSC201").


major("Materials Engineering").

class("Materials Engineering", "MATE110").
class("Materials Engineering", "MATE120").
class("Materials Engineering", "MATE210").
class("Materials Engineering", "MATE215").
class("Materials Engineering", "MATE225").
class("Materials Engineering", "MATE232").
class("Materials Engineering", "MATE235").
class("Materials Engineering", "MATE245").
class("Materials Engineering", "MATE280").
class("Materials Engineering", "MATE300").
class("Materials Engineering", "MATE310").
class("Materials Engineering", "MATE325").
class("Materials Engineering", "MATE340").
class("Materials Engineering", "MATE350").
class("Materials Engineering", "MATE360").
class("Materials Engineering", "MATE370").
class("Materials Engineering", "MATE480").
class("Materials Engineering", "MATE482").
class("Materials Engineering", "MATE483").
class("Materials Engineering", "MATE484").


major("Mathematics").

class("Mathematics", "MATH141").
class("Mathematics", "MATH142").
class("Mathematics", "MATH143").
class("Mathematics", "MATH202").
class("Mathematics", "MATH206").
class("Mathematics", "MATH241").
class("Mathematics", "MATH242").
class("Mathematics", "MATH248").
class("Mathematics", "MATH306").
class("Mathematics", "MATH334").
class("Mathematics", "MATH412").
class("Mathematics", "MATH459").
class("Mathematics", "MATH460").
class("Mathematics", "MATH461").
class("Mathematics", "MATH462").
class("Mathematics", "MATH481").
class("Mathematics", "CSC101").
class("Mathematics", "PHYS141").
class("Mathematics", "PHYS142").
class("Mathematics", "PHYS143").


major("Mechanical Engineering").

class("Mechanical Engineering", "ME128").
class("Mechanical Engineering", "ME129").
class("Mechanical Engineering", "ME130").
class("Mechanical Engineering", "ME163").
class("Mechanical Engineering", "ME211").
class("Mechanical Engineering", "ME212").
class("Mechanical Engineering", "ME234").
class("Mechanical Engineering", "ME236").
class("Mechanical Engineering", "ME251").
class("Mechanical Engineering", "ME302").
class("Mechanical Engineering", "ME303").
class("Mechanical Engineering", "ME318").
class("Mechanical Engineering", "ME322").
class("Mechanical Engineering", "ME328").
class("Mechanical Engineering", "ME329").
class("Mechanical Engineering", "ME341").
class("Mechanical Engineering", "ME343").
class("Mechanical Engineering", "ME347").
class("Mechanical Engineering", "ME448").
class("Mechanical Engineering", "CE204").
class("Mechanical Engineering", "CE207").
class("Mechanical Engineering", "CHEM124").
class("Mechanical Engineering", "CHEM125").
class("Mechanical Engineering", "CSC231").
class("Mechanical Engineering", "CSC234").
class("Mechanical Engineering", "EE201").
class("Mechanical Engineering", "EE251").
class("Mechanical Engineering", "EE321").
class("Mechanical Engineering", "EE361").
class("Mechanical Engineering", "IME142").
class("Mechanical Engineering", "IME145").
class("Mechanical Engineering", "IME146").
class("Mechanical Engineering", "IME143").
class("Mechanical Engineering", "MATE210").
class("Mechanical Engineering", "MATE215").
class("Mechanical Engineering", "MATH141").
class("Mechanical Engineering", "MATH142").
class("Mechanical Engineering", "MATH143").
class("Mechanical Engineering", "MATH241").
class("Mechanical Engineering", "MATH244").
class("Mechanical Engineering", "MATH344").
class("Mechanical Engineering", "PHYS141").
class("Mechanical Engineering", "PHYS142").
class("Mechanical Engineering", "PHYS143").
class("Mechanical Engineering", "IME141").
class("Mechanical Engineering", "ITP341").
class("Mechanical Engineering", "ME161").


major("Microbiology").

class("Microbiology", "BIO150").
class("Microbiology", "BIO161").
class("Microbiology", "BIO263").
class("Microbiology", "BIO351").
class("Microbiology", "BIO452").
class("Microbiology", "MCRO224").
class("Microbiology", "MCRO225").
class("Microbiology", "MCRO424").
class("Microbiology", "BIO461").
class("Microbiology", "BIO462").
class("Microbiology", "BIO426").
class("Microbiology", "BIO475").
class("Microbiology", "MCRO402").
class("Microbiology", "MCRO423").
class("Microbiology", "MCRO436").
class("Microbiology", "ASCI403").
class("Microbiology", "BIO202").
class("Microbiology", "BIO476").
class("Microbiology", "BRAE448").
class("Microbiology", "CHEM372").
class("Microbiology", "CHEM474").
class("Microbiology", "MCRO433").
class("Microbiology", "DSCI402").
class("Microbiology", "DSCI444").
class("Microbiology", "FSN230").
class("Microbiology", "FSN275").
class("Microbiology", "FSN335").
class("Microbiology", "FSN340").
class("Microbiology", "FSN364").
class("Microbiology", "FSN368").
class("Microbiology", "FSN374").
class("Microbiology", "MCRO301").
class("Microbiology", "MCRO421").
class("Microbiology", "ASCI321").
class("Microbiology", "BIO406").
class("Microbiology", "BIO407").
class("Microbiology", "BIO408").
class("Microbiology", "BIO409").
class("Microbiology", "BIO410").
class("Microbiology", "BIO428").
class("Microbiology", "BIO429").
class("Microbiology", "CHEM349").
class("Microbiology", "CHEM377").
class("Microbiology", "CHEM477").
class("Microbiology", "KINE301").
class("Microbiology", "MCRO320").
class("Microbiology", "MCRO342").
class("Microbiology", "BIO413").
class("Microbiology", "BIO414").
class("Microbiology", "SS422").
class("Microbiology", "BIO441").
class("Microbiology", "DATA301").
class("Microbiology", "STAT313").
class("Microbiology", "STAT419").
class("Microbiology", "STAT421").
class("Microbiology", "ASCI203").
class("Microbiology", "ASCI440").
class("Microbiology", "ASCI438").
class("Microbiology", "BIO162").
class("Microbiology", "BIO300").
class("Microbiology", "BIO335").
class("Microbiology", "BIO336").
class("Microbiology", "BIO361").
class("Microbiology", "BIO400").
class("Microbiology", "BIO412").
class("Microbiology", "BIO434").
class("Microbiology", "BIO450").
class("Microbiology", "BIO463").
class("Microbiology", "BOT323").
class("Microbiology", "CHEM218").
class("Microbiology", "CHEM223").
class("Microbiology", "CHEM331").
class("Microbiology", "CHEM341").
class("Microbiology", "CHEM418").
class("Microbiology", "ENVE434").
class("Microbiology", "MATH162").
class("Microbiology", "MCRO100").
class("Microbiology", "PLSC313").
class("Microbiology", "PLSC441").
class("Microbiology", "CHEM127").
class("Microbiology", "CHEM128").
class("Microbiology", "CHEM129").
class("Microbiology", "CHEM216").
class("Microbiology", "CHEM217").
class("Microbiology", "CHEM220").
class("Microbiology", "CHEM314").
class("Microbiology", "CHEM369").
class("Microbiology", "MATH161").
class("Microbiology", "PHYS121").
class("Microbiology", "PHYS122").
class("Microbiology", "PHYS123").
class("Microbiology", "STAT218").


major("Music").

class("Music", "MU103").
class("Music", "MU104").
class("Music", "MU105").
class("Music", "MU106").
class("Music", "MU108").
class("Music", "MU121").
class("Music", "MU303").
class("Music", "MU305").
class("Music", "MU311").
class("Music", "MU320").
class("Music", "MU325").
class("Music", "MU326").
class("Music", "MU336").
class("Music", "MU470").
class("Music", "MU331").
class("Music", "MU332").
class("Music", "MU431").
class("Music", "MU432").
class("Music", "MU461").
class("Music", "MU301").
class("Music", "MU312").
class("Music", "MU324").
class("Music", "MU328").
class("Music", "MU340").
class("Music", "MU341").
class("Music", "MU342").
class("Music", "MU352").
class("Music", "MU360").
class("Music", "MU411").
class("Music", "MU412").
class("Music", "MU465").
class("Music", "MU466").
class("Music", "MU168").
class("Music", "MU170").
class("Music", "MU171").
class("Music", "MU172").
class("Music", "MU173").
class("Music", "MU174").
class("Music", "MU177").
class("Music", "MU181").
class("Music", "MU182").
class("Music", "MU183").
class("Music", "MU185").
class("Music", "MU186").
class("Music", "MU188").
class("Music", "MU368").
class("Music", "MU370").
class("Music", "MU371").
class("Music", "MU372").
class("Music", "MU373").
class("Music", "MU374").
class("Music", "MU377").
class("Music", "MU381").
class("Music", "MU382").
class("Music", "MU383").
class("Music", "MU385").
class("Music", "MU386").
class("Music", "MU388").
class("Music", "MU150").
class("Music", "MU250").
class("Music", "MU350").
class("Music", "MU450").


major("Nutrition").

class("Nutrition", "FSN101").
class("Nutrition", "FSN121").
class("Nutrition", "FSN202").
class("Nutrition", "FSN250").
class("Nutrition", "FSN281").
class("Nutrition", "FSN310").
class("Nutrition", "FSN315").
class("Nutrition", "FSN319").
class("Nutrition", "FSN331").
class("Nutrition", "FSN332").
class("Nutrition", "FSN333").
class("Nutrition", "FSN381").
class("Nutrition", "FSN415").
class("Nutrition", "FSN416").
class("Nutrition", "FSN431").
class("Nutrition", "FSN432").
class("Nutrition", "FSN433").
class("Nutrition", "FSN461").
class("Nutrition", "FSN478").
class("Nutrition", "FSN481").
class("Nutrition", "FSN479").
class("Nutrition", "BIO161").
class("Nutrition", "BIO231").
class("Nutrition", "BIO232").
class("Nutrition", "CHEM127").
class("Nutrition", "CHEM128").
class("Nutrition", "CHEM312").
class("Nutrition", "CHEM216").
class("Nutrition", "CHEM314").
class("Nutrition", "CHEM369").
class("Nutrition", "MATH118").
class("Nutrition", "MCRO221").
class("Nutrition", "MCRO224").
class("Nutrition", "STAT218").


major("Philosophy").

class("Philosophy", "PHIL101").
class("Philosophy", "PHIL126").
class("Philosophy", "PHIL230").
class("Philosophy", "PHIL231").
class("Philosophy", "PHIL241").
class("Philosophy", "PHIL300").
class("Philosophy", "PHIL321").
class("Philosophy", "PHIL331").
class("Philosophy", "PHIL411").
class("Philosophy", "PHIL412").
class("Philosophy", "PHIL459").
class("Philosophy", "PHIL460").
class("Philosophy", "PHIL461").
class("Philosophy", "PHIL309").
class("Philosophy", "PHIL310").
class("Philosophy", "PHIL312").
class("Philosophy", "PHIL313").
class("Philosophy", "PHIL314").
class("Philosophy", "PHIL315").
class("Philosophy", "PHIL317").
class("Philosophy", "PHIL318").
class("Philosophy", "PHIL319").


major("Physics").

class("Physics", "PHYS141").
class("Physics", "PHYS142").
class("Physics", "PHYS143").
class("Physics", "PHYS202").
class("Physics", "PHYS206").
class("Physics", "PHYS211").
class("Physics", "PHYS212").
class("Physics", "PHYS301").
class("Physics", "PHYS305").
class("Physics", "PHYS320").
class("Physics", "PHYS321").
class("Physics", "PHYS340").
class("Physics", "PHYS341").
class("Physics", "PHYS405").
class("Physics", "PHYS408").
class("Physics", "PHYS461").
class("Physics", "PHYS462").
class("Physics", "CHEM124").
class("Physics", "CHEM125").
class("Physics", "MATH141").
class("Physics", "MATH142").
class("Physics", "MATH143").
class("Physics", "MATH206").
class("Physics", "MATH241").
class("Physics", "MATH242").


major("Plant Sciences").

class("Plant Sciences", "PLSC101").
class("Plant Sciences", "UNIV100").
class("Plant Sciences", "PLSC120").
class("Plant Sciences", "PLSC124").
class("Plant Sciences", "PLSC304").
class("Plant Sciences", "PLSC313").
class("Plant Sciences", "PLSC321").
class("Plant Sciences", "PLSC323").
class("Plant Sciences", "PLSC350").
class("Plant Sciences", "PLSC351").
class("Plant Sciences", "PLSC410").
class("Plant Sciences", "PLSC461").
class("Plant Sciences", "PLSC462").
class("Plant Sciences", "BOT121").
class("Plant Sciences", "SS120").
class("Plant Sciences", "BRAE340").
class("Plant Sciences", "CHEM127").
class("Plant Sciences", "CHEM128").
class("Plant Sciences", "MATH118").
class("Plant Sciences", "SPAN101").
class("Plant Sciences", "SPAN102").
class("Plant Sciences", "SPAN103").
class("Plant Sciences", "SPAN111").
class("Plant Sciences", "SS221").
class("Plant Sciences", "STAT218").


major("Political Science").

class("Political Science", "POLS112").
class("Political Science", "POLS180").
class("Political Science", "POLS225").
class("Political Science", "POLS229").
class("Political Science", "POLS230").
class("Political Science", "POLS359").
class("Political Science", "POLS361").
class("Political Science", "POLS461").
class("Political Science", "POLS462").
class("Political Science", "POLS308").
class("Political Science", "POLS310").
class("Political Science", "POLS343").
class("Political Science", "POLS380").
class("Political Science", "POLS417").
class("Political Science", "POLS419").
class("Political Science", "POLS445").
class("Political Science", "POLS457").
class("Political Science", "POLS459").
class("Political Science", "ANT201").
class("Political Science", "GEOG150").
class("Political Science", "HIST110").
class("Political Science", "HIST111").
class("Political Science", "HIST222").
class("Political Science", "HIST223").
class("Political Science", "SOC110").
class("Political Science", "STAT217").


major("Public Health").

class("Public Health", "HLTH101").
class("Public Health", "HLTH255").
class("Public Health", "HLTH260").
class("Public Health", "HLTH265").
class("Public Health", "HLTH298").
class("Public Health", "HLTH305").
class("Public Health", "HLTH310").
class("Public Health", "HLTH318").
class("Public Health", "HLTH320").
class("Public Health", "HLTH334").
class("Public Health", "HLTH402").
class("Public Health", "HLTH405").
class("Public Health", "HLTH410").
class("Public Health", "HLTH434").
class("Public Health", "HLTH435").
class("Public Health", "HLTH453").
class("Public Health", "HLTH460").
class("Public Health", "HLTH461").
class("Public Health", "HLTH462").
class("Public Health", "HLTH463").
class("Public Health", "ANT201").
class("Public Health", "ANT250").
class("Public Health", "ANT360").
class("Public Health", "ANT425").
class("Public Health", "ISLA303").
class("Public Health", "ISLA320").
class("Public Health", "WGQS301").
class("Public Health", "BIO123").
class("Public Health", "BIO162").
class("Public Health", "BIO302").
class("Public Health", "BIO303").
class("Public Health", "BIO305").
class("Public Health", "CHEM128").
class("Public Health", "CHEM129").
class("Public Health", "CHEM216").
class("Public Health", "CHEM217").
class("Public Health", "CHEM218").
class("Public Health", "CHEM312").
class("Public Health", "CHEM314").
class("Public Health", "MCRO225").
class("Public Health", "MCRO320").
class("Public Health", "MCRO342").
class("Public Health", "MCRO421").
class("Public Health", "PHYS121").
class("Public Health", "PHYS122").
class("Public Health", "COMS211").
class("Public Health", "COMS213").
class("Public Health", "COMS301").
class("Public Health", "COMS313").
class("Public Health", "COMS316").
class("Public Health", "COMS418").
class("Public Health", "JOUR219").
class("Public Health", "JOUR312").
class("Public Health", "JOUR412").
class("Public Health", "CRP212").
class("Public Health", "CRP214").
class("Public Health", "CRP215").
class("Public Health", "CRP325").
class("Public Health", "CRP426").
class("Public Health", "NR218").
class("Public Health", "FSN310").
class("Public Health", "FSN315").
class("Public Health", "HLTH297").
class("Public Health", "HLTH450").
class("Public Health", "HLTH201").
class("Public Health", "HLTH400").
class("Public Health", "KINE303").
class("Public Health", "KINE304").
class("Public Health", "KINE349").
class("Public Health", "KINE408").
class("Public Health", "POLS310").
class("Public Health", "POLS332").
class("Public Health", "POLS351").
class("Public Health", "POLS451").
class("Public Health", "POLS459").
class("Public Health", "RPTA450").
class("Public Health", "PSY252").
class("Public Health", "PSY256").
class("Public Health", "PSY302").
class("Public Health", "PSY310").
class("Public Health", "PSY311").
class("Public Health", "PSY318").
class("Public Health", "PSY320").
class("Public Health", "PSY330").
class("Public Health", "PSY340").
class("Public Health", "PSY344").
class("Public Health", "PSY372").
class("Public Health", "PSY405").
class("Public Health", "SOC326").
class("Public Health", "SPAN101").
class("Public Health", "SPAN111").
class("Public Health", "SPAN102").
class("Public Health", "SPAN103").
class("Public Health", "SPAN104").
class("Public Health", "SPAN201").
class("Public Health", "SPAN202").
class("Public Health", "SPAN203").
class("Public Health", "STAT323").
class("Public Health", "STAT324").
class("Public Health", "STAT330").
class("Public Health", "STAT331").
class("Public Health", "ANT201").
class("Public Health", "SOC110").
class("Public Health", "BIO161").
class("Public Health", "BIO231").
class("Public Health", "BIO232").
class("Public Health", "CHEM127").
class("Public Health", "FSN202").
class("Public Health", "MCRO221").
class("Public Health", "MCRO224").
class("Public Health", "PSY201").
class("Public Health", "PSY202").
class("Public Health", "STAT218").
class("Public Health", "STAT313").


major("Psychology").

class("Psychology", "PSY102").
class("Psychology", "PSY201").
class("Psychology", "PSY202").
class("Psychology", "PSY252").
class("Psychology", "PSYCD256").
class("Psychology", "PSY323").
class("Psychology", "PSY329").
class("Psychology", "PSY333").
class("Psychology", "PSY340").
class("Psychology", "PSY372").
class("Psychology", "PSY330").
class("Psychology", "PSY357").
class("Psychology", "PSY430").
class("Psychology", "PSY440").
class("Psychology", "PSY458").
class("Psychology", "PSY480").
class("Psychology", "PSY302").
class("Psychology", "PSY305").
class("Psychology", "PSY350").
class("Psychology", "PSY352").
class("Psychology", "PSY360").
class("Psychology", "PSY465").
class("Psychology", "PSY475").
class("Psychology", "PSY318").
class("Psychology", "PSY320").
class("Psychology", "PSY325").
class("Psychology", "PSY370").
class("Psychology", "PSY375").
class("Psychology", "PSY405").
class("Psychology", "PSYCD460").
class("Psychology", "PSY448").
class("Psychology", "PSY449").
class("Psychology", "PSY453").
class("Psychology", "PSY454").
class("Psychology", "PSY461").
class("Psychology", "PSY462").
class("Psychology", "ASCI112").
class("Psychology", "BIO111").
class("Psychology", "BIO123").
class("Psychology", "BIO161").
class("Psychology", "BIO302").
class("Psychology", "PSY344").
class("Psychology", "STAT217").
class("Psychology", "CD424").
class("Psychology", "ES320").
class("Psychology", "ES321").
class("Psychology", "ES322").
class("Psychology", "ES323").
class("Psychology", "ESWGQS350").
class("Psychology", "ES380").
class("Psychology", "ES381").
class("Psychology", "PSY260").
class("Psychology", "PSY304").
class("Psychology", "PSYWGQS324").
class("Psychology", "WGQS301").
class("Psychology", "WGQS320").
class("Psychology", "WGQS340").
class("Psychology", "WGQSRELS370").


major("Recreation, Parks, and Tourism Administration").

class("Recreation, Parks, and Tourism Administration", "RPTA101").
class("Recreation, Parks, and Tourism Administration", "RPTA110").
class("Recreation, Parks, and Tourism Administration", "RPTA121").
class("Recreation, Parks, and Tourism Administration", "RPTA210").
class("Recreation, Parks, and Tourism Administration", "RPTA255").
class("Recreation, Parks, and Tourism Administration", "RPTA313").
class("Recreation, Parks, and Tourism Administration", "RPTA413").
class("Recreation, Parks, and Tourism Administration", "RPTA342").
class("Recreation, Parks, and Tourism Administration", "RPTA360").
class("Recreation, Parks, and Tourism Administration", "RPTA370").
class("Recreation, Parks, and Tourism Administration", "RPTA405").
class("Recreation, Parks, and Tourism Administration", "RPTA416").
class("Recreation, Parks, and Tourism Administration", "RPTA424").
class("Recreation, Parks, and Tourism Administration", "RPTA460").
class("Recreation, Parks, and Tourism Administration", "RPTA463").
class("Recreation, Parks, and Tourism Administration", "RPTA465").
class("Recreation, Parks, and Tourism Administration", "BUS212").
class("Recreation, Parks, and Tourism Administration", "AGB214").
class("Recreation, Parks, and Tourism Administration", "BUS215").
class("Recreation, Parks, and Tourism Administration", "AGB323").
class("Recreation, Parks, and Tourism Administration", "BUS346").
class("Recreation, Parks, and Tourism Administration", "ECON201").
class("Recreation, Parks, and Tourism Administration", "ECON222").
class("Recreation, Parks, and Tourism Administration", "ENGL310").
class("Recreation, Parks, and Tourism Administration", "MATH118").
class("Recreation, Parks, and Tourism Administration", "MATH119").
class("Recreation, Parks, and Tourism Administration", "MATH221").
class("Recreation, Parks, and Tourism Administration", "STAT217").
class("Recreation, Parks, and Tourism Administration", "STAT251").


major("Sociology").

class("Sociology", "SOC110").
class("Sociology", "SOC111").
class("Sociology", "SOC216").
class("Sociology", "SOC218").
class("Sociology", "SOC222").
class("Sociology", "SOC305").
class("Sociology", "SOC327").
class("Sociology", "SOC308").
class("Sociology", "SOC435").
class("Sociology", "SOC311").
class("Sociology", "SOC323").
class("Sociology", "SOC354").
class("Sociology", "SOC355").
class("Sociology", "SOC461").
class("Sociology", "SOC462").
class("Sociology", "SOC_Electives").
class("Sociology", "STAT217").
class("Sociology", "ANT201").
class("Sociology", "GEOG150").


major("Software Engineering").

class("Software Engineering", "CSC101").
class("Software Engineering", "CSC202").
class("Software Engineering", "CSC123").
class("Software Engineering", "CSC203").
class("Software Engineering", "CSC225").
class("Software Engineering", "CSC248").
class("Software Engineering", "CSC300").
class("Software Engineering", "CSC305").
class("Software Engineering", "CSC308").
class("Software Engineering", "CSC309").
class("Software Engineering", "CSC349").
class("Software Engineering", "CSC357").
class("Software Engineering", "CSC365").
class("Software Engineering", "CSC402").
class("Software Engineering", "CSC405").
class("Software Engineering", "CSC406").
class("Software Engineering", "CSC430").
class("Software Engineering", "CSC484").
class("Software Engineering", "IME314").
class("Software Engineering", "IME315").
class("Software Engineering", "MATH141").
class("Software Engineering", "MATH142").
class("Software Engineering", "MATH143").
class("Software Engineering", "MATH241").
class("Software Engineering", "MATH244").
class("Software Engineering", "PHIL230").
class("Software Engineering", "PHIL231").
class("Software Engineering", "PSY201").
class("Software Engineering", "PSY202").
class("Software Engineering", "PSY350").
class("Software Engineering", "COMS217").
class("Software Engineering", "STAT312").
class("Software Engineering", "BIO111").
class("Software Engineering", "BIO161").
class("Software Engineering", "BIO213").
class("Software Engineering", "BMED213").
class("Software Engineering", "BOT121").
class("Software Engineering", "MCRO221").
class("Software Engineering", "MCRO224").
class("Software Engineering", "MATH248").
class("Software Engineering", "MATH334").
class("Software Engineering", "MATH335").
class("Software Engineering", "MATH451").
class("Software Engineering", "CHEM124").
class("Software Engineering", "CHEM125").
class("Software Engineering", "CHEM126").
class("Software Engineering", "PHYS141").
class("Software Engineering", "PHYS142").
class("Software Engineering", "PHYS143").


major("Spanish").

class("Spanish", "SPAN201").
class("Spanish", "SPAN202").
class("Spanish", "SPAN203").
class("Spanish", "SPAN206").
class("Spanish", "SPAN207").
class("Spanish", "SPAN233").
class("Spanish", "SPAN301").
class("Spanish", "SPAN302").
class("Spanish", "SPAN303").
class("Spanish", "SPAN305").
class("Spanish", "SPAN307").
class("Spanish", "SPAN340").
class("Spanish", "SPAN380").
class("Spanish", "SPAN390").
class("Spanish", "SPAN402").
class("Spanish", "SPAN410").
class("Spanish", "SPAN416").
class("Spanish", "SPAN470").
class("Spanish", "WLC360").
class("Spanish", "WLC460").


major("Wine and Viticulture").

class("Wine and Viticulture", "WVIT102").
class("Wine and Viticulture", "WVIT202").
class("Wine and Viticulture", "WVIT233").
class("Wine and Viticulture", "WVIT331").
class("Wine and Viticulture", "WVIT339").
class("Wine and Viticulture", "WVIT343").
class("Wine and Viticulture", "WVIT423").
class("Wine and Viticulture", "WVIT442").
class("Wine and Viticulture", "WVIT463").
class("Wine and Viticulture", "AGB214").
class("Wine and Viticulture", "BOT121").
class("Wine and Viticulture", "BRAE340").
class("Wine and Viticulture", "CHEM127").
class("Wine and Viticulture", "ECON222").
class("Wine and Viticulture", "MATH161").
class("Wine and Viticulture", " MATH141").
class("Wine and Viticulture", "MATH221").
class("Wine and Viticulture", "SS120").
class("Wine and Viticulture", "STAT218").
class("Wine and Viticulture", "MATH118").


major("Statistics").

class("Statistics", "STAT150").
class("Statistics", "MATH141").
class("Statistics", "MATH142").
class("Statistics", "MATH143").
class("Statistics", "MATH206").
class("Statistics", "MATH241").
class("Statistics", "STAT301").
class("Statistics", "STAT302").
class("Statistics", "STAT305").
class("Statistics", "STAT323").
class("Statistics", "STAT330").
class("Statistics", "STAT331").
class("Statistics", "STAT334").
class("Statistics", "STAT365").
class("Statistics", "STAT425").
class("Statistics", "STAT426").
class("Statistics", "STAT427").
class("Statistics", "STAT466").
class("Statistics", "STAT405").
class("Statistics", "STAT414").
class("Statistics", "STAT415").
class("Statistics", "STAT416").
class("Statistics", "STAT417").
class("Statistics", "STAT418").
class("Statistics", "STAT419").
class("Statistics", "STAT421").
class("Statistics", "STAT423").
class("Statistics", "STAT434").
class("Statistics", "STAT543").
class("Statistics", "STAT545").
class("Statistics", "STAT550").
class("Statistics", "STAT551").
class("Statistics", "CSC202").
class("Statistics", "CSC203").
class("Statistics", "CSC248").
class("Statistics", "CSC349").
class("Statistics", "CSC365").
class("Statistics", "CSC369").
class("Statistics", "DATA301").
class("Statistics", "IME430").
class("Statistics", "ITP303").
class("Statistics", "MATH242").
class("Statistics", "MATH306").
class("Statistics", "MATH334").
class("Statistics", "MATH335").
class("Statistics", "MATH406").
class("Statistics", "MATH412").
class("Statistics", "MATH413").
class("Statistics", "MATH414").
class("Statistics", "MATH437").
class("Statistics", "MATH451").
class("Statistics", "STAT541").
class("Statistics", "CSC101").
class("Statistics", "MATH248").


major("Theatre Arts").

class("Theatre Arts", "TH201").
class("Theatre Arts", "TH220").
class("Theatre Arts", "TH225").
class("Theatre Arts", "TH227").
class("Theatre Arts", "TH228").
class("Theatre Arts", "TH230").
class("Theatre Arts", "TH290").
class("Theatre Arts", "TH295").
class("Theatre Arts", "TH305").
class("Theatre Arts", "TH325").
class("Theatre Arts", "TH330").
class("Theatre Arts", "TH345").
class("Theatre Arts", "TH355").
class("Theatre Arts", "TH350").
class("Theatre Arts", "TH430").
class("Theatre Arts", "TH432").
class("Theatre Arts", "TH450").
class("Theatre Arts", "TH461").
class("Theatre Arts", "TH215").
class("Theatre Arts", "TH235").
class("Theatre Arts", "TH240").
class("Theatre Arts", "TH245").
class("Theatre Arts", "TH255").
class("Theatre Arts", "TH256").
class("Theatre Arts", "TH260").
class("Theatre Arts", "TH265").
class("Theatre Arts", "TH270").
class("Theatre Arts", "TH275").
class("Theatre Arts", "TH280").
class("Theatre Arts", "TH285").
class("Theatre Arts", "TH315").
class("Theatre Arts", "TH370").
class("Theatre Arts", "TH380").
class("Theatre Arts", "TH390").
class("Theatre Arts", "TH400").
class("Theatre Arts", "TH425").
class("Theatre Arts", "TH434").
class("Theatre Arts", "TH470").
class("Theatre Arts", "TH471").
class("Theatre Arts", "TH480").
class("Theatre Arts", "ENGL339").

prerequisite("AERO215", ["AERO121", "MATH143", "IME144"]).
prerequisite("AERO220", ["AERO121"]).
prerequisite("AERO299", ["ME212", "AERO300", "AERO215"]).
prerequisite("AERO300", ["AERO215", "MATH244", "ME211", "PHYS133"]).
prerequisite("AERO300", ["PHYS143"]).
prerequisite("AERO302", ["ME212", "AERO300", "AERO215", "AERO299"]).
prerequisite("AERO302", ["ME212", "AERO300", "AERO215", "AERO301"]).
prerequisite("AERO303", ["AERO299", "AERO302"]).
prerequisite("AERO303", ["AERO301", "AERO302"]).
prerequisite("AERO306", ["AERO215"]).
prerequisite("AERO307", ["AERO302", "AERO306"]).
prerequisite("AERO320", ["AERO300", "ME212"]).
prerequisite("AERO321", ["AERO300", "EE201", "EE251"]).
prerequisite("AERO331", ["AERO300", "CE207"]).
prerequisite("AERO331", ["CE208", "ME212"]).
prerequisite("AERO350", ["AERO220"]).
prerequisite("AERO351", ["AERO300", "ME212"]).
prerequisite("AERO354", ["AERO353", "ENGL149"]).
prerequisite("AERO354", ["AERO355", "ENGL149"]).
prerequisite("AERO355", ["AERO300"]).
prerequisite("AERO356", ["AERO299", "AERO355"]).
prerequisite("AERO356", ["AERO301", "AERO355"]).
prerequisite("AERO360", ["PSY350"]).
prerequisite("AERO401", ["AERO303", "CHEM124"]).
prerequisite("AERO402", ["AERO303"]).
prerequisite("AERO405", ["AERO303"]).
prerequisite("AERO406", ["AERO302", "AERO306"]).
prerequisite("AERO407", ["AERO303"]).
prerequisite("AERO408", ["PHYS123"]).
prerequisite("AERO408", ["PHYS133"]).
prerequisite("AERO408", ["PHYS143"]).
prerequisite("AERO409", ["AERO306", "AERO320"]).
prerequisite("AERO420", ["AERO306", "AERO320"]).
prerequisite("AERO421", ["AERO320", "AERO351"]).
prerequisite("AERO425", ["ME212", "AERO306", "AERO300"]).
prerequisite("AERO431", ["AERO331"]).
prerequisite("AERO432", ["AERO331"]).
prerequisite("AERO433", ["AERO331", "AERO431"]).
prerequisite("AERO434", ["AERO431"]).
prerequisite("AERO435", ["AERO300", "AERO331"]).
prerequisite("AERO443", ["IME144"]).
prerequisite("AERO444", ["AERO443"]).
prerequisite("AERO445", ["AERO444"]).
prerequisite("AERO446", ["AERO353"]).
prerequisite("AERO446", ["AERO355"]).
prerequisite("AERO447", ["IME144"]).
prerequisite("AERO448", ["AERO447"]).
prerequisite("AERO449", ["AERO448"]).
prerequisite("AERO452", ["AERO351"]).
prerequisite("AERO455", ["AERO443"]).
prerequisite("AERO455", ["AERO447"]).
prerequisite("AERO455", ["AERO351"]).
prerequisite("AERO465", ["AERO303", "AERO320", "AERO431"]).
prerequisite("AERO513", ["AERO306"]).
prerequisite("AERO513", ["AERO351"]).
prerequisite("AERO522", ["AERO302"]).
prerequisite("AERO525", ["AERO303"]).
prerequisite("AERO526", ["AERO299"]).
prerequisite("AERO526", ["AERO301"]).
prerequisite("AERO533", ["AERO431"]).
prerequisite("AERO540", ["AERO303", "AERO401"]).
prerequisite("AERO541", ["AERO401"]).
prerequisite("AERO549", ["AERO450"]).
prerequisite("AERO553", ["AERO320"]).
prerequisite("AERO557", ["AERO351"]).
prerequisite("AERO560", ["AERO421"]).
prerequisite("AERO561", ["AERO350"]).
prerequisite("AERO561", ["AERO446"]).
prerequisite("AERO562", ["AERO350"]).
prerequisite("AERO562", ["AERO446"]).
prerequisite("AERO565", ["AERO445"]).
prerequisite("AERO566", ["AERO449"]).
prerequisite("AERO568", ["AERO302", "AERO406"]).
prerequisite("AERO569", ["AERO568"]).
prerequisite("AGB301", ["AGB212"]).
prerequisite("AGB301", ["ECON221"]).
prerequisite("AGB304", ["AGB212", "ECON201"]).
prerequisite("AGB304", ["ECON221"]).
prerequisite("AGB308", ["AGB214", "AGB260"]).
prerequisite("AGB309", ["AGB202"]).
prerequisite("AGB310", ["AGB214"]).
prerequisite("AGB310", ["BUS212"]).
prerequisite("AGB310", ["BUS214"]).
prerequisite("AGB311", ["AGB260", "AGB310"]).
prerequisite("AGB312", ["AGB212", "ECON222"]).
prerequisite("AGB313", ["AGB212", "MATH221"]).
prerequisite("AGB318", ["AGB301"]).
prerequisite("AGB322", ["AGB212", "AGB214"]).
prerequisite("AGB323", ["AGB214"]).
prerequisite("AGB326", ["AGB308"]).
prerequisite("AGB326", ["AGB310"]).
prerequisite("AGB327", ["STAT251", "AGB260"]).
prerequisite("AGB328", ["STAT251", "AGB260"]).
prerequisite("AGB335", ["AGB308", "AGB323"]).
prerequisite("AGB335", ["AGB310", "AGB323"]).
prerequisite("AGB369", ["AGB212"]).
prerequisite("AGB369", ["ECON201"]).
prerequisite("AGB369", ["ECON221"]).
prerequisite("AGB370", ["AGB312", "AGB313"]).
prerequisite("AGB404", ["AGB301"]).
prerequisite("AGB405", ["AGB301", "AGB327"]).
prerequisite("AGB406", ["AGB301", "AGB327"]).
prerequisite("AGB406", ["AGB301", "AGB328"]).
prerequisite("AGB411", ["AGB301"]).
prerequisite("AGB412", ["AGB312"]).
prerequisite("AGB422", ["AGB328"]).
prerequisite("AGB425", ["AGB323", "AGB327"]).
prerequisite("AGB425", ["AGB323", "AGB328"]).
prerequisite("AGB427", ["AGB327"]).
prerequisite("AGB427", ["AGB328"]).
prerequisite("AGB445", ["AGB301"]).
prerequisite("AGB450", ["AGB323", "AGB327"]).
prerequisite("AGB450", ["AGB323", "AGB328"]).
prerequisite("AGB452", ["AGB313"]).
prerequisite("AGC225", ["AGC207"]).
prerequisite("AGC290", ["AGC205", "JOUR203"]).
prerequisite("AGC290", ["JOUR205"]).
prerequisite("AGC301", ["JOUR203", "JOUR205"]).
prerequisite("AGC314", ["AGB314"]).
prerequisite("AGC318", ["AGC314"]).
prerequisite("AGC404", ["AGED404"]).
prerequisite("AGC407", ["JOUR205", "AGC207"]).
prerequisite("AGC425", ["AGC225", "COMS395", "JOUR203", "JOUR205", "JOUR312"]).
prerequisite("AGC454", ["AGC404"]).
prerequisite("AGC461", ["AGED460"]).
prerequisite("AGC462", ["AGC461"]).
prerequisite("AGC463", ["AG452", "AGC452"]).
prerequisite("AGC463", ["PLSC329"]).
prerequisite("AGC490", ["AGC205", "AGC207", "AGC301", "JOUR312"]).
prerequisite("AGED410", ["AGED303"]).
prerequisite("AGED424", ["AGED438"]).
prerequisite("AGED461", ["AGED460"]).
prerequisite("AGED462", ["AGED461"]).
prerequisite("AGED524", ["EDUC412", "EDUC414", "EDUC418", "AGED303", "AGED350"]).
prerequisite("AGED525", ["PLSC120"]).
prerequisite("AGED525", ["PLSC230"]).
prerequisite("AGED537", ["AGED438"]).
prerequisite("AGED540", ["AGED524"]).
prerequisite("AG410", ["AG210"]).
prerequisite("AG413", ["AG412"]).
prerequisite("ASCI203", ["BIO111"]).
prerequisite("ASCI203", ["BIO161"]).
prerequisite("ASCI220", ["BIO111", "CHEM127"]).
prerequisite("ASCI220", ["BIO161", "CHEM127"]).
prerequisite("ASCI229", ["BIO111"]).
prerequisite("ASCI229", ["BIO161"]).
prerequisite("ASCI302", ["BIO111", "STAT218"]).
prerequisite("ASCI302", ["BIO161", "STAT218"]).
prerequisite("ASCI304", ["ASCI302", "BIO302", "BIO303"]).
prerequisite("ASCI304", ["BIO351"]).
prerequisite("ASCI310", ["ASCI229"]).
prerequisite("ASCI311", ["ASCI221"]).
prerequisite("ASCI312", ["ASCI221"]).
prerequisite("ASCI312", ["ASCI223"]).
prerequisite("ASCI315", ["ASCI224"]).
prerequisite("ASCI321", ["BIO111"]).
prerequisite("ASCI321", ["BIO161"]).
prerequisite("ASCI324", ["ASCI228"]).
prerequisite("ASCI325", ["ASCI225"]).
prerequisite("ASCI326", ["ASCI112", "ASCI226"]).
prerequisite("ASCI330", ["ASCI211"]).
prerequisite("ASCI330", ["ASCI225"]).
prerequisite("ASCI333", ["ASCI224"]).
prerequisite("ASCI340", ["BIO111"]).
prerequisite("ASCI340", ["BIO161"]).
prerequisite("ASCI342", ["ASCI225"]).
prerequisite("ASCI344", ["ASCI214"]).
prerequisite("ASCI345", ["ASCI344"]).
prerequisite("ASCI346", ["ASCI220"]).
prerequisite("ASCI347", ["ASCI224"]).
prerequisite("ASCI350", ["ASCI220"]).
prerequisite("ASCI351", ["ASCI229"]).
prerequisite("ASCI355", ["ASCI220", "ASCI319", "ASCI320", "CHEM313", "CHEM314", "CHEM369"]).
prerequisite("ASCI355", ["ASCI220", "CHEM371"]).
prerequisite("ASCI355", ["ASCI319", "ASCI320", "CHEM313", "CHEM314", "CHEM369"]).
prerequisite("ASCI355", ["CHEM371"]).
prerequisite("ASCI366", ["CHEM111"]).
prerequisite("ASCI366", ["CHEM127", "ASCI229"]).
prerequisite("ASCI370", ["ASCI239"]).
prerequisite("ASCI370", ["ASCI329"]).
prerequisite("ASCI372", ["ASCI239"]).
prerequisite("ASCI372", ["ASCI329"]).
prerequisite("ASCI403", ["BIO161"]).
prerequisite("ASCI405", ["ASCI229"]).
prerequisite("ASCI405", ["BIO361"]).
prerequisite("ASCI406", ["ASCI229", "ASCI351"]).
prerequisite("ASCI407", ["ASCI229"]).
prerequisite("ASCI410", ["BIO111", "ASCI229"]).
prerequisite("ASCI410", ["BIO111", "BIO162"]).
prerequisite("ASCI410", ["BIO161", "ASCI229"]).
prerequisite("ASCI410", ["BIO161", "BIO162"]).
prerequisite("ASCI412", ["ASCI212", "AGB314"]).
prerequisite("ASCI413", ["ASCI412"]).
prerequisite("ASCI415", ["ASCI211"]).
prerequisite("ASCI419", ["ASCI220", "ASCI319", "ASCI320", "CHEM313", "CHEM314", "CHEM369"]).
prerequisite("ASCI419", ["ASCI220", "CHEM371"]).
prerequisite("ASCI419", ["ASCI319", "ASCI320", "CHEM313", "CHEM314", "CHEM369"]).
prerequisite("ASCI419", ["CHEM371"]).
prerequisite("ASCI425", ["ASCI211"]).
prerequisite("ASCI438", ["ASCI229", "ASCI319", "ASCI320", "CHEM313", "CHEM314", "CHEM369"]).
prerequisite("ASCI438", ["ASCI229", "CHEM371"]).
prerequisite("ASCI440", ["ASCI229", "ASCI319", "ASCI320", "CHEM313", "CHEM314", "CHEM369"]).
prerequisite("ASCI440", ["CHEM371"]).
prerequisite("ASCI455", ["ASCI333", "ASCI351", "ASCI405", "ASCI406"]).
prerequisite("ASCI460", ["ASCI239"]).
prerequisite("ASCI460", ["ASCI329"]).
prerequisite("ASCI465", ["ASCI239"]).
prerequisite("ASCI465", ["ASCI329"]).
prerequisite("ASCI477", ["ASCI363"]).
prerequisite("ASCI478", ["ASCI363"]).
prerequisite("ASCI479", ["ASCI363"]).
prerequisite("ASCI484", ["ASCI211", "FSN204"]).
prerequisite("ASCI520", ["ASCI319", "ASCI320", "CHEM313", "CHEM314", "CHEM369", "ASCI346", "ASCI350", "ASCI355"]).
prerequisite("ASCI520", ["ASCI319", "ASCI320", "CHEM313", "CHEM314", "CHEM369", "DSCI301"]).
prerequisite("ASCI520", ["CHEM371", "ASCI346", "ASCI350", "ASCI355"]).
prerequisite("ASCI520", ["CHEM371", "DSCI301"]).
prerequisite("ANT309", ["ANT202"]).
prerequisite("ANT310", ["ANT202"]).
prerequisite("ANT310", ["ANT309"]).
prerequisite("ANT311", ["ANT309"]).
prerequisite("ANT311", ["ANT310"]).
prerequisite("ANT312", ["ANT201", "ANT202"]).
prerequisite("ANT312", ["ANT309"]).
prerequisite("ANT320", ["ANT202"]).
prerequisite("ANT401", ["ANT201", "ANT250", "BIO150", "BIO160"]).
prerequisite("ANT401", ["BIO263"]).
prerequisite("ANT465", ["ANT384"]).
prerequisite("ANT465", ["ANT464"]).
prerequisite("ARCE211", ["PHYS141", "MATH142"]).
prerequisite("ARCE212", ["ARCE211"]).
prerequisite("ARCE223", ["ARCE212"]).
prerequisite("ARCE223", ["ARCE224"]).
prerequisite("ARCE226", ["ARCE212"]).
prerequisite("ARCE227", ["ARCE212"]).
prerequisite("ARCE257", ["CM115"]).
prerequisite("ARCE302", ["ARCE223", "ARCE227"]).
prerequisite("ARCE302", ["ARCE352"]).
prerequisite("ARCE303", ["ARCE223"]).
prerequisite("ARCE303", ["ARCE371", "ARCE226"]).
prerequisite("ARCE304", ["ARCE371"]).
prerequisite("ARCE305", ["ARCE371"]).
prerequisite("ARCE306", ["ARCE302"]).
prerequisite("ARCE306", ["ARCE353"]).
prerequisite("ARCE315", ["ARCE226"]).
prerequisite("ARCE316", ["ARCE315", "ARCH353"]).
prerequisite("ARCE352", ["CSC231"]).
prerequisite("ARCE352", ["CSC234", "ARCE302"]).
prerequisite("ARCE353", ["ARCE352"]).
prerequisite("ARCE353", ["ARCE306"]).
prerequisite("ARCE354", ["MATH244", "ARCE353"]).
prerequisite("ARCE354", ["ARCE412"]).
prerequisite("ARCE371", ["ARCE223", "ARCE227"]).
prerequisite("ARCE372", ["ARCE257", "ARCE302", "ARCE303", "ARCE352", "ARCE371"]).
prerequisite("ARCE412", ["ME212"]).
prerequisite("ARCE421", ["ARCE212"]).
prerequisite("ARCE421", ["GEOL201"]).
prerequisite("ARCE422", ["ARCE421"]).
prerequisite("ARCE444", ["ARCE371", "ARCE302"]).
prerequisite("ARCE451", ["ARCE257", "ARCE304", "ARCE305", "ARCE371"]).
prerequisite("ARCE452", ["ARCE257", "ARCE444", "ARCE372"]).
prerequisite("ARCE452", ["ARCE451"]).
prerequisite("ARCE473", ["ARCE372", "ARCE422", "ARCE444", "ARCE451"]).
prerequisite("ARCE483", ["ARCE372", "ARCE412"]).
prerequisite("ARCE501", ["ARCE306", "ARCE353"]).
prerequisite("ARCE502", ["ARCE306", "ARCE353"]).
prerequisite("ARCE503", ["ARCE502"]).
prerequisite("ARCE504", ["MATH244", "ARCE306", "ARCE501"]).
prerequisite("ARCE511", ["ARCE452", "ARCE503", "ARCE504"]).
prerequisite("ARCE546", ["ARCE371"]).
prerequisite("ARCE546", ["ARCE412"]).
prerequisite("ARCE548", ["ARCE303", "ARCE304", "ARCE305", "ARCE412", "ARCE444"]).
prerequisite("ARCE598", ["ARCE371", "ARCE372", "ARCE452", "ARCE483"]).
prerequisite("ARCH132", ["ARCH131"]).
prerequisite("ARCH133", ["ARCH132"]).
prerequisite("ARCH207", ["ARCH242", "ARCH253"]).
prerequisite("ARCH241", ["ARCH133", "ARCH251"]).
prerequisite("ARCH242", ["ARCH241", "ARCH252"]).
prerequisite("ARCH251", ["ARCH133", "ARCH241"]).
prerequisite("ARCH252", ["ARCH251", "ARCH241", "ARCH242"]).
prerequisite("ARCH253", ["ARCH252", "ARCH242", "ARCH207"]).
prerequisite("ARCH307", ["ARCH341", "ARCH352"]).
prerequisite("ARCH313", ["ARCH253"]).
prerequisite("ARCH341", ["ARCH207", "ARCH253", "ARCH351"]).
prerequisite("ARCH342", ["ARCH307", "ARCH353"]).
prerequisite("ARCH351", ["ARCE212", "ARCH253", "ARCH207", "PHYS122"]).
prerequisite("ARCH351", ["PHYS132"]).
prerequisite("ARCH351", ["PHYS142"]).
prerequisite("ARCH351", ["ARCH341"]).
prerequisite("ARCH352", ["ARCH351", "ARCH341", "ARCH307"]).
prerequisite("ARCH353", ["ARCH352", "ARCH307", "ARCH342"]).
prerequisite("ARCH420", ["ARCH217"]).
prerequisite("ARCH443", ["ARCH342", "ARCH353"]).
prerequisite("ARCH451", ["ARCE316", "ARCH353", "ARCH342"]).
prerequisite("ARCH452", ["ARCE316", "ARCH353", "ARCH342"]).
prerequisite("ARCH453", ["ARCE316", "ARCH353", "ARCH342"]).
prerequisite("ARCH460", ["ARCH133"]).
prerequisite("ARCH462", ["ARCH242"]).
prerequisite("ARCH473", ["ARCH461"]).
prerequisite("ARCH481", ["ARCH451", "ARCH452", "ARCH453"]).
prerequisite("ARCH492", ["ARCH451", "ARCH452", "ARCH453", "ARCH481"]).
prerequisite("ART104", ["ART102"]).
prerequisite("ART183", ["ART182"]).
prerequisite("ART201", ["ART101", "ART102"]).
prerequisite("ART201", ["ART106"]).
prerequisite("ART203", ["ART101", "ART102"]).
prerequisite("ART203", ["ART101", "ART106"]).
prerequisite("ART209", ["ART101"]).
prerequisite("ART227", ["ART224"]).
prerequisite("ART237", ["ART104", "ART183"]).
prerequisite("ART238", ["ART104", "ART183"]).
prerequisite("ART260", ["ART101", "ART104"]).
prerequisite("ART288", ["ART237", "ART238"]).
prerequisite("ART302", ["ART101"]).
prerequisite("ART309", ["ART209"]).
prerequisite("ART310", ["ART112", "ART211"]).
prerequisite("ART310", ["ART212"]).
prerequisite("ART313", ["ART112", "ART211", "ART212"]).
prerequisite("ART313", ["ART213"]).
prerequisite("ART315", ["ART112"]).
prerequisite("ART315", ["ART211"]).
prerequisite("ART315", ["ART212"]).
prerequisite("ART315", ["ART213"]).
prerequisite("ART317", ["ART111", "ART112", "ART211"]).
prerequisite("ART317", ["ART212"]).
prerequisite("ART324", ["ART122"]).
prerequisite("ART324", ["ART224", "ART222"]).
prerequisite("ART325", ["ART224"]).
prerequisite("ART329", ["ART224"]).
prerequisite("ART333", ["ART182"]).
prerequisite("ART333", ["CSC123"]).
prerequisite("ART334", ["ART101"]).
prerequisite("ART337", ["ART237", "ART238"]).
prerequisite("ART338", ["ART238"]).
prerequisite("ART345", ["ART104", "ART145", "ART148"]).
prerequisite("ART345", ["ART104", "ART245"]).
prerequisite("ART345", ["ART107", "ART145", "ART148"]).
prerequisite("ART345", ["ART107", "ART245"]).
prerequisite("ART348", ["ART148"]).
prerequisite("ART350", ["ART384"]).
prerequisite("ART366", ["ART148", "ART201", "ART260", "ART209"]).
prerequisite("ART373", ["ART111"]).
prerequisite("ART373", ["ART212"]).
prerequisite("ART373", ["ART213"]).
prerequisite("ART374", ["ART213", "ART315"]).
prerequisite("ART375", ["ART112", "ART212", "ART213"]).
prerequisite("ART375", ["WGQS201"]).
prerequisite("ART376", ["ART182"]).
prerequisite("ART376", ["CSC123", "ART384"]).
prerequisite("ART383", ["ART122"]).
prerequisite("ART383", ["ART224"]).
prerequisite("ART384", ["ART182"]).
prerequisite("ART388", ["ART288"]).
prerequisite("ART402", ["ART302"]).
prerequisite("ART409", ["ART201"]).
prerequisite("ART409", ["ART309"]).
prerequisite("ART427", ["ART325"]).
prerequisite("ART432", ["ART337", "ART338"]).
prerequisite("ART434", ["ART209", "ART334"]).
prerequisite("ART437", ["ART337", "ART338"]).
prerequisite("ART438", ["ART338"]).
prerequisite("ART439", ["ART438"]).
prerequisite("ART448", ["ART348"]).
prerequisite("ART450", ["ART/CSC350"]).
prerequisite("ART463", ["ART260"]).
prerequisite("ART466", ["ART366"]).
prerequisite("ART474", ["ART122"]).
prerequisite("ART474", ["ART182", "ART384"]).
prerequisite("ART483", ["ART383"]).
prerequisite("ART484", ["ART122"]).
prerequisite("ART484", ["ART182"]).
prerequisite("ART484", ["ART224"]).
prerequisite("ART485", ["ART373", "ART383"]).
prerequisite("ART488", ["ART388"]).
prerequisite("ART489", ["ART488"]).
prerequisite("ASTR301", ["PHYS132"]).
prerequisite("ASTR301", ["PHYS142"]).
prerequisite("ASTR301", ["PHYS122", "MATH141"]).
prerequisite("ASTR301", ["MATH161"]).
prerequisite("ASTR302", ["PHYS122", "MATH141"]).
prerequisite("ASTR302", ["PHYS122", "MATH161"]).
prerequisite("ASTR302", ["PHYS132", "MATH141"]).
prerequisite("ASTR302", ["PHYS132", "MATH161"]).
prerequisite("ASTR302", ["PHYS142", "MATH141"]).
prerequisite("ASTR302", ["PHYS142", "MATH161"]).
prerequisite("ASTR326", ["PHYS211"]).
prerequisite("ASTR444", ["ASTR301"]).
prerequisite("ASTR444", ["ASTR302"]).
prerequisite("BIO162", ["BIO161", "CHEM110"]).
prerequisite("BIO162", ["CHEM111"]).
prerequisite("BIO162", ["CHEM124"]).
prerequisite("BIO162", ["CHEM127"]).
prerequisite("BIO211", ["BIO111"]).
prerequisite("BIO231", ["BIO111"]).
prerequisite("BIO231", ["BIO161"]).
prerequisite("BIO232", ["BIO111"]).
prerequisite("BIO232", ["BIO161"]).
prerequisite("BIO263", ["BIO150"]).
prerequisite("BIO263", ["BIO160"]).
prerequisite("BIO263", ["BIO161"]).
prerequisite("BIO300", ["STAT218"]).
prerequisite("BIO301", ["BIO161"]).
prerequisite("BIO301", ["MCRO221"]).
prerequisite("BIO301", ["MCRO224"]).
prerequisite("BIO303", ["BIO111"]).
prerequisite("BIO303", ["BIO161"]).
prerequisite("BIO303", ["BOT121", "STAT218"]).
prerequisite("BIO321", ["BIO162", "BIO263", "NR306"]).
prerequisite("BIO321", ["ASCI239"]).
prerequisite("BIO322", ["BIO162"]).
prerequisite("BIO323", ["BIO162"]).
prerequisite("BIO323", ["BIO263"]).
prerequisite("BIO323", ["BIO427"]).
prerequisite("BIO323", ["ASCI239"]).
prerequisite("BIO324", ["BIO150"]).
prerequisite("BIO324", ["BIO160", "BIO162"]).
prerequisite("BIO327", ["BIO263"]).
prerequisite("BIO327", ["NR306", "STAT217"]).
prerequisite("BIO327", ["STAT218"]).
prerequisite("BIO335", ["BIO150", "BIO160", "BIO211"]).
prerequisite("BIO335", ["PLSC313", "BIO162"]).
prerequisite("BIO336", ["BIO150"]).
prerequisite("BIO336", ["BIO160", "BIO162"]).
prerequisite("BIO351", ["BIO161"]).
prerequisite("BIO361", ["BIO162", "CHEM216", "CHEM312"]).
prerequisite("BIO361", ["BIO162", "CHEM316"]).
prerequisite("BIO363", ["BIO263"]).
prerequisite("BIO363", ["NR306"]).
prerequisite("BIO400", ["STAT218"]).
prerequisite("BIO405", ["BIO161", "BIO162", "BIO303"]).
prerequisite("BIO405", ["BIO351"]).
prerequisite("BIO405", ["CHEM373"]).
prerequisite("BIO406", ["BIO361"]).
prerequisite("BIO407", ["BIO361"]).
prerequisite("BIO408", ["BIO361"]).
prerequisite("BIO409", ["BIO361"]).
prerequisite("BIO410", ["ASCI229"]).
prerequisite("BIO410", ["BIO231"]).
prerequisite("BIO410", ["BIO232"]).
prerequisite("BIO410", ["BIO361"]).
prerequisite("BIO411", ["BIO231", "BIO232"]).
prerequisite("BIO411", ["BIO361"]).
prerequisite("BIO412", ["BIO231", "MCRO221"]).
prerequisite("BIO412", ["BIO231", "MCRO224"]).
prerequisite("BIO412", ["BIO361", "MCRO221"]).
prerequisite("BIO412", ["BIO361", "MCRO224"]).
prerequisite("BIO413", ["BIO263", "BIO303"]).
prerequisite("BIO413", ["BIO263", "BIO351", "MCRO224"]).
prerequisite("BIO414", ["BIO263", "BIO303"]).
prerequisite("BIO414", ["BIO263", "BIO351", "BIO327", "BOT326"]).
prerequisite("BIO414", ["BIO263", "MSCI300"]).
prerequisite("BIO415", ["BIO263"]).
prerequisite("BIO416", ["BIO150"]).
prerequisite("BIO416", ["BIO160"]).
prerequisite("BIO421", ["BOT121"]).
prerequisite("BIO421", ["BIO162"]).
prerequisite("BIO425", ["EDUC469"]).
prerequisite("BIO425", ["EDUC479"]).
prerequisite("BIO426", ["BIO351"]).
prerequisite("BIO426", ["CHEM373", "CHEM313", "CHEM314", "CHEM369"]).
prerequisite("BIO426", ["CHEM371"]).
prerequisite("BIO427", ["BIO327", "BIO363", "BIO401", "BIO444", "BOT326", "MSCI300"]).
prerequisite("BIO427", ["NR306"]).
prerequisite("BIO428", ["BIO351", "BIO302", "BIO303", "CHEM373", "CHEM313", "CHEM314", "CHEM369"]).
prerequisite("BIO428", ["BIO351", "BIO302", "BIO303", "CHEM373", "CHEM371"]).
prerequisite("BIO428", ["BIO361", "CHEM313", "CHEM314", "CHEM369"]).
prerequisite("BIO428", ["BIO361", "CHEM371"]).
prerequisite("BIO428", ["ZOO332", "CHEM313", "CHEM314", "CHEM369"]).
prerequisite("BIO428", ["ZOO332", "CHEM371"]).
prerequisite("BIO428", ["BMED460", "CHEM313", "CHEM314", "CHEM369"]).
prerequisite("BIO428", ["BMED460", "CHEM371"]).
prerequisite("BIO429", ["BIO150"]).
prerequisite("BIO429", ["BIO160", "BIO161"]).
prerequisite("BIO434", ["BIO162"]).
prerequisite("BIO434", ["BIO263"]).
prerequisite("BIO435", ["BOT121"]).
prerequisite("BIO435", ["BIO162", "BIO161"]).
prerequisite("BIO435", ["BIO303"]).
prerequisite("BIO441", ["BIO302", "BIO303", "BIO351"]).
prerequisite("BIO441", ["CHEM373"]).
prerequisite("BIO442", ["BIO263"]).
prerequisite("BIO444", ["BIO263"]).
prerequisite("BIO444", ["NR306"]).
prerequisite("BIO445", ["BIO150"]).
prerequisite("BIO445", ["BIO160", "BIO162", "BIO263", "STAT218"]).
prerequisite("BIO446", ["BIO263", "BOT326", "STAT218"]).
prerequisite("BIO446", ["BIO263", "BOT326", "BIO327", "BIO363", "BIO401", "MSCI300", "SS120"]).
prerequisite("BIO446", ["BIO263", "BOT326", "SS121"]).
prerequisite("BIO446", ["NR306", "STAT218"]).
prerequisite("BIO446", ["NR306", "BIO327", "BIO363", "BIO401", "MSCI300", "SS120"]).
prerequisite("BIO446", ["NR306", "SS121"]).
prerequisite("BIO447", ["BIO263", "GEOG218"]).
prerequisite("BIO447", ["BIO263", "GEOG318"]).
prerequisite("BIO447", ["BIO263", "NR/LA218", "STAT218"]).
prerequisite("BIO447", ["BIO263", "BIO327", "BOT326"]).
prerequisite("BIO447", ["BIO263", "MSCI300", "STAT313"]).
prerequisite("BIO447", ["BIO263", "STAT513"]).
prerequisite("BIO448", ["BIO114", "BIO162", "BIO211", "BIO227", "BIO263", "NR305", "NR306"]).
prerequisite("BIO448", ["BIO114", "BIO162", "BIO211", "SS321", "GEOL102"]).
prerequisite("BIO448", ["BIO114", "BIO162", "BIO211", "SS120"]).
prerequisite("BIO448", ["BOT121", "BIO227", "BIO263", "NR305", "NR306"]).
prerequisite("BIO448", ["BOT121", "SS321", "GEOL102"]).
prerequisite("BIO448", ["BOT121", "SS120"]).
prerequisite("BIO452", ["BIO351", "CHEM216", "CHEM312"]).
prerequisite("BIO452", ["BIO351", "CHEM316", "CHEM313", "CHEM314", "CHEM369"]).
prerequisite("BIO452", ["BIO351", "CHEM371"]).
prerequisite("BIO452", ["CHEM373", "CHEM216", "CHEM312"]).
prerequisite("BIO452", ["CHEM373", "CHEM316", "CHEM313", "CHEM314", "CHEM369"]).
prerequisite("BIO452", ["CHEM373", "CHEM371"]).
prerequisite("BIO463", ["BIO461"]).
prerequisite("BIO463", ["BIO462"]).
prerequisite("BIO475", ["BIO161"]).
prerequisite("BIO475", ["BIO351"]).
prerequisite("BIO475", ["CHEM373"]).
prerequisite("BIO476", ["BIO/CHEM475"]).
prerequisite("BIO524", ["BIO501"]).
prerequisite("BIO534", ["BIO452"]).
prerequisite("BIO534", ["BIO501"]).
prerequisite("BIO537", ["BIO442"]).
prerequisite("BIO562", ["STAT218"]).
prerequisite("BMED102", ["BMED101"]).
prerequisite("BMED212", ["MATH143"]).
prerequisite("BMED213", ["MATH142"]).
prerequisite("BMED310", ["EE201", "CPE/CSC101", "CSC231", "CSC232"]).
prerequisite("BMED310", ["EE201", "CSC234"]).
prerequisite("BMED330", ["MATE210", "ME328", "STAT312", "BMED420", "BMED460"]).
prerequisite("BMED355", ["EE201", "MATH344"]).
prerequisite("BMED400", ["ME212"]).
prerequisite("BMED404", ["BMED410", "CE207"]).
prerequisite("BMED404", ["CE208"]).
prerequisite("BMED409", ["BMED410", "CE207"]).
prerequisite("BMED409", ["CE208"]).
prerequisite("BMED410", ["CE204", "ME212"]).
prerequisite("BMED410", ["CE208", "ME212"]).
prerequisite("BMED420", ["CE204", "MATE210"]).
prerequisite("BMED420", ["CE208", "MATE210"]).
prerequisite("BMED422", ["BMED420"]).
prerequisite("BMED425", ["ME302", "ME341"]).
prerequisite("BMED430", ["BMED310"]).
prerequisite("BMED432", ["BMED212"]).
prerequisite("BMED432", ["MATE210"]).
prerequisite("BMED434", ["BMED212"]).
prerequisite("BMED434", ["MATE210"]).
prerequisite("BMED436", ["BMED212"]).
prerequisite("BMED436", ["MATE210"]).
prerequisite("BMED440", ["BMED310", "EE201"]).
prerequisite("BMED445", ["BMED440"]).
prerequisite("BMED455", ["BMED410"]).
prerequisite("BMED456", ["BMED455"]).
prerequisite("BMED460", ["BIO231"]).
prerequisite("BMED460", ["BIO232"]).
prerequisite("BMED505", ["BMED440"]).
prerequisite("BMED510", ["ASCI438", "BIO361"]).
prerequisite("BMED510", ["BMED460"]).
prerequisite("BMED512", ["MATH143", "CHEM125", "PHYS131"]).
prerequisite("BMED512", ["PHYS141", "BIO161"]).
prerequisite("BMED515", ["PHYS132"]).
prerequisite("BMED515", ["PHYS142", "MATH244"]).
prerequisite("BMED525", ["CE204", "BMED460"]).
prerequisite("BMED525", ["CE208", "BMED460"]).
prerequisite("BMED530", ["BIO161"]).
prerequisite("BMED530", ["BIO213", "BMED/BRAE213"]).
prerequisite("BMED535", ["BMED425", "ME341"]).
prerequisite("BMED541", ["BMED460"]).
prerequisite("BMED542", ["BMED460"]).
prerequisite("BMED555", ["MATH244", "BMED440"]).
prerequisite("BMED560", ["ASCI438", "BIO361"]).
prerequisite("BMED560", ["BMED460"]).
prerequisite("BMED561", ["ASCI438", "BIO361", "STAT218"]).
prerequisite("BMED561", ["ASCI438", "BIO361", "STAT312", "BMED560"]).
prerequisite("BMED561", ["BMED460", "STAT218"]).
prerequisite("BMED561", ["BMED460", "STAT312", "BMED560"]).
prerequisite("BMED592", ["BMED591"]).
prerequisite("BRAE142", ["MATH116"]).
prerequisite("BRAE152", ["BRAE133", "BRAE151"]).
prerequisite("BRAE203", ["MATH118"]).
prerequisite("BRAE213", ["MATH142"]).
prerequisite("BRAE216", ["BRAE129"]).
prerequisite("BRAE220", ["MATH141", "MATH161"]).
prerequisite("BRAE220", ["MATH221", "CHEM124"]).
prerequisite("BRAE220", ["CHEM127"]).
prerequisite("BRAE232", ["BRAE129"]).
prerequisite("BRAE234", ["BRAE152", "PHYS131"]).
prerequisite("BRAE234", ["BRAE152", "PHYS141"]).
prerequisite("BRAE236", ["MATH141"]).
prerequisite("BRAE237", ["MATH119"]).
prerequisite("BRAE239", ["MATH119"]).
prerequisite("BRAE244", ["PLSC133", "PLSC190", "PLSC260", "BRAE237"]).
prerequisite("BRAE244", ["BRAE239"]).
prerequisite("BRAE247", ["NR215"]).
prerequisite("BRAE301", ["BRAE152", "PHYS121"]).
prerequisite("BRAE301", ["BRAE152", "PHYS141"]).
prerequisite("BRAE302", ["BRAE216"]).
prerequisite("BRAE302", ["BRAE324", "BRAE234"]).
prerequisite("BRAE302", ["BRAE301"]).
prerequisite("BRAE312", ["PHYS132"]).
prerequisite("BRAE312", ["PHYS142", "ME211"]).
prerequisite("BRAE317", ["BRAE203"]).
prerequisite("BRAE320", ["BRAE232"]).
prerequisite("BRAE324", ["MATH119", "PHYS121"]).
prerequisite("BRAE328", ["EE321"]).
prerequisite("BRAE331", ["BRAE236"]).
prerequisite("BRAE331", ["BRAE340"]).
prerequisite("BRAE332", ["BRAE232"]).
prerequisite("BRAE333", ["MATH118"]).
prerequisite("BRAE337", ["MATH118"]).
prerequisite("BRAE342", ["PHYS121"]).
prerequisite("BRAE343", ["BRAE342"]).
prerequisite("BRAE344", ["BRAE343"]).
prerequisite("BRAE345", ["MATH118"]).
prerequisite("BRAE355", ["BRAE237"]).
prerequisite("BRAE355", ["BRAE239"]).
prerequisite("BRAE403", ["MATH242"]).
prerequisite("BRAE403", ["MATH244", "STAT312"]).
prerequisite("BRAE405", ["BRAE236"]).
prerequisite("BRAE405", ["BRAE340"]).
prerequisite("BRAE414", ["BRAE331"]).
prerequisite("BRAE414", ["BRAE340"]).
prerequisite("BRAE418", ["BRAE203"]).
prerequisite("BRAE419", ["BRAE418"]).
prerequisite("BRAE421", ["BRAE152"]).
prerequisite("BRAE422", ["BRAE421"]).
prerequisite("BRAE425", ["BRAE324"]).
prerequisite("BRAE428", ["BRAE328"]).
prerequisite("BRAE432", ["PHYS121", "BRAE342", "BRAE343"]).
prerequisite("BRAE433", ["BRAE232", "CE204"]).
prerequisite("BRAE435", ["BRAE312"]).
prerequisite("BRAE435", ["BRAE340"]).
prerequisite("BRAE436", ["BIO111", "BIO161", "BOT121", "BRAE213", "CHEM125"]).
prerequisite("BRAE436", ["BIO111", "BIO161", "BOT121", "BRAE213", "CHEM128"]).
prerequisite("BRAE436", ["MCRO221", "CHEM125"]).
prerequisite("BRAE436", ["MCRO221", "CHEM128"]).
prerequisite("BRAE438", ["BRAE236"]).
prerequisite("BRAE438", ["BRAE340"]).
prerequisite("BRAE440", ["BRAE340"]).
prerequisite("BRAE447", ["BRAE239"]).
prerequisite("BRAE448", ["MATH118"]).
prerequisite("BRAE450", ["PHYS104"]).
prerequisite("BRAE461", ["BRAE460"]).
prerequisite("BRAE462", ["BRAE461"]).
prerequisite("BRAE465", ["BRAE419", "BRAE460"]).
prerequisite("BRAE465", ["BRAE422", "BRAE460"]).
prerequisite("BRAE532", ["BRAE312"]).
prerequisite("BRAE532", ["BRAE340"]).
prerequisite("BRAE532", ["CE336"]).
prerequisite("BRAE532", ["ME341"]).
prerequisite("BRAE533", ["BRAE312", "BRAE340"]).
prerequisite("BOT313", ["BIO114"]).
prerequisite("BOT313", ["BIO162"]).
prerequisite("BOT313", ["BOT121"]).
prerequisite("BOT323", ["BIO162"]).
prerequisite("BOT323", ["BOT121"]).
prerequisite("BOT326", ["BIO114", "BIO162", "BIO211"]).
prerequisite("BOT326", ["BOT121", "BIO263", "STAT217"]).
prerequisite("BOT326", ["STAT218"]).
prerequisite("BOT433", ["BOT313"]).
prerequisite("BUS301", ["ECON222"]).
prerequisite("BUS303", ["ECON222"]).
prerequisite("BUS304", ["ECON201"]).
prerequisite("BUS304", ["ECON221"]).
prerequisite("BUS304", ["ECON222"]).
prerequisite("BUS306", ["BUS206"]).
prerequisite("BUS313", ["BUS310"]).
prerequisite("BUS319", ["BUS214"]).
prerequisite("BUS319", ["AGB214"]).
prerequisite("BUS320", ["BUS215"]).
prerequisite("BUS321", ["BUS214", "BUS215"]).
prerequisite("BUS322", ["BUS321"]).
prerequisite("BUS323", ["BUS322"]).
prerequisite("BUS330", ["BUS310", "BUS342"]).
prerequisite("BUS342", ["BUS214", "STAT252"]).
prerequisite("BUS342", ["BUS214"]).
prerequisite("BUS342", ["STAT252"]).
prerequisite("BUS348", ["BUS347"]).
prerequisite("BUS388", ["BUS384", "STAT252"]).
prerequisite("BUS391", ["ITP125"]).
prerequisite("BUS392", ["BUS391"]).
prerequisite("BUS394", ["BUS391"]).
prerequisite("BUS395", ["BUS391"]).
prerequisite("BUS396", ["GRC361"]).
prerequisite("BUS399", ["BUS391"]).
prerequisite("BUS401", ["BUS342", "BUS346", "BUS387", "BUS391", "ITP303", "ITP326", "ITP330", "ITP341"]).
prerequisite("BUS401", ["ITP371", "BUS411"]).
prerequisite("BUS404", ["BUS207", "ECON222"]).
prerequisite("BUS406", ["BUS342", "BUS346", "BUS387"]).
prerequisite("BUS408", ["BUS310"]).
prerequisite("BUS410", ["BUS207", "ECON222"]).
prerequisite("BUS411", ["BUS215", "BUS404"]).
prerequisite("BUS412", ["BUS215"]).
prerequisite("BUS416", ["BUS320"]).
prerequisite("BUS417", ["BUS320"]).
prerequisite("BUS418", ["GRC361"]).
prerequisite("BUS419", ["BUS396"]).
prerequisite("BUS421", ["BUS346"]).
prerequisite("BUS422", ["BUS321"]).
prerequisite("BUS423", ["BUS396", "BUS418"]).
prerequisite("BUS424", ["BUS321"]).
prerequisite("BUS425", ["BUS322"]).
prerequisite("BUS431", ["BUS342"]).
prerequisite("BUS433", ["BUS431"]).
prerequisite("BUS433", ["BUS439"]).
prerequisite("BUS434", ["BUS439"]).
prerequisite("BUS435", ["BUS434"]).
prerequisite("BUS436", ["BUS215", "BUS342"]).
prerequisite("BUS437", ["BUS431", "BUS439"]).
prerequisite("BUS438", ["BUS431", "BUS439"]).
prerequisite("BUS439", ["BUS342", "BUS391"]).
prerequisite("BUS441", ["BUS438"]).
prerequisite("BUS442", ["BUS431"]).
prerequisite("BUS443", ["BUS431"]).
prerequisite("BUS443", ["BUS434"]).
prerequisite("BUS444", ["BUS442"]).
prerequisite("BUS445", ["BUS342"]).
prerequisite("BUS446", ["BUS346"]).
prerequisite("BUS448", ["BUS438"]).
prerequisite("BUS450", ["BUS396", "BUS418"]).
prerequisite("BUS451", ["BUS418", "STAT252", "BUS396"]).
prerequisite("BUS452", ["BUS396", "BUS418"]).
prerequisite("BUS453", ["BUS396"]).
prerequisite("BUS453", ["BUS418"]).
prerequisite("BUS454", ["BUS396", "BUS418"]).
prerequisite("BUS455", ["BUS419", "BUS421", "BUS423", "BUS430", "BUS450", "BUS451", "BUS452", "BUS453"]).
prerequisite("BUS459", ["BUS453"]).
prerequisite("BUS466", ["BUS348"]).
prerequisite("BUS468", ["BUS392"]).
prerequisite("BUS468", ["CSC101"]).
prerequisite("BUS468", ["CSC232"]).
prerequisite("BUS468", ["ECON395"]).
prerequisite("BUS469", ["BUS342"]).
prerequisite("BUS471", ["BUS384", "STAT252"]).
prerequisite("BUS474", ["BUS322"]).
prerequisite("BUS477", ["BUS382"]).
prerequisite("BUS477", ["BUS387"]).
prerequisite("BUS480", ["BUS384", "STAT252"]).
prerequisite("BUS480", ["BUS384"]).
prerequisite("BUS480", ["BUS387", "STAT252"]).
prerequisite("BUS480", ["BUS387"]).
prerequisite("BUS487", ["BUS310"]).
prerequisite("BUS488", ["BUS310"]).
prerequisite("BUS489", ["BUS387"]).
prerequisite("BUS490", ["BUS497"]).
prerequisite("BUS491", ["BUS391", "STAT251"]).
prerequisite("BUS492", ["BUS387", "BUS391"]).
prerequisite("BUS493", ["BUS394"]).
prerequisite("BUS495", ["BUS392"]).
prerequisite("BUS496", ["BUS392"]).
prerequisite("BUS497", ["BUS393", "STAT252"]).
prerequisite("BUS498", ["BUS392"]).
prerequisite("BUS499", ["BUS391"]).
prerequisite("CHEM110", ["MATH115"]).
prerequisite("CHEM124", ["MATH118"]).
prerequisite("CHEM124", ["MATH330"]).
prerequisite("CHEM125", ["CHEM124"]).
prerequisite("CHEM126", ["CHEM125"]).
prerequisite("CHEM127", ["MATH118"]).
prerequisite("CHEM127", ["MATH330"]).
prerequisite("CHEM128", ["CHEM127"]).
prerequisite("CHEM129", ["CHEM128"]).
prerequisite("CHEM200", ["CHEM111", "CHEM124"]).
prerequisite("CHEM200", ["CHEM127"]).
prerequisite("CHEM203", ["CHEM126"]).
prerequisite("CHEM212", ["CHEM111", "CHEM124"]).
prerequisite("CHEM212", ["CHEM127"]).
prerequisite("CHEM216", ["CHEM126"]).
prerequisite("CHEM216", ["CHEM129"]).
prerequisite("CHEM217", ["CHEM216"]).
prerequisite("CHEM217", ["CHEM221"]).
prerequisite("CHEM218", ["CHEM217"]).
prerequisite("CHEM218", ["CHEM324"]).
prerequisite("CHEM221", ["CHEM217"]).
prerequisite("CHEM231", ["CHEM126"]).
prerequisite("CHEM231", ["CHEM129"]).
prerequisite("CHEM302", ["CHEM216"]).
prerequisite("CHEM302", ["CHEM312"]).
prerequisite("CHEM303", ["CHEM203", "CHEM218"]).
prerequisite("CHEM312", ["CHEM125"]).
prerequisite("CHEM312", ["CHEM128"]).
prerequisite("CHEM324", ["CHEM218"]).
prerequisite("CHEM331", ["CHEM126"]).
prerequisite("CHEM331", ["CHEM129"]).
prerequisite("CHEM341", ["CHEM126", "CHEM212"]).
prerequisite("CHEM341", ["CHEM126", "CHEM312"]).
prerequisite("CHEM341", ["CHEM126", "CHEM216"]).
prerequisite("CHEM341", ["CHEM126", "CHEM316"]).
prerequisite("CHEM341", ["CHEM129", "CHEM212"]).
prerequisite("CHEM341", ["CHEM129", "CHEM312"]).
prerequisite("CHEM341", ["CHEM129", "CHEM216"]).
prerequisite("CHEM341", ["CHEM129", "CHEM316"]).
prerequisite("CHEM351", ["CHEM126"]).
prerequisite("CHEM351", ["CHEM129"]).
prerequisite("CHEM352", ["CHEM351"]).
prerequisite("CHEM353", ["CHEM352"]).
prerequisite("CHEM372", ["CHEM369"]).
prerequisite("CHEM372", ["CHEM371"]).
prerequisite("CHEM373", ["CHEM369"]).
prerequisite("CHEM373", ["CHEM371"]).
prerequisite("CHEM377", ["CHEM313"]).
prerequisite("CHEM377", ["CHEM314"]).
prerequisite("CHEM377", ["CHEM369"]).
prerequisite("CHEM377", ["CHEM371"]).
prerequisite("CHEM403", ["CHEM303", "CHEM352"]).
prerequisite("CHEM414", ["CHEM218"]).
prerequisite("CHEM414", ["CHEM318"]).
prerequisite("CHEM418", ["BIO161", "CHEM217"]).
prerequisite("CHEM420", ["CHEM218"]).
prerequisite("CHEM428", ["CHEM369"]).
prerequisite("CHEM428", ["CHEM371"]).
prerequisite("CHEM432", ["CHEM369"]).
prerequisite("CHEM432", ["CHEM371", "CHEM351"]).
prerequisite("CHEM439", ["CHEM231", "CHEM354"]).
prerequisite("CHEM439", ["CHEM356", "CHEM353"]).
prerequisite("CHEM441", ["BIO302", "BIO303", "BIO351"]).
prerequisite("CHEM441", ["CHEM373"]).
prerequisite("CHEM444", ["CHEM212"]).
prerequisite("CHEM444", ["CHEM216"]).
prerequisite("CHEM445", ["CHEM217", "CHEM444"]).
prerequisite("CHEM446", ["CHEM125"]).
prerequisite("CHEM446", ["CHEM128"]).
prerequisite("CHEM448", ["CHEM447", "CHEM445"]).
prerequisite("CHEM449", ["CHEM444"]).
prerequisite("CHEM450", ["CHEM444"]).
prerequisite("CHEM450", ["CHEM544"]).
prerequisite("CHEM451", ["CHEM447"]).
prerequisite("CHEM451", ["CHEM547", "CHEM450", "CHEM445"]).
prerequisite("CHEM451", ["CHEM545"]).
prerequisite("CHEM454", ["CHEM212"]).
prerequisite("CHEM454", ["CHEM216"]).
prerequisite("CHEM454", ["CHEM312"]).
prerequisite("CHEM454", ["CHEM316"]).
prerequisite("CHEM458", ["CHEM324"]).
prerequisite("CHEM465", ["CHEM231"]).
prerequisite("CHEM470", ["CHEM351", "CHEM217"]).
prerequisite("CHEM470", ["CHEM317"]).
prerequisite("CHEM474", ["CHEM369"]).
prerequisite("CHEM474", ["CHEM371"]).
prerequisite("CHEM475", ["BIO161"]).
prerequisite("CHEM475", ["BIO351"]).
prerequisite("CHEM475", ["CHEM373"]).
prerequisite("CHEM476", ["BIO/CHEM475"]).
prerequisite("CHEM477", ["CHEM218"]).
prerequisite("CHEM477", ["CHEM318"]).
prerequisite("CHEM481", ["CHEM352", "CHEM231"]).
prerequisite("CHEM544", ["CHEM212"]).
prerequisite("CHEM544", ["CHEM216"]).
prerequisite("CHEM545", ["CHEM544"]).
prerequisite("CHEM548", ["CHEM547", "CHEM545"]).
prerequisite("CHEM550", ["CHEM444"]).
prerequisite("CHEM550", ["CHEM544"]).
prerequisite("CHEM598", ["CHEM545", "CHEM547", "CHEM548", "CHEM550", "CHEM551"]).
prerequisite("CHEM599", ["CHEM545", "CHEM547", "CHEM548", "CHEM550", "CHEM551"]).
prerequisite("CD230", ["CD131", "CD/PSY256"]).
prerequisite("CD254", ["PSY201"]).
prerequisite("CD254", ["PSY202"]).
prerequisite("CD256", ["PSY201"]).
prerequisite("CD256", ["PSY202"]).
prerequisite("CD302", ["CD102", "CD/PSY256"]).
prerequisite("CD304", ["CD/PSY256"]).
prerequisite("CD305", ["CD/PSY256"]).
prerequisite("CD305", ["CD/EDUC207"]).
prerequisite("CD306", ["CD/PSY256"]).
prerequisite("CD306", ["CD/EDUC207"]).
prerequisite("CD329", ["PSY256", "STAT217"]).
prerequisite("CD350", ["CD/EDUC207"]).
prerequisite("CD350", ["PSY256"]).
prerequisite("CD351", ["CD/PSY256"]).
prerequisite("CD351", ["CD/EDUC207"]).
prerequisite("CD356", ["PSY201"]).
prerequisite("CD356", ["PSY202"]).
prerequisite("CD411", ["CD329", "CD304"]).
prerequisite("CD411", ["CD329", "CD306"]).
prerequisite("CD417", ["CD304", "CD305"]).
prerequisite("CD417", ["CD306"]).
prerequisite("CD424", ["CD304", "CD305", "CD306"]).
prerequisite("CD431", ["CD304", "CD329"]).
prerequisite("CD431", ["CD304", "PSY329"]).
prerequisite("CD431", ["CD305", "CD329"]).
prerequisite("CD431", ["CD305", "PSY329"]).
prerequisite("CD431", ["PSY419", "CD329"]).
prerequisite("CD431", ["PSY419", "PSY329"]).
prerequisite("CD431", ["PSY420", "CD329"]).
prerequisite("CD431", ["PSY420", "PSY329"]).
prerequisite("CD431", ["PSY421", "CD329"]).
prerequisite("CD431", ["PSY421", "PSY329"]).
prerequisite("CD448", ["CD230", "CD329"]).
prerequisite("CD449", ["CD333"]).
prerequisite("CD449", ["CD448"]).
prerequisite("CD450", ["CD304", "CD305", "CD306", "CD329"]).
prerequisite("CD454", ["CD330"]).
prerequisite("CD454", ["CD453"]).
prerequisite("CD460", ["PSY201"]).
prerequisite("CD460", ["PSY202"]).
prerequisite("CD462", ["CD461"]).
prerequisite("CHIN102", ["CHIN101", "CHIN141"]).
prerequisite("CHIN103", ["CHIN102", "CHIN142"]).
prerequisite("CHIN142", ["CHIN101", "CHIN141"]).
prerequisite("CHIN143", ["CHIN102", "CHIN142"]).
prerequisite("CHIN201", ["CHIN103", "CHIN143"]).
prerequisite("CHIN202", ["CHIN201", "CHIN241"]).
prerequisite("CHIN203", ["CHIN202", "CHIN242"]).
prerequisite("CHIN241", ["CHIN103", "CHIN143"]).
prerequisite("CHIN242", ["CHIN201", "CHIN241"]).
prerequisite("CHIN243", ["CHIN202", "CHIN242"]).
prerequisite("CRP202", ["CRP201"]).
prerequisite("CRP203", ["CRP202", "CRP204"]).
prerequisite("CRP204", ["CRP201", "CRP202"]).
prerequisite("CRP214", ["CRP212"]).
prerequisite("CRP215", ["ES112"]).
prerequisite("CRP314", ["CRP212"]).
prerequisite("CRP336", ["CRP212"]).
prerequisite("CRP341", ["CRP203"]).
prerequisite("CRP342", ["CRP336"]).
prerequisite("CRP401", ["CRP/NR351"]).
prerequisite("CRP402", ["CRP341"]).
prerequisite("CRP410", ["CRP336", "CRP341"]).
prerequisite("CRP411", ["CRP342", "CRP410"]).
prerequisite("CRP412", ["CRP212"]).
prerequisite("CRP420", ["CRP212"]).
prerequisite("CRP428", ["CRP334"]).
prerequisite("CRP430", ["CRP212"]).
prerequisite("CRP435", ["CRP212"]).
prerequisite("CRP452", ["CRP201", "CRP202"]).
prerequisite("CRP456", ["CRP212"]).
prerequisite("CRP461", ["CRP341", "CRP342"]).
prerequisite("CRP462", ["CRP410"]).
prerequisite("CRP463", ["CRP410"]).
prerequisite("CRP518", ["CRP501"]).
prerequisite("CRP520", ["CRP501"]).
prerequisite("CRP530", ["CRP501"]).
prerequisite("CRP552", ["CRP501", "CRP525"]).
prerequisite("CRP553", ["CRP512"]).
prerequisite("CRP554", ["CRP552"]).
prerequisite("CRP556", ["CRP554"]).
prerequisite("CRP596", ["CRP513"]).
prerequisite("CRP599", ["CRP513"]).
prerequisite("CE204", ["ME211"]).
prerequisite("CE207", ["CE204"]).
prerequisite("CE208", ["ME211"]).
prerequisite("CE251", ["CE113"]).
prerequisite("CE259", ["CE204"]).
prerequisite("CE259", ["CE208", "CE208", "CE113"]).
prerequisite("CE321", ["PHYS141"]).
prerequisite("CE322", ["CE222", "CE321"]).
prerequisite("CE336", ["ME341"]).
prerequisite("CE336", ["ENVE264", "CE337"]).
prerequisite("CE337", ["ME341"]).
prerequisite("CE337", ["ENVE264", "CE336"]).
prerequisite("CE352", ["CE207"]).
prerequisite("CE352", ["CE208", "CE251"]).
prerequisite("CE355", ["CE259", "CE352"]).
prerequisite("CE356", ["CE352"]).
prerequisite("CE371", ["ARCE106", "CE259"]).
prerequisite("CE371", ["CM113"]).
prerequisite("CE381", ["CE207"]).
prerequisite("CE381", ["CE208"]).
prerequisite("CE403", ["CE207"]).
prerequisite("CE403", ["CE208"]).
prerequisite("CE404", ["BMED410", "CE207"]).
prerequisite("CE404", ["CE208"]).
prerequisite("CE406", ["CE352"]).
prerequisite("CE407", ["CE406", "ME212"]).
prerequisite("CE413", ["BRAE239"]).
prerequisite("CE415", ["CE/CM371"]).
prerequisite("CE421", ["CE321"]).
prerequisite("CE422", ["CE321"]).
prerequisite("CE423", ["CE321"]).
prerequisite("CE424", ["CE321"]).
prerequisite("CE425", ["CE321"]).
prerequisite("CE429", ["CE259"]).
prerequisite("CE429", ["CM113"]).
prerequisite("CE431", ["ME341"]).
prerequisite("CE431", ["ENVE264"]).
prerequisite("CE432", ["CE431"]).
prerequisite("CE433", ["CE336"]).
prerequisite("CE434", ["CE336"]).
prerequisite("CE435", ["CE336"]).
prerequisite("CE436", ["ARCE315", "CM314"]).
prerequisite("CE436", ["CE352", "CM314"]).
prerequisite("CE437", ["CM314"]).
prerequisite("CE440", ["CE336"]).
prerequisite("CE454", ["CE355", "CE356", "CE455"]).
prerequisite("CE455", ["CE352"]).
prerequisite("CE457", ["CE355", "CE356"]).
prerequisite("CE459", ["CE355"]).
prerequisite("CE466", ["CE321", "CE322", "CE336", "CE337", "CE355", "CE371", "CE381", "CE382", "CE465"]).
prerequisite("CE467", ["CE466"]).
prerequisite("CE481", ["CE381", "CE382"]).
prerequisite("CE486", ["CE381", "CE382", "GEOL201"]).
prerequisite("CE488", ["STAT312"]).
prerequisite("CE501", ["CE406"]).
prerequisite("CE504", ["CE/ME404", "CE511", "ME501"]).
prerequisite("CE513", ["ME501"]).
prerequisite("CE513", ["CE511"]).
prerequisite("CE523", ["CE321"]).
prerequisite("CE525", ["CE321"]).
prerequisite("CE526", ["CE321", "CE322", "STAT312"]).
prerequisite("CE527", ["CE321"]).
prerequisite("CE527", ["CRP435"]).
prerequisite("CE528", ["CE321"]).
prerequisite("CE529", ["CE321"]).
prerequisite("CE533", ["CE336"]).
prerequisite("CE536", ["CE336"]).
prerequisite("CE537", ["CE434", "ENVE331"]).
prerequisite("CE538", ["CE440"]).
prerequisite("CE539", ["CE336"]).
prerequisite("CE552", ["CE454", "CE557"]).
prerequisite("CE553", ["CE356"]).
prerequisite("CE553", ["CE454", "CE407"]).
prerequisite("CE555", ["CE259"]).
prerequisite("CE556", ["CE355"]).
prerequisite("CE557", ["CE407"]).
prerequisite("CE559", ["CE355"]).
prerequisite("CE572", ["CE465"]).
prerequisite("CE581", ["CE481"]).
prerequisite("CE583", ["CE481"]).
prerequisite("CE584", ["CE481"]).
prerequisite("CE585", ["CE481"]).
prerequisite("CE586", ["CE481"]).
prerequisite("CE587", ["CE381"]).
prerequisite("CE588", ["CE381", "CE382", "CE481"]).
prerequisite("CE589", ["CE481"]).
prerequisite("CE592", ["CE591"]).
prerequisite("COMS205", ["COMS100"]).
prerequisite("COMS206", ["COMS100"]).
prerequisite("COMS330", ["COMS205"]).
prerequisite("COMS332", ["COMS205", "COMS330"]).
prerequisite("COMS350", ["COMS250"]).
prerequisite("COMS351", ["COMS250"]).
prerequisite("COMS385", ["COMS205", "COMS215"]).
prerequisite("COMS413", ["COMS213"]).
prerequisite("COMS413", ["COMS301"]).
prerequisite("COMS428", ["COMS/PSY212"]).
prerequisite("COMS430", ["COMS211"]).
prerequisite("COMS430", ["COMS212"]).
prerequisite("COMS461", ["COMS460"]).
prerequisite("CPE133", ["EE111", "EE151"]).
prerequisite("CPE202", ["CPE/CSC101"]).
prerequisite("CPE203", ["CPE/CSC202"]).
prerequisite("CPE225", ["CPE/CSC202"]).
prerequisite("CPE233", ["CPE/EE133"]).
prerequisite("CPE315", ["CSC/CPE102", "CSC/CPE103", "CSC225", "CPE/EE229"]).
prerequisite("CPE315", ["CSC/CPE102", "CSC/CPE103", "CPE/EE233"]).
prerequisite("CPE315", ["CSC/CPE202", "CSC/CPE203", "CSC225", "CPE/EE229"]).
prerequisite("CPE315", ["CSC/CPE202", "CSC/CPE203", "CPE/EE233"]).
prerequisite("CPE316", ["CPE357", "EE211"]).
prerequisite("CPE316", ["EE215"]).
prerequisite("CPE321", ["CPE/CSC357"]).
prerequisite("CPE327", ["EE212", "MATH244", "CPE367"]).
prerequisite("CPE327", ["EE215", "MATH244", "CPE367"]).
prerequisite("CPE328", ["BMED355"]).
prerequisite("CPE328", ["EE228", "CPE/EE368"]).
prerequisite("CPE329", ["CPE/EE233"]).
prerequisite("CPE333", ["CPE101", "CPE233"]).
prerequisite("CPE336", ["CPE/EE233"]).
prerequisite("CPE345", ["MATH206", "CHEM353"]).
prerequisite("CPE345", ["MATH206", "PHYS211"]).
prerequisite("CPE345", ["MATH244", "CHEM353"]).
prerequisite("CPE345", ["MATH244", "PHYS211"]).
prerequisite("CPE357", ["CSC/CPE102", "CSC/CPE103", "CSC225"]).
prerequisite("CPE357", ["CSC/CPE102", "CSC/CPE103", "CPE/EE229"]).
prerequisite("CPE357", ["CSC/CPE102", "CSC/CPE103", "CPE/EE233"]).
prerequisite("CPE357", ["CSC225"]).
prerequisite("CPE357", ["CPE/EE229"]).
prerequisite("CPE357", ["CPE/EE233"]).
prerequisite("CPE357", ["CSC/CPE202", "CSC/CPE203", "CSC225"]).
prerequisite("CPE357", ["CSC/CPE202", "CSC/CPE203", "CPE/EE229"]).
prerequisite("CPE357", ["CSC/CPE202", "CSC/CPE203", "CPE/EE233"]).
prerequisite("CPE367", ["EE242"]).
prerequisite("CPE367", ["EE245", "CPE327"]).
prerequisite("CPE368", ["BMED355"]).
prerequisite("CPE368", ["EE228", "CPE/EE328"]).
prerequisite("CPE414", ["CPE/EE329"]).
prerequisite("CPE414", ["CPE/CSC357"]).
prerequisite("CPE414", ["ME305"]).
prerequisite("CPE416", ["CPE/EE329"]).
prerequisite("CPE416", ["CPE316"]).
prerequisite("CPE419", ["CPE/CSC357", "CSC248"]).
prerequisite("CPE419", ["CSC348", "CPE315"]).
prerequisite("CPE422", ["CSC364"]).
prerequisite("CPE422", ["CPE464"]).
prerequisite("CPE425", ["CPE/CSC321", "CSC300"]).
prerequisite("CPE425", ["PHIL323"]).
prerequisite("CPE426", ["CPE315", "CPE233"]).
prerequisite("CPE426", ["CPE333", "CPE233"]).
prerequisite("CPE428", ["CPE327"]).
prerequisite("CPE428", ["CPE/CSC357"]).
prerequisite("CPE428", ["EE328"]).
prerequisite("CPE428", ["ME305"]).
prerequisite("CPE431", ["CSC430"]).
prerequisite("CPE432", ["EE302", "EE342"]).
prerequisite("CPE439", ["CPE/EE329"]).
prerequisite("CPE439", ["CPE316"]).
prerequisite("CPE441", ["EE307", "EE347", "EE308", "EE348"]).
prerequisite("CPE442", ["CPE/EE329"]).
prerequisite("CPE442", ["CPE/EE336"]).
prerequisite("CPE442", ["CPE316"]).
prerequisite("CPE446", ["CPE/EE329"]).
prerequisite("CPE446", ["CPE/EE336"]).
prerequisite("CPE446", ["CPE316", "STAT350"]).
prerequisite("CPE447", ["EE/CPE329"]).
prerequisite("CPE447", ["EE/CPE336"]).
prerequisite("CPE447", ["CPE316"]).
prerequisite("CPE447", ["ME305"]).
prerequisite("CPE450", ["CPE350"]).
prerequisite("CPE453", ["CSC/CPE357", "CSC225", "CPE/EE229"]).
prerequisite("CPE453", ["CSC/CPE357", "CPE/EE233"]).
prerequisite("CPE454", ["CSC/CPE453"]).
prerequisite("CPE458", ["CSC/CPE357"]).
prerequisite("CPE461", ["CPE350"]).
prerequisite("CPE462", ["CPE450"]).
prerequisite("CPE464", ["CSC/CPE357", "STAT312"]).
prerequisite("CPE464", ["STAT321"]).
prerequisite("CPE464", ["STAT350"]).
prerequisite("CPE465", ["CSC/CPE453", "CSC364"]).
prerequisite("CPE465", ["CSC/CPE453", "CPE464"]).
prerequisite("CPE469", ["CSC/CPE357"]).
prerequisite("CPE471", ["CPE/CSC357"]).
prerequisite("CPE476", ["CSC/CPE471"]).
prerequisite("CPE488", ["EE112"]).
prerequisite("CPE488", ["EE113"]).
prerequisite("CPE488", ["EE201", "MATE210"]).
prerequisite("CPE515", ["CPE315"]).
prerequisite("CPE515", ["CPE333"]).
prerequisite("CPE521", ["CPE316", "CPE315"]).
prerequisite("CPE521", ["CPE316", "CPE333"]).
prerequisite("CPE521", ["CPE316"]).
prerequisite("CPE521", ["CPE/EE329", "CPE315"]).
prerequisite("CPE521", ["CPE/EE329", "CPE333"]).
prerequisite("CPE521", ["CPE/EE329"]).
prerequisite("CPE522", ["CPE/EE439"]).
prerequisite("CPE523", ["CPE316"]).
prerequisite("CPE523", ["CPE/EE329"]).
prerequisite("CPE532", ["EE531", "CPE541"]).
prerequisite("CPE541", ["CPE441", "EE431"]).
prerequisite("CPE542", ["CPE/EE442"]).
prerequisite("CPE564", ["CSC364"]).
prerequisite("CPE564", ["CPE464"]).
prerequisite("CPE569", ["CSC248", "CPE/CSC357"]).
prerequisite("CPE569", ["CSC248"]).
prerequisite("CPE569", ["CSC348", "CPE/CSC357"]).
prerequisite("CPE569", ["CSC348"]).
prerequisite("CSC121", ["MATH115"]).
prerequisite("CSC122", ["CSC121"]).
prerequisite("CSC202", ["CPE/CSC101"]).
prerequisite("CSC203", ["CPE/CSC202"]).
prerequisite("CSC225", ["CPE/CSC202"]).
prerequisite("CSC231", ["MATH142"]).
prerequisite("CSC232", ["MATH118"]).
prerequisite("CSC234", ["MATH142"]).
prerequisite("CSC248", ["CSC/CPE202", "CSC/CPE203"]).
prerequisite("CSC305", ["CSC/CPE203"]).
prerequisite("CSC307", ["CSC248", "CPE/CSC357"]).
prerequisite("CSC307", ["CSC348", "CPE/CSC357"]).
prerequisite("CSC308", ["CSC248"]).
prerequisite("CSC308", ["CSC348"]).
prerequisite("CSC309", ["CSC308", "CSC/CPE357"]).
prerequisite("CSC313", ["CPE/CSC202"]).
prerequisite("CSC313", ["CSC314"]).
prerequisite("CSC314", ["CSC312"]).
prerequisite("CSC321", ["CPE/CSC357"]).
prerequisite("CSC323", ["CPE/CSC357"]).
prerequisite("CSC344", ["CSC248", "CPE/CSC357"]).
prerequisite("CSC344", ["CSC348", "CPE/CSC357"]).
prerequisite("CSC349", ["CPE/CSC102", "CPE/CSC103"]).
prerequisite("CSC349", ["CPE/CSC202", "CPE/CSC203"]).
prerequisite("CSC350", ["ART384"]).
prerequisite("CSC357", ["CSC/CPE102", "CSC/CPE103", "CSC225"]).
prerequisite("CSC357", ["CSC/CPE102", "CSC/CPE103", "CPE/EE229"]).
prerequisite("CSC357", ["CSC/CPE102", "CSC/CPE103", "CPE/EE233"]).
prerequisite("CSC357", ["CSC225"]).
prerequisite("CSC357", ["CPE/EE229"]).
prerequisite("CSC357", ["CPE/EE233"]).
prerequisite("CSC357", ["CSC/CPE202", "CSC/CPE203", "CSC225"]).
prerequisite("CSC357", ["CSC/CPE202", "CSC/CPE203", "CPE/EE229"]).
prerequisite("CSC357", ["CSC/CPE202", "CSC/CPE203", "CPE/EE233"]).
prerequisite("CSC364", ["CPE/CSC203"]).
prerequisite("CSC365", ["CSC248"]).
prerequisite("CSC365", ["CSC348"]).
prerequisite("CSC366", ["CSC365"]).
prerequisite("CSC369", ["CSC/CPE102", "CSC/CPE103", "STAT301", "STAT312", "STAT321"]).
prerequisite("CSC369", ["CSC/CPE102", "CSC/CPE103", "STAT350"]).
prerequisite("CSC369", ["CSC/CPE202", "CSC/CPE203", "STAT301", "STAT312", "STAT321"]).
prerequisite("CSC369", ["CSC/CPE202", "CSC/CPE203", "STAT350"]).
prerequisite("CSC371", ["CSC/CPE102", "CSC/CPE103"]).
prerequisite("CSC377", ["CPE/CSC202", "ART376"]).
prerequisite("CSC378", ["CPE/CSC102", "CPE/CSC103"]).
prerequisite("CSC378", ["CPE/CSC202"]).
prerequisite("CSC402", ["CSC307"]).
prerequisite("CSC402", ["CSC309"]).
prerequisite("CSC405", ["CSC305", "CSC402"]).
prerequisite("CSC406", ["CSC405"]).
prerequisite("CSC409", ["CSC307"]).
prerequisite("CSC409", ["CSC309"]).
prerequisite("CSC410", ["CSC349", "STAT301", "STAT312", "STAT321"]).
prerequisite("CSC410", ["CSC349", "STAT350"]).
prerequisite("CSC421", ["CSC321"]).
prerequisite("CSC422", ["CSC364"]).
prerequisite("CSC422", ["CPE464"]).
prerequisite("CSC424", ["CSC307"]).
prerequisite("CSC424", ["CSC309"]).
prerequisite("CSC425", ["CPE/CSC321", "CSC300"]).
prerequisite("CSC425", ["PHIL323"]).
prerequisite("CSC429", ["CPE/CSC321", "CPE/CSC357"]).
prerequisite("CSC430", ["CSC349"]).
prerequisite("CSC431", ["CSC430"]).
prerequisite("CSC436", ["CSC/CPE357"]).
prerequisite("CSC437", ["CPE/CSC203"]).
prerequisite("CSC445", ["CSC248"]).
prerequisite("CSC445", ["CSC348"]).
prerequisite("CSC448", ["CSC349"]).
prerequisite("CSC450", ["ART/CSC350"]).
prerequisite("CSC453", ["CSC/CPE357", "CSC225", "CPE/EE229"]).
prerequisite("CSC453", ["CSC/CPE357", "CPE/EE233"]).
prerequisite("CSC454", ["CSC/CPE453"]).
prerequisite("CSC458", ["CSC/CPE357"]).
prerequisite("CSC466", ["CSC349", "STAT252", "STAT302", "STAT312", "STAT321"]).
prerequisite("CSC466", ["STAT350"]).
prerequisite("CSC468", ["CSC365"]).
prerequisite("CSC469", ["CSC/CPE357"]).
prerequisite("CSC471", ["CPE/CSC357"]).
prerequisite("CSC473", ["CSC/CPE471"]).
prerequisite("CSC474", ["CSC/CPE471"]).
prerequisite("CSC476", ["CSC/CPE471"]).
prerequisite("CSC477", ["CSC349"]).
prerequisite("CSC478", ["CSC/CPE471"]).
prerequisite("CSC480", ["CSC/CPE102", "CSC/CPE103"]).
prerequisite("CSC481", ["CSC480"]).
prerequisite("CSC482", ["CSC466"]).
prerequisite("CSC482", ["CSC480"]).
prerequisite("CSC482", ["CSC349"]).
prerequisite("CSC484", ["CSC307"]).
prerequisite("CSC484", ["CSC308"]).
prerequisite("CSC486", ["CSC307"]).
prerequisite("CSC486", ["CSC308"]).
prerequisite("CSC487", ["CSC349", "MATH206"]).
prerequisite("CSC487", ["MATH244", "CSC466"]).
prerequisite("CSC487", ["CSC480"]).
prerequisite("CSC491", ["CSC307"]).
prerequisite("CSC491", ["CSC309"]).
prerequisite("CSC492", ["CSC491"]).
prerequisite("CSC497", ["CSC307"]).
prerequisite("CSC497", ["CSC309"]).
prerequisite("CSC498", ["CSC497"]).
prerequisite("CSC508", ["CSC307"]).
prerequisite("CSC508", ["CSC308"]).
prerequisite("CSC509", ["CSC508"]).
prerequisite("CSC515", ["CPE315"]).
prerequisite("CSC515", ["CPE333"]).
prerequisite("CSC521", ["CPE/CSC321"]).
prerequisite("CSC522", ["CPE/CSC321", "CPE464"]).
prerequisite("CSC524", ["CPE/CSC357"]).
prerequisite("CSC530", ["CSC430"]).
prerequisite("CSC540", ["CSC445"]).
prerequisite("CSC549", ["CSC349"]).
prerequisite("CSC550", ["CSC/CPE453"]).
prerequisite("CSC560", ["CSC365"]).
prerequisite("CSC564", ["CSC364"]).
prerequisite("CSC564", ["CPE464"]).
prerequisite("CSC566", ["CSC466"]).
prerequisite("CSC566", ["CSC480"]).
prerequisite("CSC566", ["CSC582"]).
prerequisite("CSC569", ["CSC248", "CPE/CSC357"]).
prerequisite("CSC569", ["CSC248"]).
prerequisite("CSC569", ["CSC348", "CPE/CSC357"]).
prerequisite("CSC569", ["CSC348"]).
prerequisite("CSC572", ["CSC/CPE471"]).
prerequisite("CSC574", ["CPE/CSC471"]).
prerequisite("CSC580", ["CSC480"]).
prerequisite("CSC581", ["CSC480"]).
prerequisite("CSC582", ["CSC482"]).
prerequisite("CSC587", ["CSC487"]).
prerequisite("CSC597", ["CSC596"]).
prerequisite("CSC599", ["CSC590"]).
prerequisite("CM115", ["ARCE106"]).
prerequisite("CM115", ["CM113"]).
prerequisite("CM214", ["CM115", "PHYS132"]).
prerequisite("CM214", ["PHYS142"]).
prerequisite("CM214", ["CHEM124", "CM232"]).
prerequisite("CM232", ["MATH142"]).
prerequisite("CM232", ["MATH182"]).
prerequisite("CM239", ["MATH119"]).
prerequisite("CM280", ["CE113"]).
prerequisite("CM280", ["CM115"]).
prerequisite("CM310", ["CM113"]).
prerequisite("CM310", ["CE259"]).
prerequisite("CM310", ["ARCE106"]).
prerequisite("CM313", ["ARCE212", "CM214", "CM280", "CM334"]).
prerequisite("CM314", ["CM239"]).
prerequisite("CM314", ["BRAE239"]).
prerequisite("CM334", ["CM115", "BUS207"]).
prerequisite("CM335", ["BUS215", "CM232"]).
prerequisite("CM371", ["ARCE106", "CE259"]).
prerequisite("CM371", ["CM113"]).
prerequisite("CM411", ["CM313"]).
prerequisite("CM413", ["CM214"]).
prerequisite("CM413", ["CM313"]).
prerequisite("CM415", ["CM413", "CM480"]).
prerequisite("CM436", ["ARCE315", "CM314"]).
prerequisite("CM436", ["CE352", "CM314"]).
prerequisite("CM437", ["CM314"]).
prerequisite("CM443", ["CM334"]).
prerequisite("CM450", ["STAT251"]).
prerequisite("CM450", ["STAT312", "CM313", "CM334"]).
prerequisite("CM460", ["CM313"]).
prerequisite("CM461", ["CM460"]).
prerequisite("CM462", ["CM460"]).
prerequisite("CM463", ["CM413", "CM443"]).
prerequisite("CM480", ["CM313"]).
prerequisite("DSCI202", ["DSCI230", "DSCI229"]).
prerequisite("DSCI202", ["DSCI231"]).
prerequisite("DSCI233", ["DSCI229"]).
prerequisite("DSCI233", ["DSCI231"]).
prerequisite("DSCI233", ["FSN125"]).
prerequisite("DSCI233", ["FSN230"]).
prerequisite("DSCI241", ["DSCI230"]).
prerequisite("DSCI301", ["ASCI220"]).
prerequisite("DSCI321", ["ASCI220"]).
prerequisite("DSCI330", ["ASCI229"]).
prerequisite("DSCI330", ["DSCI230"]).
prerequisite("DSCI333", ["ASCI220", "DSCI230"]).
prerequisite("DSCI401", ["CHEM312"]).
prerequisite("DSCI402", ["DSCI444"]).
prerequisite("DSCI402", ["MCRO421"]).
prerequisite("DSCI410", ["ASCI229", "ASCI355"]).
prerequisite("DSCI410", ["ASCI229", "DSCI301"]).
prerequisite("DSCI412", ["DSCI333"]).
prerequisite("DSCI422", ["DSCI241", "BIO111"]).
prerequisite("DSCI422", ["STAT130"]).
prerequisite("DSCI432", ["DSCI333"]).
prerequisite("DSCI444", ["DSCI233", "MCRO221"]).
prerequisite("DSCI444", ["DSCI233", "MCRO224", "STAT130"]).
prerequisite("DSCI444", ["DSCI233", "STAT218"]).
prerequisite("DSCI444", ["DSCI233"]).
prerequisite("DSCI501", ["CHEM212"]).
prerequisite("DSCI501", ["CHEM312"]).
prerequisite("DSCI502", ["DSCI501"]).
prerequisite("DSCI520", ["DSCI540"]).
prerequisite("DSCI521", ["DSCI520"]).
prerequisite("DSCI524", ["DSCI520"]).
prerequisite("DSCI535", ["DSCI501"]).
prerequisite("DSCI540", ["DSCI520", "MCRO221"]).
prerequisite("DSCI565", ["DSCI520"]).
prerequisite("DANC234", ["DANC134"]).
prerequisite("DANC331", ["DANC231"]).
prerequisite("DANC346", ["DANC332", "DANC331"]).
prerequisite("DANC346", ["DANC345"]).
prerequisite("DATA100", ["MATH115", "MATH116", "MATH118"]).
prerequisite("DATA301", ["CPE/CSC202", "IME326", "STAT302", "STAT312"]).
prerequisite("DATA301", ["CPE/CSC202", "STAT313"]).
prerequisite("DATA401", ["DATA301"]).
prerequisite("DATA402", ["CSC466"]).
prerequisite("DATA441", ["BIO351"]).
prerequisite("DATA441", ["CHEM373"]).
prerequisite("DATA442", ["DATA441"]).
prerequisite("DATA451", ["DATA401"]).
prerequisite("DATA452", ["DATA451"]).
prerequisite("DATA472", ["DATA301"]).
prerequisite("ESM90", ["ESM105"]).
prerequisite("ERSC223", ["SS120", "CHEM124"]).
prerequisite("ERSC223", ["SS120", "CHEM127"]).
prerequisite("ERSC303", ["LA/NR218", "SS120"]).
prerequisite("ERSC303", ["GEOG318", "SS120"]).
prerequisite("ERSC415", ["ERSC/GEOG250"]).
prerequisite("ERSC416", ["GEOL102", "GEOL415"]).
prerequisite("ERSC416", ["GEOL201", "GEOL415"]).
prerequisite("ERSC417", ["ERSC/GEOL401"]).
prerequisite("ERSC417", ["ERSC/GEOL416"]).
prerequisite("ERSC423", ["GEOL201"]).
prerequisite("ERSC442", ["ERSC144"]).
prerequisite("ERSC442", ["GEOL201"]).
prerequisite("ERSC443", ["CHEM125"]).
prerequisite("ERSC443", ["CHEM128"]).
prerequisite("ERSC476", ["ERSC363"]).
prerequisite("ERSC476", ["NR306"]).
prerequisite("ERSC476", ["NR326"]).
prerequisite("ERSC477", ["ERSC363"]).
prerequisite("ERSC477", ["NR306"]).
prerequisite("ERSC477", ["NR326"]).
prerequisite("ERSC478", ["ERSC363"]).
prerequisite("ERSC478", ["NR306"]).
prerequisite("ERSC478", ["NR326"]).
prerequisite("ECON311", ["ECON201", "MATH141"]).
prerequisite("ECON311", ["ECON201", "MATH221"]).
prerequisite("ECON311", ["ECON221", "MATH141"]).
prerequisite("ECON311", ["ECON221", "MATH221"]).
prerequisite("ECON312", ["ECON311"]).
prerequisite("ECON313", ["ECON201"]).
prerequisite("ECON313", ["ECON222", "ECON311"]).
prerequisite("ECON330", ["ECON221", "ECON222"]).
prerequisite("ECON330", ["ECON201"]).
prerequisite("ECON337", ["ECON221", "ECON222"]).
prerequisite("ECON337", ["ECON201"]).
prerequisite("ECON339", ["ECON221", "ECON222"]).
prerequisite("ECON345", ["ECON201"]).
prerequisite("ECON403", ["ECON312"]).
prerequisite("ECON404", ["ECON312"]).
prerequisite("ECON405", ["ECON313"]).
prerequisite("ECON406", ["ECON339"]).
prerequisite("ECON408", ["ECON312"]).
prerequisite("ECON409", ["ECON312"]).
prerequisite("ECON410", ["ECON312"]).
prerequisite("ECON413", ["ECON312"]).
prerequisite("ECON417", ["ECON311"]).
prerequisite("ECON424", ["ECON313"]).
prerequisite("ECON431", ["ECON312"]).
prerequisite("ECON432", ["ECON312"]).
prerequisite("ECON434", ["ECON311", "ECON312"]).
prerequisite("ECON435", ["ECON312"]).
prerequisite("ECON440", ["ECON339"]).
prerequisite("ECON445", ["ECON312", "ECON395"]).
prerequisite("ECON460", ["ECON313"]).
prerequisite("ECON461", ["ECON313"]).
prerequisite("ECON462", ["ECON313"]).
prerequisite("ECON464", ["ECON460", "ECON460"]).
prerequisite("ECON519", ["GSE518", "GSE524"]).
prerequisite("EDUC405", ["SPAN202"]).
prerequisite("EDUC427", ["ENGL391"]).
prerequisite("EDUC440", ["EDUC429", "EDUC431", "EDUC435", "EDUC436", "EDUC438", "EDUC439"]).
prerequisite("EDUC449", ["EDUC451"]).
prerequisite("EDUC455", ["EDUC454"]).
prerequisite("EDUC456", ["EDUC454", "EDUC455", "EDUC457"]).
prerequisite("EDUC457", ["EDUC454", "EDUC455", "EDUC456"]).
prerequisite("EDUC561", ["EDUC555", "EDUC560"]).
prerequisite("EDUC590", ["EDUC589"]).
prerequisite("EDUC598", ["EDUC589"]).
prerequisite("EE112", ["MATH142"]).
prerequisite("EE112", ["EE111"]).
prerequisite("EE113", ["MATH142", "EE143", "EE111", "EE151"]).
prerequisite("EE115", ["MATH141", "CHEM124", "PHYS133"]).
prerequisite("EE115", ["PHYS143", "EE145"]).
prerequisite("EE133", ["EE111", "EE151"]).
prerequisite("EE143", ["MATH142", "EE113", "EE111", "EE151"]).
prerequisite("EE201", ["MATH244", "PHYS133"]).
prerequisite("EE201", ["PHYS143"]).
prerequisite("EE211", ["EE112"]).
prerequisite("EE211", ["EE113"]).
prerequisite("EE211", ["PHYS133"]).
prerequisite("EE211", ["PHYS143", "MATH244", "EE241"]).
prerequisite("EE212", ["MATH244", "EE211", "EE242"]).
prerequisite("EE215", ["EE115", "EE245"]).
prerequisite("EE228", ["BMED355"]).
prerequisite("EE233", ["CPE/EE133"]).
prerequisite("EE241", ["EE112"]).
prerequisite("EE241", ["EE113"]).
prerequisite("EE242", ["MATH244", "EE241"]).
prerequisite("EE242", ["EE212"]).
prerequisite("EE255", ["EE212", "EE242"]).
prerequisite("EE261", ["CPE/CSC101", "EE151"]).
prerequisite("EE262", ["CPE/CSC101", "EE151"]).
prerequisite("EE295", ["EE212", "EE242"]).
prerequisite("EE302", ["EE215"]).
prerequisite("EE302", ["EE228", "EE342", "EE368"]).
prerequisite("EE306", ["CHEM124", "EE212", "EE242", "EE143"]).
prerequisite("EE306", ["IME156"]).
prerequisite("EE306", ["IME458", "PHYS211", "EE346"]).
prerequisite("EE307", ["CPE/EE133", "EE306", "EE346", "CPE/EE233", "EE347"]).
prerequisite("EE308", ["EE302", "EE342", "EE307", "EE347", "EE348"]).
prerequisite("EE314", ["EE228", "EE306"]).
prerequisite("EE314", ["EE228", "EE315"]).
prerequisite("EE314", ["CPE/EE327", "STAT350", "EE306"]).
prerequisite("EE314", ["CPE/EE327", "STAT350", "EE315"]).
prerequisite("EE315", ["CPE133", "EE215"]).
prerequisite("EE321", ["EE201"]).
prerequisite("EE321", ["BRAE216"]).
prerequisite("EE327", ["EE212", "MATH244", "CPE367"]).
prerequisite("EE327", ["EE215", "MATH244", "CPE367"]).
prerequisite("EE328", ["BMED355"]).
prerequisite("EE328", ["EE228", "CPE/EE368"]).
prerequisite("EE329", ["CPE/EE233"]).
prerequisite("EE335", ["EE201", "EE251"]).
prerequisite("EE336", ["CPE/EE233"]).
prerequisite("EE342", ["EE215"]).
prerequisite("EE342", ["EE228", "EE302", "EE368"]).
prerequisite("EE346", ["CHEM124", "EE212", "EE242", "EE143"]).
prerequisite("EE346", ["IME156"]).
prerequisite("EE346", ["IME458", "PHYS211", "EE306", "ENGL134"]).
prerequisite("EE347", ["CPE/EE133", "EE306", "EE346", "CPE/EE233", "EE307"]).
prerequisite("EE348", ["EE302", "EE342", "EE307", "EE347", "EE308"]).
prerequisite("EE361", ["EE251"]).
prerequisite("EE361", ["BRAE216", "EE321"]).
prerequisite("EE367", ["EE242"]).
prerequisite("EE367", ["EE245", "CPE327"]).
prerequisite("EE368", ["BMED355"]).
prerequisite("EE368", ["EE228", "CPE/EE328"]).
prerequisite("EE402", ["EE335"]).
prerequisite("EE403", ["EE306", "EE346"]).
prerequisite("EE405", ["EE308", "EE348", "EE335", "EE445"]).
prerequisite("EE406", ["EE335", "EE255", "EE295"]).
prerequisite("EE407", ["EE406"]).
prerequisite("EE409", ["EE308", "EE348"]).
prerequisite("EE410", ["EE308", "EE348"]).
prerequisite("EE410", ["EE321"]).
prerequisite("EE411", ["EE410"]).
prerequisite("EE412", ["EE314", "EE409", "EE449", "EE452"]).
prerequisite("EE413", ["CSC101", "EE409", "EE449"]).
prerequisite("EE414", ["CPE/EE329"]).
prerequisite("EE414", ["CPE/CSC357"]).
prerequisite("EE414", ["ME305"]).
prerequisite("EE415", ["CPE327"]).
prerequisite("EE415", ["EE328"]).
prerequisite("EE416", ["EE314"]).
prerequisite("EE417", ["EE255", "EE295"]).
prerequisite("EE418", ["EE335"]).
prerequisite("EE418", ["PHYS323", "EE458"]).
prerequisite("EE419", ["CSC101"]).
prerequisite("EE419", ["CSC231"]).
prerequisite("EE420", ["CHEM124"]).
prerequisite("EE422", ["EE347"]).
prerequisite("EE422", ["MATE340"]).
prerequisite("EE422", ["CHEM319"]).
prerequisite("EE422", ["PHYS340"]).
prerequisite("EE423", ["BMED212"]).
prerequisite("EE423", ["MATE210"]).
prerequisite("EE424", ["MATH244"]).
prerequisite("EE425", ["EE409", "EE449", "EE455"]).
prerequisite("EE428", ["CPE327"]).
prerequisite("EE428", ["CPE/CSC357"]).
prerequisite("EE428", ["EE328"]).
prerequisite("EE428", ["ME305"]).
prerequisite("EE431", ["EE307", "EE347", "EE308", "EE348"]).
prerequisite("EE432", ["EE302", "EE342"]).
prerequisite("EE433", ["EE255", "EE295"]).
prerequisite("EE435", ["EE255", "EE295", "EE302", "EE342"]).
prerequisite("EE439", ["CPE/EE329"]).
prerequisite("EE439", ["CPE316"]).
prerequisite("EE440", ["EE335", "EE314", "EE480"]).
prerequisite("EE442", ["CPE/EE329"]).
prerequisite("EE442", ["CPE/EE336"]).
prerequisite("EE442", ["CPE316"]).
prerequisite("EE443", ["EE306", "EE346"]).
prerequisite("EE444", ["EE406"]).
prerequisite("EE445", ["EE308", "EE348", "EE335", "EE405"]).
prerequisite("EE446", ["CPE/EE329"]).
prerequisite("EE446", ["CPE/EE336"]).
prerequisite("EE446", ["CPE316", "STAT350"]).
prerequisite("EE447", ["EE/CPE329"]).
prerequisite("EE447", ["EE/CPE336"]).
prerequisite("EE447", ["CPE316"]).
prerequisite("EE447", ["ME305"]).
prerequisite("EE449", ["EE308", "EE348"]).
prerequisite("EE450", ["PHYS104"]).
prerequisite("EE452", ["EE314", "EE409", "EE449", "EE412"]).
prerequisite("EE455", ["EE409", "EE449", "EE425"]).
prerequisite("EE456", ["EE314"]).
prerequisite("EE459", ["CSC101"]).
prerequisite("EE459", ["CSC231"]).
prerequisite("EE460", ["EE314", "EE335", "EE409", "EE449"]).
prerequisite("EE461", ["EE409", "EE449", "EE460"]).
prerequisite("EE462", ["EE461"]).
prerequisite("EE463", ["EE409", "EE449", "EE460"]).
prerequisite("EE464", ["EE463"]).
prerequisite("EE475", ["CPE327", "CPE367"]).
prerequisite("EE480", ["EE335", "EE314", "EE440"]).
prerequisite("EE495", ["EE494", "EE495"]).
prerequisite("EE504", ["EE314", "EE328"]).
prerequisite("EE504", ["EE314", "CPE327"]).
prerequisite("EE504", ["EE314"]).
prerequisite("EE511", ["EE255"]).
prerequisite("EE513", ["EE302"]).
prerequisite("EE514", ["EE513"]).
prerequisite("EE514", ["EE328"]).
prerequisite("EE515", ["EE314"]).
prerequisite("EE516", ["STAT312"]).
prerequisite("EE516", ["STAT350"]).
prerequisite("EE518", ["EE406"]).
prerequisite("EE519", ["EE406"]).
prerequisite("EE521", ["CPE316", "CPE315"]).
prerequisite("EE521", ["CPE316", "CPE333"]).
prerequisite("EE521", ["CPE316"]).
prerequisite("EE521", ["CPE/EE329", "CPE315"]).
prerequisite("EE521", ["CPE/EE329", "CPE333"]).
prerequisite("EE521", ["CPE/EE329"]).
prerequisite("EE522", ["CPE/EE439"]).
prerequisite("EE523", ["CPE316"]).
prerequisite("EE523", ["CPE/EE329"]).
prerequisite("EE524", ["PHYS412"]).
prerequisite("EE524", ["PHYS425"]).
prerequisite("EE525", ["STAT350"]).
prerequisite("EE526", ["EE314", "EE416"]).
prerequisite("EE527", ["EE410"]).
prerequisite("EE528", ["CPE327"]).
prerequisite("EE528", ["EE328"]).
prerequisite("EE529", ["EE306", "EE315"]).
prerequisite("EE530", ["EE402"]).
prerequisite("EE530", ["EE314"]).
prerequisite("EE531", ["CPE441", "EE431"]).
prerequisite("EE532", ["EE531", "CPE541"]).
prerequisite("EE533", ["EE402"]).
prerequisite("EE534", ["EE335"]).
prerequisite("EE534", ["EE403", "EE443"]).
prerequisite("EE541", ["EE402"]).
prerequisite("EE542", ["CPE/EE442"]).
prerequisite("ENGR301", ["ENGR101"]).
prerequisite("ENGR334", ["BMED212", "ENGR234", "IME144"]).
prerequisite("ENGR334", ["ME234"]).
prerequisite("ENGR400", ["ME212"]).
prerequisite("ENGR460", ["ENGR459"]).
prerequisite("ENGR461", ["ENGR460"]).
prerequisite("ENGR462", ["ME212"]).
prerequisite("ENGR464", ["ENGR463"]).
prerequisite("ENGR465", ["ENGR464"]).
prerequisite("ENGR581", ["CHEM312", "MCRO221"]).
prerequisite("ENGL132", ["ENGL131", "ENGL135"]).
prerequisite("ENGL204", ["ENGL203"]).
prerequisite("ENGL205", ["ENGL204"]).
prerequisite("ENGL303", ["ENGL205"]).
prerequisite("ENGL304", ["ENGL303"]).
prerequisite("ENGL305", ["ENGL304"]).
prerequisite("ENGL306", ["ENGL305"]).
prerequisite("ENGL412", ["ENGL411"]).
prerequisite("ENGL425", ["EDUC469"]).
prerequisite("ENGL425", ["EDUC479"]).
prerequisite("ENGL433", ["ENGL203", "ENGL204", "ENGL205", "ENGL303", "ENGL304"]).
prerequisite("ENGL433", ["ENGL305", "ENGL204"]).
prerequisite("ENGL439", ["ENGL203", "ENGL204", "ENGL205", "ENGL303", "ENGL304", "ENGL305", "ENGL306"]).
prerequisite("ENGL449", ["ENGL203", "ENGL204", "ENGL205", "ENGL303", "ENGL304", "ENGL305", "ENGL306"]).
prerequisite("ENGL459", ["ENGL203", "ENGL204", "ENGL205", "ENGL303", "ENGL304", "ENGL305", "ENGL306"]).
prerequisite("ENGL487", ["ENGL387"]).
prerequisite("ENGL488", ["ENGL388"]).
prerequisite("ENGL495", ["ENGL290"]).
prerequisite("ENGL495", ["ENGL390"]).
prerequisite("ENGL497", ["ENGL290", "ENGL390", "ENGL391", "ENGL395", "ENGL495"]).
prerequisite("ENGL498", ["ENGL497"]).
prerequisite("ENGL499", ["ENGL498"]).
prerequisite("ENGL506", ["ENGL505"]).
prerequisite("ENGL506", ["ENGL134"]).
prerequisite("ENGL510", ["ENGL501"]).
prerequisite("ENGL511", ["ENGL501"]).
prerequisite("ENGL512", ["ENGL501"]).
prerequisite("ENGL513", ["ENGL501"]).
prerequisite("ENGL519", ["ENGL505"]).
prerequisite("EDES408", ["EDES406"]).
prerequisite("EDES410", ["EDES408"]).
prerequisite("ENVE264", ["MATH241", "PHYS132"]).
prerequisite("ENVE264", ["PHYS142", "ME211"]).
prerequisite("ENVE309", ["MATH241", "PHYS132"]).
prerequisite("ENVE309", ["PHYS142"]).
prerequisite("ENVE325", ["CHEM125"]).
prerequisite("ENVE325", ["CHEM128"]).
prerequisite("ENVE331", ["CHEM125"]).
prerequisite("ENVE331", ["CHEM128", "MATH242"]).
prerequisite("ENVE331", ["MATH244"]).
prerequisite("ENVE405", ["ENVE434", "ENVE438"]).
prerequisite("ENVE407", ["ENVE331"]).
prerequisite("ENVE411", ["CE251"]).
prerequisite("ENVE411", ["CSC231"]).
prerequisite("ENVE421", ["ENVE325", "ENVE331", "ENVE304"]).
prerequisite("ENVE421", ["ME302", "ENVE264"]).
prerequisite("ENVE421", ["ME341"]).
prerequisite("ENVE426", ["ENVE325", "CHEM212", "ENVE264"]).
prerequisite("ENVE426", ["ME341", "STAT312"]).
prerequisite("ENVE434", ["CHEM125"]).
prerequisite("ENVE434", ["CHEM129", "ENVE330"]).
prerequisite("ENVE434", ["ENVE331"]).
prerequisite("ENVE436", ["ENVE325", "ENVE331"]).
prerequisite("ENVE438", ["ENVE331", "ME341"]).
prerequisite("ENVE438", ["ENVE264"]).
prerequisite("ENVE439", ["ENVE325", "ENVE331"]).
prerequisite("ENVE443", ["ENVE331"]).
prerequisite("ENVE450", ["ENVE331"]).
prerequisite("ENVE455", ["ENVE331"]).
prerequisite("ENVE466", ["ENVE438", "CE336", "CE465"]).
prerequisite("ENVE467", ["ENVE466"]).
prerequisite("ENVE480", ["ENVE304"]).
prerequisite("ENVE480", ["ME302"]).
prerequisite("ENVE490", ["ENVE331", "CHEM125", "ENVE421"]).
prerequisite("ENVE490", ["MATE370", "CHEM125", "ENVE421"]).
prerequisite("ENVE525", ["ENVE264"]).
prerequisite("ENVE525", ["ME341"]).
prerequisite("ENVE537", ["ENVE438"]).
prerequisite("ENVE540", ["ENVE421"]).
prerequisite("ENVE540", ["ENVE438"]).
prerequisite("ENVE581", ["CHEM312", "MCRO221"]).
prerequisite("ESCI590", ["ESCI501"]).
prerequisite("ES215", ["ES112"]).
prerequisite("ES325", ["ES112"]).
prerequisite("ES325", ["ES212"]).
prerequisite("ES406", ["ES253", "NR141"]).
prerequisite("ES406", ["ES253", "NR142"]).
prerequisite("ES410", ["ES390"]).
prerequisite("ES450", ["ES390"]).
prerequisite("ES461", ["ES390"]).
prerequisite("FPE502", ["FPE501"]).
prerequisite("FPE503", ["FPE502"]).
prerequisite("FPE504", ["FPE502", "FPE503"]).
prerequisite("FPE552", ["FPE502", "FPE504"]).
prerequisite("FPE554", ["FPE504"]).
prerequisite("FPE555", ["LA/NR318", "NR340"]).
prerequisite("FPE596", ["FPE504"]).
prerequisite("FSN201", ["FSN125"]).
prerequisite("FSN201", ["FSN230"]).
prerequisite("FSN201", ["FSN121"]).
prerequisite("FSN204", ["FSN125"]).
prerequisite("FSN204", ["FSN230"]).
prerequisite("FSN244", ["FSN125"]).
prerequisite("FSN244", ["FSN230"]).
prerequisite("FSN304", ["CHEM127", "FSN121"]).
prerequisite("FSN310", ["FSN202"]).
prerequisite("FSN311", ["FSN125", "STAT314"]).
prerequisite("FSN311", ["FSN230", "STAT314"]).
prerequisite("FSN315", ["FSN202"]).
prerequisite("FSN321", ["FSN121", "FSN202"]).
prerequisite("FSN321", ["FSN210"]).
prerequisite("FSN323", ["FSN121", "FSN321"]).
prerequisite("FSN328", ["BIO161"]).
prerequisite("FSN329", ["FSN328"]).
prerequisite("FSN330", ["FSN204"]).
prerequisite("FSN332", ["FSN331"]).
prerequisite("FSN333", ["FSN328"]).
prerequisite("FSN333", ["FSN331", "FSN332"]).
prerequisite("FSN334", ["FSN204"]).
prerequisite("FSN342", ["CHEM313"]).
prerequisite("FSN342", ["CHEM314", "MCRO221"]).
prerequisite("FSN343", ["FSN121"]).
prerequisite("FSN344", ["FSN321", "FSN343"]).
prerequisite("FSN346", ["FSN342"]).
prerequisite("FSN364", ["FSN125"]).
prerequisite("FSN364", ["FSN230", "CHEM313"]).
prerequisite("FSN364", ["CHEM314"]).
prerequisite("FSN368", ["FSN364"]).
prerequisite("FSN370", ["FSN204", "MCRO221"]).
prerequisite("FSN374", ["FSN125"]).
prerequisite("FSN374", ["FSN230"]).
prerequisite("FSN374", ["WVIT102"]).
prerequisite("FSN375", ["FSN370"]).
prerequisite("FSN381", ["FSN281", "STAT218", "FSN329"]).
prerequisite("FSN381", ["FSN332"]).
prerequisite("FSN405", ["FSN328"]).
prerequisite("FSN405", ["FSN331"]).
prerequisite("FSN408", ["FSN311"]).
prerequisite("FSN410", ["FSN210"]).
prerequisite("FSN415", ["FSN328"]).
prerequisite("FSN415", ["FSN331", "FSN329"]).
prerequisite("FSN415", ["FSN332", "FSN333"]).
prerequisite("FSN416", ["FSN310"]).
prerequisite("FSN417", ["PSY201", "FSN415"]).
prerequisite("FSN426", ["FSN344"]).
prerequisite("FSN429", ["BIO231", "ZOO331"]).
prerequisite("FSN430", ["FSN429"]).
prerequisite("FSN431", ["BIO231", "FSN329"]).
prerequisite("FSN432", ["BIO232"]).
prerequisite("FSN433", ["FSN432"]).
prerequisite("FSN444", ["FSN204", "FSN330"]).
prerequisite("FSN457", ["FSN364"]).
prerequisite("FSN458", ["FSN364"]).
prerequisite("FSN459", ["FSN330", "FSN335", "FSN364", "FSN370"]).
prerequisite("FSN459", ["FSN375"]).
prerequisite("FSN463", ["FSN329"]).
prerequisite("FSN463", ["FSN332"]).
prerequisite("FSN474", ["FSN444"]).
prerequisite("FSN478", ["FSN381"]).
prerequisite("FSN479", ["FSN381"]).
prerequisite("FSN481", ["FSN478"]).
prerequisite("FSN481", ["FSN479"]).
prerequisite("FSN490", ["FSN375"]).
prerequisite("FSN491", ["FSN375"]).
prerequisite("FSN508", ["FSN408"]).
prerequisite("FSN516", ["FSN416"]).
prerequisite("FSN528", ["FSN328"]).
prerequisite("FSN528", ["FSN331"]).
prerequisite("FSN529", ["FSN329"]).
prerequisite("FSN529", ["FSN332", "FSN333"]).
prerequisite("FSN530", ["FSN329"]).
prerequisite("FSN530", ["FSN332", "FSN333"]).
prerequisite("FSN531", ["FSN331"]).
prerequisite("FSN564", ["FSN364"]).
prerequisite("FSN574", ["FSN335"]).
prerequisite("FSN575", ["FSN375", "MCRO421"]).
prerequisite("FSN575", ["MCRO421"]).
prerequisite("FSN598", ["STAT511"]).
prerequisite("FR102", ["FR101"]).
prerequisite("FR103", ["FR102"]).
prerequisite("FR201", ["FR103"]).
prerequisite("FR202", ["FR201"]).
prerequisite("FR203", ["FR202"]).
prerequisite("FR233", ["FR203"]).
prerequisite("FR301", ["FR203"]).
prerequisite("FR302", ["FR203"]).
prerequisite("GEOG328", ["GEOG218"]).
prerequisite("GEOG328", ["NR218"]).
prerequisite("GEOG408", ["GEOG308"]).
prerequisite("GEOG415", ["ERSC/GEOG250"]).
prerequisite("GEOG435", ["ERSC/GEOG250"]).
prerequisite("GEOG441", ["GEOG218"]).
prerequisite("GEOG441", ["LA/NR218", "BRAE345"]).
prerequisite("GEOG441", ["GEOG328"]).
prerequisite("GEOG465", ["GEOG464"]).
prerequisite("GEOL201", ["MATH119"]).
prerequisite("GEOL301", ["MATH142"]).
prerequisite("GEOL303", ["GEOL301", "STAT217", "STAT218", "STAT301", "STAT312"]).
prerequisite("GEOL303", ["STAT321"]).
prerequisite("GEOL309", ["GEOL102", "ERSC223"]).
prerequisite("GEOL309", ["GEOL201", "ERSC223"]).
prerequisite("GEOL311", ["GEOL309"]).
prerequisite("GEOL330", ["GEOL102"]).
prerequisite("GEOL330", ["GEOL201", "GEOL241"]).
prerequisite("GEOL415", ["GEOL241", "ERSC223"]).
prerequisite("GEOL416", ["GEOL102", "GEOL415"]).
prerequisite("GEOL416", ["GEOL201", "GEOL415"]).
prerequisite("GEOL417", ["ERSC/GEOL401"]).
prerequisite("GEOL417", ["ERSC/GEOL416"]).
prerequisite("GEOL420", ["GEOL201", "PHYS141"]).
prerequisite("GER102", ["GER101"]).
prerequisite("GER103", ["GER102"]).
prerequisite("GER201", ["GER103"]).
prerequisite("GER202", ["GER201"]).
prerequisite("GER203", ["GER202"]).
prerequisite("GER233", ["GER202"]).
prerequisite("GER301", ["GER202"]).
prerequisite("GER302", ["GER202"]).
prerequisite("GSA543", ["GSA541"]).
prerequisite("GSB517", ["GSE519"]).
prerequisite("GSB521", ["GSB520"]).
prerequisite("GSB536", ["GSB520"]).
prerequisite("GSB545", ["GSB544"]).
prerequisite("GSB550", ["GSE520"]).
prerequisite("GSB551", ["GSE519"]).
prerequisite("GSB551", ["GSE520"]).
prerequisite("GSB564", ["GSB531"]).
prerequisite("GSB590", ["GSB511", "GSB523", "GSB531"]).
prerequisite("GSB597", ["GSB523"]).
prerequisite("GSE510", ["MATH206", "MATH244", "MATH408"]).
prerequisite("GSE510", ["MATH410"]).
prerequisite("GSE511", ["GSE510"]).
prerequisite("GSE512", ["GSE511"]).
prerequisite("GSE518", ["MATH206"]).
prerequisite("GSE518", ["MATH244"]).
prerequisite("GSE518", ["GSE510"]).
prerequisite("GSE519", ["GSB518"]).
prerequisite("GSE519", ["GSE518", "GSB544"]).
prerequisite("GSE519", ["GSE524"]).
prerequisite("GSE520", ["GSE518", "ECON339"]).
prerequisite("GSE522", ["GSE520"]).
prerequisite("GSE526", ["GSE520", "GSE524"]).
prerequisite("GSE532", ["GSE511"]).
prerequisite("GSE534", ["GSE511"]).
prerequisite("GSE536", ["GSE511"]).
prerequisite("GSE538", ["GSE511"]).
prerequisite("GSE542", ["GSE522"]).
prerequisite("GSE542", ["GSE526"]).
prerequisite("GSE544", ["GSE520", "GSE524", "GSE526"]).
prerequisite("GSE546", ["GSE511"]).
prerequisite("GSE552", ["GSE526"]).
prerequisite("GSP532", ["GSP530"]).
prerequisite("GSP533", ["GSP530"]).
prerequisite("GSP535", ["GSP530"]).
prerequisite("GSP536", ["GSP530"]).
prerequisite("GSP538", ["GSP530"]).
prerequisite("GSP539", ["GSP530"]).
prerequisite("GSP540", ["GSP530"]).
prerequisite("GSP541", ["GSP530"]).
prerequisite("GRC203", ["GRC101"]).
prerequisite("GRC204", ["GRC101"]).
prerequisite("GRC220", ["GRC101"]).
prerequisite("GRC224", ["GRC211"]).
prerequisite("GRC301", ["GRC203"]).
prerequisite("GRC301", ["GRC376"]).
prerequisite("GRC301", ["GRC377"]).
prerequisite("GRC316", ["GRC203"]).
prerequisite("GRC320", ["GRC328", "STAT217"]).
prerequisite("GRC322", ["GRC318"]).
prerequisite("GRC328", ["GRC211"]).
prerequisite("GRC329", ["GRC328"]).
prerequisite("GRC331", ["ART182"]).
prerequisite("GRC331", ["GRC301"]).
prerequisite("GRC337", ["GRC301"]).
prerequisite("GRC338", ["GRC203", "GRC301"]).
prerequisite("GRC339", ["GRC338"]).
prerequisite("GRC340", ["GRC338"]).
prerequisite("GRC347", ["GRC318"]).
prerequisite("GRC357", ["GRC301"]).
prerequisite("GRC361", ["GRC101", "GRC204"]).
prerequisite("GRC372", ["GRC102"]).
prerequisite("GRC372", ["GRC172"]).
prerequisite("GRC402", ["GRC318"]).
prerequisite("GRC404", ["GRC328"]).
prerequisite("GRC411", ["GRC403"]).
prerequisite("GRC411", ["GRC404"]).
prerequisite("GRC420", ["GRC361"]).
prerequisite("GRC421", ["GRC320"]).
prerequisite("GRC422", ["GRC403"]).
prerequisite("GRC422", ["GRC404"]).
prerequisite("GRC429", ["GRC338"]).
prerequisite("GRC437", ["GRC337"]).
prerequisite("GRC451", ["GRC203"]).
prerequisite("GRC452", ["GRC203"]).
prerequisite("GRC453", ["GRC203"]).
prerequisite("GRC470", ["GRC101", "GRC201"]).
prerequisite("GRC520", ["GRC501"]).
prerequisite("GRC530", ["GRC502"]).
prerequisite("GRC596", ["GRC560"]).
prerequisite("HLTH265", ["HLTH/KINE250", "HLTH/KINE255"]).
prerequisite("HLTH265", ["HLTH/KINE260", "HLTH101"]).
prerequisite("HLTH280", ["HLTH/KINE250", "HLTH/KINE255"]).
prerequisite("HLTH280", ["HLTH/KINE260", "KINE319", "STAT218"]).
prerequisite("HLTH298", ["HLTH/KINE265", "STAT217"]).
prerequisite("HLTH298", ["HLTH/KINE265", "STAT218", "MCRO221"]).
prerequisite("HLTH298", ["HLTH/KINE265", "MCRO224"]).
prerequisite("HLTH305", ["BIO231", "HLTH/KINE250", "HLTH/KINE255", "HLTH/KINE260"]).
prerequisite("HLTH305", ["BIO231", "HLTH/KINE443", "BIO232"]).
prerequisite("HLTH310", ["BIO231"]).
prerequisite("HLTH318", ["HLTH/KINE298", "PSY201"]).
prerequisite("HLTH318", ["PSY202", "STAT313"]).
prerequisite("HLTH334", ["HLTH/KINE298", "HLTH299", "PSY201"]).
prerequisite("HLTH334", ["HLTH/KINE298", "HLTH299", "PSY202"]).
prerequisite("HLTH334", ["HLTH318", "PSY201"]).
prerequisite("HLTH334", ["HLTH318", "PSY202"]).
prerequisite("HLTH402", ["HLTH299"]).
prerequisite("HLTH402", ["HLTH318"]).
prerequisite("HLTH405", ["BIO231"]).
prerequisite("HLTH434", ["HLTH/KINE265"]).
prerequisite("HLTH435", ["HLTH/KINE320", "HLTH/KINE434"]).
prerequisite("HLTH450", ["HLTH/KINE250"]).
prerequisite("HLTH453", ["FSN210", "HLTH/KINE298", "KINE304"]).
prerequisite("HLTH453", ["FSN210", "FSN310", "HLTH405", "KINE266", "HLTH334"]).
prerequisite("HLTH453", ["FSN210", "FSN415"]).
prerequisite("HLTH453", ["KINE451", "HLTH/KINE298", "KINE304"]).
prerequisite("HLTH453", ["KINE451", "FSN310", "HLTH405", "KINE266", "HLTH334"]).
prerequisite("HLTH453", ["KINE451", "FSN415"]).
prerequisite("HIST303", ["HIST100"]).
prerequisite("HIST304", ["HIST303"]).
prerequisite("HIST401", ["HIST303"]).
prerequisite("HIST405", ["HIST303"]).
prerequisite("HIST406", ["HIST303"]).
prerequisite("HIST407", ["HIST303"]).
prerequisite("HIST408", ["HIST303"]).
prerequisite("HIST409", ["HIST303"]).
prerequisite("HIST413", ["HIST303"]).
prerequisite("HIST416", ["HIST303"]).
prerequisite("HIST417", ["HIST303"]).
prerequisite("HIST418", ["HIST303"]).
prerequisite("HIST419", ["HIST303"]).
prerequisite("HIST421", ["HIST303"]).
prerequisite("HIST422", ["HIST303"]).
prerequisite("HIST422", ["HIST316"]).
prerequisite("HIST422", ["WLC310"]).
prerequisite("HIST423", ["HIST303"]).
prerequisite("HIST425", ["HIST424", "EDUC469"]).
prerequisite("HIST425", ["EDUC479"]).
prerequisite("HIST426", ["HIST303"]).
prerequisite("HIST427", ["HIST303"]).
prerequisite("HIST428", ["HIST303"]).
prerequisite("HIST429", ["HIST303"]).
prerequisite("HIST430", ["HIST303"]).
prerequisite("HIST432", ["HIST303"]).
prerequisite("HIST433", ["HIST303"]).
prerequisite("HIST434", ["HIST303"]).
prerequisite("HIST435", ["HIST303"]).
prerequisite("HIST437", ["HIST303"]).
prerequisite("HIST440", ["HIST303"]).
prerequisite("HIST441", ["HIST303"]).
prerequisite("HIST442", ["HIST303"]).
prerequisite("HIST443", ["HIST303"]).
prerequisite("HIST444", ["HIST303"]).
prerequisite("HIST445", ["HIST303"]).
prerequisite("HIST452", ["HIST303"]).
prerequisite("HIST453", ["HIST303"]).
prerequisite("HIST458", ["HIST303"]).
prerequisite("HIST459", ["HIST303"]).
prerequisite("HIST460", ["HIST303"]).
prerequisite("HIST461", ["HIST303", "HIST304"]).
prerequisite("HIST467", ["HIST303"]).
prerequisite("HIST470", ["HIST303"]).
prerequisite("HIST475", ["HIST303"]).
prerequisite("HIST477", ["HIST303"]).
prerequisite("HIST512", ["HIST504"]).
prerequisite("HNRS132", ["PHYS141", "MATH142"]).
prerequisite("HNRS132", ["PHYS141", "MATH182"]).
prerequisite("HNRS134", ["MATH141"]).
prerequisite("HNRS134", ["MATH142"]).
prerequisite("HNRS134", ["MATH182"]).
prerequisite("HNRS142", ["MATH141"]).
prerequisite("HNRS143", ["MATH142"]).
prerequisite("HNRS162", ["HNRS161"]).
prerequisite("HNRS163", ["HNRS162"]).
prerequisite("HNRS211", ["MATH241", "PHYS131"]).
prerequisite("HNRS211", ["PHYS141"]).
prerequisite("HNRS214", ["MATH241"]).
prerequisite("HNRS241", ["MATH143"]).
prerequisite("HNRS244", ["MATH122"]).
prerequisite("HNRS244", ["MATH143"]).
prerequisite("HNRS262", ["HNRS261"]).
prerequisite("HNRS263", ["HNRS262"]).
prerequisite("HNRS265", ["HNRS162"]).
prerequisite("HNRS351", ["COMS250"]).
prerequisite("HNRS412", ["ENGL411"]).
prerequisite("HNRS450", ["PHYS104"]).
prerequisite("IME146", ["IME145", "ME130"]).
prerequisite("IME212", ["CSC232"]).
prerequisite("IME223", ["MATH141", "IME101"]).
prerequisite("IME239", ["IME223"]).
prerequisite("IME244", ["IME144", "MATE210", "MATE215", "IME141", "IME142"]).
prerequisite("IME301", ["MATH244"]).
prerequisite("IME305", ["IME301", "STAT312"]).
prerequisite("IME305", ["IME301", "STAT321"]).
prerequisite("IME312", ["CSC232"]).
prerequisite("IME314", ["MATH241"]).
prerequisite("IME315", ["MATH142"]).
prerequisite("IME319", ["PSY201"]).
prerequisite("IME319", ["PSY202"]).
prerequisite("IME326", ["STAT321"]).
prerequisite("IME327", ["STAT321"]).
prerequisite("IME330", ["IME141"]).
prerequisite("IME330", ["ITP341"]).
prerequisite("IME331", ["MATE210", "IME143", "IME144"]).
prerequisite("IME331", ["MATE210", "IME146", "IME141"]).
prerequisite("IME335", ["MATH244"]).
prerequisite("IME336", ["IME335", "ME212", "MATH244"]).
prerequisite("IME342", ["IME223", "MATH241", "STAT321"]).
prerequisite("IME356", ["EE321"]).
prerequisite("IME372", ["IME212", "IME312", "IME326", "MATH244"]).
prerequisite("IME408", ["CSC232"]).
prerequisite("IME409", ["IME239", "IME314", "IME305"]).
prerequisite("IME409", ["IME315", "IME305"]).
prerequisite("IME410", ["IME342"]).
prerequisite("IME410", ["IME305"]).
prerequisite("IME415", ["IME305"]).
prerequisite("IME415", ["IME342"]).
prerequisite("IME416", ["IME356", "ME305"]).
prerequisite("IME417", ["IME342"]).
prerequisite("IME417", ["IME410"]).
prerequisite("IME418", ["IME450"]).
prerequisite("IME420", ["IME305"]).
prerequisite("IME421", ["PSY201"]).
prerequisite("IME421", ["PSY202"]).
prerequisite("IME424", ["IME223"]).
prerequisite("IME428", ["IME143", "IME144", "IME326", "IME327", "IME503"]).
prerequisite("IME428", ["IME143", "IME144", "STAT312"]).
prerequisite("IME428", ["IME146", "IME326", "IME327", "IME503"]).
prerequisite("IME428", ["IME146", "STAT312"]).
prerequisite("IME429", ["IME319", "IME326"]).
prerequisite("IME429", ["IME319", "IME327"]).
prerequisite("IME430", ["IME326", "IME327", "IME503", "STAT302"]).
prerequisite("IME430", ["STAT312"]).
prerequisite("IME432", ["IME144", "MATE210", "IME330"]).
prerequisite("IME432", ["ME251", "MATE210", "IME330"]).
prerequisite("IME435", ["IME326", "IME327", "IME503"]).
prerequisite("IME435", ["STAT312"]).
prerequisite("IME443", ["IME144"]).
prerequisite("IME450", ["MATH244", "IME330", "IME335"]).
prerequisite("IME451", ["EE201"]).
prerequisite("IME451", ["IME156"]).
prerequisite("IME451", ["ITP150"]).
prerequisite("IME456", ["IME156", "EE143", "IME212", "CSC365"]).
prerequisite("IME456", ["IME156", "EE143", "DATA301"]).
prerequisite("IME456", ["EE145", "IME212", "CSC365"]).
prerequisite("IME456", ["EE145", "DATA301"]).
prerequisite("IME457", ["IME156"]).
prerequisite("IME457", ["EE143"]).
prerequisite("IME457", ["EE201"]).
prerequisite("IME458", ["EE112"]).
prerequisite("IME458", ["EE113"]).
prerequisite("IME458", ["EE201", "MATE210"]).
prerequisite("IME460", ["IME223"]).
prerequisite("IME460", ["ITP303"]).
prerequisite("IME481", ["IME326"]).
prerequisite("IME481", ["IME327"]).
prerequisite("IME482", ["IME481", "IME417"]).
prerequisite("IME483", ["IME482"]).
prerequisite("IME511", ["IME510"]).
prerequisite("IME520", ["IME410"]).
prerequisite("IME527", ["IME326"]).
prerequisite("IME527", ["IME327"]).
prerequisite("IME527", ["IME503"]).
prerequisite("IME527", ["STAT312"]).
prerequisite("IME542", ["IME326"]).
prerequisite("IME542", ["IME327"]).
prerequisite("IME542", ["IME503"]).
prerequisite("IME542", ["STAT312"]).
prerequisite("IME543", ["IME326"]).
prerequisite("IME543", ["IME327"]).
prerequisite("IME543", ["IME503"]).
prerequisite("IME545", ["IME420"]).
prerequisite("IME546", ["IME301"]).
prerequisite("IME546", ["DATA301"]).
prerequisite("IME546", ["IME212"]).
prerequisite("IME549", ["IME212", "IME301"]).
prerequisite("IME549", ["IME212", "IME305"]).
prerequisite("IME549", ["IME212"]).
prerequisite("IME549", ["DATA301", "IME301"]).
prerequisite("IME549", ["DATA301", "IME305"]).
prerequisite("IME549", ["DATA301"]).
prerequisite("IME565", ["IME372"]).
prerequisite("IME565", ["DATA301"]).
prerequisite("ITP211", ["ITP150"]).
prerequisite("ITP260", ["CHEM111"]).
prerequisite("ITP260", ["CHEM124"]).
prerequisite("ITP260", ["CHEM127"]).
prerequisite("ITP275", ["ITP150", "ITP211"]).
prerequisite("ITP302", ["BUS346"]).
prerequisite("ITP303", ["STAT217", "STAT218", "STAT251"]).
prerequisite("ITP326", ["ITP233"]).
prerequisite("ITP326", ["BUS310"]).
prerequisite("ITP371", ["MATH141"]).
prerequisite("ITP371", ["MATH221", "STAT217"]).
prerequisite("ITP371", ["STAT218"]).
prerequisite("ITP371", ["STAT251"]).
prerequisite("ITP390", ["ITP260"]).
prerequisite("ITP403", ["ITP303"]).
prerequisite("ITP404", ["ITP303"]).
prerequisite("ITP406", ["BUS346"]).
prerequisite("ITP408", ["ITP330"]).
prerequisite("ITP409", ["ITP330"]).
prerequisite("ITP410", ["BUS391", "ITP303"]).
prerequisite("ITP410", ["BUS391", "ITP371"]).
prerequisite("ITP411", ["ITP330"]).
prerequisite("ITP412", ["ITP341"]).
prerequisite("ITP413", ["ITP341", "ITP408"]).
prerequisite("ITP414", ["ITP408", "ITP411"]).
prerequisite("ITP415", ["ITP303", "ITP326", "ITP330", "ITP371"]).
prerequisite("ITP415", ["ITP341", "ITP371"]).
prerequisite("ITP428", ["BUS342", "BUS346"]).
prerequisite("ITP428", ["ITP326"]).
prerequisite("ITP430", ["ITP330"]).
prerequisite("ITP467", ["ITP211", "ITP233", "ITP260", "ITP326", "BUS346"]).
prerequisite("ITP468", ["BUS392"]).
prerequisite("ITP468", ["CSC101"]).
prerequisite("ITP468", ["CSC232"]).
prerequisite("ITP468", ["ECON395"]).
prerequisite("ITP475", ["ITP330"]).
prerequisite("ITP485", ["ITP341", "ITP408", "ITP475"]).
prerequisite("ISLA201", ["COMS218", "ES112", "HIST206", "HIST216", "ISLA123", "JOUR219", "JOUR228", "RELS201", "WGQS201"]).
prerequisite("ISLA201", ["WGQS210"]).
prerequisite("ISLA240", ["TH210"]).
prerequisite("ISLA255", ["ISLA201"]).
prerequisite("ISLA340", ["ISLA240"]).
prerequisite("ISLA341", ["ISLA340"]).
prerequisite("ISLA355", ["ISLA201", "STAT130", "STAT217", "STAT218"]).
prerequisite("ISLA355", ["STAT251"]).
prerequisite("ISLA440", ["ISLA201", "ISLA355"]).
prerequisite("ISLA456", ["ISLA123"]).
prerequisite("ISLA461", ["ISLA355"]).
prerequisite("ISLA465", ["ISLA201"]).
prerequisite("ITAL102", ["ITAL101", "ITAL141"]).
prerequisite("ITAL103", ["ITAL102", "ITAL142"]).
prerequisite("ITAL142", ["ITAL101", "ITAL141"]).
prerequisite("ITAL143", ["ITAL102", "ITAL142"]).
prerequisite("ITAL201", ["ITAL103", "ITAL143"]).
prerequisite("ITAL202", ["ITAL201", "ITAL241"]).
prerequisite("ITAL241", ["ITAL103", "ITAL143"]).
prerequisite("JPNS102", ["JPNS101"]).
prerequisite("JPNS103", ["JPNS102"]).
prerequisite("JPNS201", ["JPNS103"]).
prerequisite("JPNS202", ["JPNS201"]).
prerequisite("JOUR285", ["JOUR203"]).
prerequisite("JOUR302", ["JOUR203"]).
prerequisite("JOUR303", ["JOUR203"]).
prerequisite("JOUR304", ["JOUR203"]).
prerequisite("JOUR320", ["JOUR220"]).
prerequisite("JOUR334", ["JOUR203"]).
prerequisite("JOUR338", ["JOUR285"]).
prerequisite("JOUR338", ["JOUR303"]).
prerequisite("JOUR342", ["JOUR312"]).
prerequisite("JOUR346", ["JOUR203", "JOUR285"]).
prerequisite("JOUR348", ["JOUR203", "JOUR333"]).
prerequisite("JOUR350", ["JOUR285", "STAT130", "STAT217", "STAT218"]).
prerequisite("JOUR350", ["JOUR285", "STAT251"]).
prerequisite("JOUR352", ["JOUR334"]).
prerequisite("JOUR353", ["JOUR303"]).
prerequisite("JOUR353", ["JOUR333"]).
prerequisite("JOUR378", ["JOUR285", "JOUR303"]).
prerequisite("JOUR378", ["JOUR346"]).
prerequisite("JOUR385", ["BUS310"]).
prerequisite("JOUR385", ["COMS/JOUR218"]).
prerequisite("JOUR385", ["JOUR228"]).
prerequisite("JOUR390", ["JOUR203"]).
prerequisite("JOUR401", ["JOUR203"]).
prerequisite("JOUR402", ["JOUR203"]).
prerequisite("JOUR403", ["JOUR303"]).
prerequisite("JOUR403", ["JOUR346"]).
prerequisite("JOUR407", ["JOUR203"]).
prerequisite("JOUR410", ["JOUR285"]).
prerequisite("JOUR413", ["JOUR312", "JOUR342"]).
prerequisite("JOUR415", ["JOUR413"]).
prerequisite("JOUR444", ["JOUR352", "JOUR353"]).
prerequisite("JOUR444", ["JOUR413"]).
prerequisite("KINE112", ["KINE109"]).
prerequisite("KINE122", ["KINE121"]).
prerequisite("KINE266", ["PSY201"]).
prerequisite("KINE266", ["PSY202"]).
prerequisite("KINE278", ["PHIL230"]).
prerequisite("KINE278", ["PHIL231"]).
prerequisite("KINE280", ["HLTH/KINE250", "HLTH/KINE255"]).
prerequisite("KINE280", ["HLTH/KINE260", "KINE319", "STAT218"]).
prerequisite("KINE301", ["PHYS121", "BIO231"]).
prerequisite("KINE301", ["PHYS121", "BIO409"]).
prerequisite("KINE303", ["BIO231", "BIO232"]).
prerequisite("KINE303", ["BIO231", "BIO361", "CHEM128"]).
prerequisite("KINE304", ["KINE303"]).
prerequisite("KINE312", ["STAT217"]).
prerequisite("KINE312", ["STAT218"]).
prerequisite("KINE319", ["STAT217"]).
prerequisite("KINE319", ["STAT218"]).
prerequisite("KINE330", ["KINE301"]).
prerequisite("KINE349", ["KINE303", "KINE301"]).
prerequisite("KINE366", ["PSY201", "PSY202"]).
prerequisite("KINE366", ["KINE266"]).
prerequisite("KINE403", ["KINE301"]).
prerequisite("KINE406", ["BIO231", "BIO232"]).
prerequisite("KINE408", ["KINE250", "KINE255", "KINE304"]).
prerequisite("KINE408", ["KINE260", "KINE304"]).
prerequisite("KINE409", ["BMED410", "CE207"]).
prerequisite("KINE409", ["CE208"]).
prerequisite("KINE412", ["CRP214", "HLTH298"]).
prerequisite("KINE412", ["KINE319", "KINE303"]).
prerequisite("KINE438", ["KINE307"]).
prerequisite("KINE445", ["KINE303"]).
prerequisite("KINE446", ["KINE445"]).
prerequisite("KINE449", ["KINE304"]).
prerequisite("KINE451", ["KINE250", "KINE255"]).
prerequisite("KINE451", ["KINE260"]).
prerequisite("KINE454", ["KINE303"]).
prerequisite("KINE459", ["KINE301"]).
prerequisite("KINE460", ["HLTH402"]).
prerequisite("KINE460", ["KINE319"]).
prerequisite("KINE461", ["HLTH402"]).
prerequisite("KINE461", ["KINE319"]).
prerequisite("KINE462", ["HLTH402"]).
prerequisite("KINE462", ["KINE319"]).
prerequisite("KINE500", ["KINE517"]).
prerequisite("KINE504", ["KINE303"]).
prerequisite("KINE510", ["KINE503"]).
prerequisite("KINE510", ["KINE504"]).
prerequisite("KINE517", ["KINE501", "STAT512"]).
prerequisite("KINE517", ["STAT513"]).
prerequisite("KINE518", ["KINE517"]).
prerequisite("KINE522", ["KINE403"]).
prerequisite("KINE525", ["KINE402"]).
prerequisite("KINE530", ["KINE303"]).
prerequisite("KINE536", ["KINE445"]).
prerequisite("KINE599", ["KINE517", "KINE518"]).
prerequisite("LA203", ["LA202", "LA241"]).
prerequisite("LA203", ["LA243"]).
prerequisite("LA204", ["LA203", "LA241", "LA242"]).
prerequisite("LA221", ["BIO114"]).
prerequisite("LA221", ["BOT121"]).
prerequisite("LA241", ["LA243", "LA203", "MATH118"]).
prerequisite("LA241", ["LA243", "LA203", "MATH119"]).
prerequisite("LA242", ["LA203", "LA241", "LA204"]).
prerequisite("LA320", ["LA211", "LA212"]).
prerequisite("LA330", ["LA212"]).
prerequisite("LA349", ["PLSC233"]).
prerequisite("LA350", ["LA242"]).
prerequisite("LA370", ["LA204"]).
prerequisite("LA401", ["LA402", "LA405"]).
prerequisite("LA432", ["LA220"]).
prerequisite("LA433", ["LA211"]).
prerequisite("LA438", ["LA220"]).
prerequisite("LA439", ["AEPS381"]).
prerequisite("LA439", ["LA221"]).
prerequisite("LA461", ["LA401", "LA402", "LA406"]).
prerequisite("LA520", ["LA330", "LA404"]).
prerequisite("LA521", ["LA403", "LA432"]).
prerequisite("LA531", ["CRP512"]).
prerequisite("LA538", ["CRP457", "CRP512", "LA438"]).
prerequisite("LAES301", ["MATH241"]).
prerequisite("LAES302", ["LAES301"]).
prerequisite("LAES461", ["LAES302"]).
prerequisite("LAES462", ["LAES461"]).
prerequisite("LS301", ["LS201"]).
prerequisite("LS370", ["LS211"]).
prerequisite("LS370", ["LS310"]).
prerequisite("LS412", ["LS211"]).
prerequisite("LS413", ["PSC103"]).
prerequisite("MSCI300", ["BIO150"]).
prerequisite("MSCI300", ["BIO160", "BIO162", "BIO263", "STAT218"]).
prerequisite("MSCI301", ["BIO150"]).
prerequisite("MSCI301", ["BIO160"]).
prerequisite("MSCI324", ["BIO162"]).
prerequisite("MSCI401", ["MSCI300"]).
prerequisite("MSCI401", ["MSCI301"]).
prerequisite("MSCI401", ["PSC201"]).
prerequisite("MSCI403", ["CHEM302"]).
prerequisite("MSCI410", ["BIO263", "MSCI300"]).
prerequisite("MSCI410", ["MSCI301"]).
prerequisite("MSCI428", ["BIO150", "BIO327"]).
prerequisite("MSCI428", ["BIO150", "BIO363"]).
prerequisite("MSCI428", ["BIO150", "BIO401"]).
prerequisite("MSCI428", ["BIO150", "BOT326"]).
prerequisite("MSCI428", ["BIO150", "MSCI300"]).
prerequisite("MSCI428", ["BIO150", "PSC201"]).
prerequisite("MSCI428", ["BIO160", "BIO263", "BIO327"]).
prerequisite("MSCI428", ["BIO160", "BIO263", "BIO363"]).
prerequisite("MSCI428", ["BIO160", "BIO263", "BIO401"]).
prerequisite("MSCI428", ["BIO160", "BIO263", "BOT326"]).
prerequisite("MSCI428", ["BIO160", "BIO263", "MSCI300"]).
prerequisite("MSCI428", ["BIO160", "BIO263", "PSC201"]).
prerequisite("MSCI437", ["BIO162"]).
prerequisite("MSCI438", ["BIO150"]).
prerequisite("MSCI438", ["BIO160", "BIO162", "BIO263"]).
prerequisite("MSCI439", ["BIO162", "MSCI300", "BIO322"]).
prerequisite("MATE120", ["MATE110"]).
prerequisite("MATE130", ["MATE120"]).
prerequisite("MATE210", ["CHEM111"]).
prerequisite("MATE210", ["CHEM124"]).
prerequisite("MATE210", ["CHEM127", "MATE215"]).
prerequisite("MATE215", ["MATE210"]).
prerequisite("MATE222", ["MATE210"]).
prerequisite("MATE225", ["MATE215", "MATE232"]).
prerequisite("MATE232", ["MATE210"]).
prerequisite("MATE235", ["MATE225"]).
prerequisite("MATE245", ["MATE210", "MATE235"]).
prerequisite("MATE280", ["CHEM125", "PHYS133"]).
prerequisite("MATE280", ["PHYS143", "MATH143", "MATE210", "MATE215"]).
prerequisite("MATE300", ["MATE210"]).
prerequisite("MATE310", ["MATE210"]).
prerequisite("MATE325", ["PHYS132"]).
prerequisite("MATE325", ["PHYS142", "MATH141"]).
prerequisite("MATE326", ["MATH141", "ME211"]).
prerequisite("MATE327", ["CHEM124", "PHYS133"]).
prerequisite("MATE327", ["PHYS143"]).
prerequisite("MATE340", ["MATE210", "PHYS133"]).
prerequisite("MATE340", ["PHYS143"]).
prerequisite("MATE350", ["MATE210", "CE204"]).
prerequisite("MATE360", ["MATE235"]).
prerequisite("MATE370", ["MATE280"]).
prerequisite("MATE370", ["MATE380"]).
prerequisite("MATE380", ["CHEM125", "PHYS133"]).
prerequisite("MATE380", ["PHYS143", "MATH143", "MATE210", "MATE215"]).
prerequisite("MATE401", ["MATE210", "MATE215"]).
prerequisite("MATE402", ["MATE210", "MATE401"]).
prerequisite("MATE403", ["CSC231", "ME211", "MATE280"]).
prerequisite("MATE410", ["CHEM125", "PHYS133"]).
prerequisite("MATE410", ["PHYS143", "MATE210"]).
prerequisite("MATE420", ["MATE310"]).
prerequisite("MATE420", ["CHEM444"]).
prerequisite("MATE420", ["CHEM544"]).
prerequisite("MATE422", ["MATE210"]).
prerequisite("MATE425", ["CHEM125"]).
prerequisite("MATE425", ["CHEM128", "MATE210", "MATE215"]).
prerequisite("MATE430", ["BMED212"]).
prerequisite("MATE430", ["MATE210"]).
prerequisite("MATE440", ["MATE210"]).
prerequisite("MATE445", ["MATE210", "MATE440"]).
prerequisite("MATE446", ["CHEM125"]).
prerequisite("MATE446", ["CHEM128"]).
prerequisite("MATE450", ["MATE210"]).
prerequisite("MATE456", ["MATE210"]).
prerequisite("MATE458", ["EE112"]).
prerequisite("MATE458", ["EE113"]).
prerequisite("MATE458", ["EE201", "MATE210"]).
prerequisite("MATE460", ["MATE350"]).
prerequisite("MATE465", ["MATE360"]).
prerequisite("MATE480", ["MATE350"]).
prerequisite("MATE483", ["MATE482"]).
prerequisite("MATE484", ["MATE483"]).
prerequisite("MATE485", ["MATE210"]).
prerequisite("MATE490", ["MATE210"]).
prerequisite("MATE530", ["BIO161"]).
prerequisite("MATE530", ["BIO213", "BMED/BRAE213"]).
prerequisite("MATH95", ["MATH115"]).
prerequisite("MATH117", ["MATH115"]).
prerequisite("MATH142", ["MATH141"]).
prerequisite("MATH143", ["MATH142"]).
prerequisite("MATH162", ["MATH161"]).
prerequisite("MATH182", ["MATH141"]).
prerequisite("MATH202", ["MATH143"]).
prerequisite("MATH206", ["MATH122"]).
prerequisite("MATH206", ["MATH143"]).
prerequisite("MATH241", ["MATH143"]).
prerequisite("MATH242", ["MATH206", "MATH123"]).
prerequisite("MATH242", ["MATH206", "MATH241"]).
prerequisite("MATH244", ["MATH122"]).
prerequisite("MATH244", ["MATH143"]).
prerequisite("MATH248", ["MATH123"]).
prerequisite("MATH248", ["MATH143"]).
prerequisite("MATH253", ["MATH123", "MATH206"]).
prerequisite("MATH253", ["MATH241", "MATH206"]).
prerequisite("MATH300", ["MATH248"]).
prerequisite("MATH306", ["MATH206", "MATH123"]).
prerequisite("MATH306", ["MATH206", "MATH143", "MATH248"]).
prerequisite("MATH306", ["MATH206"]).
prerequisite("MATH306", ["MATH244", "MATH123"]).
prerequisite("MATH306", ["MATH244", "MATH143", "MATH248"]).
prerequisite("MATH306", ["MATH244"]).
prerequisite("MATH328", ["MATH227"]).
prerequisite("MATH329", ["MATH328"]).
prerequisite("MATH330", ["MATH329"]).
prerequisite("MATH335", ["MATH248"]).
prerequisite("MATH341", ["MATH248"]).
prerequisite("MATH350", ["MATH206"]).
prerequisite("MATH350", ["MATH244", "MATH241"]).
prerequisite("MATH404", ["MATH304"]).
prerequisite("MATH406", ["MATH306"]).
prerequisite("MATH410", ["MATH242"]).
prerequisite("MATH410", ["MATH241", "MATH244"]).
prerequisite("MATH411", ["MATH408"]).
prerequisite("MATH411", ["MATH410"]).
prerequisite("MATH412", ["MATH306"]).
prerequisite("MATH413", ["MATH412"]).
prerequisite("MATH414", ["MATH413"]).
prerequisite("MATH416", ["MATH242", "MATH123"]).
prerequisite("MATH416", ["MATH242", "MATH241"]).
prerequisite("MATH416", ["MATH244", "MATH123"]).
prerequisite("MATH416", ["MATH244", "MATH241"]).
prerequisite("MATH418", ["MATH344", "MATH304"]).
prerequisite("MATH419", ["MATH248"]).
prerequisite("MATH423", ["MATH442", "MATH481"]).
prerequisite("MATH425", ["EDUC469"]).
prerequisite("MATH425", ["EDUC479"]).
prerequisite("MATH435", ["MATH248"]).
prerequisite("MATH435", ["MATH334"]).
prerequisite("MATH435", ["MATH336"]).
prerequisite("MATH436", ["MATH435", "MATH482"]).
prerequisite("MATH437", ["MATH206"]).
prerequisite("MATH437", ["MATH244", "MATH248"]).
prerequisite("MATH440", ["MATH412", "MATH481"]).
prerequisite("MATH441", ["MATH440"]).
prerequisite("MATH442", ["MATH248"]).
prerequisite("MATH442", ["MATH300"]).
prerequisite("MATH443", ["MATH442"]).
prerequisite("MATH451", ["MATH242", "MATH123"]).
prerequisite("MATH451", ["MATH242", "MATH241"]).
prerequisite("MATH451", ["MATH244", "MATH123"]).
prerequisite("MATH451", ["MATH244", "MATH241"]).
prerequisite("MATH452", ["MATH451"]).
prerequisite("MATH453", ["MATH306", "MATH451"]).
prerequisite("MATH459", ["MATH412"]).
prerequisite("MATH459", ["MATH481"]).
prerequisite("MATH460", ["CSC/CPE101"]).
prerequisite("MATH460", ["MATH350"]).
prerequisite("MATH462", ["MATH461"]).
prerequisite("MATH474", ["MATH248", "MATH404", "MATH440"]).
prerequisite("MATH475", ["MATH306"]).
prerequisite("MATH476", ["MATH306"]).
prerequisite("MATH481", ["MATH306"]).
prerequisite("MATH481", ["MATH341"]).
prerequisite("MATH482", ["MATH481"]).
prerequisite("MATH483", ["MATH482"]).
prerequisite("MATH501", ["MATH344"]).
prerequisite("MATH501", ["AERO300"]).
prerequisite("MATH502", ["AERO300"]).
prerequisite("MATH502", ["EE228"]).
prerequisite("MATH502", ["MATH344"]).
prerequisite("MATH502", ["PHYS321"]).
prerequisite("MATH502", ["CSC/CPE101", "AERO300"]).
prerequisite("MATH502", ["CSC/CPE101", "EE228"]).
prerequisite("MATH502", ["CSC/CPE101", "MATH344"]).
prerequisite("MATH502", ["CSC/CPE101", "PHYS321"]).
prerequisite("MATH502", ["CSC231", "AERO300"]).
prerequisite("MATH502", ["CSC231", "EE228"]).
prerequisite("MATH502", ["CSC231", "MATH344"]).
prerequisite("MATH502", ["CSC231", "PHYS321"]).
prerequisite("MATH502", ["CSC232", "AERO300"]).
prerequisite("MATH502", ["CSC232", "EE228"]).
prerequisite("MATH502", ["CSC232", "MATH344"]).
prerequisite("MATH502", ["CSC232", "PHYS321"]).
prerequisite("MATH520", ["MATH408"]).
prerequisite("MATH520", ["MATH410"]).
prerequisite("MATH521", ["MATH520"]).
prerequisite("MATH530", ["MATH248"]).
prerequisite("MATH530", ["MATH334"]).
prerequisite("MATH530", ["MATH336"]).
prerequisite("MATH531", ["MATH435"]).
prerequisite("MATH531", ["MATH530", "MATH482"]).
prerequisite("MATH540", ["MATH412"]).
prerequisite("MATH540", ["MATH481"]).
prerequisite("MATH541", ["MATH440"]).
prerequisite("MATH541", ["MATH540"]).
prerequisite("MATH560", ["MATH482"]).
prerequisite("ME129", ["ME128"]).
prerequisite("ME130", ["ME129"]).
prerequisite("ME211", ["MATH241", "PHYS131"]).
prerequisite("ME211", ["PHYS141"]).
prerequisite("ME212", ["MATH241"]).
prerequisite("ME236", ["CHEM125", "ENGL149", "PHYS132"]).
prerequisite("ME236", ["PHYS142"]).
prerequisite("ME251", ["ME130"]).
prerequisite("ME251", ["ME228", "IME143"]).
prerequisite("ME251", ["IME146"]).
prerequisite("ME302", ["ME212", "PHYS132"]).
prerequisite("ME302", ["PHYS142"]).
prerequisite("ME303", ["ME302"]).
prerequisite("ME305", ["EE201", "EE251"]).
prerequisite("ME318", ["ME212", "MATH344", "EE201"]).
prerequisite("ME322", ["CPE/CSC101"]).
prerequisite("ME322", ["CSC231"]).
prerequisite("ME322", ["CSC234"]).
prerequisite("ME326", ["ME212"]).
prerequisite("ME328", ["BMED212"]).
prerequisite("ME328", ["ME234"]).
prerequisite("ME329", ["ME328"]).
prerequisite("ME341", ["MATH242"]).
prerequisite("ME341", ["MATH244"]).
prerequisite("ME343", ["CPE/CSC101", "CSC231", "ME236", "ME302", "ME341"]).
prerequisite("ME343", ["CSC234", "ME236", "ME302", "ME341"]).
prerequisite("ME347", ["ME236", "ME341", "ME302"]).
prerequisite("ME401", ["CE207"]).
prerequisite("ME401", ["CE208"]).
prerequisite("ME402", ["ME328"]).
prerequisite("ME403", ["CE204", "ME212"]).
prerequisite("ME403", ["CE208", "ME212"]).
prerequisite("ME404", ["BMED410", "CE207"]).
prerequisite("ME404", ["CE208"]).
prerequisite("ME405", ["EE321", "EE361", "ME305", "ME329", "ME329"]).
prerequisite("ME409", ["BMED410", "CE207"]).
prerequisite("ME409", ["CE208"]).
prerequisite("ME410", ["ME328", "ME318"]).
prerequisite("ME412", ["AERO331"]).
prerequisite("ME412", ["ME328"]).
prerequisite("ME415", ["ME302"]).
prerequisite("ME416", ["ME318", "ME329"]).
prerequisite("ME418", ["ME322"]).
prerequisite("ME419", ["ME322", "ME236"]).
prerequisite("ME422", ["ME318"]).
prerequisite("ME423", ["ME326", "ME418", "ME419"]).
prerequisite("ME423", ["ME422"]).
prerequisite("ME428", ["ME329", "ME318"]).
prerequisite("ME429", ["ME428"]).
prerequisite("ME430", ["ME429"]).
prerequisite("ME434", ["ME302"]).
prerequisite("ME435", ["ME329", "ME347"]).
prerequisite("ME436", ["ME329", "ME347"]).
prerequisite("ME438", ["ME302"]).
prerequisite("ME439", ["ME437"]).
prerequisite("ME439", ["ME438"]).
prerequisite("ME441", ["ME326", "ME329"]).
prerequisite("ME442", ["ME212"]).
prerequisite("ME443", ["MATH344"]).
prerequisite("ME444", ["ME303"]).
prerequisite("ME448", ["ME303", "ME343", "ME347"]).
prerequisite("ME450", ["ME343"]).
prerequisite("ME450", ["ME350", "ME415"]).
prerequisite("ME451", ["ME234"]).
prerequisite("ME453", ["ME302"]).
prerequisite("ME453", ["ENVE304"]).
prerequisite("ME454", ["ME343"]).
prerequisite("ME454", ["ME350", "ME359"]).
prerequisite("ME455", ["ME343"]).
prerequisite("ME455", ["ME350", "ME359"]).
prerequisite("ME456", ["ME302", "ME347"]).
prerequisite("ME457", ["ME341"]).
prerequisite("ME458", ["ME303", "ME343"]).
prerequisite("ME458", ["ME303", "ME350"]).
prerequisite("ME459", ["ME456"]).
prerequisite("ME460", ["ME459"]).
prerequisite("ME488", ["ME329", "ME347", "ME302"]).
prerequisite("ME503", ["ME501"]).
prerequisite("ME503", ["CE511"]).
prerequisite("ME504", ["CE/ME404", "CE511", "ME501"]).
prerequisite("ME517", ["ME318"]).
prerequisite("ME518", ["ME318"]).
prerequisite("ME540", ["ME347", "MATH344"]).
prerequisite("ME541", ["ME303", "ME347"]).
prerequisite("ME542", ["MATH244"]).
prerequisite("ME552", ["MATH344"]).
prerequisite("ME553", ["MATH344"]).
prerequisite("ME554", ["ME347"]).
prerequisite("ME579", ["ME418"]).
prerequisite("ME579", ["ME419"]).
prerequisite("ME579", ["ME422"]).
prerequisite("MCRO221", ["CHEM110"]).
prerequisite("MCRO221", ["CHEM124"]).
prerequisite("MCRO221", ["CHEM127"]).
prerequisite("MCRO224", ["BIO161", "CHEM125"]).
prerequisite("MCRO224", ["BIO161", "CHEM128", "CHEM129"]).
prerequisite("MCRO225", ["MCRO224"]).
prerequisite("MCRO301", ["MCRO224"]).
prerequisite("MCRO320", ["BIO161", "MCRO221"]).
prerequisite("MCRO320", ["BIO161", "MCRO224"]).
prerequisite("MCRO342", ["MCRO221"]).
prerequisite("MCRO342", ["MCRO224"]).
prerequisite("MCRO402", ["BIO351"]).
prerequisite("MCRO402", ["CHEM373"]).
prerequisite("MCRO402", ["BIO452"]).
prerequisite("MCRO421", ["MCRO221"]).
prerequisite("MCRO421", ["MCRO224", "CHEM212"]).
prerequisite("MCRO424", ["MCRO225", "CHEM313"]).
prerequisite("MCRO424", ["CHEM314"]).
prerequisite("MCRO424", ["CHEM369"]).
prerequisite("MCRO424", ["CHEM371"]).
prerequisite("MCRO433", ["MCRO221", "BIO303"]).
prerequisite("MCRO433", ["MCRO221", "BIO351"]).
prerequisite("MCRO433", ["MCRO221", "CHEM216", "CHEM312"]).
prerequisite("MCRO433", ["MCRO221", "CHEM316"]).
prerequisite("MCRO433", ["MCRO221"]).
prerequisite("MCRO433", ["MCRO224", "BIO303"]).
prerequisite("MCRO433", ["MCRO224", "BIO351"]).
prerequisite("MCRO433", ["MCRO224", "CHEM216", "CHEM312"]).
prerequisite("MCRO433", ["MCRO224", "CHEM316"]).
prerequisite("MCRO433", ["MCRO224"]).
prerequisite("MCRO436", ["BIO150"]).
prerequisite("MCRO436", ["BIO160"]).
prerequisite("MSL301", ["MSL101", "MSL102", "MSL103", "MSL201", "MSL202", "MSL203"]).
prerequisite("MSL301", ["MSL212"]).
prerequisite("MSL302", ["MSL301"]).
prerequisite("MSL303", ["MSL301", "MSL302"]).
prerequisite("MSL310", ["MSL110", "MSL203"]).
prerequisite("MSL310", ["MSL212"]).
prerequisite("MSL312", ["MSL112", "MSL203"]).
prerequisite("MSL312", ["MSL212"]).
prerequisite("MSL314", ["MSL301", "MSL302", "MSL303"]).
prerequisite("MSL401", ["MSL301", "MSL302", "MSL303"]).
prerequisite("MSL402", ["MSL401"]).
prerequisite("MSL403", ["MSL401", "MSL402"]).
prerequisite("MSL410", ["MSL303"]).
prerequisite("MSL410", ["MSL310", "MSL314"]).
prerequisite("MSL412", ["MSL303"]).
prerequisite("MSL412", ["MSL312", "MSL314"]).
prerequisite("MU103", ["MU101"]).
prerequisite("MU104", ["MU101"]).
prerequisite("MU105", ["MU103"]).
prerequisite("MU106", ["MU104"]).
prerequisite("MU106", ["MU103"]).
prerequisite("MU108", ["MU106"]).
prerequisite("MU114", ["MU101"]).
prerequisite("MU121", ["MU104"]).
prerequisite("MU152", ["MU151"]).
prerequisite("MU162", ["MU161"]).
prerequisite("MU163", ["MU162"]).
prerequisite("MU189", ["MU150", "MU250", "MU350"]).
prerequisite("MU189", ["MU450"]).
prerequisite("MU210", ["MU108"]).
prerequisite("MU210", ["MU105"]).
prerequisite("MU211", ["MU210"]).
prerequisite("MU212", ["MU211"]).
prerequisite("MU250", ["MU150"]).
prerequisite("MU253", ["MU153"]).
prerequisite("MU261", ["MU163"]).
prerequisite("MU262", ["MU261"]).
prerequisite("MU263", ["MU262"]).
prerequisite("MU301", ["MU105"]).
prerequisite("MU303", ["MU105"]).
prerequisite("MU305", ["MU303"]).
prerequisite("MU311", ["MU101", "MU120"]).
prerequisite("MU312", ["MU311"]).
prerequisite("MU320", ["MU105"]).
prerequisite("MU325", ["MU105", "MU120"]).
prerequisite("MU326", ["MU121"]).
prerequisite("MU331", ["MU320"]).
prerequisite("MU331", ["MU120"]).
prerequisite("MU332", ["MU320"]).
prerequisite("MU332", ["MU120"]).
prerequisite("MU336", ["MU105"]).
prerequisite("MU340", ["MU105"]).
prerequisite("MU341", ["MU340"]).
prerequisite("MU342", ["MU340"]).
prerequisite("MU351", ["MU105"]).
prerequisite("MU352", ["MU105"]).
prerequisite("MU360", ["MU101"]).
prerequisite("MU368", ["MU168"]).
prerequisite("MU378", ["MU178"]).
prerequisite("MU388", ["MU188"]).
prerequisite("MU389", ["MU150", "MU250", "MU350"]).
prerequisite("MU389", ["MU450"]).
prerequisite("MU411", ["MU312"]).
prerequisite("MU412", ["MU312"]).
prerequisite("MU431", ["MU303", "MU320"]).
prerequisite("MU431", ["MU303"]).
prerequisite("MU431", ["MU303", "MU120"]).
prerequisite("MU432", ["MU303"]).
prerequisite("MU432", ["MU303", "MU331", "MU332"]).
prerequisite("MU432", ["MU303", "MU431"]).
prerequisite("MU432", ["MU303", "MU305"]).
prerequisite("MU465", ["MU341"]).
prerequisite("MU466", ["MU101", "MU172"]).
prerequisite("MU466", ["MU101", "MU173"]).
prerequisite("MU466", ["MU101", "MU174"]).
prerequisite("MU466", ["MU103", "MU172"]).
prerequisite("MU466", ["MU103", "MU173"]).
prerequisite("MU466", ["MU103", "MU174"]).
prerequisite("MU470", ["MU331", "MU332", "MU431", "MU432"]).
prerequisite("NR247", ["NR215"]).
prerequisite("NR314", ["BIO263", "NR304", "NR305"]).
prerequisite("NR314", ["NR306"]).
prerequisite("NR315", ["BRAE237"]).
prerequisite("NR315", ["BRAE239"]).
prerequisite("NR320", ["NR/LA218", "SS120", "NR304", "NR305"]).
prerequisite("NR320", ["NR306"]).
prerequisite("NR326", ["MATH161"]).
prerequisite("NR326", ["MATH221"]).
prerequisite("NR326", ["ECON201", "AGB212"]).
prerequisite("NR335", ["NR141"]).
prerequisite("NR335", ["NR142", "PSY201"]).
prerequisite("NR335", ["PSY202"]).
prerequisite("NR340", ["NR204"]).
prerequisite("NR341", ["NR204"]).
prerequisite("NR350", ["NR208"]).
prerequisite("NR355", ["BRAE237"]).
prerequisite("NR355", ["BRAE239"]).
prerequisite("NR365", ["NR208", "NR315", "NR260", "NR304", "NR305"]).
prerequisite("NR365", ["NR208", "NR315", "NR260", "NR306"]).
prerequisite("NR401", ["CRP/NR351"]).
prerequisite("NR402", ["BIO162", "BIO222", "BIO227", "NR304"]).
prerequisite("NR402", ["BIO162", "BIO222", "BIO227", "NR306"]).
prerequisite("NR402", ["NR208", "NR304"]).
prerequisite("NR402", ["NR208", "NR306"]).
prerequisite("NR406", ["ES253", "NR141"]).
prerequisite("NR406", ["ES253", "NR142"]).
prerequisite("NR412", ["NR326"]).
prerequisite("NR414", ["NR326", "NR365"]).
prerequisite("NR416", ["BIO263", "NR304", "NR305", "NR306"]).
prerequisite("NR416", ["SS221"]).
prerequisite("NR418", ["LA/NR218"]).
prerequisite("NR418", ["GEOG318"]).
prerequisite("NR420", ["NR320"]).
prerequisite("NR421", ["BOT121"]).
prerequisite("NR421", ["BIO162"]).
prerequisite("NR425", ["NR363", "NR416"]).
prerequisite("NR435", ["NR326", "NR335"]).
prerequisite("NR445", ["BIO263", "NR304", "NR305", "NR306"]).
prerequisite("NR445", ["SS321", "MATH161"]).
prerequisite("NR455", ["NR340"]).
prerequisite("NR464", ["NR304", "NR305", "NR306", "SS321"]).
prerequisite("NR464", ["SS422"]).
prerequisite("NR465", ["NR326", "NR416"]).
prerequisite("NR474", ["NR475"]).
prerequisite("NR475", ["NR474"]).
prerequisite("NR476", ["ERSC363"]).
prerequisite("NR476", ["NR306"]).
prerequisite("NR476", ["NR326"]).
prerequisite("NR477", ["ERSC363"]).
prerequisite("NR477", ["NR306"]).
prerequisite("NR477", ["NR326"]).
prerequisite("NR478", ["ERSC363"]).
prerequisite("NR478", ["NR306"]).
prerequisite("NR478", ["NR326"]).
prerequisite("NR575", ["NR420"]).
prerequisite("PHIL300", ["PHIL230"]).
prerequisite("PHIL300", ["PHIL231"]).
prerequisite("PHIL385", ["PHIL231", "PHIL323", "PHIL327", "PHIL328", "PHIL331", "PHIL332", "PHIL333", "PHIL334", "PHIL335", "PHIL336", "PHIL337", "PHIL339", "PHIL340", "PHIL341"]).
prerequisite("PHIL385", ["PHIL439"]).
prerequisite("PHIL460", ["PHIL241"]).
prerequisite("PHIL461", ["PHIL460"]).
prerequisite("PSC102", ["PHYS121"]).
prerequisite("PSC102", ["PHYS131"]).
prerequisite("PSC102", ["PHYS141"]).
prerequisite("PSC102", ["PSC101"]).
prerequisite("PSC103", ["PSC101"]).
prerequisite("PSC103", ["PHYS121"]).
prerequisite("PSC103", ["PHYS131"]).
prerequisite("PSC103", ["PHYS141", "PSC102"]).
prerequisite("PSC425", ["EDUC469"]).
prerequisite("PSC425", ["EDUC479"]).
prerequisite("PHYS122", ["PHYS121"]).
prerequisite("PHYS122", ["PHYS141"]).
prerequisite("PHYS123", ["PHYS118", "PHYS121", "PHYS131"]).
prerequisite("PHYS123", ["PHYS141", "PHYS122"]).
prerequisite("PHYS125", ["PHYS121"]).
prerequisite("PHYS141", ["MATH141"]).
prerequisite("PHYS141", ["MATH142"]).
prerequisite("PHYS141", ["MATH182"]).
prerequisite("PHYS142", ["PHYS141", "MATH142"]).
prerequisite("PHYS142", ["PHYS141", "MATH182"]).
prerequisite("PHYS143", ["MATH142", "PHYS141", "MATH241"]).
prerequisite("PHYS202", ["PHYS133", "MATH241"]).
prerequisite("PHYS202", ["PHYS133", "MATH244"]).
prerequisite("PHYS202", ["PHYS143", "MATH241"]).
prerequisite("PHYS202", ["PHYS143", "MATH244"]).
prerequisite("PHYS206", ["PHYS133"]).
prerequisite("PHYS206", ["PHYS143", "MATH143"]).
prerequisite("PHYS211", ["PHYS132"]).
prerequisite("PHYS211", ["PHYS142"]).
prerequisite("PHYS212", ["PHYS211"]).
prerequisite("PHYS220", ["PHYS132"]).
prerequisite("PHYS220", ["PHYS133"]).
prerequisite("PHYS220", ["PHYS142"]).
prerequisite("PHYS220", ["PHYS143"]).
prerequisite("PHYS301", ["PHYS211"]).
prerequisite("PHYS306", ["PHYS305"]).
prerequisite("PHYS310", ["PHYS132"]).
prerequisite("PHYS310", ["PHYS142"]).
prerequisite("PHYS313", ["PHYS132"]).
prerequisite("PHYS313", ["PHYS142"]).
prerequisite("PHYS313", ["PHYS122", "MATH241", "MATH304"]).
prerequisite("PHYS314", ["PHYS122", "MATH241", "MATH304"]).
prerequisite("PHYS314", ["PHYS122", "PHYS320"]).
prerequisite("PHYS314", ["PHYS132", "MATH241", "MATH304"]).
prerequisite("PHYS314", ["PHYS132", "PHYS320"]).
prerequisite("PHYS314", ["PHYS142", "MATH241", "MATH304"]).
prerequisite("PHYS314", ["PHYS142", "PHYS320"]).
prerequisite("PHYS315", ["PHYS211", "MATH143"]).
prerequisite("PHYS318", ["PHYS211"]).
prerequisite("PHYS320", ["PHYS211"]).
prerequisite("PHYS321", ["PHYS320"]).
prerequisite("PHYS323", ["MATH241"]).
prerequisite("PHYS330", ["PHYS122", "PHYS123", "PHYS132", "PHYS133", "PHYS142", "PHYS143", "PSC102"]).
prerequisite("PHYS330", ["PSC103"]).
prerequisite("PHYS340", ["PHYS206"]).
prerequisite("PHYS341", ["PHYS340"]).
prerequisite("PHYS342", ["PHYS341"]).
prerequisite("PHYS345", ["MATH206", "CHEM353"]).
prerequisite("PHYS345", ["MATH206", "PHYS211"]).
prerequisite("PHYS345", ["MATH244", "CHEM353"]).
prerequisite("PHYS345", ["MATH244", "PHYS211"]).
prerequisite("PHYS357", ["PHYS206"]).
prerequisite("PHYS401", ["PHYS301"]).
prerequisite("PHYS403", ["PHYS212", "PHYS405"]).
prerequisite("PHYS405", ["PHYS212"]).
prerequisite("PHYS406", ["PHYS405"]).
prerequisite("PHYS408", ["PHYS133", "MATH304"]).
prerequisite("PHYS408", ["PHYS133", "PHYS320"]).
prerequisite("PHYS408", ["PHYS143", "MATH304"]).
prerequisite("PHYS408", ["PHYS143", "PHYS320"]).
prerequisite("PHYS409", ["PHYS408", "PHYS320"]).
prerequisite("PHYS409", ["PHYS322"]).
prerequisite("PHYS410", ["PHYS133"]).
prerequisite("PHYS410", ["PHYS143"]).
prerequisite("PHYS418", ["PHYS211", "PHYS302"]).
prerequisite("PHYS418", ["PHYS211", "PHYS305"]).
prerequisite("PHYS422", ["EE347"]).
prerequisite("PHYS422", ["MATE340"]).
prerequisite("PHYS422", ["CHEM319"]).
prerequisite("PHYS422", ["PHYS340"]).
prerequisite("PHYS423", ["PHYS323"]).
prerequisite("PHYS425", ["PHYS211", "MATH242"]).
prerequisite("PHYS425", ["PHYS211", "MATH244"]).
prerequisite("PHYS426", ["PHYS412"]).
prerequisite("PHYS426", ["PHYS425"]).
prerequisite("PHYS427", ["PHYS412"]).
prerequisite("PHYS427", ["PHYS425"]).
prerequisite("PHYS428", ["PHYS122", "PHYS132", "PHYS123", "PHYS133"]).
prerequisite("PHYS428", ["PHYS122", "PHYS132", "PHYS143", "MATH241", "MATH242"]).
prerequisite("PHYS428", ["PHYS122", "PHYS132", "MATH244"]).
prerequisite("PHYS428", ["PHYS142", "PHYS123", "PHYS133"]).
prerequisite("PHYS428", ["PHYS142", "PHYS143", "MATH241", "MATH242"]).
prerequisite("PHYS428", ["PHYS142", "MATH244"]).
prerequisite("PLSC123", ["PLSC120"]).
prerequisite("PLSC124", ["PLSC120", "BOT121"]).
prerequisite("PLSC126", ["PLSC120"]).
prerequisite("PLSC132", ["PLSC120"]).
prerequisite("PLSC133", ["PLSC132"]).
prerequisite("PLSC190", ["PLSC120"]).
prerequisite("PLSC225", ["PLSC215"]).
prerequisite("PLSC232", ["PLSC120"]).
prerequisite("PLSC232", ["BOT121"]).
prerequisite("PLSC240", ["PLSC120"]).
prerequisite("PLSC244", ["PLSC133", "PLSC190", "PLSC260", "BRAE237"]).
prerequisite("PLSC244", ["BRAE239"]).
prerequisite("PLSC304", ["PLSC120", "STAT218", "PLSC132", "PLSC190", "PLSC230", "PLSC245", "PLSC250"]).
prerequisite("PLSC304", ["PLSC232", "WVIT233"]).
prerequisite("PLSC313", ["PLSC120", "CHEM110"]).
prerequisite("PLSC313", ["PLSC120", "CHEM127"]).
prerequisite("PLSC313", ["BOT121", "CHEM110"]).
prerequisite("PLSC313", ["BOT121", "CHEM127"]).
prerequisite("PLSC321", ["PLSC120"]).
prerequisite("PLSC321", ["BOT121"]).
prerequisite("PLSC323", ["BIO162"]).
prerequisite("PLSC323", ["BOT121"]).
prerequisite("PLSC331", ["PLSC232"]).
prerequisite("PLSC331", ["WVIT233"]).
prerequisite("PLSC332", ["PLSC126", "PLSC127"]).
prerequisite("PLSC333", ["PLSC120"]).
prerequisite("PLSC334", ["PLSC333"]).
prerequisite("PLSC336", ["PLSC232", "PLSC/WVIT331"]).
prerequisite("PLSC336", ["WVIT233", "PLSC/WVIT331"]).
prerequisite("PLSC337", ["PLSC232", "PLSC/WVIT331"]).
prerequisite("PLSC337", ["WVIT233", "PLSC/WVIT331"]).
prerequisite("PLSC340", ["PLSC245"]).
prerequisite("PLSC341", ["PLSC120"]).
prerequisite("PLSC342", ["PLSC245"]).
prerequisite("PLSC343", ["PLSC120", "SS120"]).
prerequisite("PLSC343", ["PLSC120", "SS121"]).
prerequisite("PLSC343", ["BOT121", "SS120"]).
prerequisite("PLSC343", ["BOT121", "SS121"]).
prerequisite("PLSC350", ["PLSC120"]).
prerequisite("PLSC350", ["BOT121"]).
prerequisite("PLSC351", ["MATH118"]).
prerequisite("PLSC351", ["STAT218"]).
prerequisite("PLSC355", ["PLSC120"]).
prerequisite("PLSC355", ["PLSC250"]).
prerequisite("PLSC360", ["PLSC132"]).
prerequisite("PLSC381", ["BIO114"]).
prerequisite("PLSC381", ["BOT121"]).
prerequisite("PLSC406", ["PLSC321"]).
prerequisite("PLSC410", ["PLSC120"]).
prerequisite("PLSC410", ["BIO263"]).
prerequisite("PLSC414", ["PLSC232"]).
prerequisite("PLSC414", ["WVIT233"]).
prerequisite("PLSC420", ["PLSC120"]).
prerequisite("PLSC420", ["BOT121"]).
prerequisite("PLSC424", ["PLSC124"]).
prerequisite("PLSC425", ["PLSC123", "PLSC233", "PLSC234"]).
prerequisite("PLSC425", ["NR208"]).
prerequisite("PLSC427", ["PLSC120", "PLSC313", "PLSC321", "BOT/PLSC323"]).
prerequisite("PLSC428", ["BOT/PLSC323", "STAT218"]).
prerequisite("PLSC431", ["PLSC313"]).
prerequisite("PLSC432", ["PLSC343"]).
prerequisite("PLSC441", ["PLSC313"]).
prerequisite("PLSC445", ["PLSC120"]).
prerequisite("PLSC450", ["PLSC120", "BOT121"]).
prerequisite("POLS308", ["POLS225"]).
prerequisite("POLS308", ["POLS229"]).
prerequisite("POLS310", ["POLS112"]).
prerequisite("POLS315", ["POLS112"]).
prerequisite("POLS316", ["POLS112"]).
prerequisite("POLS317", ["POLS112"]).
prerequisite("POLS319", ["POLS112"]).
prerequisite("POLS321", ["POLS229"]).
prerequisite("POLS324", ["POLS225"]).
prerequisite("POLS324", ["POLS229"]).
prerequisite("POLS328", ["POLS225"]).
prerequisite("POLS328", ["POLS229"]).
prerequisite("POLS329", ["POLS230"]).
prerequisite("POLS330", ["POLS230"]).
prerequisite("POLS331", ["POLS230"]).
prerequisite("POLS334", ["POLS112"]).
prerequisite("POLS340", ["POLS112"]).
prerequisite("POLS341", ["POLS112"]).
prerequisite("POLS342", ["POLS245", "POLS112"]).
prerequisite("POLS342", ["POLS341"]).
prerequisite("POLS343", ["POLS112"]).
prerequisite("POLS344", ["POLS112"]).
prerequisite("POLS347", ["POLS112"]).
prerequisite("POLS351", ["POLS112"]).
prerequisite("POLS359", ["STAT217"]).
prerequisite("POLS361", ["POLS359"]).
prerequisite("POLS375", ["POLS112"]).
prerequisite("POLS381", ["POLS225"]).
prerequisite("POLS381", ["POLS229"]).
prerequisite("POLS382", ["POLS225"]).
prerequisite("POLS382", ["POLS229"]).
prerequisite("POLS383", ["POLS225"]).
prerequisite("POLS383", ["POLS229"]).
prerequisite("POLS384", ["POLS225"]).
prerequisite("POLS384", ["POLS229"]).
prerequisite("POLS385", ["POLS285"]).
prerequisite("POLS387", ["POLS359", "POLS361"]).
prerequisite("POLS417", ["POLS112"]).
prerequisite("POLS419", ["POLS112"]).
prerequisite("POLS420", ["POLS225"]).
prerequisite("POLS420", ["POLS229"]).
prerequisite("POLS425", ["POLS112", "POLS229"]).
prerequisite("POLS426", ["POLS225"]).
prerequisite("POLS426", ["POLS229"]).
prerequisite("POLS427", ["POLS225"]).
prerequisite("POLS428", ["POLS229"]).
prerequisite("POLS429", ["POLS225"]).
prerequisite("POLS430", ["POLS230"]).
prerequisite("POLS431", ["POLS112"]).
prerequisite("POLS435", ["POLS112"]).
prerequisite("POLS440", ["POLS112", "POLS375"]).
prerequisite("POLS445", ["POLS112"]).
prerequisite("POLS451", ["POLS112"]).
prerequisite("POLS455", ["POLS112"]).
prerequisite("POLS457", ["POLS112"]).
prerequisite("POLS459", ["POLS112"]).
prerequisite("POLS461", ["POLS359", "POLS361"]).
prerequisite("POLS462", ["POLS359", "POLS361"]).
prerequisite("POLS470", ["POLS112"]).
prerequisite("POLS471", ["POLS112"]).
prerequisite("POLS568", ["POLS515"]).
prerequisite("POLS590", ["POLS560"]).
prerequisite("POLS595", ["POLS590"]).
prerequisite("PSY200", ["PSY201"]).
prerequisite("PSY200", ["PSY202"]).
prerequisite("PSY252", ["PSY201"]).
prerequisite("PSY252", ["PSY202"]).
prerequisite("PSY254", ["PSY201"]).
prerequisite("PSY254", ["PSY202"]).
prerequisite("PSY256", ["PSY201"]).
prerequisite("PSY256", ["PSY202"]).
prerequisite("PSY301", ["PSY201"]).
prerequisite("PSY301", ["PSY202"]).
prerequisite("PSY302", ["PSY201"]).
prerequisite("PSY302", ["PSY202"]).
prerequisite("PSY305", ["PSY201"]).
prerequisite("PSY305", ["PSY202"]).
prerequisite("PSY306", ["CD/PSY256"]).
prerequisite("PSY306", ["CD/EDUC207"]).
prerequisite("PSY310", ["PSY201"]).
prerequisite("PSY310", ["PSY202"]).
prerequisite("PSY320", ["PSY201"]).
prerequisite("PSY320", ["PSY202"]).
prerequisite("PSY324", ["PSY201"]).
prerequisite("PSY324", ["PSY202"]).
prerequisite("PSY325", ["PSY201"]).
prerequisite("PSY325", ["PSY202"]).
prerequisite("PSY329", ["PSY201", "STAT217"]).
prerequisite("PSY329", ["PSY202", "STAT217"]).
prerequisite("PSY333", ["PSY329", "STAT217"]).
prerequisite("PSY350", ["PSY201"]).
prerequisite("PSY350", ["PSY202"]).
prerequisite("PSY356", ["PSY201"]).
prerequisite("PSY356", ["PSY202"]).
prerequisite("PSY357", ["PSY201"]).
prerequisite("PSY357", ["PSY202"]).
prerequisite("PSY360", ["PSY252"]).
prerequisite("PSY370", ["PSY201"]).
prerequisite("PSY370", ["PSY202"]).
prerequisite("PSY372", ["PSY201"]).
prerequisite("PSY372", ["PSY202"]).
prerequisite("PSY375", ["PSY201"]).
prerequisite("PSY375", ["PSY202"]).
prerequisite("PSY400", ["PSY201"]).
prerequisite("PSY400", ["PSY202"]).
prerequisite("PSY405", ["PSY201"]).
prerequisite("PSY405", ["PSY202"]).
prerequisite("PSY410", ["PSY333"]).
prerequisite("PSY417", ["CD304", "CD305"]).
prerequisite("PSY417", ["CD306"]).
prerequisite("PSY419", ["PSY256"]).
prerequisite("PSY419", ["PSY305"]).
prerequisite("PSY430", ["PSY340"]).
prerequisite("PSY431", ["CD304", "CD329"]).
prerequisite("PSY431", ["CD304", "PSY329"]).
prerequisite("PSY431", ["CD305", "CD329"]).
prerequisite("PSY431", ["CD305", "PSY329"]).
prerequisite("PSY431", ["PSY419", "CD329"]).
prerequisite("PSY431", ["PSY419", "PSY329"]).
prerequisite("PSY431", ["PSY420", "CD329"]).
prerequisite("PSY431", ["PSY420", "PSY329"]).
prerequisite("PSY431", ["PSY421", "CD329"]).
prerequisite("PSY431", ["PSY421", "PSY329"]).
prerequisite("PSY432", ["PSY333"]).
prerequisite("PSY440", ["PSY201", "PSY202"]).
prerequisite("PSY440", ["PSY340"]).
prerequisite("PSY449", ["PSY329", "PSY333"]).
prerequisite("PSY450", ["PSY254"]).
prerequisite("PSY453", ["PSY323"]).
prerequisite("PSY454", ["PSY323"]).
prerequisite("PSY458", ["PSY333"]).
prerequisite("PSY460", ["PSY201"]).
prerequisite("PSY460", ["PSY202"]).
prerequisite("PSY462", ["PSY461"]).
prerequisite("PSY465", ["PSY201"]).
prerequisite("PSY465", ["PSY202"]).
prerequisite("PSY475", ["PSY252"]).
prerequisite("PSY475", ["PSY254"]).
prerequisite("PSY475", ["PSY256"]).
prerequisite("PSY480", ["PSY340"]).
prerequisite("PSY555", ["PSY560"]).
prerequisite("PSY556", ["PSY555", "PSY560"]).
prerequisite("PSY564", ["PSY520"]).
prerequisite("PSY565", ["PSY560"]).
prerequisite("PSY566", ["PSY560"]).
prerequisite("PSY568", ["PSY555", "PSY560", "PSY565"]).
prerequisite("PSY569", ["PSY520"]).
prerequisite("PSY571", ["PSY520"]).
prerequisite("PSY572", ["PSY535"]).
prerequisite("PSY575", ["PSY520"]).
prerequisite("PSY576", ["PSY569", "PSY564"]).
prerequisite("PSY599", ["PSY585"]).
prerequisite("RPTA302", ["RPTA210"]).
prerequisite("RPTA313", ["RPTA210"]).
prerequisite("RPTA314", ["RPTA114", "RPTA210"]).
prerequisite("RPTA321", ["RPTA210"]).
prerequisite("RPTA325", ["RPTA205", "RPTA255"]).
prerequisite("RPTA325", ["RPTA257"]).
prerequisite("RPTA330", ["RPTA210"]).
prerequisite("RPTA342", ["RPTA210"]).
prerequisite("RPTA360", ["RPTA210"]).
prerequisite("RPTA400", ["RPTA210"]).
prerequisite("RPTA405", ["RPTA205", "RPTA255"]).
prerequisite("RPTA405", ["RPTA257"]).
prerequisite("RPTA412", ["RPTA210"]).
prerequisite("RPTA413", ["RPTA210"]).
prerequisite("RPTA416", ["RPTA360"]).
prerequisite("RPTA420", ["RPTA320"]).
prerequisite("RPTA424", ["AGB323"]).
prerequisite("RPTA424", ["BUS215"]).
prerequisite("RPTA460", ["ENGL310"]).
prerequisite("RPTA461", ["RPTA460"]).
prerequisite("RPTA463", ["RPTA465"]).
prerequisite("SCM230", ["BIO150", "BIO160", "BIO161", "CHEM124", "CHEM127", "MATH141", "PHYS131"]).
prerequisite("SCM230", ["PHYS141"]).
prerequisite("SCM240", ["STAT217", "STAT218", "STAT251", "STAT301"]).
prerequisite("SCM240", ["STAT312"]).
prerequisite("SOC222", ["SOC110"]).
prerequisite("SOC301", ["SOC110"]).
prerequisite("SOC302", ["SOC110"]).
prerequisite("SOC305", ["SOC110"]).
prerequisite("SOC306", ["SOC110"]).
prerequisite("SOC306", ["SOC111"]).
prerequisite("SOC308", ["SOC110"]).
prerequisite("SOC308", ["GEOG150"]).
prerequisite("SOC309", ["SOC110"]).
prerequisite("SOC355", ["STAT217"]).
prerequisite("SOC402", ["SOC311"]).
prerequisite("SOC402", ["WGQS201"]).
prerequisite("SOC414", ["SOC110"]).
prerequisite("SOC414", ["SOC111"]).
prerequisite("SOC420", ["SOC413"]).
prerequisite("SOC420", ["SOC414"]).
prerequisite("SOC431", ["SOC110"]).
prerequisite("SOC431", ["ANT201", "SOC354"]).
prerequisite("SOC435", ["ANT201", "ES112", "ES/WGQS350", "HLTH255", "HLTH260", "ISLA123", "SOC110", "SOC111"]).
prerequisite("SOC435", ["WGQS210"]).
prerequisite("SOC444", ["SOC402"]).
prerequisite("SOC444", ["SOC412"]).
prerequisite("SOC464", ["SOC110"]).
prerequisite("SS221", ["SS120"]).
prerequisite("SS221", ["SS121"]).
prerequisite("SS321", ["SS120"]).
prerequisite("SS321", ["SS121"]).
prerequisite("SS322", ["BOT121", "PLSC120", "CHEM124"]).
prerequisite("SS322", ["BOT121", "PLSC120", "CHEM127"]).
prerequisite("SS322", ["SS120", "CHEM124"]).
prerequisite("SS322", ["SS120", "CHEM127"]).
prerequisite("SS402", ["CHEM111", "CHEM125"]).
prerequisite("SS402", ["CHEM128"]).
prerequisite("SS421", ["BOT121"]).
prerequisite("SS421", ["BIO162"]).
prerequisite("SS422", ["CHEM212", "CHEM312", "CHEM313", "SS221"]).
prerequisite("SS422", ["CHEM212", "CHEM312", "CHEM313"]).
prerequisite("SS422", ["CHEM314", "SS221"]).
prerequisite("SS422", ["CHEM314"]).
prerequisite("SS423", ["CHEM129"]).
prerequisite("SS424", ["CHEM125"]).
prerequisite("SS424", ["CHEM128"]).
prerequisite("SS431", ["GEOG318"]).
prerequisite("SS431", ["LA/NR218"]).
prerequisite("SS440", ["SS120", "SS321"]).
prerequisite("SS440", ["SS121", "SS321"]).
prerequisite("SS444", ["SS321"]).
prerequisite("SS463", ["SS461"]).
prerequisite("SS522", ["SS221"]).
prerequisite("SS582", ["NR/LA318"]).
prerequisite("SPAN102", ["SPAN101", "SPAN111", "SPAN141"]).
prerequisite("SPAN103", ["SPAN102", "SPAN142"]).
prerequisite("SPAN142", ["SPAN101", "SPAN111", "SPAN141"]).
prerequisite("SPAN143", ["SPAN102", "SPAN142"]).
prerequisite("SPAN201", ["SPAN103", "SPAN143"]).
prerequisite("SPAN202", ["SPAN201", "SPAN241"]).
prerequisite("SPAN203", ["SPAN202", "SPAN242"]).
prerequisite("SPAN206", ["SPAN202", "SPAN242"]).
prerequisite("SPAN207", ["SPAN203", "SPAN206", "SPAN243"]).
prerequisite("SPAN233", ["SPAN203", "SPAN206", "SPAN243"]).
prerequisite("SPAN241", ["SPAN103", "SPAN143"]).
prerequisite("SPAN242", ["SPAN201", "SPAN241"]).
prerequisite("SPAN243", ["SPAN202", "SPAN242"]).
prerequisite("SPAN301", ["SPAN203", "SPAN206", "SPAN243"]).
prerequisite("SPAN302", ["SPAN203", "SPAN206", "SPAN243"]).
prerequisite("SPAN303", ["SPAN207"]).
prerequisite("SPAN303", ["SPAN233"]).
prerequisite("SPAN303", ["SPAN301"]).
prerequisite("SPAN303", ["SPAN302"]).
prerequisite("SPAN380", ["SPAN203", "SPAN206"]).
prerequisite("SPAN390", ["SPAN301"]).
prerequisite("SPAN402", ["SPAN207"]).
prerequisite("SPAN410", ["SPAN233"]).
prerequisite("SPAN416", ["SPAN233"]).
prerequisite("STAT251", ["MATH118"]).
prerequisite("STAT252", ["STAT251"]).
prerequisite("STAT302", ["STAT301"]).
prerequisite("STAT305", ["BUS392", "CPE/CSC101", "CSC232", "CPE/CSC235", "ECON395", "MATH142"]).
prerequisite("STAT305", ["STAT331", "MATH142"]).
prerequisite("STAT314", ["STAT218"]).
prerequisite("STAT323", ["IME326"]).
prerequisite("STAT323", ["STAT252"]).
prerequisite("STAT323", ["STAT302"]).
prerequisite("STAT323", ["STAT312"]).
prerequisite("STAT323", ["STAT313"]).
prerequisite("STAT324", ["IME326"]).
prerequisite("STAT324", ["STAT252"]).
prerequisite("STAT324", ["STAT302"]).
prerequisite("STAT324", ["STAT312"]).
prerequisite("STAT324", ["STAT313"]).
prerequisite("STAT330", ["IME326"]).
prerequisite("STAT330", ["STAT252"]).
prerequisite("STAT330", ["STAT302"]).
prerequisite("STAT330", ["STAT312"]).
prerequisite("STAT330", ["STAT313"]).
prerequisite("STAT331", ["IME326", "STAT252", "STAT302", "STAT312", "BUS392", "CPE/CSC101", "CSC231", "CSC232", "CSC234"]).
prerequisite("STAT331", ["IME326", "STAT252", "STAT302", "STAT312", "ECON395"]).
prerequisite("STAT331", ["STAT313", "BUS392", "CPE/CSC101", "CSC231", "CSC232", "CSC234"]).
prerequisite("STAT331", ["STAT313", "ECON395"]).
prerequisite("STAT334", ["STAT252", "STAT302", "STAT312", "STAT313", "MATH206"]).
prerequisite("STAT334", ["STAT252", "STAT302", "STAT312", "STAT313", "MATH244"]).
prerequisite("STAT334", ["IME326", "MATH206"]).
prerequisite("STAT334", ["IME326", "MATH244"]).
prerequisite("STAT405", ["CPE/CSC101"]).
prerequisite("STAT405", ["CSC232"]).
prerequisite("STAT405", ["CPE/CSC235"]).
prerequisite("STAT410", ["STAT130", "STAT217", "STAT218", "STAT251", "STAT301", "STAT312", "STAT321", "STAT511", "STAT512"]).
prerequisite("STAT410", ["STAT542"]).
prerequisite("STAT414", ["STAT324"]).
prerequisite("STAT414", ["STAT334"]).
prerequisite("STAT414", ["STAT524"]).
prerequisite("STAT415", ["IME326", "STAT252", "STAT302", "STAT312", "STAT313", "STAT305", "STAT321", "STAT350"]).
prerequisite("STAT415", ["IME326", "STAT252", "STAT302", "STAT312", "STAT313", "STAT425", "STAT331"]).
prerequisite("STAT415", ["STAT513", "STAT305", "STAT321", "STAT350"]).
prerequisite("STAT415", ["STAT513", "STAT425", "STAT331"]).
prerequisite("STAT416", ["STAT324"]).
prerequisite("STAT416", ["STAT334"]).
prerequisite("STAT416", ["STAT524"]).
prerequisite("STAT417", ["IME326", "MATH142"]).
prerequisite("STAT417", ["STAT252", "MATH142"]).
prerequisite("STAT417", ["STAT302", "MATH142"]).
prerequisite("STAT417", ["STAT312", "MATH142"]).
prerequisite("STAT417", ["STAT313", "MATH142"]).
prerequisite("STAT418", ["STAT324"]).
prerequisite("STAT418", ["STAT334"]).
prerequisite("STAT418", ["STAT524"]).
prerequisite("STAT419", ["IME326", "STAT252", "STAT302", "STAT312", "STAT313", "STAT513", "MATH206", "MATH244"]).
prerequisite("STAT419", ["IME326", "STAT252", "STAT302", "STAT312", "STAT313", "STAT513"]).
prerequisite("STAT419", ["STAT542", "MATH206", "MATH244"]).
prerequisite("STAT419", ["STAT542"]).
prerequisite("STAT421", ["IME326"]).
prerequisite("STAT421", ["STAT252"]).
prerequisite("STAT421", ["STAT302"]).
prerequisite("STAT421", ["STAT312"]).
prerequisite("STAT421", ["STAT313"]).
prerequisite("STAT421", ["STAT511"]).
prerequisite("STAT421", ["STAT512"]).
prerequisite("STAT421", ["STAT513"]).
prerequisite("STAT423", ["STAT323"]).
prerequisite("STAT423", ["STAT523"]).
prerequisite("STAT425", ["MATH241"]).
prerequisite("STAT426", ["STAT425", "STAT302"]).
prerequisite("STAT427", ["STAT426"]).
prerequisite("STAT431", ["STAT331"]).
prerequisite("STAT434", ["STAT324", "STAT334"]).
prerequisite("STAT434", ["STAT524", "STAT331"]).
prerequisite("STAT434", ["STAT531"]).
prerequisite("STAT440", ["STAT330"]).
prerequisite("STAT441", ["STAT440"]).
prerequisite("STAT465", ["STAT323"]).
prerequisite("STAT466", ["STAT323"]).
prerequisite("STAT513", ["STAT217", "STAT218", "STAT252", "STAT312", "STAT511", "STAT512"]).
prerequisite("STAT513", ["STAT542"]).
prerequisite("STAT523", ["IME326", "STAT252", "STAT302", "STAT312", "STAT313", "STAT513"]).
prerequisite("STAT523", ["STAT542"]).
prerequisite("STAT524", ["IME326", "STAT252", "STAT302", "STAT312", "STAT313", "STAT513"]).
prerequisite("STAT524", ["STAT542"]).
prerequisite("STAT530", ["STAT511"]).
prerequisite("STAT530", ["STAT512"]).
prerequisite("STAT530", ["STAT513"]).
prerequisite("STAT530", ["STAT542"]).
prerequisite("STAT541", ["STAT331"]).
prerequisite("STAT541", ["STAT531"]).
prerequisite("STAT542", ["MATH142"]).
prerequisite("STAT543", ["STAT323"]).
prerequisite("STAT543", ["STAT523"]).
prerequisite("STAT545", ["MATH206", "STAT426"]).
prerequisite("STAT545", ["MATH206"]).
prerequisite("STAT545", ["MATH244", "STAT426"]).
prerequisite("STAT545", ["MATH244"]).
prerequisite("STAT550", ["STAT334", "STAT427"]).
prerequisite("STAT551", ["STAT305"]).
prerequisite("STAT551", ["STAT350"]).
prerequisite("STAT566", ["STAT466"]).
prerequisite("TH215", ["TH220"]).
prerequisite("TH220", ["TH201"]).
prerequisite("TH220", ["TH210"]).
prerequisite("TH235", ["TH220"]).
prerequisite("TH255", ["TH230"]).
prerequisite("TH256", ["TH230"]).
prerequisite("TH260", ["TH220"]).
prerequisite("TH265", ["TH230"]).
prerequisite("TH285", ["TH101"]).
prerequisite("TH290", ["TH201"]).
prerequisite("TH290", ["TH210"]).
prerequisite("TH295", ["TH210"]).
prerequisite("TH295", ["TH201"]).
prerequisite("TH315", ["TH220"]).
prerequisite("TH325", ["TH225"]).
prerequisite("TH330", ["TH230"]).
prerequisite("TH355", ["TH225"]).
prerequisite("TH355", ["TH230"]).
prerequisite("TH370", ["TH201"]).
prerequisite("TH370", ["TH210"]).
prerequisite("TH380", ["TH201"]).
prerequisite("TH430", ["TH290", "TH295"]).
prerequisite("TH432", ["TH290", "TH295"]).
prerequisite("TH434", ["TH290", "TH295"]).
prerequisite("TH450", ["TH290"]).
prerequisite("WVIT202", ["CHEM111"]).
prerequisite("WVIT202", ["CHEM127"]).
prerequisite("WVIT233", ["PLSC120"]).
prerequisite("WVIT233", ["BOT121"]).
prerequisite("WVIT301", ["MCRO224"]).
prerequisite("WVIT302", ["WVIT202"]).
prerequisite("WVIT331", ["PLSC232"]).
prerequisite("WVIT331", ["WVIT233"]).
prerequisite("WVIT332", ["PLSC232", "PLSC/WVIT331"]).
prerequisite("WVIT332", ["WVIT233", "PLSC/WVIT331"]).
prerequisite("WVIT333", ["PLSC232", "PLSC/WVIT331"]).
prerequisite("WVIT333", ["WVIT233", "PLSC/WVIT331"]).
prerequisite("WVIT339", ["WVIT202"]).
prerequisite("WVIT343", ["AGB212"]).
prerequisite("WVIT343", ["ECON201"]).
prerequisite("WVIT343", ["ECON221"]).
prerequisite("WVIT343", ["ECON222"]).
prerequisite("WVIT344", ["AGB212"]).
prerequisite("WVIT344", ["ECON201"]).
prerequisite("WVIT344", ["ECON221"]).
prerequisite("WVIT344", ["ECON222"]).
prerequisite("WVIT345", ["STAT217", "WVIT343"]).
prerequisite("WVIT345", ["STAT218", "WVIT343"]).
prerequisite("WVIT346", ["AGB260", "WVIT343"]).
prerequisite("WVIT365", ["WVIT202", "CHEM312"]).
prerequisite("WVIT404", ["WVIT202"]).
prerequisite("WVIT405", ["WVIT404"]).
prerequisite("WVIT406", ["WVIT405"]).
prerequisite("WVIT414", ["PLSC232"]).
prerequisite("WVIT414", ["WVIT233"]).
prerequisite("WVIT423", ["WVIT343"]).
prerequisite("WVIT428", ["AGB214", "SS221", "WVIT233", "WVIT331", "WVIT332", "WVIT333"]).
prerequisite("WVIT433", ["WVIT343"]).
prerequisite("WVIT442", ["WVIT202"]).
prerequisite("WVIT447", ["WVIT102"]).
prerequisite("WVIT450", ["AGB214", "BUS301"]).
prerequisite("WVIT450", ["AGB214", "WVIT343"]).
prerequisite("WVIT450", ["BUS214", "BUS301"]).
prerequisite("WVIT450", ["BUS214", "WVIT343"]).
prerequisite("WVIT464", ["STAT218"]).
prerequisite("WVIT477", ["WVIT301"]).
prerequisite("WGQS324", ["PSY201"]).
prerequisite("WGQS324", ["PSY202"]).
prerequisite("WGQS375", ["ART112", "ART212", "ART213"]).
prerequisite("WGQS375", ["WGQS201"]).
prerequisite("WGQS400", ["WGQS201"]).
prerequisite("WGQS417", ["POLS112"]).
prerequisite("WGQS421", ["HIST303"]).
prerequisite("WGQS434", ["HIST303"]).
prerequisite("WGQS435", ["HIST303"]).
prerequisite("WGQS450", ["WGQS201"]).
prerequisite("WGQS457", ["POLS112"]).
prerequisite("WGQS458", ["HIST303"]).
prerequisite("WGQS467", ["WGQS201"]).
prerequisite("WLC102", ["WLC101"]).
prerequisite("WLC103", ["WLC102"]).
prerequisite("WLC201", ["WLC103"]).
prerequisite("WLC202", ["WLC201"]).
prerequisite("WLC318", ["WLC310"]).
prerequisite("WLC425", ["EDUC469"]).
prerequisite("WLC425", ["EDUC479"]).
prerequisite("WLC460", ["WLC360"]).

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