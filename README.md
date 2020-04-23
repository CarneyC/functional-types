
<a name="globalsmd"></a>

[functional-types](#globalsmd)

# functional-types

## Index

### Modules

* ["Arbitraries"](#modules_arbitraries_md)
* ["DateTime"](#modules_datetime_md)
* ["FileType"](#modules_filetype_md)
* ["Folder"](#modules_folder_md)
* ["Label"](#modules_label_md)
* ["String"](#modules_string_md)
* ["TableAnnotation"](#modules_tableannotation_md)
* ["Vertex"](#modules_vertex_md)
* ["index"](#modules_index_md)


<a name="readmemd"></a>

[functional-types](#globalsmd)

# functional-types


# Interfaces


<a name="interfaces_folder_attributesmd"></a>

[functional-types](#globalsmd) › ["Folder"](#modules_folder_md) › [Attributes](#interfaces_folder_attributesmd)

## Interface: Attributes

### Hierarchy

* **Attributes**

### Index

#### Properties

* [folder](#folder)
* [id](#id)
* [name](#name)
* [type](#type)

### Properties

####  folder

• **folder**: *string*

Defined in Folder.ts:29

___

####  id

• **id**: *string*

Defined in Folder.ts:28

___

####  name

• **name**: *string*

Defined in Folder.ts:30

___

####  type

• **type**: *FT.FileType*

Defined in Folder.ts:31


<a name="interfaces_folder_foldermd"></a>

[functional-types](#globalsmd) › ["Folder"](#modules_folder_md) › [Folder](#interfaces_folder_foldermd)

## Interface: Folder

### Hierarchy

* **Folder**

### Index

#### Properties

* [created_at](#created_at)
* [id](#id)
* [name](#name)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *string*

Defined in Folder.ts:23

___

####  id

• **id**: *string*

Defined in Folder.ts:21

___

####  name

• **name**: *string*

Defined in Folder.ts:22

___

####  updated_at

• **updated_at**: *string*

Defined in Folder.ts:24


<a name="interfaces_folder_metadatamd"></a>

[functional-types](#globalsmd) › ["Folder"](#modules_folder_md) › [Metadata](#interfaces_folder_metadatamd)

## Interface: Metadata

### Hierarchy

* **Metadata**

### Index

#### Properties

* [bucket](#bucket)
* [content_type](#content_type)
* [created_at](#created_at)
* [generation](#generation)
* [id](#id)
* [kind](#kind)
* [media_link](#media_link)
* [name](#name)
* [self_link](#self_link)
* [size](#size)
* [updated_at](#updated_at)

### Properties

####  bucket

• **bucket**: *string*

Defined in Folder.ts:40

___

####  content_type

• **content_type**: *string*

Defined in Folder.ts:42

___

####  created_at

• **created_at**: *string*

Defined in Folder.ts:44

___

####  generation

• **generation**: *string*

Defined in Folder.ts:41

___

####  id

• **id**: *string*

Defined in Folder.ts:36

___

####  kind

• **kind**: *string*

Defined in Folder.ts:35

___

####  media_link

• **media_link**: *string*

Defined in Folder.ts:38

___

####  name

• **name**: *string*

Defined in Folder.ts:39

___

####  self_link

• **self_link**: *string*

Defined in Folder.ts:37

___

####  size

• **size**: *string*

Defined in Folder.ts:43

___

####  updated_at

• **updated_at**: *string*

Defined in Folder.ts:45


<a name="interfaces_label_labelmd"></a>

[functional-types](#globalsmd) › ["Label"](#modules_label_md) › [Label](#interfaces_label_labelmd)

## Interface: Label

### Hierarchy

* **Label**

### Index

#### Properties

* [color](#color)
* [id](#id)

### Properties

####  color

• **color**: *string*

Defined in Label.ts:5

___

####  id

• **id**: *string*

Defined in Label.ts:4


<a name="interfaces_tableannotation_tableannotationmd"></a>

[functional-types](#globalsmd) › ["TableAnnotation"](#modules_tableannotation_md) › [TableAnnotation](#interfaces_tableannotation_tableannotationmd)

## Interface: TableAnnotation

### Hierarchy

* **TableAnnotation**

### Index

#### Properties

* [boundingBoxesByPageId](#boundingboxesbypageid)
* [created_at](#created_at)
* [file](#file)
* [id](#id)
* [updated_at](#updated_at)

### Properties

####  boundingBoxesByPageId

• **boundingBoxesByPageId**: *[BoundingBoxByPageId](#boundingboxbypageid)*

Defined in TableAnnotation.ts:11

___

####  created_at

• **created_at**: *string*

Defined in TableAnnotation.ts:12

___

####  file

• **file**: *string*

Defined in TableAnnotation.ts:10

___

####  id

• **id**: *string*

Defined in TableAnnotation.ts:9

___

####  updated_at

• **updated_at**: *string*

Defined in TableAnnotation.ts:13


<a name="interfaces_vertex_boundingboxmd"></a>

[functional-types](#globalsmd) › ["Vertex"](#modules_vertex_md) › [BoundingBox](#interfaces_vertex_boundingboxmd)

## Interface: BoundingBox

### Hierarchy

* **BoundingBox**

  ↳ [LabeledBoundingBox](#interfaces_vertex_labeledboundingboxmd)

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [columns](#columns)
* [rows](#rows)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

Defined in Vertex.ts:29

___

####  columns

• **columns**: *[Line](#line)[]*

Defined in Vertex.ts:31

___

####  rows

• **rows**: *[Line](#line)[]*

Defined in Vertex.ts:30


<a name="interfaces_vertex_labeledboundingboxmd"></a>

[functional-types](#globalsmd) › ["Vertex"](#modules_vertex_md) › [LabeledBoundingBox](#interfaces_vertex_labeledboundingboxmd)

## Interface: LabeledBoundingBox

### Hierarchy

* [BoundingBox](#interfaces_vertex_boundingboxmd)

  ↳ **LabeledBoundingBox**

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [columns](#columns)
* [id](#id)
* [label](#label)
* [rows](#rows)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

*Inherited from [BoundingBox](#interfaces_vertex_boundingboxmd).[boundingPoly](#boundingpoly)*

Defined in Vertex.ts:29

___

####  columns

• **columns**: *[Line](#line)[]*

*Inherited from [BoundingBox](#interfaces_vertex_boundingboxmd).[columns](#columns)*

Defined in Vertex.ts:31

___

####  id

• **id**: *string*

Defined in Vertex.ts:35

___

####  label

• **label**: *string*

Defined in Vertex.ts:36

___

####  rows

• **rows**: *[Line](#line)[]*

*Inherited from [BoundingBox](#interfaces_vertex_boundingboxmd).[rows](#rows)*

Defined in Vertex.ts:30


<a name="interfaces_vertex_vertexmd"></a>

[functional-types](#globalsmd) › ["Vertex"](#modules_vertex_md) › [Vertex](#interfaces_vertex_vertexmd)

## Interface: Vertex

### Hierarchy

* **Vertex**

### Index

#### Properties

* [x](#x)
* [y](#y)

### Properties

####  x

• **x**: *number*

Defined in Vertex.ts:20

___

####  y

• **y**: *number*

Defined in Vertex.ts:21

# Modules


<a name="modules_arbitraries_md"></a>

[functional-types](#globalsmd) › ["Arbitraries"](#modules_arbitraries_md)

## Module: "Arbitraries"

### Index

#### Functions

* [file](#const-file)
* [filesByType](#const-filesbytype)
* [folder](#const-folder)
* [invalidFolderObject](#const-invalidfolderobject)
* [metadata](#const-metadata)
* [nonFolderObject](#const-nonfolderobject)

### Functions

#### `Const` file

▸ **file**(): *Arbitrary‹[File](#file)›*

Defined in Arbitraries.ts:55

**Returns:** *Arbitrary‹[File](#file)›*

___

#### `Const` filesByType

▸ **filesByType**(): *Arbitrary‹[FilesByType](#filesbytype)›*

Defined in Arbitraries.ts:65

**Returns:** *Arbitrary‹[FilesByType](#filesbytype)›*

___

#### `Const` folder

▸ **folder**(): *Arbitrary‹[Folder](#interfaces_folder_foldermd)›*

Defined in Arbitraries.ts:37

**Returns:** *Arbitrary‹[Folder](#interfaces_folder_foldermd)›*

___

#### `Const` invalidFolderObject

▸ **invalidFolderObject**(): *Arbitrary‹Record‹string, any››*

Defined in Arbitraries.ts:5

**Returns:** *Arbitrary‹Record‹string, any››*

___

#### `Const` metadata

▸ **metadata**(): *Arbitrary‹[Metadata](#interfaces_folder_metadatamd)›*

Defined in Arbitraries.ts:40

**Returns:** *Arbitrary‹[Metadata](#interfaces_folder_metadatamd)›*

___

#### `Const` nonFolderObject

▸ **nonFolderObject**(): *Arbitrary‹unknown›*

Defined in Arbitraries.ts:20

**Returns:** *Arbitrary‹unknown›*


<a name="modules_datetime_md"></a>

[functional-types](#globalsmd) › ["DateTime"](#modules_datetime_md)

## Module: "DateTime"

### Index

#### Variables

* [getCurrentUnixTimestamp](#const-getcurrentunixtimestamp)

#### Functions

* [getCurrentDate](#const-getcurrentdate)
* [getUnixTimestamp](#const-getunixtimestamp)

### Variables

#### `Const` getCurrentUnixTimestamp

• **getCurrentUnixTimestamp**: *function* = Date.now

Defined in DateTime.ts:14

```haskell
getCurrentUnixTimestamp :: () -> Int
```

##### Type declaration:

▸ (): *number*

### Functions

#### `Const` getCurrentDate

▸ **getCurrentDate**(): *Date*

Defined in DateTime.ts:16

**Returns:** *Date*

___

#### `Const` getUnixTimestamp

▸ **getUnixTimestamp**(`date`: Date): *number*

Defined in DateTime.ts:6

```haskell
getUnixTimestamp :: Date -> Int
```

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *number*


<a name="modules_filetype_md"></a>

[functional-types](#globalsmd) › ["FileType"](#modules_filetype_md)

## Module: "FileType"

### Index

#### Type aliases

* [ContentType](#contenttype)
* [DocumentContentType](#documentcontenttype)
* [DocumentType](#documenttype)
* [FileType](#filetype)
* [ImageContentType](#imagecontenttype)
* [ImageType](#imagetype)

#### Variables

* [contentTypes](#const-contenttypes)
* [documentTypes](#const-documenttypes)
* [fileContentTypes](#const-filecontenttypes)
* [fileTypes](#const-filetypes)
* [fromContentType](#const-fromcontenttype)
* [fromDocumentContentType](#const-fromdocumentcontenttype)
* [fromImageContentType](#const-fromimagecontenttype)
* [imageContentTypes](#const-imagecontenttypes)
* [imageTypes](#const-imagetypes)
* [toContentType](#const-tocontenttype)
* [toDocumentContentType](#const-todocumentcontenttype)
* [toImageContentType](#const-toimagecontenttype)

#### Functions

* [isContentType](#const-iscontenttype)
* [isDocumentContentType](#const-isdocumentcontenttype)
* [isDocumentType](#const-isdocumenttype)
* [isFileType](#const-isfiletype)
* [isImageContentType](#const-isimagecontenttype)
* [isImageType](#const-isimagetype)

### Type aliases

####  ContentType

Ƭ **ContentType**: *[DocumentContentType](#documentcontenttype) | [ImageContentType](#imagecontenttype)*

Defined in FileType.ts:26

___

####  DocumentContentType

Ƭ **DocumentContentType**: *"application/pdf" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/json"*

Defined in FileType.ts:19

___

####  DocumentType

Ƭ **DocumentType**: *"pdf" | "excel" | "json"*

Defined in FileType.ts:13

___

####  FileType

Ƭ **FileType**: *[DocumentType](#documenttype) | [ImageType](#imagetype)*

Defined in FileType.ts:17

___

####  ImageContentType

Ƭ **ImageContentType**: *"image/png" | "image/jpeg"*

Defined in FileType.ts:24

___

####  ImageType

Ƭ **ImageType**: *"png" | "jpeg"*

Defined in FileType.ts:15

### Variables

#### `Const` contentTypes

• **contentTypes**: *[ContentType](#contenttype)[]* = values(FileTypeToContentType)

Defined in FileType.ts:151

```haskell
contentTypes: [ContentType]
```

___

#### `Const` documentTypes

• **documentTypes**: *[DocumentType](#documenttype)[]* = keys(DocumentTypeToContentType)

Defined in FileType.ts:112

```haskell
documentTypes: [DocumentType]
```

___

#### `Const` fileContentTypes

• **fileContentTypes**: *[DocumentContentType](#documentcontenttype)[]* = values(
  DocumentTypeToContentType
)

Defined in FileType.ts:133

```haskell
contentTypes: [DocumentContentType]
```

___

#### `Const` fileTypes

• **fileTypes**: *[FileType](#filetype)[]* = keys(FileTypeToContentType)

Defined in FileType.ts:126

```haskell
fileTypes: [FileType]
```

___

#### `Const` fromContentType

• **fromContentType**: *function* = prop(
  __,
  ContentTypeToFileType
)

Defined in FileType.ts:252

```haskell
fromContentType :: ContentType -> FileType
```

##### Type declaration:

▸ (`contentType`: [ContentType](#contenttype)): *[FileType](#filetype)*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | [ContentType](#contenttype) |

___

#### `Const` fromDocumentContentType

• **fromDocumentContentType**: *function* = prop(__, ContentTypeToDocumentType)

Defined in FileType.ts:234

```haskell
fromDocumentContentType :: DocumentContentType -> DocumentType
```

##### Type declaration:

▸ (`contentType`: [DocumentContentType](#documentcontenttype)): *[DocumentType](#documenttype)*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | [DocumentContentType](#documentcontenttype) |

___

#### `Const` fromImageContentType

• **fromImageContentType**: *function* = prop(__, ContentTypeToImageType)

Defined in FileType.ts:243

```haskell
fromImageContentType :: DocumentContentType -> DocumentType
```

##### Type declaration:

▸ (`contentType`: [ImageContentType](#imagecontenttype)): *[ImageType](#imagetype)*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | [ImageContentType](#imagecontenttype) |

___

#### `Const` imageContentTypes

• **imageContentTypes**: *[ImageContentType](#imagecontenttype)[]* = values(
  ImageTypeToContentType
)

Defined in FileType.ts:142

```haskell
imageContentTypes: [DocumentContentType]
```

___

#### `Const` imageTypes

• **imageTypes**: *[ImageType](#imagetype)[]* = keys(ImageTypeToContentType)

Defined in FileType.ts:119

```haskell
imageTypes: [DocumentType]
```

___

#### `Const` toContentType

• **toContentType**: *function* = prop(
  __,
  FileTypeToContentType
)

Defined in FileType.ts:224

```haskell
toContentType :: FileType -> ContentType
```

##### Type declaration:

▸ (`fileType`: [FileType](#filetype)): *[ContentType](#contenttype)*

**Parameters:**

Name | Type |
------ | ------ |
`fileType` | [FileType](#filetype) |

___

#### `Const` toDocumentContentType

• **toDocumentContentType**: *function* = prop(__, DocumentTypeToContentType)

Defined in FileType.ts:206

```haskell
toDocumentContentType :: DocumentType -> DocumentContentType
```

##### Type declaration:

▸ (`fileType`: [DocumentType](#documenttype)): *[DocumentContentType](#documentcontenttype)*

**Parameters:**

Name | Type |
------ | ------ |
`fileType` | [DocumentType](#documenttype) |

___

#### `Const` toImageContentType

• **toImageContentType**: *function* = prop(__, ImageTypeToContentType)

Defined in FileType.ts:215

```haskell
toImageContentType :: DocumentType -> ImageContentType
```

##### Type declaration:

▸ (`imageType`: [ImageType](#imagetype)): *[ImageContentType](#imagecontenttype)*

**Parameters:**

Name | Type |
------ | ------ |
`imageType` | [ImageType](#imagetype) |

### Functions

#### `Const` isContentType

▸ **isContentType**(`a`: unknown): *a is ContentType*

Defined in FileType.ts:198

```haskell
isContentType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ContentType*

___

#### `Const` isDocumentContentType

▸ **isDocumentContentType**(`a`: unknown): *a is DocumentContentType*

Defined in FileType.ts:182

```haskell
isDocumentContentType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is DocumentContentType*

___

#### `Const` isDocumentType

▸ **isDocumentType**(`a`: unknown): *a is DocumentType*

Defined in FileType.ts:158

```haskell
isDocumentType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is DocumentType*

___

#### `Const` isFileType

▸ **isFileType**(`a`: unknown): *a is ImageType*

Defined in FileType.ts:174

```haskell
isFileType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ImageType*

___

#### `Const` isImageContentType

▸ **isImageContentType**(`a`: unknown): *a is ImageContentType*

Defined in FileType.ts:190

```haskell
isDocumentContentType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ImageContentType*

___

#### `Const` isImageType

▸ **isImageType**(`a`: unknown): *a is ImageType*

Defined in FileType.ts:166

```haskell
isImageType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ImageType*


<a name="modules_folder_md"></a>

[functional-types](#globalsmd) › ["Folder"](#modules_folder_md)

## Module: "Folder"

### Index

#### Interfaces

* [Attributes](#interfaces_folder_attributesmd)
* [Folder](#interfaces_folder_foldermd)
* [Metadata](#interfaces_folder_metadatamd)

#### Type aliases

* [File](#file)
* [FilesByType](#filesbytype)

#### Variables

* [getAttributesFromName](#const-getattributesfromname)

#### Functions

* [fromMetadata](#const-frommetadata)
* [isFile](#const-isfile)
* [isFileArray](#const-isfilearray)
* [isFilesByType](#const-isfilesbytype)
* [isFolder](#const-isfolder)
* [isMetadata](#const-ismetadata)
* [make](#const-make)

### Type aliases

####  File

Ƭ **File**: *[Attributes](#interfaces_folder_attributesmd) & object*

Defined in Folder.ts:48

___

####  FilesByType

Ƭ **FilesByType**: *Record‹FT.DocumentType, [File](#file)[]›*

Defined in Folder.ts:50

### Variables

#### `Const` getAttributesFromName

• **getAttributesFromName**: *function* = pipe(
  split('/'),
  E.fromPredicate(
    (segments: string[]) => segments.length >= 2,
    () => new Error('Invalid file name format.')
  ),
  E.map(([folder, ...names]: string[]) => {
    const name = names.join('/');
    return {
      id: join('/')([folder, name]),
      folder,
      name,
    };
  })
)

Defined in Folder.ts:157

```haskell
getAttributesFromName :: String -> Either Attributes Error
```

##### Type declaration:

▸ (`name`: string): *E.Either‹Error, Omit‹[Attributes](#interfaces_folder_attributesmd), "type"››*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

### Functions

#### `Const` fromMetadata

▸ **fromMetadata**(`metadata`: [Metadata](#interfaces_folder_metadatamd)): *Left‹Error› | Right‹object›*

Defined in Folder.ts:180

```haskell
fromMetadata :: Metadata -> Either
```

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [Metadata](#interfaces_folder_metadatamd) |

**Returns:** *Left‹Error› | Right‹object›*

___

#### `Const` isFile

▸ **isFile**(`a`: unknown): *a is File*

Defined in Folder.ts:130

```haskell
isFile :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is File*

___

#### `Const` isFileArray

▸ **isFileArray**(`a`: unknown): *a is File[]*

Defined in Folder.ts:138

```haskell
isFileArray :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is File[]*

___

#### `Const` isFilesByType

▸ **isFilesByType**(`a`: unknown): *a is FilesByType*

Defined in Folder.ts:146

```haskell
isFilesByType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is FilesByType*

___

#### `Const` isFolder

▸ **isFolder**(`a`: unknown): *a is Folder*

Defined in Folder.ts:57

```haskell
isFolder -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Folder*

___

#### `Const` isMetadata

▸ **isMetadata**(`a`: unknown): *a is Metadata*

Defined in Folder.ts:107

```haskell
isMetadata :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Metadata*

___

#### `Const` make

▸ **make**(`name`: string): *(Anonymous function)*

Defined in Folder.ts:71

```haskell
make :: String -> Folder
```

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *(Anonymous function)*


<a name="modules_index_md"></a>

[functional-types](#globalsmd) › ["index"](#modules_index_md)

## Module: "index"

### Index

#### References

* [F](#f)
* [FT](#ft)
* [L](#l)
* [T](#t)
* [V](#v)

### References

####  F

• **F**:

___

####  FT

• **FT**:

___

####  L

• **L**:

___

####  T

• **T**:

___

####  V

• **V**:


<a name="modules_label_md"></a>

[functional-types](#globalsmd) › ["Label"](#modules_label_md)

## Module: "Label"

### Index

#### Interfaces

* [Label](#interfaces_label_labelmd)

#### Functions

* [isLabel](#const-islabel)

### Functions

#### `Const` isLabel

▸ **isLabel**(`a`: unknown): *a is Label*

Defined in Label.ts:13

```haskell
isLabel :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Label*


<a name="modules_string_md"></a>

[functional-types](#globalsmd) › ["String"](#modules_string_md)

## Module: "String"

### Index

#### Variables

* [getRandomId](#const-getrandomid)

### Variables

#### `Const` getRandomId

• **getRandomId**: *IO‹string›* = uuid

Defined in String.ts:9

```haskell
getRandomId: IO String
```


<a name="modules_tableannotation_md"></a>

[functional-types](#globalsmd) › ["TableAnnotation"](#modules_tableannotation_md)

## Module: "TableAnnotation"

### Index

#### Interfaces

* [TableAnnotation](#interfaces_tableannotation_tableannotationmd)

#### Type aliases

* [BoundingBoxByPageId](#boundingboxbypageid)
* [TableAnnotationBase](#tableannotationbase)

#### Functions

* [isBoundingBoxByPageId](#const-isboundingboxbypageid)
* [isTableAnnotation](#const-istableannotation)
* [isTableAnnotationBase](#const-istableannotationbase)
* [make](#const-make)

### Type aliases

####  BoundingBoxByPageId

Ƭ **BoundingBoxByPageId**: *Record‹string, [LabeledBoundingBox](#interfaces_vertex_labeledboundingboxmd)[]›*

Defined in TableAnnotation.ts:6

___

####  TableAnnotationBase

Ƭ **TableAnnotationBase**: *Pick‹[TableAnnotation](#interfaces_tableannotation_tableannotationmd), "file" | "boundingBoxesByPageId"›*

Defined in TableAnnotation.ts:16

### Functions

#### `Const` isBoundingBoxByPageId

▸ **isBoundingBoxByPageId**(`a`: unknown): *a is BoundingBoxByPageId*

Defined in TableAnnotation.ts:26

```haskell
isBoundingBoxByPageId :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is BoundingBoxByPageId*

___

#### `Const` isTableAnnotation

▸ **isTableAnnotation**(`a`: unknown): *a is TableAnnotation*

Defined in TableAnnotation.ts:48

```haskell
isTableAnnotation :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is TableAnnotation*

___

#### `Const` isTableAnnotationBase

▸ **isTableAnnotationBase**(`a`: unknown): *a is TableAnnotationBase*

Defined in TableAnnotation.ts:36

```haskell
isTableAnnotationBase :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is TableAnnotationBase*

___

#### `Const` make

▸ **make**(`__namedParameters`: object): *(Anonymous function)*

Defined in TableAnnotation.ts:63

```haskell
make :: (String, BoundingBoxByPageId) -> IO TableAnnotation
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`boundingBoxesByPageId` | object |
`file` | string |

**Returns:** *(Anonymous function)*


<a name="modules_vertex_md"></a>

[functional-types](#globalsmd) › ["Vertex"](#modules_vertex_md)

## Module: "Vertex"

### Index

#### Interfaces

* [BoundingBox](#interfaces_vertex_boundingboxmd)
* [LabeledBoundingBox](#interfaces_vertex_labeledboundingboxmd)
* [Vertex](#interfaces_vertex_vertexmd)

#### Type aliases

* [Line](#line)
* [Poly](#poly)

#### Variables

* [getX](#const-getx)
* [getY](#const-gety)

#### Functions

* [append](#const-append)
* [isBoundingBox](#const-isboundingbox)
* [isLabeledBoundingBox](#const-islabeledboundingbox)
* [isLine](#const-isline)
* [isPoly](#const-ispoly)
* [isVertex](#const-isvertex)
* [makeBoundingBox](#const-makeboundingbox)
* [makeLabeledBoundingBox](#const-makelabeledboundingbox)
* [makeLine](#const-makeline)
* [makePoly](#const-makepoly)
* [makeVertex](#const-makevertex)

### Type aliases

####  Line

Ƭ **Line**: *[[Vertex](#interfaces_vertex_vertexmd), [Vertex](#interfaces_vertex_vertexmd)]*

Defined in Vertex.ts:24

___

####  Poly

Ƭ **Poly**: *[[Vertex](#interfaces_vertex_vertexmd), [Vertex](#interfaces_vertex_vertexmd), [Vertex](#interfaces_vertex_vertexmd), [Vertex](#interfaces_vertex_vertexmd)]*

Defined in Vertex.ts:26

### Variables

#### `Const` getX

• **getX**: *function* = pipe(head, prop<'x', number>('x'))

Defined in Vertex.ts:229

```haskell
getX :: Line -> Int
```

##### Type declaration:

▸ (`line`: [Line](#line)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Line](#line) |

___

#### `Const` getY

• **getY**: *function* = pipe(head, prop<'y', number>('y'))

Defined in Vertex.ts:222

```haskell
getY :: Line -> Int
```

##### Type declaration:

▸ (`line`: [Line](#line)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Line](#line) |

### Functions

#### `Const` append

▸ **append**<**A**>(`boundingBox`: A): *(Anonymous function)*

Defined in Vertex.ts:267

```haskell
append :: ([Int], [Int]) -> BoundingBox
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`boundingBox` | A |

**Returns:** *(Anonymous function)*

___

#### `Const` isBoundingBox

▸ **isBoundingBox**(`a`: unknown): *a is BoundingBox*

Defined in Vertex.ts:81

```haskell
isBoundingBox :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is BoundingBox*

___

#### `Const` isLabeledBoundingBox

▸ **isLabeledBoundingBox**(`a`: unknown): *a is LabeledBoundingBox*

Defined in Vertex.ts:236

```haskell
isLabeledBoundingBox :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is LabeledBoundingBox*

___

#### `Const` isLine

▸ **isLine**(`a`: unknown): *a is Line*

Defined in Vertex.ts:57

```haskell
isLine :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Line*

___

#### `Const` isPoly

▸ **isPoly**(`a`: unknown): *a is Poly*

Defined in Vertex.ts:65

```haskell
isPoly :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Poly*

___

#### `Const` isVertex

▸ **isVertex**(`a`: unknown): *a is Vertex*

Defined in Vertex.ts:49

```haskell
isVertex :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Vertex*

___

#### `Const` makeBoundingBox

▸ **makeBoundingBox**(`boundingPoly`: [Poly](#poly), `ys`: number[], `xs`: number[]): *[BoundingBox](#interfaces_vertex_boundingboxmd)*

Defined in Vertex.ts:203

```haskell
makeBoundingBox :: (Poly, [Int], [Int]) -> BoundingBox
```

**Parameters:**

Name | Type |
------ | ------ |
`boundingPoly` | [Poly](#poly) |
`ys` | number[] |
`xs` | number[] |

**Returns:** *[BoundingBox](#interfaces_vertex_boundingboxmd)*

___

#### `Const` makeLabeledBoundingBox

▸ **makeLabeledBoundingBox**(`id`: string, `label`: string, `boundingPoly`: [Poly](#poly), `ys`: number[], `xs`: number[]): *[LabeledBoundingBox](#interfaces_vertex_labeledboundingboxmd)*

Defined in Vertex.ts:244

```haskell
makeLabeledBoundingBox :: (String, String, Poly, [Int], [Int]) -> LabeledBoundingBox
```

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`label` | string |
`boundingPoly` | [Poly](#poly) |
`ys` | number[] |
`xs` | number[] |

**Returns:** *[LabeledBoundingBox](#interfaces_vertex_labeledboundingboxmd)*

___

#### `Const` makeLine

▸ **makeLine**(`x0`: number, `y0`: number, `x1`: number, `y1`: number): *[Line](#line)*

Defined in Vertex.ts:100

```haskell
makeVertex :: (Int, Int, Int, Int) -> Line
```

**Parameters:**

Name | Type |
------ | ------ |
`x0` | number |
`y0` | number |
`x1` | number |
`y1` | number |

**Returns:** *[Line](#line)*

___

#### `Const` makePoly

▸ **makePoly**(...`coords`: [number, number, number, number]): *[Poly](#poly)*

Defined in Vertex.ts:165

```haskell
makePoly :: (Int, Int, Int, Int) -> Poly
```

**Parameters:**

Name | Type |
------ | ------ |
`...coords` | [number, number, number, number] |

**Returns:** *[Poly](#poly)*

___

#### `Const` makeVertex

▸ **makeVertex**(`x`: number, `y`: number): *[Vertex](#interfaces_vertex_vertexmd)*

Defined in Vertex.ts:93

```haskell
makeVertex :: (Int, Int) -> Vertex
```

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *[Vertex](#interfaces_vertex_vertexmd)*
