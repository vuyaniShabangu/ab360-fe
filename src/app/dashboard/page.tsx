import { CompanyInviteForm } from "@/components/company-invite-form";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Hello Dashboard</h1>
      <CompanyInviteForm />
    </div>
  );
}
