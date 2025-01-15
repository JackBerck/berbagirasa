import Aside from "../../components/Dashboard/Aside";
import ManagePost from "../../components/Dashboard/ManagePost";

export default function DashboardManagePost() {
  return (
    <main>
      <section
        id="dashboard-manage-post"
        className="section-padding-x pt-24 pb-16 text-dark-base"
      >
        <div className="container max-w-screen-xl">
          <div className="flex flex-col md:flex-row gap-8">
            <Aside />
            <ManagePost />
          </div>
        </div>
      </section>
    </main>
  );
}
