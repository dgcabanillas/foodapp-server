import { createAuthToken } from "../utils/tokenManager";
import { sendEmailServiceNodeMailer } from "../../shared/service/sendEmailServiceNodeMailer";
import { UserIdType } from "../../collections/Users/entity/types/type";
import { sendEmailServiceSendGrid } from "../../shared/service/sendEmailServiceSendGrid";
import { emailMessage } from "../../auth/utils/validateAcountEmailTemplate";
import Logger from "../../shared/logger/appLogger";

export const authSendValidationUserEmail = async (
  userId: UserIdType,
  email: string
): Promise<unknown> => {
  const validateToken = createAuthToken({ id: userId });
  const link = `${process.env.EMAIL_VALIDATE_URL}/validate/${validateToken}`;
  try {
    return await sendEmailServiceSendGrid(
      email,
      "email validation",
      emailMessage(link)
    );
  } catch (error: any) {
    Logger.error("Error sending user email validation", {
      instance: "services",
      fn: "authSendValidateUserEmail",
      trace: error.message,
    });
    throw new Error("Error sending user email validation");
  }
};
