import { Input } from "@/components/ui/input";

export const SignInCard = () => {
  return (
    <div className="flex items-center flex-col  ">
      <h1 className="text-3xl font-semibold">Welcome back ✋</h1>
      <p className="text-base text-muted-foreground">
        Enter your email and password to login your account
      </p>
      <div>
        <form action="">
          <Input placeholder="Email"></Input>
        </form>
      </div>
    </div>
  );
};
