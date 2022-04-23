import { userTokenValidationParams } from "../../auth/middleware/userTokenValidationParams";
import { Router } from "express";
import { bodyRequestValidator } from "../../shared/validators/bodyRequestValidators";
import {
  authLogin,
  authSignup,
  recoveryPasswordController,
  refreshToken,
  updatePasswordController,
  validateUserController,
} from "../controllers";
import { refreshTokenValidation } from "../middleware/refreshTokenValidation";
import {
  loginUserSchema,
  signUpUserSchema,
} from "../utils/userSchemaValidator";

const router: Router = Router();

router
  .route("/signup")
  .post(bodyRequestValidator(signUpUserSchema), authSignup);
router.route("/login").post(bodyRequestValidator(loginUserSchema), authLogin);
router.route("/refreshtoken").post(refreshTokenValidation, refreshToken);

router
  .route("/validate/:token")
  .post(userTokenValidationParams, validateUserController);

router.route("/recovery").post(recoveryPasswordController);
router.route("/recovery/:id/:token").post(updatePasswordController);

export default router;
