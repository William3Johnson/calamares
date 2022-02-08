<?xml version="1.0" ?><!DOCTYPE TS><TS version="2.1" language="fr">
<context>
    <name>AutoMountManagementJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/AutoMountManagementJob.cpp" line="22"/>
        <source>Manage auto-mount settings</source>
        <translation>Gérer les paramètres d’automontage</translation>
    </message>
</context>
<context>
    <name>BIOS</name>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="41"/>
        <source>GRUB 2, the GRand Unified Bootloader is the reference implementation of the Free Software Foundation&apos;s Multiboot Specification, which provides a user the choice to boot one of multiple operating systems installed on a computer.</source>
        <translation>GRUB2 (GRand Unified Bootloader) est l’implémentation de référence des spécifications multiboot de la Free Software Foundation. Elle fournit à l’utilisateur le choix du démarrage de plusieurs systèmes d’exploitation installés sur le système.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="54"/>
        <source>GRUB</source>
        <translation>GRUB</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="108"/>
        <source>No bootloader selected. Selecting no bootloader might result in an un-bootable system, if you don&apos;t already have a bootloader were you can add this install to.</source>
        <translation>Aucun chargeur de démarrage n’est sélectionné. La non-sélection d’un chargeur de démarrage peut rendre le système non amorçable si vous n’avez pas déjà un chargeur de démarrage sur lequel vous pouvez ajouter cette installation.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="121"/>
        <source>No bootloader</source>
        <translation>Aucun chargeur de démarrage</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/BIOS.qml" line="173"/>
        <source>Please select a bootloader option for your install, or leave the default option, &lt;strong&gt;GRUB 2&lt;/strong&gt;.</source>
        <translation>Veuillez sélectionner une option de chargeur de démarrage pour votre installation ou laissez l’option par défaut, &lt;strong&gt;GRUB 2&lt;/strong&gt;.</translation>
    </message>
</context>
<context>
    <name>BootInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="62"/>
        <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
        <translation>L’&lt;strong&gt;environnement de démarrage&lt;/strong&gt; de ce système.&lt;br&gt;&lt;br&gt;Les vieux systèmes x86 supportent uniquement &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Les systèmes modernes utilisent généralement &lt;strong&gt;EFI&lt;/strong&gt; mais peuvent aussi se présenter comme BIOS si l’environnement de démarrage fonctionne en mode compatibilité.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="72"/>
        <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
        <translation>Ce système a été démarré avec un environnement de démarrage &lt;strong&gt;EFI&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Pour démarrer depuis une environnement de démarrage EFI, cet installateur doit déployer une application de démarrage, comme &lt;strong&gt;GRUB&lt;/strong&gt; ou &lt;strong&gt;systemd-boot&lt;/strong&gt; sur une &lt;strong&gt;partition système EFI&lt;/strong&gt;. C’est automatique, à moins que vous ne choisissiez le partitionnement manuel, et dans ce cas, vous devez le choisir ou le créer.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="84"/>
        <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
        <translation>Ce système a été démarré avec un environnement de démarrage &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Pour démarrer depuis un environnement BIOS, cet installateur doit installer un chargeur de démarrage, comme &lt;strong&gt;GRUB&lt;/strong&gt;, soit au début de la partition, soit sur le &lt;strong&gt;Master Boot Record&lt;/strong&gt; au tout début à côté de la table de partitions (préféré). C’est automatique, à moins que vous ne choisissiez le partitionnement manuel, et dans ce cas, vous devez le choisir ou le créer.</translation>
    </message>
</context>
<context>
    <name>BootLoaderModel</name>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="59"/>
        <source>Master Boot Record of %1</source>
        <translation>Master Boot Record de %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="92"/>
        <source>Boot Partition</source>
        <translation>Partition de démarrage</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="99"/>
        <source>System Partition</source>
        <translation>Partition Système</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="129"/>
        <source>Do not install a boot loader</source>
        <translation>Ne pas installer le chargeur de démarrage</translation>
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
        <translation>Page vide</translation>
    </message>
</context>
<context>
    <name>Calamares::DebugWindow</name>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="18"/>
        <source>Form</source>
        <translation>Form</translation>
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
        <translation>Type :</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="68"/>
        <location filename="../src/calamares/DebugWindow.ui" line="82"/>
        <source>none</source>
        <translation>aucun</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="75"/>
        <source>Interface:</source>
        <translation>Interface :</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="102"/>
        <source>Crashes Calamares, so that Dr. Konqui can look at it.</source>
        <translation>Calarames a crashé, vérification par Dr. Konqui.</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="115"/>
        <source>Reloads the stylesheet from the branding directory.</source>
        <translation>Recharge la feuille de style à partir du répertoire propre à la distribution.</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="141"/>
        <source>Uploads the session log to the configured pastebin.</source>
        <translation>Téléverse le log de session sur le pastebin configuré.</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="144"/>
        <source>Send Session Log</source>
        <translation>Envoyer le log de session</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="118"/>
        <source>Reload Stylesheet</source>
        <translation>Rafraîchir la feuille de styles</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="128"/>
        <source>Displays the tree of widget names in the log (for stylesheet debugging).</source>
        <translation>Affiche l’arborescence des noms de widgets dans le log (pour le débogage de la feuille de style).</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.ui" line="131"/>
        <source>Widget Tree</source>
        <translation>Arborescence des widgets</translation>
    </message>
    <message>
        <location filename="../src/calamares/DebugWindow.cpp" line="221"/>
        <source>Debug information</source>
        <translation>Informations de débogage</translation>
    </message>
</context>
<context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="88"/>
        <source>Set up</source>
        <translation>Installer</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="88"/>
        <source>Install</source>
        <translation>Installer</translation>
    </message>
</context>
<context>
    <name>Calamares::FailJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="29"/>
        <source>Job failed (%1)</source>
        <translation>La tâche a échoué (%1)</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="30"/>
        <source>Programmed job failure was explicitly requested.</source>
        <translation>L’échec de la tâche programmée a été explicitement demandée.</translation>
    </message>
</context>
<context>
    <name>Calamares::JobThread</name>
    <message>
        <location filename="../src/libcalamares/JobQueue.cpp" line="202"/>
        <source>Done</source>
        <translation>Fait</translation>
    </message>
</context>
<context>
    <name>Calamares::NamedJob</name>
    <message>
        <location filename="../src/libcalamares/JobExample.cpp" line="17"/>
        <source>Example job (%1)</source>
        <translation>Tâche d’exemple (%1)</translation>
    </message>
</context>
<context>
    <name>Calamares::ProcessJob</name>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="42"/>
        <source>Run command &apos;%1&apos; in target system.</source>
        <translation>Exécuter la commande &apos;%1&apos; sur le système cible.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="42"/>
        <source> Run command &apos;%1&apos;.</source>
        <translation>Exécuter la commande &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/ProcessJob.cpp" line="49"/>
        <source>Running command %1 %2</source>
        <translation>Exécution de la commande %1 %2</translation>
    </message>
</context>
<context>
    <name>Calamares::PythonJob</name>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="233"/>
        <source>Running %1 operation.</source>
        <translation>Opération %1 lancée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="262"/>
        <source>Bad working directory path</source>
        <translation>Chemin du répertoire de travail invalide</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="263"/>
        <source>Working directory %1 for python job %2 is not readable.</source>
        <translation>Le répertoire de travail %1 pour le job python %2 n&apos;est pas accessible en lecture.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="269"/>
        <source>Bad main script file</source>
        <translation>Fichier de script principal invalide</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="270"/>
        <source>Main script file %1 for python job %2 is not readable.</source>
        <translation>Le fichier de script principal %1 pour la tâche python %2 n&apos;est pas accessible en lecture.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonJob.cpp" line="343"/>
        <source>Boost.Python error in job &quot;%1&quot;.</source>
        <translation>Erreur Boost.Python pour le job &quot;%1&quot;.</translation>
    </message>
</context>
<context>
    <name>Calamares::QmlViewStep</name>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="67"/>
        <source>Loading ...</source>
        <translation>Chargement…</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="88"/>
        <source>QML Step &lt;i&gt;%1&lt;/i&gt;.</source>
        <translation>Étape QML&lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="268"/>
        <source>Loading failed.</source>
        <translation>Le chargement a échoué.</translation>
    </message>
</context>
<context>
    <name>Calamares::RequirementsChecker</name>
    <message>
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="94"/>
        <source>Requirements checking for module &lt;i&gt;%1&lt;/i&gt; is complete.</source>
        <translation>La vérification de la configuration requise pour le module &lt;i&gt;%1&lt;/i&gt; est complète.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="115"/>
        <source>Waiting for %n module(s).</source>
        <translation><numerusform>En attente de %n module(s).</numerusform><numerusform>En attente de %n module(s).</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="116"/>
        <source>(%n second(s))</source>
        <translation><numerusform>(%n seconde(s))</numerusform><numerusform>(%n seconde(s))</numerusform></translation>
    </message>
    <message>
        <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="121"/>
        <source>System-requirements checking is complete.</source>
        <translation>La vérification de la configuration requise est complète.</translation>
    </message>
</context>
<context>
    <name>Calamares::ViewManager</name>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="397"/>
        <source>&amp;Back</source>
        <translation>&amp;Précédent</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="392"/>
        <source>&amp;Next</source>
        <translation>&amp;Suivant</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="422"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuler</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="381"/>
        <source>Cancel setup without changing the system.</source>
        <translation>Annuler la configuration sans changer le système.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="382"/>
        <source>Cancel installation without changing the system.</source>
        <translation>Annuler l’installation sans changer le système.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="160"/>
        <source>Setup Failed</source>
        <translation>L’installation a échoué</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="178"/>
        <source>Install log posted to

%1

Link copied to clipboard</source>
        <translation>Log d’installation posté sur :

%1

Lien copié dans le presse-papier</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="184"/>
        <source>Install Log Paste URL</source>
        <translation>URL de la copie du log d’installation</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/utils/Paste.cpp" line="166"/>
        <source>The upload was unsuccessful. No web-paste was done.</source>
        <translation>Le téléversement n’a pas réussi. Aucune copie web n’a été effectuée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="189"/>
        <source>Calamares Initialization Failed</source>
        <translation>L’initialisation de Calamares a échoué</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="190"/>
        <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
        <translation>%1 ne peut être installé. Calamares n’a pu charger tous les modules configurés. Ceci est un problème lié à la façon dont la distribution utilise Calamares.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="196"/>
        <source>&lt;br/&gt;The following modules could not be loaded:</source>
        <translation>&lt;br/&gt;Les modules suivants ne peuvent être chargés :</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="310"/>
        <source>Continue with installation?</source>
        <translation>Poursuivre l’installation ?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="312"/>
        <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>L’installateur %1 s’apprête à effectuer des changements sur votre disque pour installer %2.&lt;br/&gt;&lt;strong&gt;Vous ne pourrez pas annuler ces changements.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="318"/>
        <source>&amp;Set up now</source>
        <translation>&amp;Commencer l’installation maintenant</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="376"/>
        <source>&amp;Set up</source>
        <translation>&amp;Installation</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="376"/>
        <source>&amp;Install</source>
        <translation>&amp;Installer</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="378"/>
        <source>Setup is complete. Close the setup program.</source>
        <translation>L’installation est terminée. Fermer le programme d’installation.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="495"/>
        <source>Cancel setup?</source>
        <translation>Annuler l’installation ?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="495"/>
        <source>Cancel installation?</source>
        <translation>Annuler l&apos;installation ?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="496"/>
        <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
        <translation>Voulez-vous vraiment annuler le processus d’installation en cours ? Le programme d’installation sera fermé et tous vos changements seront perdus.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="498"/>
        <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
        <translation>Voulez-vous réellement annuler l&apos;installation en cours ?
L&apos;installateur va fermer et tous les changements seront perdus.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="90"/>
        <source>&amp;Yes</source>
        <translation>&amp;Oui</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="91"/>
        <source>&amp;No</source>
        <translation>&amp;Non</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="92"/>
        <source>&amp;Close</source>
        <translation>&amp;Fermer</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="310"/>
        <source>Continue with setup?</source>
        <translation>Continuer avec cette configuration ?</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="315"/>
        <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
        <translation>L’installateur %1 s’apprête à effectuer des changement sur votre disque pour installer %2.&lt;br/&gt;&lt;strong&gt;Vous ne pourrez pas annuler ces changements.&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="318"/>
        <source>&amp;Install now</source>
        <translation>&amp;Installer maintenant</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="326"/>
        <source>Go &amp;back</source>
        <translation>&amp;Revenir en arrière</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="403"/>
        <source>&amp;Done</source>
        <translation>&amp;Terminé</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="379"/>
        <source>The installation is complete. Close the installer.</source>
        <translation>L’installation est complète. Vous pouvez fermer l’installateur.</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="163"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/ViewManager.cpp" line="160"/>
        <source>Installation Failed</source>
        <translation>Installation échouée</translation>
    </message>
</context>
<context>
    <name>CalamaresPython::Helper</name>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="302"/>
        <source>Unknown exception type</source>
        <translation>Type d&apos;exception inconnu</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="320"/>
        <source>unparseable Python error</source>
        <translation>Erreur Python non analysable</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="364"/>
        <source>unparseable Python traceback</source>
        <translation>Traçage Python non exploitable</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/PythonHelper.cpp" line="371"/>
        <source>Unfetchable Python error.</source>
        <translation>Erreur Python non rapportable.</translation>
    </message>
</context>
<context>
    <name>CalamaresWindow</name>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="370"/>
        <source>%1 Setup Program</source>
        <translation>Programme d’installation %1</translation>
    </message>
    <message>
        <location filename="../src/calamares/CalamaresWindow.cpp" line="371"/>
        <source>%1 Installer</source>
        <translation>Installateur %1</translation>
    </message>
</context>
<context>
    <name>ChangeFilesystemLabelJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="32"/>
        <source>Set filesystem label on %1.</source>
        <translation>Configure l’étiquette du système de fichiers à %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="39"/>
        <source>Set filesystem label &lt;strong&gt;%1&lt;/strong&gt; to partition &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Configure la partition &lt;strong&gt;%2&lt;/strong&gt; avec l’étiquette du système de fichier &lt;strong&gt;%1&lt;/strong&gt;. </translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="70"/>
        <source>The installer failed to update partition table on disk &apos;%1&apos;.</source>
        <translation>Le programme d&apos;installation n’a pu mettre à jour la table de partitionnement sur le disque &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CheckerContainer</name>
    <message>
        <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="38"/>
        <source>Gathering system information...</source>
        <translation>Récupération des informations système…</translation>
    </message>
