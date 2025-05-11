# Rolling Back to a Previous Commit

There are two ways to roll back your repository to commit `5c75fb9d869398cdbf6a1fe5da6a5dd726cc38fb`:

## Option 1: Using the Script (Recommended)

I've created a script that will:
1. Create a backup branch of your current state
2. Roll back to the target commit

```bash
./rollback-to-commit.sh
```

This is the safest option as it preserves your current state in a backup branch.

## Option 2: Manual Commands

If you prefer to run the commands manually:

```bash
# Create a backup branch (optional but recommended)
git branch backup-before-rollback

# Hard reset to the target commit
git reset --hard 5c75fb9d869398cdbf6a1fe5da6a5dd726cc38fb
```

## After Rolling Back

After rolling back, your working directory will match the state of the repository at commit `5c75fb9d869398cdbf6a1fe5da6a5dd726cc38fb`.

If you want to push this rollback to your remote repository:

```bash
git push --force origin main
```

**Warning:** Force pushing will overwrite the remote repository history. Only do this if you're sure it won't affect other collaborators.

## Recovering Your Previous State

If you used the script or created a backup branch, you can recover your previous state with:

```bash
git checkout backup-before-rollback
```

or

```bash
git checkout backup-[timestamp]
```

where `[timestamp]` is the timestamp added by the script.
