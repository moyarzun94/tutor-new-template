import { Tutor } from "../../components/tutor/Tutor";
import { withAuth } from "../../components/Auth";

import { useRouter } from "next/router";
export default withAuth(function exercise() {
  const router = useRouter();

  const idExercise = router.query.exerciseId;

  return <div>{idExercise && <Tutor id={idExercise} />}</div>;
});
