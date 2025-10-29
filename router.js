
def (antimalware_ochrana) // definice toho,co budeme delat - def
def (MAC_adresy)
def (hackersky_utok)
def (cervi)
def (neaktivni_porty_ethernet)
def (sifrovani_provozu)

console.log (antimalware_ochrana) // definice pro zablokovani malware - pouzivame disable
disable (botnet)
disable (spyware)
disable (ransomware)
disable (exploit)
disable (rootkit)
disable (adware)
disable (trojan) // trojan je virus, ale musime psat anglicky trojan!

console.log (hackersky_utok) // definice pro zablokování hackerských útoků - používáme block-port
block-port [505] // 505 je DDoS
block-port [USB-Flash-Disk] ;{botnet;spyware;ransomware;exploit;rootkit;adware;trojan;worms} // zablokování baiting - vypsat všechny druhy malware, worms jsou oba typy červů, worms = červi
block-port [PhishingSMS-Element] [PhishingEMAIL-Element] // Zablokování Phishing útoků - SMS a emaily, je nutné přidat parametr -Element
block-port [password] [7K@iR49-d%rT=E+F1Mq8u@vb*=] [password] [6+VkP*S?rN!4C8%+5] ;{passwords-encrypted} // zablokování prolomení hesel pro uživatele a pro admina - šifrování přes -encrypted

console.log (cervi)
alert ('worms') // zablokování obou červů


console.log (neaktivni_porty_ethernet)
off [2,3,4,5] // zablokuje porty LAN 2,3,4,5 na routeruss
// PÍŠEME VŽDY V JEDNOM PŘÍKAZU, BLOKUJEME JEN NEPOUŽÍVANÉ PORTY NA ROUTERU

console.log (MAC_adresy)
enabled [14-20-20-04-cb-37,58-20-71-37-ca-05,pt-26-89-fh-gd-00,14-01-52-b0-51-c9,cc-e6-86-6f-9d-d6,60-D8-19-27-2D-9E] // enabled - povolí zadané MAC adresy 
//Adam   (14-20-20-04-cb-37 : Adamův mobil Galaxy A14_jeho hlavní,  58-20-71-37-ca-05 : Adamův mobil Redmi A5, pt-26-89-fh-gd-00 : Adamův notebook lenovo-(červené)-
//Adam   DESKTOP-PTL6GS8, 14-01-52-b0-51-c9 : Adamův starý mobil Galaxy A20e, 
//Já     cc-e6-86-6f-9d-d6 : Můj mobil A05s,    60-D8-19-27-2D-9E : Můj Acer1 (červený)
disable [Disabled-All-Instanceof] // disable - zakáže všechny neuložené MAC adresy
disable [off] // zablokuje MAC adresu stačí místo off napsat MAC adresu 

console.log (sifrovani_provozu)
decrypted [1,0] // zašifruje provoz a bude všem zobrazovat 1 a 0
{superuser-admin} // znamená, že admin může vidět provoz nešifrovaně, je "superuživatel"
{superuser-off} // znamená, že jsi stanovila dalšího "superuživatele", který může sledovat nešifrovaně provoz - zadáš jeho MAC místo off


end