</context>
<context>
    <name>ChoicePage</name>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="139"/>
        <source>After:</source>
        <translation>Après :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1033"/>
        <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
        <translation>%1 va être rétrécie à %2Mio et une nouvolle partition de %3Mio sera créée pour %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1390"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1427"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1449"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1474"/>
        <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color=&quot;red&quot;&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
        <translation>&lt;strong&gt;Effacer le disque&lt;/strong&gt;&lt;br/&gt;Cela va&lt;font color=&quot;red&quot;&gt;supprimer&lt;/font&gt; toutes les données présentes dans le périphérique de stockage.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1394"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1423"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1445"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1470"/>
        <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
        <translation>&lt;strong&gt;Installer à côté&lt;/strong&gt;&lt;br/&gt;L’installateur va rétrécir le volume pour faire de la place pour %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1398"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1432"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1453"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1478"/>
        <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
        <translation>&lt;strong&gt;Remplacer une partition&lt;/strong&gt;&lt;br/&gt; Remplace une partition avec %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1091"/>
        <source>Boot loader location:</source>
        <translation>Emplacement du chargeur de démarrage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="137"/>
        <source>Select storage de&amp;vice:</source>
        <translation>Sélectionner le pé&amp;riphérique de stockage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="138"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1014"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1062"/>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1159"/>
        <source>Current:</source>
        <translation>Actuel :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="879"/>
        <source>Reuse %1 as home partition for %2.</source>
        <translation>Utiliser %1 comme partition home pour %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1015"/>
        <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Sélectionner la partition à rétrécir, puis glisser sur la barre du bas pour modifier la taille&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1150"/>
        <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
        <translation>&lt;strong&gt;Sélectionner la partition d’installation&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1209"/>
        <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>Aucune partition système EFI n’a pu être trouvée sur ce système. Veuillez recommencer et utiliser le partitionnement manuel pour configurer %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1217"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>La partition système EFI %1 sera utilisée pour démarrer %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1225"/>
        <source>EFI system partition:</source>
        <translation>Partition système EFI :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1385"/>
        <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ce périphérique de stockage ne semble pas avoir de système d’exploitation. Que voulez-vous faire ?&lt;br/&gt;Vous pourrez vérifier et confirmer vos choix avant que les changements soient appliqués sur ce périphérique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1417"/>
        <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ce périphérique de stockage contient %1. Que voulez-vous faire ?&lt;br/&gt;Vous pourrez vérifier et confirmer vos choix avant que les changements soient appliqués sur ce périphérique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1440"/>
        <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ce périphérique de stockage contient un système d’exploitation. Que voulez-vous faire ?&lt;br/&gt;Vous pourrez vérifier et confirmer vos choix avant que les changements soient appliqués sur ce périphérique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1465"/>
        <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
        <translation>Ce périphérique de stockage a plusieurs systèmes d’exploitation. Que voulez-vous faire ?&lt;br/&gt;Vous pourrez vérifier et confirmer vos choix avant que les changements soient appliqués sur ce périphérique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1537"/>
        <source>This storage device already has an operating system on it, but the partition table &lt;strong&gt;%1&lt;/strong&gt; is different from the needed &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</source>
        <translation>Le périphérique de stockage possède déjà un système d’exploitation mais la table de partitions &lt;strong&gt;%1&lt;/strong&gt; est différente du format nécessaire &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1560"/>
        <source>This storage device has one of its partitions &lt;strong&gt;mounted&lt;/strong&gt;.</source>
        <translation>Une des partitions de ce périphérique de stockage est &lt;strong&gt;montée&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1565"/>
        <source>This storage device is a part of an &lt;strong&gt;inactive RAID&lt;/strong&gt; device.</source>
        <translation>Ce périphérique de stockage fait partie d’un périphérique &lt;strong&gt;RAID inactif&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1692"/>
        <source>No Swap</source>
        <translation>Pas de Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1701"/>
        <source>Reuse Swap</source>
        <translation>Réutiliser la Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1704"/>
        <source>Swap (no Hibernate)</source>
        <translation>Swap (pas d’hibernation)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1707"/>
        <source>Swap (with Hibernate)</source>
        <translation>Swap (avec hibernation)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1710"/>
        <source>Swap to file</source>
        <translation>Swap dans un fichier</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1723"/>
        <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.&lt;br/&gt;Having a GPT partition table and &lt;strong&gt;fat32 512Mb /boot partition is a must for UEFI installs&lt;/strong&gt;,&lt;br/&gt;either use an existing without formatting or create one.</source>
        <translation>&lt;strong&gt;Partitionnement manuel&lt;/strong&gt; &lt;br/&gt;Vous pouvez créer ou retailler les partitions vous-même.&lt;br/&gt; Une table de partitions GPT et &lt;strong&gt;une partition /boot en fat32 de 512Mo est idéqle pour les installations UEFI&lt;/strong&gt;, &lt;br/&gt;ou bien utilisez une partition existante  sans la formater ou créez-en une.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ChoicePage.ui" line="18"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
</context>
<context>
    <name>ClearMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="272"/>
        <source>Successfully unmounted %1.</source>
        <translation>%1 démonté avec succès.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="279"/>
        <source>Successfully disabled swap %1.</source>
        <translation>Swap %1 désactivée avec succès.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="305"/>
        <source>Successfully cleared swap %1.</source>
        <translation>Swap %1 effacée avec succès.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="319"/>
        <source>Successfully closed mapper device %1.</source>
        <translation>Le device mapper %1 a été fermé avec succès.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="332"/>
        <source>Successfully disabled volume group %1.</source>
        <translation>Groupe de volume %1 désactivé avec succès.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="371"/>
        <source>Clear mounts for partitioning operations on %1</source>
        <translation>Effacer les montages pour les opérations de partitionnement sur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="377"/>
        <source>Clearing mounts for partitioning operations on %1.</source>
        <translation>Effacement des montages pour les opérations de partitionnement sur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="396"/>
        <source>Cleared all mounts for %1</source>
        <translation>Tous les les partitions sont démontées pour %1</translation>
    </message>
</context>
<context>
    <name>ClearTempMountsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="33"/>
        <source>Clear all temporary mounts.</source>
        <translation>Effacer tous les montages temporaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="40"/>
        <source>Clearing all temporary mounts.</source>
        <translation>Effacement tous les montages temporaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="70"/>
        <source>Cleared all temporary mounts.</source>
        <translation>Tous les montages temporaires ont été effacés.</translation>
    </message>
</context>
<context>
    <name>CommandList</name>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="142"/>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="155"/>
        <source>Could not run command.</source>
        <translation>Impossible de lancer la commande.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="143"/>
        <source>The command runs in the host environment and needs to know the root path, but no rootMountPoint is defined.</source>
        <translation>La commande s’exécute dans l’environnement hôte et doit connaître le chemin racine, mais aucun point de montage racine n’est défini.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CommandList.cpp" line="156"/>
        <source>The command needs to know the user&apos;s name, but no username is defined.</source>
        <translation>La commande doit connaître le nom de l’utilisateur, mais aucun nom d’utilisateur n&apos;est défini.</translation>
    </message>
</context>
<context>
    <name>Config</name>
    <message>
        <location filename="../src/modules/keyboard/Config.cpp" line="354"/>
        <source>Set keyboard model to %1.&lt;br/&gt;</source>
        <translation>Configurer le modèle de clavier à %1.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/Config.cpp" line="361"/>
        <source>Set keyboard layout to %1/%2.</source>
        <translation>Configurer l&apos;agencement clavier à %1/%2.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="353"/>
        <source>Set timezone to %1/%2.</source>
        <translation>Configurer le fuseau-horaire à %1/%2.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="391"/>
        <source>The system language will be set to %1.</source>
        <translation>La langue du système utilisée sera %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/Config.cpp" line="398"/>
        <source>The numbers and dates locale will be set to %1.</source>
        <translation>Le format local des nombres et des dates utilisé sera %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="55"/>
        <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;br/&gt;L’installation ne peut pas continuer.&lt;a href=&quot;#details&quot;&gt;Détails…&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="59"/>
        <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href=&quot;#details&quot;&gt;Details...&lt;/a&gt;</source>
        <translation>Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;br/&gt;L’installation ne peut pas continuer.&lt;a href=&quot;#details&quot;&gt;Détails…&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="66"/>
        <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
        <translation>Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;br/&gt;L’installation peut continuer, mais certaines fonctionnalités peuvent être désactivées.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="70"/>
        <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
        <translation>Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;br/&gt;L’installation peut continuer, mais certaines fonctionnalités peuvent être désactivées.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="80"/>
        <source>This program will ask you some questions and set up %2 on your computer.</source>
        <translation>Ce programme va vous poser des questions et configurer %2 sur votre ordinateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="250"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenue sur l’installateur Calamares pour %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="251"/>
        <source>&lt;h1&gt;Welcome to %1 setup&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenue sur l’installateur %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="255"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenue sur l’installateur Calamares pour %1&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/Config.cpp" line="256"/>
        <source>&lt;h1&gt;Welcome to the %1 installer&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenue sur l’installateur %1&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="94"/>
        <source>Summary</source>
        <translation>Résumé</translation>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="98"/>
        <source>This is an overview of what will happen once you start the setup procedure.</source>
        <translation>Ceci est un aperçu de ce qui va se passer une fois la procédure d’installation lancée.</translation>
    </message>
    <message>
        <location filename="../src/modules/summary/Config.cpp" line="103"/>
        <source>This is an overview of what will happen once you start the install procedure.</source>
        <translation>Ceci est un aperçu de ce qui va se passer une fois la procédure d’installation lancée.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="217"/>
        <source>Your username is too long.</source>
        <translation>Votre nom d’utilisateur est trop long.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="223"/>
        <source>&apos;%1&apos; is not allowed as username.</source>
        <translation>&apos;%1&apos; n’est par un nom d’utilisateur autorisé.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="230"/>
        <source>Your username must start with a lowercase letter or underscore.</source>
        <translation>Votre nom d’utilisateur doit commencer par une lettre minuscule ou un tiret-bas.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="234"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation>Seuls les lettres minuscules, les nombres, les tirets-bas et les traits d’union sont autorisés.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="279"/>
        <source>Your hostname is too short.</source>
        <translation>Votre nom d’hôte est trop court.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="283"/>
        <source>Your hostname is too long.</source>
        <translation>Votre nom d’hôte est trop long.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="289"/>
        <source>&apos;%1&apos; is not allowed as hostname.</source>
        <translation>&apos;%1&apos; n’est par un nom d’hôte autorisé.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="295"/>
        <source>Only letters, numbers, underscore and hyphen are allowed.</source>
        <translation>Seuls les lettres, les nombres, les tirets-bas et les traits d’union sont autorisés.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="534"/>
        <source>Your passwords do not match!</source>
        <translation>Vos mots de passe ne correspondent pas !</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="548"/>
        <source>OK!</source>
        <translation>OK !</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="145"/>
        <source>Setup Failed</source>
        <translation>L’installation a échoué</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="145"/>
        <source>Installation Failed</source>
        <translation>Installation échouée</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="147"/>
        <source>The setup of %1 did not complete successfully.</source>
        <translation>La configuration %1 ne s’est pas terminée complètement.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="148"/>
        <source>The installation of %1 did not complete successfully.</source>
        <translation>L’installation de %1 ne s’est pas terminée complètement.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="152"/>
        <source>Setup Complete</source>
        <translation>Configuration terminée</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="153"/>
        <source>Installation Complete</source>
        <translation>Installation terminée</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="154"/>
        <source>The setup of %1 is complete.</source>
        <translation>La configuration de %1 est terminée.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/Config.cpp" line="155"/>
        <source>The installation of %1 is complete.</source>
        <translation>L’installation de %1 est terminée.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="111"/>
        <source>Package Selection</source>
        <translation>Sélection de paquets</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="113"/>
        <source>Please pick a product from the list. The selected product will be installed.</source>
        <translation>Veuillez choisir un produit dans la liste. Le produit sélectionné sera installé.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="243"/>
        <source>Install option: &lt;strong&gt;%1&lt;/strong&gt;</source>
        <translation>Option d’installation : &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/Config.cpp" line="243"/>
        <source>None</source>
        <translation>Aucun</translation>
    </message>
</context>
<context>
    <name>CreatePartitionDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="18"/>
        <source>Create a Partition</source>
        <translation>Créer une partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="52"/>
        <source> MiB</source>
        <translation>Mio</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="59"/>
        <source>Partition &amp;Type:</source>
        <translation>Type de partition :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="71"/>
        <source>Primar&amp;y</source>
        <translation>Primai&amp;re</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="81"/>
        <source>E&amp;xtended</source>
        <translation>É&amp;tendue</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="123"/>
        <source>Fi&amp;le System:</source>
        <translation>Système de Fi&amp;chiers :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="155"/>
        <source>LVM LV name</source>
        <translation>Nom du LVM LV</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="191"/>
        <source>Flags:</source>
        <translation>Drapeaux :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="224"/>
        <source>Label for the filesystem</source>
        <translation>Étiquette du système de fichiers</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="234"/>
        <source>FS Label:</source>
        <translation>Étiquette du système de fichier :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="165"/>
        <source>&amp;Mount Point:</source>
        <translation>Point de &amp;Montage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="42"/>
        <source>Si&amp;ze:</source>
        <translation>Ta&amp;ille :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="66"/>
        <source>En&amp;crypt</source>
        <translation>En&amp;crypter</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="194"/>
        <source>Logical</source>
        <translation>Logique</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="199"/>
        <source>Primary</source>
        <translation>Primaire</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="218"/>
        <source>GPT</source>
        <translation>GPT</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="91"/>
        <source>Mountpoint already in use. Please select another one.</source>
        <translation>Le point de montage est déjà utilisé. Veuillez en choisir un autre.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="96"/>
        <source>Mountpoint must start with a &lt;tt&gt;/&lt;/tt&gt;.</source>
        <translation>Le point de montage doit commencer par &lt;tt&gt;/&lt;/tt&gt;.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="187"/>
        <source>Create new %1MiB partition on %3 (%2) with entries %4.</source>
        <translation>Créer une nouvelle partition de %1Mio sur %3 (%2) avec les entrées %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="195"/>
        <source>Create new %1MiB partition on %3 (%2).</source>
        <translation>Créer une nouvelle partition de %1Mio sur %3 (%2).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="202"/>
        <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
        <translation>Créer une nouvelle partition de %2Mio sur %4 (%3) avec un système de fichier %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="219"/>
        <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2) with entries &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation>Créer un nouvelle partition de &lt;strong&gt;%1Mio&lt;/strong&gt; sur &lt;strong&gt;%3&lt;/strong&gt; (%2) avec les entrées &lt;em&gt;%4&lt;/em&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="228"/>
        <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2).</source>
        <translation>Créer une nouvelle partition de &lt;strong&gt;%1Mio&lt;/strong&gt; sur &lt;strong&gt;%3&lt;/strong&gt; (%2).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="235"/>
        <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Créer une nouvelle partition de &lt;strong&gt;%2Mio&lt;/strong&gt; sur &lt;strong&gt;%4&lt;/strong&gt; (%3) avec une système de fichier &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="260"/>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="263"/>
        <source>Creating new %1 partition on %2.</source>
        <translation>Création d’une nouvelle table de partitions %1 sur %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="280"/>
        <source>The installer failed to create partition on disk &apos;%1&apos;.</source>
        <translation>Le programme d&apos;installation n&apos;a pu créer la partition sur le disque &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="24"/>
        <source>Create Partition Table</source>
        <translation>Créer une table de partitionnement</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="43"/>
        <source>Creating a new partition table will delete all existing data on the disk.</source>
        <translation>Créer une nouvelle table de partitionnement supprimera toutes les données existantes sur le disque.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="69"/>
        <source>What kind of partition table do you want to create?</source>
        <translation>Quel type de table de partitionnement voulez-vous créer ?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="76"/>
        <source>Master Boot Record (MBR)</source>
        <translation>Master Boot Record (MBR)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="86"/>
        <source>GUID Partition Table (GPT)</source>
        <translation>Table de partitionnement GUID (GPT)</translation>
    </message>
</context>
<context>
    <name>CreatePartitionTableJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="41"/>
        <source>Create new %1 partition table on %2.</source>
        <translation>Créer une nouvelle table de partitions %1 sur %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="49"/>
        <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
        <translation>Créer une nouvelle table de partitions &lt;strong&gt;%1&lt;/strong&gt; sur &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="59"/>
        <source>Creating new %1 partition table on %2.</source>
        <translation>Création d’une nouvelle table de partitions %1 sur %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="88"/>
        <source>The installer failed to create a partition table on %1.</source>
        <translation>Le programme d&apos;installation n&apos;a pu créer la table de partitionnement sur le disque %1.</translation>
    </message>
