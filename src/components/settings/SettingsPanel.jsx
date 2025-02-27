import { useContext } from "react";
import { PuppyContext } from "../context/PuppyContext";
import "./SettingsPanel.css";

export default function SettingsPanel() {
    const { settings, updateSettings } = useContext(PuppyContext);

    const toggleTheme = () => {
        updateSettings({
            theme: settings.theme === "light" ? "dark" : "light"
        });
    };

    return (
        <div className="settings-panel">
            <div className="setting-item">
                <label htmlFor="theme-toggle">Theme</label>
                <button
                    id="theme-toggle"
                    onClick={toggleTheme}
                    className="theme-toggle-btn"
                >
                    {settings.theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                </button>
            </div>
        </div>
    );
}
