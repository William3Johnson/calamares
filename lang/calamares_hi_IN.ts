<?xml version="1.0" ?><!DOCTYPE TS><TS language="hi_IN" version="2.1">
<context>
    <name>AutoMountManagementJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/AutoMountManagementJob.cpp" line="22"/>
        <source>Manage auto-mount settings</source>
        <translation>स्वतः माउंट सेटिंग्स हेतु प्रबंधन</translation>
    </message>
</context>
<context>
    <name>BIOS</name>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="41"/>
        <source>GRUB 2, the GRand Unified Bootloader is the reference implementation of the Free Software Foundation&apos;s Multiboot Specification, which provides a user the choice to boot one of multiple operating systems installed on a computer.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="54"/>
        <source>GRUB</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="108"/>
        <source>No bootloader selected. Selecting no bootloader might result in an un-bootable system, if you don&apos;t already have a bootloader were you can add this install to.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="121"/>
        <source>No bootloader</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="173"/>
        <source>Please select a bootloader option for your install, or leave the default option, &lt;strong&gt;GRUB 2&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="62"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>इस सिस्टम का &lt;strong&gt;बूट वातावरण&lt;/strong&gt;।&lt;br&gt;&lt;br&gt;पुराने x86 सिस्टम केवल &lt;strong&gt;BIOS&lt;/strong&gt; का समर्थन करते हैं। आधुनिक सिस्टम आमतौर पर &lt;strong&gt;EFI&lt;/strong&gt; का उपयोग करते हैं, लेकिन संगतता मोड में शुरू होने पर BIOS के रूप में दिखाई दे सकते हैं ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="72"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>यह सिस्टम &lt;strong&gt;EFI&lt;/strong&gt;बूट वातावरण के साथ शुरू किया गया।&lt;br&gt;&lt;br&gt;EFI वातावरण से स्टार्टअप विन्यस्त करने के लिए इंस्टॉलर को &lt;strong&gt;GRUB&lt;/strong&gt; या &lt;strong&gt;systemd-boot&lt;/strong&gt; जैसे बूट लोडर अनुप्रयोग &lt;strong&gt;EFI सिस्टम विभाजन&lt;/strong&gt;पर स्थापित करने जरूरी हैं। यह स्वत: होता है, परंतु अगर आप मैनुअल विभाजन करना चुनते है; तो आपको या तो इसे चुनना होगा या फिर खुद ही बनाना होगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="84"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>यह सिस्टम &lt;strong&gt;BIOS&lt;/strong&gt;बूट वातावरण के साथ शुरू किया गया।&lt;br&gt;&lt;br&gt;BIOS वातावरण से स्टार्टअप विन्यस्त करने के लिए इंस्टॉलर को &lt;strong&gt;GRUB&lt;/strong&gt; जैसे बूट लोडर को, या तो विभाजन की शुरुआत में या फिर &lt;strong&gt;Master Boot Record&lt;/strong&gt; पर विभाजन तालिका की शुरुआत में इंस्टॉल (सुझाया जाता है) करना होगा। यह स्वत: होता है, परंतु अगर आप मैनुअल विभाजन करना चुनते है; तो आपको इसे खुद ही बनाना होगा।</translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="59"/>
        <source>Master Boot Record of %1</source>
        <translation>%1 का मास्टर बूट रिकॉर्ड</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="92"/>
        <source>Boot Partition</source>
        <translation>बूट विभाजन</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="99"/>
        <source>System Partition</source>
        <translation>सिस्टम विभाजन</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="129"/>
        <source>Do not install a boot loader</source>
        <translation>बूट लोडर इंस्टॉल न करें</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="147"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
</context>
<context>
    <name>Calamares::BlankViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/BlankViewStep.cpp" line="61"/>
        <source>Blank Page</source>
        <translation>खाली पृष्ठ</translation>
    </message>
</context>
<context>
    <name>Calamares::DebugWindow</name>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="18"/>
        <source>Form</source>
        <translation>रूप</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="28"/>
        <source>GlobalStorage</source>
        <translation>ग्लोबल स्टोरेज</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="38"/>
        <source>JobQueue</source>
        <translation>कार्य पंक्ति</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="48"/>
        <source>Modules</source>
        <translation>मॉड्यूल</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="61"/>
        <source>Type:</source>
        <translation>प्रकार</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="68"/>
        <location filename="../src/calamares/DebugWindow.ui" line="82"/>
        <source>none</source>
        <translation>कुछ नहीं</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="75"/>
        <source>Interface:</source>
        <translation>अंतरफलक :</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="102"/>
        <source>Crashes Calamares, so that Dr. Konqui can look at it.</source>
        <translation>Dr. Konqui द्वारा जाँच के लिए Calamares की कार्यप्रणाली निरस्त करने हेतु।</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="115"/>
        <source>Reloads the stylesheet from the branding directory.</source>
        <translation>ब्रांड डायरेक्टरी से शैली पत्र पुनः लोड करने हेतु।</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="141"/>
        <source>Uploads the session log to the configured pastebin.</source>
        <translation>सत्र लॉग फाइल को विन्यस्त पेस्टबिन साइट पर अपलोड करने हेतु।</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="144"/>
        <source>Send Session Log</source>
        <translation>सत्र लॉग फाइल भेजें</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="118"/>
        <source>Reload Stylesheet</source>
        <translation>शैली पत्रक पुनः लोड करें</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="128"/>
        <source>Displays the tree of widget names in the log (for stylesheet debugging).</source>
        <translation>(शैली दोषमार्जन हेतु) लॉग फाइल में विजेट नाम प्रदर्शन।</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="131"/>
        <source>Widget Tree</source>
        <translation>विजेट ट्री</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="221"/>
        <source>Debug information</source>
        <translation>डीबग संबंधी जानकारी</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="88"/>
        <source>Set up</source>
        <translation>सेटअप</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="88"/>
        <source>Install</source>
        <translation>इंस्टॉल करें</translation>
    </message>
</context>
<context>
    <name>Calamares::FailJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="29"/>
        <source>Job failed (%1)</source>
        <translation>कार्य विफल रहा (%1)</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="30"/>
        <source>Programmed job failure was explicitly requested.</source>
        <translation>प्रोग्राम किए गए कार्य की विफलता स्पष्ट रूप से अनुरोधित थी।</translation>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="201"/>
        <source>Done</source>
        <translation>पूर्ण</translation>
    </message>
</context>
<context>
    <name>Calamares::NamedJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="17"/>
        <source>Example job (%1)</source>
        <translation>उदाहरण कार्य (%1)</translation>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="43"/>
        <source>Run command &apos;%1&apos; in target system.</source>
        <translation>लक्षित सिस्टम पर कमांड &apos;%1&apos; चलाएँ।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="43"/>
        <source> Run command &apos;%1&apos;.</source>
        <translation>कमांड &apos;%1&apos; चलाएँ।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="50"/>
        <source>Running command %1 %2</source>
        <translation>कमांड %1%2 चल रही हैं</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="194"/>
        <source>Running %1 operation.</source>
        <translation>%1 चल रहा है।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="223"/>
        <source>Bad working directory path</source>
        <translation>कार्यरत फोल्डर का पथ गलत है</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="224"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>पाइथन कार्य %2 हेतु कार्यरत डायरेक्टरी %1 रीड योग्य नहीं है।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="230"/>
        <source>Bad main script file</source>
        <translation>गलत मुख्य स्क्रिप्ट फ़ाइल</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="231"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>पाइथन कार्य %2 हेतु मुख्य स्क्रिप्ट फ़ाइल %1 रीड योग्य नहीं है।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="304"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>कार्य &quot;%1&quot; में Boost.Python त्रुटि।</translation>
    </message>
</context>
<context>
    <name>Calamares::QmlViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="67"/>
        <source>Loading ...</source>
        <translation>लोड हो रहा है ...</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="88"/>
        <source>QML Step &lt;i&gt;%1&lt;/i&gt;.</source>
        <translation>QML चरण &lt;i&gt;%1&lt;/i&gt;।</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="268"/>
        <source>Loading failed.</source>
        <translation>लोड करना विफल रहा।</translation>
    </message>