</context>
<context>
    <name>CreateUserJob</name>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="35"/>
        <source>Create user %1</source>
        <translation>Créer l&apos;utilisateur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="42"/>
        <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Créer l’utilisateur &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="49"/>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="142"/>
        <source>Creating user %1</source>
        <translation>Création de l’utilisateur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="125"/>
        <source>Preserving home directory</source>
        <translation>Conservation du répertoire home</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="150"/>
        <source>Configuring user %1</source>
        <translation>Configuration de l’utilisateur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CreateUserJob.cpp" line="158"/>
        <source>Setting file permissions</source>
        <translation>Configuration des permissions de fichier</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="28"/>
        <source>Create Volume Group</source>
        <translation>Créer un groupe de volumes</translation>
    </message>
</context>
<context>
    <name>CreateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="32"/>
        <source>Create new volume group named %1.</source>
        <translation>Créer un nouveau groupe de volumes nommé %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="38"/>
        <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Créer un nouveau groupe de volumes nommé &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="44"/>
        <source>Creating new volume group named %1.</source>
        <translation>Création d’un nouveau groupe de volumes nommé %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="51"/>
        <source>The installer failed to create a volume group named &apos;%1&apos;.</source>
        <translation>Le programme d’installation n’a pu créer un groupe de volumes nommé &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="26"/>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="38"/>
        <source>Deactivate volume group named %1.</source>
        <translation>Désactiver le groupe de volumes nommé %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="32"/>
        <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Désactiver le groupe de volumes nommé &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="46"/>
        <source>The installer failed to deactivate a volume group named %1.</source>
        <translation>Le programme d’installation n’a pu désactiver un groupe de volumes nommé &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>DeletePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="73"/>
        <source>Delete partition %1.</source>
        <translation>Effacer la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="80"/>
        <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Effacer la partition &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="87"/>
        <source>Deleting partition %1.</source>
        <translation>Suppression de la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="102"/>
        <source>The installer failed to delete partition %1.</source>
        <translation>Le programme d&apos;installation n&apos;a pu supprimer la partition %1.</translation>
    </message>
</context>
<context>
    <name>DeviceInfoWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="151"/>
        <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
        <translation>Le type de &lt;strong&gt;table de partitions&lt;/strong&gt; actuellement présent sur le périphérique de stockage sélectionné.&lt;br&gt;&lt;br&gt;La seule façon de changer la table de partitions et de l’écraser et de la recréer de zéro, ce qui va détruire toutes les données du périphérique.&lt;br&gt;Cet installateur va conserver la table de partitions actuelle à moins que vous ne choisissiez autrement.&lt;br&gt;Si vous n’êtes pas sûr, GPT est un bon choix pour les systèmes modernes.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="143"/>
        <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
        <translation>Ce périphérique a une table de partitions &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="97"/>
        <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
        <translation>Ceci est un périphérique &lt;strong&gt;loop&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;C’est un pseudo-périphérique sans table de partitions qui permet d’accéder à un fichier comme un périphérique physique. Ce type de configuration contient généralement qu’un seul système de fichiers.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="108"/>
        <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
        <translation>Cet installateur &lt;strong&gt;ne peut détecter de table de partitions&lt;/strong&gt; sur le périphérique de stockage sélectionné.&lt;br&gt;&lt;br&gt;Soit ce périphérique n’a pas de table de partitions, soit la table de partitions est corrompues ou d’un type inconnu.&lt;br&gt;Cet installateur peut créer une nouvelle table de partitions pour vous, soit automatiquement, soit via la page de partitionnement manuel.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="91"/>
        <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
        <translation>&lt;br&gt;&lt;br&gt;C’est le type de table de partitions recommandé pour les systèmes modernes qui démarrent depuis un environnement de démarrage &lt;strong&gt;EFI&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="80"/>
        <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
        <translation>&lt;br&gt;&lt;br&gt;Ce type de table de partitions est nécessaire uniquement sur les vieux systèmes démarrant depuis un environnement &lt;strong&gt;BIOS&lt;/strong&gt;. Pour la plupart des usages, GPT devrait être préféré.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Attention :&lt;/strong&gt; la table de partitions MBR est un stantard obsolète.&lt;br&gt;Seules 4 partitions &lt;em&gt;primaires&lt;/em&gt; peuvent être créées, et parmi ces 4, une peut être une partition &lt;em&gt;étendue&lt;/em&gt; qui peut elle-même contenir de nombreuses partitions &lt;em&gt;logiques&lt;/em&gt;.</translation>
    </message>
</context>
<context>
    <name>DeviceModel</name>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="82"/>
        <source>%1 - %2 (%3)</source>
        <extracomment>device[name] - size[number] (device-node[name])</extracomment>
        <translation>%1 - %2 (%3)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/DeviceModel.cpp" line="93"/>
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
        <translation>Éditer une partition existante</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="54"/>
        <source>Con&amp;tent:</source>
        <translation>Con&amp;tenu :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="64"/>
        <source>&amp;Keep</source>
        <translation>&amp;Garder</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="74"/>
        <source>Format</source>
        <translation>Formater</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="93"/>
        <source>Warning: Formatting the partition will erase all existing data.</source>
        <translation>Attention : le formatage de cette partition effacera toutes les données existantes.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="103"/>
        <source>&amp;Mount Point:</source>
        <translation>Point de &amp;Montage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="129"/>
        <source>Si&amp;ze:</source>
        <translation>Ta&amp;ille :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="139"/>
        <source> MiB</source>
        <translation>Mio</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="146"/>
        <source>Fi&amp;le System:</source>
        <translation>Système de Fi&amp;chiers :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="159"/>
        <source>Flags:</source>
        <translation>Drapeaux :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="179"/>
        <source>Label for the filesystem</source>
        <translation>Étiquette du système de fichiers</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="189"/>
        <source>FS Label:</source>
        <translation>Étiquette du système de fichier :</translation>
    </message>
</context>
<context>
    <name>EncryptWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="18"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="36"/>
        <source>En&amp;crypt system</source>
        <translation>Enc&amp;rypter le système</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="43"/>
        <source>Your system does not seem to support encryption well enough to encrypt the entire system. You may enable encryption, but performance may suffer.</source>
        <translation>Votre système ne semble pas prendre en charge le chiffrement suffisamment correctement pour chiffrer l&apos;ensemble du système. Vous pouvez activer le chiffrement, mais les performances risquent d&apos;en souffrir.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="59"/>
        <source>Passphrase</source>
        <translation>Phrase secrète</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="69"/>
        <source>Confirm passphrase</source>
        <translation>Confirmer la phrase secrète</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="134"/>
        <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="144"/>
        <source>Please enter the same passphrase in both boxes.</source>
        <translation>Veuillez saisir la même phrase secrète dans les deux boîtes.</translation>
    </message>
</context>
<context>
    <name>ErrorDialog</name>
    <message>
        <location filename="../src/libcalamaresui/widgets/ErrorDialog.ui" line="36"/>
        <source>Details:</source>
        <translation>Détails :</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/ErrorDialog.ui" line="52"/>
        <source>Would you like to paste the install log to the web?</source>
        <translation>Souhaitez-vous copier le log d’installation sur le Web ?</translation>
    </message>
</context>
<context>
    <name>FillGlobalStorageJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="172"/>
        <source>Set partition information</source>
        <translation>Configurer les informations de la partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="201"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition with features &lt;em&gt;%3&lt;/em&gt;</source>
        <translation>Installer %1 sur lu &lt;strong&gt;nouvelle&lt;/strong&gt; partition système %2 avec les fonctionnalités &lt;em&gt;%3&lt;/em&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="209"/>
        <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
        <translation>Installer %1 sur une &lt;strong&gt;nouvelle&lt;/strong&gt; partition système %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="218"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt; and features &lt;em&gt;%3&lt;/em&gt;.</source>
        <translation>Configurer une &lt;strong&gt;nouvelle&lt;/strong&gt; partition %2 avec le point de montage &lt;strong&gt;%1&lt;/strong&gt; et les fonctionnalités &lt;em&gt;%3&lt;/em&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="226"/>
        <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;%3.</source>
        <translation>Configurer une &lt;strong&gt;nouvelle&lt;/strong&gt; partition %2 avec le point de montage &lt;strong&gt;%1&lt;/strong&gt; %3.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="240"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt; with features &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation>Installer %2 sur la partition système %3 &lt;strong&gt;%1&lt;/strong&gt; avec les fonctionnalités &lt;em&gt;%4&lt;/em&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="259"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt; and features &lt;em&gt;%4&lt;/em&gt;.</source>
        <translation>Configurer la partition %3 &lt;strong&gt;%1&lt;/strong&gt; avec le point de montage &lt;strong&gt;%2&lt;/strong&gt; et les fonctionnalités &lt;em&gt;%4&lt;/em&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="268"/>
        <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;%4.</source>
        <translation>Configurer la partition %3 &lt;strong&gt;%1&lt;/strong&gt; avec le point de montage &lt;strong&gt;%2&lt;/strong&gt; %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="249"/>
        <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Installer %2 sur %3 avec la partition système &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="283"/>
        <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Installer le chargeur de démarrage sur &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="292"/>
        <source>Setting up mount points.</source>
        <translation>Configuration des points de montage.</translation>
    </message>
</context>
<context>
    <name>FinishedPage</name>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="18"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.ui" line="102"/>
        <source>&amp;Restart now</source>
        <translation>&amp;Redémarrer maintenant</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="72"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
        <translation>&lt;h1&gt;Installation terminée&lt;/h1&gt;&lt;br/&gt;%1 a été installé sur votre ordinateur.&lt;br/&gt;Vous pouvez redémarrer maintenant sur votre nouveau système.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="76"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Si cette case est cochée, votre système redémarrera immédiatement lorsque vous cliquerez sur le bouton &lt;span style=&quot; font-style:italic;&quot;&gt;Terminé&lt;/span&gt; ou que vous fermerez l’installateur.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="84"/>
        <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
        <translation>&lt;h1&gt;Installation terminée&lt;/h1&gt;&lt;br/&gt;%1 a été installé sur votre ordinateur.&lt;br/&gt;Vous pouvez redémarrer maintenant sur votre nouveau système, ou continuer à utiliser l&apos;environnement Livre %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="89"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style=&quot;font-style:italic;&quot;&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Si cette case est cochée, votre système redémarrera immédiatement lorsque vous cliquerez sur le bouton &lt;span style=&quot;font-style:italic;&quot;&gt;Terminé&lt;/span&gt; ou que vous fermerez l’installateur.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="102"/>
        <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;L’installation a échoué&lt;/h1&gt;&lt;br/&gt;%1 n’a pas été installé sur votre ordinateur.&lt;br/&gt;Message d’erreur : %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/finished/FinishedPage.cpp" line="110"/>
        <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
        <translation>&lt;h1&gt;L’installation a échoué&lt;/h1&gt;&lt;br/&gt;%1 n’a pas été installé sur votre ordinateur.&lt;br/&gt;Message d’erreur : %2.</translation>
    </message>
</context>
<context>
    <name>FinishedQmlViewStep</name>
    <message>
        <location filename="../src/modules/finishedq/FinishedQmlViewStep.cpp" line="35"/>
        <source>Finish</source>
        <translation>Terminer</translation>
    </message>
</context>
<context>
    <name>FinishedViewStep</name>
    <message>
        <location filename="../src/modules/finished/FinishedViewStep.cpp" line="46"/>
        <source>Finish</source>
        <translation>Terminer</translation>
    </message>
</context>
<context>
    <name>FormatPartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="39"/>
        <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
        <translation>Formater la partition %1 (système de fichier : %2, taille : %3 Mio) sur %4.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="50"/>
        <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Formation la partition &lt;strong&gt;%1&lt;/strong&gt; de &lt;strong&gt;%3Mio&lt;/strong&gt; avec le système de fichier &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="61"/>
        <source>Formatting partition %1 with file system %2.</source>
        <translation>Formatage de la partition %1 avec le système de fichier %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="73"/>
        <source>The installer failed to format partition %1 on disk &apos;%2&apos;.</source>
        <translation>Le programme d&apos;installation n&apos;a pu formater la partition %1 sur le disque &apos;%2&apos;.</translation>
    </message>
</context>
<context>
    <name>GeneralRequirements</name>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="155"/>
        <source>has at least %1 GiB available drive space</source>
        <translation>a au moins %1 Gio de d&apos;espace disque disponible</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="157"/>
        <source>There is not enough drive space. At least %1 GiB is required.</source>
        <translation>Il n’y a pas assez d’espace disque. Au moins %1 Gio sont nécessaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="166"/>
        <source>has at least %1 GiB working memory</source>
        <translation>a au moins %1 Gio de mémoire de travail</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="168"/>
        <source>The system does not have enough working memory. At least %1 GiB is required.</source>
        <translation>Le système n’a pas assez de mémoire de travail. Au moins %1 Go sont nécessaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="177"/>
        <source>is plugged in to a power source</source>
        <translation>est branché sur le secteur</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="178"/>
        <source>The system is not plugged in to a power source.</source>
        <translation>Le système n’est pas branché sur le secteur.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="185"/>
        <source>is connected to the Internet</source>
        <translation>est connecté à Internet</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="186"/>
        <source>The system is not connected to the Internet.</source>
        <translation>Le système n’est pas connecté à Internet.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="193"/>
        <source>is running the installer as an administrator (root)</source>
        <translation>lance l’installeur en tant qu’administrateur (root)</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="196"/>
        <source>The setup program is not running with administrator rights.</source>
        <translation>L’installeur n’est pas lancé avec les droits administrateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="197"/>
        <source>The installer is not running with administrator rights.</source>
        <translation>L’installeur n’est pas lancé avec les droits administrateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="205"/>
        <source>has a screen large enough to show the whole installer</source>
        <translation>a un écran suffisamment large pour afficher tout l’installeur</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="208"/>
        <source>The screen is too small to display the setup program.</source>
        <translation>L’écran est trop petit pour afficher l’installateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="209"/>
        <source>The screen is too small to display the installer.</source>
        <translation>L’écran est trop petit pour afficher l’installateur.</translation>
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
        <translation>Impossible de créer les répertoires&lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="53"/>
        <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Impossible d’ouvrir le fichier &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
        <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Impossible d’écrire le fichier &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
</context>
<context>
    <name>InitcpioJob</name>
    <message>
        <location filename="../src/modules/initcpio/InitcpioJob.cpp" line="32"/>
        <source>Creating initramfs with mkinitcpio.</source>
        <translation>Création de initramfs avec mkinicpio.</translation>
    </message>
</context>
<context>
    <name>KeyboardQmlViewStep</name>
    <message>
        <location filename="../src/modules/keyboardq/KeyboardQmlViewStep.cpp" line="32"/>
        <source>Keyboard</source>
        <translation>Clavier</translation>
    </message>
</context>
<context>
    <name>KeyboardViewStep</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="42"/>
        <source>Keyboard</source>
        <translation>Clavier</translation>
    </message>
</context>
<context>
    <name>LCLocaleDialog</name>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="23"/>
        <source>System locale setting</source>
        <translation>Configuration des paramètres régionaux</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="30"/>
        <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>La configuration des paramètres régionaux affecte la langue et le jeu de caractère pour les éléments de l&apos;interface utilisateur en ligne de commande.&lt;br/&gt;La configuration actuelle est &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="54"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuler</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="55"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
