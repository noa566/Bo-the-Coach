import { NextResponse } from "next/server";

type ContactPayload = {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  consent?: string | boolean;
};

export async function POST(req: Request) {
  let data: ContactPayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Format JSON invalide." },
      { status: 400 }
    );
  }

  const { firstname, lastname, email, message, consent } = data;

  if (!firstname || !lastname || !email || !message) {
    return NextResponse.json(
      { error: "Tous les champs requis doivent être remplis." },
      { status: 400 }
    );
  }

  if (!consent) {
    return NextResponse.json(
      { error: "Le consentement est obligatoire." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Adresse email invalide." },
      { status: 400 }
    );
  }

  // TODO: brancher un vrai service d'envoi d'emails (Resend, SendGrid, Nodemailer…)
  // Pour le moment, on logge la demande côté serveur et on renvoie un succès.
  console.log("[CONTACT] Nouvelle demande :", {
    firstname,
    lastname,
    email,
    phone: data.phone,
    subject: data.subject,
    message,
  });

  return NextResponse.json({ ok: true });
}
