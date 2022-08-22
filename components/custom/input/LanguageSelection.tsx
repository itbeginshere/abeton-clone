const LanguageSelection = () => {
    return (
        <select name="language" className={'bg-gray-200 px-3 py-2 font-semibold text-gray-600 text-sm'}>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
            <option value="ja">日本語</option>
            <option value="zh-cn">简体中文</option>
        </select>
    );
}

export default LanguageSelection;