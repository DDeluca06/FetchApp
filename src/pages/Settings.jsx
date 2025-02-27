import { useEffect } from 'react';
import { usePuppy } from '../components/context/PuppyContext';

function Settings() {
    const { settings, updateSettings } = usePuppy();

    // Update theme when settings change
    useEffect(() => {
        if (settings?.theme) {
            document.documentElement.setAttribute('data-theme', settings.theme);
        }
    }, [settings?.theme]);

    const handleSettingChange = (setting, value) => {
        const newSettings = {
            ...settings,  // Keep all existing settings
            [setting]: value  // Update just the changed setting
        };
        updateSettings(newSettings);
    };

    return (
        <div className="page-container">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>
            
            <div className="space-y-6">
                <div className="bg-[var(--bg-secondary)] p-6 rounded-lg shadow-md border border-[var(--border-color)]">
                    <h2 className="text-xl font-semibold mb-4">Appearance</h2>
                    <div className="flex items-center justify-between">
                        <label htmlFor="theme">Theme</label>
                        <select
                            id="theme"
                            value={settings?.theme || 'light'}
                            onChange={(e) => handleSettingChange('theme', e.target.value)}
                            className="border rounded p-2 bg-[var(--bg-primary)] text-[var(--text-primary)]"
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                </div>

                <div className="bg-[var(--bg-secondary)] p-6 rounded-lg shadow-md border border-[var(--border-color)]">
                    <h2 className="text-xl font-semibold mb-4">Notifications</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label htmlFor="notifications">Enable Notifications</label>
                            <input
                                type="checkbox"
                                id="notifications"
                                checked={settings?.notifications ?? true}
                                onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                                className="w-4 h-4 accent-[var(--accent-color)]"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="sound">Sound Effects</label>
                            <input
                                type="checkbox"
                                id="sound"
                                checked={settings?.sound ?? true}
                                onChange={(e) => handleSettingChange('sound', e.target.checked)}
                                className="w-4 h-4 accent-[var(--accent-color)]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
