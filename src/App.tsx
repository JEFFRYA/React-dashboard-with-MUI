
import AppRouter from "./router/AppRouter";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AuthProvider } from "./auth/context/AuthProvider";
import { BrowserRouter } from "react-router-dom";

export const App = () => {

  return (
    <>
      <AuthProvider>
        
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
        
      </AuthProvider>
    </>
  )
}