</context>
<context>
    <name>LOSHJob</name>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="36"/>
        <source>Configuring encrypted swap.</source>
        <translation>Configuration de la swap chiffrée.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="88"/>
        <source>No target system available.</source>
        <translation>Aucun système cible disponible.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="96"/>
        <source>No rootMountPoint is set.</source>
        <translation>Aucun point de montage n’a été défini.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="101"/>
        <source>No configFilePath is set.</source>
        <translation>Aucun chemin de fichier de configuration n’a été défini.</translation>
    </message>
</context>
<context>
    <name>LicensePage</name>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="18"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.ui" line="26"/>
        <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Accord de licence&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="135"/>
        <source>I accept the terms and conditions above.</source>
        <translation>J’accepte les termes et les conditions ci-dessus.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="137"/>
        <source>Please review the End User License Agreements (EULAs).</source>
        <translation>Veuillez consulter les contrats de licence utilisateur final (CLUF).</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="142"/>
        <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
        <translation>Cette procédure de configuration installe un logiciel propriétaire soumis à des conditions de licence.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="145"/>
        <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
        <translation>Si vous n&apos;êtes pas d&apos;accord avec les termes, la procédure de configuration ne peut pas continuer.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="150"/>
        <source>In case non-free was selected, this installer will install proprietary packages &lt;br/&gt;that have additional End User License Agreements (EULAs) attached to them.</source>
        <translation>Si un pilote non libre a été sélectionné, cet installeur installera des paquets propriétaires &lt;br/&gt; auxquels sont associés des contrats de licence utilisateur final (CLUF) supplémentaires.</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicensePage.cpp" line="153"/>
        <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
        <translation>Si vous n’êtes pas d&apos;accord avec les termes, aucun logiciel propriétaire ne sera installé et des alternatives Open Source seront utilisées à la place.</translation>
    </message>
</context>
<context>
    <name>LicenseViewStep</name>
    <message>
        <location filename="../src/modules/license/LicenseViewStep.cpp" line="43"/>
        <source>License</source>
        <translation>Licence</translation>
    </message>
</context>
<context>
    <name>LicenseWidget</name>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="88"/>
        <source>URL: %1</source>
        <translation>URL : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="109"/>
        <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
        <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
        <translation>&lt;strong&gt;Pilote %1&lt;/strong&gt;&lt;br/&gt; par %2</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="116"/>
        <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
        <translation>&lt;strong&gt;Pilote graphique %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="122"/>
        <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;Plugin de navigateur %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="128"/>
        <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;Codec %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="134"/>
        <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;Paquet %1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="140"/>
        <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;by %2&lt;/font&gt;</source>
        <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color=&quot;Grey&quot;&gt;par %2&lt;/font&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="163"/>
        <source>File: %1</source>
        <translation>Fichier : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
        <source>Hide license text</source>
        <translation>Masquer le texte de licence</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
        <source>Show the license text</source>
        <translation>Afficher le texte de la licence</translation>
    </message>
    <message>
        <location filename="../src/modules/license/LicenseWidget.cpp" line="190"/>
        <source>Open license agreement in browser.</source>
        <translation>Ouvrir le contrat de licence dans le navigateur.</translation>
    </message>
</context>
<context>
    <name>LocalePage</name>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="130"/>
        <source>Region:</source>
        <translation>Région :</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="131"/>
        <source>Zone:</source>
        <translation>Zone :</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/LocalePage.cpp" line="132"/>
        <location filename="../src/modules/locale/LocalePage.cpp" line="133"/>
        <source>&amp;Change...</source>
        <translation>&amp;Changer…</translation>
    </message>
</context>
<context>
    <name>LocaleQmlViewStep</name>
    <message>
        <location filename="../src/modules/localeq/LocaleQmlViewStep.cpp" line="32"/>
        <source>Location</source>
        <translation>Localisation</translation>
    </message>
</context>
<context>
    <name>LocaleTests</name>
    <message>
        <location filename="../src/libcalamares/locale/Tests.cpp" line="273"/>
        <source>Quit</source>
        <translation>Quitter</translation>
    </message>
</context>
<context>
    <name>LocaleViewStep</name>
    <message>
        <location filename="../src/modules/locale/LocaleViewStep.cpp" line="76"/>
        <source>Location</source>
        <translation>Localisation</translation>
    </message>
</context>
<context>
    <name>LuksBootKeyFileJob</name>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="30"/>
        <source>Configuring LUKS key file.</source>
        <translation>Configuration du fichier de clé de LUKS.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="186"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="194"/>
        <source>No partitions are defined.</source>
        <translation>Aucune partition n’est définie.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="229"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="236"/>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="244"/>
        <source>Encrypted rootfs setup error</source>
        <translation>Erreur de configuration d’un rootfs chiffré</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="230"/>
        <source>Root partition %1 is LUKS but no passphrase has been set.</source>
        <translation>La partition racine %1 est LUKS mais aucune phrase de passe n’a été définie.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="237"/>
        <source>Could not create LUKS key file for root partition %1.</source>
        <translation>Impossible de créer le fichier de clé LUKS pour la partition racine %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="245"/>
        <source>Could not configure LUKS key file on partition %1.</source>
        <translation>Impossible de configurer un fichier clé LUKS sur la partition %1.</translation>
    </message>
</context>
<context>
    <name>MachineIdJob</name>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="37"/>
        <source>Generate machine-id.</source>
        <translation>Générer l’ID de la machine.</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="53"/>
        <source>Configuration Error</source>
        <translation>Erreur de configuration</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="54"/>
        <source>No root mount point is set for MachineId.</source>
        <translation>Aucun point de montage racine n’est configuré pour cet ID de machine.</translation>
    </message>
</context>
<context>
    <name>Map</name>
    <message>
        <location filename="../src/modules/localeq/Map.qml" line="44"/>
        <location filename="../src/modules/localeq/Map.qml" line="68"/>
        <source>Timezone: </source>
        <translation>Fuseau horaire :</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Map.qml" line="232"/>
        <source>Please select your preferred location on the map so the installer can suggest the locale
            and timezone settings for you. You can fine-tune the suggested settings below. Search the map by dragging
            to move and using the +/- buttons to zoom in/out or use mouse scrolling for zooming.</source>
        <translation>Veuillez sélectionner votre emplacement favori sur la carte afin de laisser le programme d’installation vous suggérer les options de localisation de et fuseau horaire. Vous pouvez modifier finement les options suggérées au bas de la page. Vous pouvez chercher sur la carte en la glissant avec la souris, et utiliser les boutons +/- ou la molette pour zoomer.</translation>
    </message>
</context>
<context>
    <name>NotesQmlViewStep</name>
    <message>
        <location filename="../src/modules/notesqml/NotesQmlViewStep.cpp" line="23"/>
        <source>Notes</source>
        <translation>Notes</translation>
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
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMPage.ui" line="52"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>OEMViewStep</name>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="122"/>
        <source>OEM Configuration</source>
        <translation>OEM Configuration</translation>
    </message>
    <message>
        <location filename="../src/modules/oemid/OEMViewStep.cpp" line="128"/>
        <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
        <translation>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
</context>
<context>
    <name>Offline</name>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="41"/>
        <source>Select your preferred Region, or use the default settings.</source>
        <translation>Sélectionnez votre emplacement préféré ou utilisez les paramètres par défaut.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="98"/>
        <location filename="../src/modules/localeq/Offline.qml" line="173"/>
        <location filename="../src/modules/localeq/Offline.qml" line="217"/>
        <source>Timezone: %1</source>
        <translation>Fuseau horaire : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="115"/>
        <source>Select your preferred Zone within your Region.</source>
        <translation>Sélectionnez votre zone préférée dans votre région.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="186"/>
        <source>Zones</source>
        <translation>Zones</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline.qml" line="233"/>
        <source>You can fine-tune Language and Locale settings below.</source>
        <translation>Vous pouvez affiner les paramètres de langue et de paramètres locaux ci-dessous.</translation>
    </message>
</context>
<context>
    <name>Offline2</name>
    <message>
        <location filename="../src/modules/localeq/Offline2.qml" line="54"/>
        <source>Timezone: %1</source>
        <translation>Fuseau horaire : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline2.qml" line="69"/>
        <source>Select a timezone. You can fine-tune Language and Locale settings below.</source>
        <translation>Sélectionnez un fuseau horaire. Vous pouvez affiner les paramètres de langue et de paramètres locaux ci-dessous.</translation>
    </message>
</context>
<context>
    <name>Offline3</name>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="51"/>
        <source>Select your preferred Region, or use the default one based on your current location.</source>
        <translation>Sélectionnez votre emplacement préféré ou utilisez celui par défaut qui est basé sur votre emplacement.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="111"/>
        <location filename="../src/modules/localeq/Offline3.qml" line="188"/>
        <location filename="../src/modules/localeq/Offline3.qml" line="234"/>
        <source>Timezone: %1</source>
        <translation>Fuseau horaire : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="128"/>
        <source>Select your preferred Zone within your Region.</source>
        <translation>Sélectionnez votre zone préférée dans votre région.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="202"/>
        <source>Zones</source>
        <translation>Zones</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline3.qml" line="250"/>
        <source>You can fine-tune Language and Locale settings below.</source>
        <translation>Vous pouvez affiner les paramètres de langue et de paramètres locaux ci-dessous.</translation>
    </message>
</context>
<context>
    <name>Offline_orig</name>
    <message>
        <location filename="../src/modules/localeq/Offline_orig.qml" line="64"/>
        <source>Timezone: %1</source>
        <translation>Fuseau horaire : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/Offline_orig.qml" line="81"/>
        <source>To be able to select a timezone, make sure you are connected to the internet. Restart the installer after connecting. You can fine-tune Language and Locale settings below.</source>
        <translation>Pour pouvoir sélectionner un fuseau horaire, assurez-vous que vous êtes connecté à Internet. Redémarrez le programme d’installation après la connexion. Vous pouvez affiner les paramètres de langue et de paramètres régionaux ci-dessous.</translation>
    </message>
</context>
<context>
    <name>PWQ</name>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="51"/>
        <source>Password is too short</source>
        <translation>Le mot de passe est trop court</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="67"/>
        <source>Password is too long</source>
        <translation>Le mot de passe est trop long</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="188"/>
        <source>Password is too weak</source>
        <translation>Le mot de passe est trop faible</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="196"/>
        <source>Memory allocation error when setting &apos;%1&apos;</source>
        <translation>Erreur d’allocation mémoire à la configuration &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="199"/>
        <source>Memory allocation error</source>
        <translation>Erreur d’allocation mémoire</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="201"/>
        <source>The password is the same as the old one</source>
        <translation>Le mot de passe est identique au mot de passe précédent</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="203"/>
        <source>The password is a palindrome</source>
        <translation>Le mot de passe est un palindrome</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="205"/>
        <source>The password differs with case changes only</source>
        <translation>Le mot de passe diffère de seulement un caractère</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="207"/>
        <source>The password is too similar to the old one</source>
        <translation>Le mot de passe est similaire au mot de passe précédent</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="209"/>
        <source>The password contains the user name in some form</source>
        <translation>Le mot de passe contient le nom d’utilisateur</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="211"/>
        <source>The password contains words from the real name of the user in some form</source>
        <translation>Le mot de passe contient des mots issus du nom réel de l’utilisateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="214"/>
        <source>The password contains forbidden words in some form</source>
        <translation>Le mot de passe contient des mots interdits</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="221"/>
        <source>The password contains too few digits</source>
        <translation>Le mot de passe contient trop peu de chiffres</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="228"/>
        <source>The password contains too few uppercase letters</source>
        <translation>Le mot de passe contient trop peu de majuscules</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="235"/>
        <source>The password contains too few lowercase letters</source>
        <translation>Le mot de passe contient trop peu de minuscules</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="242"/>
        <source>The password contains too few non-alphanumeric characters</source>
        <translation>Le mot de passe contient trop peu de caractères non-alphanumériques</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="249"/>
        <source>The password is too short</source>
        <translation>Le mot de passe est trop court</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="258"/>
        <source>The password does not contain enough character classes</source>
        <translation>Le mot de passe ne contient pas assez de classes de caractères</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="265"/>
        <source>The password contains too many same characters consecutively</source>
        <translation>Le mot de passe contient trop de caractères identiques à la suite.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="275"/>
        <source>The password contains too many characters of the same class consecutively</source>
        <translation>Le mot de passe contient trop de caractères de même classe à la suite.</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="218"/>
        <source>The password contains fewer than %n digits</source>
        <translation><numerusform>Le mot de passe contient moins de %n chiffres</numerusform><numerusform>Le mot de passe contient moins de %n chiffres</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="225"/>
        <source>The password contains fewer than %n uppercase letters</source>
        <translation><numerusform>Le mot de passe contient moins de %n majuscules</numerusform><numerusform>Le mot de passe contient moins de %n majuscules</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="232"/>
        <source>The password contains fewer than %n lowercase letters</source>
        <translation><numerusform>Le mot de passe contient moins de %n minuscules</numerusform><numerusform>Le mot de passe contient moins de %n minuscules</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="239"/>
        <source>The password contains fewer than %n non-alphanumeric characters</source>
        <translation><numerusform>Le mot de passe contient moins de %n caractères non-alphanumériques</numerusform><numerusform>Le mot de passe contient moins de %n caractères non-alphanumériques</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="246"/>
        <source>The password is shorter than %n characters</source>
        <translation><numerusform>Le mot de passe contient moins de %n caractères</numerusform><numerusform>Le mot de passe contient moins de %n caractères</numerusform></translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="251"/>
        <source>The password is a rotated version of the previous one</source>
        <translation>Le mot de passe est une rotation du mot de passe précédent</translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="255"/>
        <source>The password contains fewer than %n character classes</source>
        <translation><numerusform>Le mot de passe contient moins de %n classes de caractères</numerusform><numerusform>Le mot de passe contient moins de %n classes de caractères</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="262"/>
        <source>The password contains more than %n same characters consecutively</source>
        <translation><numerusform>Le mot de passe contient plus de %n caractères identiques à la suite.</numerusform><numerusform>Le mot de passe contient plus de %1 caractères identiques à la suite</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="269"/>
        <source>The password contains more than %n characters of the same class consecutively</source>
        <translation><numerusform>Le mot de passe contient plus de %n caractères de même classe à la suite.</numerusform><numerusform>Le mot de passe contient plus de %1 caractères de même classe à la suite.</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="280"/>
        <source>The password contains monotonic sequence longer than %n characters</source>
        <translation><numerusform>Le mot de passe contient une séquence monotone de plus de %n caractères</numerusform><numerusform>Le mot de passe contient une séquence monotone de plus de %1 caractères</numerusform></translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="286"/>
        <source>The password contains too long of a monotonic character sequence</source>
        <translation>Le mot de passe contient une séquence monotone de caractères trop longue.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="289"/>
        <source>No password supplied</source>
        <translation>Aucun mot de passe requis</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="291"/>
        <source>Cannot obtain random numbers from the RNG device</source>
        <translation>Impossible de récupérer des nombres aléatoires depuis le périphérique RNG</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="293"/>
        <source>Password generation failed - required entropy too low for settings</source>
        <translation>La génération de mot de passe a échoué - l’entropie requise est trop faible pour la configuration</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="298"/>
        <source>The password fails the dictionary check - %1</source>
        <translation>Le mot de passe a été trouvé dans le dictionnaire - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="301"/>
        <source>The password fails the dictionary check</source>
        <translation>Le mot de passe a été trouvé dans le dictionnaire</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="305"/>
        <source>Unknown setting - %1</source>
        <translation>Configuration inconnue - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="307"/>
        <source>Unknown setting</source>
        <translation>Configuration inconnue</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="311"/>
        <source>Bad integer value of setting - %1</source>
        <translation>Mauvaise valeur d’entier pour la configuration - %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="313"/>
        <source>Bad integer value</source>
        <translation>Mauvaise valeur d’entier</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="317"/>
        <source>Setting %1 is not of integer type</source>
        <translation>La configuration %1 n’est pas un type entier</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="319"/>
        <source>Setting is not of integer type</source>
        <translation>La configuration n’est pas un type entier</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="323"/>
        <source>Setting %1 is not of string type</source>
        <translation>La configuration %1 n’est pas un type chaîne de caractères</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="325"/>
        <source>Setting is not of string type</source>
        <translation>La configuration %1 n’est pas un type chaîne de caractères</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="327"/>
        <source>Opening the configuration file failed</source>
        <translation>L’ouverture du fichier de configuration a échoué.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="329"/>
        <source>The configuration file is malformed</source>
        <translation>Le fichier de configuration est mal formé.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="331"/>
        <source>Fatal failure</source>
        <translation>Erreur fatale</translation>
    </message>
    <message>
        <location filename="../src/modules/users/CheckPWQuality.cpp" line="333"/>
        <source>Unknown error</source>
        <translation>Erreur inconnue</translation>
    </message>
    <message>
        <location filename="../src/modules/users/Config.cpp" line="782"/>
        <source>Password is empty</source>
        <translation>Le mot de passe est vide</translation>
    </message>
