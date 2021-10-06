<?xml version="1.0" ?><!DOCTYPE TS><TS language="nl_NL" version="2.1">
<context>
    <name>AutoMountManagementJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/AutoMountManagementJob.cpp" line="22"/>
        <source>Manage auto-mount settings</source>
        <translation>Beheer instellingen voor automatisch koppelen</translation>
    </message>
</context>
<context>
    <name>BIOS</name>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="41"/>
        <source>GRUB 2, the GRand Unified Bootloader is the reference implementation of the Free Software Foundation&apos;s Multiboot Specification, which provides a user the choice to boot one of multiple operating systems installed on a computer.</source>
        <translation>GRUB 2, de GRand Unified Bootloader, is de referentie-implementatie van de Multiboot-specificatie van de Free Software Foundation, die een gebruiker de keuze geeft om een van meerdere besturingssystemen op een computer op te starten.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="54"/>
        <source>GRUB</source>
        <translation>GRUB</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="108"/>
        <source>No bootloader selected. Selecting no bootloader might result in an un-bootable system, if you don&apos;t already have a bootloader were you can add this install to.</source>
        <translation>Geen bootloader geselecteerd. Het selecteren van geen bootloader kan resulteren in een niet-opstartbaar systeem, als je nog geen bootloader hebt waaraan je deze installatie kunt toevoegen.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="121"/>
        <source>No bootloader</source>
        <translation>Geen bootloader</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="173"/>
        <source>Please select a bootloader option for your install, or leave the default option, &lt;strong&gt;GRUB 2&lt;/strong&gt;.</source>
        <translation>Selecteer een bootloader-optie voor uw installatie, of laat de standaardoptie, &lt;strong&gt;GRUB 2&lt;/strong&gt;.</translation>
    </message>
</context>
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="62"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>De &lt;strong&gt;bootomgeving&lt;/strong&gt; van dit systeem.&lt;br&gt;&lt;br&gt;Oudere x86 systemen ondersteunen alleen &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Moderne systemen gebruiken meestal &lt;strong&gt;EFI&lt;/strong&gt;, maar kunnen ook zichtbaar zijn als BIOS als de boot environment in de compatibiliteitsmodus is gestart.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="72"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>Dit systeem was opgestart in een &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;Om op te starten vanaf een EFI-omgeving, moet dit installatie programma een bootloader applicatie implementeren, zoals&lt;strong&gt;GRUB&lt;/strong&gt; of &lt;strong&gt;systemd-boot&lt;/strong&gt; op ee &lt;strong&gt;EFI Systeem Partitie&lt;/strong&gt;. Dit is automatisch, tenzij u kiest voor handmatig partitioneren, in dat geval moet je het kiezen of zelf aanmaken.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="84"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>Dit systeem was opgestart in een&lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;Om op te starten vanaf een BIOS-omgeving, moet deze installateur een bootloader te installeren, zoals &lt;strong&gt;GRUB&lt;/strong&gt;, hetzij aan het begin van een partitie of op de &lt;strong&gt;Master Boot Record&lt;/strong&gt; aan het begin van de partitietabel (voorkeur). Dit is automatisch, tenzij je kiest voor handmatig partitioneren, in dat geval moet je het zelf opzetten.</translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="59"/>
        <source>Master Boot Record of %1</source>
        <translation>Master Boot Record van %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="92"/>
        <source>Boot Partition</source>
        <translation>Bootpartitie</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="99"/>
        <source>System Partition</source>
        <translation>Systeempartitie</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="129"/>
        <source>Do not install a boot loader</source>
        <translation>Installeer geen boot loader</translation>
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
        <translation>Lege Pagina</translation>
    </message>
</context>
<context>
    <name>Calamares::DebugWindow</name>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="18"/>
        <source>Form</source>
        <translation>Forma</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="28"/>
        <source>GlobalStorage</source>
        <translation>GlobalStorage</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="38"/>
        <source>JobQueue</source>
        <translation>JobQueue</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="48"/>
        <source>Modules</source>
        <translation>Modules</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="61"/>
        <source>Type:</source>
        <translation>Type:</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="68"/>
        <location filename="../src/calamares/DebugWindow.ui" line="82"/>
        <source>none</source>
        <translation>geen</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="75"/>
        <source>Interface:</source>
        <translation>Interface:</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="102"/>
        <source>Crashes Calamares, so that Dr. Konqui can look at it.</source>
        <translation>Crasht Calamares, zodat Dr. Konqui ernaar kan kijken.</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="115"/>
        <source>Reloads the stylesheet from the branding directory.</source>
        <translation>Laadt de stylesheet opnieuw vanuit het huisstijl bestand.</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="141"/>
        <source>Uploads the session log to the configured pastebin.</source>
        <translation>Uploadt het sessielogboek naar de geconfigureerde pastebin.</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="144"/>
        <source>Send Session Log</source>
        <translation>Sessie log verzenden</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="118"/>
        <source>Reload Stylesheet</source>
        <translation>Herlaad Stijlblad</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="128"/>
        <source>Displays the tree of widget names in the log (for stylesheet debugging).</source>
        <translation>Toont de boom met widgetnamen in het logboek (voor foutopsporing in stylesheets).</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="131"/>
        <source>Widget Tree</source>
        <translation>Widget Tree</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="221"/>
        <source>Debug information</source>
        <translation>Debug informatie</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="88"/>
        <source>Set up</source>
        <translation>Set up</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="88"/>
        <source>Install</source>
        <translation>Installeer</translation>
    </message>
</context>
<context>
    <name>Calamares::FailJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="29"/>
        <source>Job failed (%1)</source>
        <translation>Opdracht mislukt (%1)</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="30"/>
        <source>Programmed job failure was explicitly requested.</source>
        <translation>Geprogrammeerde taakuitval werd expliciet gevraagd.</translation>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="201"/>
        <source>Done</source>
        <translation>Gereed</translation>
    </message>
</context>
<context>
    <name>Calamares::NamedJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="17"/>
        <source>Example job (%1)</source>
        <translation>Voorbeeld van taak (%1)</translation>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="43"/>
        <source>Run command &apos;%1&apos; in target system.</source>
        <translation>Voer opdracht &apos;%1&apos; uit in het doelsysteem.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="43"/>
        <source> Run command &apos;%1&apos;.</source>
        <translation>Voer opdracht &apos;%1&apos;​ uit.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="50"/>
        <source>Running command %1 %2</source>
        <translation>Opdracht %1 %2 aan het uitvoeren</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="194"/>
        <source>Running %1 operation.</source>
        <translation>Opdracht %1 aan het uitvoeren.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="223"/>
        <source>Bad working directory path</source>
        <translation>Ongeldig pad voor huidige map </translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="224"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>Werkmap %1 voor python taak %2 onleesbaar.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="230"/>
        <source>Bad main script file</source>
        <translation>Onjuist hoofdscriptbestand</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="231"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>Hoofdscriptbestand %1 voor python taak %2 onleesbaar.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="304"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>Boost.Python fout in taak &quot;%1&quot;.</translation>
    </message>
</context>
<context>
    <name>Calamares::QmlViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="67"/>
        <source>Loading ...</source>
        <translation>Laden ...</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="88"/>
        <source>QML Step &lt;i&gt;%1&lt;/i&gt;.</source>
        <translation>QML Step &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="268"/>
        <source>Loading failed.</source>
        <translation>Laden gefaald.</translation>
    </message>
</context>
<context>
    <name>Calamares::RequirementsChecker</name>
    <message>
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="94"/>
        <source>Requirements checking for module &lt;i&gt;%1&lt;/i&gt; is complete.</source>
        <translation>Vereisten voor module &lt;i&gt;%1&lt;/i&gt; controleren is compleet.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="115"/>
        <source>Waiting for %n module(s).</source>
        <translation><numerusform>Wachten op %n module(s).</numerusform><numerusform>Wachten op %n module(s).</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="116"/>
        <source>(%n second(s))</source>
        <translation><numerusform>(%n seconde(s))</numerusform><numerusform>(%n seconde(n))</numerusform></translation>
    </message>
    <message>
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="121"/>
        <source>System-requirements checking is complete.</source>
        <translation>Systeemvereisten controleren is voltooid.</translation>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="419"/>
        <source>&amp;Back</source>
        <translation>&amp;Terug</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="414"/>
        <source>&amp;Next</source>
        <translation>&amp;Volgende</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="444"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="403"/>
        <source>Cancel setup without changing the system.</source>
        <translation>Annuleer de installatie zonder het systeem te wijzigen.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="404"/>
        <source>Cancel installation without changing the system.</source>
        <translation>De installatie annuleren zonder het systeem te wijzigen.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="162"/>
        <source>Setup Failed</source>
        <translation>Setup mislukt</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="163"/>
        <source>Would you like to paste the install log to the web?</source>
        <translation>Wilt u het installatielog op het web plakken?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="177"/>
        <source>Install log posted to

%1

Link copied to clipboard</source>
        <translation>Installatie log gepost op

%1

Link gekopieerd naar klembord</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="183"/>
        <source>Install Log Paste URL</source>
        <translation>Installatie Log Paste URL</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="165"/>
        <source>The upload was unsuccessful. No web-paste was done.</source>
        <translation>De upload is mislukt. Er is geen web-paste gedaan.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="211"/>
        <source>Calamares Initialization Failed</source>
        <translation>Calamares initialisatie Mislukt</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="212"/>
        <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
        <translation>%1 kan niet worden geïnstalleerd. Calamares kon niet alle geconfigureerde modules laden. Dit is een probleem met de manier waarop Calamares door de distributie wordt gebruikt.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="218"/>
        <source>&lt;br/&gt;The following modules could not be loaded:</source>
        <translation>De volgende modules kunnen niet worden geladen:</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="332"/>
        <source>Continue with installation?</source>
        <translation>Doorgaan met de installatie?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="334"/>
        <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>Het %1 installatieprogramma staat op het punt om je schijf te wijzigen om %2 in te kunnen stellen.&lt;br/&gt;&lt;strong&gt;Je kunt deze wijzigingen niet ongedaan maken.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="340"/>
        <source>&amp;Set up now</source>
        <translation>&amp;Nu instellen</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="398"/>
        <source>&amp;Set up</source>
        <translation>&amp;Instellen</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="398"/>
        <source>&amp;Install</source>
        <translation>&amp;Installeer</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="400"/>
        <source>Setup is complete. Close the setup program.</source>
        <translation>De installatie is voltooid. Sluit het installatieprogramma.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="517"/>
        <source>Cancel setup?</source>
        <translation>Installatie annuleren?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="517"/>
        <source>Cancel installation?</source>
        <translation>Installatie annuleren?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="518"/>
        <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
        <translation>Wil je echt het huidige instellingsproces annuleren?
Het installatieprogramma wordt afgesloten en alle wijzigingen gaan verloren.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="520"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>Wil je echt de huidige installatie proces annuleren?
Het installeerprogramma zal stoppen en alle wijzigingen zullen verloren gaan.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="88"/>
        <source>&amp;Yes</source>
        <translation>&amp;Ja</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="89"/>
        <source>&amp;No</source>
        <translation>&amp;Nee</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="90"/>
        <source>&amp;Close</source>
        <translation>&amp;Afsluiten</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="332"/>
        <source>Continue with setup?</source>
        <translation>Doorgaan met setup?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="337"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>Het %1 installeer programma zal nu wijzigingen in je schijf maken om %2 te installeren.&lt;br/&gt;&lt;strong&gt;Je zult niet in staat zijn om deze veranderingen ongedaan te maken. .&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="340"/>
        <source>&amp;Install now</source>
        <translation>&amp;Nu installeren</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="348"/>
        <source>Go &amp;back</source>
        <translation>Ga &amp;terug</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="425"/>
        <source>&amp;Done</source>
        <translation>&amp;Klaar</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="401"/>
        <source>The installation is complete. Close the installer.</source>
        <translation>De installatie is voltooid. Sluit het installatieprogramma.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="179"/>
        <source>Error</source>
        <translation>Fout</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="162"/>
        <source>Installation Failed</source>
        <translation>Installatie Mislukt</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="294"/>
        <source>Unknown exception type</source>
        <translation>Onbekend uitzonderingstype</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="312"/>
        <source>unparseable Python error</source>
        <translation>onuitvoerbare Python fout</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="356"/>
        <source>unparseable Python traceback</source>
        <translation>onuitvoerbare Python traceback</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="363"/>
        <source>Unfetchable Python error.</source>
        <translation>Onbekende Python fout.</translation>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="370"/>
        <source>%1 Setup Program</source>
        <translation>%1 Installatie Programma</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="371"/>
        <source>%1 Installer</source>
        <translation>%1 Installatieprogramma</translation>
    </message>
