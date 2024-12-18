import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import { Separator } from "@/components/ui/separator";

  import AppLogo from "@/assets/logo.jpeg";


export function Home() {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-4">
  <Avatar>
    <AvatarImage src={AppLogo} />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <h1  className="text-4xl font-bold text-left">
    Bienvenue sur OsAIthi.Ai
  </h1>
</div>

        <br/>
        <br/>
        <br/>
        <br/>
        <Carousel>
        <CarouselContent>
        
            <CarouselItem><img 
          src="https://files.oaiusercontent.com/file-3SRFrEWdcWv5E2sNq9bP1v?se=2024-12-17T12%3A34%3A46Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Defa98397-dfc9-4f63-96cc-f419987e934f.webp&sig=kvjv4/nDUu8PUj26bESdGh5AcIXXj5zsT3nj1UPt3c0%3D" 
          alt="Placeholder" 
          className="w-600 h-300 my-4"
        /></CarouselItem>
            <CarouselItem><img 
          src="https://i.ytimg.com/vi/wWdIUTpNt2A/maxresdefault.jpg" 
          alt="Placeholder" 
          className="w-full h-auto my-4"
        /></CarouselItem>
            <CarouselItem><img 
          src="https://via.placeholder.com/600x300" 
          alt="Placeholder" 
          className="w-full h-auto my-4"
        /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        <Separator />
        <br></br>
        
        <h2  className="text-3xl font-bold mb-5 text-center">
            À propos de nous
        </h2>
        <p className="text-gray-700 leading-relaxed">Nous sommes un groupe d'étudiants en 2ème année de Mathématiques Appliquées et Modélisation de l'école national supérieur d'ingénieur de Tunis passionnés par l'intelligence artificielle et ses applications dans le domaine éducatif. À travers notre projet, nous avons entrepris de réaliser une recherche statistique approfondie sur l'intégration et l'impact de l'IA dans l'éducation moderne.

Notre étude vise à explorer comment l'IA peut améliorer les méthodes d'apprentissage, personnaliser les parcours éducatifs et offrir des solutions innovantes pour les enseignants et les étudiants.

Dans le cadre de ce projet, nous avons également développé un chatbot interactif conçu pour accompagner les utilisateurs, répondre à leurs questions et offrir une expérience pratique et intuitive de l'intelligence artificielle en éducation.

L'ensemble de notre travail est centralisé sur notre plateforme web OstAIthi.Ai, un espace dédié où statistiques, analyses et outils IA se rencontrent pour contribuer à une réflexion innovante sur l'avenir de l'éducation.</p>
<img 
          src="https://www.ensit.tn/wp-content/uploads/2015/05/logo-ecole-1170x284.png" 
          alt="Placeholder" 
          className="w-full h-auto my-4"
        />

<div>Item 1</div>      
      </div>
    );
  }
  