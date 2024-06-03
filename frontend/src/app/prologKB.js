import pl from "tau-prolog";
import "tau-prolog/modules/lists";

const session = pl.create(1000);

const program = `
  major("Computer Science").

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
  prerequisite("CSC325", [["CSC300"],["CSC203"],["PHIL323"]]).
  prerequisite("CSC402", [["CSC307"],["CSC309"]]).
  prerequisite("CSC409", [["CSC307"],["CSC309"]]).
  prerequisite("CSC410", ["CSC349", "STAT312"]).
  prerequisite("CSC421", ["CSC321", ["CSC300", "PHIL323"]]).
  prerequisite("CSC422", ["CSC364"]).
  prerequisite("CSC424", ["CSC321", ["CSC307","CSC309"]]).
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
  prerequisite("CSC484", [["CSC307"], ["CSC308"]]).
  prerequisite("CSC487", ["CSC349", ["MATH206", "244"]]).
  prerequisite("CSC364", ["CSC203"]).
  prerequisite("CSC300", ["CSC357"]).
  prerequisite("CSC491", [["CSC307"], ["CSC309"]]).
  prerequisite("CSC492", ["CSC491"]).
  prerequisite("CSC497", [["CSC307"], ["CSC309"]]).
  prerequisite("CSC498", ["CSC497"]).

  disqualified("CSC307", ["CSC308", "CSC309"]).

  taken("CSC202").

  %Predicates
  %Base case: If there are no prerequisites for a course, then it is satisfied.
  prereqsSatisfied(X) :-
      \\+ prerequisite(X, _).

  %Recursive case: Check if all prerequisites of a course are taken.
  prereqsSatisfied(X) :-
      prerequisite(X, Prereqs),
      allPrereqsTaken(Prereqs).

  %Predicate to check if all prerequisites are taken.
  allPrereqsTaken([]). % Base case: No prerequisites left to check.
  allPrereqsTaken([P|Prereqs]) :-
      taken(P),            % Check if the prerequisite is taken.
      allPrereqsTaken(Prereqs). % Recur for the rest of the prerequisites.
`;

session.consult(program);

export default session;
