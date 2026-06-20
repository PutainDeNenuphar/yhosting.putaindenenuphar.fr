<!--
yhosting.putaindenenuphar.fr - Copyright (C) 2026 Projet ℕénuphar

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->
<template>
    <a :href="url" target="_blank" rel="noopener noreferrer" class="relative flex flex-col gap-4 rounded-sm border border-border bg-card p-5 transition-all duration-200 hover:border-[#00c8ff]/40 hover:bg-[#10102a] hover:shadow-[0_0_24px_0_rgba(0,200,255,0.08)]">
       <div class="flex flex-wrap gap-1 absolute right-4 top-4 justify-end max-w-[60%]">
          <span v-for="tag of tags" :key="tag" class="font-mono text-[10px] font-semibold tracking-widest uppercase text-[#00c8ff]/60 border border-[#00c8ff]/20 rounded-sm px-1.5 py-0.5">
              {{ tag }}
          </span>
       </div>

        <div class="flex h-14 w-14 items-center justify-center rounded-sm bg-[#13132a] overflow-hidden border border-border">
            <img :src=`"/images/services/${image}"` :alt="name" class="h-10 w-10 object-contain" />
        </div>

        <div class="flex flex-col gap-1 flex-1">
            <h3 class="font-mono text-base font-semibold text-foreground group-hover:text-[#00c8ff] transition-colors">{{ name }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ description }}</p>
        </div>

        <div class="flex items-center justify-between mt-auto pt-3 border-t border-border">
            <div class="flex items-center gap-3">
                <span v-for="author of authors" :key="author" class="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <!-- Icone Users -->
                    {{ author }}
                </span>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
    import type { Service } from "~/enums/Service"
    defineProps<Service>();
</script>