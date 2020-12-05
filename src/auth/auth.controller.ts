import { Controller, Get, Request, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { AuthService } from "./auth.service";
import HTTP from "axios";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Request() req) {
    const recaptchaVerificationResponse = await HTTP.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null, // Use query params instead of POST body
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET,
          response: req.body.recaptchaResponse,
        },
      }
    );
    const recaptchaResult = recaptchaVerificationResponse.data;
    if (recaptchaResult.success !== true) {
      throw new Error("De reCAPTCHA verificatie is mislukt");
    }
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
