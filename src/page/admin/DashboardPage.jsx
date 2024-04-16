import HeaderAdmin from "../../component/admin/HeaderAdmin";
import { UseVerifyIfUserIsLogged } from "../../utils/security-utils";

const DashboardPage = () => {
  UseVerifyIfUserIsLogged();

    return (
        <HeaderAdmin />
    )
}

export default DashboardPage;