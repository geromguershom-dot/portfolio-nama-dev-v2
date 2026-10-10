import { profile } from "@/data/portfolio";

export default function Portrait() {
  if (!profile.photo) return null;
  return (
    <figure className="portrait reveal">
      <img src={profile.photo} alt={`Portrait de ${profile.name}`} loading="lazy" />
      <figcaption>
        {profile.name}
        <small>{profile.role} · {profile.location}</small>
      </figcaption>
    </figure>
  );
}
