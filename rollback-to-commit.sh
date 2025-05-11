#!/bin/bash

# Script to roll back the repository to a specific commit
# This will discard all changes since that commit

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Target commit
TARGET_COMMIT="5c75fb9d869398cdbf6a1fe5da6a5dd726cc38fb"

# Check if there are uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo -e "${YELLOW}You have uncommitted changes.${NC}"
    echo -e "${YELLOW}These changes will be lost if you proceed.${NC}"
    read -p "Do you want to continue? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${RED}Rollback aborted.${NC}"
        exit 1
    fi
fi

# Create a backup branch of the current state
BACKUP_BRANCH="backup-$(date +%Y%m%d%H%M%S)"
echo -e "${YELLOW}Creating backup branch: ${BACKUP_BRANCH}${NC}"
git branch $BACKUP_BRANCH

# Reset to the target commit
echo -e "${YELLOW}Rolling back to commit: ${TARGET_COMMIT}${NC}"
git reset --hard $TARGET_COMMIT

echo -e "${GREEN}Successfully rolled back to commit: ${TARGET_COMMIT}${NC}"
echo -e "${YELLOW}A backup of your previous state was saved in branch: ${BACKUP_BRANCH}${NC}"
echo -e "${YELLOW}To restore your previous state, run: git checkout ${BACKUP_BRANCH}${NC}"
