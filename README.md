
<a name="readmemd"></a>

[functional-types](#globalsmd)

# functional-types



<a name="globalsmd"></a>

[functional-types](#globalsmd)

# functional-types

## Index

### Modules

* ["DateTime"](#modules_datetime_md)
* ["DocumentAnnotation"](#modules_documentannotation_md)
* ["Excel"](#modules_excel_md)
* ["FileType"](#modules_filetype_md)
* ["Folder/Arbitraries"](#modules_folder_arbitraries_md)
* ["Folder/index"](#modules_folder_index_md)
* ["Json"](#modules_json_md)
* ["Label"](#modules_label_md)
* ["Schema/Arbitraries"](#modules_schema_arbitraries_md)
* ["Schema/index"](#modules_schema_index_md)
* ["String"](#modules_string_md)
* ["TableAnnotation"](#modules_tableannotation_md)
* ["TextAnnotation"](#modules_textannotation_md)
* ["Vertex/Arbitraries"](#modules_vertex_arbitraries_md)
* ["Vertex/index"](#modules_vertex_index_md)
* ["Vision"](#modules_vision_md)
* ["fp-ts/ReaderIO"](#modules_fp_ts_readerio_md)
* ["index"](#modules_index_md)

# Interfaces


<a name="interfaces_documentannotation_branchmd"></a>

[functional-types](#globalsmd) › ["DocumentAnnotation"](#modules_documentannotation_md) › [Branch](#interfaces_documentannotation_branchmd)

## Interface: Branch

### Hierarchy

* [Node](#interfaces_documentannotation_nodemd)

  ↳ **Branch**

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [children](#children)
* [id](#id)
* [label](#label)
* [parent](#optional-parent)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[boundingPoly](#boundingpoly)*

Defined in src/DocumentAnnotation.ts:70

___

####  children

• **children**: *[Child](#child)[]*

Defined in src/DocumentAnnotation.ts:100

___

####  id

• **id**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[id](#id)*

Defined in src/DocumentAnnotation.ts:68

___

####  label

• **label**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[label](#label)*

Defined in src/DocumentAnnotation.ts:69

___

#### `Optional` parent

• **parent**? : *[Branch](#interfaces_documentannotation_branchmd)*

Defined in src/DocumentAnnotation.ts:99


<a name="interfaces_documentannotation_cellmd"></a>

[functional-types](#globalsmd) › ["DocumentAnnotation"](#modules_documentannotation_md) › [Cell](#interfaces_documentannotation_cellmd)

## Interface: Cell

### Hierarchy

* [Node](#interfaces_documentannotation_nodemd)

  ↳ **Cell**

  ↳ [TableCell](#interfaces_documentannotation_tablecellmd)

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [id](#id)
* [label](#label)
* [text](#text)
* [words](#words)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[boundingPoly](#boundingpoly)*

Defined in src/DocumentAnnotation.ts:70

___

####  id

• **id**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[id](#id)*

Defined in src/DocumentAnnotation.ts:68

___

####  label

• **label**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[label](#label)*

Defined in src/DocumentAnnotation.ts:69

___

####  text

• **text**: *string*

Defined in src/DocumentAnnotation.ts:75

___

####  words

• **words**: *[Word](#interfaces_textannotation_wordmd)[]*

Defined in src/DocumentAnnotation.ts:74


<a name="interfaces_documentannotation_documentannotationmd"></a>

[functional-types](#globalsmd) › ["DocumentAnnotation"](#modules_documentannotation_md) › [DocumentAnnotation](#interfaces_documentannotation_documentannotationmd)

## Interface: DocumentAnnotation

### Hierarchy

* **DocumentAnnotation**

### Index

#### Properties

* [created_at](#created_at)
* [file](#file)
* [id](#id)
* [treeByPage](#treebypage)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *string*

Defined in src/DocumentAnnotation.ts:113

___

####  file

• **file**: *string*

Defined in src/DocumentAnnotation.ts:111

___

####  id

• **id**: *string*

Defined in src/DocumentAnnotation.ts:110

___

####  treeByPage

• **treeByPage**: *[TreeByPage](#treebypage)*

Defined in src/DocumentAnnotation.ts:112

___

####  updated_at

• **updated_at**: *string*

Defined in src/DocumentAnnotation.ts:114


<a name="interfaces_documentannotation_nodemd"></a>

[functional-types](#globalsmd) › ["DocumentAnnotation"](#modules_documentannotation_md) › [Node](#interfaces_documentannotation_nodemd)

## Interface: Node

### Hierarchy

* **Node**

  ↳ [Cell](#interfaces_documentannotation_cellmd)

  ↳ [Table](#interfaces_documentannotation_tablemd)

  ↳ [Branch](#interfaces_documentannotation_branchmd)

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [id](#id)
* [label](#label)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

Defined in src/DocumentAnnotation.ts:70

___

####  id

• **id**: *string*

Defined in src/DocumentAnnotation.ts:68

___

####  label

• **label**: *string*

Defined in src/DocumentAnnotation.ts:69


<a name="interfaces_documentannotation_tablemd"></a>

[functional-types](#globalsmd) › ["DocumentAnnotation"](#modules_documentannotation_md) › [Table](#interfaces_documentannotation_tablemd)

## Interface: Table

### Hierarchy

* [Node](#interfaces_documentannotation_nodemd)

  ↳ **Table**

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [cellById](#cellbyid)
* [columnHeaders](#columnheaders)
* [id](#id)
* [intersectHeader](#intersectheader)
* [label](#label)
* [mergedColumnHeader](#mergedcolumnheader)
* [mergedRowHeader](#mergedrowheader)
* [rowHeaders](#rowheaders)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[boundingPoly](#boundingpoly)*

Defined in src/DocumentAnnotation.ts:70

___

####  cellById

• **cellById**: *[TableCellById](#tablecellbyid)*

Defined in src/DocumentAnnotation.ts:91

___

####  columnHeaders

• **columnHeaders**: *[Cell](#interfaces_documentannotation_cellmd)[]*

Defined in src/DocumentAnnotation.ts:87

___

####  id

• **id**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[id](#id)*

Defined in src/DocumentAnnotation.ts:68

___

####  intersectHeader

• **intersectHeader**: *[Cell](#interfaces_documentannotation_cellmd)*

Defined in src/DocumentAnnotation.ts:88

___

####  label

• **label**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[label](#label)*

Defined in src/DocumentAnnotation.ts:69

___

####  mergedColumnHeader

• **mergedColumnHeader**: *[Cell](#interfaces_documentannotation_cellmd)*

Defined in src/DocumentAnnotation.ts:90

___

####  mergedRowHeader

• **mergedRowHeader**: *[Cell](#interfaces_documentannotation_cellmd)*

Defined in src/DocumentAnnotation.ts:89

___

####  rowHeaders

• **rowHeaders**: *[Cell](#interfaces_documentannotation_cellmd)[]*

Defined in src/DocumentAnnotation.ts:86


<a name="interfaces_documentannotation_tablecellmd"></a>

[functional-types](#globalsmd) › ["DocumentAnnotation"](#modules_documentannotation_md) › [TableCell](#interfaces_documentannotation_tablecellmd)

## Interface: TableCell

### Hierarchy

  ↳ [Cell](#interfaces_documentannotation_cellmd)

  ↳ **TableCell**

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [columnHeader](#columnheader)
* [id](#id)
* [label](#label)
* [rowHeader](#rowheader)
* [text](#text)
* [words](#words)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[boundingPoly](#boundingpoly)*

Defined in src/DocumentAnnotation.ts:70

___

####  columnHeader

• **columnHeader**: *[Cell](#interfaces_documentannotation_cellmd)*

Defined in src/DocumentAnnotation.ts:80

___

####  id

• **id**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[id](#id)*

Defined in src/DocumentAnnotation.ts:68

___

####  label

• **label**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[label](#label)*

Defined in src/DocumentAnnotation.ts:69

___

####  rowHeader

• **rowHeader**: *[Cell](#interfaces_documentannotation_cellmd)*

Defined in src/DocumentAnnotation.ts:79

___

####  text

• **text**: *string*

*Inherited from [Cell](#interfaces_documentannotation_cellmd).[text](#text)*

Defined in src/DocumentAnnotation.ts:75

___

####  words

• **words**: *[Word](#interfaces_textannotation_wordmd)[]*

*Inherited from [Cell](#interfaces_documentannotation_cellmd).[words](#words)*

Defined in src/DocumentAnnotation.ts:74


<a name="interfaces_folder_index_attributesmd"></a>

[functional-types](#globalsmd) › ["Folder/index"](#modules_folder_index_md) › [Attributes](#interfaces_folder_index_attributesmd)

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

Defined in src/Folder/index.ts:29

___

####  id

• **id**: *string*

Defined in src/Folder/index.ts:28

___

####  name

• **name**: *string*

Defined in src/Folder/index.ts:30

___

####  type

• **type**: *FT.FileType*

Defined in src/Folder/index.ts:31


<a name="interfaces_folder_index_foldermd"></a>

[functional-types](#globalsmd) › ["Folder/index"](#modules_folder_index_md) › [Folder](#interfaces_folder_index_foldermd)

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

Defined in src/Folder/index.ts:23

___

####  id

• **id**: *string*

Defined in src/Folder/index.ts:21

___

####  name

• **name**: *string*

Defined in src/Folder/index.ts:22

___

####  updated_at

• **updated_at**: *string*

Defined in src/Folder/index.ts:24


<a name="interfaces_folder_index_metadatamd"></a>

[functional-types](#globalsmd) › ["Folder/index"](#modules_folder_index_md) › [Metadata](#interfaces_folder_index_metadatamd)

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

Defined in src/Folder/index.ts:40

___

####  content_type

• **content_type**: *string*

Defined in src/Folder/index.ts:42

___

####  created_at

• **created_at**: *string*

Defined in src/Folder/index.ts:44

___

####  generation

• **generation**: *string*

Defined in src/Folder/index.ts:41

___

####  id

• **id**: *string*

Defined in src/Folder/index.ts:36

___

####  kind

• **kind**: *string*

Defined in src/Folder/index.ts:35

___

####  media_link

• **media_link**: *string*

Defined in src/Folder/index.ts:38

___

####  name

• **name**: *string*

Defined in src/Folder/index.ts:39

___

####  self_link

• **self_link**: *string*

Defined in src/Folder/index.ts:37

___

####  size

• **size**: *string*

Defined in src/Folder/index.ts:43

___

####  updated_at

• **updated_at**: *string*

Defined in src/Folder/index.ts:45


<a name="interfaces_folder_index_referencemd"></a>

[functional-types](#globalsmd) › ["Folder/index"](#modules_folder_index_md) › [Reference](#interfaces_folder_index_referencemd)

## Interface: Reference

### Hierarchy

* **Reference**

### Index

#### Properties

* [file](#file)

### Properties

####  file

• **file**: *string*

Defined in src/Folder/index.ts:49


<a name="interfaces_label_labelmd"></a>

[functional-types](#globalsmd) › ["Label"](#modules_label_md) › [Label](#interfaces_label_labelmd)

## Interface: Label

### Hierarchy

* **Label**

### Index

#### Properties

* [color](#color)
* [id](#id)
* [name](#name)

### Properties

####  color

• **color**: *string*

Defined in src/Label.ts:6

___

####  id

• **id**: *string*

Defined in src/Label.ts:4

___

####  name

• **name**: *string*

Defined in src/Label.ts:5


<a name="interfaces_schema_index_filematchermd"></a>

[functional-types](#globalsmd) › ["Schema/index"](#modules_schema_index_md) › [FileMatcher](#interfaces_schema_index_filematchermd)

## Interface: FileMatcher

### Hierarchy

* [Matcher](#interfaces_schema_index_matchermd)

  ↳ **FileMatcher**

### Index

#### Properties

* [child](#optional-child)
* [name](#name)
* [regex](#regex)
* [timestamp_capture_group](#timestamp_capture_group)
* [type](#type)

### Properties

#### `Optional` child

• **child**? : *[FileMatcher](#interfaces_schema_index_filematchermd)*

Defined in src/Schema/index.ts:29

___

####  name

• **name**: *string*

*Inherited from [Matcher](#interfaces_schema_index_matchermd).[name](#name)*

Defined in src/Schema/index.ts:24

___

####  regex

• **regex**: *string*

*Inherited from [Matcher](#interfaces_schema_index_matchermd).[regex](#regex)*

Defined in src/Schema/index.ts:23

___

####  timestamp_capture_group

• **timestamp_capture_group**: *number*

*Inherited from [Matcher](#interfaces_schema_index_matchermd).[timestamp_capture_group](#timestamp_capture_group)*

Defined in src/Schema/index.ts:25

___

####  type

• **type**: *[Type](#type)*

Defined in src/Schema/index.ts:30


<a name="interfaces_schema_index_gettablemd"></a>

[functional-types](#globalsmd) › ["Schema/index"](#modules_schema_index_md) › [Gettable](#interfaces_schema_index_gettablemd)

## Interface: Gettable

### Hierarchy

* **Gettable**

### Index

#### Properties

* [attributes](#attributes)
* [file](#file)

### Properties

####  attributes

• **attributes**: *[Matcher](#interfaces_schema_index_matchermd)[]*

Defined in src/Schema/index.ts:35

___

####  file

• **file**: *[FileMatcher](#interfaces_schema_index_filematchermd)*

Defined in src/Schema/index.ts:34


<a name="interfaces_schema_index_matchermd"></a>

[functional-types](#globalsmd) › ["Schema/index"](#modules_schema_index_md) › [Matcher](#interfaces_schema_index_matchermd)

## Interface: Matcher

### Hierarchy

* **Matcher**

  ↳ [FileMatcher](#interfaces_schema_index_filematchermd)

### Index

#### Properties

* [name](#name)
* [regex](#regex)
* [timestamp_capture_group](#timestamp_capture_group)

### Properties

####  name

• **name**: *string*

Defined in src/Schema/index.ts:24

___

####  regex

• **regex**: *string*

Defined in src/Schema/index.ts:23

___

####  timestamp_capture_group

• **timestamp_capture_group**: *number*

Defined in src/Schema/index.ts:25


<a name="interfaces_schema_index_schemamd"></a>

[functional-types](#globalsmd) › ["Schema/index"](#modules_schema_index_md) › [Schema](#interfaces_schema_index_schemamd)

## Interface: Schema

### Hierarchy

* **Schema**

  ↳ [VersionedSchema](#interfaces_schema_index_versionedschemamd)

### Index

#### Properties

* [created_at](#created_at)
* [gettables](#gettables)
* [id](#id)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *Date*

Defined in src/Schema/index.ts:43

___

####  gettables

• **gettables**: *[Gettables](#gettables)*

Defined in src/Schema/index.ts:42

___

####  id

• **id**: *string*

Defined in src/Schema/index.ts:41

___

####  updated_at

• **updated_at**: *Date*

Defined in src/Schema/index.ts:44


<a name="interfaces_schema_index_versionedschemamd"></a>

[functional-types](#globalsmd) › ["Schema/index"](#modules_schema_index_md) › [VersionedSchema](#interfaces_schema_index_versionedschemamd)

## Interface: VersionedSchema

### Hierarchy

* [Schema](#interfaces_schema_index_schemamd)

  ↳ **VersionedSchema**

### Index

#### Properties

* [created_at](#created_at)
* [gettables](#gettables)
* [id](#id)
* [schema_id](#schema_id)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *Date*

*Inherited from [Schema](#interfaces_schema_index_schemamd).[created_at](#created_at)*

Defined in src/Schema/index.ts:43

___

####  gettables

• **gettables**: *[Gettables](#gettables)*

*Inherited from [Schema](#interfaces_schema_index_schemamd).[gettables](#gettables)*

Defined in src/Schema/index.ts:42

___

####  id

• **id**: *string*

*Inherited from [Schema](#interfaces_schema_index_schemamd).[id](#id)*

Defined in src/Schema/index.ts:41

___

####  schema_id

• **schema_id**: *string*

Defined in src/Schema/index.ts:48

___

####  updated_at

• **updated_at**: *Date*

*Inherited from [Schema](#interfaces_schema_index_schemamd).[updated_at](#updated_at)*

Defined in src/Schema/index.ts:44


<a name="interfaces_tableannotation_tableannotationmd"></a>

[functional-types](#globalsmd) › ["TableAnnotation"](#modules_tableannotation_md) › [TableAnnotation](#interfaces_tableannotation_tableannotationmd)

## Interface: TableAnnotation

### Hierarchy

* **TableAnnotation**

### Index

#### Properties

* [boundingBoxesByPage](#boundingboxesbypage)
* [created_at](#created_at)
* [file](#file)
* [id](#id)
* [updated_at](#updated_at)

### Properties

####  boundingBoxesByPage

• **boundingBoxesByPage**: *[BoundingBoxesByPage](#boundingboxesbypage)*

Defined in src/TableAnnotation.ts:27

___

####  created_at

• **created_at**: *string*

Defined in src/TableAnnotation.ts:28

___

####  file

• **file**: *string*

Defined in src/TableAnnotation.ts:26

___

####  id

• **id**: *string*

Defined in src/TableAnnotation.ts:25

___

####  updated_at

• **updated_at**: *string*

Defined in src/TableAnnotation.ts:29


<a name="interfaces_textannotation_pagemd"></a>

[functional-types](#globalsmd) › ["TextAnnotation"](#modules_textannotation_md) › [Page](#interfaces_textannotation_pagemd)

## Interface: Page

### Hierarchy

* **Page**

### Index

#### Properties

* [paragraphsById](#paragraphsbyid)
* [wordsById](#wordsbyid)

### Properties

####  paragraphsById

• **paragraphsById**: *[ParagraphsById](#paragraphsbyid)*

Defined in src/TextAnnotation.ts:70

___

####  wordsById

• **wordsById**: *[WordsById](#wordsbyid)*

Defined in src/TextAnnotation.ts:69


<a name="interfaces_textannotation_paragraphmd"></a>

[functional-types](#globalsmd) › ["TextAnnotation"](#modules_textannotation_md) › [Paragraph](#interfaces_textannotation_paragraphmd)

## Interface: Paragraph

### Hierarchy

* **Paragraph**

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [confidence](#confidence)
* [id](#id)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

Defined in src/TextAnnotation.ts:60

___

####  confidence

• **confidence**: *number*

Defined in src/TextAnnotation.ts:61

___

####  id

• **id**: *string*

Defined in src/TextAnnotation.ts:59


<a name="interfaces_textannotation_textannotationmd"></a>

[functional-types](#globalsmd) › ["TextAnnotation"](#modules_textannotation_md) › [TextAnnotation](#interfaces_textannotation_textannotationmd)

## Interface: TextAnnotation

### Hierarchy

* **TextAnnotation**

### Index

#### Properties

* [created_at](#created_at)
* [file](#file)
* [id](#id)
* [pages](#pages)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *string*

Defined in src/TextAnnotation.ts:77

___

####  file

• **file**: *string*

Defined in src/TextAnnotation.ts:75

___

####  id

• **id**: *string*

Defined in src/TextAnnotation.ts:74

___

####  pages

• **pages**: *[Page](#interfaces_textannotation_pagemd)[]*

Defined in src/TextAnnotation.ts:76

___

####  updated_at

• **updated_at**: *string*

Defined in src/TextAnnotation.ts:78


<a name="interfaces_textannotation_wordmd"></a>

[functional-types](#globalsmd) › ["TextAnnotation"](#modules_textannotation_md) › [Word](#interfaces_textannotation_wordmd)

## Interface: Word

### Hierarchy

* **Word**

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [breakType](#breaktype)
* [confidence](#confidence)
* [id](#id)
* [paragraph](#paragraph)
* [text](#text)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

Defined in src/TextAnnotation.ts:53

___

####  breakType

• **breakType**: *[BreakType](#breaktype)*

Defined in src/TextAnnotation.ts:52

___

####  confidence

• **confidence**: *number*

Defined in src/TextAnnotation.ts:55

___

####  id

• **id**: *string*

Defined in src/TextAnnotation.ts:50

___

####  paragraph

• **paragraph**: *string*

Defined in src/TextAnnotation.ts:51

___

####  text

• **text**: *string*

Defined in src/TextAnnotation.ts:54


<a name="interfaces_vertex_index_boundingboxmd"></a>

[functional-types](#globalsmd) › ["Vertex/index"](#modules_vertex_index_md) › [BoundingBox](#interfaces_vertex_index_boundingboxmd)

## Interface: BoundingBox

### Hierarchy

* **BoundingBox**

  ↳ [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)

### Index

#### Properties

* [boundingPoly](#boundingpoly)
* [columns](#columns)
* [rows](#rows)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

Defined in src/Vertex/index.ts:57

___

####  columns

• **columns**: *[Line](#line)[]*

Defined in src/Vertex/index.ts:59

___

####  rows

• **rows**: *[Line](#line)[]*

Defined in src/Vertex/index.ts:58


<a name="interfaces_vertex_index_cornersmd"></a>

[functional-types](#globalsmd) › ["Vertex/index"](#modules_vertex_index_md) › [Corners](#interfaces_vertex_index_cornersmd)

## Interface: Corners

### Hierarchy

* **Corners**

### Index

#### Properties

* [end](#end)
* [start](#start)

### Properties

####  end

• **end**: *[Vertex](#interfaces_vertex_index_vertexmd)*

Defined in src/Vertex/index.ts:92

___

####  start

• **start**: *[Vertex](#interfaces_vertex_index_vertexmd)*

Defined in src/Vertex/index.ts:91


<a name="interfaces_vertex_index_labeledboundingboxmd"></a>

[functional-types](#globalsmd) › ["Vertex/index"](#modules_vertex_index_md) › [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)

## Interface: LabeledBoundingBox

### Hierarchy

* [BoundingBox](#interfaces_vertex_index_boundingboxmd)

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

*Inherited from [BoundingBox](#interfaces_vertex_index_boundingboxmd).[boundingPoly](#boundingpoly)*

Defined in src/Vertex/index.ts:57

___

####  columns

• **columns**: *[Line](#line)[]*

*Inherited from [BoundingBox](#interfaces_vertex_index_boundingboxmd).[columns](#columns)*

Defined in src/Vertex/index.ts:59

___

####  id

• **id**: *string*

Defined in src/Vertex/index.ts:86

___

####  label

• **label**: *string*

Defined in src/Vertex/index.ts:87

___

####  rows

• **rows**: *[Line](#line)[]*

*Inherited from [BoundingBox](#interfaces_vertex_index_boundingboxmd).[rows](#rows)*

Defined in src/Vertex/index.ts:58


<a name="interfaces_vertex_index_rectanglemd"></a>

[functional-types](#globalsmd) › ["Vertex/index"](#modules_vertex_index_md) › [Rectangle](#interfaces_vertex_index_rectanglemd)

## Interface: Rectangle

### Hierarchy

* **Rectangle**

### Index

#### Properties

* [x0](#x0)
* [x1](#x1)
* [y0](#y0)
* [y1](#y1)

### Properties

####  x0

• **x0**: *number*

Defined in src/Vertex/index.ts:96

___

####  x1

• **x1**: *number*

Defined in src/Vertex/index.ts:98

___

####  y0

• **y0**: *number*

Defined in src/Vertex/index.ts:97

___

####  y1

• **y1**: *number*

Defined in src/Vertex/index.ts:99


<a name="interfaces_vertex_index_vertexmd"></a>

[functional-types](#globalsmd) › ["Vertex/index"](#modules_vertex_index_md) › [Vertex](#interfaces_vertex_index_vertexmd)

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

Defined in src/Vertex/index.ts:45

___

####  y

• **y**: *number*

Defined in src/Vertex/index.ts:46


<a name="interfaces_vision_annotateimagerequestmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [AnnotateImageRequest](#interfaces_vision_annotateimagerequestmd)

## Interface: AnnotateImageRequest

### Hierarchy

* **AnnotateImageRequest**

### Index

#### Properties

* [features](#optional-features)
* [image](#image)
* [imageContext](#optional-imagecontext)

### Properties

#### `Optional` features

• **features**? : *[Feature](#interfaces_vision_featuremd)[]*

Defined in src/Vision.ts:48

___

####  image

• **image**: *[Image](#interfaces_vision_imagemd)*

Defined in src/Vision.ts:47

___

#### `Optional` imageContext

• **imageContext**? : *[ImageContext](#interfaces_vision_imagecontextmd)*

Defined in src/Vision.ts:49


<a name="interfaces_vision_annotateimageresponsemd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd)

## Interface: AnnotateImageResponse

### Hierarchy

* **AnnotateImageResponse**

### Index

#### Properties

* [fullTextAnnotation](#optional-fulltextannotation)
* [labelAnnotations](#optional-labelannotations)
* [textAnnotations](#optional-textannotations)

### Properties

#### `Optional` fullTextAnnotation

• **fullTextAnnotation**? : *[TextAnnotation](#interfaces_vision_textannotationmd)*

Defined in src/Vision.ts:63

___

#### `Optional` labelAnnotations

• **labelAnnotations**? : *[EntityAnnotation](#interfaces_vision_entityannotationmd)[]*

Defined in src/Vision.ts:54

___

#### `Optional` textAnnotations

• **textAnnotations**? : *[EntityAnnotation](#interfaces_vision_entityannotationmd)[]*

Defined in src/Vision.ts:57


<a name="interfaces_vision_asyncannotatefilerequestmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd)

## Interface: AsyncAnnotateFileRequest

### Hierarchy

* **AsyncAnnotateFileRequest**

### Index

#### Properties

* [features](#features)
* [imageContext](#optional-imagecontext)
* [inputConfig](#inputconfig)
* [outputConfig](#outputconfig)
* [responses](#optional-responses)

### Properties

####  features

• **features**: *[Feature](#interfaces_vision_featuremd)[]*

Defined in src/Vision.ts:16

___

#### `Optional` imageContext

• **imageContext**? : *[ImageContext](#interfaces_vision_imagecontextmd)*

Defined in src/Vision.ts:17

___

####  inputConfig

• **inputConfig**: *[InputConfig](#interfaces_vision_inputconfigmd)*

Defined in src/Vision.ts:15

___

####  outputConfig

• **outputConfig**: *[OutputConfig](#interfaces_vision_outputconfigmd)*

Defined in src/Vision.ts:18

___

#### `Optional` responses

• **responses**? : *[AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd)[]*

Defined in src/Vision.ts:19


<a name="interfaces_vision_blockmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Block](#interfaces_vision_blockmd)

## Interface: Block

### Hierarchy

* **Block**

### Index

#### Properties

* [blockType](#blocktype)
* [boundingBox](#boundingbox)
* [confidence](#optional-confidence)
* [paragraphs](#paragraphs)
* [property](#optional-property)

### Properties

####  blockType

• **blockType**: *[BlockType](#blocktype)*

Defined in src/Vision.ts:152

___

####  boundingBox

• **boundingBox**: *[BoundingPoly](#interfaces_vision_boundingpolymd)*

Defined in src/Vision.ts:150

___

#### `Optional` confidence

• **confidence**? : *number*

Defined in src/Vision.ts:153

___

####  paragraphs

• **paragraphs**: *[Paragraph](#interfaces_vision_paragraphmd)[]*

Defined in src/Vision.ts:151

___

#### `Optional` property

• **property**? : *[TextProperty](#interfaces_vision_textpropertymd)*

Defined in src/Vision.ts:139


<a name="interfaces_vision_boundingpolymd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [BoundingPoly](#interfaces_vision_boundingpolymd)

## Interface: BoundingPoly

### Hierarchy

* **BoundingPoly**

### Index

#### Properties

* [normalizedVertices](#optional-normalizedvertices)
* [vertices](#optional-vertices)

### Properties

#### `Optional` normalizedVertices

• **normalizedVertices**? : *[NormalizedVertex](#interfaces_vision_normalizedvertexmd)[]*

Defined in src/Vision.ts:212

___

#### `Optional` vertices

• **vertices**? : *[Vertex](#interfaces_vision_vertexmd)[]*

Defined in src/Vision.ts:211


<a name="interfaces_vision_detectedbreakmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [DetectedBreak](#interfaces_vision_detectedbreakmd)

## Interface: DetectedBreak

### Hierarchy

* **DetectedBreak**

### Index

#### Properties

* [isPrefix](#optional-isprefix)
* [type](#type)

### Properties

#### `Optional` isPrefix

• **isPrefix**? : *boolean*

Defined in src/Vision.ts:199

___

####  type

• **type**: *[BreakType](#breaktype)*

Defined in src/Vision.ts:196


<a name="interfaces_vision_detectedlanguagemd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [DetectedLanguage](#interfaces_vision_detectedlanguagemd)

## Interface: DetectedLanguage

### Hierarchy

* **DetectedLanguage**

### Index

#### Properties

* [confidence](#optional-confidence)
* [languageCode](#languagecode)

### Properties

#### `Optional` confidence

• **confidence**? : *number*

Defined in src/Vision.ts:192

___

####  languageCode

• **languageCode**: *string*

Defined in src/Vision.ts:191


<a name="interfaces_vision_entityannotationmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [EntityAnnotation](#interfaces_vision_entityannotationmd)

## Interface: EntityAnnotation

### Hierarchy

* **EntityAnnotation**

### Index

#### Properties

* [boundingPoly](#optional-boundingpoly)
* [confidence](#confidence)
* [description](#description)
* [locale](#locale)
* [locations](#locations)
* [mid](#mid)
* [properties](#properties)
* [score](#score)
* [topicality](#topicality)

### Properties

#### `Optional` boundingPoly

• **boundingPoly**? : *[BoundingPoly](#interfaces_vision_boundingpolymd)*

Defined in src/Vision.ts:99

___

####  confidence

• **confidence**: *number*

Defined in src/Vision.ts:97

___

####  description

• **description**: *string*

Defined in src/Vision.ts:95

___

####  locale

• **locale**: *string*

Defined in src/Vision.ts:94

___

####  locations

• **locations**: *[LocationInfo](#interfaces_vision_locationinfomd)[]*

Defined in src/Vision.ts:100

___

####  mid

• **mid**: *string*

Defined in src/Vision.ts:93

___

####  properties

• **properties**: *[Property](#interfaces_vision_propertymd)[]*

Defined in src/Vision.ts:101

___

####  score

• **score**: *number*

Defined in src/Vision.ts:96

___

####  topicality

• **topicality**: *number*

Defined in src/Vision.ts:98


<a name="interfaces_vision_featuremd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Feature](#interfaces_vision_featuremd)

## Interface: Feature

### Hierarchy

* **Feature**

### Index

#### Properties

* [maxResult](#optional-maxresult)
* [model](#optional-model)
* [type](#type)

### Properties

#### `Optional` maxResult

• **maxResult**? : *number*

Defined in src/Vision.ts:78

___

#### `Optional` model

• **model**? : *"builtin/stable" | "builtin/latest"*

Defined in src/Vision.ts:79

___

####  type

• **type**: *[Type](#type)*

Defined in src/Vision.ts:77


<a name="interfaces_vision_gcsdestinationmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [GcsDestination](#interfaces_vision_gcsdestinationmd)

## Interface: GcsDestination

### Hierarchy

* **GcsDestination**

### Index

#### Properties

* [uri](#uri)

### Properties

####  uri

• **uri**: *string*

Defined in src/Vision.ts:43


<a name="interfaces_vision_gcssourcemd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [GcsSource](#interfaces_vision_gcssourcemd)

## Interface: GcsSource

### Hierarchy

* **GcsSource**

### Index

#### Properties

* [uri](#uri)

### Properties

####  uri

• **uri**: *string*

Defined in src/Vision.ts:29


<a name="interfaces_vision_imagemd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Image](#interfaces_vision_imagemd)

## Interface: Image

### Hierarchy

* **Image**

### Index

#### Properties

* [content](#optional-content)
* [source](#optional-source)

### Properties

#### `Optional` content

• **content**? : *Buffer*

Defined in src/Vision.ts:67

___

#### `Optional` source

• **source**? : *[ImageSource](#interfaces_vision_imagesourcemd)*

Defined in src/Vision.ts:68


<a name="interfaces_vision_imagecontextmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [ImageContext](#interfaces_vision_imagecontextmd)

## Interface: ImageContext

### Hierarchy

* **ImageContext**

### Index

#### Properties

* [cropHintsParams](#crophintsparams)
* [languageHints](#languagehints)
* [latLongRect](#latlongrect)
* [productSearchParams](#productsearchparams)
* [webDetectionParams](#webdetectionparams)

### Properties

####  cropHintsParams

• **cropHintsParams**: *unknown*

Defined in src/Vision.ts:87

___

####  languageHints

• **languageHints**: *string[]*

Defined in src/Vision.ts:86

___

####  latLongRect

• **latLongRect**: *unknown*

Defined in src/Vision.ts:85

___

####  productSearchParams

• **productSearchParams**: *unknown*

Defined in src/Vision.ts:88

___

####  webDetectionParams

• **webDetectionParams**: *unknown*

Defined in src/Vision.ts:89


<a name="interfaces_vision_imagesourcemd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [ImageSource](#interfaces_vision_imagesourcemd)

## Interface: ImageSource

### Hierarchy

* **ImageSource**

### Index

#### Properties

* [gcsImageUri](#optional-gcsimageuri)
* [imageUri](#optional-imageuri)

### Properties

#### `Optional` gcsImageUri

• **gcsImageUri**? : *string*

Defined in src/Vision.ts:72

___

#### `Optional` imageUri

• **imageUri**? : *string*

Defined in src/Vision.ts:73


<a name="interfaces_vision_inputconfigmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [InputConfig](#interfaces_vision_inputconfigmd)

## Interface: InputConfig

### Hierarchy

* **InputConfig**

### Index

#### Properties

* [content](#optional-content)
* [gcsSource](#gcssource)
* [mimeType](#mimetype)

### Properties

#### `Optional` content

• **content**? : *Buffer*

Defined in src/Vision.ts:24

___

####  gcsSource

• **gcsSource**: *[GcsSource](#interfaces_vision_gcssourcemd)*

Defined in src/Vision.ts:23

___

####  mimeType

• **mimeType**: *string*

Defined in src/Vision.ts:25


<a name="interfaces_vision_latlngmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [LatLng](#interfaces_vision_latlngmd)

## Interface: LatLng

### Hierarchy

* **LatLng**

### Index

#### Properties

* [latitude](#latitude)
* [longitude](#longitude)

### Properties

####  latitude

• **latitude**: *number*

Defined in src/Vision.ts:250

___

####  longitude

• **longitude**: *number*

Defined in src/Vision.ts:252


<a name="interfaces_vision_locationinfomd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [LocationInfo](#interfaces_vision_locationinfomd)

## Interface: LocationInfo

### Hierarchy

* **LocationInfo**

### Index

#### Properties

* [latLng](#latlng)

### Properties

####  latLng

• **latLng**: *[LatLng](#interfaces_vision_latlngmd)*

Defined in src/Vision.ts:216


<a name="interfaces_vision_normalizedvertexmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [NormalizedVertex](#interfaces_vision_normalizedvertexmd)

## Interface: NormalizedVertex

### Hierarchy

* [Vertex](#interfaces_vision_vertexmd)

  ↳ **NormalizedVertex**

### Index

#### Properties

* [x](#x)
* [y](#y)

### Properties

####  x

• **x**: *number*

*Overrides [Vertex](#interfaces_vision_vertexmd).[x](#x)*

Defined in src/Vision.ts:239

___

####  y

• **y**: *number*

*Overrides [Vertex](#interfaces_vision_vertexmd).[y](#y)*

Defined in src/Vision.ts:240


<a name="interfaces_vision_outputconfigmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [OutputConfig](#interfaces_vision_outputconfigmd)

## Interface: OutputConfig

### Hierarchy

* **OutputConfig**

### Index

#### Properties

* [batchSize](#optional-batchsize)
* [gcsDestination](#gcsdestination)

### Properties

#### `Optional` batchSize

• **batchSize**? : *number*

Defined in src/Vision.ts:38

___

####  gcsDestination

• **gcsDestination**: *[GcsDestination](#interfaces_vision_gcsdestinationmd)*

Defined in src/Vision.ts:39


<a name="interfaces_vision_pagemd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Page](#interfaces_vision_pagemd)

## Interface: Page

### Hierarchy

* **Page**

### Index

#### Properties

* [blocks](#blocks)
* [confidence](#optional-confidence)
* [height](#height)
* [property](#property)
* [width](#width)

### Properties

####  blocks

• **blocks**: *[Block](#interfaces_vision_blockmd)[]*

Defined in src/Vision.ts:127

___

#### `Optional` confidence

• **confidence**? : *number*

Defined in src/Vision.ts:130

___

####  height

• **height**: *number*

Defined in src/Vision.ts:125

___

####  property

• **property**: *[TextProperty](#interfaces_vision_textpropertymd)*

Defined in src/Vision.ts:118

___

####  width

• **width**: *number*

Defined in src/Vision.ts:124


<a name="interfaces_vision_paragraphmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Paragraph](#interfaces_vision_paragraphmd)

## Interface: Paragraph

### Hierarchy

* **Paragraph**

### Index

#### Properties

* [boundingBox](#boundingbox)
* [confidence](#confidence)
* [property](#optional-property)
* [words](#words)

### Properties

####  boundingBox

• **boundingBox**: *[BoundingPoly](#interfaces_vision_boundingpolymd)*

Defined in src/Vision.ts:158

___

####  confidence

• **confidence**: *number*

Defined in src/Vision.ts:160

___

#### `Optional` property

• **property**? : *[TextProperty](#interfaces_vision_textpropertymd)*

Defined in src/Vision.ts:157

___

####  words

• **words**: *[Word](#interfaces_vision_wordmd)[]*

Defined in src/Vision.ts:159


<a name="interfaces_vision_propertymd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Property](#interfaces_vision_propertymd)

## Interface: Property

### Hierarchy

* **Property**

### Index

#### Properties

* [name](#name)
* [uint64Value](#uint64value)
* [value](#value)

### Properties

####  name

• **name**: *string*

Defined in src/Vision.ts:220

___

####  uint64Value

• **uint64Value**: *number*

Defined in src/Vision.ts:222

___

####  value

• **value**: *string*

Defined in src/Vision.ts:221


<a name="interfaces_vision_textannotationmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [TextAnnotation](#interfaces_vision_textannotationmd)

## Interface: TextAnnotation

### Hierarchy

* **TextAnnotation**

### Index

#### Properties

* [pages](#pages)
* [text](#text)

### Properties

####  pages

• **pages**: *[Page](#interfaces_vision_pagemd)[]*

Defined in src/Vision.ts:110

___

####  text

• **text**: *string*

Defined in src/Vision.ts:113


<a name="interfaces_vision_textpropertymd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [TextProperty](#interfaces_vision_textpropertymd)

## Interface: TextProperty

### Hierarchy

* **TextProperty**

### Index

#### Properties

* [detectedBreak](#optional-detectedbreak)
* [detectedLanguages](#detectedlanguages)

### Properties

#### `Optional` detectedBreak

• **detectedBreak**? : *[DetectedBreak](#interfaces_vision_detectedbreakmd)*

Defined in src/Vision.ts:135

___

####  detectedLanguages

• **detectedLanguages**: *[DetectedLanguage](#interfaces_vision_detectedlanguagemd)[]*

Defined in src/Vision.ts:134


<a name="interfaces_vision_textsymbolmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [TextSymbol](#interfaces_vision_textsymbolmd)

## Interface: TextSymbol

### Hierarchy

* **TextSymbol**

### Index

#### Properties

* [boundingBox](#optional-boundingbox)
* [confidence](#confidence)
* [property](#property)
* [text](#text)

### Properties

#### `Optional` boundingBox

• **boundingBox**? : *[BoundingPoly](#interfaces_vision_boundingpolymd)*

Defined in src/Vision.ts:181

___

####  confidence

• **confidence**: *number*

Defined in src/Vision.ts:183

___

####  property

• **property**: *[TextProperty](#interfaces_vision_textpropertymd)*

Defined in src/Vision.ts:180

___

####  text

• **text**: *string*

Defined in src/Vision.ts:182


<a name="interfaces_vision_vertexmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Vertex](#interfaces_vision_vertexmd)

## Interface: Vertex

### Hierarchy

* **Vertex**

  ↳ [NormalizedVertex](#interfaces_vision_normalizedvertexmd)

### Index

#### Properties

* [x](#x)
* [y](#y)

### Properties

####  x

• **x**: *number*

Defined in src/Vision.ts:230

___

####  y

• **y**: *number*

Defined in src/Vision.ts:231


<a name="interfaces_vision_wordmd"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md) › [Word](#interfaces_vision_wordmd)

## Interface: Word

### Hierarchy

* **Word**

### Index

#### Properties

* [boundingBox](#boundingbox)
* [confidence](#confidence)
* [property](#optional-property)
* [symbols](#symbols)

### Properties

####  boundingBox

• **boundingBox**: *[BoundingPoly](#interfaces_vision_boundingpolymd)*

Defined in src/Vision.ts:174

___

####  confidence

• **confidence**: *number*

Defined in src/Vision.ts:176

___

#### `Optional` property

• **property**? : *[TextProperty](#interfaces_vision_textpropertymd)*

Defined in src/Vision.ts:173

___

####  symbols

• **symbols**: *[TextSymbol](#interfaces_vision_textsymbolmd)[]*

Defined in src/Vision.ts:175

# Modules


<a name="modules_datetime_md"></a>

[functional-types](#globalsmd) › ["DateTime"](#modules_datetime_md)

## Module: "DateTime"

### Index

#### Variables

* [getCurrentUnixTimestamp](#const-getcurrentunixtimestamp)

#### Functions

* [getCurrentDate](#const-getcurrentdate)
* [getCurrentISOString](#const-getcurrentisostring)
* [getUnixTimestamp](#const-getunixtimestamp)

### Variables

#### `Const` getCurrentUnixTimestamp

• **getCurrentUnixTimestamp**: *function* = Date.now

Defined in src/DateTime.ts:14

```haskell
getCurrentUnixTimestamp :: () -> Int
```

##### Type declaration:

▸ (): *number*

### Functions

#### `Const` getCurrentDate

▸ **getCurrentDate**(): *Date*

Defined in src/DateTime.ts:21

```haskell
getCurrentDate :: () -> Date
```

**Returns:** *Date*

___

#### `Const` getCurrentISOString

▸ **getCurrentISOString**(): *string*

Defined in src/DateTime.ts:28

```haskell
getCurrentISOString :: () -> string
```

**Returns:** *string*

___

#### `Const` getUnixTimestamp

▸ **getUnixTimestamp**(`date`: Date): *number*

Defined in src/DateTime.ts:6

```haskell
getUnixTimestamp :: Date -> Int
```

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *number*


<a name="modules_documentannotation_md"></a>

[functional-types](#globalsmd) › ["DocumentAnnotation"](#modules_documentannotation_md)

## Module: "DocumentAnnotation"

### Index

#### Interfaces

* [Branch](#interfaces_documentannotation_branchmd)
* [Cell](#interfaces_documentannotation_cellmd)
* [DocumentAnnotation](#interfaces_documentannotation_documentannotationmd)
* [Node](#interfaces_documentannotation_nodemd)
* [Table](#interfaces_documentannotation_tablemd)
* [TableCell](#interfaces_documentannotation_tablecellmd)

#### Type aliases

* [Child](#child)
* [DocumentAnnotationBase](#documentannotationbase)
* [Leaf](#leaf)
* [TableBase](#tablebase)
* [TableCellById](#tablecellbyid)
* [TextCell](#textcell)
* [TextTableCell](#texttablecell)
* [Tree](#tree)
* [TreeByPage](#treebypage)

#### Variables

* [make](#const-make)
* [makeLeaf](#const-makeleaf)
* [makeTree](#const-maketree)
* [toTextCell](#const-totextcell)
* [toTextTableCell](#const-totexttablecell)

#### Functions

* [isBranch](#const-isbranch)
* [isCell](#const-iscell)
* [isCellArray](#const-iscellarray)
* [isChild](#const-ischild)
* [isDocumentAnnotation](#const-isdocumentannotation)
* [isLeaf](#const-isleaf)
* [isNode](#const-isnode)
* [isTable](#const-istable)
* [isTableCell](#const-istablecell)
* [isTableCellById](#const-istablecellbyid)
* [isTree](#const-istree)
* [isTreeByPage](#const-istreebypage)
* [makeCell](#const-makecell)
* [makeNode](#const-makenode)
* [makeTable](#const-maketable)
* [makeTableCell](#const-maketablecell)
* [makeTextCell](#const-maketextcell)
* [makeTextTableCell](#const-maketexttablecell)
* [makeTreeByPage](#const-maketreebypage)

### Type aliases

####  Child

Ƭ **Child**: *[Branch](#interfaces_documentannotation_branchmd) | [Leaf](#leaf)*

Defined in src/DocumentAnnotation.ts:103

___

####  DocumentAnnotationBase

Ƭ **DocumentAnnotationBase**: *Pick‹[DocumentAnnotation](#interfaces_documentannotation_documentannotationmd), "file" | "treeByPage"›*

Defined in src/DocumentAnnotation.ts:117

___

####  Leaf

Ƭ **Leaf**: *[Cell](#interfaces_documentannotation_cellmd) | [Table](#interfaces_documentannotation_tablemd)*

Defined in src/DocumentAnnotation.ts:96

___

####  TableBase

Ƭ **TableBase**: *Omit‹[Table](#interfaces_documentannotation_tablemd), "id" | "label" | "boundingPoly"›*

Defined in src/DocumentAnnotation.ts:94

___

####  TableCellById

Ƭ **TableCellById**: *Dictionary‹[TableCell](#interfaces_documentannotation_tablecellmd)›*

Defined in src/DocumentAnnotation.ts:83

___

####  TextCell

Ƭ **TextCell**: *Pick‹[Cell](#interfaces_documentannotation_cellmd), "text"›*

Defined in src/DocumentAnnotation.ts:122

___

####  TextTableCell

Ƭ **TextTableCell**: *[TextCell](#textcell) & object*

Defined in src/DocumentAnnotation.ts:124

___

####  Tree

Ƭ **Tree**: *Dictionary‹[Child](#child)›*

Defined in src/DocumentAnnotation.ts:105

___

####  TreeByPage

Ƭ **TreeByPage**: *[Tree](#tree)[]*

Defined in src/DocumentAnnotation.ts:107

### Variables

#### `Const` make

• **make**: *function* = pipe(
  sequenceS(R.reader)({
    file: getFileNameIO,
    treeByPage: makeTreeByPage,
  }),
  sequenceS(R.reader),
  R.map(sequenceS(IO.io)),
  RIO.chainIOK(fromDocumentBase)
)

Defined in src/DocumentAnnotation.ts:607

```haskell
make :: TableAnnotation -> ReaderIO TextAnnotation DocumentAnnotation
```

##### Type declaration:

▸ (`tableAnnotation`: [TableAnnotation](#interfaces_tableannotation_tableannotationmd)): *RIO.ReaderIO‹[TextAnnotation](#interfaces_textannotation_textannotationmd), [DocumentAnnotation](#interfaces_documentannotation_documentannotationmd)›*

**Parameters:**

Name | Type |
------ | ------ |
`tableAnnotation` | [TableAnnotation](#interfaces_tableannotation_tableannotationmd) |

___

#### `Const` makeLeaf

• **makeLeaf**: *function* = ifElse(hasRowsOrColumns, makeTable, makeCell)

Defined in src/DocumentAnnotation.ts:463

```haskell
makeLeaf :: LabeledBoundingBox -> ReaderIO Page Leaf
```

##### Type declaration:

▸ (`boundingBox`: [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)): *RIO.ReaderIO‹[Page](#interfaces_textannotation_pagemd), [Leaf](#leaf)›*

**Parameters:**

Name | Type |
------ | ------ |
`boundingBox` | [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd) |

___

#### `Const` makeTree

• **makeTree**: *function* = pipe(
  values,
  makeChildren,
  RIO.map(reduce((acc: Tree, child: Child) => assoc(child.id, child, acc), {}))
)

Defined in src/DocumentAnnotation.ts:536

```haskell
makeTree :: BoundingBoxes -> ReaderIO Page Tree
```

##### Type declaration:

▸ (`boundingBoxes`: [BoundingBoxes](#boundingboxes)): *RIO.ReaderIO‹[Page](#interfaces_textannotation_pagemd), [Tree](#tree)›*

**Parameters:**

Name | Type |
------ | ------ |
`boundingBoxes` | [BoundingBoxes](#boundingboxes) |

___

#### `Const` toTextCell

• **toTextCell**: *function* = pick(['text'])

Defined in src/DocumentAnnotation.ts:646

```haskell
toTextCell: Cell -> TextCell
```

##### Type declaration:

▸ (`cell`: [Cell](#interfaces_documentannotation_cellmd)): *[TextCell](#textcell)*

**Parameters:**

Name | Type |
------ | ------ |
`cell` | [Cell](#interfaces_documentannotation_cellmd) |

___

#### `Const` toTextTableCell

• **toTextTableCell**: *function* = pipe(
  evolve({
    rowHeader: toTextCell,
    columnHeader: toTextCell,
  }),
  pick(['text', 'rowHeader', 'columnHeader'])
)

Defined in src/DocumentAnnotation.ts:653

```haskell
toTextTableCell: TableCell -> TextTableCell
```

##### Type declaration:

▸ (`tableCell`: [TableCell](#interfaces_documentannotation_tablecellmd)): *[TextTableCell](#texttablecell)*

**Parameters:**

Name | Type |
------ | ------ |
`tableCell` | [TableCell](#interfaces_documentannotation_tablecellmd) |

### Functions

#### `Const` isBranch

▸ **isBranch**(`a`: unknown): *a is Branch*

Defined in src/DocumentAnnotation.ts:220

```haskell
isBranch :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Branch*

___

#### `Const` isCell

▸ **isCell**(`a`: unknown): *a is Cell*

Defined in src/DocumentAnnotation.ts:147

```haskell
isCell :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Cell*

___

#### `Const` isCellArray

▸ **isCellArray**(`a`: unknown): *a is Cell[]*

Defined in src/DocumentAnnotation.ts:159

```haskell
isCellArray :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Cell[]*

___

#### `Const` isChild

▸ **isChild**(`a`: unknown): *a is Child*

Defined in src/DocumentAnnotation.ts:236

```haskell
isChild :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Child*

___

#### `Const` isDocumentAnnotation

▸ **isDocumentAnnotation**(`a`: unknown): *a is DocumentAnnotation*

Defined in src/DocumentAnnotation.ts:260

```haskell
isDocumentAnnotation :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is DocumentAnnotation*

___

#### `Const` isLeaf

▸ **isLeaf**(`a`: unknown): *a is Leaf*

Defined in src/DocumentAnnotation.ts:213

```haskell
isLeaf :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Leaf*

___

#### `Const` isNode

▸ **isNode**(`a`: unknown): *a is Node*

Defined in src/DocumentAnnotation.ts:134

```haskell
isNode :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Node*

___

#### `Const` isTable

▸ **isTable**(`a`: unknown): *a is Table*

Defined in src/DocumentAnnotation.ts:197

```haskell
isTable :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Table*

___

#### `Const` isTableCell

▸ **isTableCell**(`a`: unknown): *a is TableCell*

Defined in src/DocumentAnnotation.ts:167

```haskell
isTableCell :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is TableCell*

___

#### `Const` isTableCellById

▸ **isTableCellById**(`a`: unknown): *a is TableCellById*

Defined in src/DocumentAnnotation.ts:179

```haskell
isTableCellById :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is TableCellById*

___

#### `Const` isTree

▸ **isTree**(`a`: unknown): *a is Tree*

Defined in src/DocumentAnnotation.ts:244

```haskell
isTree :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Tree*

___

#### `Const` isTreeByPage

▸ **isTreeByPage**(`a`: unknown): *a is TreeByPage*

Defined in src/DocumentAnnotation.ts:252

```haskell
isTreeByPage :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is TreeByPage*

___

#### `Const` makeCell

▸ **makeCell**(`boundingBox`: [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)): *(Anonymous function)*

Defined in src/DocumentAnnotation.ts:290

```haskell
makeCell :: LabeledBoundingBox -> ReaderIO Page Cell
```

**Parameters:**

Name | Type |
------ | ------ |
`boundingBox` | [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` makeNode

▸ **makeNode**(`__namedParameters`: object): *(Anonymous function)*

Defined in src/DocumentAnnotation.ts:274

```haskell
makeNode :: LabeledBoundingBox -> IO Node
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`boundingPoly` | [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)] |
`label` | string |

**Returns:** *(Anonymous function)*

___

#### `Const` makeTable

▸ **makeTable**(`boundingBox`: [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)): *(Anonymous function)*

Defined in src/DocumentAnnotation.ts:376

```haskell
makeTable :: LabeledBoundingBox -> ReaderIO Page Table
```

**Parameters:**

Name | Type |
------ | ------ |
`boundingBox` | [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` makeTableCell

▸ **makeTableCell**(`rowHeader`: [Cell](#interfaces_documentannotation_cellmd), `columnHeader`: [Cell](#interfaces_documentannotation_cellmd)): *function*

Defined in src/DocumentAnnotation.ts:313

```haskell
makeTableCell :: (Cell, Cell) -> LabeledBoundingBox -> ReaderIO Page TableCell
```

**Parameters:**

Name | Type |
------ | ------ |
`rowHeader` | [Cell](#interfaces_documentannotation_cellmd) |
`columnHeader` | [Cell](#interfaces_documentannotation_cellmd) |

**Returns:** *function*

▸ (`x0`: V0): *T2*

**Parameters:**

Name | Type |
------ | ------ |
`x0` | V0 |

___

#### `Const` makeTextCell

▸ **makeTextCell**(`text`: string): *object*

Defined in src/DocumentAnnotation.ts:624

```haskell
makeTextCell :: String -> TextCell
```

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *object*

* **text**: *string*

___

#### `Const` makeTextTableCell

▸ **makeTextTableCell**(`text`: string, `rowHeader`: string, `columnHeader`: string): *object*

Defined in src/DocumentAnnotation.ts:635

```haskell
makeTextTableCell :: (String, String, String) -> TextTableCell
```

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
`rowHeader` | string |
`columnHeader` | string |

**Returns:** *object*

* **columnHeader**(): *object*

* **rowHeader**(): *object*

___

#### `Const` makeTreeByPage

▸ **makeTreeByPage**(`tableAnnotation`: [TableAnnotation](#interfaces_tableannotation_tableannotationmd)): *(Anonymous function)*

Defined in src/DocumentAnnotation.ts:574

```haskell
makeTreeByPage :: TableAnnotation -> ReaderIO TextAnnotation TreeByPage
```

**Parameters:**

Name | Type |
------ | ------ |
`tableAnnotation` | [TableAnnotation](#interfaces_tableannotation_tableannotationmd) |

**Returns:** *(Anonymous function)*


<a name="modules_excel_md"></a>

[functional-types](#globalsmd) › ["Excel"](#modules_excel_md)

## Module: "Excel"

### Index

#### Type aliases

* [Cell](#cell)
* [Excel](#excel)
* [Row](#row)
* [Sheet](#sheet)

#### Functions

* [isCell](#const-iscell)
* [isExcel](#const-isexcel)
* [isRow](#const-isrow)
* [isSheet](#const-issheet)

### Type aliases

####  Cell

Ƭ **Cell**: *string*

Defined in src/Excel.ts:13

___

####  Excel

Ƭ **Excel**: *Dictionary‹[Sheet](#sheet)›*

Defined in src/Excel.ts:16

___

####  Row

Ƭ **Row**: *Dictionary‹[Cell](#cell)›*

Defined in src/Excel.ts:14

___

####  Sheet

Ƭ **Sheet**: *[Row](#row)[]*

Defined in src/Excel.ts:15

### Functions

#### `Const` isCell

▸ **isCell**(`a`: unknown): *a is Row*

Defined in src/Excel.ts:23

```haskell
isCell :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Row*

___

#### `Const` isExcel

▸ **isExcel**(`a`: unknown): *a is Excel*

Defined in src/Excel.ts:47

```haskell
isExcel :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Excel*

___

#### `Const` isRow

▸ **isRow**(`a`: unknown): *a is Row*

Defined in src/Excel.ts:31

```haskell
isRow :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Row*

___

#### `Const` isSheet

▸ **isSheet**(`a`: unknown): *a is Row*

Defined in src/Excel.ts:39

```haskell
isSheet :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Row*


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

Defined in src/FileType.ts:26

___

####  DocumentContentType

Ƭ **DocumentContentType**: *"application/pdf" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/json"*

Defined in src/FileType.ts:19

___

####  DocumentType

Ƭ **DocumentType**: *"pdf" | "excel" | "json"*

Defined in src/FileType.ts:13

___

####  FileType

Ƭ **FileType**: *[DocumentType](#documenttype) | [ImageType](#imagetype)*

Defined in src/FileType.ts:17

___

####  ImageContentType

Ƭ **ImageContentType**: *"image/png" | "image/jpeg"*

Defined in src/FileType.ts:24

___

####  ImageType

Ƭ **ImageType**: *"png" | "jpeg"*

Defined in src/FileType.ts:15

### Variables

#### `Const` contentTypes

• **contentTypes**: *[ContentType](#contenttype)[]* = values(FileTypeToContentType)

Defined in src/FileType.ts:151

```haskell
contentTypes: [ContentType]
```

___

#### `Const` documentTypes

• **documentTypes**: *[DocumentType](#documenttype)[]* = keys(DocumentTypeToContentType)

Defined in src/FileType.ts:112

```haskell
documentTypes: [DocumentType]
```

___

#### `Const` fileContentTypes

• **fileContentTypes**: *[DocumentContentType](#documentcontenttype)[]* = values(
  DocumentTypeToContentType
)

Defined in src/FileType.ts:133

```haskell
contentTypes: [DocumentContentType]
```

___

#### `Const` fileTypes

• **fileTypes**: *[FileType](#filetype)[]* = keys(FileTypeToContentType)

Defined in src/FileType.ts:126

```haskell
fileTypes: [FileType]
```

___

#### `Const` fromContentType

• **fromContentType**: *function* = prop(
  __,
  ContentTypeToFileType
)

Defined in src/FileType.ts:252

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

Defined in src/FileType.ts:234

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

Defined in src/FileType.ts:243

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

Defined in src/FileType.ts:142

```haskell
imageContentTypes: [DocumentContentType]
```

___

#### `Const` imageTypes

• **imageTypes**: *[ImageType](#imagetype)[]* = keys(ImageTypeToContentType)

Defined in src/FileType.ts:119

```haskell
imageTypes: [DocumentType]
```

___

#### `Const` toContentType

• **toContentType**: *function* = prop(
  __,
  FileTypeToContentType
)

Defined in src/FileType.ts:224

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

Defined in src/FileType.ts:206

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

Defined in src/FileType.ts:215

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

Defined in src/FileType.ts:198

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

Defined in src/FileType.ts:182

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

Defined in src/FileType.ts:158

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

Defined in src/FileType.ts:174

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

Defined in src/FileType.ts:190

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

Defined in src/FileType.ts:166

```haskell
isImageType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ImageType*


<a name="modules_folder_arbitraries_md"></a>

[functional-types](#globalsmd) › ["Folder/Arbitraries"](#modules_folder_arbitraries_md)

## Module: "Folder/Arbitraries"

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

Defined in src/Folder/Arbitraries.ts:47

**Returns:** *Arbitrary‹[File](#file)›*

___

#### `Const` filesByType

▸ **filesByType**(): *Arbitrary‹[FilesByType](#filesbytype)›*

Defined in src/Folder/Arbitraries.ts:57

**Returns:** *Arbitrary‹[FilesByType](#filesbytype)›*

___

#### `Const` folder

▸ **folder**(): *Arbitrary‹[Folder](#interfaces_folder_index_foldermd)›*

Defined in src/Folder/Arbitraries.ts:29

**Returns:** *Arbitrary‹[Folder](#interfaces_folder_index_foldermd)›*

___

#### `Const` invalidFolderObject

▸ **invalidFolderObject**(): *Arbitrary‹Record‹string, any››*

Defined in src/Folder/Arbitraries.ts:5

**Returns:** *Arbitrary‹Record‹string, any››*

___

#### `Const` metadata

▸ **metadata**(): *Arbitrary‹[Metadata](#interfaces_folder_index_metadatamd)›*

Defined in src/Folder/Arbitraries.ts:32

**Returns:** *Arbitrary‹[Metadata](#interfaces_folder_index_metadatamd)›*

___

#### `Const` nonFolderObject

▸ **nonFolderObject**(): *Arbitrary‹unknown›*

Defined in src/Folder/Arbitraries.ts:15

**Returns:** *Arbitrary‹unknown›*


<a name="modules_folder_index_md"></a>

[functional-types](#globalsmd) › ["Folder/index"](#modules_folder_index_md)

## Module: "Folder/index"

### Index

#### Interfaces

* [Attributes](#interfaces_folder_index_attributesmd)
* [Folder](#interfaces_folder_index_foldermd)
* [Metadata](#interfaces_folder_index_metadatamd)
* [Reference](#interfaces_folder_index_referencemd)

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
* [isReference](#const-isreference)
* [make](#const-make)

### Type aliases

####  File

Ƭ **File**: *[Attributes](#interfaces_folder_index_attributesmd) & object*

Defined in src/Folder/index.ts:52

___

####  FilesByType

Ƭ **FilesByType**: *Record‹FT.DocumentType, [File](#file)[]›*

Defined in src/Folder/index.ts:54

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

Defined in src/Folder/index.ts:161

```haskell
getAttributesFromName :: String -> Either Attributes Error
```

##### Type declaration:

▸ (`name`: string): *E.Either‹Error, Omit‹[Attributes](#interfaces_folder_index_attributesmd), "type"››*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

### Functions

#### `Const` fromMetadata

▸ **fromMetadata**(`metadata`: [Metadata](#interfaces_folder_index_metadatamd)): *Left‹Error› | Right‹object›*

Defined in src/Folder/index.ts:184

```haskell
fromMetadata :: Metadata -> Either
```

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [Metadata](#interfaces_folder_index_metadatamd) |

**Returns:** *Left‹Error› | Right‹object›*

___

#### `Const` isFile

▸ **isFile**(`a`: unknown): *a is File*

Defined in src/Folder/index.ts:134

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

Defined in src/Folder/index.ts:142

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

Defined in src/Folder/index.ts:150

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

Defined in src/Folder/index.ts:61

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

Defined in src/Folder/index.ts:111

```haskell
isMetadata :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Metadata*

___

#### `Const` isReference

▸ **isReference**(`a`: unknown): *a is Reference*

Defined in src/Folder/index.ts:205

```haskell
isReference :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Reference*

___

#### `Const` make

▸ **make**(`name`: string): *(Anonymous function)*

Defined in src/Folder/index.ts:75

```haskell
make :: String -> Folder
```

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *(Anonymous function)*


<a name="modules_fp_ts_readerio_md"></a>

[functional-types](#globalsmd) › ["fp-ts/ReaderIO"](#modules_fp_ts_readerio_md)

## Module: "fp-ts/ReaderIO"

### Index

#### Type aliases

* [ReaderIO](#readerio)

#### Variables

* [chainIOK](#const-chainiok)
* [map](#const-map)

#### Functions

* [sequenceReaderIO](#const-sequencereaderio)

### Type aliases

####  ReaderIO

Ƭ **ReaderIO**: *Reader‹R, IO‹A››*

Defined in src/fp-ts/ReaderIO.ts:6

### Variables

#### `Const` chainIOK

• **chainIOK**: *function* = pipe(IO.chain, R.map)

Defined in src/fp-ts/ReaderIO.ts:14

##### Type declaration:

▸ <**A**, **B**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *IO‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ <**R**>(`fa`: [ReaderIO](#readerio)‹R, A›): *[ReaderIO](#readerio)‹R, B›*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`fa` | [ReaderIO](#readerio)‹R, A› |

___

#### `Const` map

• **map**: *function* = pipe(IO.map, R.map)

Defined in src/fp-ts/ReaderIO.ts:9

##### Type declaration:

▸ <**R**, **A**, **B**>(`f`: function): *function*

**Type parameters:**

▪ **R**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ (`fa`: [ReaderIO](#readerio)‹R, A›): *[ReaderIO](#readerio)‹R, B›*

**Parameters:**

Name | Type |
------ | ------ |
`fa` | [ReaderIO](#readerio)‹R, A› |

### Functions

#### `Const` sequenceReaderIO

▸ **sequenceReaderIO**<**R**, **A**>(`r`: [ReaderIO](#readerio)‹R, A›[]): *[ReaderIO](#readerio)‹R, A[]›*

Defined in src/fp-ts/ReaderIO.ts:19

**Type parameters:**

▪ **R**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`r` | [ReaderIO](#readerio)‹R, A›[] |

**Returns:** *[ReaderIO](#readerio)‹R, A[]›*


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


<a name="modules_json_md"></a>

[functional-types](#globalsmd) › ["Json"](#modules_json_md)

## Module: "Json"

### Index

#### Type aliases

* [Json](#json)

#### Functions

* [isJson](#const-isjson)

### Type aliases

####  Json

Ƭ **Json**: *Dictionary‹unknown›*

Defined in src/Json.ts:3

### Functions

#### `Const` isJson

▸ **isJson**(`a`: unknown): *a is Json*

Defined in src/Json.ts:6

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Json*


<a name="modules_label_md"></a>

[functional-types](#globalsmd) › ["Label"](#modules_label_md)

## Module: "Label"

### Index

#### Interfaces

* [Label](#interfaces_label_labelmd)

#### Type aliases

* [ColorMappings](#colormappings)

#### Variables

* [toColorMappings](#const-tocolormappings)

#### Functions

* [isLabel](#const-islabel)

### Type aliases

####  ColorMappings

Ƭ **ColorMappings**: *Record‹string, string›*

Defined in src/Label.ts:9

### Variables

#### `Const` toColorMappings

• **toColorMappings**: *function* = reduce(
  (acc: ColorMappings, label: Label) => assoc(label.id, label.color)(acc),
  {}
)

Defined in src/Label.ts:29

```haskell
toColorMappings :: [Label] -> ColorMappings
```

##### Type declaration:

▸ (`labels`: [Label](#interfaces_label_labelmd)[]): *[ColorMappings](#colormappings)*

**Parameters:**

Name | Type |
------ | ------ |
`labels` | [Label](#interfaces_label_labelmd)[] |

### Functions

#### `Const` isLabel

▸ **isLabel**(`a`: unknown): *a is Label*

Defined in src/Label.ts:16

```haskell
isLabel :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Label*


<a name="modules_schema_arbitraries_md"></a>

[functional-types](#globalsmd) › ["Schema/Arbitraries"](#modules_schema_arbitraries_md)

## Module: "Schema/Arbitraries"

### Index

#### Variables

* [regex](#const-regex)

#### Functions

* [fileMatcher](#const-filematcher)
* [fileType](#const-filetype)
* [gettable](#const-gettable)
* [gettables](#const-gettables)
* [invalidGettableObject](#const-invalidgettableobject)
* [invalidMatcherObject](#const-invalidmatcherobject)
* [invalidSchemaObject](#const-invalidschemaobject)
* [matcher](#const-matcher)
* [nonEmptyString](#const-nonemptystring)
* [nonGettableObject](#const-nongettableobject)
* [nonMatcherObject](#const-nonmatcherobject)
* [nonNumber](#const-nonnumber)
* [nonSchemaObject](#const-nonschemaobject)
* [nonString](#const-nonstring)
* [schema](#const-schema)
* [singletonFileMatcher](#const-singletonfilematcher)
* [versionedSchema](#const-versionedschema)

### Variables

#### `Const` regex

• **regex**: *nonEmptyString* = nonEmptyString

Defined in src/Schema/Arbitraries.ts:85

### Functions

#### `Const` fileMatcher

▸ **fileMatcher**(): *Arbitrary‹[FileMatcher](#interfaces_schema_index_filematchermd)›*

Defined in src/Schema/Arbitraries.ts:100

**Returns:** *Arbitrary‹[FileMatcher](#interfaces_schema_index_filematchermd)›*

___

#### `Const` fileType

▸ **fileType**(): *Arbitrary‹[Type](#type)›*

Defined in src/Schema/Arbitraries.ts:75

**Returns:** *Arbitrary‹[Type](#type)›*

___

#### `Const` gettable

▸ **gettable**(): *Arbitrary‹[Gettable](#interfaces_schema_index_gettablemd)›*

Defined in src/Schema/Arbitraries.ts:105

**Returns:** *Arbitrary‹[Gettable](#interfaces_schema_index_gettablemd)›*

___

#### `Const` gettables

▸ **gettables**(): *Arbitrary‹Record‹string, [Gettable](#interfaces_schema_index_gettablemd)››*

Defined in src/Schema/Arbitraries.ts:112

**Returns:** *Arbitrary‹Record‹string, [Gettable](#interfaces_schema_index_gettablemd)››*

___

#### `Const` invalidGettableObject

▸ **invalidGettableObject**(): *Arbitrary‹Dictionary‹unknown››*

Defined in src/Schema/Arbitraries.ts:40

**Returns:** *Arbitrary‹Dictionary‹unknown››*

___

#### `Const` invalidMatcherObject

▸ **invalidMatcherObject**(): *Arbitrary‹Dictionary‹unknown››*

Defined in src/Schema/Arbitraries.ts:20

**Returns:** *Arbitrary‹Dictionary‹unknown››*

___

#### `Const` invalidSchemaObject

▸ **invalidSchemaObject**(): *Arbitrary‹Dictionary‹unknown››*

Defined in src/Schema/Arbitraries.ts:60

**Returns:** *Arbitrary‹Dictionary‹unknown››*

___

#### `Const` matcher

▸ **matcher**(): *Arbitrary‹[Matcher](#interfaces_schema_index_matchermd)›*

Defined in src/Schema/Arbitraries.ts:87

**Returns:** *Arbitrary‹[Matcher](#interfaces_schema_index_matchermd)›*

___

#### `Const` nonEmptyString

▸ **nonEmptyString**(): *Arbitrary‹string›*

Defined in src/Schema/Arbitraries.ts:12

**Returns:** *Arbitrary‹string›*

___

#### `Const` nonGettableObject

▸ **nonGettableObject**(): *Arbitrary‹unknown›*

Defined in src/Schema/Arbitraries.ts:53

**Returns:** *Arbitrary‹unknown›*

___

#### `Const` nonMatcherObject

▸ **nonMatcherObject**(): *Arbitrary‹unknown›*

Defined in src/Schema/Arbitraries.ts:29

**Returns:** *Arbitrary‹unknown›*

___

#### `Const` nonNumber

▸ **nonNumber**(): *Arbitrary‹unknown›*

Defined in src/Schema/Arbitraries.ts:17

**Returns:** *Arbitrary‹unknown›*

___

#### `Const` nonSchemaObject

▸ **nonSchemaObject**(): *Arbitrary‹unknown›*

Defined in src/Schema/Arbitraries.ts:68

**Returns:** *Arbitrary‹unknown›*

___

#### `Const` nonString

▸ **nonString**(): *Arbitrary‹unknown›*

Defined in src/Schema/Arbitraries.ts:14

**Returns:** *Arbitrary‹unknown›*

___

#### `Const` schema

▸ **schema**(): *Arbitrary‹[Schema](#interfaces_schema_index_schemamd)›*

Defined in src/Schema/Arbitraries.ts:122

**Returns:** *Arbitrary‹[Schema](#interfaces_schema_index_schemamd)›*

___

#### `Const` singletonFileMatcher

▸ **singletonFileMatcher**(): *Arbitrary‹[FileMatcher](#interfaces_schema_index_filematchermd)›*

Defined in src/Schema/Arbitraries.ts:94

**Returns:** *Arbitrary‹[FileMatcher](#interfaces_schema_index_filematchermd)›*

___

#### `Const` versionedSchema

▸ **versionedSchema**(): *Arbitrary‹[VersionedSchema](#interfaces_schema_index_versionedschemamd)›*

Defined in src/Schema/Arbitraries.ts:130

**Returns:** *Arbitrary‹[VersionedSchema](#interfaces_schema_index_versionedschemamd)›*


<a name="modules_schema_index_md"></a>

[functional-types](#globalsmd) › ["Schema/index"](#modules_schema_index_md)

## Module: "Schema/index"

### Index

#### Interfaces

* [FileMatcher](#interfaces_schema_index_filematchermd)
* [Gettable](#interfaces_schema_index_gettablemd)
* [Matcher](#interfaces_schema_index_matchermd)
* [Schema](#interfaces_schema_index_schemamd)
* [VersionedSchema](#interfaces_schema_index_versionedschemamd)

#### Type aliases

* [Gettables](#gettables)
* [Type](#type)

#### Functions

* [isGettable](#const-isgettable)
* [isGettables](#const-isgettables)
* [isMatcher](#const-ismatcher)
* [isSchema](#const-isschema)
* [isVersionedSchema](#const-isversionedschema)
* [makeSchema](#const-makeschema)
* [toVersionedSchema](#const-toversionedschema)

### Type aliases

####  Gettables

Ƭ **Gettables**: *Dictionary‹[Gettable](#interfaces_schema_index_gettablemd)›*

Defined in src/Schema/index.ts:38

___

####  Type

Ƭ **Type**: *"pdf" | "excel" | "json" | "pdf-region" | "excel-sheet" | "json-child"*

Defined in src/Schema/index.ts:14

### Functions

#### `Const` isGettable

▸ **isGettable**(`a`: unknown): *a is Gettable*

Defined in src/Schema/index.ts:69

```haskell
isGettable -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Gettable*

___

#### `Const` isGettables

▸ **isGettables**(`a`: unknown): *a is Gettables*

Defined in src/Schema/index.ts:81

```haskell
isGettables -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Gettables*

___

#### `Const` isMatcher

▸ **isMatcher**(`a`: unknown): *a is Matcher*

Defined in src/Schema/index.ts:56

```haskell
isMatcher -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Matcher*

___

#### `Const` isSchema

▸ **isSchema**(`a`: unknown): *a is Schema*

Defined in src/Schema/index.ts:89

```haskell
isSchema -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Schema*

___

#### `Const` isVersionedSchema

▸ **isVersionedSchema**(`a`: unknown): *a is VersionedSchema*

Defined in src/Schema/index.ts:129

```haskell
isVersionedSchema :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is VersionedSchema*

___

#### `Const` makeSchema

▸ **makeSchema**(`gettables`: Dictionary‹[Gettable](#interfaces_schema_index_gettablemd)›): *object*

Defined in src/Schema/index.ts:101

```haskell
makeSchema :: Gettables -> Schema
```

**Parameters:**

Name | Type |
------ | ------ |
`gettables` | Dictionary‹[Gettable](#interfaces_schema_index_gettablemd)› |

**Returns:** *object*

* **created_at**: *Date* = date

* **gettables**: *Dictionary‹[Gettable](#interfaces_schema_index_gettablemd)›*

* **id**: *string* = getRandomId()

* **updated_at**: *Date* = date

___

#### `Const` toVersionedSchema

▸ **toVersionedSchema**(`schema`: [Schema](#interfaces_schema_index_schemamd)): *object*

Defined in src/Schema/index.ts:116

```haskell
toVersionedSchema :: Schema -> VersionedSchema
```

**Parameters:**

Name | Type |
------ | ------ |
`schema` | [Schema](#interfaces_schema_index_schemamd) |

**Returns:** *object*

* **id**: *string* = getRandomId()

* **schema_id**: *string* = schema.id


<a name="modules_string_md"></a>

[functional-types](#globalsmd) › ["String"](#modules_string_md)

## Module: "String"

### Index

#### Variables

* [getRandomId](#const-getrandomid)

### Variables

#### `Const` getRandomId

• **getRandomId**: *IO‹string›* = uuid

Defined in src/String.ts:9

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

* [BoundingBoxes](#boundingboxes)
* [BoundingBoxesByPage](#boundingboxesbypage)
* [TableAnnotationBase](#tableannotationbase)

#### Variables

* [toBoundingBoxes](#const-toboundingboxes)

#### Functions

* [isBoundingBoxes](#const-isboundingboxes)
* [isBoundingBoxesByPage](#const-isboundingboxesbypage)
* [isTableAnnotation](#const-istableannotation)
* [isTableAnnotationBase](#const-istableannotationbase)
* [make](#const-make)

### Type aliases

####  BoundingBoxes

Ƭ **BoundingBoxes**: *Dictionary‹[WithHeader](#withheader)‹[LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)› | [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)›*

Defined in src/TableAnnotation.ts:18

___

####  BoundingBoxesByPage

Ƭ **BoundingBoxesByPage**: *[BoundingBoxes](#boundingboxes)[]*

Defined in src/TableAnnotation.ts:22

___

####  TableAnnotationBase

Ƭ **TableAnnotationBase**: *Pick‹[TableAnnotation](#interfaces_tableannotation_tableannotationmd), "file" | "boundingBoxesByPage"›*

Defined in src/TableAnnotation.ts:32

### Variables

#### `Const` toBoundingBoxes

• **toBoundingBoxes**: *function* = reduce(
  (acc: BoundingBoxes, value) => assoc(value.id, value, acc),
  {}
)

Defined in src/TableAnnotation.ts:86

```haskell
toBoundingBoxes :: [BoundingBox] -> BoundingBoxes
```

##### Type declaration:

▸ (`boundingBoxes`: Array‹[WithHeader](#withheader)‹[LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)› | [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)›): *[BoundingBoxes](#boundingboxes)*

**Parameters:**

Name | Type |
------ | ------ |
`boundingBoxes` | Array‹[WithHeader](#withheader)‹[LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)› &#124; [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)› |

### Functions

#### `Const` isBoundingBoxes

▸ **isBoundingBoxes**(`a`: unknown): *a is BoundingBoxes*

Defined in src/TableAnnotation.ts:42

```haskell
isBoundingBoxes :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is BoundingBoxes*

___

#### `Const` isBoundingBoxesByPage

▸ **isBoundingBoxesByPage**(`a`: unknown): *a is BoundingBoxesByPage*

Defined in src/TableAnnotation.ts:53

```haskell
isBoundingBoxesByPage :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is BoundingBoxesByPage*

___

#### `Const` isTableAnnotation

▸ **isTableAnnotation**(`a`: unknown): *a is TableAnnotation*

Defined in src/TableAnnotation.ts:73

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

Defined in src/TableAnnotation.ts:61

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

Defined in src/TableAnnotation.ts:100

```haskell
make :: TableAnnotationBase -> IO TableAnnotation
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`boundingBoxesByPage` | Dictionary‹[LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd) &#124; [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd) & object &#124; [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd) & object›[] |
`file` | string |

**Returns:** *(Anonymous function)*


<a name="modules_textannotation_md"></a>

[functional-types](#globalsmd) › ["TextAnnotation"](#modules_textannotation_md)

## Module: "TextAnnotation"

### Index

#### Interfaces

* [Page](#interfaces_textannotation_pagemd)
* [Paragraph](#interfaces_textannotation_paragraphmd)
* [TextAnnotation](#interfaces_textannotation_textannotationmd)
* [Word](#interfaces_textannotation_wordmd)

#### Type aliases

* [BreakType](#breaktype)
* [ParagraphsById](#paragraphsbyid)
* [WordsById](#wordsbyid)

#### Variables

* [breakTypes](#const-breaktypes)
* [fromAnnotateImageResponse](#const-fromannotateimageresponse)
* [fromVisionPage](#const-fromvisionpage)
* [getBreakTypeFromSymbols](#const-getbreaktypefromsymbols)
* [getStringFromBreakType](#const-getstringfrombreaktype)
* [getTextFromWords](#const-gettextfromwords)

#### Functions

* [fromAnnotateImageRequest](#const-fromannotateimagerequest)
* [fromVisionParagraph](#const-fromvisionparagraph)
* [fromVisionWord](#const-fromvisionword)
* [isBreakType](#const-isbreaktype)
* [isPage](#const-ispage)
* [isPages](#const-ispages)
* [isParagraph](#const-isparagraph)
* [isParagraphsById](#const-isparagraphsbyid)
* [isTextAnnotation](#const-istextannotation)
* [isWord](#const-isword)
* [isWordArray](#const-iswordarray)
* [isWordsById](#const-iswordsbyid)

### Type aliases

####  BreakType

Ƭ **BreakType**: *"UNKNOWN" | "SPACE" | "SURE_SPACE" | "EOL_SURE_SPACE" | "HYPHEN" | "LINE_BREAK"*

Defined in src/TextAnnotation.ts:32

___

####  ParagraphsById

Ƭ **ParagraphsById**: *Dictionary‹[Paragraph](#interfaces_textannotation_paragraphmd)›*

Defined in src/TextAnnotation.ts:66

___

####  WordsById

Ƭ **WordsById**: *Dictionary‹[Word](#interfaces_textannotation_wordmd)›*

Defined in src/TextAnnotation.ts:64

### Variables

#### `Const` breakTypes

• **breakTypes**: *[BreakType](#breaktype)[]* = [
  'UNKNOWN',
  'SPACE',
  'SURE_SPACE', // Sure space (very wide)
  'EOL_SURE_SPACE', // Line-wrapping break
  'HYPHEN', // End-line hyphen that is not present in text
  'LINE_BREAK',
]

Defined in src/TextAnnotation.ts:40

___

#### `Const` fromAnnotateImageResponse

• **fromAnnotateImageResponse**: *function* = pipe(
  Vision.getPagesFromAnnotateImageResponse,
  map(fromVisionPage),
  A.array.sequence(IO.io)
)

Defined in src/TextAnnotation.ts:286

```haskell
fromAnnotateImageResponse :: AnnotateImageResponse -> IO [Page]
```

##### Type declaration:

▸ (`response`: [AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd)): *IO‹[Page](#interfaces_textannotation_pagemd)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd) |

___

#### `Const` fromVisionPage

• **fromVisionPage**: *function* = pipe(
  Vision.getParagraphsFromPage,
  map(fromVisionParagraph),
  A.array.sequence(IO.io),
  IO.map(
    reduce<Page, Page>((acc: Page, page: Page) => mergeDeepLeft(acc, page), {
      wordsById: {},
      paragraphsById: {},
    })
  )
)

Defined in src/TextAnnotation.ts:269

```haskell
fromVisionPage :: VisionPage -> IO Page
```

##### Type declaration:

▸ (`page`: [Page](#interfaces_vision_pagemd)): *IO‹[Page](#interfaces_textannotation_pagemd)›*

**Parameters:**

Name | Type |
------ | ------ |
`page` | [Page](#interfaces_vision_pagemd) |

___

#### `Const` getBreakTypeFromSymbols

• **getBreakTypeFromSymbols**: *function* = pipe(
  last,
  path(['property', 'detectedBreak', 'type']),
  O.fromPredicate(isBreakType),
  O.getOrElse(() => 'UNKNOWN')
)

Defined in src/TextAnnotation.ts:178

```haskell
getBreakTypeFromSymbols :: [VisionSymbol] -> DetectedBreak
```

##### Type declaration:

▸ (`symbols`: [TextSymbol](#interfaces_vision_textsymbolmd)[]): *[BreakType](#breaktype)*

**Parameters:**

Name | Type |
------ | ------ |
`symbols` | [TextSymbol](#interfaces_vision_textsymbolmd)[] |

___

#### `Const` getStringFromBreakType

• **getStringFromBreakType**: *function* = prop(
  __,
  breakTypeMappings
)

Defined in src/TextAnnotation.ts:330

```haskell
getStringFromBreakType :: BreakType -> String
```

##### Type declaration:

▸ (`breakType`: [BreakType](#breaktype)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`breakType` | [BreakType](#breaktype) |

___

#### `Const` getTextFromWords

• **getTextFromWords**: *function* = pipe(
  reduce(
    (acc: string, word: Word) =>
      acc + word.text + getStringFromBreakType(word.breakType),
    ''
  ),
  replace(/\n$/, '')
)

Defined in src/TextAnnotation.ts:340

```haskell
getTextFromWords :: [Word] -> String
```

##### Type declaration:

▸ (`words`: [Word](#interfaces_textannotation_wordmd)[]): *string*

**Parameters:**

Name | Type |
------ | ------ |
`words` | [Word](#interfaces_textannotation_wordmd)[] |

### Functions

#### `Const` fromAnnotateImageRequest

▸ **fromAnnotateImageRequest**(`request`: [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd)): *(Anonymous function)*

Defined in src/TextAnnotation.ts:301

```haskell
fromAnnotateImageRequest :: AsyncAnnotateFileRequest -> IO [Page]
```

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` fromVisionParagraph

▸ **fromVisionParagraph**(`visionParagraph`: [Paragraph](#interfaces_vision_paragraphmd)): *(Anonymous function)*

Defined in src/TextAnnotation.ts:232

```haskell
fromVisionParagraph :: VisionParagraph -> IO Page
```

**Parameters:**

Name | Type |
------ | ------ |
`visionParagraph` | [Paragraph](#interfaces_vision_paragraphmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` fromVisionWord

▸ **fromVisionWord**(`word`: [Word](#interfaces_vision_wordmd)): *(Anonymous function)*

Defined in src/TextAnnotation.ts:213

```haskell
fromVisionWord :: VisionWord -> Word
```

**Parameters:**

Name | Type |
------ | ------ |
`word` | [Word](#interfaces_vision_wordmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` isBreakType

▸ **isBreakType**(`a`: unknown): *a is BreakType*

Defined in src/TextAnnotation.ts:86

```haskell
isBreakType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is BreakType*

___

#### `Const` isPage

▸ **isPage**(`a`: unknown): *a is Page*

Defined in src/TextAnnotation.ts:145

```haskell
isPage :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Page*

___

#### `Const` isPages

▸ **isPages**(`a`: unknown): *a is Page*

Defined in src/TextAnnotation.ts:156

```haskell
isPages :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Page*

___

#### `Const` isParagraph

▸ **isParagraph**(`a`: unknown): *a is Paragraph*

Defined in src/TextAnnotation.ts:117

```haskell
isParagraph :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Paragraph*

___

#### `Const` isParagraphsById

▸ **isParagraphsById**(`a`: unknown): *a is ParagraphsById*

Defined in src/TextAnnotation.ts:137

```haskell
isWordsById :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ParagraphsById*

___

#### `Const` isTextAnnotation

▸ **isTextAnnotation**(`a`: unknown): *a is TextAnnotation*

Defined in src/TextAnnotation.ts:164

```haskell
isTextAnnotation :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is TextAnnotation*

___

#### `Const` isWord

▸ **isWord**(`a`: unknown): *a is Word*

Defined in src/TextAnnotation.ts:94

```haskell
isWord :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Word*

___

#### `Const` isWordArray

▸ **isWordArray**(`a`: unknown): *a is Word[]*

Defined in src/TextAnnotation.ts:109

```haskell
isWordArray :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Word[]*

___

#### `Const` isWordsById

▸ **isWordsById**(`a`: unknown): *a is WordsById*

Defined in src/TextAnnotation.ts:129

```haskell
isWordsById :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is WordsById*


<a name="modules_vertex_arbitraries_md"></a>

[functional-types](#globalsmd) › ["Vertex/Arbitraries"](#modules_vertex_arbitraries_md)

## Module: "Vertex/Arbitraries"

### Index

#### Functions

* [boundingBox](#const-boundingbox)
* [overlaps](#const-overlaps)
* [poly](#const-poly)
* [separates](#const-separates)
* [vertex](#const-vertex)
* [withHeaderArguments](#const-withheaderarguments)

### Functions

#### `Const` boundingBox

▸ **boundingBox**(): *Arbitrary‹[BoundingBox](#interfaces_vertex_index_boundingboxmd)›*

Defined in src/Vertex/Arbitraries.ts:38

**Returns:** *Arbitrary‹[BoundingBox](#interfaces_vertex_index_boundingboxmd)›*

___

#### `Const` overlaps

▸ **overlaps**(): *Arbitrary‹[[Poly](#poly), [Poly](#poly)]›*

Defined in src/Vertex/Arbitraries.ts:31

**Returns:** *Arbitrary‹[[Poly](#poly), [Poly](#poly)]›*

___

#### `Const` poly

▸ **poly**(): *Arbitrary‹[Poly](#poly)›*

Defined in src/Vertex/Arbitraries.ts:21

**Returns:** *Arbitrary‹[Poly](#poly)›*

___

#### `Const` separates

▸ **separates**(): *Arbitrary‹[[Poly](#poly), [Poly](#poly)]›*

Defined in src/Vertex/Arbitraries.ts:24

**Returns:** *Arbitrary‹[[Poly](#poly), [Poly](#poly)]›*

___

#### `Const` vertex

▸ **vertex**(): *Arbitrary‹[Vertex](#interfaces_vertex_index_vertexmd)›*

Defined in src/Vertex/Arbitraries.ts:15

**Returns:** *Arbitrary‹[Vertex](#interfaces_vertex_index_vertexmd)›*

___

#### `Const` withHeaderArguments

▸ **withHeaderArguments**(): *Arbitrary‹object›*

Defined in src/Vertex/Arbitraries.ts:50

**Returns:** *Arbitrary‹object›*


<a name="modules_vertex_index_md"></a>

[functional-types](#globalsmd) › ["Vertex/index"](#modules_vertex_index_md)

## Module: "Vertex/index"

### Index

#### Interfaces

* [BoundingBox](#interfaces_vertex_index_boundingboxmd)
* [Corners](#interfaces_vertex_index_cornersmd)
* [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)
* [Rectangle](#interfaces_vertex_index_rectanglemd)
* [Vertex](#interfaces_vertex_index_vertexmd)

#### Type aliases

* [Line](#line)
* [Poly](#poly)
* [WithColumns](#withcolumns)
* [WithHeader](#withheader)
* [WithHeaderColumn](#withheadercolumn)
* [WithHeaderRow](#withheaderrow)
* [WithHeaders](#withheaders)
* [WithRows](#withrows)

#### Variables

* [areaOf](#const-areaof)
* [getBottomLeft](#const-getbottomleft)
* [getBottomRight](#const-getbottomright)
* [getCornersFromPoly](#const-getcornersfrompoly)
* [getTopLeft](#const-gettopleft)
* [getTopRight](#const-gettopright)
* [getX](#const-getx)
* [getXs](#const-getxs)
* [getY](#const-gety)
* [getYs](#const-getys)
* [heightOf](#const-heightof)
* [widthOf](#const-widthof)

#### Functions

* [append](#const-append)
* [containedBy](#const-containedby)
* [contains](#const-contains)
* [getChildlessBoundingBoxes](#const-getchildlessboundingboxes)
* [hasColumns](#const-hascolumns)
* [hasHeader](#const-hasheader)
* [hasHeaderColumn](#const-hasheadercolumn)
* [hasHeaderRow](#const-hasheaderrow)
* [hasHeaders](#const-hasheaders)
* [hasRows](#const-hasrows)
* [hasRowsOrColumns](#const-hasrowsorcolumns)
* [intersects](#const-intersects)
* [isBoundingBox](#const-isboundingbox)
* [isLabeledBoundingBox](#const-islabeledboundingbox)
* [isLine](#const-isline)
* [isPoly](#const-ispoly)
* [isVertex](#const-isvertex)
* [lengthOf](#const-lengthof)
* [makeBoundingBox](#const-makeboundingbox)
* [makeLabeledBoundingBox](#const-makelabeledboundingbox)
* [makeLine](#const-makeline)
* [makePoly](#const-makepoly)
* [makeVertex](#const-makevertex)
* [ratioContainedBy](#const-ratiocontainedby)
* [ratioContaining](#const-ratiocontaining)
* [sortPoly](#const-sortpoly)
* [splitByXs](#const-splitbyxs)
* [splitByYs](#const-splitbyys)
* [toPoly](#const-topoly)
* [toRectangle](#const-torectangle)
* [withHeader](#const-withheader)
* [withHeaderColumn](#const-withheadercolumn)
* [withHeaderRow](#const-withheaderrow)

### Type aliases

####  Line

Ƭ **Line**: *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

Defined in src/Vertex/index.ts:49

___

####  Poly

Ƭ **Poly**: *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

Defined in src/Vertex/index.ts:54

[TopLeft, TopRight, BottomLeft, BottomRight]

___

####  WithColumns

Ƭ **WithColumns**: *A & object*

Defined in src/Vertex/index.ts:66

___

####  WithHeader

Ƭ **WithHeader**: *[WithHeaderRow](#withheaderrow)‹A› | [WithHeaderColumn](#withheadercolumn)‹A›*

Defined in src/Vertex/index.ts:78

___

####  WithHeaderColumn

Ƭ **WithHeaderColumn**: *A & object*

Defined in src/Vertex/index.ts:74

___

####  WithHeaderRow

Ƭ **WithHeaderRow**: *A & object*

Defined in src/Vertex/index.ts:70

___

####  WithHeaders

Ƭ **WithHeaders**: *[WithHeaderRow](#withheaderrow)‹A› & [WithHeaderColumn](#withheadercolumn)‹A›*

Defined in src/Vertex/index.ts:82

___

####  WithRows

Ƭ **WithRows**: *A & object*

Defined in src/Vertex/index.ts:62

### Variables

#### `Const` areaOf

• **areaOf**: *function* = converge(multiply, [
  widthOf,
  heightOf,
])

Defined in src/Vertex/index.ts:600

```haskell
areaOf :: Poly -> Float
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` getBottomLeft

• **getBottomLeft**: *function* = nth(2)

Defined in src/Vertex/index.ts:474

```haskell
getBottomLeft :: Poly -> Vertex
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *[Vertex](#interfaces_vertex_index_vertexmd)*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` getBottomRight

• **getBottomRight**: *function* = nth(3)

Defined in src/Vertex/index.ts:481

```haskell
getBottomRight :: Poly -> Vertex
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *[Vertex](#interfaces_vertex_index_vertexmd)*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` getCornersFromPoly

• **getCornersFromPoly**: *function* = applySpec({
  start: head,
  end: last,
})

Defined in src/Vertex/index.ts:323

```haskell
getCornersFromPoly :: Poly -> Corners
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *[Corners](#interfaces_vertex_index_cornersmd)*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` getTopLeft

• **getTopLeft**: *function* = nth(0)

Defined in src/Vertex/index.ts:460

```haskell
getTopLeft :: Poly -> Vertex
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *[Vertex](#interfaces_vertex_index_vertexmd)*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` getTopRight

• **getTopRight**: *function* = nth(1)

Defined in src/Vertex/index.ts:467

```haskell
getTopRight :: Poly -> Vertex
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *[Vertex](#interfaces_vertex_index_vertexmd)*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` getX

• **getX**: *function* = pipe(head, prop<'x', number>('x'))

Defined in src/Vertex/index.ts:391

```haskell
getX :: Line -> Float
```

##### Type declaration:

▸ (`line`: [Line](#line)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Line](#line) |

___

#### `Const` getXs

• **getXs**: *function* = map(getX)

Defined in src/Vertex/index.ts:405

```haskell
getXs :: [Line] -> [Float]
```

##### Type declaration:

▸ (`lines`: [Line](#line)[]): *number[]*

**Parameters:**

Name | Type |
------ | ------ |
`lines` | [Line](#line)[] |

___

#### `Const` getY

• **getY**: *function* = pipe(head, prop<'y', number>('y'))

Defined in src/Vertex/index.ts:384

```haskell
getY :: Line -> Float
```

##### Type declaration:

▸ (`line`: [Line](#line)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`line` | [Line](#line) |

___

#### `Const` getYs

• **getYs**: *function* = map(getY)

Defined in src/Vertex/index.ts:398

```haskell
getYs :: [Line] -> [Float]
```

##### Type declaration:

▸ (`lines`: [Line](#line)[]): *number[]*

**Parameters:**

Name | Type |
------ | ------ |
`lines` | [Line](#line)[] |

___

#### `Const` heightOf

• **heightOf**: *function* = converge(subtract, [
  pipe(getBottomLeft, prop('y')),
  pipe(getTopLeft, prop('y')),
])

Defined in src/Vertex/index.ts:590

```haskell
heightOf :: Poly -> Float
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` widthOf

• **widthOf**: *function* = converge(subtract, [
  pipe(getTopRight, prop('x')),
  pipe(getTopLeft, prop('x')),
])

Defined in src/Vertex/index.ts:580

```haskell
widthOf :: Poly -> Float
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

### Functions

#### `Const` append

▸ **append**<**A**>(`boundingBox`: A): *(Anonymous function)*

Defined in src/Vertex/index.ts:443

```haskell
append :: BoundingBox -> ([Float], [Float]) -> BoundingBox
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`boundingBox` | A |

**Returns:** *(Anonymous function)*

___

#### `Const` containedBy

▸ **containedBy**(`poly`: [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)], `threshold`: number): *Reader‹[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)], boolean›*

Defined in src/Vertex/index.ts:699

```haskell
containedBy :: Poly -> Reader Poly bool
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`poly` | [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)] | - |
`threshold` | number | 0.9 |

**Returns:** *Reader‹[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)], boolean›*

___

#### `Const` contains

▸ **contains**(`poly`: [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)], `threshold`: number): *Reader‹[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)], boolean›*

Defined in src/Vertex/index.ts:710

```haskell
contains :: Poly -> Reader Poly bool
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`poly` | [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)] | - |
`threshold` | number | 0.9 |

**Returns:** *Reader‹[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)], boolean›*

___

#### `Const` getChildlessBoundingBoxes

▸ **getChildlessBoundingBoxes**(`boundingBoxes`: [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)[]): *any[]*

Defined in src/Vertex/index.ts:754

```haskell
getChildlessBoundingBoxes :: [BoundingBox] -> [BoundingBox]
```

**Parameters:**

Name | Type |
------ | ------ |
`boundingBoxes` | [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)[] |

**Returns:** *any[]*

___

#### `Const` hasColumns

▸ **hasColumns**<**A**>(`a`: A): *a is WithColumns<A>*

Defined in src/Vertex/index.ts:175

```haskell
hasColumns :: a -> bool
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *a is WithColumns<A>*

___

#### `Const` hasHeader

▸ **hasHeader**<**A**>(`a`: A): *a is WithHeader<A>*

Defined in src/Vertex/index.ts:210

```haskell
hasHeader :: a -> bool
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *a is WithHeader<A>*

___

#### `Const` hasHeaderColumn

▸ **hasHeaderColumn**<**A**>(`a`: A): *a is WithHeaderColumn<A>*

Defined in src/Vertex/index.ts:201

```haskell
hasHeaderColumn :: a -> bool
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *a is WithHeaderColumn<A>*

___

#### `Const` hasHeaderRow

▸ **hasHeaderRow**<**A**>(`a`: A): *a is WithHeaderRow<A>*

Defined in src/Vertex/index.ts:192

```haskell
hasHeaderRow :: a -> bool
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *a is WithHeaderRow<A>*

___

#### `Const` hasHeaders

▸ **hasHeaders**<**A**>(`a`: A): *a is WithHeaders<A>*

Defined in src/Vertex/index.ts:218

```haskell
hasHeaders :: a -> bool
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *a is WithHeaders<A>*

___

#### `Const` hasRows

▸ **hasRows**<**A**>(`a`: A): *a is WithRows<A>*

Defined in src/Vertex/index.ts:167

```haskell
hasRows :: a -> bool
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *a is WithRows<A>*

___

#### `Const` hasRowsOrColumns

▸ **hasRowsOrColumns**<**A**>(`a`: A): *a is WithRows<A> | WithColumns<A>*

Defined in src/Vertex/index.ts:183

```haskell
hasRowsOrColumns :: a -> bool
```

**Type parameters:**

▪ **A**: *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *a is WithRows<A> | WithColumns<A>*

___

#### `Const` intersects

▸ **intersects**(`p0`: [Poly](#poly)): *(Anonymous function)*

Defined in src/Vertex/index.ts:645

```haskell
intersects :: Poly -> Reader Poly Poly
```

**Parameters:**

Name | Type |
------ | ------ |
`p0` | [Poly](#poly) |

**Returns:** *(Anonymous function)*

___

#### `Const` isBoundingBox

▸ **isBoundingBox**(`a`: unknown): *a is BoundingBox*

Defined in src/Vertex/index.ts:155

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

Defined in src/Vertex/index.ts:412

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

Defined in src/Vertex/index.ts:115

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

Defined in src/Vertex/index.ts:127

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

Defined in src/Vertex/index.ts:107

```haskell
isVertex :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Vertex*

___

#### `Const` lengthOf

▸ **lengthOf**(`__namedParameters`: [any, any]): *number*

Defined in src/Vertex/index.ts:610

```haskell
lengthOf :: Line -> Float
```

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | [any, any] |

**Returns:** *number*

___

#### `Const` makeBoundingBox

▸ **makeBoundingBox**(`poly`: [Poly](#poly), `ys`: number[], `xs`: number[]): *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

Defined in src/Vertex/index.ts:365

```haskell
makeBoundingBox :: (Poly, [Float], [Float]) -> BoundingBox
```

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |
`ys` | number[] |
`xs` | number[] |

**Returns:** *[BoundingBox](#interfaces_vertex_index_boundingboxmd)*

___

#### `Const` makeLabeledBoundingBox

▸ **makeLabeledBoundingBox**(`id`: string, `label`: string, `poly`: [Poly](#poly), `ys`: number[], `xs`: number[]): *[LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)*

Defined in src/Vertex/index.ts:420

```haskell
makeLabeledBoundingBox :: (String, String, Poly, [Float], [Float]) -> LabeledBoundingBox
```

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`label` | string |
`poly` | [Poly](#poly) |
`ys` | number[] |
`xs` | number[] |

**Returns:** *[LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)*

___

#### `Const` makeLine

▸ **makeLine**(`x0`: number, `y0`: number, `x1`: number, `y1`: number): *[Line](#line)*

Defined in src/Vertex/index.ts:233

```haskell
makeVertex :: (Float, Float, Float, Float) -> Line
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

Defined in src/Vertex/index.ts:298

```haskell
makePoly :: (Float, Float, Float, Float) -> Poly
```

**Parameters:**

Name | Type |
------ | ------ |
`...coords` | [number, number, number, number] |

**Returns:** *[Poly](#poly)*

___

#### `Const` makeVertex

▸ **makeVertex**(`x`: number, `y`: number): *[Vertex](#interfaces_vertex_index_vertexmd)*

Defined in src/Vertex/index.ts:226

```haskell
makeVertex :: (Float, Float) -> Vertex
```

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *[Vertex](#interfaces_vertex_index_vertexmd)*

___

#### `Const` ratioContainedBy

▸ **ratioContainedBy**(`p0`: [Poly](#poly)): *function*

Defined in src/Vertex/index.ts:671

```haskell
ratioContainedBy :: Poly -> Reader Poly Float
```

**Parameters:**

Name | Type |
------ | ------ |
`p0` | [Poly](#poly) |

**Returns:** *function*

▸ (...`a`: keyof any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | keyof any[] |

___

#### `Const` ratioContaining

▸ **ratioContaining**(`p0`: [Poly](#poly)): *(Anonymous function)*

Defined in src/Vertex/index.ts:687

```haskell
ratioContaining :: Poly -> Reader Poly Float
```

**Parameters:**

Name | Type |
------ | ------ |
`p0` | [Poly](#poly) |

**Returns:** *(Anonymous function)*

___

#### `Const` sortPoly

▸ **sortPoly**(`__namedParameters`: [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]): *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

Defined in src/Vertex/index.ts:310

```haskell
sortPoly :: Poly -> Poly
```

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)] |

**Returns:** *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

___

#### `Const` splitByXs

▸ **splitByXs**(`xs`: number[]): *(Anonymous function)*

Defined in src/Vertex/index.ts:735

```haskell
splitByXs :: [number] -> Reader Poly [Poly]
```

**Parameters:**

Name | Type |
------ | ------ |
`xs` | number[] |

**Returns:** *(Anonymous function)*

___

#### `Const` splitByYs

▸ **splitByYs**(`ys`: number[]): *(Anonymous function)*

Defined in src/Vertex/index.ts:718

```haskell
splitByYs :: [number] -> Reader Poly [Poly]
```

**Parameters:**

Name | Type |
------ | ------ |
`ys` | number[] |

**Returns:** *(Anonymous function)*

___

#### `Const` toPoly

▸ **toPoly**(`__namedParameters`: object): *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

Defined in src/Vertex/index.ts:637

```haskell
toPoly :: Rectangle -> Poly
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`x0` | number |
`x1` | number |
`y0` | number |
`y1` | number |

**Returns:** *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

___

#### `Const` toRectangle

▸ **toRectangle**(`__namedParameters`: [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]): *object*

Defined in src/Vertex/index.ts:620

```haskell
toRectangle :: Poly -> Rectangle
```

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)] |

**Returns:** *object*

* **x0**: *number* = topLeft.x

* **x1**: *number* = bottomRight.x

* **y0**: *number* = topRight.y

* **y1**: *number* = bottomLeft.y

___

#### `Const` withHeader

▸ **withHeader**(`vertex`: [Vertex](#interfaces_vertex_index_vertexmd)): *(Anonymous function)*

Defined in src/Vertex/index.ts:565

```haskell
withHeader :: Vertex -> ReaderEither BoundingBox (WithHeader BoundingBox) BoundingBox
```

**Parameters:**

Name | Type |
------ | ------ |
`vertex` | [Vertex](#interfaces_vertex_index_vertexmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` withHeaderColumn

▸ **withHeaderColumn**(`x`: number): *(Anonymous function)*

Defined in src/Vertex/index.ts:528

```haskell
withHeaderColumn :: Float -> ReaderEither BoundingBox BoundingBox (WithHeaderColumn BoundingBox)
```

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *(Anonymous function)*

___

#### `Const` withHeaderRow

▸ **withHeaderRow**(`y`: number): *(Anonymous function)*

Defined in src/Vertex/index.ts:490

```haskell
withHeaderRow :: Float -> ReaderEither BoundingBox BoundingBox (WithHeaderRow BoundingBox)
```

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

**Returns:** *(Anonymous function)*


<a name="modules_vision_md"></a>

[functional-types](#globalsmd) › ["Vision"](#modules_vision_md)

## Module: "Vision"

### Index

#### Interfaces

* [AnnotateImageRequest](#interfaces_vision_annotateimagerequestmd)
* [AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd)
* [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd)
* [Block](#interfaces_vision_blockmd)
* [BoundingPoly](#interfaces_vision_boundingpolymd)
* [DetectedBreak](#interfaces_vision_detectedbreakmd)
* [DetectedLanguage](#interfaces_vision_detectedlanguagemd)
* [EntityAnnotation](#interfaces_vision_entityannotationmd)
* [Feature](#interfaces_vision_featuremd)
* [GcsDestination](#interfaces_vision_gcsdestinationmd)
* [GcsSource](#interfaces_vision_gcssourcemd)
* [Image](#interfaces_vision_imagemd)
* [ImageContext](#interfaces_vision_imagecontextmd)
* [ImageSource](#interfaces_vision_imagesourcemd)
* [InputConfig](#interfaces_vision_inputconfigmd)
* [LatLng](#interfaces_vision_latlngmd)
* [LocationInfo](#interfaces_vision_locationinfomd)
* [NormalizedVertex](#interfaces_vision_normalizedvertexmd)
* [OutputConfig](#interfaces_vision_outputconfigmd)
* [Page](#interfaces_vision_pagemd)
* [Paragraph](#interfaces_vision_paragraphmd)
* [Property](#interfaces_vision_propertymd)
* [TextAnnotation](#interfaces_vision_textannotationmd)
* [TextProperty](#interfaces_vision_textpropertymd)
* [TextSymbol](#interfaces_vision_textsymbolmd)
* [Vertex](#interfaces_vision_vertexmd)
* [Word](#interfaces_vision_wordmd)

#### Type aliases

* [BlockType](#blocktype)
* [BreakType](#breaktype)
* [Type](#type)

#### Variables

* [getBlocksFromPage](#const-getblocksfrompage)
* [getFileIdFromAnnotateImageRequest](#const-getfileidfromannotateimagerequest)
* [getPagesFromAnnotateImageRequest](#const-getpagesfromannotateimagerequest)
* [getPagesFromAnnotateImageResponse](#const-getpagesfromannotateimageresponse)
* [getParagraphsFromBlock](#const-getparagraphsfromblock)
* [getParagraphsFromPage](#const-getparagraphsfrompage)
* [getSymbolsFromWord](#const-getsymbolsfromword)
* [getTextFromSymbol](#const-gettextfromsymbol)
* [getTextFromWord](#const-gettextfromword)
* [getWordsFromPage](#const-getwordsfrompage)
* [getWordsFromParagraph](#const-getwordsfromparagraph)

### Type aliases

####  BlockType

Ƭ **BlockType**: *"UNKNOWN" | "TEXT" | "TABLE" | "PICTURE" | "RULER" | "BARCODE" | string*

Defined in src/Vision.ts:163

___

####  BreakType

Ƭ **BreakType**: *"UNKNOWN" | "SPACE" | "SURE_SPACE" | "EOL_SURE_SPACE" | "HYPHEN" | "LINE_BREAK"*

Defined in src/Vision.ts:202

___

####  Type

Ƭ **Type**: *string*

Defined in src/Vision.ts:82

### Variables

#### `Const` getBlocksFromPage

• **getBlocksFromPage**: *function* = R.prop('blocks')

Defined in src/Vision.ts:305

```haskell
getBlocksFromPage :: Page -> [Block]
```

##### Type declaration:

▸ (`page`: [Page](#interfaces_vision_pagemd)): *[Block](#interfaces_vision_blockmd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`page` | [Page](#interfaces_vision_pagemd) |

___

#### `Const` getFileIdFromAnnotateImageRequest

• **getFileIdFromAnnotateImageRequest**: *function* = pipe(
  path<string>(['inputConfig', 'gcsSource', 'uri']),
  split('/'),
  takeLast(2) as (segments: string[]) => string[],
  join('/')
)

Defined in src/Vision.ts:360

```haskell
getFileIdFromAnnotateImageRequest :: AnnotateImageRequest -> String
```

##### Type declaration:

▸ (`request`: [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd) |

___

#### `Const` getPagesFromAnnotateImageRequest

• **getPagesFromAnnotateImageRequest**: *function* = pipe(
  prop('responses') as (
    request: AsyncAnnotateFileRequest
  ) => AsyncAnnotateFileRequest['responses'],
  defaultTo([]),
  map(getPagesFromAnnotateImageResponse),
  unnest
)

Defined in src/Vision.ts:344

```haskell
getPagesFromAnnotateImageRequest :: AnnotateImageRequest -> [Page]
```

##### Type declaration:

▸ (`request`: [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd)): *[Page](#interfaces_vision_pagemd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AsyncAnnotateFileRequest](#interfaces_vision_asyncannotatefilerequestmd) |

___

#### `Const` getPagesFromAnnotateImageResponse

• **getPagesFromAnnotateImageResponse**: *function* = pipe(
  path(['fullTextAnnotation', 'pages']),
  defaultTo([]) as (pages: Page[] | undefined) => Page[]
)

Defined in src/Vision.ts:332

```haskell
getPagesFromAnnotateImageResponse :: AnnotateImageResponse -> [Page]
```

##### Type declaration:

▸ (`response`: [AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd)): *[Page](#interfaces_vision_pagemd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [AnnotateImageResponse](#interfaces_vision_annotateimageresponsemd) |

___

#### `Const` getParagraphsFromBlock

• **getParagraphsFromBlock**: *function* = R.prop(
  'paragraphs'
)

Defined in src/Vision.ts:296

```haskell
getParagraphsFromBlock :: Block -> [Paragraph]
```

##### Type declaration:

▸ (`block`: [Block](#interfaces_vision_blockmd)): *[Paragraph](#interfaces_vision_paragraphmd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`block` | [Block](#interfaces_vision_blockmd) |

___

#### `Const` getParagraphsFromPage

• **getParagraphsFromPage**: *function* = R.pipe(
  getBlocksFromPage,
  R.chain(getParagraphsFromBlock)
)

Defined in src/Vision.ts:312

```haskell
getParagraphsFromPage :: Page -> [Paragraph]
```

##### Type declaration:

▸ (`page`: [Page](#interfaces_vision_pagemd)): *[Paragraph](#interfaces_vision_paragraphmd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`page` | [Page](#interfaces_vision_pagemd) |

___

#### `Const` getSymbolsFromWord

• **getSymbolsFromWord**: *function* = R.prop(
  'symbols'
)

Defined in src/Vision.ts:267

```haskell
getSymbolsFromWord :: Word -> [TextSymbol]
```

##### Type declaration:

▸ (`word`: [Word](#interfaces_vision_wordmd)): *[TextSymbol](#interfaces_vision_textsymbolmd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`word` | [Word](#interfaces_vision_wordmd) |

___

#### `Const` getTextFromSymbol

• **getTextFromSymbol**: *function* = R.prop('text')

Defined in src/Vision.ts:260

```haskell
getTextFromSymbol :: TextSymbol -> String
```

##### Type declaration:

▸ (`symbol`: [TextSymbol](#interfaces_vision_textsymbolmd)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`symbol` | [TextSymbol](#interfaces_vision_textsymbolmd) |

___

#### `Const` getTextFromWord

• **getTextFromWord**: *function* = R.pipe(
  getSymbolsFromWord,
  R.map(getTextFromSymbol),
  R.join('')
)

Defined in src/Vision.ts:276

```haskell
getTextFromWord :: Word -> String
```

##### Type declaration:

▸ (`word`: [Word](#interfaces_vision_wordmd)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`word` | [Word](#interfaces_vision_wordmd) |

___

#### `Const` getWordsFromPage

• **getWordsFromPage**: *function* = R.pipe(
  getParagraphsFromPage,
  R.chain(getWordsFromParagraph)
)

Defined in src/Vision.ts:322

```haskell
getWordsFromPage :: Page -> [Word]
```

##### Type declaration:

▸ (`page`: [Page](#interfaces_vision_pagemd)): *[Word](#interfaces_vision_wordmd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`page` | [Page](#interfaces_vision_pagemd) |

___

#### `Const` getWordsFromParagraph

• **getWordsFromParagraph**: *function* = R.prop(
  'words'
)

Defined in src/Vision.ts:287

```haskell
getWordsFromParagraph :: Paragraph -> [Word]
```

##### Type declaration:

▸ (`paragraph`: [Paragraph](#interfaces_vision_paragraphmd)): *[Word](#interfaces_vision_wordmd)[]*

**Parameters:**

Name | Type |
------ | ------ |
`paragraph` | [Paragraph](#interfaces_vision_paragraphmd) |
