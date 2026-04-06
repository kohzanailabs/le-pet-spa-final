$src = "C:\Users\kohza\.gemini\antigravity\brain\163be750-915f-4f4c-b863-17f328def9b5"
$dst = "C:\free test pet web\lepetspa\public"

Copy-Item "$src\hero_bg_1775447731332.png" "$dst\hero-bg.png" -Force
Copy-Item "$src\mission_img_1775447746281.png" "$dst\mission.png" -Force
Copy-Item "$src\passion_img_1775447761809.png" "$dst\passion.png" -Force
Copy-Item "$src\grooming_img_1775447791745.png" "$dst\grooming.png" -Force
Copy-Item "$src\nutrition_img_1775447806549.png" "$dst\nutrition.png" -Force
Copy-Item "$src\supplies_img_1775447822776.png" "$dst\supplies.png" -Force

Write-Host "All images copied!"
