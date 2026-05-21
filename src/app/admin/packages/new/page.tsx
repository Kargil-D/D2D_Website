import AdminShell from "@/components/admin/AdminShell";
import PackageForm from "@/components/admin/PackageForm";

export const metadata = { title: "Create Package - Admin � D2D Holidays" };

export default function NewPackagePage() {
  return (
    <AdminShell title="Create Package">
      <PackageForm />
    </AdminShell>
  );
}
