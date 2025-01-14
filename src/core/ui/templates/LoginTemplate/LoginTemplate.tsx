import { Toaster } from "react-hot-toast";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../molecules/Card/Card";
import FormLogin from "../../organisms/FormLogin/FormLogin";

interface LoginTemplateProps {
  handleSubmit: (event: React.FormEvent) => void;
  loading: boolean;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const LoginTemplate = ({
  handleSubmit,
  loading,
  email,
  password,
  setEmail,
  setPassword,
}: LoginTemplateProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Toaster />
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormLogin
            handleSubmit={handleSubmit}
            loading={loading}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginTemplate;
