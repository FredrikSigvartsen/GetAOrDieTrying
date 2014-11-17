<?php
$minemail = 'rentalnetworknorway@gmail.com';
$firmanavn = $_POST['FirmaNavn']; 
$fnavn = $_POST['Fornavn']; 
$enavn = $_POST['Etternavn'];
$tlfnr = $_POST['TelefonNr'];
$epost = $_POST['Email'];
$type = $_POST['TypeArang'];
$mailfelt = $_POST['MailFelt'];

$til = $minemail; 
$epost_emne = "Kontakt: $fnavn $enavn";
$epost_melding = "Ny melding\n".
"Detaljer:\nFirmnavn: $firmanavn \nFornavn: $fnavn \nEtternavn: $enavn". 
"\nTelefonNr: $tlfnr \nEpost: $epost \nType arrangement: $type \nMelding: $mailfelt"; 
	
mail($til, $epost_emne, $epost_melding);

header('Location: Kontaktsendt.html'); 
?>
