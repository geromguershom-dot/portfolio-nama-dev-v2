import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="center-page">
        <h1 className="grad">404</h1>
        <p>Cette page n'existe pas ou a été déplacée.</p>
        <Link className="btn btn-primary" href="/">Retour à l'accueil</Link>
      </div>
    </SiteLayout>
  );
}
