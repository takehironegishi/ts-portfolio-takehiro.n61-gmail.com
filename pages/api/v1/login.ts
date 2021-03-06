import auth0 from "utils/auth0";

const login = async (req: any, res: any) => {
  try {
    await auth0.handleLogin(req, res);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(400).json({ message: error.message });
    }
  }
};

export default login;
