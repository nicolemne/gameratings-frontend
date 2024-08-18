import { rest } from "msw";

const baseURL = "https://gameratings-api-d04888e8239b.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "nikksy",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image:
          "https://res.cloudinary.com/dlsgy5pmf/image/upload/v1/media/images/Fci12hxX0AECwEj1_tiy4gg",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return rex(ctx.status(200));
  }),
];
