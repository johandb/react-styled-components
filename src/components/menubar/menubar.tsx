import { useEffect, useState, type JSX } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaCalendarAlt, FaChurch, FaHandsHelping, FaHome, FaNewspaper, FaTable, FaUserFriends } from "react-icons/fa";
import dataService from "../../api/data.service";
import type { Menu } from "../../models/data.model";

import React from "react";
import "./menubar.css";

export const Menubar = (): JSX.Element => {
  const [menuData, setMenuData] = useState<Menu[] | null>(null);

  const menuIcons = [
    { id: 1, name: "FaHandsHelping", icons: <FaHandsHelping size={28} /> },
    { id: 2, name: "FaChurch", icons: <FaChurch size={28} /> },
    { id: 3, name: "FaHome", icons: <FaHome size={28} /> },
    { id: 4, name: "FaNewspaper", icons: <FaNewspaper size={28} /> },
    { id: 5, name: "FaCalendarAlt", icons: <FaCalendarAlt size={28} /> },
    { id: 6, name: "FaUserFriends", icons: <FaUserFriends size={28} /> },
    { id: 7, name: "FaTable", icons: <FaTable size={28} /> },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    setMenuData(null);
    await dataService.post("menu.php", JSON.stringify({ menu: "top" })).then((response) => {
      console.log("MENUS:", response?.data);
      setMenuData(response?.data);
    });
  };

  return (
    <>
      <div className="menubar">
        <ul>
          {menuData?.map((menu) => (
            <li key={menu.id}>
              <div className="icon">
                <Link to={`${menu.route}/${menu.parameters}`}>
                  <div>{menuIcons.find((x) => x.name === menu.class)?.icons}</div>
                  <div>{menu.title}</div>
                </Link>
              </div>
              <ul>
                {menu.items &&
                  menu.items.map((item) => (
                    <li key={item.id}>
                      <div>
                        <Link to={`${item.route}/${item.parameters}`}>
                          <div>{item.title}</div>
                        </Link>
                      </div>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="mobile">
        <select onChange={(event) => navigate(event?.target.value)}>
          <option value="/">Selecteer een menukeuze </option>
          {menuData?.map((menu) => (
            <React.Fragment key={menu.id}>
              <option value={`${menu.route}/${menu.parameters}`}>{menu.title}</option>
              {menu.items?.map((item) => (
                <option key={item.id} value={`${item.route}/${item.parameters}`}>
                  {item.title}
                </option>
              ))}
            </React.Fragment>
          ))}
        </select>
      </div>
    </>
  );
};

export default Menubar;
