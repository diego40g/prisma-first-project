# Migration `20201201031850`

This migration has been generated by diego40g at 11/30/2020, 10:18:50 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "director" TEXT NOT NULL,
    "movieName" TEXT NOT NULL,
    "yearRealeased" INTEGER NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201201031850
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Movie {
+  id              Int @default(autoincrement()) @id
+  director        String
+  movieName       String
+  yearRealeased   Int
+}
```


