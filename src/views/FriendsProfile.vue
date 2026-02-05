<template>
  <div class="page">
    <div class="profile-card">

      <!-- INFO: avatar left, player details right -->
      <div class="info">

        <!-- Avatar 160x160 with online status -->
        <cc-avatar
          src="/images/avatar-anishgiri.png"
          :size="160"
          :status="{ isOnline: true }"
          username="AnishGiri"
          :retina-support="false"
          :is-lazy-loading="false"
        />

        <!-- Player Info: header on top, meta pushed to bottom -->
        <div class="player-info">

          <!-- Header: username-block left, buttons right -->
          <div class="header">

            <!-- Username block: identity + bio stacked -->
            <div class="username-block">

              <!-- Username + Name: two rows -->
              <div class="username-and-name">
                <!-- Row 1: GM badge, username, flag, flair -->
                <div class="username-row">
                  <span class="gm-badge">GM</span>
                  <span class="username-text">AnishGiri</span>
                  <img
                    src="/images/flag-and-flair.svg"
                    alt="United States flag and premium flair"
                    class="flag-flair"
                  />
                </div>

                <!-- Row 2: name + location -->
                <div class="name-location">
                  <span class="cc-text-large name-text">Anish Giri</span>
                  <div class="location">
                    <img src="/images/local-pin.svg" alt="Location" class="pin-icon" />
                    <span class="cc-text-large location-text">The Hague</span>
                  </div>
                </div>
              </div>

              <!-- Bio -->
              <p class="cc-paragraph-medium bio">
                "Checkmate: where strategy meets skill."
              </p>
            </div>

            <!-- Buttons -->
            <div class="buttons">
              <cc-button
                variant="secondary"
                size="medium"
                :icon="{ name: 'board-badge-plus', variant: 'glyph' }"
                label="Challenge"
              />
              <cc-button
                variant="primary"
                size="medium"
                :icon="{ name: 'user-badge-plus', variant: 'glyph' }"
                label="Add Friend"
              />
              <cc-icon-button
                :icon="{ name: 'mark-ellipsis-horizontal', variant: 'glyph' }"
                variant="secondary"
                size="medium"
                tooltip="More options"
              />
            </div>
          </div>

          <!-- Meta stats -->
          <div class="meta">
            <div class="meta-item">
              <span class="cc-text-medium-bold meta-value">May 4, 2015</span>
              <span class="cc-text-medium meta-label">Joined</span>
            </div>
            <div class="meta-item">
              <span class="cc-text-medium-bold meta-value">8,497</span>
              <span class="cc-text-medium meta-label">Followers</span>
            </div>
            <div class="meta-item">
              <span class="cc-text-medium-bold meta-value">9,742,715</span>
              <span class="cc-text-medium meta-label">Views</span>
            </div>
            <div class="meta-item">
              <span class="cc-text-medium-bold meta-online">Online Now</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="tabs">
        <cc-tab-group variant="inline">
          <cc-tab-item
            v-for="tab in tabList"
            :key="tab.id"
            :id="tab.id"
            :label="tab.label"
            :is-active="activeTab === tab.id"
            @click="activeTab = tab.id"
          />
        </cc-tab-group>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  CcAvatar,
  CcButton,
  CcIconButton,
  CcTabGroup,
  CcTabItem,
} from '@chesscom/design-system'

const activeTab = ref('friends')

const tabList = [
  { id: 'overview', label: 'Overview' },
  { id: 'games', label: 'Games' },
  { id: 'stats', label: 'Stats' },
  { id: 'friends', label: 'Friends' },
  { id: 'awards', label: 'Awards' },
  { id: 'clubs', label: 'Clubs' },
]
</script>

<style scoped>
/* ===== PAGE ===== */
.page {
  max-width: 1132px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* ===== PROFILE CARD ===== */
.profile-card {
  background: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-medium, 5px);
  display: flex;
  flex-direction: column;
}

/* ===== INFO ROW ===== */
.info {
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Avatar: never shrink, hold 160x160 */
.info :deep(.cc-avatar),
.info :deep(cc-avatar) {
  flex-shrink: 0;
  min-width: 160px;
  min-height: 160px;
}

/* ===== PLAYER INFO ===== */
.player-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 44px;
}

/* ===== HEADER (username-block left, buttons right) ===== */
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

/* ===== USERNAME BLOCK (identity + bio) ===== */
.username-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* ===== USERNAME + NAME ===== */
.username-and-name {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Username row: badge + name + flag + flair */
.username-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.gm-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #7C2929;
  color: #fff;
  padding: 2px 3px;
  border-radius: 3px;
  font-family: var(--font-family-heading, 'Chess Sans', sans-serif);
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 1.18;
  text-align: center;
}

.username-text {
  font-family: var(--font-family-heading, 'Chess Sans', sans-serif);
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 1.09;
  color: #fff;
}

.flag-flair {
  width: 52px;
  height: 24px;
  flex-shrink: 0;
}

.pin-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

/* Name + Location row */
.name-location {
  display: flex;
  align-items: center;
  gap: 16px;
}

.name-text {
  color: rgba(255, 255, 255, 0.72);
}

/* Location sub-group: pin + text */
.location {
  display: flex;
  align-items: center;
  gap: 4px;
}

.location-text {
  color: rgba(255, 255, 255, 0.72);
}

/* Bio */
.bio {
  color: rgba(255, 255, 255, 0.5);
}

/* ===== BUTTONS ===== */
.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

/* ===== META STATS ===== */
.meta {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}

.meta-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  height: 32px;
}

.meta-value {
  color: rgba(255, 255, 255, 0.85);
}

.meta-label {
  color: rgba(255, 255, 255, 0.5);
}

.meta-online {
  color: var(--color-green-300, #81b64c);
}

/* ===== TABS ===== */
.tabs {
  padding: 0 24px;
}
</style>