</context>
<context>
    <name>PackageChooserPage</name>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="24"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="50"/>
        <source>Product Name</source>
        <translation>Nom du produit</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="63"/>
        <source>TextLabel</source>
        <translation>Étiquette</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/page_package.ui" line="79"/>
        <source>Long Product Description</source>
        <translation>Description longue</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="25"/>
        <source>Package Selection</source>
        <translation>Sélection de paquets</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="26"/>
        <source>Please pick a product from the list. The selected product will be installed.</source>
        <translation>Veuillez choisir un produit dans la liste. Le produit sélectionné sera installé.</translation>
    </message>
</context>
<context>
    <name>PackageChooserQmlViewStep</name>
    <message>
        <location filename="../src/modules/packagechooserq/PackageChooserQmlViewStep.cpp" line="32"/>
        <source>Packages</source>
        <translation>Paquets</translation>
    </message>
</context>
<context>
    <name>PackageChooserViewStep</name>
    <message>
        <location filename="../src/modules/packagechooser/PackageChooserViewStep.cpp" line="51"/>
        <source>Packages</source>
        <translation>Paquets</translation>
    </message>
</context>
<context>
    <name>Page_Keyboard</name>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="18"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="74"/>
        <source>Keyboard Model:</source>
        <translation>Modèle Clavier :</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/KeyboardPage.ui" line="135"/>
        <source>Type here to test your keyboard</source>
        <translation>Veuillez saisir ici pour tester votre clavier</translation>
    </message>
</context>
<context>
    <name>Page_UserSetup</name>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="18"/>
        <source>Form</source>
        <translation>Formulaire</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="40"/>
        <source>What is your name?</source>
        <translation>Quel est vote nom ?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="124"/>
        <source>What name do you want to use to log in?</source>
        <translation>Quel nom souhaitez-vous utiliser pour la connexion ?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="325"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Veuillez saisir le mot de passe pour sécuriser votre compte.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="349"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="374"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Veuillez entrer le même mot de passe deux fois afin de vérifier qu&apos;il n&apos;y ait pas d&apos;erreur de frappe. Un bon mot de passe doit contenir un mélange de lettres, de nombres et de caractères de ponctuation, contenir au moins huit caractères et être changé à des intervalles réguliers.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="223"/>
        <source>What is the name of this computer?</source>
        <translation>Quel est le nom de votre ordinateur ?</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="55"/>
        <source>Your Full Name</source>
        <translation>Votre nom complet</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="148"/>
        <source>login</source>
        <translation>nom de connexion</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="247"/>
        <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Ce nom sera utilisé pour rendre l&apos;ordinateur visible des autres sur le réseau.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="250"/>
        <source>Computer Name</source>
        <translation>Nom de l’ordinateur</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="355"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="525"/>
        <source>Password</source>
        <translation>Mot de passe</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="380"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="550"/>
        <source>Repeat Password</source>
        <translation>Répéter le mot de passe</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="455"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation>Lorsque cette case est cochée, la vérification de la force du mot de passe est effectuée et vous ne pourrez pas utiliser un mot de passe faible.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="458"/>
        <source>Require strong passwords.</source>
        <translation>Exiger des mots de passe forts.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="465"/>
        <source>Log in automatically without asking for the password.</source>
        <translation>Se connecter automatiquement sans demander de mot de passe.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="472"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Choisir le même mot de passe pour le compte administrateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="495"/>
        <source>Choose a password for the administrator account.</source>
        <translation>Choisir un mot de passe pour le compte administrateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/page_usersetup.ui" line="519"/>
        <location filename="../src/modules/users/page_usersetup.ui" line="544"/>
        <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Veuillez entrer le même mot de passe deux fois, afin de vérifier qu&apos;ils n&apos;y ait pas d&apos;erreur de frappe.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>PartitionLabelsView</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="189"/>
        <source>Root</source>
        <translation>Racine</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="193"/>
        <source>Home</source>
        <translation>Home</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="197"/>
        <source>Boot</source>
        <translation>Boot</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="202"/>
        <source>EFI system</source>
        <translation>Système EFI</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="206"/>
        <source>Swap</source>
        <translation>Swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="210"/>
        <source>New partition for %1</source>
        <translation>Nouvelle partition pour %1</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="214"/>
        <source>New partition</source>
        <translation>Nouvelle partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="238"/>
        <source>%1  %2</source>
        <extracomment>size[number] filesystem[name]</extracomment>
        <translation>%1  %2</translation>
    </message>
</context>
<context>
    <name>PartitionModel</name>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="157"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="201"/>
        <source>Free Space</source>
        <translation>Espace libre</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="161"/>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="205"/>
        <source>New partition</source>
        <translation>Nouvelle partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="298"/>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="300"/>
        <source>File System</source>
        <translation>Système de fichiers</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="302"/>
        <source>File System Label</source>
        <translation>Étiquette du système de fichiers</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="304"/>
        <source>Mount Point</source>
        <translation>Point de montage</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/core/PartitionModel.cpp" line="306"/>
        <source>Size</source>
        <translation>Taille</translation>
    </message>
</context>
<context>
    <name>PartitionPage</name>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="18"/>
        <source>Form</source>
        <translation>Forme</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="26"/>
        <source>Storage de&amp;vice:</source>
        <translation>Pé&amp;riphérique de stockage :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="55"/>
        <source>&amp;Revert All Changes</source>
        <translation>&amp;Annuler tous les changements</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="91"/>
        <source>New Partition &amp;Table</source>
        <translation>Nouvelle &amp;table de partitionnement</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="111"/>
        <source>Cre&amp;ate</source>
        <translation>Cré&amp;er</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="136"/>
        <source>New Volume Group</source>
        <translation>Nouveau groupe de volumes</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="143"/>
        <source>Resize Volume Group</source>
        <translation>Modifier la taille d’un groupe de volumes</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="150"/>
        <source>Deactivate Volume Group</source>
        <translation>Désactiver un groupe de volumes</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="157"/>
        <source>Remove Volume Group</source>
        <translation>Supprimer un groupe de volumes</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="184"/>
        <source>I&amp;nstall boot loader on:</source>
        <translation>I&amp;nstaller le chargeur de démarrage sur :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="118"/>
        <source>&amp;Edit</source>
        <translation>&amp;Modifier</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.ui" line="125"/>
        <source>&amp;Delete</source>
        <translation>&amp;Supprimer</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="228"/>
        <source>Are you sure you want to create a new partition table on %1?</source>
        <translation>Êtes-vous sûr de vouloir créer une nouvelle table de partitionnement sur %1 ?</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="263"/>
        <source>Can not create new partition</source>
        <translation>Impossible de créer une nouvelle partition</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="264"/>
        <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
        <translation>La table de partitions sur %1 contient déjà %2 partitions primaires, et il n’est plus possible d’en ajouter d&apos;autres.</translation>
    </message>
</context>
<context>
    <name>PartitionQmlViewStep</name>
    <message>
        <location filename="../src/modules/partitionq/PartitionQmlViewStep.cpp" line="117"/>
        <source>Partition</source>
        <translation>Partitionnement</translation>
    </message>
</context>
<context>
    <name>PartitionViewStep</name>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="56"/>
        <source>Gathering system information...</source>
        <translation>Récupération des informations système…</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="111"/>
        <source>Partitions</source>
        <translation>Partitions</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="297"/>
        <source>Current:</source>
        <translation>Actuel :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="315"/>
        <source>After:</source>
        <translation>Après :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="524"/>
        <source>No EFI system partition configured</source>
        <translation>Aucune partition système EFI configurée</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="528"/>
        <source>EFI system partition configured incorrectly</source>
        <translation>La partition système EFI n’est pas configurée correctement.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="533"/>
        <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a suitable filesystem.</source>
        <translation>Une partition système EFI est nécessaire pour démarrer %1. &lt;br/&gt; &lt;br/&gt;Pour configurer une partition système EFI, revenez en arrière et sélectionnez un système de fichiers adéquat.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="544"/>
        <source>The filesystem must be mounted on &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Le sytème de fichier doit être monté sur &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="550"/>
        <source>The filesystem must have type FAT32.</source>
        <translation>Le système de fichiers doit être de type FAT32.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="558"/>
        <source>The filesystem must be at least %1 MiB in size.</source>
        <translation>Le système de fichiers doit avoir au moins %1 Mio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="564"/>
        <source>The filesystem must have flag &lt;strong&gt;%1&lt;/strong&gt; set.</source>
        <translation>Le système de fichiers doit posséder le flag &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="570"/>
        <source>You can continue without setting up an EFI system partition but your system may fail to start.</source>
        <translation>Vous pouvez continuer sans configurer une partition système EFI mais votre système ne pourra pas démarrer.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="587"/>
        <source>Option to use GPT on BIOS</source>
        <translation>Options pour utiliser GPT sur BIOS</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="588"/>
        <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partition table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;bios_grub&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
        <translation>Une table de partitions GPT est la meilleure option pour tous les systèmes. Cet installateur supporte une configuration de ce type pour les systèmes BIOS également.&lt;br/&gt;&lt;br/&gt;Pour configurer une table de partitions GPT sur BIOS (si ce n’est déjà fait), retournez en arrière et sélectionnez la table de partitions GPT, puis créez une partition non formatée de 8 Mo avec le flag &lt;strong&gt;bios_grub&lt;/strong&gt; autorisé.&lt;br/&gt;&lt;br/&gt;Une partition de 8 Mo est nécessaire pour démarrer %1 sur un système BIOS avec GPT.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="713"/>
        <source>There are no partitions to install on.</source>
        <translation>Aucune partition n’est disponible pour l’installation.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="620"/>
        <source>Boot partition not encrypted</source>
        <translation>La partition de démarrage n’est pas cryptée</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="621"/>
        <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
        <translation>Une partition de démarrage distincte a été configurée avec une partition racine cryptée, mais elle n’est pas cryptée.&lt;br/&gt;&lt;br/&gt;Ce type d’installation pose des problèmes de sécurité car les fichiers système importants sont conservés sur une partition non cryptée.&lt;br/&gt;Vous pouvez continuer si vous le souhaitez, mais le déverrouillage du système de fichiers se produira plus tard au démarrage du système.&lt;br/&gt;Pour crypter la partition de démarrage, revenez en arrière et recréez-la, en sélectionnant &lt;strong&gt;Crypter&lt;/strong&gt; dans la fenêtre de création de la partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/PartitionViewStep.cpp" line="712"/>
        <source>has at least one disk device available.</source>
        <translation>A au moins un disque disponible.</translation>
    </message>
</context>
<context>
    <name>PreserveFiles</name>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="53"/>
        <source>Saving files for later ...</source>
        <translation>Enregistrer les fichiers pour plus tard...</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="61"/>
        <source>No files configured to save for later.</source>
        <translation>Aucun fichier configuré pour être sauvegardé pour plus tard.</translation>
    </message>
    <message>
        <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="85"/>
        <source>Not all of the configured files could be preserved.</source>
        <translation>Tous les fichiers configurés n’ont pu être préservés.</translation>
    </message>
</context>
<context>
    <name>ProcessResult</name>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="309"/>
        <source>
There was no output from the command.</source>
        <translation>
Il n’y a pas de sortie depuis cette commande.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="310"/>
        <source>
Output:
</source>
        <translation>
Sortie :
</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="314"/>
        <source>External command crashed.</source>
        <translation>La commande externe a échoué.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="315"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
        <translation>Commande &lt;i&gt;%1&lt;/i&gt; échouée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="320"/>
        <source>External command failed to start.</source>
        <translation>La commande externe n&apos;a pu être lancée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="321"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
        <translation>La commande &lt;i&gt;%1&lt;/i&gt; n&apos;a pu être lancée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="325"/>
        <source>Internal error when starting command.</source>
        <translation>Erreur interne au lancement de la commande.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="326"/>
        <source>Bad parameters for process job call.</source>
        <translation>Mauvais paramètres pour l&apos;appel au processus de job.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="330"/>
        <source>External command failed to finish.</source>
        <translation>La commande externe ne s&apos;est pas terminée.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="331"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
        <translation>La commande &lt;i&gt;%1&lt;/i&gt; ne s&apos;est pas terminée en %2 secondes.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="338"/>
        <source>External command finished with errors.</source>
        <translation>La commande externe s&apos;est terminée avec des erreurs.</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="339"/>
        <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
        <translation>La commande &lt;i&gt;%1&lt;/i&gt; s&apos;est terminée avec le code de sortie %2.</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="130"/>
        <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="167"/>
        <source>Default</source>
        <translation>Défaut</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="40"/>
        <source>Unpartitioned space or unknown partition table</source>
        <translation>Espace non partitionné ou table de partitions inconnnue</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="33"/>
        <source>unknown</source>
        <translation>inconnu</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="35"/>
        <source>extended</source>
        <translation>étendu</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="37"/>
        <source>unformatted</source>
        <translation>non formaté</translation>
    </message>
    <message>
        <location filename="../src/libcalamares/partition/FileSystem.cpp" line="39"/>
        <source>swap</source>
        <translation>swap</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="44"/>
        <source>(no mount point)</source>
        <translation>(pas de point de montage)</translation>
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
        <translation>Fichier non trouvé</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/Workers.cpp" line="65"/>
        <source>Path &lt;pre&gt;%1&lt;/pre&gt; must be an absolute path.</source>
        <translation>Le chemin &lt;pre&gt;%1&lt;/pre&gt; doit être un chemin absolu.</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="83"/>
        <source>Directory not found</source>
        <translation>Répertoire non trouvé</translation>
    </message>
    <message>
        <location filename="../src/modules/machineid/MachineIdJob.cpp" line="84"/>
        <location filename="../src/modules/machineid/Workers.cpp" line="94"/>
        <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
        <translation>Impossible de créer un fichier aléatoire &lt;pre&gt;%1&lt;/pre&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="74"/>
        <source>No product</source>
        <translation>Aucun produit</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooser/PackageModel.cpp" line="82"/>
        <source>No description provided.</source>
        <translation>Aucune description fournie.</translation>
    </message>