</context>
<context>
    <name>ChangeFilesystemLabelJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="32"/>
        <source>Set filesystem label on %1.</source>
        <translation>Zet bestandssysteemlabel op %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="39"/>
        <source>Set filesystem label &lt;strong&gt;%1&lt;/strong&gt; to partition &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Zet bestandssysteemlabel &lt;strong&gt;%1&lt;/strong&gt; op partitie &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="70"/>
        <source>The installer failed to update partition table on disk &apos;%1&apos;.</source>
        <translation>Installatieprogramma heeft gefaald om de partitietabel bij te werken op schijf &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CheckerContainer</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="38"/>
        <source>Gathering system information...</source>
        <translation>Systeeminformatie verzamelen ...</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="141"/>
        <source>After:</source>
        <translation>Na:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1014"/>
        <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
        <translation>%1 zal worden ingekrompen tot %2MiB en een nieuwe %3MiB partitie zal worden gecreëerd for %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1339"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1376"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1398"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1423"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;Wis schijf&lt;/strong&gt;&lt;br/&gt;Dit zal alle data &lt;font color=&quot;red&quot;&gt;verwijderen&lt;/font&gt; welke momenteel aanwezig is op het geselecteerde opslag apparaat.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1343"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1372"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1394"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1419"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;Installeer naast&lt;/strong&gt;&lt;br/&gt;Het installatie programma zal een partitie inkrimpen om ruimte te maken voor %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1347"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1381"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1402"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1427"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;Vervang een partitie&lt;/strong&gt;&lt;br/&gt;Vervangt een partitie met %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1071"/>
        <source>Boot loader location:</source>
        <translation>Bootloader locatie:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="139"/>
        <source>Select storage de&amp;vice:</source>
        <translation>Kies een opslag de&amp;vice:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="140"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="996"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1042"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1133"/>
        <source>Current:</source>
        <translation>Huidig:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="861"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>Hergebruik %1 als home partitie voor %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="997"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Selecteer een partitie om in te krimpen, dan sleep de onderste balk om de grootte aan te passen&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1124"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Selecteer een partitie om op te installeren&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1183"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>Een EFI systeem partitiie kan nergens gevonden worden op dit systeem.  Ga AUB terug en gebruik de handmatige schijfindeling om %1 op te zetten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1191"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>De EFI systeem partitie op %1 zal gebruikt worden om %2 op te starten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1199"/>
        <source>EFI system partition:</source>
        <translation>EFI systeempartitie:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1334"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Dit opslagapparaat heeft ogenschijnlijk geen besturingssysteem beschikbaar. Wat wil je doen?&lt;br/&gt;Je zult in staat zijn om te beoordelen en je keuzes te bevestigen voordat een wijziging wordt aangebracht aan het opslagapparaat.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1366"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Dit opslagapparaat heeft %1 geinstalleerd. Wat wil je doen?&lt;br/&gt;Je zult in staat zijn om te beoordelen en je keuzes te bevestigen voordat een wijziging wordt aangebracht aan het opslagapparaat.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1389"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Dit opslagapparaat heeft een besturingssysteem geinstalleerd. Wat wil je doen?&lt;br/&gt;Je zult in staat zijn om te beoordelen en je keuzes te bevestigen voordat een wijziging wordt aangebracht aan het opslagapparaat.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1414"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Dit opslagapparaat heeft meerdere besturingssystemen geinstalleerd. Wat wil je doen?&lt;br/&gt;Je zult in staat zijn om te beoordelen en je keuzes te bevestigen voordat een wijziging wordt aangebracht aan het opslagapparaat.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1486"/>
        <source>This storage device already has an operating system on it, but the partition table &lt;strong&gt;%1&lt;/strong&gt; is different from the needed &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</source>
        <translation>Dit opslagapparaat heeft al een besturingssysteem, maar de partitietabel &lt;strong&gt;%1&lt;/strong&gt; is anders dan de benodigde &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1509"/>
        <source>This storage device has one of its partitions &lt;strong&gt;mounted&lt;/strong&gt;.</source>
        <translation>Dit opslagapparaat heeft een van zijn partities &lt;strong&gt;mounted&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1514"/>
        <source>This storage device is a part of an &lt;strong&gt;inactive RAID&lt;/strong&gt; device.</source>
        <translation>Dit opslagapparaat maakt deel uit van een &lt;strong&gt;inactief RAID&lt;/strong&gt; apparaat.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1641"/>
        <source>No Swap</source>
        <translation>Geen Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1649"/>
        <source>Reuse Swap</source>
        <translation>Swap Hergebruiken</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1652"/>
        <source>Swap (no Hibernate)</source>
        <translation>Swap (geen Hibernate)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1655"/>
        <source>Swap (with Hibernate)</source>
        <translation>Swap (met Hibernate)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1658"/>
        <source>Swap to file</source>
        <translation>Swap to file</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1671"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.&lt;br/&gt;Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;,&lt;br/&gt;either use an existing without formatting or create one.</source>
        <translation>&lt;strong&gt;Handmatige partitionering&lt;/strong&gt;&lt;br/&gt;Je kunt partities zelf creeren of aanpassen.&lt;br/&gt;Het hebben van een GPT partitietabel en &lt;strong&gt;fat32 512Mb /boot partitie is een must voor UEFI installaties&lt;/strong&gt;,&lt;br/&gt;ofwel gebruik maken van een bestaande, zonder formatteren of creeer.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="18"/>
        <source>Form</source>
        <translation>From</translation>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="42"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>Wis mounts voor partitionering operaties op %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="49"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>Wissen van mounts voor partitionering operaties op %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="224"/>
        <source>Cleared all mounts for %1</source>
        <translation>Ontruimd alle mounts voor %1</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="32"/>
        <source>Clear all temporary mounts.</source>
        <translation>Ontruimd alle tijdelijke mounts.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="39"/>
        <source>Clearing all temporary mounts.</source>
        <translation>Ontruiming van alle tijdelijke mounts.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="52"/>
        <source>Cannot get list of temporary mounts.</source>
        <translation>Kan lijst van de tijdelijke mounts niet krijgen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="97"/>
        <source>Cleared all temporary mounts.</source>
        <translation>Alle tijdelijke mounts geruimd.</translation>
    </message>
</context>
<context>
    <name>CommandList</name>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="142"/>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="155"/>
        <source>Could not run command.</source>
        <translation>Kan de opdracht niet uitvoeren.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="143"/>
        <source>The command runs in the host environment and needs to know the root path, but no rootMountPoint is defined.</source>
        <translation>De opdracht wordt uitgevoerd in de hostomgeving en moet het hoofdpad kennen, maar er is geen rootMountPoint gedefinieerd.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="156"/>
        <source>The command needs to know the user&apos;s name, but no username is defined.</source>
        <translation>De opdracht moet de naam van de gebruiker kennen, maar er is geen gebruikersnaam gedefinieerd.</translation>
    </message>
