import './Dashboard.css';

// components
import SidebarLeft from '../../components/SidebarLeft/SidebarLeft';
import SidebarRight from '../../components/SidebarRight/SidebarRight';
import Main from '../../components/main/Main';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="header">
        <div>
          <SidebarLeft />
        </div>
        <div>
          <Main />
        </div>
        <div>
          <SidebarRight />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