</context>
<context>
    <name>Calamares::RequirementsChecker</name>
    <message>
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="94"/>
        <source>Requirements checking for module &lt;i&gt;%1&lt;/i&gt; is complete.</source>
        <translation>मॉड्यूल &lt;i&gt;%1&lt;/i&gt; हेतु आवश्यकताओं की जाँच पूर्ण हुई।</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="115"/>
        <source>Waiting for %n module(s).</source>
        <translation><numerusform>%n मॉड्यूल की प्रतीक्षा में।</numerusform><numerusform>%n मॉड्यूल की प्रतीक्षा में।</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="116"/>
        <source>(%n second(s))</source>
        <translation><numerusform>(%n सेकंड)</numerusform><numerusform>(%n सेकंड)</numerusform></translation>
    </message>
    <message>
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="121"/>
        <source>System-requirements checking is complete.</source>
        <translation>सिस्टम हेतु आवश्यकताओं की जाँच पूर्ण हुई।</translation>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="419"/>
        <source>&amp;Back</source>
        <translation>वापस (&amp;B)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="414"/>
        <source>&amp;Next</source>
        <translation>आगे (&amp;N)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="444"/>
        <source>&amp;Cancel</source>
        <translation>रद्द करें (&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="403"/>
        <source>Cancel setup without changing the system.</source>
        <translation>सिस्टम में बदलाव किये बिना सेटअप रद्द करें।</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="404"/>
        <source>Cancel installation without changing the system.</source>
        <translation>सिस्टम में बदलाव किये बिना इंस्टॉल रद्द करें।</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="162"/>
        <source>Setup Failed</source>
        <translation>सेटअप विफल रहा</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="163"/>
        <source>Would you like to paste the install log to the web?</source>
        <translation>क्या आप इंस्टॉल प्रक्रिया की लॉग फ़ाइल इंटरनेट पर पेस्ट करना चाहेंगे ? </translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="177"/>
        <source>Install log posted to

%1

Link copied to clipboard</source>
        <translation>यहाँ इंस्टॉल की लॉग फ़ाइल पेस्ट की गई

%1

लिंक को क्लिपबोर्ड पर कॉपी किया गया</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="183"/>
        <source>Install Log Paste URL</source>
        <translation>इंस्टॉल प्रक्रिया की लॉग फ़ाइल पेस्ट करें</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="165"/>
        <source>The upload was unsuccessful. No web-paste was done.</source>
        <translation>अपलोड विफल रहा। इंटरनेट पर पेस्ट नहीं हो सका।</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="211"/>
        <source>Calamares Initialization Failed</source>
        <translation>Calamares का आरंभीकरण विफल रहा</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="212"/>
        <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
        <translation>%1 इंस्टॉल नहीं किया जा सका। Calamares सभी विन्यस्त मॉड्यूल लोड करने में विफल रहा। यह आपके लिनक्स वितरण द्वारा Calamares के उपयोग से संबंधित एक समस्या है।</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="218"/>
        <source>&lt;br/&gt;The following modules could not be loaded:</source>
        <translation>&lt;br/&gt;निम्नलिखित मॉड्यूल लोड नहीं हो सकें :</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="332"/>
        <source>Continue with installation?</source>
        <translation>इंस्टॉल प्रक्रिया जारी रखें?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="334"/>
        <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>%2 सेटअप करने हेतु %1 सेटअप प्रोग्राम आपकी डिस्क में बदलाव करने वाला है।&lt;br/&gt;&lt;strong&gt;आप इन बदलावों को पूर्ववत नहीं कर पाएंगे।&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="340"/>
        <source>&amp;Set up now</source>
        <translation>अभी सेटअप करें (&amp;S)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="398"/>
        <source>&amp;Set up</source>
        <translation>सेटअप करें (&amp;S)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="398"/>
        <source>&amp;Install</source>
        <translation>इंस्टॉल करें (&amp;I)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="400"/>
        <source>Setup is complete. Close the setup program.</source>
        <translation>सेटअप पूर्ण हुआ। सेटअप प्रोग्राम बंद कर दें।</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="517"/>
        <source>Cancel setup?</source>
        <translation>सेटअप रद्द करें?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="517"/>
        <source>Cancel installation?</source>
        <translation>इंस्टॉल रद्द करें?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="518"/>
        <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
        <translation>क्या आप वाकई वर्तमान सेटअप प्रक्रिया रद्द करना चाहते हैं?
सेटअप प्रोग्राम बंद हो जाएगा व सभी बदलाव नष्ट।</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="520"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>क्या आप वाकई वर्तमान इंस्टॉल प्रक्रिया रद्द करना चाहते हैं?
इंस्टॉलर बंद हो जाएगा व सभी बदलाव नष्ट।</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="88"/>
        <source>&amp;Yes</source>
        <translation>हाँ (&amp;Y)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="89"/>
        <source>&amp;No</source>
        <translation>नहीं (&amp;N)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="90"/>
        <source>&amp;Close</source>
        <translation>बंद करें (&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="332"/>
        <source>Continue with setup?</source>
        <translation>सेटअप करना जारी रखें?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="337"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>%2 इंस्टॉल करने के लिए %1 इंस्टॉलर आपकी डिस्क में बदलाव करने वाला है।&lt;br/&gt;&lt;strong&gt;आप इन बदलावों को पूर्ववत नहीं कर पाएंगे।&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="340"/>
        <source>&amp;Install now</source>
        <translation>अभी इंस्टॉल करें (&amp;I)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="348"/>
        <source>Go &amp;back</source>
        <translation>वापस जाएँ (&amp;b)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="425"/>
        <source>&amp;Done</source>
        <translation>हो गया (&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="401"/>
        <source>The installation is complete. Close the installer.</source>
        <translation>इंस्टॉल पूर्ण हुआ।अब इंस्टॉलर को बंद करें।</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="179"/>
        <source>Error</source>
        <translation>त्रुटि</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="162"/>
        <source>Installation Failed</source>
        <translation>इंस्टॉल विफल रहा।</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="294"/>
        <source>Unknown exception type</source>
        <translation>अपवाद का प्रकार अज्ञात है</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="312"/>
        <source>unparseable Python error</source>
        <translation>अप्राप्य पाइथन त्रुटि</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="356"/>
        <source>unparseable Python traceback</source>
        <translation>अप्राप्य पाइथन ट्रेसबैक</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="363"/>
        <source>Unfetchable Python error.</source>
        <translation>अप्राप्य पाइथन त्रुटि।</translation>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="370"/>
        <source>%1 Setup Program</source>
        <translation>%1 सेटअप प्रोग्राम</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="371"/>
        <source>%1 Installer</source>
        <translation>%1 इंस्टॉलर</translation>
    </message>
</context>
<context>
    <name>ChangeFilesystemLabelJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="32"/>
        <source>Set filesystem label on %1.</source>
        <translation>%1 पर फाइल सिस्टम उपनाम सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="39"/>
        <source>Set filesystem label &lt;strong&gt;%1&lt;/strong&gt; to partition &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>फाइल सिस्टम उपनाम &lt;strong&gt;%1&lt;/strong&gt; को विभाजन &lt;strong&gt;%2&lt;/strong&gt; पर सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="70"/>
        <source>The installer failed to update partition table on disk &apos;%1&apos;.</source>
        <translation>इंस्टॉलर डिस्क &apos;%1&apos; पर विभाजन तालिका अपडेट करने में विफल रहा।</translation>
    </message>
</context>
<context>
    <name>CheckerContainer</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="38"/>
        <source>Gathering system information...</source>
        <translation>सिस्टम की जानकारी प्राप्त की जा रही है...</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="141"/>
        <source>After:</source>
        <translation>बाद में:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1014"/>
        <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
        <translation>%1 को छोटा करके %2MiB किया जाएगा व %4 हेतु %3MiB का एक नया विभाजन बनेगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1339"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1376"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1398"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1423"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;डिस्क का सारा डाटा हटाएँ&lt;/strong&gt;&lt;br/&gt;इससे चयनित डिवाइस पर मौजूद सारा डाटा &lt;font color=&quot;red&quot;&gt;हटा&lt;/font&gt;हो जाएगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1343"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1372"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1394"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1419"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;साथ में इंस्टॉल करें&lt;/strong&gt;&lt;br/&gt;इंस्टॉलर %1 के लिए स्थान बनाने हेतु एक विभाजन को छोटा कर देगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1347"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1381"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1402"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1427"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;विभाजन को बदलें&lt;/strong&gt;&lt;br/&gt;एक विभाजन को %1 से बदलें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1071"/>
        <source>Boot loader location:</source>
        <translation>बूट लोडर का स्थान:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="139"/>
        <source>Select storage de&amp;vice:</source>
        <translation>डिवाइस चुनें (&amp;v):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="140"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="996"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1042"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1133"/>
        <source>Current:</source>
        <translation>मौजूदा :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="861"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>%2 के होम विभाजन के लिए %1 को पुनः उपयोग करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="997"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;छोटा करने के लिए विभाजन चुनें, फिर नीचे bar से उसका आकर सेट करें&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1124"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;इंस्टॉल के लिए विभाजन चुनें&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1183"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>इस सिस्टम पर कहीं भी कोई EFI सिस्टम विभाजन नहीं मिला। कृपया वापस जाएँ व %1 को सेट करने के लिए मैनुअल रूप से विभाजन करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1191"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>%1 वाले EFI सिस्टम विभाजन का उपयोग %2 को शुरू करने के लिए किया जाएगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1199"/>
        <source>EFI system partition:</source>
        <translation>EFI सिस्टम विभाजन:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1334"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>इस डिवाइस पर लगता है कि कोई ऑपरेटिंग सिस्टम नहीं है। आप क्या करना चाहेंगे?&lt;br/&gt;आप डिवाइस में किसी भी बदलाव से पहले उसकी समीक्षा व पुष्टि कर सकेंगे।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1366"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>इस डिवाइस पर %1 है। आप क्या करना चाहेंगे?&lt;br/&gt;आप डिवाइस में किसी भी बदलाव से पहले उसकी समीक्षा व पुष्टि कर सकेंगे।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1389"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>इस डिवाइस पर पहले से एक ऑपरेटिंग सिस्टम है। आप क्या करना चाहेंगे?&lt;br/&gt;आप डिवाइस में किसी भी बदलाव से पहले उसकी समीक्षा व पुष्टि कर सकेंगे।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1414"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>इस डिवाइस पर एक से अधिक ऑपरेटिंग सिस्टम है। आप क्या करना चाहेंगे?&lt;br/&gt;आप डिवाइस में किसी भी बदलाव से पहले उसकी समीक्षा व पुष्टि कर सकेंगे।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1486"/>
        <source>This storage device already has an operating system on it, but the partition table &lt;strong&gt;%1&lt;/strong&gt; is different from the needed &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</source>
        <translation>इस संचय उपकरण पर पहले से ऑपरेटिंग सिस्टम है, परंतु &lt;strong&gt;%1&lt;/strong&gt; विभाजन तालिका अपेक्षित &lt;strong&gt;%2&lt;/strong&gt; से भिन्न है।&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1509"/>
        <source>This storage device has one of its partitions &lt;strong&gt;mounted&lt;/strong&gt;.</source>
        <translation>इस संचय उपकरण के विभाजनों में से कोई एक विभाजन &lt;strong&gt;माउंट&lt;/strong&gt; है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1514"/>
        <source>This storage device is a part of an &lt;strong&gt;inactive RAID&lt;/strong&gt; device.</source>
        <translation>यह संचय उपकरण एक &lt;strong&gt;निष्क्रिय RAID&lt;/strong&gt; उपकरण का हिस्सा है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1641"/>
        <source>No Swap</source>
        <translation>कोई स्वैप नहीं</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1649"/>
        <source>Reuse Swap</source>
        <translation>स्वैप पुनः उपयोग करें</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1652"/>
        <source>Swap (no Hibernate)</source>
        <translation>स्वैप (हाइबरनेशन/सिस्टम सुप्त रहित)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1655"/>
        <source>Swap (with Hibernate)</source>
        <translation>स्वैप (हाइबरनेशन/सिस्टम सुप्त सहित)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1658"/>
        <source>Swap to file</source>
        <translation>स्वैप फाइल बनाएं</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1671"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.&lt;br/&gt;Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;,&lt;br/&gt;either use an existing without formatting or create one.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="18"/>
        <source>Form</source>
        <translation>रूप</translation>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="42"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>%1 पर विभाजन कार्य हेतु माउंट हटाएँ</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="49"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>%1 पर विभाजन कार्य हेतु माउंट हटाएँ जा रहे हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="224"/>
        <source>Cleared all mounts for %1</source>
        <translation>%1 के लिए सभी माउंट हटा दिए गए</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="32"/>
        <source>Clear all temporary mounts.</source>
        <translation>सभी अस्थायी माउंट हटाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="39"/>
        <source>Clearing all temporary mounts.</source>
        <translation>सभी अस्थायी माउंट हटाएँ जा रहे हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="52"/>
        <source>Cannot get list of temporary mounts.</source>
        <translation>अस्थाई माउंट की सूची नहीं मिली।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="97"/>
        <source>Cleared all temporary mounts.</source>
        <translation>सभी अस्थायी माउंट हटा दिए गए।</translation>
    </message>
</context>
<context>
    <name>CommandList</name>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="142"/>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="155"/>
        <source>Could not run command.</source>
        <translation>कमांड चलाई नहीं जा सकी।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="143"/>
        <source>The command runs in the host environment and needs to know the root path, but no rootMountPoint is defined.</source>
        <translation>होस्ट वातावरण में कमांड हेतु रुट पथ जानना आवश्यक है परन्तु कोई रूट माउंट पॉइंट परिभाषित नहीं किया गया है।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="156"/>
        <source>The command needs to know the user&apos;s name, but no username is defined.</source>
        <translation>कमांड हेतु उपयोक्ता का नाम आवश्यक है परन्तु कोई नाम परिभाषित नहीं है।</translation>
    </message>
</context>
<context>
    <name>Config</name>
    <message>
        <location filename="../src/modules/keyboard/Config.cpp" line="354"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation>कुंजीपटल का मॉडल %1 सेट करें।&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/Config.cpp" line="361"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>कुंजीपटल का अभिन्यास %1/%2 सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="342"/>
        <source>Set timezone to %1/%2.</source>
        <translation>समय क्षेत्र %1%2 सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="380"/>
        <source>The system language will be set to %1.</source>
        <translation>सिस्टम भाषा %1 सेट की जाएगी।</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="387"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation>संख्या व दिनांक स्थानिकी %1 सेट की जाएगी।</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="55"/>
        <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>यह कंप्यूटर %1 सेटअप करने की न्यूनतम आवश्यकताओं को पूरा नहीं करता।&lt;br/&gt;सेटअप जारी नहीं रखा जा सकता।&lt;a href=&quot;#details&quot;&gt;विवरण...&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="59"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>यह कंप्यूटर %1 इंस्टॉल करने की न्यूनतम आवश्यकताओं को पूरा नहीं करता।&lt;br/&gt;इंस्टॉल जारी नहीं रखा जा सकता।&lt;a href=&quot;#details&quot;&gt;विवरण...&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="66"/>
        <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
        <translation>यह कंप्यूटर %1 सेटअप करने हेतु सुझाई गई आवश्यकताओं को पूरा नहीं करता।&lt;br/&gt;सेटअप जारी रखा जा सकता है, लेकिन कुछ विशेषताएँ निष्क्रिय कर दी जाएँगी।</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="70"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation>यह कंप्यूटर %1 इंस्टॉल करने हेतु सुझाई गई आवश्यकताओं को पूरा नहीं करता।&lt;br/&gt;इंस्टॉल जारी रखा जा सकता है, लेकिन कुछ विशेषताएँ निष्क्रिय कर दी जाएँगी।</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="80"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation>यह प्रोग्राम प्रश्नावली के माध्यम से आपके कंप्यूटर पर %2 को सेट करेगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="250"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 हेतु Calamares सेटअप में आपका स्वागत है&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="251"/>
        <source>&lt;h1&gt;Welcome to %1 setup&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 सेटअप में आपका स्वागत है&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="255"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 हेतु Calamares इंस्टॉलर में आपका स्वागत है&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="256"/>
        <source>&lt;h1&gt;Welcome to the %1 installer&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 इंस्टॉलर में आपका स्वागत है&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="94"/>
        <source>Summary</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="98"/>
        <source>This is an overview of what will happen once you start the setup procedure.</source>
        <translation>यह अवलोकन है कि सेटअप प्रक्रिया आरंभ उपरांत क्या होगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="103"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>यह अवलोकन है कि इंस्टॉल प्रक्रिया आरंभ उपरांत क्या होगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="217"/>
        <source>Your username is too long.</source>
        <translation>उपयोक्ता नाम बहुत लंबा है।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="223"/>
        <source>&apos;%1&apos; is not allowed as username.</source>
        <translation>उपयोक्ता नाम के रूप में &apos;%1&apos; का उपयोग अस्वीकार्य है।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="230"/>
        <source>Your username must start with a lowercase letter or underscore.</source>
        <translation>उपयोक्ता नाम का आरंभ केवल लोअरकेस अक्षर या अंडरस्कोर से ही करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="234"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation>केवल लोअरकेस अक्षर, अंक, अंडरस्कोर व हाइफ़न ही स्वीकार्य हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="279"/>
        <source>Your hostname is too short.</source>
        <translation>होस्ट नाम बहुत छोटा है।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="283"/>
        <source>Your hostname is too long.</source>
        <translation>होस्ट नाम बहुत लंबा है।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="289"/>
        <source>&apos;%1&apos; is not allowed as hostname.</source>
        <translation>होस्ट नाम के रूप में &apos;%1&apos; का उपयोग अस्वीकार्य है।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="295"/>
        <source>Only letters, numbers, underscore and hyphen are allowed.</source>
        <translation>केवल अक्षर, अंक, अंडरस्कोर(_) व हाइफ़न(-) ही स्वीकार्य हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="534"/>
        <source>Your passwords do not match!</source>
        <translation>आपके कूटशब्द मेल नहीं खाते!</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="548"/>
        <source>OK!</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="145"/>
        <source>Setup Failed</source>
        <translation>सेटअप विफल</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="145"/>
        <source>Installation Failed</source>
        <translation>इंस्टॉल विफल</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="147"/>
        <source>The setup of %1 did not complete successfully.</source>
        <translation>%1 का सेटअप सफलतापूर्वक पूर्ण नहीं हुआ।</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="148"/>
        <source>The installation of %1 did not complete successfully.</source>
        <translation>%1 का इंस्टॉल सफलतापूर्वक पूर्ण नहीं हुआ।</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="152"/>
        <source>Setup Complete</source>
        <translation>सेटअप पूर्ण</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="153"/>
        <source>Installation Complete</source>
        <translation>इंस्टॉल पूर्ण</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="154"/>
        <source>The setup of %1 is complete.</source>
        <translation>%1 का सेटअप पूर्ण हुआ।</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="155"/>
        <source>The installation of %1 is complete.</source>
        <translation>%1 का इंस्टॉल पूर्ण हुआ।</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="86"/>
        <source>Package Selection</source>
        <translation>पैकेज चयन</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="88"/>
        <source>Please pick a product from the list. The selected product will be installed.</source>
        <translation>सूची से वस्तु विशेष का चयन करें। चयनित वस्तु इंस्टॉल होगी।</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="177"/>
        <source>Install option: &lt;strong&gt;%1&lt;/strong&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="177"/>
        <source>None</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="18"/>
        <source>Create a Partition</source>
        <translation>एक विभाजन बनाएँ</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="52"/>
        <source> MiB</source>
        <translation>MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="59"/>
        <source>Partition &amp;Type:</source>
        <translation>विभाजन का प्रकार (&amp;T):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="71"/>
        <source>&amp;Primary</source>
        <translation>मुख्य (&amp;P)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="81"/>
        <source>E&amp;xtended</source>
        <translation>विस्तृत (&amp;x)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="123"/>
        <source>Fi&amp;le System:</source>
        <translation>फ़ाइल सिस्टम (&amp;l):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="155"/>
        <source>LVM LV name</source>
        <translation>LVM LV का नाम</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="192"/>
        <source>Flags:</source>
        <translation>फ्लैग :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="231"/>
        <source>Label for the filesystem</source>
        <translation>फाइल सिस्टम हेतु उपनाम</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="241"/>
        <source>FS Label:</source>
        <translation>फाइल सिस्टम उपनाम :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="165"/>
        <source>&amp;Mount Point:</source>
        <translation>माउंट पॉइंट (&amp;M):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="42"/>
        <source>Si&amp;ze:</source>
        <translation>आकार (&amp;z):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="65"/>
        <source>En&amp;crypt</source>
        <translation>एन्क्रिप्ट (&amp;c)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="191"/>
        <source>Logical</source>
        <translation>तार्किक</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="196"/>
        <source>Primary</source>
        <translation>मुख्य</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="215"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="301"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>माउंट पॉइंट पहले से उपयोग में है । कृपया दूसरा चुनें।</translation>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="113"/>
        <source>Create new %1MiB partition on %3 (%2) with entries %4.</source>
        <translation>%3 (%2) पर %4 प्रविष्टि युक्त %1 एमबी का नया विभाजन बनाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="121"/>
        <source>Create new %1MiB partition on %3 (%2).</source>
        <translation>%3 (%2) पर %1 एमबी का नया विभाजन बनाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="128"/>
        <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
        <translation>फ़ाइल सिस्टम %1 के साथ %4 (%3) पर नया %2MiB का विभाजन बनाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="145"/>
        <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2) with entries &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt; (%2) पर &lt;em&gt;%4&lt;/em&gt; प्रविष्टि युक्त &lt;strong&gt;%1 एमबी&lt;/strong&gt; का नया विभाजन बनाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="154"/>
        <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2).</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt; (%2) पर &lt;strong&gt;%1 एमबी&lt;/strong&gt; का नया विभाजन बनाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="161"/>
        <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>फ़ाइल सिस्टम &lt;strong&gt;%1&lt;/strong&gt; के साथ &lt;strong&gt;%4&lt;/strong&gt; (%3) पर नया &lt;strong&gt;%2MiB&lt;/strong&gt; का विभाजन बनाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="186"/>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="189"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>%2 पर नया %1 विभाजन बनाया जा रहा है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="201"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>इंस्टॉलर डिस्क &apos;%1&apos; पर विभाजन बनाने में विफल रहा।</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="24"/>
        <source>Create Partition Table</source>
        <translation>विभाजन तालिका बनाएँ</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="43"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>नई विभाजन तालिका बनाने से डिस्क पर मौजूद सारा डाटा हट जाएगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="69"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>आप किस तरह की विभाजन तालिका बनाना चाहते हैं?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="76"/>
        <source>Master Boot Record (MBR)</source>
        <translation>मास्टर बूट रिकॉर्ड (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="86"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>GUID विभाजन तालिका (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="39"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>%2 पर नई %1 विभाजन तालिका बनाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="47"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt; (%3) पर नई &lt;strong&gt;%1&lt;/strong&gt; विभाजन तालिका बनाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="57"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>%2 पर नई %1 विभाजन तालिका बनाई जा रही है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="67"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>इंस्टॉलर डिस्क &apos;%1&apos; पर विभाजन तालिका बनाने में विफल रहा।</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="36"/>
        <source>Create user %1</source>
        <translation>%1 उपयोक्ता बनाएँ</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="43"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt; उपयोक्ता बनाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="50"/>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="143"/>
        <source>Creating user %1</source>
        <translation>उपयोक्ता %1 बनाना जारी</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="126"/>
        <source>Preserving home directory</source>
        <translation>होम डायरेक्टरी अनुरक्षण</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="151"/>
        <source>Configuring user %1</source>
        <translation>उपयोक्ता %1 विन्यास जारी</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="159"/>
        <source>Setting file permissions</source>
        <translation>फाइल अनुमतियाँ सेट करना जारी</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="28"/>
        <source>Create Volume Group</source>
        <translation>वॉल्यूम समूह बनाएं</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="31"/>
        <source>Create new volume group named %1.</source>
        <translation>%1 नामक नया वॉल्यूम समूह बनाएं।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="37"/>
        <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt; नामक नया वॉल्यूम समूह बनाएं।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="43"/>
        <source>Creating new volume group named %1.</source>
        <translation>%1 नामक नया वॉल्यूम समूह बनाया जा रहा है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="55"/>
        <source>The installer failed to create a volume group named &apos;%1&apos;.</source>
        <translation>इंस्टालर &apos;%1&apos; नामक वॉल्यूम समूह को बनाने में विफल रहा।</translation>
    </message>
</context>
<context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="24"/>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="36"/>
        <source>Deactivate volume group named %1.</source>
        <translation>%1 नामक वॉल्यूम समूह को निष्क्रिय करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="30"/>
        <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt; नामक वॉल्यूम समूह को निष्क्रिय करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="48"/>
        <source>The installer failed to deactivate a volume group named %1.</source>
        <translation>इंस्टॉलर %1 नामक वॉल्यूम समूह को निष्क्रिय करने में विफल रहा।</translation>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="31"/>
        <source>Delete partition %1.</source>
        <translation>विभाजन %1 हटाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="38"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>विभाजन &lt;strong&gt;%1&lt;/strong&gt; हटाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="45"/>
        <source>Deleting partition %1.</source>
        <translation>%1 विभाजन हटाया जा रहा है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="56"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>इंस्टॉलर विभाजन %1 को हटाने में विफल रहा ।</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="140"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>चयनित डिवाइस पर &lt;strong&gt;विभाजन तालिका&lt;/strong&gt; का प्रकार।&lt;br&gt;&lt;br&gt;विभाजन तालिका का प्रकार केवल विभाजन तालिका को हटा दुबारा बनाकर ही किया जा सकता है, इससे डिस्क पर मौजूद सभी डाटा नहीं नष्ट हो जाएगा।&lt;br&gt;अगर आप कुछ अलग नहीं चुनते तो यह इंस्टॉलर वर्तमान विभाजन तालिका उपयोग करेगा।&lt;br&gt;अगर सुनिश्चित नहीं है तो नए व आधुनिक सिस्टम के लिए GPT चुनें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="97"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>इस डिवाइस में &lt;strong&gt;%1&lt;/strong&gt; विभाजन तालिका है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="104"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>यह एक &lt;strong&gt;लूप&lt;/strong&gt; डिवाइस है।&lt;br&gt;&lt;br&gt;इस छद्म-डिवाइस में कोई विभाजन तालिका नहीं है जो फ़ाइल को ब्लॉक डिवाइस के रूप में उपयोग कर सकें। इस तरह के सेटअप में केवल एक फ़ाइल सिस्टम होता है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="111"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>इंस्टॉलर को चयनित डिवाइस पर &lt;strong&gt;कोई विभाजन तालिका नहीं मिली&lt;/strong&gt;।&lt;br&gt;&lt;br&gt; डिवाइस पर विभाजन तालिका नहीं है या फिर जो है वो ख़राब है या उसका प्रकार अज्ञात है। &lt;br&gt;इंस्टॉलर एक नई विभाजन तालिका, स्वतः व मैनुअल दोनों तरह से बना सकता है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="121"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;&lt;strong&gt;EFI&lt;/strong&gt;वातावरण से शुरू होने वाले आधुनिक सिस्टम के लिए यही विभाजन तालिका सुझाई जाती है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="127"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;यह विभाजन तालिका केवल &lt;strong&gt;BIOS&lt;/strong&gt;वातावरण से शुरू होने वाले पुराने सिस्टम के लिए ही सुझाई जाती है। बाकी सब के लिए GPT ही सबसे उपयुक्त है।&lt;br&gt;&lt;br&gt;&lt;strong&gt;चेतावनी:&lt;/strong&gt; MBR विभाजन तालिका MS-DOS के समय की एक पुरानी तकनीक है।&lt;br&gt; इसमें केवल 4 &lt;em&gt;मुख्य&lt;/em&gt; विभाजन बनाये जा सकते हैं, इनमें से एक &lt;em&gt;विस्तृत&lt;/em&gt; हो सकता है व इसके अंदर भी कई &lt;em&gt;तार्किक&lt;/em&gt; विभाजन हो सकते हैं।</translation>
    </message>
</context>
<context>
    <name>DeviceModel</name>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="84"/>
        <source>%1 - %2 (%3)</source>
        <extracomment>device[name] - size[number] (device-node[name])</extracomment>
        <translation>%1 - %2 (%3)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="95"/>
        <source>%1 - (%2)</source>
        <extracomment>device[name] - (device-node[name])</extracomment>
        <translation>%1 - (%2)</translation>
    </message>
</context>
<context>
    <name>EditExistingPartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="24"/>
        <source>Edit Existing Partition</source>
        <translation>मौजूदा विभाजन को संपादित करें</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="54"/>
        <source>Content:</source>
        <translation>सामग्री :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="64"/>
        <source>&amp;Keep</source>
        <translation>रखें (&amp;K)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="74"/>
        <source>Format</source>
        <translation>फॉर्मेट करें</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="93"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>चेतावनी: विभाजन फॉर्मेट करने से सारा मौजूदा डाटा मिट जायेगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="103"/>
        <source>&amp;Mount Point:</source>
        <translation>माउंट पॉइंट (&amp;M):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="123"/>
        <source>Si&amp;ze:</source>
        <translation>आकार (&amp;z):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="133"/>
        <source> MiB</source>
        <translation>MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="140"/>
        <source>Fi&amp;le System:</source>
        <translation>फ़ाइल सिस्टम (&amp;l):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="153"/>
        <source>Flags:</source>
        <translation>फ्लैग :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="186"/>
        <source>Label for the filesystem</source>
        <translation>फाइल सिस्टम हेतु उपनाम</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="196"/>
        <source>FS Label:</source>
        <translation>फाइल सिस्टम उपनाम :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="291"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>माउंट पॉइंट पहले से उपयोग में है । कृपया दूसरा चुनें।</translation>
    </message>
</context>
<context>
    <name>EncryptWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="18"/>
        <source>Form</source>
        <translation>रूप</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="36"/>
        <source>En&amp;crypt system</source>
        <translation>सिस्टम एन्क्रिप्ट करें (&amp;E)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="46"/>
        <source>Passphrase</source>
        <translation>कूटशब्द</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="56"/>
        <source>Confirm passphrase</source>
        <translation>कूटशब्द की पुष्टि करें</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="104"/>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="114"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>कृपया दोनों स्थानों में समान कूटशब्द दर्ज करें।</translation>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="167"/>
        <source>Set partition information</source>
        <translation>विभाजन संबंधी जानकारी सेट करें</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="196"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition with features &lt;em&gt;%3&lt;/em&gt;</source>
        <translation>&lt;strong&gt;नवीन&lt;/strong&gt; सिस्टम विभाजन %2 पर %1 को &lt;em&gt;%3&lt;/em&gt; विशेषताओं सहित इंस्टॉल करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="204"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>&lt;strong&gt;नए&lt;/strong&gt; %2 सिस्टम विभाजन पर %1 इंस्टॉल करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="213"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt; and features &lt;em&gt;%3&lt;/em&gt;.</source>
        <translation>&lt;strong&gt;नवीन&lt;/strong&gt; %2 विभाजन को माउंट पॉइंट &lt;strong&gt;%1&lt;/strong&gt; व &lt;em&gt;%3&lt;/em&gt;विशेषताओं सहित सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="221"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;%3.</source>
        <translation>&lt;strong&gt;नवीन&lt;/strong&gt; %2 विभाजन को माउंट पॉइंट &lt;strong&gt;%1&lt;/strong&gt;%3 सहित सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="235"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt; with features &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation>%3 सिस्टम विभाजन &lt;strong&gt;%1&lt;/strong&gt; %2 को &lt;em&gt;%4&lt;/em&gt; विशेषताओं सहित इंस्टॉल करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="254"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt; and features &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation>%3 विभाजन &lt;strong&gt;%1&lt;/strong&gt; को माउंट पॉइंट &lt;strong&gt;%2&lt;/strong&gt; व &lt;em&gt;%4&lt;/em&gt;विशेषताओं सहित सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="263"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;%4.</source>
        <translation>%3 विभाजन &lt;strong&gt;%1&lt;/strong&gt; माउंट पॉइंट &lt;strong&gt;%2&lt;/strong&gt;%4 सहित सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="244"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>%3 सिस्टम विभाजन &lt;strong&gt;%1&lt;/strong&gt; पर %2 इंस्टॉल करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="278"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>बूट लोडर &lt;strong&gt;%1&lt;/strong&gt; पर इंस्टॉल करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="287"/>
        <source>Setting up mount points.</source>
        <translation>माउंट पॉइंट सेट किए जा रहे हैं।</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="18"/>
        <source>Form</source>
        <translation>रूप</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="102"/>
        <source>&amp;Restart now</source>
        <translation>अभी पुनः आरंभ करें (&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="72"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
        <translation>&lt;h1&gt;सब हो गया।&lt;/h1&gt;&lt;br/&gt;आपके कंप्यूटर पर %1 को सेटअप कर दिया गया है।&lt;br/&gt;अब आप अपने नए सिस्टम का उपयोग कर सकते है।</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="76"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;यह विकल्प चयनित होने पर आपका सिस्टम तुरंत पुनः आरंभ हो जाएगा जब आप &lt;span style=&quot;font-style:italic;&quot;&gt;हो गया&lt;/span&gt;पर क्लिक करेंगे या सेटअप प्रोग्राम को बंद करेंगे।&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="84"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;सब हो गया।&lt;/h1&gt;&lt;br/&gt;आपके कंप्यूटर पर %1 इंस्टॉल हो चुका है।&lt;br/&gt;अब आप आपने नए सिस्टम को पुनः आरंभ कर सकते है, या फिर %2 लाइव वातावरण उपयोग करना जारी रखें।</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="89"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;यह विकल्प चयनित होने पर आपका सिस्टम तुरंत पुनः आरंभ हो जाएगा जब आप &lt;span style=&quot;font-style:italic;&quot;&gt;हो गया&lt;/span&gt;पर क्लिक करेंगे या इंस्टॉलर बंद करेंगे।&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="102"/>
        <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;सेटअप विफल रहा&lt;/h1&gt;&lt;br/&gt;%1 आपके कंप्यूटर पर सेटअप नहीं हुआ।&lt;br/&gt;त्रुटि संदेश : %2।</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="110"/>
        <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;इंस्टॉल विफल रहा&lt;/h1&gt;&lt;br/&gt;%1 आपके कंप्यूटर पर इंस्टॉल नहीं हुआ।&lt;br/&gt;त्रुटि संदेश : %2।</translation>
    </message>
</context>
<context>
    <name>FinishedQmlViewStep</name>
    <message>
        <location filename="../src/modules/finishedq/FinishedQmlViewStep.cpp" line="35"/>
        <source>Finish</source>
        <translation>समाप्त</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="46"/>
        <source>Finish</source>
        <translation>समाप्त करें</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="36"/>
        <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
        <translation>विभाजन %1 (फ़ाइल सिस्टम: %2, आकार: %3 MiB) को %4 पर फॉर्मेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="47"/>
        <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>फ़ाइल सिस्टम &lt;strong&gt;%2&lt;/strong&gt; के साथ &lt;strong&gt;%3MiB&lt;/strong&gt; के विभाजन &lt;strong&gt;%1&lt;/strong&gt; को फॉर्मेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="58"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>फ़ाइल सिस्टम %2 के साथ विभाजन %1 को फॉर्मेट किया जा रहा है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="72"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>इंस्टॉलर डिस्क &apos;%2&apos; पर विभाजन %1 को फॉर्मेट करने में विफल रहा।</translation>
    </message>
</context>
<context>
    <name>GeneralRequirements</name>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="155"/>
        <source>has at least %1 GiB available drive space</source>
        <translation>कम-से-कम %1 GiB स्पेस ड्राइव पर उपलब्ध हो</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="157"/>
        <source>There is not enough drive space. At least %1 GiB is required.</source>
        <translation>ड्राइव में पर्याप्त स्पेस नहीं है। कम-से-कम %1 GiB होना आवश्यक है।</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="166"/>
        <source>has at least %1 GiB working memory</source>
        <translation>कम-से-कम %1 GiB मेमोरी उपलब्ध हो</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="168"/>
        <source>The system does not have enough working memory. At least %1 GiB is required.</source>
        <translation>सिस्टम में पर्याप्त मेमोरी नहीं है। कम-से-कम %1 GiB होनी आवश्यक है।</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="177"/>
        <source>is plugged in to a power source</source>
        <translation>पॉवर के स्रोत से कनेक्ट है</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="178"/>
        <source>The system is not plugged in to a power source.</source>
        <translation>सिस्टम पॉवर के स्रोत से कनेक्ट नहीं है।</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="185"/>
        <source>is connected to the Internet</source>
        <translation>इंटरनेट से कनेक्ट है</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="186"/>
        <source>The system is not connected to the Internet.</source>
        <translation>सिस्टम इंटरनेट से कनेक्ट नहीं है।</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="193"/>
        <source>is running the installer as an administrator (root)</source>
        <translation>इंस्टॉलर को प्रबंधक(रुट) के अंतर्गत चला रहा है</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="196"/>
        <source>The setup program is not running with administrator rights.</source>
        <translation>सेटअप प्रोग्राम के पास प्रबंधक अधिकार नहीं है।</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="197"/>
        <source>The installer is not running with administrator rights.</source>
        <translation>इंस्टॉलर के पास प्रबंधक अधिकार नहीं है।</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="205"/>
        <source>has a screen large enough to show the whole installer</source>
        <translation>स्क्रीन का माप इंस्टॉलर को पूर्णतया प्रदर्शित करने में सक्षम हो</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="208"/>
        <source>The screen is too small to display the setup program.</source>
        <translation>सेटअप प्रोग्राम प्रदर्शित करने हेतु स्क्रीन काफ़ी छोटी है।</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="209"/>
        <source>The screen is too small to display the installer.</source>
        <translation>इंस्टॉलर प्रदर्शित करने हेतु स्क्रीन काफ़ी छोटी है।</translation>
    </message>
</context>
<context>
    <name>IDJob</name>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="30"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="39"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="52"/>
        <location filename="../src/modules/oemid/IDJob.cpp" line="59"/>
        <source>OEM Batch Identifier</source>
        <translation>OEM (मूल उपकरण निर्माता) बैच पहचानकर्ता</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="40"/>
        <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>&lt;code&gt;%1&lt;/code&gt; डायरेक्टरी बनाई नहीं जा सकीं।</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="53"/>
        <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>&lt;code&gt;%1&lt;/code&gt; फाइल खोली नहीं जा सकीं।</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
        <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>&lt;code&gt;%1&lt;/code&gt; फाइल पर राइट नहीं किया जा सका।</translation>
    </message>
</context>
<context>
    <name>InitcpioJob</name>
    <message>
        <location filename="../src/modules/initcpio/InitcpioJob.cpp" line="31"/>
        <source>Creating initramfs with mkinitcpio.</source>
        <translation>mkinitcpio के साथ initramfs बनाना।</translation>
    </message>
</context>
<context>
    <name>KeyboardQmlViewStep</name>
    <message>
        <location filename="../src/modules/keyboardq/KeyboardQmlViewStep.cpp" line="32"/>
        <source>Keyboard</source>
        <translation>कुंजीपटल</translation>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="42"/>
        <source>Keyboard</source>
        <translation>कुंजीपटल</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="23"/>
        <source>System locale setting</source>
        <translation>सिस्टम स्थानिकी सेटिंग्स</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="30"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>सिस्टम स्थानिकी सेटिंग कमांड लाइन के कुछ उपयोक्ता अंतरफलक तत्वों की भाषा व अक्षर सेट पर असर डालती है।&lt;br/&gt;मौजूदा सेटिंग है &lt;strong&gt;%1&lt;/strong&gt;।</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="54"/>
        <source>&amp;Cancel</source>
        <translation>रद्द करें (&amp;C)</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="55"/>
        <source>&amp;OK</source>
        <translation>ठीक है (&amp;O)</translation>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="18"/>
        <source>Form</source>
        <translation>रूप</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="26"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;लाइसेंस अनुबंध&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="135"/>
        <source>I accept the terms and conditions above.</source>
        <translation>मैं उपरोक्त नियम व शर्तें स्वीकार करता हूँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="137"/>
        <source>Please review the End User License Agreements (EULAs).</source>
        <translation>कृपया लक्षित उपयोक्ता लाइसेंस अनुबंधों (EULAs) की समीक्षा करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="142"/>
        <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation>यह सेटअप प्रक्रिया लाइसेंस शर्तों के अधीन अमुक्त सॉफ्टवेयर को इंस्टॉल करेगी।</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="145"/>
        <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation>यदि आप शर्तों से असहमत है, तो सेटअप प्रक्रिया जारी नहीं रखी जा सकती।</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="150"/>
        <source>In case non-free was selected, this installer will install proprietary packages &lt;br/&gt;that have additional End User License Agreements (EULAs) attached to them.</source>
        <translation>अगर आप अमुक्त का चयन करते हैं, तो इंस्टॉलर अमुक्त पैकेज इंस्टॉल करेगा &lt;br/&gt; जिनके साथ अतिरिक्त लक्षित उपयोक्ता लाइसेंस अनुबंध (EULAs) संलग्न होते हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="153"/>
        <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation>यदि आप शर्तों से असहमत है, तो अमुक्त सॉफ्टवेयर इंस्टाल नहीं किया जाएगा व उनके मुक्त विकल्प उपयोग किए जाएँगे।</translation>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="43"/>
        <source>License</source>
        <translation>लाइसेंस</translation>
    </message>
</context>
<context>
    <name>LicenseWidget</name>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="88"/>
        <source>URL: %1</source>
        <translation>यूआरएल : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="109"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation>&lt;strong&gt;%1 ड्राइवर&lt;/strong&gt;&lt;br/&gt;%2 द्वारा</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="116"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation>&lt;strong&gt;%1 ग्राफ़िक्स ड्राइवर&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;%2 द्वारा&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="122"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 ब्राउज़र प्लगिन&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;%2 द्वारा&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="128"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 कोडेक&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;%2 द्वारा&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="134"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 पैकेज&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;%2 द्वारा&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="140"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;%2 द्वारा&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="163"/>
        <source>File: %1</source>
        <translation>फ़ाइल : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
        <source>Hide license text</source>
        <translation>लाइसेंस लेख छिपाएँ</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
        <source>Show the license text</source>
        <translation>लाइसेंस लेख दिखाएँ</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="190"/>
        <source>Open license agreement in browser.</source>
        <translation>लाइसेंस अनुबंध को ब्राउज़र में खोलें।</translation>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="130"/>
        <source>Region:</source>
        <translation>क्षेत्र :</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="131"/>
        <source>Zone:</source>
        <translation>ज़ोन :</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="132"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="133"/>
        <source>&amp;Change...</source>
        <translation>बदलें (&amp;C)...</translation>
    </message>
</context>
<context>
    <name>LocaleQmlViewStep</name>
    <message>
        <location filename="../src/modules/localeq/LocaleQmlViewStep.cpp" line="32"/>
        <source>Location</source>
        <translation>स्थान</translation>
    </message>
</context>
<context>
    <name>LocaleTests</name>
    <message>
        <location filename="../src/libcalamares/locale/Tests.cpp" line="273"/>
        <source>Quit</source>
        <translation>बंद करें</translation>
    </message>
</context>
<context>
    <name>LocaleViewStep</name>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="76"/>
        <source>Location</source>
        <translation>स्थान</translation>
    </message>
</context>
<context>
    <name>LuksBootKeyFileJob</name>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="30"/>
        <source>Configuring LUKS key file.</source>
        <translation>LUKS कुंजी फ़ाइल विन्यस्त करना।</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="186"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="194"/>
        <source>No partitions are defined.</source>
        <translation>कोई विभाजन परिभाषित नहीं है।</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="229"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="236"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="244"/>
        <source>Encrypted rootfs setup error</source>
        <translation>एन्क्रिप्टेड रुट फ़ाइल सिस्टम सेटअप करने में त्रुटि</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="230"/>
        <source>Root partition %1 is LUKS but no passphrase has been set.</source>
        <translation>रुट विभाजन %1, LUKS है परंतु कोई कूटशब्द सेट नहीं है।</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="237"/>
        <source>Could not create LUKS key file for root partition %1.</source>
        <translation>रुट विभाजन %1 हेतु LUKS कुंजी फ़ाइल बनाई नहीं जा सकी।</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="245"/>
        <source>Could not configure LUKS key file on partition %1.</source>
        <translation>विभाजन %1 हेतु LUKS कुंजी फ़ाइल विन्यस्त नहीं हो सकी।</translation>
    </message>
</context>
<context>
    <name>MachineIdJob</name>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="37"/>
        <source>Generate machine-id.</source>
        <translation>मशीन-आईडी उत्पन्न करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="53"/>
        <source>Configuration Error</source>
        <translation>विन्यास त्रुटि</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="54"/>
        <source>No root mount point is set for MachineId.</source>
        <translation>मशीन-आईडी हेतु कोई रुट माउंट पॉइंट सेट नहीं है।</translation>
    </message>
</context>
<context>
    <name>Map</name>
    <message>
        <location filename="../src/modules/localeq/Map.qml" line="44"/>
        <location filename="../src/modules/localeq/Map.qml" line="68"/>
        <source>Timezone: </source>
        <translation>समयक्षेत्र :</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Map.qml" line="232"/>
        <source>Please select your preferred location on the map so the installer can suggest the locale
            and timezone settings for you. You can fine-tune the suggested settings below. Search the map by dragging
            to move and using the +/- buttons to zoom in/out or use mouse scrolling for zooming.</source>
        <translation>कृपया मानचित्र पर अपना भौगोलिक स्थान चुनें ताकि इंस्टॉलर स्थानिकी
          व समयक्षेत्र सेटिंग्स संबंधी सुझाव दे सके। माउस क्लिक द्वारा ड्रैग कर मानचित्र में खोजें
          व नक़्शे का आकार परिवर्तन +/- बटन या माउस स्क्रॉल द्वारा करें।</translation>
    </message>
</context>
<context>
    <name>NotesQmlViewStep</name>
    <message>
        <location filename="../src/modules/notesqml/NotesQmlViewStep.cpp" line="23"/>
        <source>Notes</source>
        <translation>नोट्स</translation>
    </message>
</context>
<context>
    <name>OEMPage</name>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="32"/>
        <source>Ba&amp;tch:</source>
        <translation>बैच (&amp;t) :</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="42"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;यहां एक बैच-पहचानकर्ता दर्ज करें। इसे लक्षित सिस्टम में संचित किया जाएगा।&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="52"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM (मूल उपकरण निर्माता) विन्यास सेटिंग्स&lt;/h1&gt;&lt;p&gt;लक्षित सिस्टम को विन्यस्त करते समय Calamares OEM (मूल उपकरण निर्माता) सेटिंग्स का उपयोग करेगा।&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>OEMViewStep</name>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="122"/>
        <source>OEM Configuration</source>
        <translation>OEM (मूल उपकरण निर्माता) विन्यास सेटिंग्स</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="128"/>
        <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>OEM (मूल उपकरण निर्माता) बैच पहचानकर्ता को &lt;code&gt;%1&lt;/code&gt;पर सेट करें।</translation>
    </message>
</context>
<context>
    <name>Offline</name>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="41"/>
        <source>Select your preferred Region, or use the default settings.</source>
        <translation>इच्छित क्षेत्र चुनें या फिर डिफ़ॉल्ट सेटिंग्स उपयोग करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="98"/>
        <location filename="../src/modules/localeq/Offline.qml" line="173"/>
        <location filename="../src/modules/localeq/Offline.qml" line="217"/>
        <source>Timezone: %1</source>
        <translation>समय क्षेत्र : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="115"/>
        <source>Select your preferred Zone within your Region.</source>
        <translation>इच्छित क्षेत्र में भूभाग चुनें।</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="186"/>
        <source>Zones</source>
        <translation>भूभाग</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="233"/>
        <source>You can fine-tune Language and Locale settings below.</source>
        <translation>भाषा व स्थानिकी हेतु निम्नलिखित सेटिंग्स उपयोग करें।</translation>
    </message>
</context>
<context>
    <name>Offline2</name>
    <message>
        <location filename="../src/modules/localeq/Offline2.qml" line="54"/>
        <source>Timezone: %1</source>
        <translation>समयक्षेत्र : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline2.qml" line="69"/>
        <source>Select a timezone. You can fine-tune Language and Locale settings below.</source>
        <translation>समयक्षेत्र चुनें। भाषा व स्थानिकी हेतु निम्नलिखित सेटिंग्स उपयोग करें।</translation>
    </message>
</context>
<context>
    <name>Offline3</name>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="51"/>
        <source>Select your preferred Region, or use the default one based on your current location.</source>
        <translation>इच्छित क्षेत्र चुनें या फिर वर्तमान स्थान अनुरूप डिफ़ॉल्ट क्षेत्र उपयोग करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="111"/>
        <location filename="../src/modules/localeq/Offline3.qml" line="188"/>
        <location filename="../src/modules/localeq/Offline3.qml" line="234"/>
        <source>Timezone: %1</source>
        <translation>समयक्षेत्र : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="128"/>
        <source>Select your preferred Zone within your Region.</source>
        <translation>इच्छित क्षेत्र में भूभाग चुनें।</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="202"/>
        <source>Zones</source>
        <translation>भूभाग</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="250"/>
        <source>You can fine-tune Language and Locale settings below.</source>
        <translation>भाषा व स्थानिकी हेतु निम्नलिखित सेटिंग्स उपयोग करें।</translation>
    </message>
</context>
<context>
    <name>Offline_orig</name>
    <message>
        <location filename="../src/modules/localeq/Offline_orig.qml" line="64"/>
        <source>Timezone: %1</source>
        <translation>समयक्षेत्र : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline_orig.qml" line="81"/>
        <source>To be able to select a timezone, make sure you are connected to the internet. Restart the installer after connecting. You can fine-tune Language and Locale settings below.</source>
        <translation>समयक्षेत्र चयन करने हेतु सुनिश्चित करें कि आप इंटरनेट से कनेक्ट हैं। कनेक्ट होने के बाद इंस्टॉलर को पुनः आरंभ करें। फिर आप नीचे दी गयी भाषा व स्थानिकी सेटिंग्स कर सकते हैं।</translation>
    </message>
</context>
<context>
    <name>PWQ</name>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="51"/>
        <source>Password is too short</source>
        <translation>कूटशब्द बहुत छोटा है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="67"/>
        <source>Password is too long</source>
        <translation>कूटशब्द बहुत लंबा है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="188"/>
        <source>Password is too weak</source>
        <translation>कूटशब्द बहुत कमज़ोर है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="196"/>
        <source>Memory allocation error when setting &apos;%1&apos;</source>
        <translation>&apos;%1&apos; सेट करते समय मेमोरी आवंटन त्रुटि</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="199"/>
        <source>Memory allocation error</source>
        <translation>मेमोरी आवंटन त्रुटि</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="201"/>
        <source>The password is the same as the old one</source>
        <translation>यह कूटशब्द पुराने वाला ही है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="203"/>
        <source>The password is a palindrome</source>
        <translation>कूटशब्द एक विलोमपद है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="205"/>
        <source>The password differs with case changes only</source>
        <translation>इसमें और पिछले कूटशब्द में केवल lower/upper case का फर्क है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="207"/>
        <source>The password is too similar to the old one</source>
        <translation>यह कूटशब्द पुराने वाले जैसा ही है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="209"/>
        <source>The password contains the user name in some form</source>
        <translation>इस कूटशब्द में किसी रूप में उपयोक्ता नाम है </translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="211"/>
        <source>The password contains words from the real name of the user in some form</source>
        <translation>इस कूटशब्द में किसी रूप में उपयोक्ता के असली नाम के शब्द शामिल है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="214"/>
        <source>The password contains forbidden words in some form</source>
        <translation>इस कूटशब्द में किसी रूप में वर्जित शब्द है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="221"/>
        <source>The password contains too few digits</source>
        <translation>इस कूटशब्द में काफ़ी कम अंक हैं</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="228"/>
        <source>The password contains too few uppercase letters</source>
        <translation>इस कूटशब्द में काफ़ी कम uppercase अक्षर हैं</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="235"/>
        <source>The password contains too few lowercase letters</source>
        <translation>इस कूटशब्द में काफ़ी कम lowercase अक्षर हैं</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="242"/>
        <source>The password contains too few non-alphanumeric characters</source>
        <translation>इस कूटशब्द में काफ़ी कम अक्षरांक हैं</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="249"/>
        <source>The password is too short</source>
        <translation>कूटशब्द बहुत छोटा है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="258"/>
        <source>The password does not contain enough character classes</source>
        <translation>इस कूटशब्द में नाकाफ़ी अक्षर classes हैं</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="265"/>
        <source>The password contains too many same characters consecutively</source>
        <translation>कूटशब्द में काफ़ी ज्यादा समान अक्षर लगातार हैं</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="275"/>
        <source>The password contains too many characters of the same class consecutively</source>
        <translation>कूटशब्द में काफ़ी ज्यादा एक ही class के अक्षर लगातार हैं</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="218"/>
        <source>The password contains fewer than %n digits</source>
        <translation><numerusform>कूटशब्द में %n से कम अंक हैं</numerusform><numerusform>कूटशब्द में %n से कम अंक हैं</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="225"/>
        <source>The password contains fewer than %n uppercase letters</source>
        <translation><numerusform>कूटशब्द में %n से कम अपरकेस अक्षर हैं</numerusform><numerusform>कूटशब्द में %n से कम अपरकेस अक्षर हैं</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="232"/>
        <source>The password contains fewer than %n lowercase letters</source>
        <translation><numerusform>कूटशब्द में %n से कम लोअरकेस अक्षर हैं</numerusform><numerusform>कूटशब्द में %n से कम लोअरकेस अक्षर हैं</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="239"/>
        <source>The password contains fewer than %n non-alphanumeric characters</source>
        <translation><numerusform>कूटशब्द में %n से कम ऐसे अक्षर हैं जो अक्षरांक नहीं हैं</numerusform><numerusform>कूटशब्द में %n से कम ऐसे अक्षर हैं जो अक्षरांक नहीं हैं</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="246"/>
        <source>The password is shorter than %n characters</source>
        <translation><numerusform>कूटशब्द %n अक्षरों से लघु है</numerusform><numerusform>कूटशब्द %n अक्षरों से लघु है</numerusform></translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="251"/>
        <source>The password is a rotated version of the previous one</source>
        <translation>यह पूर्व कूटशब्द का क्रम विपरीत कर निर्मित है</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="255"/>
        <source>The password contains fewer than %n character classes</source>
        <translation><numerusform>कूटशब्द में %n से कम अक्षर वर्ग हैं</numerusform><numerusform>कूटशब्द में %n से कम अक्षर वर्ग हैं</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="262"/>
        <source>The password contains more than %n same characters consecutively</source>
        <translation><numerusform>कूटशब्द में %n से अधिक समान अक्षर निरंतर प्रयुक्त हैं</numerusform><numerusform>कूटशब्द में %n से अधिक समान अक्षर निरंतर प्रयुक्त हैं</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="269"/>
        <source>The password contains more than %n characters of the same class consecutively</source>
        <translation><numerusform>कूटशब्द में %n से अधिक समान अक्षर वर्ग निरंतर प्रयुक्त हैं</numerusform><numerusform>कूटशब्द में %n से अधिक समान अक्षर वर्ग निरंतर प्रयुक्त हैं</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="280"/>
        <source>The password contains monotonic sequence longer than %n characters</source>
        <translation><numerusform>कूटशब्द में %n अक्षरों से दीर्घ समरूपी श्रृंखला है</numerusform><numerusform>कूटशब्द में %n अक्षरों से दीर्घ समरूपी श्रृंखला है</numerusform></translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="286"/>
        <source>The password contains too long of a monotonic character sequence</source>
        <translation>कूटशब्द में काफ़ी बड़ा monotonic अनुक्रम है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="289"/>
        <source>No password supplied</source>
        <translation>कोई कूटशब्द नहीं दिया गया</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="291"/>
        <source>Cannot obtain random numbers from the RNG device</source>
        <translation>RNG डिवाइस से यादृच्छिक अंक नहीं मिल सके</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="293"/>
        <source>Password generation failed - required entropy too low for settings</source>
        <translation>कूटशब्द बनाना विफल रहा - सेटिंग्स के लिए आवश्यक entropy बहुत कम है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="298"/>
        <source>The password fails the dictionary check - %1</source>
        <translation>कूटशब्द शब्दकोश की जाँच में विफल रहा - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="301"/>
        <source>The password fails the dictionary check</source>
        <translation>कूटशब्द शब्दकोश की जाँच में विफल रहा</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="305"/>
        <source>Unknown setting - %1</source>
        <translation>अज्ञात सेटिंग- %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="307"/>
        <source>Unknown setting</source>
        <translation>अज्ञात सेटिंग</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="311"/>
        <source>Bad integer value of setting - %1</source>
        <translation>सेटिंग का गलत पूर्णांक मान - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="313"/>
        <source>Bad integer value</source>
        <translation>गलत पूर्णांक मान</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="317"/>
        <source>Setting %1 is not of integer type</source>
        <translation>सेटिंग %1 पूर्णांक नहीं है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="319"/>
        <source>Setting is not of integer type</source>
        <translation>सेटिंग पूर्णांक नहीं है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="323"/>
        <source>Setting %1 is not of string type</source>
        <translation>सेटिंग %1 स्ट्रिंग नहीं है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="325"/>
        <source>Setting is not of string type</source>
        <translation>सेटिंग स्ट्रिंग नहीं है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="327"/>
        <source>Opening the configuration file failed</source>
        <translation>विन्यास फ़ाइल खोलने में विफल</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="329"/>
        <source>The configuration file is malformed</source>
        <translation>विन्यास फाइल ख़राब है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="331"/>
        <source>Fatal failure</source>
        <translation>गंभीर विफलता</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="333"/>
        <source>Unknown error</source>
        <translation>अज्ञात त्रुटि</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="782"/>
        <source>Password is empty</source>
        <translation>कूटशब्द रिक्त है</translation>
    </message>
</context>
<context>
    <name>PackageChooserPage</name>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="24"/>
        <source>Form</source>
        <translation>रूप</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="44"/>
        <source>Product Name</source>
        <translation>वस्तु का नाम</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="57"/>
        <source>TextLabel</source>
        <translation>TextLabel</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="73"/>
        <source>Long Product Description</source>
        <translation>वस्तु का विस्तृत विवरण</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="25"/>
        <source>Package Selection</source>
        <translation>पैकेज चयन</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="26"/>
        <source>Please pick a product from the list. The selected product will be installed.</source>
        <translation>सूची से वस्तु विशेष का चयन करें। चयनित वस्तु इंस्टॉल होगी।</translation>
    </message>
</context>
<context>
    <name>PackageChooserQmlViewStep</name>
    <message>
        <location filename="../src/modules/packagechooserq/PackageChooserQmlViewStep.cpp" line="32"/>
        <source>Packages</source>
        <translation>पैकेज</translation>
    </message>
</context>
<context>
    <name>PackageChooserViewStep</name>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserViewStep.cpp" line="51"/>
        <source>Packages</source>
        <translation>पैकेज</translation>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="18"/>
        <source>Form</source>
        <translation>रूप</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="74"/>
        <source>Keyboard Model:</source>
        <translation>कुंजीपटल मॉडल :</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="135"/>
        <source>Type here to test your keyboard</source>
        <translation>अपना कुंजीपटल जाँचने के लिए यहां टाइप करें</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="18"/>
        <source>Form</source>
        <translation>रूप</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="40"/>
        <source>What is your name?</source>
        <translation>आपका नाम क्या है?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="124"/>
        <source>What name do you want to use to log in?</source>
        <translation>लॉग इन के लिए आप किस नाम का उपयोग करना चाहते हैं?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="325"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>अपना अकाउंट सुरक्षित रखने के लिए पासवर्ड चुनें ।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="349"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="374"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;एक ही कूटशब्द दो बार दर्ज़ करें, ताकि उसे टाइप त्रुटि के लिए जांचा जा सके । एक अच्छे कूटशब्द में अक्षर, अंक व विराम चिन्हों का मेल होता है, उसमें कम-से-कम आठ अक्षर होने चाहिए, और उसे नियमित अंतराल पर बदलते रहना चाहिए।&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="223"/>
        <source>What is the name of this computer?</source>
        <translation>इस कंप्यूटर का नाम ?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="55"/>
        <source>Your Full Name</source>
        <translation>आपका पूरा नाम</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="148"/>
        <source>login</source>
        <translation>लॉगिन</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="247"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;यदि आपका कंप्यूटर किसी नेटवर्क पर दृश्यमान होता है, तो यह नाम उपयोग किया जाएगा।&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="250"/>
        <source>Computer Name</source>
        <translation>कंप्यूटर का नाम</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="355"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="525"/>
        <source>Password</source>
        <translation>कूटशब्द</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="380"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="550"/>
        <source>Repeat Password</source>
        <translation>कूटशब्द पुनः दर्ज करें</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="455"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation>यह बॉक्स टिक करने के परिणाम स्वरुप कूटशब्द-क्षमता की जाँच होगी व आप कमज़ोर कूटशब्द उपयोग नहीं कर पाएंगे।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="458"/>
        <source>Require strong passwords.</source>
        <translation>मज़बूत कूटशब्द आवश्यक हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="465"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>कूटशब्द बिना पूछे ही स्वतः लॉग इन करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="472"/>
        <source>Use the same password for the administrator account.</source>
        <translation>प्रबंधक अकाउंट के लिए भी यही कूटशब्द उपयोग करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="495"/>
        <source>Choose a password for the administrator account.</source>
        <translation>प्रबंधक अकाउंट के लिए कूटशब्द चुनें।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="519"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="544"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;समान कूटशब्द दो बार दर्ज करें, ताकि जाँच की जा सके कि कहीं टाइपिंग त्रुटि तो नहीं है।&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="190"/>
        <source>Root</source>
        <translation>रुट</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="194"/>
        <source>Home</source>
        <translation>होम</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="198"/>
        <source>Boot</source>
        <translation>बूट</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
        <source>EFI system</source>
        <translation>EFI सिस्टम</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="207"/>
        <source>Swap</source>
        <translation>स्वैप</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="211"/>
        <source>New partition for %1</source>
        <translation>%1 के लिए नया विभाजन</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="215"/>
        <source>New partition</source>
        <translation>नया विभाजन</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="239"/>
        <source>%1  %2</source>
        <extracomment>size[number] filesystem[name]</extracomment>
        <translation>%1 %2</translation>
    </message>
</context>
<context>
    <name>PartitionModel</name>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="159"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="203"/>
        <source>Free Space</source>
        <translation>खाली स्पेस</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="163"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="207"/>
        <source>New partition</source>
        <translation>नया विभाजन</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="300"/>
        <source>Name</source>
        <translation>नाम</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="302"/>
        <source>File System</source>
        <translation>फ़ाइल सिस्टम</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="304"/>
        <source>File System Label</source>
        <translation>फाइल सिस्टम उपनाम</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="306"/>
        <source>Mount Point</source>
        <translation>माउंट पॉइंट</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="308"/>
        <source>Size</source>
        <translation>आकार</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="18"/>
        <source>Form</source>
        <translation>रूप</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="26"/>
        <source>Storage de&amp;vice:</source>
        <translation>संचय उपकरण (&amp;v):</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="55"/>
        <source>&amp;Revert All Changes</source>
        <translation>सभी बदलाव उलट दें (&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="91"/>
        <source>New Partition &amp;Table</source>
        <translation>नई विभाजन तालिका (&amp;T)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="111"/>
        <source>Cre&amp;ate</source>
        <translation>बनाएँ (&amp;a)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="136"/>
        <source>New Volume Group</source>
        <translation>नया वॉल्यूम समूह</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="143"/>
        <source>Resize Volume Group</source>
        <translation>वॉल्यूम समूह का आकार बदलें</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="150"/>
        <source>Deactivate Volume Group</source>
        <translation>वॉल्यूम समूह को निष्क्रिय करें</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="157"/>
        <source>Remove Volume Group</source>
        <translation>वॉल्यूम समूह को हटाएँ</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="184"/>
        <source>I&amp;nstall boot loader on:</source>
        <translation>बूट लोडर इंस्टॉल करें (&amp;l) :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="118"/>
        <source>&amp;Edit</source>
        <translation>संपादित करें (&amp;E)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="125"/>
        <source>&amp;Delete</source>
        <translation>हटाएँ (D)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="228"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>क्या आप वाकई %1 पर एक नई विभाजन तालिका बनाना चाहते हैं?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="263"/>
        <source>Can not create new partition</source>
        <translation>नया विभाजन बनाया नहीं जा सका</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="264"/>
        <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
        <translation>%1 पर विभाजन तालिका में पहले से ही %2 मुख्य विभाजन हैं व और अधिक नहीं जोड़ें जा सकते। कृपया एक मुख्य विभाजन को हटाकर उसके स्थान पर एक विस्तृत विभाजन जोड़ें।</translation>
    </message>
</context>
<context>
    <name>PartitionQmlViewStep</name>
    <message>
        <location filename="../src/modules/partitionq/PartitionQmlViewStep.cpp" line="117"/>
        <source>Partition</source>
        <translation>विभाजन</translation>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="56"/>
        <source>Gathering system information...</source>
        <translation>सिस्टम की जानकारी प्राप्त की जा रही है...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="111"/>
        <source>Partitions</source>
        <translation>विभाजन</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="303"/>
        <source>Current:</source>
        <translation>मौजूदा :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="321"/>
        <source>After:</source>
        <translation>बाद में:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="530"/>
        <source>No EFI system partition configured</source>
        <translation>कोई EFI सिस्टम विभाजन विन्यस्त नहीं है</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="534"/>
        <source>EFI system partition configured incorrectly</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="539"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a suitable filesystem.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="550"/>
        <source>The filesystem must be mounted on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="556"/>
        <source>The filesystem must have type FAT32.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="564"/>
        <source>The filesystem must be at least %1 MiB in size.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="570"/>
        <source>The filesystem must have flag &lt;strong&gt;%1&lt;/strong&gt; set.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="576"/>
        <source>You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="593"/>
        <source>Option to use GPT on BIOS</source>
        <translation>BIOS पर GPT उपयोग करने के लिए विकल्प</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="594"/>
        <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partition table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;bios_grub&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
        <translation>GPT विभाजन तालिका सभी सिस्टम हेतु सबसे उत्तम विकल्प है। यह इंस्टॉलर BIOS सिस्टम के सेटअप को भी समर्थन करता है। &lt;br/&gt;&lt;br/&gt;BIOS पर GPT विभाजन तालिका को विन्यस्त करने हेतु, (अगर अब तक नहीं करा है तो) वापस जाकर विभाजन तालिका GPT पर सेट करें, फिर एक 8 MB का बिना फॉर्मेट हुआ विभाजन बनाए जिस पर &lt;strong&gt;bios_grub&lt;/strong&gt; का flag हो।&lt;br/&gt;&lt;br/&gt;यह बिना फॉर्मेट हुआ 8 MB का विभाजन %1 को BIOS सिस्टम पर GPT के साथ शुरू करने के लिए आवश्यक है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="715"/>
        <source>There are no partitions to install on.</source>
        <translation>इंस्टॉल हेतु कोई विभाजन नहीं हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="626"/>
        <source>Boot partition not encrypted</source>
        <translation>बूट विभाजन एन्क्रिप्टेड नहीं है</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="627"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation>एन्क्रिप्टेड रुट विभाजन के साथ एक अलग बूट विभाजन भी सेट किया गया था, पर बूट विभाजन एन्क्रिप्टेड नहीं था।&lt;br/&gt;&lt;br/&gt; इस तरह का सेटअप सुरक्षित नहीं होता क्योंकि सिस्टम फ़ाइल एन्क्रिप्टेड विभाजन पर होती हैं।&lt;br/&gt;आप चाहे तो जारी रख सकते है, पर फिर फ़ाइल सिस्टम बाद में सिस्टम स्टार्टअप के दौरान अनलॉक होगा।&lt;br/&gt; विभाजन को एन्क्रिप्ट करने के लिए वापस जाकर उसे दोबारा बनाएँ व विभाजन निर्माण विंडो में&lt;strong&gt;एन्क्रिप्ट&lt;/strong&gt; चुनें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="714"/>
        <source>has at least one disk device available.</source>
        <translation>कम-से-कम एक डिस्क डिवाइस उपलब्ध हो।</translation>
    </message>
</context>
<context>
    <name>PreserveFiles</name>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="79"/>
        <source>Saving files for later ...</source>
        <translation>बाद के लिए फाइलों को संचित किया जा है...</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="118"/>
        <source>No files configured to save for later.</source>
        <translation>बाद में संचित करने हेतु कोई फाइल विन्यस्त नहीं की गई है।</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="172"/>
        <source>Not all of the configured files could be preserved.</source>
        <translation>विन्यस्त की गई सभी फाइलें संचित नहीं की जा सकी।</translation>
    </message>
</context>
<context>
    <name>ProcessResult</name>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="425"/>
        <source>
There was no output from the command.</source>
        <translation>
कमांड से कोई आउटपुट नहीं मिला।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="426"/>
        <source>
Output:
</source>
        <translation>
आउटपुट:
</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="430"/>
        <source>External command crashed.</source>
        <translation>बाह्य कमांड क्रैश हो गई।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="431"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
        <translation>कमांड &lt;i&gt;%1&lt;/i&gt; क्रैश हो गई।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="436"/>
        <source>External command failed to start.</source>
        <translation>बाह्य​ कमांड शुरू होने में विफल।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="437"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
        <translation>कमांड &lt;i&gt;%1&lt;/i&gt; शुरू होने में विफल।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="441"/>
        <source>Internal error when starting command.</source>
        <translation>कमांड शुरू करते समय आंतरिक त्रुटि।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="442"/>
        <source>Bad parameters for process job call.</source>
        <translation>प्रक्रिया कार्य कॉल के लिए गलत मापदंड।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="446"/>
        <source>External command failed to finish.</source>
        <translation> बाहरी कमांड समाप्त करने में विफल।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="447"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
        <translation>कमांड &lt;i&gt;%1&lt;/i&gt; %2 सेकंड में समाप्त होने में विफल।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="454"/>
        <source>External command finished with errors.</source>
        <translation>बाहरी कमांड त्रुटि के साथ समाप्त।</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="455"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
        <translation>कमांड &lt;i&gt;%1&lt;/i&gt; exit कोड %2 के साथ समाप्त।</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="130"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="167"/>
        <source>Default</source>
        <translation>डिफ़ॉल्ट</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="41"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>अविभाजित स्पेस या अज्ञात विभाजन तालिका</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="28"/>
        <source>unknown</source>
        <translation>अज्ञात</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="30"/>
        <source>extended</source>
        <translation>विस्तृत</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="32"/>
        <source>unformatted</source>
        <translation>फॉर्मेट नहीं हो रखा है</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="34"/>
        <source>swap</source>
        <translation>स्वैप</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="44"/>
        <source>(no mount point)</source>
        <translation>(कोई माउंट पॉइंट नहीं)</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/locale/Translation.cpp" line="74"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="64"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="72"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="76"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="93"/>
        <source>File not found</source>
        <translation>फ़ाइल नहीं मिली</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="65"/>
        <source>Path &lt;pre&gt;%1&lt;/pre&gt; must be an absolute path.</source>
        <translation>फ़ाइल पथ &lt;pre&gt;%1&lt;/pre&gt; निरपेक्ष होना चाहिए।</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="83"/>
        <source>Directory not found</source>
        <translation>डायरेक्टरी नहीं मिली</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="84"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="94"/>
        <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
        <translation>नवीन यादृच्छिक फ़ाइल &lt;pre&gt;%1&lt;/pre&gt;नहीं बनाई जा सकी।</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="44"/>
        <source>No product</source>
        <translation>कोई वस्तु नहीं</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="52"/>
        <source>No description provided.</source>
        <translation>कोई विवरण प्रदान नहीं किया गया।</translation>
    </message>
</context>
<context>
    <name>Recommended</name>
    <message>
        <location filename="../src/modules/welcomeq/Recommended.qml" line="40"/>
        <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
        <translation>&lt;p&gt;यह कंप्यूटर %1 सेटअप करने हेतु सुझाई गई आवश्यकताओं को पूरा नहीं करता।&lt;br/&gt;
        सेटअप जारी रखा जा सकता है, लेकिन कुछ विशेषताएँ निष्क्रिय कर दी जाएँगी।&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>RemoveVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="24"/>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="36"/>
        <source>Remove Volume Group named %1.</source>
        <translation>%1 नामक वॉल्यूम समूह हटाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="30"/>
        <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt; नामक वॉल्यूम समूह हटाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="48"/>
        <source>The installer failed to remove a volume group named &apos;%1&apos;.</source>
        <translation>इंस्टालर &apos;%1&apos; नामक वॉल्यूम समूह को हटाने में विफल रहा।</translation>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="18"/>
        <source>Form</source>
        <translation>रूप</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="127"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>चुनें कि %1 को कहाँ इंस्टॉल करना है।&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;चेतावनी: &lt;/font&gt; यह चयनित विभाजन पर मौजूद सभी फ़ाइलों को हटा देगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="149"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>चयनित आइटम एक मान्य विभाजन नहीं है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="157"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 को खाली स्पेस पर इंस्टॉल नहीं किया जा सकता।कृपया कोई मौजूदा विभाजन चुनें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="167"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1 को विस्तृत विभाजन पर इंस्टॉल नहीं किया जा सकता। कृपया कोई मौजूदा मुख्य या तार्किक विभाजन चुनें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="177"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>इस विभाजन पर %1 इंस्टॉल नहीं किया जा सकता।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="183"/>
        <source>Data partition (%1)</source>
        <translation>डाटा विभाजन (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="203"/>
        <source>Unknown system partition (%1)</source>
        <translation>अज्ञात सिस्टम विभाजन (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="207"/>
        <source>%1 system partition (%2)</source>
        <translation>%1 सिस्टम विभाजन (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="218"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%2 के लिए विभाजन %1 बहुत छोटा है।कृपया कम-से-कम %3 GiB की क्षमता वाला कोई विभाजन चुनें ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="240"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;इस सिस्टम पर कहीं भी कोई EFI सिस्टम विभाजन नहीं मिला। कृपया वापस जाएँ व %1 को सेट करने के लिए मैनुअल रूप से विभाजन करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="251"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="267"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="292"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%2 पर %1 इंस्टॉल किया जाएगा।&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;चेतावनी : &lt;/font&gt;विभाजन %2 पर मौजूद सारा डाटा हटा दिया जाएगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="259"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>%1 वाले EFI सिस्टम विभाजन का उपयोग %2 को शुरू करने के लिए किया जाएगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="275"/>
        <source>EFI system partition:</source>
        <translation>EFI सिस्टम विभाजन:</translation>
    </message>
</context>
<context>
    <name>Requirements</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements.qml" line="38"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
        <translation>&lt;p&gt;यह कंप्यूटर %1 को इंस्टॉल करने की न्यूनतम आवश्यकताओं को पूरा नहीं करता।&lt;br/&gt;
        इंस्टॉल जारी नहीं रखा जा सकता।&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/Requirements.qml" line="40"/>
        <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
        <translation>&lt;p&gt;यह कंप्यूटर %1 सेटअप करने हेतु सुझाई गई आवश्यकताओं को पूरा नहीं करता।&lt;br/&gt;
        सेटअप जारी रखा जा सकता है, लेकिन कुछ विशेषताएँ निष्क्रिय कर दी जाएँगी।&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>Requirements2</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements2.qml" line="48"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing KaOS.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
        <translation>&lt;p&gt;यह कंप्यूटर कैओस इंस्टॉल करने की न्यूनतम आवश्यकताओं को पूरा नहीं करता।&lt;br/&gt;
        इंस्टॉल जारी नहीं रखा जा सकता।&lt;/p&gt; </translation>
    </message>
</context>
<context>
    <name>Requirements_orig</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements_orig.qml" line="48"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for setting up %1.&lt;/p&gt;
        &lt;p&gt;Setup cannot continue.&lt;/p&gt;</source>
        <translation>&lt;p&gt;यह कंप्यूटर %1 इंस्टॉल करने की न्यूनतम आवश्यकताओं को पूरा नहीं करता।&lt;br/&gt;
        इंस्टॉल जारी नहीं रखा जा सकता।&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="40"/>
        <source>Resize partition %1.</source>
        <translation>विभाजन %1 का आकार बदलें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="47"/>
        <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%2MiB&lt;/strong&gt; के &lt;strong&gt;%1&lt;/strong&gt; विभाजन का आकार बदलकर &lt;strong&gt;%3MiB&lt;/strong&gt; करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="58"/>
        <source>Resizing %2MiB partition %1 to %3MiB.</source>
        <translation>%2MiB के %1 विभाजन का आकार बदलकर %3MiB किया जा रहा है।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="77"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>इंस्टॉलर डिस्क &apos;%2&apos; पर विभाजन %1 का आकर बदलने में विफल रहा।</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="30"/>
        <source>Resize Volume Group</source>
        <translation>वॉल्यूम समूह का आकार बदलें</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="27"/>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="45"/>
        <source>Resize volume group named %1 from %2 to %3.</source>
        <translation>%1 नामक वॉल्यूम समूह का आकार %2 से बदलकर %3 करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="36"/>
        <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt; नामक वॉल्यूम समूह का आकार &lt;strong&gt;%2&lt;/strong&gt; से बदलकर &lt;strong&gt;%3&lt;/strong&gt; करें। </translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="60"/>
        <source>The installer failed to resize a volume group named &apos;%1&apos;.</source>
        <translation>इंस्टालर &apos;%1&apos; नाम के वॉल्यूम समूह का आकार बदलने में विफल रहा।</translation>
    </message>
</context>
<context>
    <name>ResultsListDialog</name>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="137"/>
        <source>For best results, please ensure that this computer:</source>
        <translation>उत्तम परिणाम हेतु, कृपया सुनिश्चित करें कि यह कंप्यूटर :</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="138"/>
        <source>System requirements</source>
        <translation>सिस्टम इंस्टॉल हेतु आवश्यकताएँ</translation>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="64"/>
        <source>Scanning storage devices...</source>
        <translation>डिवाइस स्कैन किए जा रहे हैं...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="64"/>
        <source>Partitioning</source>
        <translation>विभाजन</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="37"/>
        <source>Set hostname %1</source>
        <translation>होस्ट नाम %1 सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="44"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>होस्ट नाम &lt;strong&gt;%1&lt;/strong&gt; सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="51"/>
        <source>Setting hostname %1.</source>
        <translation>होस्ट नाम %1 सेट हो रहा है।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="122"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="129"/>
        <source>Internal Error</source>
        <translation>आंतरिक त्रुटि</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="137"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="146"/>
        <source>Cannot write hostname to target system</source>
        <translation>लक्षित सिस्टम पर होस्ट नाम लिखा नहीं जा सकता।</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="55"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>कुंजीपटल का मॉडल %1, अभिन्यास %2-%3 सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="368"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>वर्चुअल कंसोल हेतु कुंजीपटल की सेटिंग्स राइट करने में विफल रहा।</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="369"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="397"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="414"/>
        <source>Failed to write to %1</source>
        <translation>%1 पर राइट करने में विफल </translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="396"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>X11 हेतु कुंजीपटल की सेटिंग्स राइट करने में विफल रहा।</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="413"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation>मौजूदा /etc /default डायरेक्टरी में कुंजीपटल की सेटिंग्स राइट करने में विफल रहा।</translation>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="43"/>
        <source>Set flags on partition %1.</source>
        <translation>%1 विभाजन पर फ्लैग सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="49"/>
        <source>Set flags on %1MiB %2 partition.</source>
        <translation>%1MiB के %2 विभाजन पर फ्लैग सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="53"/>
        <source>Set flags on new partition.</source>
        <translation>नए विभाजन पर फ्लैग सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="65"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt; विभाजन पर से फ्लैग हटाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
        <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>%1MiB के &lt;strong&gt;%2&lt;/strong&gt; विभाजन पर से फ्लैग हटाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="89"/>
        <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>%1MiB के &lt;strong&gt;%2&lt;/strong&gt; विभाजन पर &lt;strong&gt;%3&lt;/strong&gt; का फ्लैग लगाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="114"/>
        <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>%1MiB के &lt;strong&gt;%2&lt;/strong&gt; विभाजन पर से फ्लैग हटाएँ जा रहे हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="133"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>%1MiB के &lt;strong&gt;%2&lt;/strong&gt; विभाजन पर फ्लैग &lt;strong&gt;%3&lt;/strong&gt; सेट किए जा रहे हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
        <source>Clear flags on new partition.</source>
        <translation>नए विभाजन पर से फ्लैग हटाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="80"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt; विभाजन पर &lt;strong&gt;%2&lt;/strong&gt; का फ्लैग लगाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="96"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>नए विभाजन पर&lt;strong&gt;%1&lt;/strong&gt;का फ्लैग लगाएँ।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="108"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt; विभाजन पर से फ्लैग हटाएँ जा रहे हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="119"/>
        <source>Clearing flags on new partition.</source>
        <translation>नए विभाजन पर से फ्लैग हटाएँ जा रहे हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="124"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt; विभाजन पर फ्लैग &lt;strong&gt;%2&lt;/strong&gt; सेट किए जा रहे हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="140"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation>नए विभाजन पर फ्लैग &lt;strong&gt;%1&lt;/strong&gt; सेट किए जा रहे हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="157"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>इंस्टॉलर विभाजन %1 पर फ्लैग सेट करने में विफल रहा।</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="40"/>
        <source>Set password for user %1</source>
        <translation>उपयोक्ता %1 के लिए पासवर्ड सेट करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="47"/>
        <source>Setting password for user %1.</source>
        <translation>उपयोक्ता %1 के लिए पासवर्ड सेट किया जा रहा है।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="81"/>
        <source>Bad destination system path.</source>
        <translation>लक्ष्य का सिस्टम पथ गलत है।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="82"/>
        <source>rootMountPoint is %1</source>
        <translation>रूट माउंट पॉइंट %1 है</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="88"/>
        <source>Cannot disable root account.</source>
        <translation>रुट अकाउंट निष्क्रिय नहीं किया जा सकता ।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="89"/>
        <source>passwd terminated with error code %1.</source>
        <translation>passwd त्रुटि कोड %1 के साथ समाप्त।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="97"/>
        <source>Cannot set password for user %1.</source>
        <translation>उपयोक्ता %1 के लिए पासवर्ड सेट नहीं किया जा सकता।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="98"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod त्रुटि कोड %1 के साथ समाप्त।</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="34"/>
        <source>Set timezone to %1/%2</source>
        <translation>समय क्षेत्र %1%2 पर सेट करें</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="62"/>
        <source>Cannot access selected timezone path.</source>
        <translation>चयनित समय क्षेत्र पथ तक पहुँचा नहीं जा सका।</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="63"/>
        <source>Bad path: %1</source>
        <translation>गलत पथ: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot set timezone.</source>
        <translation>समय क्षेत्र सेट नहीं हो सका।</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>लिंक बनाना विफल, लक्ष्य: %1; लिंक का नाम: %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="77"/>
        <source>Cannot set timezone,</source>
        <translation>समय क्षेत्र सेट नहीं हो सका।</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="78"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>राइट करने हेतु /etc /timezone खोला नहीं जा सका।</translation>
    </message>
</context>
<context>
    <name>SetupGroupsJob</name>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="166"/>
        <source>Preparing groups.</source>
        <translation>समूह तैयार करना जारी।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="178"/>
        <location filename="../src/modules/users/MiscJobs.cpp" line="183"/>
        <source>Could not create groups in target system</source>
        <translation>लक्षित सिस्टम में समूह तैयार करना विफल</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="184"/>
        <source>These groups are missing in the target system: %1</source>
        <translation>लक्षित सिस्टम में समूह अनुपस्थित हैं : %1</translation>
    </message>
</context>
<context>
    <name>SetupSudoJob</name>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="33"/>
        <source>Configure &lt;pre&gt;sudo&lt;/pre&gt; users.</source>
        <translation>&lt;pre&gt;sudo&lt;/pre&gt; उपयोक्ता हेतु विन्यास।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="55"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>sudoers फ़ाइल chmod नहीं की जा सकती।</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="60"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>राइट हेतु sudoers फ़ाइल नहीं बन सकती।</translation>
    </message>
</context>
<context>
    <name>SlideCounter</name>
    <message>
        <location filename="../src/qml/calamares/slideshow/SlideCounter.qml" line="27"/>
        <source>%L1 / %L2</source>
        <extracomment>slide counter, %1 of %2 (numeric)</extracomment>
        <translation>%L1 / %L2</translation>
    </message>
</context>
<context>
    <name>StandardButtons</name>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="28"/>
        <source>&amp;OK</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="29"/>
        <source>&amp;Yes</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="30"/>
        <source>&amp;No</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="31"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="32"/>
        <source>&amp;Close</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>UEFI</name>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="37"/>
        <source>Systemd-boot is a UEFI boot manager which executes configured EFI images. The default entry is selected by a configured pattern (glob) or an on-screen menu and is simple to configure.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="50"/>
        <source>Systemd-boot</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="103"/>
        <source>rEFInd is a fork of the earlier rEFIt boot manager. It is designed to be platform-neutral and to simplify booting multiple operating systems.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="116"/>
        <source>Refind</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="171"/>
        <source>No bootloader selected. Selecting no bootloader might result in an un-bootable system, if you don&apos;t already have a bootloader were you can add this install to.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="184"/>
        <source>No bootloader</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="236"/>
        <source>Please select a bootloader option for your install, or leave the default option, &lt;strong&gt;systemd-boot&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="167"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
        <translation>&lt;small&gt;यदि एक से अधिक व्यक्ति इस कंप्यूटर का उपयोग करेंगे, तो आप सेटअप के उपरांत एकाधिक अकाउंट बना सकते हैं।&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="173"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
        <translation>&lt;small&gt;यदि एक से अधिक व्यक्ति इस कंप्यूटर का उपयोग करेंगे, तो आप इंस्टॉल के उपरांत एकाधिक अकाउंट बना सकते हैं।&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>UsersQmlViewStep</name>
    <message>
        <location filename="../src/modules/usersq/UsersQmlViewStep.cpp" line="35"/>
        <source>Users</source>
        <translation>उपयोक्ता</translation>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
        <source>Users</source>
        <translation>उपयोक्ता</translation>
    </message>
</context>
<context>
    <name>VariantModel</name>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="232"/>
        <source>Key</source>
        <comment>Column header for key/value</comment>
        <translation>कुंजी</translation>
    </message>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="236"/>
        <source>Value</source>
        <comment>Column header for key/value</comment>
        <translation>मान</translation>
    </message>
</context>
<context>
    <name>VolumeGroupBaseDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="18"/>
        <source>Create Volume Group</source>
        <translation>वॉल्यूम समूह बनाएं</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="24"/>
        <source>List of Physical Volumes</source>
        <translation>वॉल्यूम समूहों की सूची</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="34"/>
        <source>Volume Group Name:</source>
        <translation>वॉल्यूम समूह का नाम :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="47"/>
        <source>Volume Group Type:</source>
        <translation>वॉल्यूम समूह का प्रकार :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="60"/>
        <source>Physical Extent Size:</source>
        <translation>डिस्क ब्लॉक की आकार सीमा :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="70"/>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="86"/>
        <source>Total Size:</source>
        <translation>कुल आकार :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="106"/>
        <source>Used Size:</source>
        <translation>प्रयुक्त आकार :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="126"/>
        <source>Total Sectors:</source>
        <translation>कुल सेक्टर :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="146"/>
        <source>Quantity of LVs:</source>
        <translation>तार्किक वॉल्यूम की मात्रा :</translation>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="18"/>
        <source>Form</source>
        <translation>रूप</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="79"/>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="98"/>
        <source>Select application and system language</source>
        <translation>अनुप्रयोग व सिस्टम भाषा चुनें</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="187"/>
        <source>Open donations website</source>
        <translation>दान हेतु वेबसाइट खोलें</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="227"/>
        <source>&amp;Donate</source>
        <translation>दान करें (&amp;D)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="237"/>
        <source>Open help and support website</source>
        <translation>सहायता हेतु वेबसाइट खोलें</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="297"/>
        <source>&amp;Release notes</source>
        <translation>रिलीज़ नोट्स (&amp;R)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="287"/>
        <source>&amp;Known issues</source>
        <translation>ज्ञात समस्याएँ (&amp;K)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="240"/>
        <source>&amp;Support</source>
        <translation>सहायता (&amp;S)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="177"/>
        <source>&amp;About</source>
        <translation>बारे में (&amp;A)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="223"/>
        <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 इंस्टॉलर में आपका स्वागत है।&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="222"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 के लिए Calamares इंस्टॉलर में आपका स्वागत है।&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="216"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 हेतु Calamares सेटअप में आपका स्वागत है।&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="217"/>
        <source>&lt;h1&gt;Welcome to %1 setup.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;%1 सेटअप में आपका स्वागत है।&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="235"/>
        <source>About %1 setup</source>
        <translation>%1 सेटअप के बारे में</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="235"/>
        <source>About %1 installer</source>
        <translation>%1 इंस्टॉलर के बारे में</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="238"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2020 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Thanks to &lt;a href=&quot;https://calamares.io/team/&quot;&gt;the Calamares team&lt;/a&gt; and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;के लिए %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;प्रतिलिप्याधिकार 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;प्रतिलिप्याधिकार 2017-2020 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/team/&quot;&gt;Calamares टीम&lt;/a&gt; व &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS अनुवादक टीम&lt;/a&gt;को धन्यवाद।&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt;का विकास &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;ब्लू सिस्टम्स&lt;/a&gt; - लिब्रेटिंग सॉफ्टवेयर द्वारा प्रायोजित है।</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="228"/>
        <source>%1 support</source>
        <translation>%1 सहायता</translation>
    </message>
</context>
<context>
    <name>WelcomeQmlViewStep</name>
    <message>
        <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="40"/>
        <source>Welcome</source>
        <translation>स्वागत है</translation>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="46"/>
        <source>Welcome</source>
        <translation>स्वागत है</translation>
    </message>
</context>
<context>
    <name>about</name>
    <message>
        <location filename="../src/modules/welcomeq/about.qml" line="47"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;
                        &lt;strong&gt;%2&lt;br/&gt;
                        for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;
                        Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;
                        Copyright 2017-2021 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;
                        Thanks to &lt;a href='https://calamares.io/team/'&gt;the Calamares team&lt;/a&gt;
                        and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS
                        translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;
                        &lt;a href='https://calamares.io/'&gt;Calamares&lt;/a&gt;
                        development is sponsored by &lt;br/&gt;
                        &lt;a href='http://www.blue-systems.com/'&gt;Blue Systems&lt;/a&gt; -
                        Liberating Software.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/about.qml" line="96"/>
        <source>Back</source>
        <translation>वापस</translation>
    </message>
</context>
<context>
    <name>calamares-sidebar</name>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-sidebar.qml" line="89"/>
        <location filename="../src/calamares/calamares-sidebar.qml" line="79"/>
        <source>Show debug information</source>
        <translation>डीबग संबंधी जानकारी दिखाएँ</translation>
    </message>
</context>
<context>
    <name>finishedq</name>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="38"/>
        <source>Installation Completed</source>
        <translation>इंस्टॉल पूर्ण</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="45"/>
        <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart into your new system, or continue using the Live environment.</source>
        <translation>आपके कंप्यूटर पर %1 इंस्टॉल हो चुका है।&lt;br/&gt;
            अब आप नए सिस्टम को पुनः आरंभ, या फिर लाइव वातावरण उपयोग करना जारी रख सकते हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="67"/>
        <source>Close Installer</source>
        <translation>इंस्टॉलर बंद करें</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="74"/>
        <source>Restart System</source>
        <translation>सिस्टम पुनः आरंभ करें</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="95"/>
        <source>&lt;p&gt;A full log of the install is available as installation.log in the home directory of the Live user.&lt;br/&gt;
            This log is copied to %1 of the target system.&lt;/p&gt;</source>
        <translation>&lt;p&gt;इंस्टॉल प्रक्रिया की पूर्ण लॉग installation.log फाइल के रूप में लाइव उपयोक्ता की होम डायरेक्टरी में उपलब्ध है।&lt;br/&gt;
            यह लॉग फाइल लक्षित सिस्टम में %1 पर भी कॉपी की गई है।&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>i18n</name>
    <message>
        <location filename="../src/modules/localeq/i18n.qml" line="50"/>
        <source>&lt;h1&gt;Languages&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;h1&gt;भाषाएँ&lt;/h1&gt;&lt;/br&gt;
                 सिस्टम स्थानिकी सेटिंग कमांड लाइन के कुछ उपयोक्ता अंतरफलक तत्वों की भाषा व अक्षर सेट पर असर डालती है।&lt;br/&gt;मौजूदा सेटिंग &lt;strong&gt;%1&lt;/strong&gt;है।</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18n.qml" line="123"/>
        <source>&lt;h1&gt;Locales&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;h1&gt;स्थानिकी&lt;/h1&gt; &lt;/br&gt;
                    सिस्टम स्थानिकी सेटिंग संख्या व दिनांक के प्रारूप को प्रभावित करती है। वर्तमान सेटिंग &lt;strong&gt;%1&lt;/strong&gt; है।</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18n.qml" line="189"/>
        <source>Back</source>
        <translation>वापस</translation>
    </message>
</context>
<context>
    <name>i18nw</name>
    <message>
        <location filename="../src/modules/localeq/i18nw.qml" line="50"/>
        <source>&lt;h1&gt;Languages&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18nw.qml" line="124"/>
        <source>&lt;h1&gt;Locales&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18nw.qml" line="192"/>
        <source>Back</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>keyboardq</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="60"/>
        <source>To activate keyboard preview, select a layout.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="86"/>
        <source>Keyboard Model:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="254"/>
        <source>Layouts</source>
        <translation>अभिन्यास</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="263"/>
        <source>Type here to test your keyboard</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="179"/>
        <source>Variants</source>
        <translation>भिन्न रूप</translation>
    </message>
</context>
<context>
    <name>keyboardq_orig</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="20"/>
        <source>Keyboard Model</source>
        <translation>कुंजीपटल मॉडल</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="21"/>
        <source>Pick your preferred keyboard model or use the default one based on the detected hardware</source>
        <translation>अपना कुंजीपटल मॉडल चुनें या फिर हार्डवेयर आधारित डिफ़ॉल्ट मॉडल उपयोग करें</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="56"/>
        <source>Refresh</source>
        <translation>रिफ्रेश करें</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="62"/>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="169"/>
        <source>Layouts</source>
        <translation>अभिन्यास</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="75"/>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="134"/>
        <source>Keyboard Layout</source>
        <translation>कुंजीपटल अभिन्यास</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="113"/>
        <source>Models</source>
        <translation>मॉडल</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="121"/>
        <source>Variants</source>
        <translation>प्रकार</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="180"/>
        <source>Test your keyboard</source>
        <translation>अपना कुंजीपटल जाँचें</translation>
    </message>
</context>
<context>
    <name>keyboardq_w</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="77"/>
        <source>Keyboard Selection</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="93"/>
        <source>Click your preferred keyboard model to select layout and variant, or use the default one based on the detected hardware.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="111"/>
        <source>Keyboard Model:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="244"/>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="476"/>
        <source>Layouts</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="358"/>
        <source>Models</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="365"/>
        <source>Variants</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="381"/>
        <source>Keyboard Variant</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="398"/>
        <source>Variant keyboard model or use the default one based on the detected hardware.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="486"/>
        <source>Test your keyboard</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>layout</name>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="32"/>
        <source>Region: </source>
        <translation>क्षेत्र :</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="43"/>
        <source>Adjust Language</source>
        <translation>भाषा सेट करें</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="53"/>
        <source>Zone: </source>
        <translation>भूभाग :</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="63"/>
        <source>Adjust Locale</source>
        <translation>स्थानिकी सेट करें</translation>
    </message>
</context>
<context>
    <name>localeq</name>
    <message>
        <location filename="../src/modules/localeq/localeq.qml" line="110"/>
        <source>Change</source>
        <translation>बदलें</translation>
    </message>
</context>
<context>
    <name>localeq2</name>
    <message>
        <location filename="../src/modules/localeq/localeq2.qml" line="40"/>
        <source>Region: </source>
        <translation>क्षेत्र :</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/localeq2.qml" line="55"/>
        <source>Zone: </source>
        <translation>भूभाग :</translation>
    </message>
</context>
<context>
    <name>notesqml</name>
    <message>
        <location filename="../src/modules/notesqml/notesqml.qml" line="50"/>
        <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;These are example release notes.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;ये उदाहरण रिलीज़ नोट्स हैं।&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>packagechooserq</name>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="45"/>
        <source>LibreOffice is a powerful and free office suite, used by millions of people around the world. It includes several applications that make it the most versatile Free and Open Source office suite on the market.&lt;br/&gt;
                    Default option.</source>
        <translation>लिब्रे-ऑफिस एक सशक्त और निःशुल्क ऑफिस सॉफ्टवेयर है जिसका उपयोग दुनिया भर के लाखों लोग करते हैं। इसमें कई अनुप्रयोग सम्मिलित हैं जो इसे उपलब्ध विकल्पों में सबसे बहुमुखी निःशुल्क व मुक्त स्रोत ऑफिस सॉफ्टवेयर बनाते हैं।&lt;br/&gt;
                    डिफ़ॉल्ट विकल्प।</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="59"/>
        <source>LibreOffice</source>
        <translation>लिब्रे-ऑफिस</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="112"/>
        <source>If you don&apos;t want to install an office suite, just select No Office Suite. You can always add one (or more) later on your installed system as the need arrives.</source>
        <translation>यदि आप ऑफिस सॉफ्टवेयर इंस्टॉल नहीं करना चाहते हैं, तो कोई ऑफिस सॉफ्टवेयर नहीं का विकल्प चुनें। आप आवश्यकता अनुसार बाद में अपने इंस्टॉल किए गए सिस्टम पर एक (या अधिक) ऐसे सॉफ्टवेयर जोड़ सकते हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="125"/>
        <source>No Office Suite</source>
        <translation>कोई ऑफिस सॉफ्टवेयर नहीं</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="180"/>
        <source>Create a minimal Plasma Desktop install, remove all extra applications and decide later on what you would like to add to your system. Examples of what won&apos;t be on such an install, there will be no Office Suite, no media players, no image viewer or print support.  It will be just a desktop, file browser, package manager, text editor and simple web-browser.</source>
        <translation>एक संक्षिप्त प्लाज़्मा डेस्कटॉप इंस्टॉल का सृजन करें, सभी अतिरिक्त अनुप्रयोग हटाएँ एवं इंस्टॉल उपरांत तय करें कि आप सिस्टम में कौन से सॉफ्टवेयर जोड़ना चाहते हैं। इस प्रकार के इंस्टॉल में उदाहरण के तौर पर कोई ऑफिस सॉफ्टवेयर, कोई मीडिया प्लेयर, कोई चित्र प्रदर्शक या प्रिंटर समर्थन नहीं होगा। इसमें केवल एक डेस्कटॉप, फाइल प्रबंधक, पैकेज प्रबंधक, लेख संपादक व सरल वेब-ब्राउज़र होगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="193"/>
        <source>Minimal Install</source>
        <translation>संक्षिप्त इंस्टॉल</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="245"/>
        <source>Please select an option for your install, or use the default: LibreOffice included.</source>
        <translation>कृपया अपने इंस्टॉल हेतु एक विकल्प चुनें या फिर डिफ़ॉल्ट ही उपयोग करें : इसमें लिब्रे-ऑफिस सम्मिलित है।</translation>
    </message>
</context>
<context>
    <name>packagechooserq@licenseq</name>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq@licenseq.qml" line="26"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;
                    &lt;p&gt;In case non-free was selected, this installer will install proprietary packages that have&lt;br /&gt;
                    additional End User License Agreements (EULAs) attached to them.&lt;br /&gt;
                    Please review the End User License Agreements (EULAs).&lt;/p&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq@licenseq.qml" line="61"/>
        <source>I accept the terms and conditions above</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>partitionq</name>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="43"/>
        <source>&lt;h3&gt;Full disk encryption&lt;/h3&gt;</source>
        <translation>&lt;h3&gt;पूर्ण डिस्क एन्क्रिप्शन&lt;/h3&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="50"/>
        <source>Password</source>
        <translation>कूटशब्द</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="66"/>
        <source>Password (repeat)</source>
        <translation>कूटशब्द (पुनः)</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="92"/>
        <source>Continue</source>
        <translation>जारी रखें</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="95"/>
        <source/>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="99"/>
        <source>Passwords do not match</source>
        <translation>कूटशब्द मेल नहीं खाते</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="101"/>
        <source>Password too short</source>
        <translation>कूटशब्द बहुत छोटा है</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="103"/>
        <source>Please wait...</source>
        <translation>कृपया प्रतीक्षा करें...</translation>
    </message>
</context>
<context>
    <name>release_notes</name>
    <message>
        <location filename="../src/modules/welcomeq/release_notes.qml" line="45"/>
        <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;This an example QML file, showing options in RichText with Flickable content.&lt;/p&gt;

            &lt;p&gt;QML with RichText can use HTML tags, Flickable content is useful for touchscreens.&lt;/p&gt;

            &lt;p&gt;&lt;b&gt;This is bold text&lt;/b&gt;&lt;/p&gt;
            &lt;p&gt;&lt;i&gt;This is italic text&lt;/i&gt;&lt;/p&gt;
            &lt;p&gt;&lt;u&gt;This is underlined text&lt;/u&gt;&lt;/p&gt;
            &lt;p&gt;&lt;center&gt;This text will be center-aligned.&lt;/center&gt;&lt;/p&gt;
            &lt;p&gt;&lt;s&gt;This is strikethrough&lt;/s&gt;&lt;/p&gt;

            &lt;p&gt;Code example:
            &lt;code&gt;ls -l /home&lt;/code&gt;&lt;/p&gt;

            &lt;p&gt;&lt;b&gt;Lists:&lt;/b&gt;&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;Intel CPU systems&lt;/li&gt;
                &lt;li&gt;AMD CPU systems&lt;/li&gt;
            &lt;/ul&gt;

            &lt;p&gt;The vertical scrollbar is adjustable, current width set to 10.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;यह एक उदाहरण QML फ़ाइल है, जो फ्लिक योग्य सामग्री युक्त रिच टेक्स्ट के विकल्प प्रदर्शित करती है।&lt;/p&gt;

            &lt;p&gt;रिच टेक्स्ट के साथ QML एचटीएमएल टैग उपयोग कर सकता है, फ्लिक योग्य सामग्री टचस्क्रीन में उपयोगी होती है।&lt;/p&gt;

            &lt;p&gt;&lt;b&gt;यह बोल्ड टेक्स्ट है&lt;/b&gt;&lt;/p&gt;
            &lt;p&gt;&lt;i&gt;यह तिरछा टेक्स्ट है&lt;/i&gt;&lt;/p&gt;
            &lt;p&gt;&lt;u&gt;यह रेखांकित टेक्स्ट है&lt;/u&gt;&lt;/p&gt;
            &lt;p&gt;&lt;center&gt;यह टेक्स्ट केंद्र-संरेखित होगा।&lt;/center&gt;&lt;/p&gt;
            &lt;p&gt;&lt;s&gt;यह स्ट्राइकथ्रू है&lt;/s&gt;&lt;/p&gt;

            &lt;p&gt;कोड उदाहरण :
            &lt;code&gt;ls -l /home&lt;/code&gt;&lt;/p&gt;

            &lt;p&gt;&lt;b&gt;सूचियाँ :&lt;/b&gt;&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;इंटेल सीपीयू सिस्टम&lt;/li&gt;
                &lt;li&gt;एएमडी सीपीयू सिस्टम&lt;/li&gt;
            &lt;/ul&gt;

            &lt;p&gt;ऊर्ध्वाधर स्क्रॉलबार समायोज्य है, वर्तमान चौड़ाई 10 पर सेट है।&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/release_notes.qml" line="76"/>
        <source>Back</source>
        <translation>वापस</translation>
    </message>
</context>
<context>
    <name>show</name>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="48"/>
        <source>Here the actual install of KaOS will start.&lt;br/&gt;Use the left &lt;b&gt;mouse button&lt;/b&gt; to go to the next slide, right for previous.&lt;br/&gt;After creating your chosen disk setup in the first 10 % &lt;br/&gt;the full copying of the ISO will take the longest of this install phase &lt;br/&gt;and will run until approximately 30%.&lt;br/&gt;</source>
        <translation>यहाँ से KaOS का असल इंस्टॉल शुरू होगा।&lt;br/&gt;अगली स्लाइड पर जाने के लिए बाएं &lt;b&gt;माउस बटन&lt;/b&gt; का उपयोग करें, व पिछली के लिए दाएं ।&lt;br/&gt;पहले 10% में अपने चुने हुए डिस्क सेटअप को बनाने के बाद &lt;br/&gt;ISO का पूर्णतया कॉपी होना ही इंस्टॉल का सबसे लंबा चरण होगा।&lt;br/&gt;और लगभग 30% तक चलेगा।&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="74"/>
        <source>After the ISO is copied some 25 post-install modules will run.&lt;br/&gt;This includes setting user specific options, &lt;br/&gt;removing Live Session only packages&lt;br/&gt;and adjusting hardware setup.&lt;br/&gt;</source>
        <translation>ISO कॉपी होने के बाद कुछ 25 अनुखंड चलेंगे ।&lt;br/&gt;इसमें उपयोक्ता विशिष्ट विकल्प सेट करना,&lt;br/&gt;लाइव सत्र के पैकेज हटाना&lt;br/&gt;व हार्डवेयर सेटअप शामिल हैं।&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="99"/>
        <source>The default Office Suite is LibreOffice.&lt;br/&gt;Calligra is available in the repositories. &lt;br/&gt;</source>
        <translation>डिफ़ॉल्ट ऑफिस सुइट लिब्रे ऑफ़िस है।&lt;br/&gt; कॉलिग्रा पैकेज-संग्रह में उपलब्ध है।&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="122"/>
        <source>Qt/KDE specific internet applications include the &lt;br/&gt;Falkon web-browser and kde-telepathy for &lt;br/&gt;chat and Instant Messaging. &lt;br/&gt;</source>
        <translation>केडीई / क्यूटी विशिष्ट इंटरनेट अनुप्रयोग में &lt;br/&gt;Falkon वेब-ब्राउज़र व &lt;br/&gt;चैटिंग और त्वरित संदेश के लिए kde-telepathy शामिल हैं।&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="146"/>
        <source>For package management Octopi is the GUI application.&lt;br/&gt;</source>
        <translation>पैकेज प्रबंधन के लिए Octopi जीयूआई अनुप्रयोग है ।&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="168"/>
        <source>May using KaOS be a pleasant experience for you.</source>
        <translation>आशा है की KaOS के साथ आपका अनुभव सुखद हो।</translation>
    </message>
    <message>
        <location filename="../src/branding/default/show.qml" line="55"/>
        <source>This is a second Slide element.</source>
        <translation>यह स्लाइड का दूसरा भाग है।</translation>
    </message>
    <message>
        <location filename="../src/branding/default/show.qml" line="59"/>
        <source>This is a third Slide element.</source>
        <translation>यह स्लाइड का तीसरा भाग है।</translation>
    </message>
</context>
<context>
    <name>test</name>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="26"/>
        <source>&lt;h3&gt;Welcome to the KaOS &lt;quote&gt;2020.06&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up KaOS on your computer.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;कैओस &lt;quote&gt;2020.06&lt;/quote&gt; इंस्टॉलर में आपका स्वागत है&lt;/h3&gt;
            &lt;p&gt;यह प्रोग्राम प्रश्नावली के माध्यम से आपके कंप्यूटर पर कैओस सेट करेगा।&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="71"/>
        <source>About</source>
        <translation>बारे में</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="84"/>
        <source>Known issues</source>
        <translation>ज्ञात समस्याएँ</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="95"/>
        <source>Release notes</source>
        <translation>प्रकाशन नोट्स</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="106"/>
        <source>Donate</source>
        <translation>दान करें</translation>
    </message>
</context>
<context>
    <name>usersq</name>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="43"/>
        <source>Pick your user name and credentials to login and perform admin tasks</source>
        <translation>लॉगिन एवं प्रशासक कार्यों हेतु उपयोक्ता नाम इत्यादि चुनें।</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="56"/>
        <source>What is your name?</source>
        <translation>आपका नाम क्या है?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="63"/>
        <source>Your Full Name</source>
        <translation>आपका पूरा नाम</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="86"/>
        <source>What name do you want to use to log in?</source>
        <translation>लॉग इन के लिए आप किस नाम का उपयोग करना चाहते हैं?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="93"/>
        <source>Login Name</source>
        <translation>लॉगिन नाम</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="123"/>
        <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
        <translation>यदि एक से अधिक व्यक्ति इस कंप्यूटर का उपयोग करेंगे, तो आप इंस्टॉल के उपरांत एकाधिक अकाउंट बना सकते हैं।</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="152"/>
        <source>What is the name of this computer?</source>
        <translation>इस कंप्यूटर का नाम ?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="158"/>
        <source>Computer Name</source>
        <translation>कंप्यूटर का नाम</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="185"/>
        <source>This name will be used if you make the computer visible to others on a network.</source>
        <translation>यदि आपका कंप्यूटर किसी नेटवर्क पर दृश्यमान होता है, तो यह नाम उपयोग किया जाएगा।</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="214"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>अपना अकाउंट सुरक्षित रखने के लिए पासवर्ड चुनें ।</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="224"/>
        <source>Password</source>
        <translation>कूटशब्द</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="241"/>
        <source>Repeat Password</source>
        <translation>कूटशब्द पुनः दर्ज करें</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="268"/>
        <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
        <translation>एक ही कूटशब्द दो बार दर्ज़ करें, ताकि उसे टाइप त्रुटि हेतु जाँचा जा सके। एक अच्छे कूटशब्द में अक्षर, अंक व विराम चिन्हों का मेल होता है, उसमें कम-से-कम आठ अक्षर होने चाहिए, और उसे नियमित अंतराल पर बदलते रहना चाहिए।</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="414"/>
        <source>Validate passwords quality</source>
        <translation>कूटशब्द गुणवत्ता प्रमाणीकरण</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="424"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation>यह बॉक्स टिक करने के परिणाम स्वरुप कूटशब्द-क्षमता की जाँच होगी व आप कमज़ोर कूटशब्द उपयोग नहीं कर पाएंगे।</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="406"/>
        <source>Log in automatically without asking for the password</source>
        <translation>कूटशब्द बिना पूछे ही स्वतः लॉग इन करें</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="135"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="143"/>
        <source>root is not allowed as username.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="197"/>
        <source>Only letters, numbers, underscore and hyphen are allowed, minimal of two characters.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="205"/>
        <source>localhost is not allowed as hostname.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="300"/>
        <source>Reuse user password as root password</source>
        <translation>रुट कूटशब्द हेतु भी उपयोक्ता कूटशब्द उपयोग करें</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="308"/>
        <source>Use the same password for the administrator account.</source>
        <translation>प्रबंधक अकाउंट के लिए भी यही कूटशब्द उपयोग करें।</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="321"/>
        <source>Choose a root password to keep your account safe.</source>
        <translation>अकाउंट सुरक्षा हेतु रुट कूटशब्द चुनें।</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="331"/>
        <source>Root Password</source>
        <translation>रुट कूटशब्द</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="349"/>
        <source>Repeat Root Password</source>
        <translation>रुट कूटशब्द पुनः दर्ज करें</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="376"/>
        <source>Enter the same password twice, so that it can be checked for typing errors.</source>
        <translation>समान कूटशब्द दो बार दर्ज करें, ताकि टाइपिंग त्रुटि हेतु जाँच की जा सकें।</translation>
    </message>
</context>
<context>
    <name>usersq2</name>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="48"/>
        <source>Pick your user name and credentials to login and perform admin tasks</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="64"/>
        <source>What is your name?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="73"/>
        <source>Your Full Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="111"/>
        <source>What name do you want to use to log in?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="119"/>
        <source>Login Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="146"/>
        <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="159"/>
        <source>Your username must start with a lowercase letter or underscore.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="169"/>
        <source>Choose a root password to keep your account safe.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="179"/>
        <source>Root Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="197"/>
        <source>Repeat Root Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="223"/>
        <source>Enter the same password twice, so that it can be checked for typing errors.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="255"/>
        <source>Validate passwords quality</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="267"/>
        <source>Known issues</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>usersq3</name>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="31"/>
        <source>Users</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="32"/>
        <source>Pick your user name and credentials to login and perform admin tasks</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="64"/>
        <source>What is your name?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="71"/>
        <source>Your Full Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="88"/>
        <source>What name do you want to use to log in?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="89"/>
        <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="96"/>
        <source>Login Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="115"/>
        <source>What is the name of this computer?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="116"/>
        <source>This name will be used if you make the computer visible to others on a network.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="122"/>
        <source>Computer Name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="139"/>
        <source>Choose a password to keep your account safe.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="140"/>
        <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="146"/>
        <source>Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="168"/>
        <source>Repeat Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="188"/>
        <source>Reuse user password as root password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="201"/>
        <source>Choose a root password to keep your account safe.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="207"/>
        <source>Root Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="228"/>
        <source>Repeat Root Password</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="249"/>
        <source>More options.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="255"/>
        <source>Validate passwords quality</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="264"/>
        <source>Log in automatically without asking for the password</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>welcomeq</name>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="35"/>
        <source>&lt;h3&gt;Welcome to the %1 &lt;quote&gt;%2&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up %1 on your computer.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;%1 &lt;quote&gt;%2&lt;/quote&gt;इंस्टॉलर में आपका स्वागत है&lt;/h3&gt;
            &lt;p&gt;यह प्रोग्राम प्रश्नावली के माध्यम से आपके कंप्यूटर पर %1 को सेट करेगा।&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="66"/>
        <source>About</source>
        <translation>बारे में</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="79"/>
        <source>Support</source>
        <translation>सहायता</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="90"/>
        <source>Known issues</source>
        <translation>ज्ञात समस्याएँ</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="101"/>
        <source>Release notes</source>
        <translation>रिलीज़ नोट्स</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="113"/>
        <source>Donate</source>
        <translation>दान करें</translation>
    </message>
</context>
</TS>