</context>
<context>
    <name>Config</name>
    <message>
        <location filename="../src/modules/keyboard/Config.cpp" line="354"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation>Stel toetsenbordmodel in op %1.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/Config.cpp" line="361"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>Stel toetsenbordindeling in op %1/%2.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="342"/>
        <source>Set timezone to %1/%2.</source>
        <translation>Instellen tijdzone naar %1/%2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="380"/>
        <source>The system language will be set to %1.</source>
        <translation>De systeemtaal wordt ingesteld op %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="387"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation>De landinstellingen voor cijfers en datums worden ingesteld op %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="55"/>
        <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>Deze computer voldoet niet aan de minimale installatievereisten voor %1.&lt;br/&gt;Installatie kan niet doorgaan. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="59"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>Deze computer voldoet niet aan de minimale installatievereisten voor %1.&lt;br/&gt;Installatie kan niet doorgaan. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="66"/>
        <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
        <translation>Deze computer voldoet niet aan een aantal van de aanbevolen vereisten voor installatie op %1.&lt;br/&gt;De installatie kan doorgaan, maar sommige functies zijn mogelijk uitgeschakeld.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="70"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation>Deze computer voldoet niet aan een aantal van de aanbevolen vereisten voor installatie op %1.&lt;br/&gt;De installatie kan doorgaan, maar sommige functies zijn mogelijk uitgeschakeld.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="80"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation>Dit programma zal je wat vragen stellen en %2 instellen op je computer.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="250"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Welkom bij het Calamares-installatieprogramma voor %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="251"/>
        <source>&lt;h1&gt;Welcome to %1 setup&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Welkom bij %1 setup.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="255"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Welkom bij het Calamares-installatieprogramma voor %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="256"/>
        <source>&lt;h1&gt;Welcome to the %1 installer&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Welkom bij het %1 installatieprogramma&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="94"/>
        <source>Summary</source>
        <translation>Samenvatting</translation>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="98"/>
        <source>This is an overview of what will happen once you start the setup procedure.</source>
        <translation>Dit is een overzicht van wat er zal gebeuren als je eenmaal de installatie procedure start.</translation>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="103"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>Dit is een overzicht van wat er zal gebeuren als je eenmaal de installatie procedure start.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="217"/>
        <source>Your username is too long.</source>
        <translation>Je gebruikersnaam is the lang.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="223"/>
        <source>&apos;%1&apos; is not allowed as username.</source>
        <translation>&apos;%1&apos; is niet toegestaan als gebruikersnaam.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="230"/>
        <source>Your username must start with a lowercase letter or underscore.</source>
        <translation>Uw gebruikersnaam moet beginnen met een kleine letter of een onderstrepingsteken.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="234"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation>Alleen kleine letters, cijfers, onderstrepingstekens en koppeltekens zijn toegestaan.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="279"/>
        <source>Your hostname is too short.</source>
        <translation>De hostname is te kort.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="283"/>
        <source>Your hostname is too long.</source>
        <translation>Je hostname is te lang.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="289"/>
        <source>&apos;%1&apos; is not allowed as hostname.</source>
        <translation>&apos;%1&apos; is niet toegestaan als hostname.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="295"/>
        <source>Only letters, numbers, underscore and hyphen are allowed.</source>
        <translation>Alleen letters, cijfers, onderstrepingstekens en koppeltekens zijn toegestaan.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="534"/>
        <source>Your passwords do not match!</source>
        <translation>De wachtwoorden komen niet overeen!</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="548"/>
        <source>OK!</source>
        <translation>OK!</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="145"/>
        <source>Setup Failed</source>
        <translation>Setup mislukt</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="145"/>
        <source>Installation Failed</source>
        <translation>Installatie Mislukt</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="147"/>
        <source>The setup of %1 did not complete successfully.</source>
        <translation>De setup van %1 is niet voltooid.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="148"/>
        <source>The installation of %1 did not complete successfully.</source>
        <translation>De installatie van %1 is niet met succes voltooid..</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="152"/>
        <source>Setup Complete</source>
        <translation>Setup Afgerond</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="153"/>
        <source>Installation Complete</source>
        <translation>Installatie Afgerond</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="154"/>
        <source>The setup of %1 is complete.</source>
        <translation>De setup van %1 is voltooid.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="155"/>
        <source>The installation of %1 is complete.</source>
        <translation>De installatie van %1 is voltooid.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="86"/>
        <source>Package Selection</source>
        <translation>Pakketten Selectie</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="88"/>
        <source>Please pick a product from the list. The selected product will be installed.</source>
        <translation>Kies een product uit de lijst. Het geselecteerde product wordt geïnstalleerd.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="177"/>
        <source>Install option: &lt;strong&gt;%1&lt;/strong&gt;</source>
        <translation>Installatie option: &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="177"/>
        <source>None</source>
        <translation>Geen</translation>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="18"/>
        <source>Create a Partition</source>
        <translation>Maak partitie</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="52"/>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="59"/>
        <source>Partition &amp;Type:</source>
        <translation>Partitie&amp;type:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="71"/>
        <source>&amp;Primary</source>
        <translation>&amp;Primair</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="81"/>
        <source>E&amp;xtended</source>
        <translation>&amp;Uitgebreid</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="123"/>
        <source>Fi&amp;le System:</source>
        <translation>Fi&amp;le Systeem:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="155"/>
        <source>LVM LV name</source>
        <translation>LVM LV naam</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="192"/>
        <source>Flags:</source>
        <translation>Parameters:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="231"/>
        <source>Label for the filesystem</source>
        <translation>Label voor het bestandssysteem</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="241"/>
        <source>FS Label:</source>
        <translation>FS Label:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="165"/>
        <source>&amp;Mount Point:</source>
        <translation>Aan&amp;koppelpunt</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="42"/>
        <source>Si&amp;ze:</source>
        <translation>&amp;Grootte:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="65"/>
        <source>En&amp;crypt</source>
        <translation>En&amp;crypt</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="191"/>
        <source>Logical</source>
        <translation>Logisch</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="196"/>
        <source>Primary</source>
        <translation>Primair</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="215"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="301"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Mountpoint al in gebruik. Gaarne een andere selecteren</translation>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="113"/>
        <source>Create new %1MiB partition on %3 (%2) with entries %4.</source>
        <translation>Creëer nieuwe %1MiB partitie op %3 (%2) met bestandssysteem %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="121"/>
        <source>Create new %1MiB partition on %3 (%2).</source>
        <translation>Maak een nieuwe %1MiB partitie op %3 (%2).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="128"/>
        <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
        <translation>Creëer nieuwe %2MiB partitie op %4 (%3) met bestandssysteem %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="145"/>
        <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2) with entries &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation>Creëer nieuw &lt;strong&gt;%1MiB&lt;/strong&gt; partitie op &lt;strong&gt;%3&lt;/strong&gt; (%2) met bestandssysteem &lt;em&gt;%4&lt;/em&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="154"/>
        <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2).</source>
        <translation>Creëer​ nieuw &lt;strong&gt;%1MiB&lt;/strong&gt; partitie op &lt;strong&gt;%3&lt;/strong&gt; (%2).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="161"/>
        <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Creëer nieuwe &lt;strong&gt;%2MiB&lt;/strong&gt; partitie op &lt;strong&gt;%4&lt;/strong&gt; (%3) met bestandssysteem&lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="186"/>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="189"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>Aanmaken van een nieuwe %1 partitie op %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="201"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>Het installatieprogramma kon geen partitie aanmaken op schijf &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="24"/>
        <source>Create Partition Table</source>
        <translation>Maak partitietabel</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="43"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>Een nieuwe partitietabel aanmaken zal alle bestaande gegevens op de schijf wissen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="69"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>Welk type partitietabel wens je aan te maken?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="76"/>
        <source>Master Boot Record (MBR)</source>
        <translation>Master Boot Record (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="86"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>GUID Partitietabel (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="39"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>Maak een nieuwe %1 partitietabel op %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="47"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Maak een nieuwe &lt;strong&gt;%1&lt;/strong&gt; partitietabel op &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="57"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>Aanmaken van een nieuwe %1 partitietabel op %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="67"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>Het installatieprogramma kon geen partitietabel aanmaken op %1.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="36"/>
        <source>Create user %1</source>
        <translation>Maak gebruiker %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="43"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Maak gebruiker &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="50"/>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="143"/>
        <source>Creating user %1</source>
        <translation>Gebruiker %1 aanmaken</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="126"/>
        <source>Preserving home directory</source>
        <translation>De homedirectory behouden</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="151"/>
        <source>Configuring user %1</source>
        <translation>Gebruiker %1 configureren</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="159"/>
        <source>Setting file permissions</source>
        <translation>Bestandsrechten instellen</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="28"/>
        <source>Create Volume Group</source>
        <translation>Creër Volume Group</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="31"/>
        <source>Create new volume group named %1.</source>
        <translation>Maak een nieuwe volumegroep met de naam %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="37"/>
        <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Maak een nieuwe volumegroep met de naam &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="43"/>
        <source>Creating new volume group named %1.</source>
        <translation>Maak een nieuwe volumegroep met de naam %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="55"/>
        <source>The installer failed to create a volume group named &apos;%1&apos;.</source>
        <translation>Het installatieprogramma kan geen volumegroep met de naam &apos;%1&apos; maken.</translation>
    </message>
</context>
<context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="24"/>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="36"/>
        <source>Deactivate volume group named %1.</source>
        <translation>Deactiveer volumegroep met de naam %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="30"/>
        <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Deactiveer de volumegroep genaamd &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="48"/>
        <source>The installer failed to deactivate a volume group named %1.</source>
        <translation>Het installatieprogramma kan de volumegroep genaamd %1 niet deactiveren.</translation>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="31"/>
        <source>Delete partition %1.</source>
        <translation>Verwijder partitie %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="38"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Verwijder partitie &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="45"/>
        <source>Deleting partition %1.</source>
        <translation>Verwijdering van partitie %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="56"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>Het installatieprogramma kon partitie %1 niet verwijderen.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="140"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>Het type &lt;strong&gt;partitietabel&lt;/strong&gt; momenteel aanwezig op het geselecteerde opslagapparaat.&lt;br&gt;&lt;br&gt;De enige manier om het type partitietabel te veranderen is om te wissen en opnieuw de partitietabel van de grond af in te stellen, welke alle gegevens op het opslagapparaat vernietigt.&lt;br&gt;Dit installeer programma zal de huidige partitietabel behouden, tenzij je expliciet anders kiest&lt;br&gt;In geval van twijfel, op moderne systemen heeft GPT de voorkeur.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="97"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>Dit opslag apparaat heeft een &lt;strong&gt;%1&lt;/strong&gt; partitie tabel.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="104"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>Dit is een &lt;strong&gt;loop&lt;/strong&gt; opslag apparaat.&lt;br&gt;&lt;br&gt;Dit is niet een echte partitie tabel, het is een pseudo-apparaat dat een bestand toegankelijk maakt als een blok apparaat. Dit soort setup bevat meestal slechts een enkel bestandssysteem.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="111"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>Het installeer programma &lt;strong&gt;kan geen partition tabel vinden&lt;/strong&gt; op het geselecteerde opslag apparaat.&lt;br&gt;&lt;br&gt;Het apparaat heeft ofwel geen partitietabel, de partitietabel is beschadigd of is van een onbekend type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="121"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;Dit is de aanbevolen partitietabel type voor moderne systemen die starten vanuit een &lt;strong&gt;EFI&lt;/strong&gt; boot omgeving.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="127"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;Dit type partitietabel is alleen aan te raden op oudere systemen die uitgaan van een&lt;strong&gt;BIOS&lt;/strong&gt; boot omgeving. Voor de meeste toepassingen heeft GPT de voorkeur.&lt;br&gt;&lt;strong&gt;Opgelet:&lt;/strong&gt; de MBR partitietabel is een verouderde standaard uit de MS-DOS tijd.&lt;br&gt;Slechts 4 &lt;em&gt;primaire&lt;/em&gt; partities kunnen worden gecreerd, en van die 4, een kan een &lt;em&gt;extended&lt;/em&gt; partitie zijn, welke op hun beurt vele &lt;em&gt;logical&lt;/em&gt; partities kan bevatten.</translation>
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
        <translation>Bestaande Partitie Aanpassen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="54"/>
        <source>Content:</source>
        <translation>Inhoud:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="64"/>
        <source>&amp;Keep</source>
        <translation>&amp;Behoud</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="74"/>
        <source>Format</source>
        <translation>Formatteren</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="93"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>Opgelet: Een partitie formatteren zal alle bestaande gegevens wissen.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="103"/>
        <source>&amp;Mount Point:</source>
        <translation>Aan&amp;koppelpunt:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="123"/>
        <source>Si&amp;ze:</source>
        <translation>Si&amp;ze:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="133"/>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="140"/>
        <source>Fi&amp;le System:</source>
        <translation>Fi&amp;le Systeem:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="153"/>
        <source>Flags:</source>
        <translation>Parameters:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="186"/>
        <source>Label for the filesystem</source>
        <translation>Label voor het bestandssysteem</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="196"/>
        <source>FS Label:</source>
        <translation>FS Label:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="291"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Mountpoint al in gebruik. Gaarne een andere selecteren</translation>
    </message>
</context>
<context>
    <name>EncryptWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="18"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="36"/>
        <source>En&amp;crypt system</source>
        <translation>En&amp;crypt systeem</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="46"/>
        <source>Passphrase</source>
        <translation>Wachtwoordzin</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="56"/>
        <source>Confirm passphrase</source>
        <translation>Bevestig wachtwoordzin</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="104"/>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="114"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>Gaarne hetzelfde wachtwoord in beide vakken invullen.</translation>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="167"/>
        <source>Set partition information</source>
        <translation>Instellen partitie-informatie</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="196"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition with features &lt;em&gt;%3&lt;/em&gt;</source>
        <translation>Installeer %1 op &lt;strong&gt;nieuw&lt;/strong&gt; %2 systeem partitie met kenmerken &lt;em&gt;%3&lt;/em&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="204"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>Installeer %1 op &lt;strong&gt;nieuw&lt;/strong&gt; %2 systeem partitie.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="213"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt; and features &lt;em&gt;%3&lt;/em&gt;.</source>
        <translation>Set up &lt;strong&gt;nieuwe&lt;/strong&gt; %2 partitie met aankoppelingspunt &lt;strong&gt;%1&lt;/strong&gt; en kenmerken &lt;em&gt;%3&lt;/em&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="221"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;%3.</source>
        <translation>Set up &lt;strong&gt;nieuwe&lt;/strong&gt; %2 partitie met aanknopingspunt &lt;strong&gt;%1&lt;/strong&gt; %3.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="235"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt; with features &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation>Installeer %2 on %3 systeem partitie &lt;strong&gt;%1&lt;/strong&gt; met kenmerken &lt;em&gt;%4&lt;/em&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="254"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt; and features &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation>Set up %3 partitie &lt;strong&gt;%1&lt;/strong&gt; met aankoppelingspunt &lt;strong&gt;%2&lt;/strong&gt; en kenmereken &lt;em&gt;%4&lt;/em&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="263"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;%4.</source>
        <translation>Set up %3 partitie &lt;strong&gt;%1&lt;/strong&gt; met aanknopingspunt &lt;strong&gt;%2&lt;/strong&gt; %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="244"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Installeer %2 op %3 systeem partitie &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="278"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Installeer de boot loader op &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="287"/>
        <source>Setting up mount points.</source>
        <translation>Opzetten van mount points.</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="18"/>
        <source>Form</source>
        <translation>From</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="102"/>
        <source>&amp;Restart now</source>
        <translation>&amp;Nu herstarten</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="72"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
        <translation>&lt;h1&gt;Helemaal klaar.&lt;/h1&gt;&lt;br/&gt;%1 is ingesteld op uw computer.&lt;br/&gt;Je kunt nu beginnen met het gebruik van je nieuwe systeem.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="76"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Wanneer dit selectievakje is ingeschakeld, wordt uw systeem onmiddellijk opnieuw gestart wanneer u op &lt;span style=&quot;font-style:italic;&quot;&gt;Klaar&lt;/span&gt; klikt of het installatieprogramma sluit.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="84"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;Alles gereed.&lt;/h1&gt;&lt;br/&gt;%1 is geinstalleerd op je computer.&lt;br/&gt;Je kunt nu opnieuw opstarten in uw nieuwe systeem, of de %2 Live environment blijven gebruiken.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="89"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Wanneer dit selectievakje is ingeschakeld, wordt je systeem onmiddellijk opnieuw gestart wanneer je op &lt;span style=&quot;font-style:italic;&quot;&gt;Klaar&lt;/span&gt; klikt of het installatieprogramma sluit&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="102"/>
        <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;Installatie mislukt&lt;/h1&gt;&lt;br/&gt;%1 is niet ingesteld op je computer.&lt;br/&gt;Het foutbericht was: %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="110"/>
        <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;Installatie Mislukt&lt;/h1&gt;&lt;br/&gt;%1 is niet op uw computer geïnstalleerd.&lt;br/&gt;De fout melding was: %2.</translation>
    </message>
</context>
<context>
    <name>FinishedQmlViewStep</name>
    <message>
        <location filename="../src/modules/finishedq/FinishedQmlViewStep.cpp" line="35"/>
        <source>Finish</source>
        <translation>Klaar</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="46"/>
        <source>Finish</source>
        <translation>Klaar</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="36"/>
        <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
        <translation>Formateer partitie %1 (bestandssysteem: %2, grootte: %3 MiB) op %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="47"/>
        <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Formatteer &lt;strong&gt;%3MiB&lt;/strong&gt; partitie &lt;strong&gt;%1&lt;/strong&gt; met bestandssysteem &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="58"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>Formatteren van partitie %1 met file systeem %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="72"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>Installatieprogramma heeft gefaald om partitie %1 te formateren op schijf %2.</translation>
    </message>
</context>
<context>
    <name>GeneralRequirements</name>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="155"/>
        <source>has at least %1 GiB available drive space</source>
        <translation>over ten minste %1 GiB vrije schijfruimte beschikt</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="157"/>
        <source>There is not enough drive space. At least %1 GiB is required.</source>
        <translation>Het systeem heeft niet genoeg werkgeheugen. Ten minste %1 GiB vereist.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="166"/>
        <source>has at least %1 GiB working memory</source>
        <translation>over ten minste 1% GiB werkgeheugen beschikt</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="168"/>
        <source>The system does not have enough working memory. At least %1 GiB is required.</source>
        <translation>Het systeem heeft niet genoeg werkgeheugen. Ten minste %1 GiB vereist.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="177"/>
        <source>is plugged in to a power source</source>
        <translation>is aangesloten op een stroombron</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="178"/>
        <source>The system is not plugged in to a power source.</source>
        <translation>Dit systeem is niet aangesloten op een stroombron.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="185"/>
        <source>is connected to the Internet</source>
        <translation>is verbonden met het Internet</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="186"/>
        <source>The system is not connected to the Internet.</source>
        <translation>Dit systeem is niet verbonden met het internet.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="193"/>
        <source>is running the installer as an administrator (root)</source>
        <translation>voert het installatieprogramma uit als systeembeheerder (root)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="196"/>
        <source>The setup program is not running with administrator rights.</source>
        <translation>Het installeer programma is niet actief met beheerdersrechten.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="197"/>
        <source>The installer is not running with administrator rights.</source>
        <translation>Het installeer programma is niet actief met beheerdersrechten.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="205"/>
        <source>has a screen large enough to show the whole installer</source>
        <translation>heeft een scherm dat groot genoeg is om het hele installatieprogramma te tonen</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="208"/>
        <source>The screen is too small to display the setup program.</source>
        <translation>Het scherm is te klein om het installatieprogramma weer te geven.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="209"/>
        <source>The screen is too small to display the installer.</source>
        <translation>Het scherm is te klein om het installatieprogramma weer te geven.</translation>
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
        <translation>OEM Batch Identifier</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="40"/>
        <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Kan mappen &lt;code&gt;%1&lt;/code&gt; niet maken.</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="53"/>
        <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Kan bestand &lt;code&gt;%1&lt;/code&gt;niet openen.</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
        <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Kan niet naar bestand &lt;code&gt;%1&lt;/code&gt; schrijven.</translation>
    </message>
</context>
<context>
    <name>InitcpioJob</name>
    <message>
        <location filename="../src/modules/initcpio/InitcpioJob.cpp" line="31"/>
        <source>Creating initramfs with mkinitcpio.</source>
        <translation>Initiële initramfs aanmaken met mkinitcpio.</translation>
    </message>
</context>
<context>
    <name>KeyboardQmlViewStep</name>
    <message>
        <location filename="../src/modules/keyboardq/KeyboardQmlViewStep.cpp" line="32"/>
        <source>Keyboard</source>
        <translation>Toetsenbord</translation>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="42"/>
        <source>Keyboard</source>
        <translation>Toetsenbord</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="23"/>
        <source>System locale setting</source>
        <translation>Systeem locale instelling</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="30"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>De instelling systeem locale heeft invloed op de taal en tekenset voor sommige command line interface-elementen.&lt;br/&gt;De huidige instelling is &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="54"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="55"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="18"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="26"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Licentieovereenkomst&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="135"/>
        <source>I accept the terms and conditions above.</source>
        <translation>Ik accepteer de algemene voorwaarden hierboven.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="137"/>
        <source>Please review the End User License Agreements (EULAs).</source>
        <translation>Gaarne de End User License Agreements (EULAs) doorlezen.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="142"/>
        <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation>Deze opstelling procedure zal proprietary software installeren dat onderworpen is aan licentievoorwaarden.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="145"/>
        <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation>Als u niet akkoord gaat met de voorwaarden, kan de installatieprocedure niet doorgaan.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="150"/>
        <source>In case non-free was selected, this installer will install proprietary packages &lt;br/&gt;that have additional End User License Agreements (EULAs) attached to them.</source>
        <translation>In het geval dat non-free was selecteerd, zal dit installeerprogramma proprietary pakketten installeren &lt;br/&gt;die extra End User License Agreements (EULAs) bevatten.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="153"/>
        <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation>Als u niet akkoord gaat met de voorwaarden, zal proprietary software niet geïnstalleerd worden, en open source alternatieven zullen in plaats daarvan worden gebruikt.</translation>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="43"/>
        <source>License</source>
        <translation>Licentie</translation>
    </message>
</context>
<context>
    <name>LicenseWidget</name>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="88"/>
        <source>URL: %1</source>
        <translation>URL: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="109"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation>&lt;strong&gt;%1 bestuurprogramma&lt;/strong&gt;&lt;br/&gt;van %2</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="116"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation>&lt;strong&gt;%1 grafisch bestuurprogramma&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;van %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="122"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;van %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="128"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;van %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="134"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1 pakket&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;van %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="140"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;van %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="163"/>
        <source>File: %1</source>
        <translation>Bestand: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
        <source>Hide license text</source>
        <translation>Licentietekst verbergen</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
        <source>Show the license text</source>
        <translation>Toon de licentietekst</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="190"/>
        <source>Open license agreement in browser.</source>
        <translation>Open de licentieovereenkomst in browser.</translation>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="130"/>
        <source>Region:</source>
        <translation>Regio:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="131"/>
        <source>Zone:</source>
        <translation>Zone:</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="132"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="133"/>
        <source>&amp;Change...</source>
        <translation>&amp;Wijzig...</translation>
    </message>
</context>
<context>
    <name>LocaleQmlViewStep</name>
    <message>
        <location filename="../src/modules/localeq/LocaleQmlViewStep.cpp" line="32"/>
        <source>Location</source>
        <translation>Locatie</translation>
    </message>
</context>
<context>
    <name>LocaleTests</name>
    <message>
        <location filename="../src/libcalamares/locale/Tests.cpp" line="273"/>
        <source>Quit</source>
        <translation>Afsluiten</translation>
    </message>
</context>
<context>
    <name>LocaleViewStep</name>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="76"/>
        <source>Location</source>
        <translation>Plaats</translation>
    </message>
</context>
<context>
    <name>LuksBootKeyFileJob</name>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="30"/>
        <source>Configuring LUKS key file.</source>
        <translation>Configureer LUKS key bestand.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="186"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="194"/>
        <source>No partitions are defined.</source>
        <translation>Er zijn geen partities gedefinieerd.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="229"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="236"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="244"/>
        <source>Encrypted rootfs setup error</source>
        <translation>Gecodeerde rootfs setup-fout</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="230"/>
        <source>Root partition %1 is LUKS but no passphrase has been set.</source>
        <translation>Rootpartitie %1 is LUKS maar er is geen wachtwoordzin ingesteld.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="237"/>
        <source>Could not create LUKS key file for root partition %1.</source>
        <translation>Kan LUKS-sleutelbestand voor rootpartitie %1 niet maken.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="245"/>
        <source>Could not configure LUKS key file on partition %1.</source>
        <translation>Kon LUKS-sleutelbestand niet configureren op partitie %1.</translation>
    </message>
</context>
<context>
    <name>MachineIdJob</name>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="37"/>
        <source>Generate machine-id.</source>
        <translation>Genereer machine-id</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="53"/>
        <source>Configuration Error</source>
        <translation>Configuratie Fout</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="54"/>
        <source>No root mount point is set for MachineId.</source>
        <translation>Er is geen root-koppelpunt ingesteld voor MachineId.</translation>
    </message>
</context>
<context>
    <name>Map</name>
    <message>
        <location filename="../src/modules/localeq/Map.qml" line="44"/>
        <location filename="../src/modules/localeq/Map.qml" line="68"/>
        <source>Timezone: </source>
        <translation>Tijdzone:</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Map.qml" line="232"/>
        <source>Please select your preferred location on the map so the installer can suggest the locale
            and timezone settings for you. You can fine-tune the suggested settings below. Search the map by dragging
            to move and using the +/- buttons to zoom in/out or use mouse scrolling for zooming.</source>
        <translation>Selecteer uw favoriete locatie op de kaart zodat het installatieprogramma de landinstellingen
            en tijdzone-instellingen voor u kan voorstellen. U kunt de onderstaande voorgestelde instellingen nauwkeurig afstemmen. Zoek op de kaart door te slepen
            om te verplaatsen en gebruik de +/- knoppen om in/uit te zoomen of gebruik de muis om te zoomen.</translation>
    </message>
</context>
<context>
    <name>NotesQmlViewStep</name>
    <message>
        <location filename="../src/modules/notesqml/NotesQmlViewStep.cpp" line="23"/>
        <source>Notes</source>
        <translation>Notities</translation>
    </message>
</context>
<context>
    <name>OEMPage</name>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="32"/>
        <source>Ba&amp;tch:</source>
        <translation>Ba&amp;tch:</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="42"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Voer hier een batch-ID in. Dit wordt opgeslagen in het doelsysteem.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="52"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuratie&lt;/h1&gt;&lt;p&gt;Calamares zal OEM settings gebruiken tijdens het configureren van het doelsysteem.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>OEMViewStep</name>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="122"/>
        <source>OEM Configuration</source>
        <translation>OEM Configuratie</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="128"/>
        <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Set de OEM Batch Identifier naar &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
</context>
<context>
    <name>Offline</name>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="41"/>
        <source>Select your preferred Region, or use the default settings.</source>
        <translation>Selecteer je voorkeur voor Regio, of gebruik de standaardinstellingen.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="98"/>
        <location filename="../src/modules/localeq/Offline.qml" line="173"/>
        <location filename="../src/modules/localeq/Offline.qml" line="217"/>
        <source>Timezone: %1</source>
        <translation>Tijdzone: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="115"/>
        <source>Select your preferred Zone within your Region.</source>
        <translation>Selecteer uw Voorkeurszone binnen uw Regio.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="186"/>
        <source>Zones</source>
        <translation>Zones</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="233"/>
        <source>You can fine-tune Language and Locale settings below.</source>
        <translation>Je kunt de instellingen voor taal en landinstelling hieronder verfijnen.</translation>
    </message>
</context>
<context>
    <name>Offline2</name>
    <message>
        <location filename="../src/modules/localeq/Offline2.qml" line="54"/>
        <source>Timezone: %1</source>
        <translation>Tijdzone: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline2.qml" line="69"/>
        <source>Select a timezone. You can fine-tune Language and Locale settings below.</source>
        <translation>Selecteer een tijdzone. Je kunt de instellingen voor taal en landinstelling hieronder verfijnen.</translation>
    </message>
</context>
<context>
    <name>Offline3</name>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="51"/>
        <source>Select your preferred Region, or use the default one based on your current location.</source>
        <translation>Selecteer je voorkeur voor regio, of gebruik het standaardmodel gebaseerd op je huidige locatie.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="111"/>
        <location filename="../src/modules/localeq/Offline3.qml" line="188"/>
        <location filename="../src/modules/localeq/Offline3.qml" line="234"/>
        <source>Timezone: %1</source>
        <translation>Tijdzone: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="128"/>
        <source>Select your preferred Zone within your Region.</source>
        <translation>Selecteer uw Voorkeurszone binnen uw Regio.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="202"/>
        <source>Zones</source>
        <translation>Zones</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="250"/>
        <source>You can fine-tune Language and Locale settings below.</source>
        <translation>Je kunt de instellingen voor taal en landinstelling hieronder verfijnen.</translation>
    </message>
</context>
<context>
    <name>Offline_orig</name>
    <message>
        <location filename="../src/modules/localeq/Offline_orig.qml" line="64"/>
        <source>Timezone: %1</source>
        <translation>Tijdzone: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline_orig.qml" line="81"/>
        <source>To be able to select a timezone, make sure you are connected to the internet. Restart the installer after connecting. You can fine-tune Language and Locale settings below.</source>
        <translation>Zorg ervoor dat u verbonden bent met internet om een tijdzone te kunnen selecteren. Start het installatieprogramma opnieuw nadat u verbinding heeft gemaakt. U kunt de taal- en landinstellingen hieronder verfijnen.</translation>
    </message>
</context>
<context>
    <name>PWQ</name>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="51"/>
        <source>Password is too short</source>
        <translation>Wachtwoord is te kort</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="67"/>
        <source>Password is too long</source>
        <translation>Wachtwoord is te lang</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="188"/>
        <source>Password is too weak</source>
        <translation>Wachtwoord is te zwak</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="196"/>
        <source>Memory allocation error when setting &apos;%1&apos;</source>
        <translation>Geheugentoewijzingsfout bij het instellen van &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="199"/>
        <source>Memory allocation error</source>
        <translation>Geheugen allocatie fout</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="201"/>
        <source>The password is the same as the old one</source>
        <translation>Het wachtwoord is hetzelfde als het oude</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="203"/>
        <source>The password is a palindrome</source>
        <translation>Het wachtwoord is een palindroom</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="205"/>
        <source>The password differs with case changes only</source>
        <translation>Het wachtwoord verschilt alleen met hoofdletterwijzigingen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="207"/>
        <source>The password is too similar to the old one</source>
        <translation>Het wachtwoord lijkt te veel op het oude wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="209"/>
        <source>The password contains the user name in some form</source>
        <translation>Het wachtwoord bevat de gebruikersnaam in een of andere vorm</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="211"/>
        <source>The password contains words from the real name of the user in some form</source>
        <translation>Het wachtwoord bevat woorden van de echte naam van de gebruiker in een of andere vorm</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="214"/>
        <source>The password contains forbidden words in some form</source>
        <translation>Het wachtwoord bevat verboden woorden in een of andere vorm</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="221"/>
        <source>The password contains too few digits</source>
        <translation>Het wachtwoord bevat te weinig cijfers</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="228"/>
        <source>The password contains too few uppercase letters</source>
        <translation>Het wachtwoord bevat te weinig hoofdletters</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="235"/>
        <source>The password contains too few lowercase letters</source>
        <translation>Het wachtwoord bevat te weinig kleine letters</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="242"/>
        <source>The password contains too few non-alphanumeric characters</source>
        <translation>Het wachtwoord bevat te weinig niet-alfanumerieke karakters</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="249"/>
        <source>The password is too short</source>
        <translation>Het wachtwoord is te kort</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="258"/>
        <source>The password does not contain enough character classes</source>
        <translation>Het wachtwoord bevat niet genoeg tekenklassen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="265"/>
        <source>The password contains too many same characters consecutively</source>
        <translation>Het wachtwoord bevat te veel dezelfde tekens achter elkaar</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="275"/>
        <source>The password contains too many characters of the same class consecutively</source>
        <translation>Het wachtwoord bevat achtereenvolgens te veel tekens van dezelfde klasse</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="218"/>
        <source>The password contains fewer than %n digits</source>
        <translation><numerusform>Het wachtwoord bevat minder dan %n cijfers</numerusform><numerusform>Het wachtwoord bevat minder dan %n cijfers</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="225"/>
        <source>The password contains fewer than %n uppercase letters</source>
        <translation><numerusform>Het wachtwoord bevat minder dan %n hoofdletters</numerusform><numerusform>Het wachtwoord bevat minder dan % 1 hoofdletters</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="232"/>
        <source>The password contains fewer than %n lowercase letters</source>
        <translation><numerusform>Het wachtwoord bevat minder dan %n kleine letters </numerusform><numerusform>Het wachtwoord bevat minder dan % 1 kleine letters </numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="239"/>
        <source>The password contains fewer than %n non-alphanumeric characters</source>
        <translation><numerusform>Het wachtwoord bevat minder dan %n niet-alfanumerieke karakters</numerusform><numerusform>Het wachtwoord bevat minder dan % 1 niet-alfanumerieke karakters</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="246"/>
        <source>The password is shorter than %n characters</source>
        <translation><numerusform>Het wachtwoord is korter dan %n letters</numerusform><numerusform>Het wachtwoord is korter dan %1 letters</numerusform></translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="251"/>
        <source>The password is a rotated version of the previous one</source>
        <translation>Het wachtwoord is een geroteerde versie van het vorige</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="255"/>
        <source>The password contains fewer than %n character classes</source>
        <translation><numerusform>Het wachtwoord bevat minder dan %n tekenklassen</numerusform><numerusform>Het wachtwoord bevat minder dan % 1 kleine letters </numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="262"/>
        <source>The password contains more than %n same characters consecutively</source>
        <translation><numerusform>Het wachtwoord bevat meer dan %n dezelfde tekens achter elkaar</numerusform><numerusform>Het wachtwoord bevat meer dan %1 dezelfde tekens achter elkaar</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="269"/>
        <source>The password contains more than %n characters of the same class consecutively</source>
        <translation><numerusform>Het wachtwoord bevat meer dan %n tekens van dezelfde klasse opeenvolgend</numerusform><numerusform>Het wachtwoord bevat meer dan %1 tekens van dezelfde klasse opeenvolgend</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="280"/>
        <source>The password contains monotonic sequence longer than %n characters</source>
        <translation><numerusform>Het wachtwoord bevat een monotone reeks langer dan %n tekens</numerusform><numerusform>Het wachtwoord bevat een monotone reeks langer dan %1 tekens</numerusform></translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="286"/>
        <source>The password contains too long of a monotonic character sequence</source>
        <translation>Het wachtwoord bevat een te lange monotoon tekenreeks</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="289"/>
        <source>No password supplied</source>
        <translation>Geen wachtwoord opgegeven</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="291"/>
        <source>Cannot obtain random numbers from the RNG device</source>
        <translation>Kan geen willekeurige nummers van het RNG-apparaat verkrijgen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="293"/>
        <source>Password generation failed - required entropy too low for settings</source>
        <translation>Wachtwoord generatie mislukt - vereist entropie te laag voor instellingen</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="298"/>
        <source>The password fails the dictionary check - %1</source>
        <translation>Het wachtwoord faalt de woordenboekcontrole -%1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="301"/>
        <source>The password fails the dictionary check</source>
        <translation>Het wachtwoord faalt de woordenboekcontrole</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="305"/>
        <source>Unknown setting - %1</source>
        <translation>Onbekende instelling - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="307"/>
        <source>Unknown setting</source>
        <translation>Onbekende instelling</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="311"/>
        <source>Bad integer value of setting - %1</source>
        <translation>Slechte gehele waarde van instelling - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="313"/>
        <source>Bad integer value</source>
        <translation>Slechte gehele waarde van instelling</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="317"/>
        <source>Setting %1 is not of integer type</source>
        <translation>Het instellen van %1 is niet van het type integer</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="319"/>
        <source>Setting is not of integer type</source>
        <translation>Instelling is niet van het type integer</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="323"/>
        <source>Setting %1 is not of string type</source>
        <translation>Instelling van %1 is niet van het type string</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="325"/>
        <source>Setting is not of string type</source>
        <translation>Instelling heeft geen stringtype</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="327"/>
        <source>Opening the configuration file failed</source>
        <translation>Het openen van het configuratiebestand is mislukt</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="329"/>
        <source>The configuration file is malformed</source>
        <translation>Het configuratiebestand is verkeerd ingedeeld</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="331"/>
        <source>Fatal failure</source>
        <translation>Fatal failure</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="333"/>
        <source>Unknown error</source>
        <translation>Onbekende fout</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="782"/>
        <source>Password is empty</source>
        <translation>Wachtwoord is leeg</translation>
    </message>
</context>
<context>
    <name>PackageChooserPage</name>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="24"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="44"/>
        <source>Product Name</source>
        <translation>Productnaam</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="57"/>
        <source>TextLabel</source>
        <translation>TextLabel</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="73"/>
        <source>Long Product Description</source>
        <translation>Lange Productbeschrijving</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="25"/>
        <source>Package Selection</source>
        <translation>Pakketten Selectie</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="26"/>
        <source>Please pick a product from the list. The selected product will be installed.</source>
        <translation>Kies een product uit de lijst. Het geselecteerde product wordt geïnstalleerd.</translation>
    </message>
</context>
<context>
    <name>PackageChooserQmlViewStep</name>
    <message>
        <location filename="../src/modules/packagechooserq/PackageChooserQmlViewStep.cpp" line="32"/>
        <source>Packages</source>
        <translation>Pakketten</translation>
    </message>
</context>
<context>
    <name>PackageChooserViewStep</name>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserViewStep.cpp" line="51"/>
        <source>Packages</source>
        <translation>Pakketten</translation>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="18"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="74"/>
        <source>Keyboard Model:</source>
        <translation>Toetsenbord model:</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="135"/>
        <source>Type here to test your keyboard</source>
        <translation>Typ hier om uw toetsenbord te testen</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="18"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="40"/>
        <source>What is your name?</source>
        <translation>Wat is uw naam?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="124"/>
        <source>What name do you want to use to log in?</source>
        <translation>Welke naam wilt u gebruiken om in te loggen?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="325"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Kies een wachtwoord om uw account veilig te houden.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="349"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="374"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Voer hetzelfde wachtwoord twee keer in, zodat het gecontroleerd kan worden op typefouten. Een goed wachtwoord bevat een combinatie van letters, cijfers en leestekens, is ten minste acht tekens lang en moet regelmatig worden gewijzigd.&lt;/ small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="223"/>
        <source>What is the name of this computer?</source>
        <translation>Wat is de naam van deze computer?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="55"/>
        <source>Your Full Name</source>
        <translation>Uw Volledige Naam</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="148"/>
        <source>login</source>
        <translation>login</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="247"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Deze naam zal worden gebruikt als u de computer zichtbaar maakt voor anderen op een netwerk.&lt;/ small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="250"/>
        <source>Computer Name</source>
        <translation>Computer Naam</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="355"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="525"/>
        <source>Password</source>
        <translation>Wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="380"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="550"/>
        <source>Repeat Password</source>
        <translation>Herhaal Wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="455"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation>Wanneer dit vakje is aangevinkt, wordt de wachtwoordsterkte gecontroleerd en kunt u geen zwak wachtwoord gebruiken.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="458"/>
        <source>Require strong passwords.</source>
        <translation>Vereis sterke wachtwoorden.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="465"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>Automatisch aanmelden zonder te vragen om het wachtwoord.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="472"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Gebruik hetzelfde wachtwoord voor het administrator account.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="495"/>
        <source>Choose a password for the administrator account.</source>
        <translation>Kies een wachtwoord voor het administrator account.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="519"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="544"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Voer hetzelfde wachtwoord twee keer in, zodat het gecontroleerd kan worden op typefouten.&lt;/ small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="190"/>
        <source>Root</source>
        <translation>Root</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="194"/>
        <source>Home</source>
        <translation>Home</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="198"/>
        <source>Boot</source>
        <translation>Boot</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
        <source>EFI system</source>
        <translation>EFI systeem</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="207"/>
        <source>Swap</source>
        <translation>Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="211"/>
        <source>New partition for %1</source>
        <translation>Nieuwe partitie op %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="215"/>
        <source>New partition</source>
        <translation>Nieuwe partitie</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="239"/>
        <source>%1  %2</source>
        <extracomment>size[number] filesystem[name]</extracomment>
        <translation>%1  %2</translation>
    </message>
</context>
<context>
    <name>PartitionModel</name>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="159"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="203"/>
        <source>Free Space</source>
        <translation>Vrije ruimte</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="163"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="207"/>
        <source>New partition</source>
        <translation>Nieuwe partitie</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="300"/>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="302"/>
        <source>File System</source>
        <translation>Bestandssysteem</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="304"/>
        <source>File System Label</source>
        <translation>Bestandssysteemlabel</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="306"/>
        <source>Mount Point</source>
        <translation>Aankoppelpunt</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="308"/>
        <source>Size</source>
        <translation>Grootte</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="18"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="26"/>
        <source>Storage de&amp;vice:</source>
        <translation>Opslag de&amp;vice:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="55"/>
        <source>&amp;Revert All Changes</source>
        <translation>Alle wijzigingen &amp;ongedaan maken</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="91"/>
        <source>New Partition &amp;Table</source>
        <translation>Nieuwe partitie&amp;tabel</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="111"/>
        <source>Cre&amp;ate</source>
        <translation>Cre&amp;ate</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="136"/>
        <source>New Volume Group</source>
        <translation>Nieuw Volume Groep</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="143"/>
        <source>Resize Volume Group</source>
        <translation>Resize Volume Groep</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="150"/>
        <source>Deactivate Volume Group</source>
        <translation>Deactiveer Volume Groep</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="157"/>
        <source>Remove Volume Group</source>
        <translation>Verwijder Volume Groep</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="184"/>
        <source>I&amp;nstall boot loader on:</source>
        <translation>I&amp;nstalleer de boot loader op:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="118"/>
        <source>&amp;Edit</source>
        <translation>&amp;Bewerken</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="125"/>
        <source>&amp;Delete</source>
        <translation>&amp;Verwijderen</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="228"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>Weet u zeker dat u een nieuwe partitie tabel wilt aanleggen op %1?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="263"/>
        <source>Can not create new partition</source>
        <translation>Kan geen nieuwe partitie maken</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="264"/>
        <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
        <translation>De partitietabel op %1 heeft al %2 primaire partities en er kan niet meer aan worden toegevoegd. Verwijder in plaats daarvan een primaire partitie en voeg een uitgebreide partitie toe.</translation>
    </message>
</context>
<context>
    <name>PartitionQmlViewStep</name>
    <message>
        <location filename="../src/modules/partitionq/PartitionQmlViewStep.cpp" line="117"/>
        <source>Partition</source>
        <translation>Partitie</translation>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="56"/>
        <source>Gathering system information...</source>
        <translation>Informatie verzamelen over het systeem...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="111"/>
        <source>Partitions</source>
        <translation>Partities</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="303"/>
        <source>Current:</source>
        <translation>Huidig:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="321"/>
        <source>After:</source>
        <translation>Naderhand:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="530"/>
        <source>No EFI system partition configured</source>
        <translation>Geen EFI systeem partitie geconfigureerd</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="534"/>
        <source>EFI system partition configured incorrectly</source>
        <translation>EFI systeem partitie incorrect geconfigureerd</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="539"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a suitable filesystem.</source>
        <translation>An EFI system partitie is noodzakelijk om  %1 te starten.&lt;br/&gt;&lt;br/&gt;Om een EFI-systeempartitie te configureren, ga terug en selecteer of creëer een geschikt bestandssysteem.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="550"/>
        <source>The filesystem must be mounted on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Het bestandsysteem moet gemount zijn op &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="556"/>
        <source>The filesystem must have type FAT32.</source>
        <translation>Het bestandssysteem moet van het type FAT32 zijn.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="564"/>
        <source>The filesystem must be at least %1 MiB in size.</source>
        <translation>Het bestandssysteem moet tenminste %1 MiB in grootte zijn.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="570"/>
        <source>The filesystem must have flag &lt;strong&gt;%1&lt;/strong&gt; set.</source>
        <translation>Het bestandssysteem moet flag &lt;strong&gt;%1&lt;/strong&gt; zetten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="576"/>
        <source>You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation>Je kunt doorgaan zonder een EFI-systeempartitie in te stellen, maar je systeem start mogelijk niet op.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="593"/>
        <source>Option to use GPT on BIOS</source>
        <translation>Optie om GPT op BIOS te gebruiken</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="594"/>
        <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partition table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;bios_grub&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
        <translation>Een GPT partitietabel is de beste optie voor alle systemen. Dit installatieprogramma ondersteunt een dergelijke setup voor BIOS-systemen ook.&lt;br/&gt;&lt;br/&gt;Om een GPT partitietabel op BIOS te configureren, (als dat nog niet gedaan is) ga terug en zet de partitietabel naar GPT, vervolgens creëer een 8 MB niet-geformatteerde partitie met de &lt;strong&gt;bios_grub&lt;/strong&gt; vlag ingeschakeld.&lt;br/&gt;&lt;br/&gt;Een niet-geformatteerde 8 MB partitie is nodig om %1 te starten op een BIOS-systeem met GPT.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="715"/>
        <source>There are no partitions to install on.</source>
        <translation>Er zijn geen partities om op te installeren.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="626"/>
        <source>Boot partition not encrypted</source>
        <translation>Boot partitie niet versleuteld</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="627"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation>Een aparte boot partitie is opgezet samen met een versleutelde root-partitie, maar de boot partitie is niet versleuteld.&lt;br/&gt;&lt;br/&gt;Er is bezorgheid over de beveiliging in dit soort setup, omdat belangrijke systeembestanden op een niet-versleutelde partitie worden gehouden.&lt;br/&gt;Je kunt doorgaan als je wilt, maar filesystem unlocken zal later gebeuren tijdens het opstarten.&lt;br/&gt;Om de boot partitie te versleutelen, ga terug en maak het opnieuw op, selecteer &lt;strong&gt;Versleutelen&lt;/strong&gt; in het venster partitie creatie.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="714"/>
        <source>has at least one disk device available.</source>
        <translation>heeft ten minste één schijfapparaat beschikbaar.</translation>
    </message>
</context>
<context>
    <name>PreserveFiles</name>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="79"/>
        <source>Saving files for later ...</source>
        <translation>Bestanden opslaan voor later ...</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="118"/>
        <source>No files configured to save for later.</source>
        <translation>Geen bestanden geconfigureerd om op te slaan voor later.</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="172"/>
        <source>Not all of the configured files could be preserved.</source>
        <translation>Niet alle geconfigureerde bestanden kunnen worden bewaard.</translation>
    </message>
</context>
<context>
    <name>ProcessResult</name>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="425"/>
        <source>
There was no output from the command.</source>
        <translation>
Er was geen uitvoer van het commando.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="426"/>
        <source>
Output:
</source>
        <translation>
Output:
</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="430"/>
        <source>External command crashed.</source>
        <translation>Externe opdracht is gecrashed.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="431"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
        <translation>Command &lt;i&gt;%1&lt;/i&gt; crashed.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="436"/>
        <source>External command failed to start.</source>
        <translation>Externe opdracht starten mislukt.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="437"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
        <translation>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="441"/>
        <source>Internal error when starting command.</source>
        <translation>Interne fout bij starten opdracht.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="442"/>
        <source>Bad parameters for process job call.</source>
        <translation>Onjuiste parameters voor procestaak</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="446"/>
        <source>External command failed to finish.</source>
        <translation>Externe opdracht voltooiing mislukt.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="447"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
        <translation>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="454"/>
        <source>External command finished with errors.</source>
        <translation>Externe opdracht voltooid met fouten.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="455"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
        <translation>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="130"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="167"/>
        <source>Default</source>
        <translation>Standaard</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="41"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>Niet gepartitioneerde ruimte of onbekende partitietabel</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="28"/>
        <source>unknown</source>
        <translation>onbekend</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="30"/>
        <source>extended</source>
        <translation>uitgebreid</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="32"/>
        <source>unformatted</source>
        <translation>ongeformatteerd</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="34"/>
        <source>swap</source>
        <translation>swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="44"/>
        <source>(no mount point)</source>
        <translation>(geen aankoppelpunt)</translation>
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
        <translation>Bestand niet gevonden</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="65"/>
        <source>Path &lt;pre&gt;%1&lt;/pre&gt; must be an absolute path.</source>
        <translation>Pad &lt;pre&gt;%1&lt;/pre&gt; moet een absoluut pad zijn.</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="83"/>
        <source>Directory not found</source>
        <translation>Directory niet gevonden</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="84"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="94"/>
        <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
        <translation>Kan geen nieuw willekeurig bestand maken &lt;pre&gt;%1&lt;/pre&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="44"/>
        <source>No product</source>
        <translation>Geen product</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="52"/>
        <source>No description provided.</source>
        <translation>Geen beschrijving opgegeven.</translation>
    </message>
</context>
<context>
    <name>Recommended</name>
    <message>
        <location filename="../src/modules/welcomeq/Recommended.qml" line="40"/>
        <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
        <translation>Deze computer voldoet niet aan alle aanbevolen vereisten voor het installeren van %1.&lt;br/&gt;De installatie kan doorgaan, maar sommige functies kunnen worden uitgeschakeld.</translation>
    </message>
</context>
<context>
    <name>RemoveVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="24"/>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="36"/>
        <source>Remove Volume Group named %1.</source>
        <translation>Verwijder Volume Groep genaamd %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="30"/>
        <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Verwijder Volume Groep genaamd &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="48"/>
        <source>The installer failed to remove a volume group named &apos;%1&apos;.</source>
        <translation>Het installatieprogramma kon een volumegroep met de naam &apos;%1&apos; niet verwijderen.</translation>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="18"/>
        <source>Form</source>
        <translation>From</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="127"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>Selecteer waar te installeer %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Waarshuwing: &lt;/font&gt;Dit zal alle bestanden op de geselecteerde partitie wissen. </translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="149"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>Het geselecteerde item lijkt geen geldige partitie zijn.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="157"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 kan niet geinstalleerd worden op een lege ruimte. Selecteer aub een bestaande partitie.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="167"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1 kan niet op extended partitie worden geïnstalleerd. Selecteer een bestaande primaire of logische partitie.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="177"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>%1 kan niet geinstalleerd worden op deze partitie.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="183"/>
        <source>Data partition (%1)</source>
        <translation>Data partitie (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="203"/>
        <source>Unknown system partition (%1)</source>
        <translation>Onbekende systeempartitie(%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="207"/>
        <source>%1 system partition (%2)</source>
        <translation>%1 systempartitie (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="218"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;De partitie %1 is te klein voor %2. Selecteer aub een partitie met een capaciteit van minimaal %3 GiB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="240"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Een EFI systeem partitiie kan nergens gevonden worden op dit systeem.  Ga AUB terug en gebruik de handmatige schijfindeling om %1 op te zetten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="251"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="267"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="292"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 zal worden geinstallerd op %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Opgelet: &lt;/font&gt;alle data op partitie%2 zal verloren worden.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="259"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>De EFI systeem partitie op %1 zal gebruikt worden om %2 op te starten.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="275"/>
        <source>EFI system partition:</source>
        <translation>EFI systeempartitie:</translation>
    </message>
</context>
<context>
    <name>Requirements</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements.qml" line="38"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Deze computer voldoet niet aan de minimale vereisten voor het installeren van %1.&lt;br/&gt;
        De installatie kan niet worden voortgezet.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/Requirements.qml" line="40"/>
        <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
        <translation>Deze computer voldoet niet aan alle aanbevolen vereisten voor het installeren van %1.&lt;br/&gt;De installatie kan doorgaan, maar sommige functies kunnen worden uitgeschakeld.</translation>
    </message>
</context>
<context>
    <name>Requirements2</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements2.qml" line="48"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing KaOS.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Deze computer voldoet niet aan de minimale vereisten voor het installeren van %1.&lt;br/&gt;
        De installatie kan niet worden voortgezet.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>Requirements_orig</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements_orig.qml" line="48"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for setting up %1.&lt;/p&gt;
        &lt;p&gt;Setup cannot continue.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Deze computer voldoet niet aan de minimale vereisten voor het installeren van %1.&lt;/p&gt;
        &lt;p&gt;De installatie kan niet worden voortgezet.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="40"/>
        <source>Resize partition %1.</source>
        <translation>Pas de grootte van partitie %1 aan.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="47"/>
        <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
        <translation>Verander grootte &lt;strong&gt;%2MiB&lt;/strong&gt; partitie &lt;strong&gt;%1&lt;/strong&gt; naar &lt;strong&gt;%3MiB&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="58"/>
        <source>Resizing %2MiB partition %1 to %3MiB.</source>
        <translation>Aanpassen van %2MiB partitie %1 naar %3MiB.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="77"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>Installatieprogramma heeft gefaald in het aanpassen van de grootte van partitie %1 op schrijf %2&apos;.</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="30"/>
        <source>Resize Volume Group</source>
        <translation>Resize Volume Group</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="27"/>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="45"/>
        <source>Resize volume group named %1 from %2 to %3.</source>
        <translation>Resize volume groep genaamd %1 van %2 naar %3.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="36"/>
        <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>Resize volume groep genaamd &lt;strong&gt;%1&lt;/strong&gt; van &lt;strong&gt;%2&lt;/strong&gt; naar &lt;strong&gt;%3&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="60"/>
        <source>The installer failed to resize a volume group named &apos;%1&apos;.</source>
        <translation>Het installatieprogramma kan de grootte van volume groep genaamd &apos;%1&apos; niet wijzigen.</translation>
    </message>
</context>
<context>
    <name>ResultsListDialog</name>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="137"/>
        <source>For best results, please ensure that this computer:</source>
        <translation>Voor het beste resultaat, zorgt u er a.u.b. voor dat deze computer:</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="138"/>
        <source>System requirements</source>
        <translation>Systeemvereisten</translation>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="64"/>
        <source>Scanning storage devices...</source>
        <translation>Scannen opslagapparaten ...</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="64"/>
        <source>Partitioning</source>
        <translation>Partitionering</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="37"/>
        <source>Set hostname %1</source>
        <translation>Instellen hostname %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="44"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Instellen hostname &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="51"/>
        <source>Setting hostname %1.</source>
        <translation>Instellen hostname %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="122"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="129"/>
        <source>Internal Error</source>
        <translation>Interne fout</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="137"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="146"/>
        <source>Cannot write hostname to target system</source>
        <translation>Kan de hostname niet naar het doelsysteem schrijven</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="55"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>Stel toetsenbord model in naar %1, indeling naar %2-%3</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="368"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>Het schrijven van de toetsenbord configuratie voor de virtuele console is mislukt.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="369"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="397"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="414"/>
        <source>Failed to write to %1</source>
        <translation>Niet in geslaagd om te schrijven naar %1</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="396"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>Gefaald toetsenbord configuratie voor X11 te schrijven.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="413"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation>Het schrijven van de toetsenbordconfiguratie naar de bestaande /etc/default bestand console is mislukt.</translation>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="43"/>
        <source>Set flags on partition %1.</source>
        <translation>Set flags op partitie %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="49"/>
        <source>Set flags on %1MiB %2 partition.</source>
        <translation>Set flags op %1MiB %2 partitie.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="53"/>
        <source>Set flags on new partition.</source>
        <translation>Set flags op nieuwe partitie.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="65"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Wis flags op partitie &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
        <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Wis flags op %1MiB &lt;strong&gt;%2&lt;/strong&gt; partitie.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="89"/>
        <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partitie als &lt;strong&gt;%3&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="114"/>
        <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Flags wissen op %1MiB &lt;strong&gt;%2&lt;/strong&gt; partitie.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="133"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Instellen flags &lt;strong&gt;%3&lt;/strong&gt; op %1MiB &lt;strong&gt;%2&lt;/strong&gt; partitie.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
        <source>Clear flags on new partition.</source>
        <translation>Wis flags op nieuwe partitie.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="80"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Flag partitie &lt;strong&gt;%1&lt;/strong&gt; als &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="96"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Flag nieuwe partitie als &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="108"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Flags wissen op partitie &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="119"/>
        <source>Clearing flags on new partition.</source>
        <translation>Flags wissen op nieuwe partitie.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="124"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Instellen van flag &lt;strong&gt;%2&lt;/strong&gt; op partitie &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="140"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation>Instellen flags &lt;strong&gt;%1&lt;/strong&gt; op nieuwe partitie.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="157"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>Het installatieprogramma kon geen flag instellen op partitie &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="40"/>
        <source>Set password for user %1</source>
        <translation>Instellen wachtwoord voor gebruiker %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="47"/>
        <source>Setting password for user %1.</source>
        <translation>Instellen wachtwoord voor gebruiker %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="81"/>
        <source>Bad destination system path.</source>
        <translation>Onjuist bestemmingssysteempad.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="82"/>
        <source>rootMountPoint is %1</source>
        <translation>Hoofdaankoppelpunt is %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="88"/>
        <source>Cannot disable root account.</source>
        <translation>Kan root-account niet uitschakelen.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="89"/>
        <source>passwd terminated with error code %1.</source>
        <translation>passwd is gestopt met foutcode %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="97"/>
        <source>Cannot set password for user %1.</source>
        <translation>Kan het wachtwoord niet instellen voor gebruiker %1 </translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="98"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod beëindigd met foutcode %1.</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="34"/>
        <source>Set timezone to %1/%2</source>
        <translation>Instellen tijdzone naar %1/%2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="62"/>
        <source>Cannot access selected timezone path.</source>
        <translation>Kan geen toegang krijgen tot het geselecteerde tijdzone pad.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="63"/>
        <source>Bad path: %1</source>
        <translation>Onjuist pad: %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot set timezone.</source>
        <translation>Kan de tijdzone niet instellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>Link creatie mislukt, doel: %1; koppeling naam: %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="77"/>
        <source>Cannot set timezone,</source>
        <translation>Kan de tijdzone niet instellen,</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="78"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>Kan /etc/timezone niet openen om te bewerken</translation>
    </message>
</context>
<context>
    <name>SetupGroupsJob</name>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="166"/>
        <source>Preparing groups.</source>
        <translation>Groepen voorbereiden.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="178"/>
        <location filename="../src/modules/users/MiscJobs.cpp" line="183"/>
        <source>Could not create groups in target system</source>
        <translation>Kan geen groepen maken in doelsysteem</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="184"/>
        <source>These groups are missing in the target system: %1</source>
        <translation>Deze groepen ontbreken in het doelsysteem: %1</translation>
    </message>
</context>
<context>
    <name>SetupSudoJob</name>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="33"/>
        <source>Configure &lt;pre&gt;sudo&lt;/pre&gt; users.</source>
        <translation>Configureer &lt;pre&gt;sudo&lt;/pre&gt; gebruikers.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="55"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>chmod sudoers gefaald.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="60"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>Kan het bestand sudoers niet aanmaken.</translation>
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
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="29"/>
        <source>&amp;Yes</source>
        <translation>&amp;Ja</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="30"/>
        <source>&amp;No</source>
        <translation>&amp;Nee</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="31"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleer</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="32"/>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
</context>
<context>
    <name>UEFI</name>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="37"/>
        <source>Systemd-boot is a UEFI boot manager which executes configured EFI images. The default entry is selected by a configured pattern (glob) or an on-screen menu and is simple to configure.</source>
        <translation>Systemd-boot is een UEFI-opstartmanager die geconfigureerde EFI-images uitvoert. De standaardinvoer wordt geselecteerd door een geconfigureerd patroon (glob) of een on-screen menu en is eenvoudig te configureren.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="50"/>
        <source>Systemd-boot</source>
        <translation>Systemd-boot</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="103"/>
        <source>rEFInd is a fork of the earlier rEFIt boot manager. It is designed to be platform-neutral and to simplify booting multiple operating systems.</source>
        <translation>rEFInd is een afsplitsing van de eerdere rEFIt bootmanager. Het is ontworpen om platformneutraal te zijn en om het opstarten van meerdere besturingssystemen te vereenvoudigen.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="116"/>
        <source>Refind</source>
        <translation>Refind</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="171"/>
        <source>No bootloader selected. Selecting no bootloader might result in an un-bootable system, if you don&apos;t already have a bootloader were you can add this install to.</source>
        <translation>Geen bootloader geselecteerd. Het selecteren van geen bootloader kan resulteren in een niet-opstartbaar systeem, als je nog geen bootloader hebt waaraan je deze installatie kunt toevoegen.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="184"/>
        <source>No bootloader</source>
        <translation>Geen bootloader</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="236"/>
        <source>Please select a bootloader option for your install, or leave the default option, &lt;strong&gt;systemd-boot&lt;/strong&gt;.</source>
        <translation>Please select a bootloader option for your install, or leave the default option, &lt;strong&gt;systemd-boot&lt;/strong&gt;.</translation>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="167"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Indien meer dan één persoon deze computer gebruikt, kunt u meerdere accounts na de installatie instellen.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="173"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Indien meer dan één persoon deze computer gebruikt, kunt u meerdere accounts na de installatie instellen.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>UsersQmlViewStep</name>
    <message>
        <location filename="../src/modules/usersq/UsersQmlViewStep.cpp" line="35"/>
        <source>Users</source>
        <translation>Gebruikers</translation>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
        <source>Users</source>
        <translation>Gebruikers</translation>
    </message>
</context>
<context>
    <name>VariantModel</name>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="232"/>
        <source>Key</source>
        <comment>Column header for key/value</comment>
        <translation>Sleutel</translation>
    </message>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="236"/>
        <source>Value</source>
        <comment>Column header for key/value</comment>
        <translation>Waarde</translation>
    </message>
</context>
<context>
    <name>VolumeGroupBaseDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="18"/>
        <source>Create Volume Group</source>
        <translation>Creër Volume Group</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="24"/>
        <source>List of Physical Volumes</source>
        <translation>Lijst met Fysieke Volumes</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="34"/>
        <source>Volume Group Name:</source>
        <translation>Volume Groep Naam:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="47"/>
        <source>Volume Group Type:</source>
        <translation>Volume Groep Type:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="60"/>
        <source>Physical Extent Size:</source>
        <translation>Physical Extent Omvang:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="70"/>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="86"/>
        <source>Total Size:</source>
        <translation>Totale Grootte:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="106"/>
        <source>Used Size:</source>
        <translation>Gebruikte Omvang:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="126"/>
        <source>Total Sectors:</source>
        <translation>Totaal aantal Sectoren:</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="146"/>
        <source>Quantity of LVs:</source>
        <translation>Aantal van LVs:</translation>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="18"/>
        <source>Form</source>
        <translation>Forma</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="79"/>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="98"/>
        <source>Select application and system language</source>
        <translation>Selecteer applicatie en systeemtaal</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="187"/>
        <source>Open donations website</source>
        <translation>Open donatiesite</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="227"/>
        <source>&amp;Donate</source>
        <translation>&amp;Donatie</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="237"/>
        <source>Open help and support website</source>
        <translation>Open hulp en ondersteuning website</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="297"/>
        <source>&amp;Release notes</source>
        <translation>&amp;Release notes</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="287"/>
        <source>&amp;Known issues</source>
        <translation>&amp;Bekende problemen</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="240"/>
        <source>&amp;Support</source>
        <translation>&amp;Support</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="177"/>
        <source>&amp;About</source>
        <translation>&amp;Informatie</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="223"/>
        <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Welkom bij het %1 installeer programma.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="222"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Welcom bij de Calamares installatieprogramma voor %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="216"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Welcom bij de Calamares installatieprogramma voor %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="217"/>
        <source>&lt;h1&gt;Welcome to %1 setup.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Welkom bij het %1 installeer programma.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="235"/>
        <source>About %1 setup</source>
        <translation>Informatie %1 installeer programma</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="235"/>
        <source>About %1 installer</source>
        <translation>Informatie %1 installeer programma</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="238"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2020 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Thanks to &lt;a href=&quot;https://calamares.io/team/&quot;&gt;the Calamares team&lt;/a&gt; and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2019 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Met dank aan het &lt;a href=&quot;https://calamares.io/team/&quot;&gt;Calamares team&lt;/a&gt; en het &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS vertalers team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; is gesponsord door &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="228"/>
        <source>%1 support</source>
        <translation>%1 support</translation>
    </message>
</context>
<context>
    <name>WelcomeQmlViewStep</name>
    <message>
        <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="40"/>
        <source>Welcome</source>
        <translation>Welkom</translation>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="46"/>
        <source>Welcome</source>
        <translation>Welkom</translation>
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
        <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;
                        &lt;strong&gt;%2&lt;br/&gt;
                        voor %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;
                        Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;
                        Copyright 2017-2021 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;
                        Met Dank aan &lt;a href=&apos;https://calamares.io/team/&apos;&gt;the Calamares team&lt;/a&gt; 
                        en het &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS 
                        vertalers team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;
                        &lt;a href=&apos;https://calamares.io/&apos;&gt;Calamares&lt;/a&gt; 
                        ontwikkeling is gesponsord door &lt;br/&gt;
                        &lt;a href=&apos;http://www.blue-systems.com/&apos;&gt;Blue Systems&lt;/a&gt; - 
                        Liberating Software.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/about.qml" line="96"/>
        <source>Back</source>
        <translation>Terug</translation>
    </message>
</context>
<context>
    <name>calamares-sidebar</name>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-sidebar.qml" line="89"/>
        <location filename="../src/calamares/calamares-sidebar.qml" line="79"/>
        <source>Show debug information</source>
        <translation>Debug informatie tonen</translation>
    </message>
</context>
<context>
    <name>finishedq</name>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="38"/>
        <source>Installation Completed</source>
        <translation>Installatie Afgerond</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="45"/>
        <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart into your new system, or continue using the Live environment.</source>
        <translation>%1 is geinstalleerd op je computer.&lt;br/&gt;
            Je kunt nu opnieuw opstarten in uw nieuwe systeem, of de Live environment blijven gebruiken..</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="67"/>
        <source>Close Installer</source>
        <translation>Installatieprogramma Sluiten</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="74"/>
        <source>Restart System</source>
        <translation>Systeem herstarten</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="95"/>
        <source>&lt;p&gt;A full log of the install is available as installation.log in the home directory of the Live user.&lt;br/&gt;
            This log is copied to %1 of the target system.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Een volledig log van de installatie is beschikbaar als installation.log in de homedirectory van de Live-gebruiker.&lt;br/&gt;
            Dit log is gekopieerd naar %1 van het doelsysteem.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>i18n</name>
    <message>
        <location filename="../src/modules/localeq/i18n.qml" line="50"/>
        <source>&lt;h1&gt;Languages&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;h1&gt;Talen&lt;/h1&gt; &lt;/br&gt;
                    De instelling systeem locale heeft invloed op de taal en tekenset voor sommige command line interface-elementen. De huidige instelling is &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18n.qml" line="123"/>
        <source>&lt;h1&gt;Locales&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;h1&gt;Landinstellingen&lt;/h1&gt; &lt;/br&gt;
                    De landinstelling van het systeem is van invloed op de notatie van cijfers en datums. De huidige instelling is&lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18n.qml" line="189"/>
        <source>Back</source>
        <translation>Terug</translation>
    </message>
</context>
<context>
    <name>i18nw</name>
    <message>
        <location filename="../src/modules/localeq/i18nw.qml" line="50"/>
        <source>&lt;h1&gt;Languages&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;h1&gt;Talen&lt;/h1&gt; &lt;/br&gt;
                    De instelling systeem locale heeft invloed op de taal en tekenset voor sommige command line interface-elementen. De huidige instelling is &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18nw.qml" line="124"/>
        <source>&lt;h1&gt;Locales&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;h1&gt;Landinstellingen&lt;/h1&gt; &lt;/br&gt;
                    De landinstelling van het systeem is van invloed op de notatie van cijfers en datums. De huidige instelling is&lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18nw.qml" line="192"/>
        <source>Back</source>
        <translation>Terug</translation>
    </message>
</context>
<context>
    <name>keyboardq</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="60"/>
        <source>To activate keyboard preview, select a layout.</source>
        <translation>Selecteer een lay-out om toetsenbordvoorbeeld te activeren.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="86"/>
        <source>Keyboard Model:</source>
        <translation>Toetsenbord Model:</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="254"/>
        <source>Layouts</source>
        <translation>Indelingen</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="263"/>
        <source>Type here to test your keyboard</source>
        <translation>Typ hier om uw toetsenbord te testen</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="179"/>
        <source>Variants</source>
        <translation>Varianten</translation>
    </message>
</context>
<context>
    <name>keyboardq_orig</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="20"/>
        <source>Keyboard Model</source>
        <translation>Toetsenbord model</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="21"/>
        <source>Pick your preferred keyboard model or use the default one based on the detected hardware</source>
        <translation>Kies uw favoriete toetsenbordmodel of gebruik het standaardmodel op basis van de gedetecteerde hardware</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="56"/>
        <source>Refresh</source>
        <translation>Refresh</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="62"/>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="169"/>
        <source>Layouts</source>
        <translation>Indelingen</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="75"/>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="134"/>
        <source>Keyboard Layout</source>
        <translation>Toetsenbordindeling</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="113"/>
        <source>Models</source>
        <translation>Models</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="121"/>
        <source>Variants</source>
        <translation>Varianten</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="180"/>
        <source>Test your keyboard</source>
        <translation>Test je toetsenbord</translation>
    </message>
</context>
<context>
    <name>keyboardq_w</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="77"/>
        <source>Keyboard Selection</source>
        <translation>Toetsenbord Selectie</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="93"/>
        <source>Click your preferred keyboard model to select layout and variant, or use the default one based on the detected hardware.</source>
        <translation>Klik uw favoriete toetsenbordmodel of gebruik het standaardmodel op basis van de gedetecteerde hardware</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="111"/>
        <source>Keyboard Model:</source>
        <translation>Toetsenbord Model:</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="244"/>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="476"/>
        <source>Layouts</source>
        <translation>Indelingen</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="358"/>
        <source>Models</source>
        <translation>Models</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="365"/>
        <source>Variants</source>
        <translation>Varianten</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="381"/>
        <source>Keyboard Variant</source>
        <translation>Toetsenbord Variant</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="398"/>
        <source>Variant keyboard model or use the default one based on the detected hardware.</source>
        <translation>Variant toetsenbordmodel of gebruik de standaard op basis van de gedetecteerde hardware</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="486"/>
        <source>Test your keyboard</source>
        <translation>Test je toetsenbord</translation>
    </message>
</context>
<context>
    <name>layout</name>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="32"/>
        <source>Region: </source>
        <translation>Regio:</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="43"/>
        <source>Adjust Language</source>
        <translation>Taal Aanpassen</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="53"/>
        <source>Zone: </source>
        <translation>Zone:</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="63"/>
        <source>Adjust Locale</source>
        <translation>Landinstelling Aanpassen</translation>
    </message>
</context>
<context>
    <name>localeq</name>
    <message>
        <location filename="../src/modules/localeq/localeq.qml" line="110"/>
        <source>Change</source>
        <translation>Wijzig</translation>
    </message>
</context>
<context>
    <name>localeq2</name>
    <message>
        <location filename="../src/modules/localeq/localeq2.qml" line="40"/>
        <source>Region: </source>
        <translation>Regio:</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/localeq2.qml" line="55"/>
        <source>Zone: </source>
        <translation>Zone:</translation>
    </message>
</context>
<context>
    <name>notesqml</name>
    <message>
        <location filename="../src/modules/notesqml/notesqml.qml" line="50"/>
        <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;These are example release notes.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;Dit zijn voorbeeld release-opmerkingen.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>packagechooserq</name>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="45"/>
        <source>LibreOffice is a powerful and free office suite, used by millions of people around the world. It includes several applications that make it the most versatile Free and Open Source office suite on the market.&lt;br/&gt;
                    Default option.</source>
        <translation>LibreOffice is een krachtig en gratis kantoorpakket dat door miljoenen mensen over de hele wereld wordt gebruikt. Het bevat verschillende applicaties die het de meest veelzijdige gratis en open source office suite op de markt maken.&lt;br/&gt;
                    Default option.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="59"/>
        <source>LibreOffice</source>
        <translation>LibreOffice</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="112"/>
        <source>If you don&apos;t want to install an office suite, just select No Office Suite. You can always add one (or more) later on your installed system as the need arrives.</source>
        <translation>Als je geen kantoorsuite wilt installeren, selecteer gewoon Geen Office-suite. Je kunt er later altijd 1 (of meer) aan uw geïnstalleerde systeem toevoegen als dat nodig is.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="125"/>
        <source>No Office Suite</source>
        <translation>Geen Office-suite</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="180"/>
        <source>Create a minimal Plasma Desktop install, remove all extra applications and decide later on what you would like to add to your system. Examples of what won&apos;t be on such an install, there will be no Office Suite, no media players, no image viewer or print support.  It will be just a desktop, file browser, package manager, text editor and simple web-browser.</source>
        <translation>Maak een minimale Plasma Desktop-installatie, verwijder alle extra applicaties en beslis later wat u aan uw systeem wilt toevoegen. Voorbeelden van wat er niet op zo&apos;n installatie staat, er is geen Office Suite, geen mediaspelers, geen beeldviewer of ondersteuning voor afdrukken. Het wordt gewoon een desktop, bestandsbrowser, pakketbeheer, teksteditor en eenvoudige webbrowser.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="193"/>
        <source>Minimal Install</source>
        <translation>Minimale Installatie</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="245"/>
        <source>Please select an option for your install, or use the default: LibreOffice included.</source>
        <translation>Selecteer een optie voor uw installatie of gebruik de standaardinstelling: LibreOffice inbegrepen.</translation>
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
        <translation>&lt;h1&gt;Licentieovereenkomst&lt;/h1&gt;
                    &lt;p&gt;In het geval dat non-free is geselecteerd, zal dit installatieprogramma propriëtaire pakketten installeren die&lt;br /&gt;
                    extra End User License Agreements (EULAs) bevatten.&lt;br /&gt;
                    Gaarne review de End User License Agreements (EULAs).&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq@licenseq.qml" line="61"/>
        <source>I accept the terms and conditions above</source>
        <translation>Ik accepteer de algemene voorwaarden hierboven.</translation>
    </message>
</context>
<context>
    <name>partitionq</name>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="43"/>
        <source>&lt;h3&gt;Full disk encryption&lt;/h3&gt;</source>
        <translation>&lt;h3&gt;Volledige schijfversleuteling&lt;/h3&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="50"/>
        <source>Password</source>
        <translation>Wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="66"/>
        <source>Password (repeat)</source>
        <translation>Wachtwoord (herhalen)</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="92"/>
        <source>Continue</source>
        <translation>Doorgaan</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="95"/>
        <source/>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="99"/>
        <source>Passwords do not match</source>
        <translation>Wachtwoorden komen niet overeen</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="101"/>
        <source>Password too short</source>
        <translation>Wachtwoord is te kort</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="103"/>
        <source>Please wait...</source>
        <translation>Gaarne even wachten...</translation>
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

            &lt;p&gt;The vertical scrollbar is adjustable, current width set to 10.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/release_notes.qml" line="76"/>
        <source>Back</source>
        <translation>Terug</translation>
    </message>
</context>
<context>
    <name>show</name>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="48"/>
        <source>Here the actual install of KaOS will start.&lt;br/&gt;Use the left &lt;b&gt;mouse button&lt;/b&gt; to go to the next slide, right for previous.&lt;br/&gt;After creating your chosen disk setup in the first 10 % &lt;br/&gt;the full copying of the ISO will take the longest of this install phase &lt;br/&gt;and will run until approximately 30%.&lt;br/&gt;</source>
        <translation>Hier begint de feitelijk installatie van KaOS.&lt;br&gt;Gebruik de linker &lt;b&gt;muis knop&lt;/b&gt; om naar de volgende slide te gaan, rechter om terug te gaan.&lt;br&gt;Na het maken van de door u gekozen schijf setup in de eerste 10%&lt;br&gt;het volledig copieren van de ISO neemt de langste tijd in beslag van deze installatie fase &lt;br&gt; en loopt tot ongeveer 30%.&lt;br&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="74"/>
        <source>After the ISO is copied some 25 post-install modules will run.&lt;br/&gt;This includes setting user specific options, &lt;br/&gt;removing Live Session only packages&lt;br/&gt;and adjusting hardware setup.&lt;br/&gt;</source>
        <translation>Nadat de iso is gekopieerd ongeveer 25 post-installatie modules zullen worden uitgevoerd.&lt;br/&gt;Dit omvat instelling van gebruiker specifieke opties, &lt;br/&gt;verwijderen van Live Sessie exclusieve pakketten &lt;br/&gt; en het aanpassen van de hardware setup. &lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="99"/>
        <source>The default Office Suite is LibreOffice.&lt;br/&gt;Calligra is available in the repositories. &lt;br/&gt;</source>
        <translation>De standaard Office Suite is Calligra.&lt;br&gt;Libreoffice is beschikbaar in de repositories.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="122"/>
        <source>Qt/KDE specific internet applications include the &lt;br/&gt;Falkon web-browser and kde-telepathy for &lt;br/&gt;chat and Instant Messaging. &lt;br/&gt;</source>
        <translation>Qt / KDE specifieke internet toepassingen omvat de Falkon web-browser &lt;br/&gt; en kde-telepathie voor chat en Instant Messaging. &lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="146"/>
        <source>For package management Octopi is the GUI application.&lt;br/&gt;</source>
        <translation>Voor pakketbeheer Octopi is de GUI applicatie.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="168"/>
        <source>May using KaOS be a pleasant experience for you.</source>
        <translation>Mag het gebruiken van KaOS een aangename ervaring voor je zijn.</translation>
    </message>
    <message>
        <location filename="../src/branding/default/show.qml" line="55"/>
        <source>This is a second Slide element.</source>
        <translation>This is a second Slide element.</translation>
    </message>
    <message>
        <location filename="../src/branding/default/show.qml" line="59"/>
        <source>This is a third Slide element.</source>
        <translation>This is a third Slide element.</translation>
    </message>
</context>
<context>
    <name>test</name>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="26"/>
        <source>&lt;h3&gt;Welcome to the KaOS &lt;quote&gt;2020.06&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up KaOS on your computer.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Welkom bij het %1 &lt;quote&gt;%2&lt;/quote&gt; installeerprogramma&lt;/h3&gt;
            &lt;p&gt;Dit programma zal u enkele vragen stellen en %1 op uw computer installeren.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="71"/>
        <source>About</source>
        <translation>Informatie</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="84"/>
        <source>Known issues</source>
        <translation>Bekende problemen</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="95"/>
        <source>Release notes</source>
        <translation>Release notes</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="106"/>
        <source>Donate</source>
        <translation>Doneer</translation>
    </message>
</context>
<context>
    <name>usersq</name>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="43"/>
        <source>Pick your user name and credentials to login and perform admin tasks</source>
        <translation>Kies uw gebruikersnaam en inloggegevens om in te loggen en beheertaken uit te voeren</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="56"/>
        <source>What is your name?</source>
        <translation>Wat is uw naam?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="63"/>
        <source>Your Full Name</source>
        <translation>Uw Volledige Naam</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="86"/>
        <source>What name do you want to use to log in?</source>
        <translation>Welke naam wilt u gebruiken om in te loggen?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="93"/>
        <source>Login Name</source>
        <translation>Inlog Naam</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="123"/>
        <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
        <translation>Indien meer dan één persoon deze computer gebruikt, kunt u meerdere accounts na de installatie instellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="152"/>
        <source>What is the name of this computer?</source>
        <translation>Wat is de naam van deze computer?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="158"/>
        <source>Computer Name</source>
        <translation>Computer Naam</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="185"/>
        <source>This name will be used if you make the computer visible to others on a network.</source>
        <translation>Deze naam zal worden gebruikt als u de computer zichtbaar maakt voor anderen op een netwerk.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="214"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Kies een wachtwoord om uw account veilig te houden.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="224"/>
        <source>Password</source>
        <translation>Wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="241"/>
        <source>Repeat Password</source>
        <translation>Herhaal Wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="268"/>
        <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
        <translation>Voer hetzelfde wachtwoord twee keer in, zodat het gecontroleerd kan worden op typefouten. Een goed wachtwoord bevat een combinatie van letters, cijfers en leestekens, is ten minste acht tekens lang en moet regelmatig worden gewijzigd.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="414"/>
        <source>Validate passwords quality</source>
        <translation>Valideer de kwaliteit van wachtwoorden</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="424"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation>Wanneer dit vakje is aangevinkt, wordt de wachtwoordsterkte gecontroleerd en kunt u geen zwak wachtwoord gebruiken.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="406"/>
        <source>Log in automatically without asking for the password</source>
        <translation>Automatisch aanmelden zonder te vragen om het wachtwoord.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="135"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation>Alleen kleine letters, cijfers, onderstrepingstekens en koppeltekens zijn toegestaan.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="143"/>
        <source>root is not allowed as username.</source>
        <translation>root is niet toegestaan als gebruikersnaam.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="197"/>
        <source>Only letters, numbers, underscore and hyphen are allowed, minimal of two characters.</source>
        <translation>Alleen letters, cijfers, onderstrepingstekens en koppeltekens zijn toegestaan, minimaal twee tekens.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="205"/>
        <source>localhost is not allowed as hostname.</source>
        <translation>localhost is niet toegestaan als hostname.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="300"/>
        <source>Reuse user password as root password</source>
        <translation>Hergebruik het gebruikerswachtwoord als root-wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="308"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Gebruik hetzelfde wachtwoord voor het administrator account.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="321"/>
        <source>Choose a root password to keep your account safe.</source>
        <translation>Kies een root wachtwoord om uw account veilig te houden.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="331"/>
        <source>Root Password</source>
        <translation>Root Wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="349"/>
        <source>Repeat Root Password</source>
        <translation>Herhaal Root Wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="376"/>
        <source>Enter the same password twice, so that it can be checked for typing errors.</source>
        <translation>Voer hetzelfde wachtwoord twee keer in, zodat het gecontroleerd kan worden op typefouten.</translation>
    </message>
</context>
<context>
    <name>usersq2</name>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="48"/>
        <source>Pick your user name and credentials to login and perform admin tasks</source>
        <translation>Kies uw gebruikersnaam en inloggegevens om in te loggen en beheertaken uit te voeren</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="64"/>
        <source>What is your name?</source>
        <translation>Wat is uw naam?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="73"/>
        <source>Your Full Name</source>
        <translation>Uw Volledige Naam</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="111"/>
        <source>What name do you want to use to log in?</source>
        <translation>Welke naam wilt u gebruiken om in te loggen?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="119"/>
        <source>Login Name</source>
        <translation>Inlog Naam</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="146"/>
        <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
        <translation>Indien meer dan één persoon deze computer gebruikt, kunt u meerdere accounts na de installatie instellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="159"/>
        <source>Your username must start with a lowercase letter or underscore.</source>
        <translation>Uw gebruikersnaam moet beginnen met een kleine letter of een onderstrepingsteken.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="169"/>
        <source>Choose a root password to keep your account safe.</source>
        <translation>Kies een root wachtwoord om uw account veilig te houden.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="179"/>
        <source>Root Password</source>
        <translation>Root Wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="197"/>
        <source>Repeat Root Password</source>
        <translation>Herhaal Root Wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="223"/>
        <source>Enter the same password twice, so that it can be checked for typing errors.</source>
        <translation>Voer hetzelfde wachtwoord twee keer in, zodat het gecontroleerd kan worden op typefouten.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="255"/>
        <source>Validate passwords quality</source>
        <translation>Valideer de kwaliteit van wachtwoorden</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="267"/>
        <source>Known issues</source>
        <translation>Bekende problemen</translation>
    </message>
</context>
<context>
    <name>usersq3</name>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="31"/>
        <source>Users</source>
        <translation>Gebruikers</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="32"/>
        <source>Pick your user name and credentials to login and perform admin tasks</source>
        <translation>Kies uw gebruikersnaam en inloggegevens om in te loggen en beheertaken uit te voeren</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="64"/>
        <source>What is your name?</source>
        <translation>Wat is uw naam?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="71"/>
        <source>Your Full Name</source>
        <translation>Uw Volledige Naam</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="88"/>
        <source>What name do you want to use to log in?</source>
        <translation>Welke naam wilt u gebruiken om in te loggen?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="89"/>
        <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
        <translation>Indien meer dan één persoon deze computer gebruikt, kunt u meerdere accounts na de installatie instellen.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="96"/>
        <source>Login Name</source>
        <translation>Inlog Naam</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="115"/>
        <source>What is the name of this computer?</source>
        <translation>Wat is de naam van deze computer?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="116"/>
        <source>This name will be used if you make the computer visible to others on a network.</source>
        <translation>Deze naam zal worden gebruikt als u de computer zichtbaar maakt voor anderen op een netwerk.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="122"/>
        <source>Computer Name</source>
        <translation>Computer Naam</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="139"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Kies een wachtwoord om uw account veilig te houden.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="140"/>
        <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
        <translation>Voer hetzelfde wachtwoord twee keer in, zodat het gecontroleerd kan worden op typefouten. Een goed wachtwoord bevat een combinatie van letters, cijfers en leestekens, is ten minste acht tekens lang en moet regelmatig worden gewijzigd.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="146"/>
        <source>Password</source>
        <translation>Wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="168"/>
        <source>Repeat Password</source>
        <translation>Herhaal Wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="188"/>
        <source>Reuse user password as root password</source>
        <translation>Hergebruik het gebruikerswachtwoord als root-wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="201"/>
        <source>Choose a root password to keep your account safe.</source>
        <translation>Kies een root wachtwoord om uw account veilig te houden.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="207"/>
        <source>Root Password</source>
        <translation>Root Wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="228"/>
        <source>Repeat Root Password</source>
        <translation>Herhaal Root Wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="249"/>
        <source>More options.</source>
        <translation>Meer opties</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="255"/>
        <source>Validate passwords quality</source>
        <translation>Valideer de kwaliteit van wachtwoorden</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="264"/>
        <source>Log in automatically without asking for the password</source>
        <translation>Automatisch aanmelden zonder te vragen om het wachtwoord</translation>
    </message>
</context>
<context>
    <name>welcomeq</name>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="35"/>
        <source>&lt;h3&gt;Welcome to the %1 &lt;quote&gt;%2&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up %1 on your computer.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Welkom bij het %1 &lt;quote&gt;%2&lt;/quote&gt; installeerprogramma&lt;/h3&gt;
            &lt;p&gt;Dit programma zal u enkele vragen stellen en %1 op uw computer installeren.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="66"/>
        <source>About</source>
        <translation>Informatie</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="79"/>
        <source>Support</source>
        <translation>Support</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="90"/>
        <source>Known issues</source>
        <translation>Bekende problemen</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="101"/>
        <source>Release notes</source>
        <translation>Release notes</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="113"/>
        <source>Donate</source>
        <translation>Doneer</translation>
    </message>
</context>
</TS>