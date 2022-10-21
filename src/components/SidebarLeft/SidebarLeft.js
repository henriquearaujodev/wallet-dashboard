import './SidebarLeft.css';
import sidebarIconMenu from '../../assets/image/menu-sidebar.svg';
import sidebarIconWallet from '../../assets/image/wallet.svg';
import sidebarIconNotification from '../../assets/image/notification.svg';
import sidebarIconHelp from '../../assets/image/help.svg';
import sidebarIconSeting from '../../assets/image/seting.svg';
import sidebarIconExit from '../../assets/image/exit.svg';

const SidebarLeft = () => {
  return (
    <div className="sidebar-left">
      <div className="sidebar-left-menu">
        <div className="sidebar-left-items">
          <div className="icon">
            <img className="icon-menu" src={sidebarIconMenu} alt="" />
          </div>
          <div className="menu">Dashboard</div>
        </div>
        <div className="sidebar-left-items">
          {' '}
          <div className="icon">
            <img className="icon-menu" src={sidebarIconWallet} alt="" />
          </div>
          <div className="menu">Carteira</div>
        </div>
        <div className="sidebar-left-items">
          {' '}
          <div className="icon">
            <img className="icon-menu" src={sidebarIconNotification} alt="" />
          </div>
          <div className="menu">Notificações</div>
        </div>
        <div className="sidebar-left-items">
          {' '}
          <div className="icon">
            <img className="icon-menu" src={sidebarIconHelp} alt="" />
          </div>
          <div className="menu">Ajuda</div>
        </div>
      </div>
      <div className="sidebar-left-premium">PREMIUM</div>
      <div className="sidebar-left-config">
        <div className="sidebar-left-items">
          <div className="icon">
            <img className="icon-menu" src={sidebarIconSeting} alt="" />
          </div>
          <div className="menu">Configurações</div>
        </div>
        <div className="sidebar-left-items">
          <div className="icon">
            <img className="icon-menu" src={sidebarIconExit} alt="" />
          </div>
          <div className="menu">Sair</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
