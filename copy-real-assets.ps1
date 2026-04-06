$dest = "c:\free test pet web\lepetspa\public"
$downloads = "c:\Users\kohza\Downloads"

# Logo
Copy-Item "$downloads\e70e42_464cc559f7fc4bde95b04f3b2cf99c07~mv2_d_2000_2000_s_2.avif" "$dest\logo.avif" -Force

# Shop Photos
Copy-Item "$downloads\e70e42_894439b875ae49888e07af8938d477fd.jpg" "$dest\shop-1.jpg" -Force
Copy-Item "$downloads\e70e42_949ba735ecb24ba088e9fb3085f35afb~mv2_d_1632_1224_s_2.jpg" "$dest\shop-2.jpg" -Force
Copy-Item "$downloads\e70e42_524b61e9bdc048c28474119d5526a705~mv2_d_1632_1224_s_2.jpg" "$dest\shop-3.jpg" -Force
Copy-Item "$downloads\e70e42_12c2d1c7422647239e67f53ef8620dca.jpg" "$dest\shop-4.jpg" -Force
Copy-Item "$downloads\e70e42_9ab6bfe7eab44cd59bddcff32c572d5a~mv2_d_1632_1224_s_2.jpg" "$dest\shop-5.jpg" -Force

Write-Host "Real assets copied to public/ folder successfully."