</context>
<context>
    <name>Recommended</name>
    <message>
        <location filename="../src/modules/welcomeq/Recommended.qml" line="40"/>
        <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;br/&gt;L’installation peut continuer, mais certaines fonctionnalités peuvent être désactivées.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>RemoveVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="26"/>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="38"/>
        <source>Remove Volume Group named %1.</source>
        <translation>Supprimer le groupe de volumes nommé %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="32"/>
        <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Supprimer le groupe de volumes nommé &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="46"/>
        <source>The installer failed to remove a volume group named &apos;%1&apos;.</source>
        <translation>Le programme d’installation n’a pu supprimer un groupe de volumes nommé &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>ReplaceWidget</name>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="18"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="128"/>
        <source>Select where to install %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
        <translation>Sélectionner la partition où installer %1.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Attention : &lt;/font&gt;cela supprimera tous les fichiers de la partition sélectionnée.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="150"/>
        <source>The selected item does not appear to be a valid partition.</source>
        <translation>La partition sélectionnée ne semble pas être une partition valide.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="158"/>
        <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
        <translation>%1 ne peut être installé sur un espace vide. Veuillez sélectionner une partition existante.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="168"/>
        <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
        <translation>%1 ne peut être installé sur une partition étendue. Veuillez choisir une partition primaire ou une partition logique.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="178"/>
        <source>%1 cannot be installed on this partition.</source>
        <translation>%1 ne peut être installé sur cette partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="184"/>
        <source>Data partition (%1)</source>
        <translation>Partition de données (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="204"/>
        <source>Unknown system partition (%1)</source>
        <translation>Partition système inconnue (%1)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="208"/>
        <source>%1 system partition (%2)</source>
        <translation>Partition système %1 (%2)</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="220"/>
        <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
        <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;La partition %1 est trop petite pour %2. Veuillez selectionner une partition ayant une taille d’au moins %3 Gio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="242"/>
        <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
        <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Aucune partition système EFI n’a pu être trouvée sur ce système. Veuillez recommencer et utiliser le partitionnement manuel pour configurer %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="253"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="269"/>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="294"/>
        <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
        <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 sera installé sur %2.&lt;br/&gt;&lt;font color=&quot;red&quot;&gt;Attention : &lt;/font&gt;toutes les données sur la partition %2 seront perdues.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="261"/>
        <source>The EFI system partition at %1 will be used for starting %2.</source>
        <translation>La partition système EFI %1 sera utilisée pour démarrer %2.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="277"/>
        <source>EFI system partition:</source>
        <translation>Partition système EFI :</translation>
    </message>
</context>
<context>
    <name>Requirements</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements.qml" line="38"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;br/&gt;
L&apos;installation ne peut pas continuer.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/Requirements.qml" line="40"/>
        <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;br/&gt;L’installation peut continuer, mais certaines fonctionnalités peuvent être désactivées.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>Requirements2</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements2.qml" line="48"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing KaOS.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Cet ordinateur ne satisfait pas les conditions requises pour installer KaOS.&lt;br/&gt;
L&apos;installation ne peut pas continuer.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>Requirements_orig</name>
    <message>
        <location filename="../src/modules/welcomeq/Requirements_orig.qml" line="48"/>
        <source>&lt;p&gt;This computer does not satisfy the minimum requirements for setting up %1.&lt;/p&gt;
        &lt;p&gt;Setup cannot continue.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Cet ordinateur ne satisfait pas les conditions requises pour installer %1.&lt;/p&gt;
&lt;p&gt;L&apos;installation ne peut pas continuer.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>ResizePartitionJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="41"/>
        <source>Resize partition %1.</source>
        <translation>Redimensionner la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="48"/>
        <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
        <translation>Redimensionner la partition &lt;strong&gt;%1&lt;/strong&gt; de &lt;strong&gt;%2Mio&lt;/strong&gt; à &lt;strong&gt;%3Mio&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="59"/>
        <source>Resizing %2MiB partition %1 to %3MiB.</source>
        <translation>Redimensionnement de la partition %1 de %2Mio à %3Mio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="77"/>
        <source>The installer failed to resize partition %1 on disk &apos;%2&apos;.</source>
        <translation>Le programme d&apos;installation n&apos;a pu redimensionner la partition %1 sur le disque &apos;%2&apos;.</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="30"/>
        <source>Resize Volume Group</source>
        <translation>Redimensionner le groupe de volumes</translation>
    </message>
</context>
<context>
    <name>ResizeVolumeGroupJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="28"/>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="46"/>
        <source>Resize volume group named %1 from %2 to %3.</source>
        <translation>Modifier le groupe de volumes nommé %1 de %2 à %3.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="37"/>
        <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>Modifier le groupe de volumes nommé &lt;strong&gt;%1&lt;/strong&gt; de &lt;strong&gt;%2&lt;/strong&gt; à &lt;strong&gt;%3&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="57"/>
        <source>The installer failed to resize a volume group named &apos;%1&apos;.</source>
        <translation>Le programme d&apos;installation n&apos;a pu redimensionner le groupe de volumes nommé &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>ResultsListDialog</name>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="137"/>
        <source>For best results, please ensure that this computer:</source>
        <translation>Pour de meilleurs résultats, veuillez vous assurer que cet ordinateur :</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="138"/>
        <source>System requirements</source>
        <translation>Prérequis du système</translation>
    </message>
</context>
<context>
    <name>ScanningDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="68"/>
        <source>Scanning storage devices...</source>
        <translation>Analyse des périphériques de stockage…</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="68"/>
        <source>Partitioning</source>
        <translation>Partitionnage</translation>
    </message>
</context>
<context>
    <name>SetHostNameJob</name>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="37"/>
        <source>Set hostname %1</source>
        <translation>Définir le nom d&apos;hôte %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="44"/>
        <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Définir le nom d&apos;hôte &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="51"/>
        <source>Setting hostname %1.</source>
        <translation>Définition du nom d&apos;hôte %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="122"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="129"/>
        <source>Internal Error</source>
        <translation>Erreur interne</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="137"/>
        <location filename="../src/modules/users/SetHostNameJob.cpp" line="146"/>
        <source>Cannot write hostname to target system</source>
        <translation>Impossible d&apos;écrire le nom d&apos;hôte sur le système cible.</translation>
    </message>
</context>
<context>
    <name>SetKeyboardLayoutJob</name>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="55"/>
        <source>Set keyboard model to %1, layout to %2-%3</source>
        <translation>Configurer le modèle clavier à %1, l&apos;agencement à %2-%3</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="368"/>
        <source>Failed to write keyboard configuration for the virtual console.</source>
        <translation>Impossible d&apos;écrire la configuration clavier pour la console virtuelle.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="369"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="397"/>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="414"/>
        <source>Failed to write to %1</source>
        <translation>Impossible d&apos;écrire sur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="396"/>
        <source>Failed to write keyboard configuration for X11.</source>
        <translation>Impossible d&apos;écrire la configuration clavier pour X11.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="413"/>
        <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
        <translation>Impossible d&apos;écrire la configuration clavier dans le répertoire existant /etc/default.</translation>
    </message>
</context>
<context>
    <name>SetPartFlagsJob</name>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="45"/>
        <source>Set flags on partition %1.</source>
        <translation>Configurer les flags sur la partition %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="51"/>
        <source>Set flags on %1MiB %2 partition.</source>
        <translation>Configurer les flags sur la partition %2 de %1Mio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="55"/>
        <source>Set flags on new partition.</source>
        <translation>Configurer les flags sur la nouvelle partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="67"/>
        <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Effacer les flags sur la partition &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="73"/>
        <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Effacer les flags sur la partition &lt;strong&gt;%2&lt;/strong&gt; de %1Mo.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="91"/>
        <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
        <translation>Configuration des flags &lt;strong&gt;%3&lt;/strong&gt; pour la partition &lt;strong&gt;%2&lt;/strong&gt; de %1Mio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="116"/>
        <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Effacement des flags sur la partition &lt;strong&gt;%2&lt;/strong&gt; de %1Mio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="135"/>
        <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
        <translation>Configuration des flags &lt;strong&gt;%3&lt;/strong&gt; pour la partition &lt;strong&gt;%2&lt;/strong&gt; de %1Mio.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="77"/>
        <source>Clear flags on new partition.</source>
        <translation>Effacer les flags sur la nouvelle partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="82"/>
        <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
        <translation>Marquer la partition &lt;strong&gt;%1&lt;/strong&gt; comme &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="98"/>
        <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Configuration du flag &lt;strong&gt;%1&lt;/strong&gt; pour la nouvelle partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="110"/>
        <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Effacement des flags sur la partition &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="121"/>
        <source>Clearing flags on new partition.</source>
        <translation>Effacement des flags sur la nouvelle partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="126"/>
        <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>Configuration des flags &lt;strong&gt;%2&lt;/strong&gt; pour la partition &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="142"/>
        <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
        <translation>Configuration des flags &lt;strong&gt;%1&lt;/strong&gt; pour la nouvell partition.</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="156"/>
        <source>The installer failed to set flags on partition %1.</source>
        <translation>L’installateur n’a pu configurer les flags sur la partition %1.</translation>
    </message>
</context>
<context>
    <name>SetPasswordJob</name>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="40"/>
        <source>Set password for user %1</source>
        <translation>Définir le mot de passe pour l&apos;utilisateur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="47"/>
        <source>Setting password for user %1.</source>
        <translation>Configuration du mot de passe utilisateur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="81"/>
        <source>Bad destination system path.</source>
        <translation>Mauvaise destination pour le chemin système.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="82"/>
        <source>rootMountPoint is %1</source>
        <translation>Le point de montage racine est %1</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="88"/>
        <source>Cannot disable root account.</source>
        <translation>Impossible de désactiver le compte root.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="89"/>
        <source>passwd terminated with error code %1.</source>
        <translation>passwd s’est terminé avec le code erreur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="97"/>
        <source>Cannot set password for user %1.</source>
        <translation>Impossible de créer le mot de passe pour l&apos;utilisateur %1.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/SetPasswordJob.cpp" line="98"/>
        <source>usermod terminated with error code %1.</source>
        <translation>usermod s&apos;est terminé avec le code erreur %1.</translation>
    </message>
</context>
<context>
    <name>SetTimezoneJob</name>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="34"/>
        <source>Set timezone to %1/%2</source>
        <translation>Configurer le fuseau-horaire à %1/%2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="62"/>
        <source>Cannot access selected timezone path.</source>
        <translation>Impossible d&apos;accéder au chemin d&apos;accès du fuseau horaire sélectionné.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="63"/>
        <source>Bad path: %1</source>
        <translation>Mauvais chemin : %1</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
        <source>Cannot set timezone.</source>
        <translation>Impossible de définir le fuseau horaire.</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
        <source>Link creation failed, target: %1; link name: %2</source>
        <translation>Création du lien échouée, destination : %1; nom du lien : %2</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="77"/>
        <source>Cannot set timezone,</source>
        <translation>Impossible de définir le fuseau horaire,</translation>
    </message>
    <message>
        <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="78"/>
        <source>Cannot open /etc/timezone for writing</source>
        <translation>Impossible d’ouvrir /etc/timezone en écriture.</translation>
    </message>
</context>
<context>
    <name>SetupGroupsJob</name>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="166"/>
        <source>Preparing groups.</source>
        <translation>Préparation des groupes</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="178"/>
        <location filename="../src/modules/users/MiscJobs.cpp" line="183"/>
        <source>Could not create groups in target system</source>
        <translation>Impossible de créer les groupes sur le système cible</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="184"/>
        <source>These groups are missing in the target system: %1</source>
        <translation>Il manque les groupes suivant dans le système cible : %1</translation>
    </message>
</context>
<context>
    <name>SetupSudoJob</name>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="33"/>
        <source>Configure &lt;pre&gt;sudo&lt;/pre&gt; users.</source>
        <translation>Configuration de l’utilisateur &lt;pre&gt;sudo&lt;/pre&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="55"/>
        <source>Cannot chmod sudoers file.</source>
        <translation>Impossible d&apos;exécuter chmod sur le fichier sudoers.</translation>
    </message>
    <message>
        <location filename="../src/modules/users/MiscJobs.cpp" line="60"/>
        <source>Cannot create sudoers file for writing.</source>
        <translation>Impossible de créer le fichier sudoers en écriture.</translation>
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
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="23"/>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="24"/>
        <source>&amp;Yes</source>
        <translation>&amp;Oui</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="25"/>
        <source>&amp;No</source>
        <translation>&amp;Non</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="26"/>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuler</translation>
    </message>
    <message>
        <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="27"/>
        <source>&amp;Close</source>
        <translation>&amp;Fermer</translation>
    </message>
</context>
<context>
    <name>UEFI</name>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="37"/>
        <source>Systemd-boot is a UEFI boot manager which executes configured EFI images. The default entry is selected by a configured pattern (glob) or an on-screen menu and is simple to configure.</source>
        <translation>Systemd-bot est un gestionnaire de démarrage UEFI qui exécute des images EFI configurées. L’entrée par défaut est sélectionnée par un motif configuré (glob) ou peut être configuré depuis le menu à l’écran.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="50"/>
        <source>Systemd-boot</source>
        <translation>Systemd-boot</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="103"/>
        <source>rEFInd is a fork of the earlier rEFIt boot manager. It is designed to be platform-neutral and to simplify booting multiple operating systems.</source>
        <translation>rEFInd est un fork de l’ancien gestionnaire de démarrage rEFIt. Il est conçu pour être indépendant de la plateforme et pour simplifier le démarrage de plusieurs systèmes d’exploitation.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="116"/>
        <source>Refind</source>
        <translation>Refind</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="171"/>
        <source>No bootloader selected. Selecting no bootloader might result in an un-bootable system, if you don&apos;t already have a bootloader were you can add this install to.</source>
        <translation>Aucun chargeur de démarrage n’est sélectionné. La non-sélection d’un chargeur de démarrage peut rendre le système non amorçable si vous n’avez pas déjà un chargeur de démarrage sur lequel vous pouvez ajouter cette installation.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="184"/>
        <source>No bootloader</source>
        <translation>Aucun chargeur de démarrage</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/UEFI.qml" line="236"/>
        <source>Please select a bootloader option for your install, or leave the default option, &lt;strong&gt;systemd-boot&lt;/strong&gt;.</source>
        <translation>Veuillez sélectionner une option de chargeur de démarrage pour votre installation ou laissez l’option par défaut, &lt;strong&gt;systemd-boot&lt;/strong&gt;.</translation>
    </message>
</context>
<context>
    <name>UsersPage</name>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="167"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
        <translation>&lt;small&gt;si plusieurs personnes utilisent cet ordinateur, vous pourrez créer plusieurs comptes après l&apos;installation.&lt;/small&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/users/UsersPage.cpp" line="173"/>
        <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
        <translation>&lt;small&gt;si plusieurs personnes utilisent cet ordinateur, vous pourrez créer plusieurs comptes après l&apos;installation.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>UsersQmlViewStep</name>
    <message>
        <location filename="../src/modules/usersq/UsersQmlViewStep.cpp" line="35"/>
        <source>Users</source>
        <translation>Utilisateurs</translation>
    </message>
</context>
<context>
    <name>UsersViewStep</name>
    <message>
        <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
        <source>Users</source>
        <translation>Utilisateurs</translation>
    </message>
</context>
<context>
    <name>VariantModel</name>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="232"/>
        <source>Key</source>
        <comment>Column header for key/value</comment>
        <translation>Clé</translation>
    </message>
    <message>
        <location filename="../src/calamares/VariantModel.cpp" line="236"/>
        <source>Value</source>
        <comment>Column header for key/value</comment>
        <translation>Valeur</translation>
    </message>
</context>
<context>
    <name>VolumeGroupBaseDialog</name>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="18"/>
        <source>Create Volume Group</source>
        <translation>Créer un groupe de volumes</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="24"/>
        <source>List of Physical Volumes</source>
        <translation>Liste des volumes physiques</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="34"/>
        <source>Volume Group Name:</source>
        <translation>Nom du groupe de volumes :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="47"/>
        <source>Volume Group Type:</source>
        <translation>Type de groupe de volumes :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="60"/>
        <source>Physical Extent Size:</source>
        <translation>Taille de l’étendue physique :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="70"/>
        <source> MiB</source>
        <translation>Mio</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="86"/>
        <source>Total Size:</source>
        <translation>Taille totale :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="106"/>
        <source>Used Size:</source>
        <translation>Taille utilisée :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="126"/>
        <source>Total Sectors:</source>
        <translation>Nombre total de secteurs :</translation>
    </message>
    <message>
        <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="146"/>
        <source>Quantity of LVs:</source>
        <translation>Nombre de volumes logiques :</translation>
    </message>
</context>
<context>
    <name>WelcomePage</name>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="18"/>
        <source>Form</source>
        <translation>Form</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="79"/>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="98"/>
        <source>Select application and system language</source>
        <translation>Sélectionner la langue du système et des applications</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="187"/>
        <source>Open donations website</source>
        <translation>Site web pour effectuer des dons librement</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="227"/>
        <source>&amp;Donate</source>
        <translation>&amp;Faire un don</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="237"/>
        <source>Open help and support website</source>
        <translation>Site web d’aide et de support</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="297"/>
        <source>&amp;Release notes</source>
        <translation>&amp;Notes de version</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="287"/>
        <source>&amp;Known issues</source>
        <translation>&amp;Problèmes connus</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="240"/>
        <source>&amp;Support</source>
        <translation>&amp;Support</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.ui" line="177"/>
        <source>&amp;About</source>
        <translation>&amp;À propos</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="223"/>
        <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenu sur l’installateur %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="222"/>
        <source>&lt;h1&gt;Welcome to the Calamares installer for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenu sur l’installateur Calamares pour %1&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="216"/>
        <source>&lt;h1&gt;Welcome to the Calamares setup program for %1.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenu sur l’installateur Calamares pour %1&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="217"/>
        <source>&lt;h1&gt;Welcome to %1 setup.&lt;/h1&gt;</source>
        <translation>&lt;h1&gt;Bienvenu sur l’installateur %1.&lt;/h1&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="235"/>
        <source>About %1 setup</source>
        <translation>À propos de l&apos;installateur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="235"/>
        <source>About %1 installer</source>
        <translation>À propose de l&apos;installateur %1</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="238"/>
        <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2020 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Thanks to &lt;a href=&quot;https://calamares.io/team/&quot;&gt;the Calamares team&lt;/a&gt; and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
        <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;pour %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2020 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Merci à &lt;a href=&quot;https://calamares.io/team/&quot;&gt;l’équipe Calamares&lt;/a&gt; et l’&lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;équipe de traducteurs KaOS&lt;/a&gt;. &lt;br/&gt;&lt;br/&gt;Le développement de &lt;a href=&quot;https://calamares.io/&quot;&gt;Calamares&lt;/a&gt; est sponsorisé par &lt;br/&gt;&lt;a href=&quot;http://www.blue-systems.com/&quot;&gt;Blue Systems&lt;/a&gt; - Liberating Software.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcome/WelcomePage.cpp" line="228"/>
        <source>%1 support</source>
        <translation>%1 supporte</translation>
    </message>
</context>
<context>
    <name>WelcomeQmlViewStep</name>
    <message>
        <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="40"/>
        <source>Welcome</source>
        <translation>Bienvenu</translation>
    </message>
</context>
<context>
    <name>WelcomeViewStep</name>
    <message>
        <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="46"/>
        <source>Welcome</source>
        <translation>Bienvenue</translation>
    </message>
</context>
<context>
    <name>ZfsJob</name>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="101"/>
        <source>Create ZFS pools and datasets</source>
        <translation>Créer des pools et des ensembles de données ZFS</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="162"/>
        <source>Failed to create zpool on </source>
        <translation>Impossible de créer un zpool sur</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="180"/>
        <source>Configuration Error</source>
        <translation>Erreur de configuration</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="181"/>
        <source>No partitions are available for Zfs.</source>
        <translation>Aucune partition n’est disponible pour Zfs.</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="192"/>
        <source>Internal data missing</source>
        <translation>Donnés internes manquantes</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="192"/>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="257"/>
        <source>Failed to create zpool</source>
        <translation>Impossible de créer un zpool</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="329"/>
        <source>Failed to create dataset</source>
        <translation>Impossible de créer un jeu de données</translation>
    </message>
    <message>
        <location filename="../src/modules/zfs/ZfsJob.cpp" line="330"/>
        <source>The output was: </source>
        <translation>La sortie était :</translation>
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
                        Copyright 2017-2022 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;
                        Thanks to &lt;a href='https://calamares.io/team/'&gt;the Calamares team&lt;/a&gt;
                        and the &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;KaOS
                        translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;
                        &lt;a href='https://calamares.io/'&gt;Calamares&lt;/a&gt;
                        development is sponsored by &lt;br/&gt;
                        &lt;a href='http://www.blue-systems.com/'&gt;Blue Systems&lt;/a&gt; -
                        Liberating Software.</source>
        <translation>&lt;h1&gt;%1&lt;/h1&gt; &lt;br/&gt;
&lt;strong&gt;%2&lt;br/&gt;
pour %3&lt;/strong&gt; &lt;br/&gt;&lt;br/&gt;
Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;
Copyright 2017-2022 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;
Merci à &lt;a href=&apos;https://calamares.io/team/&apos;&gt;l’équipe de Calamares&lt;/a&gt;
et à &lt;a href=&quot;https://www.transifex.com/kaos/kaos/&quot;&gt;l’équipe de traduction de KaOS&lt;/a&gt;. &lt;br/&gt; &lt;br/&gt;
Le développement de &lt;a href=&apos;https://calamares.io/&apos;&gt;Calamares&lt;/a&gt;
est sponsorisé par &lt;br/&gt;
&lt;a href=&apos;http://www.blue-systems.com/&apos;&gt;Blue Systems&lt;/a&gt; - 
Liberating Software.</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/about.qml" line="96"/>
        <source>Back</source>
        <translation>Retour</translation>
    </message>
</context>
<context>
    <name>calamares-sidebar</name>
    <message>
        <location filename="../src/branding/kaos_branding/calamares-sidebar.qml" line="89"/>
        <location filename="../src/calamares/calamares-sidebar.qml" line="79"/>
        <source>Show debug information</source>
        <translation>Afficher les informations de débogage</translation>
    </message>
</context>
<context>
    <name>finishedq</name>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="38"/>
        <source>Installation Completed</source>
        <translation>Installation terminée</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="45"/>
        <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart into your new system, or continue using the Live environment.</source>
        <translation>%1 a été installé sur votre ordinateur.&lt;br/&gt;
Vous pouvez maintenant redémarrer sur votre nouveau système ou continuer à utiliser l’environnement Live.</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="67"/>
        <source>Close Installer</source>
        <translation>Fermer le programme d’installation</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="74"/>
        <source>Restart System</source>
        <translation>Redémarrer le système</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq.qml" line="95"/>
        <source>&lt;p&gt;A full log of the install is available as installation.log in the home directory of the Live user.&lt;br/&gt;
            This log is copied to %1 of the target system.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Un log complet de l’installation est disponible dans le fichier installation.log situé dans le répertoire home de l’utilisateur Live.&lt;br/&gt;
Ce log est copié sur %1 dans le système cible.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>finishedq@mobile</name>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="36"/>
        <source>Installation Completed</source>
        <translation>Installation terminée</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="43"/>
        <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart your device.</source>
        <translation>%1 a été installé sur votre ordinateur.&lt;br/&gt;
Vous pouvez maintenant redémarrer votre système.</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="65"/>
        <source>Close</source>
        <translation>Fermer</translation>
    </message>
    <message>
        <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="71"/>
        <source>Restart</source>
        <translation>Redémarrer</translation>
    </message>
</context>
<context>
    <name>i18n</name>
    <message>
        <location filename="../src/modules/localeq/i18n.qml" line="50"/>
        <source>&lt;h1&gt;Languages&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;h1&gt;Langues&lt;/h1&gt; &lt;/br&gt;
Les paramètres régionaux du système affectent la langue et le jeu de caractères de certains éléments de l&apos;interface utilisateur de ligne de commande. La configuration actuelle est &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18n.qml" line="123"/>
        <source>&lt;h1&gt;Locales&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;h1&gt;Paramètres régionaux&lt;/h1&gt; &lt;/br&gt;
Les paramètres régionaux du système affectent le format des dates et des nombres. La configuration actuelle est &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18n.qml" line="189"/>
        <source>Back</source>
        <translation>Retour</translation>
    </message>
</context>
<context>
    <name>i18nw</name>
    <message>
        <location filename="../src/modules/localeq/i18nw.qml" line="50"/>
        <source>&lt;h1&gt;Languages&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;h1&gt;Langues&lt;/h1&gt; &lt;/br&gt;
Les paramètres régionaux du système affectent la langue et le jeu de caractères de certains éléments de l&apos;interface utilisateur de ligne de commande. La configuration actuelle est &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18nw.qml" line="124"/>
        <source>&lt;h1&gt;Locales&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
        <translation>&lt;h1&gt;Paramètres régionaux&lt;/h1&gt; &lt;/br&gt;
Les paramètres régionaux du système affectent le format des dates et des nombres. La configuration actuelle est &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/i18nw.qml" line="192"/>
        <source>Back</source>
        <translation>Retour</translation>
    </message>
</context>
<context>
    <name>keyboardq</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="60"/>
        <source>To activate keyboard preview, select a layout.</source>
        <translation>Pour activer l’aperçu du clavier, sélectionnez le modèle.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="86"/>
        <source>Keyboard Model:</source>
        <translation>Modèle de clavier :</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="254"/>
        <source>Layouts</source>
        <translation>Agencements</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="263"/>
        <source>Type here to test your keyboard</source>
        <translation>Veuillez saisir ici pour tester votre clavier</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq.qml" line="179"/>
        <source>Variants</source>
        <translation>Variantes</translation>
    </message>
</context>
<context>
    <name>keyboardq_orig</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="20"/>
        <source>Keyboard Model</source>
        <translation>Modèle de clavier</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="21"/>
        <source>Pick your preferred keyboard model or use the default one based on the detected hardware</source>
        <translation>Sélectionnez votre modèle de clavier préféré ou utilisez celui par défaut en fonction du matériel détecté</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="56"/>
        <source>Refresh</source>
        <translation>Réactualiser</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="62"/>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="169"/>
        <source>Layouts</source>
        <translation>Agencements</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="75"/>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="134"/>
        <source>Keyboard Layout</source>
        <translation>Agencement de clavier</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="113"/>
        <source>Models</source>
        <translation>Modèles</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="121"/>
        <source>Variants</source>
        <translation>Variantes</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_orig.qml" line="180"/>
        <source>Test your keyboard</source>
        <translation>Testez votre clavier</translation>
    </message>
</context>
<context>
    <name>keyboardq_w</name>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="77"/>
        <source>Keyboard Selection</source>
        <translation>Sélection du clavier</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="93"/>
        <source>Click your preferred keyboard model to select layout and variant, or use the default one based on the detected hardware.</source>
        <translation>Cliquez sur votre modèle de clavier préféré pour sélectionner la disposition et la variante, ou utilisez celui par défaut en fonction du matériel détecté</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="111"/>
        <source>Keyboard Model:</source>
        <translation>Modèle de clavier :</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="244"/>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="476"/>
        <source>Layouts</source>
        <translation>Agencements</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="358"/>
        <source>Models</source>
        <translation>Modèles</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="365"/>
        <source>Variants</source>
        <translation>Variantes</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="381"/>
        <source>Keyboard Variant</source>
        <translation>Variante du clavier</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="398"/>
        <source>Variant keyboard model or use the default one based on the detected hardware.</source>
        <translation>Choisissez la variante du modèle de clavier ou utilisez celle par défaut, basée sur le matériel détecté.</translation>
    </message>
    <message>
        <location filename="../src/modules/keyboardq/keyboardq_w.qml" line="486"/>
        <source>Test your keyboard</source>
        <translation>Testez votre clavier</translation>
    </message>
</context>
<context>
    <name>layout</name>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="32"/>
        <source>Region: </source>
        <translation>Région :</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="43"/>
        <source>Adjust Language</source>
        <translation>Ajustez votre langue</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="53"/>
        <source>Zone: </source>
        <translation>Zone :</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/layout.qml" line="63"/>
        <source>Adjust Locale</source>
        <translation>Ajustez les paramètres régionaux</translation>
    </message>
</context>
<context>
    <name>localeq</name>
    <message>
        <location filename="../src/modules/localeq/localeq.qml" line="110"/>
        <source>Change</source>
        <translation>Modifier</translation>
    </message>
</context>
<context>
    <name>localeq2</name>
    <message>
        <location filename="../src/modules/localeq/localeq2.qml" line="40"/>
        <source>Region: </source>
        <translation>Région :</translation>
    </message>
    <message>
        <location filename="../src/modules/localeq/localeq2.qml" line="55"/>
        <source>Zone: </source>
        <translation>Zone :</translation>
    </message>
</context>
<context>
    <name>notesqml</name>
    <message>
        <location filename="../src/modules/notesqml/notesqml.qml" line="50"/>
        <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;These are example release notes.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;%1&lt;/h3&gt;
&lt;p&gt;Voici un exemple de notes de version.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>packagechooserq</name>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="45"/>
        <source>LibreOffice is a powerful and free office suite, used by millions of people around the world. It includes several applications that make it the most versatile Free and Open Source office suite on the market.&lt;br/&gt;
                    Default option.</source>
        <translation>LibreOffice est une suite bureautique libre et puissante, utilisée par des millions de personnes à travers le monde. Elle inclut de nombreuses applications, ce qui en fait la suite bureautique libre et Open Source la plus flexible du marché.&lt;br/&gt;
Option par défaut.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="59"/>
        <source>LibreOffice</source>
        <translation>LibreOffice</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="112"/>
        <source>If you don&apos;t want to install an office suite, just select No Office Suite. You can always add one (or more) later on your installed system as the need arrives.</source>
        <translation>Si vous ne souhaitez pas installer de suite bureautique, sélectionnez simplement Aucune suite bureautique. Vous pouvez toujours en ajouter un, (ou plusieurs) ultérieurement sur votre système installé lorsque le besoin s’en fera sentir.</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="125"/>
        <source>No Office Suite</source>
        <translation>Aucune suite bureautique</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="180"/>
        <source>Create a minimal Plasma Desktop install, remove all extra applications and decide later on what you would like to add to your system. Examples of what won&apos;t be on such an install, there will be no Office Suite, no media players, no image viewer or print support.  It will be just a desktop, file browser, package manager, text editor and simple web-browser.</source>
        <translation>Créer une installation minimale du bureau Plasma, en supprimant toutes les applications supplémentaires et choisissez plus tard ce que vous souhaitez ajouter à votre système. Exemples d’applications non présentes dans ce genre d’installation : pas de suite Office, de lecteur multimédias, de visionneuse d’images ou de support d’impression. Ce ne sera qu’un bureau, un navigateur de fichiers, un gestionnaire de paquets, un éditeur de texte et un simple navigateur Web.
</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="193"/>
        <source>Minimal Install</source>
        <translation>Installation minimale</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="245"/>
        <source>Please select an option for your install, or use the default: LibreOffice included.</source>
        <translation>Veuillez sélectionner une option d’installation ou utiliser les paramètres par défaut : LibreOffice inclus.</translation>
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
        <translation>&lt;h1&gt;Accord de licence&lt;/h1&gt;
&lt;p&gt;Si le pilote non libre a été sélectionné, cet installeur installera des paquets propriétaires nécessitant&lt;br /&gt;
des contrats de licence utilisateur finaux (CLUF) supplémentaire rattachés.&lt;br /&gt;
Veuillez consuter les contrats de licence utilisateur finaux.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/packagechooserq/packagechooserq@licenseq.qml" line="61"/>
        <source>I accept the terms and conditions above</source>
        <translation>J’accepte les termes et les conditions ci-dessus</translation>
    </message>
</context>
<context>
    <name>partitionq</name>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="43"/>
        <source>&lt;h3&gt;Full disk encryption&lt;/h3&gt;</source>
        <translation>&lt;h3&gt;Chiffrement du disque entier&lt;/h3&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="50"/>
        <source>Password</source>
        <translation>Mot de passe</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="66"/>
        <source>Password (repeat)</source>
        <translation>Mot de passe (répétez)</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="92"/>
        <source>Continue</source>
        <translation>Continuer</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="95"/>
        <source/>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="99"/>
        <source>Passwords do not match</source>
        <translation>Les mots de passe ne correspondent pas</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="101"/>
        <source>Password too short</source>
        <translation>Le mot de passe est trop court</translation>
    </message>
    <message>
        <location filename="../src/modules/partitionq/partitionq.qml" line="103"/>
        <source>Please wait...</source>
        <translation>Veuillez attendre…</translation>
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
&lt;p&gt;Ceci est un exemple de fichier QML montrant les options dans un éditeur de texte riche avec du contenu flottant.&lt;/p&gt;

&lt;p&gt;L’éditeur de texte riche QML peut utiliser des balises HTML, le contenu flottant est utile pour les écrans tactiles.&lt;/p&gt;

&lt;p&gt;&lt;b&gt;Texte en gras&lt;/b&gt;&lt;/p&gt;
&lt;p&gt;&lt;i&gt;Texte en italique&lt;/i&gt;&lt;/p&gt;
&lt;p&gt;&lt;u&gt;Texte souligné&lt;/u&gt;&lt;/p&gt;
&lt;p&gt;&lt;center&gt;Texte centré&lt;/center&gt;&lt;/p&gt;
&lt;p&gt;&lt;s&gt;Texte barré&lt;/s&gt;&lt;/p&gt;

&lt;p&gt;Exemple de code :
&lt;code&gt;ls -l /home&lt;/code&gt;&lt;/p&gt;

&lt;p&gt;&lt;b&gt;Listes :&lt;/b&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Processeur Intel&lt;/li&gt;
&lt;li&gt;Processeur AMD&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;La barre de défilement verticale est réglable, la largeur actuelle est réglée sur 10.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/release_notes.qml" line="76"/>
        <source>Back</source>
        <translation>Retour</translation>
    </message>
</context>
<context>
    <name>show</name>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="48"/>
        <source>Here the actual install of KaOS will start.&lt;br/&gt;Use the left &lt;b&gt;mouse button&lt;/b&gt; to go to the next slide, right for previous.&lt;br/&gt;After creating your chosen disk setup in the first 10 % &lt;br/&gt;the full copying of the ISO will take the longest of this install phase &lt;br/&gt;and will run until approximately 30%.&lt;br/&gt;</source>
        <translation>L’installation de KaOS va commencer à partir d’ici.&lt;br/&gt;Veuillez utiliser le &lt;b&gt;bouton gauche de la souris&lt;/b&gt; pour passer à la diapositive suivante, bouton droit pour la précédente.&lt;br/&gt;Une fois les disques choisis créés dans les premier 10%,&lt;br/&gt; la copie de toute l’ISO sera la phase la plus longue de l’installation&lt;br/&gt; et durera jusqu’à environ 30%.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="74"/>
        <source>After the ISO is copied some 25 post-install modules will run.&lt;br/&gt;This includes setting user specific options, &lt;br/&gt;removing Live Session only packages&lt;br/&gt;and adjusting hardware setup.&lt;br/&gt;</source>
        <translation>Une fois l’ISO copiée, près de 25 modules post-installation seront exécutés.&lt;br/&gt;Cela comprend la configuration d’options utilisateur spécifiques,&lt;br/&gt;la suppression des paquets uniquement utilisés pour la session Live&lt;br/&gt;et la configuration des paramètres matériels.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="99"/>
        <source>The default Office Suite is LibreOffice.&lt;br/&gt;Calligra is available in the repositories. &lt;br/&gt;</source>
        <translation>La suite Office par défaut est LibreOffice.&lt;br/&gt; Calligra est disponible dans les dépôts.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="122"/>
        <source>Qt/KDE specific internet applications include the &lt;br/&gt;Falkon web-browser and kde-telepathy for &lt;br/&gt;chat and Instant Messaging. &lt;br/&gt;</source>
        <translation>Parmi les applications internet spécifiquement Qt/KDE, on peut noter &lt;br/&gt;le navigateur Falkon et kde-telepathy pour &lt;br/&gt;la messagerie instantanée et client chat.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="146"/>
        <source>For package management Octopi is the GUI application.&lt;br/&gt;</source>
        <translation>Octopi est l’interface graphique pour la gestion de paquets.&lt;br/&gt;</translation>
    </message>
    <message>
        <location filename="../src/branding/kaos_branding/show.qml" line="168"/>
        <source>May using KaOS be a pleasant experience for you.</source>
        <translation>En espérant que KaOS vous soit une expérience agréable.</translation>
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
        <translation>&lt;h3&gt;Bienvenue sur le programme d’installation KaOS &lt;quote&gt;2020.06&lt;/quote&gt;&lt;/h3&gt;
&lt;p&gt;Ce programme va vous poser quelques questions et configurer KaOS sur votre ordinateur.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="71"/>
        <source>About</source>
        <translation>À propos</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="84"/>
        <source>Known issues</source>
        <translation>Problèmes connus</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="95"/>
        <source>Release notes</source>
        <translation>Notes de version</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/test.qml" line="106"/>
        <source>Donate</source>
        <translation>Faire un don</translation>
    </message>
</context>
<context>
    <name>usersq</name>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="43"/>
        <source>Pick your user name and credentials to login and perform admin tasks</source>
        <translation>Choisissez votre nom d’utilisateur et vos informations d’identification pour vous connecter et effectuer des tâches d’administrateur</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="56"/>
        <source>What is your name?</source>
        <translation>Quel est votre nom ?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="63"/>
        <source>Your Full Name</source>
        <translation>Votre nom complet</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="86"/>
        <source>What name do you want to use to log in?</source>
        <translation>Quel nom souhaitez-vous utiliser pour la connexion ?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="93"/>
        <source>Login Name</source>
        <translation>Nom de connexion</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="123"/>
        <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
        <translation>Si plusieurs personnes utilisent cet ordinateur, vous pourrez créer plusieurs comptes après l&apos;installation.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="152"/>
        <source>What is the name of this computer?</source>
        <translation>Quel est le nom de votre ordinateur ?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="158"/>
        <source>Computer Name</source>
        <translation>Nom de l’ordinateur</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="185"/>
        <source>This name will be used if you make the computer visible to others on a network.</source>
        <translation>Ce nom sera utilisé pour rendre l&apos;ordinateur visible des autres sur le réseau.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="214"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Veuillez saisir le mot de passe pour sécuriser votre compte.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="224"/>
        <source>Password</source>
        <translation>Mot de passe</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="241"/>
        <source>Repeat Password</source>
        <translation>Répéter le mot de passe</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="268"/>
        <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
        <translation>Veuillez entrer le même mot de passe deux fois afin de vérifier qu’il n&apos;y ait pas d&apos;erreur de frappe. Un bon mot de passe doit contenir un mélange de lettres, de nombres et de caractères de ponctuation, contenir au moins huit caractères et être changé à des intervalles réguliers.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="414"/>
        <source>Validate passwords quality</source>
        <translation>Valider la qualité du mot de passe</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="424"/>
        <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
        <translation>Lorsque cette case est cochée, la vérification de la force du mot de passe est effectuée et vous ne pourrez pas utiliser un mot de passe faible.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="406"/>
        <source>Log in automatically without asking for the password</source>
        <translation>Se connecter automatiquement sans demander de mot de passe</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="135"/>
        <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
        <translation>Seuls les lettres minuscules, les nombres, les tirets-bas et les traits d’union sont autorisés.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="143"/>
        <source>root is not allowed as username.</source>
        <translation>root n’est pas un nom d’utilisateur autorisé.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="197"/>
        <source>Only letters, numbers, underscore and hyphen are allowed, minimal of two characters.</source>
        <translation>Seuls les lettres, les chiffres, les tirets-bas sont autorisés, avec au minimum 2 caractères.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="205"/>
        <source>localhost is not allowed as hostname.</source>
        <translation>localhost n’est pas un nom d’hôte autorisé.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="300"/>
        <source>Reuse user password as root password</source>
        <translation>Utiliser le mot de passe de l’utilisateur pour le compte root</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="308"/>
        <source>Use the same password for the administrator account.</source>
        <translation>Choisir le même mot de passe pour le compte administrateur.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="321"/>
        <source>Choose a root password to keep your account safe.</source>
        <translation>Veuillez saisir le mot de passe pour sécuriser votre compte</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="331"/>
        <source>Root Password</source>
        <translation>Mot de passe root</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="349"/>
        <source>Repeat Root Password</source>
        <translation>Répéter le mot de passe root</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq.qml" line="376"/>
        <source>Enter the same password twice, so that it can be checked for typing errors.</source>
        <translation>Veuillez entrer le même mot de passe deux fois, afin de vérifier qu&apos;ils n&apos;y ait pas d&apos;erreur de frappe.</translation>
    </message>
</context>
<context>
    <name>usersq2</name>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="48"/>
        <source>Pick your user name and credentials to login and perform admin tasks</source>
        <translation>Choisissez votre nom d’utilisateur et vos informations d’identification pour vous connecter et effectuer des tâches d’administrateur</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="64"/>
        <source>What is your name?</source>
        <translation>Quel est votre nom ?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="73"/>
        <source>Your Full Name</source>
        <translation>Votre nom complet</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="111"/>
        <source>What name do you want to use to log in?</source>
        <translation>Quel nom souhaitez-vous utiliser pour la connexion ?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="119"/>
        <source>Login Name</source>
        <translation>Nom de connexion</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="146"/>
        <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
        <translation>Si plusieurs personnes utilisent cet ordinateur, vous pourrez créer plusieurs comptes après l&apos;installation.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="159"/>
        <source>Your username must start with a lowercase letter or underscore.</source>
        <translation>Votre nom d’utilisateur doit commencer par une lettre minuscule ou un tiret-bas.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="169"/>
        <source>Choose a root password to keep your account safe.</source>
        <translation>Veuillez saisir le mot de passe pour sécuriser votre compte</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="179"/>
        <source>Root Password</source>
        <translation>Mot de passe root</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="197"/>
        <source>Repeat Root Password</source>
        <translation>Répéter le mot de passe root</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="223"/>
        <source>Enter the same password twice, so that it can be checked for typing errors.</source>
        <translation>Veuillez entrer le même mot de passe deux fois, afin de vérifier qu&apos;ils n&apos;y ait pas d&apos;erreur de frappe.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="255"/>
        <source>Validate passwords quality</source>
        <translation>Valider la qualité du mot de passe</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq2.qml" line="267"/>
        <source>Known issues</source>
        <translation>Problèmes connus</translation>
    </message>
</context>
<context>
    <name>usersq3</name>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="31"/>
        <source>Users</source>
        <translation>Utilisateurs</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="32"/>
        <source>Pick your user name and credentials to login and perform admin tasks</source>
        <translation>Choisissez votre nom d’utilisateur et vos informations d’identification pour vous connecter et effectuer des tâches d’administrateur</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="64"/>
        <source>What is your name?</source>
        <translation>Quel est votre nom ?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="71"/>
        <source>Your Full Name</source>
        <translation>Votre nom complet</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="88"/>
        <source>What name do you want to use to log in?</source>
        <translation>Quel nom souhaitez-vous utiliser pour la connexion ?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="89"/>
        <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
        <translation>Si plusieurs personnes utilisent cet ordinateur, vous pourrez créer plusieurs comptes après l&apos;installation.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="96"/>
        <source>Login Name</source>
        <translation>Nom de connexion</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="115"/>
        <source>What is the name of this computer?</source>
        <translation>Quel est le nom de votre ordinateur ?</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="116"/>
        <source>This name will be used if you make the computer visible to others on a network.</source>
        <translation>Ce nom sera utilisé pour rendre l&apos;ordinateur visible des autres sur le réseau.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="122"/>
        <source>Computer Name</source>
        <translation>Nom de l’ordinateur</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="139"/>
        <source>Choose a password to keep your account safe.</source>
        <translation>Veuillez saisir le mot de passe pour sécuriser votre compte.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="140"/>
        <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
        <translation>Veuillez entrer le même mot de passe deux fois afin de vérifier qu’il n&apos;y ait pas d&apos;erreur de frappe. Un bon mot de passe doit contenir un mélange de lettres, de nombres et de caractères de ponctuation, contenir au moins huit caractères et être changé à des intervalles réguliers.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="146"/>
        <source>Password</source>
        <translation>Mot de passe</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="168"/>
        <source>Repeat Password</source>
        <translation>Répéter le mot de passe</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="188"/>
        <source>Reuse user password as root password</source>
        <translation>Utiliser le mot de passe de l’utilisateur pour le compte root</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="201"/>
        <source>Choose a root password to keep your account safe.</source>
        <translation>Veuillez saisir le mot de passe pour sécuriser votre compte</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="207"/>
        <source>Root Password</source>
        <translation>Mot de passe root</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="228"/>
        <source>Repeat Root Password</source>
        <translation>Répéter le mot de passe root</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="249"/>
        <source>More options.</source>
        <translation>Plus d’options.</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="255"/>
        <source>Validate passwords quality</source>
        <translation>Valider la qualité du mot de passe</translation>
    </message>
    <message>
        <location filename="../src/modules/usersq/usersq3.qml" line="264"/>
        <source>Log in automatically without asking for the password</source>
        <translation>Se connecter automatiquement sans demander de mot de passe</translation>
    </message>
</context>
<context>
    <name>welcomeq</name>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="35"/>
        <source>&lt;h3&gt;Welcome to the %1 &lt;quote&gt;%2&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up %1 on your computer.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Bienvenue sur le programme d’installation &lt;quote&gt;%2&lt;/quote&gt;&lt;/h3&gt;
&lt;p&gt;Ce programme va vous poser quelques questions et configurer %1 sur votre ordinateur.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="66"/>
        <source>About</source>
        <translation>À propos</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="79"/>
        <source>Support</source>
        <translation>Support</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="90"/>
        <source>Known issues</source>
        <translation>Problèmes connus</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="101"/>
        <source>Release notes</source>
        <translation>Notes de version</translation>
    </message>
    <message>
        <location filename="../src/modules/welcomeq/welcomeq.qml" line="113"/>
        <source>Donate</source>
        <translation>Faire un don</translation>
    </message>
</context>
</TS>