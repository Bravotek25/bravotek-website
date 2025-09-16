import Navbar from "@/components/Navbar";
import "./globals.css";
import Script from "next/script";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Bravotek - Your Trusted Technology Partner",
  description:
    "Bravotek provides cutting-edge technology solutions, web development, and digital services to help businesses grow in the digital age.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>
          <ToastContainer
            position="bottom-center"
            autoClose={4000}
            hideProgressBar={false}
            closeOnClick
            transition={Slide}
            toastStyle={{ backgroundColor: "#FFF" }}
            progressStyle={{ backgroundColor: "#082601" }} // Custom progress bar color
          />
          <Navbar />
          {children}
          <Footer />
        </ClientLayout>
        {/* Tawk.to Live Chat Widget */}
        <Script id="tawkto" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            Tawk_API.onLoad = function () {
              console.log("Tawk.to widget loaded");
            };
            Tawk_API.onChatMaximized = function () {
              setTimeout(function () {
                const chatContainer = document.getElementById("tawkchat-container");
                if (chatContainer) {
                  if (window.innerWidth <= 768) {
                    chatContainer.style.width = "calc(100vw - 40px)";
                    chatContainer.style.maxWidth = "calc(100vw - 40px)";
                    chatContainer.style.left = "20px";
                    chatContainer.style.right = "20px";
                  } else {
                    chatContainer.style.width = "400px";
                    chatContainer.style.maxWidth = "400px";
                    chatContainer.style.right = "20px";
                    chatContainer.style.left = "auto";
                  }
                }
              }, 100);
            };
            (function () {
              var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = "https://embed.tawk.to/6857e2dbf4cfc5190e97f37a/1iubksc5n";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
