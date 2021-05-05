# sns
a foundry System for the Spaceships and Starwyrms dnd5e supplement

To use this, download the contents in the repository and add them to a folder called "sns" in the "Systems" folder of your foundry AppData. It should work pretty much exactly as needed. 

I have statted up everything in the Core Sourcebook and Galactic Primer, but do not feel comfortable sharing that with people without express permission from the developers. Thus, this repository only includes the System files, not the Compendium packs with all the handouts, gear, classes, etc. 

I am also not uploading the icons, art assets, and additional files for creature/ship token/art management. This is partially to keep file-size down, but mostly because I don't own those art assets and shouldn't be sharing them. 

I created a Better Rolls port for spaceships and starwyrms. It isn't necessary, but I think it helps a lot. You can get it here. https://github.com/taekwondorkjosh/betterrollsSnS

Important Information:

I created a new sheet for use with vehicles and spaceships. They track everything to do with them. The only issue is they do not automatically deduct the Handling modifier from the Piloting skill check. Due to my coding inexperience and engine limitations, this is difficult to do. I was unable to get Dynamic Active Effects working, but if I do get it working in the future, I'll be able to revisit this. Anyway, it's built off a duplicate of the NPC sheet so it has a bit of oddity to it, but it works, I think. It doesn't have any way of actually adding a spellcaster level, for example, but that's not really necessary: none of the ships statted up have spell slot progressions like any other casting npc, so updating all of it manually just seems more appropriate.

Psion caster type works effectively, but it is set to round up when multiclassing instead of round down. I couldn't figure out why, but it wouldn't display single-caster correctly. It worked for a while, but then it stopped working for some reason so I had to set it to round up. 

Scientist class is interesting to implement. There's a "battery" slot progression in classes now. Set any spells to "invention" instead of "prepared" and then to "Battery" when built. The Battery slots are set to return to 0 whenever you take a long rest, so you'll have to manually set them to maximum when using charges of your dark matter core. NPCs are a bit easier: for npcs with inventions, set all inventions to "Invention" instead of "Prepared" and then link each items "Item Uses" to a feature called "dark matter batteries." You can then link a "Dark Matter Core" feature's Item Uses entry to the "Dark matter Batteries," but set the uses to -1. This will let you increase the number of batteries and decrease the number of core charges with one click. The downside to this method is you have to then set all of your inventions to cast at the appropriate level, as this doesn't use spell slots and thus can't upcast. 

Creatures with both a tier and challenge rating do not have an easy way to track this. I set the challenge for all creatures with both as appropriate, then put "Tier X" on the "Space Titan" or "Void Colossus" features as needed. For creatures that only have a Tier, I did the same thing, but set the challenge to whatever challenge was appropriate for its XP Value. These should be comfortable workarounds, rather than adding another field to the character sheet that is going to get very limited use. 

Weapons, armor, computers, and the like all have new properties and entries for tracking all relevant data. I found a good way to make weapons that use magazines work is to just link the gun to a magazine Ammunition item that has charges equal to the ammo capacity for that weapon. Adding multiple magazines and having to change magazines in the weapons details is kind of fun for simulating reloading! for Recharge and Timed Recharge weapons, do that however you want. In the future I think it would be interesting to add a new thing to the list of recovery options that is like "Power Source" and then having an option during short or long rests pop up that let you determine if you have access to power, allowing you to recharge those weapons, but as is it'll have to be done manually or recharge weapons can be set to recover on a short rest by default, up to you. 

New movement types were added to track zero g movements, max speeds and mph values. They don't display perfectly but it does store the information. I also changed the display text for the Walk speed to be Land instead. its still called walk in the system files, but just displays slightly differently. I think it looks better that way. 

That's all I can think of about messing with all this. 

Have fun, Josh
