import Aside from "../../components/Dashboard/Aside";
import ManageProfile from "../../components/Dashboard/ManageProfile";

export default function DashboardProfile() {
  return (
    <main>
      <section
        id="dashboard-profile"
        className="section-padding-x pt-24 pb-16 text-dark-base"
      >
        <div className="container max-w-screen-xl">
          <div className="flex flex-col md:flex-row gap-8">
            <Aside />
            <ManageProfile />
          </div>
        </div>
      </section>
    </main>
  );
}
