
<a name="readmemd"></a>

[functional-types](#globalsmd)

# functional-types



<a name="globalsmd"></a>

[functional-types](#globalsmd)

# functional-types

## Index

### Modules

* ["AnnotationPair"](#modules_annotationpair_md)
* ["Array/Arbitraries"](#modules_array_arbitraries_md)
* ["Array/index"](#modules_array_index_md)
* ["Comparable"](#modules_comparable_md)
* ["ComparableSchema"](#modules_comparableschema_md)
* ["Comparison"](#modules_comparison_md)
* ["DateTime"](#modules_datetime_md)
* ["DocumentAnnotation"](#modules_documentannotation_md)
* ["Excel"](#modules_excel_md)
* ["FileType"](#modules_filetype_md)
* ["Folder/Arbitraries"](#modules_folder_arbitraries_md)
* ["Folder/index"](#modules_folder_index_md)
* ["Json"](#modules_json_md)
* ["Label"](#modules_label_md)
* ["Response"](#modules_response_md)
* ["Schema"](#modules_schema_md)
* ["Serialize/Arbitraries"](#modules_serialize_arbitraries_md)
* ["Serialize/ComparableSchema"](#modules_serialize_comparableschema_md)
* ["Serialize/Schema"](#modules_serialize_schema_md)
* ["Serialize/index"](#modules_serialize_index_md)
* ["String"](#modules_string_md)
* ["TableAnnotation"](#modules_tableannotation_md)
* ["TextAnnotation"](#modules_textannotation_md)
* ["Types"](#modules_types_md)
* ["Vertex/Arbitraries"](#modules_vertex_arbitraries_md)
* ["Vertex/index"](#modules_vertex_index_md)
* ["Vision"](#modules_vision_md)
* ["fp-ts/Reader"](#modules_fp_ts_reader_md)
* ["fp-ts/ReaderIO"](#modules_fp_ts_readerio_md)
* ["fp-ts/TaskEither"](#modules_fp_ts_taskeither_md)
* ["index"](#modules_index_md)

# Interfaces


<a name="interfaces_annotationpair_annotationpairmd"></a>

[functional-types](#globalsmd) › ["AnnotationPair"](#modules_annotationpair_md) › [AnnotationPair](#interfaces_annotationpair_annotationpairmd)

## Interface: AnnotationPair

### Hierarchy

* **AnnotationPair**

### Index

#### Properties

* [left](#left)
* [right](#right)

### Properties

####  left

• **left**: *[TableAnnotation](#interfaces_tableannotation_tableannotationmd)*

Defined in src/AnnotationPair.ts:7

___

####  right

• **right**: *[TextAnnotation](#interfaces_textannotation_textannotationmd)*

Defined in src/AnnotationPair.ts:8


<a name="interfaces_comparable_annotationmd"></a>

[functional-types](#globalsmd) › ["Comparable"](#modules_comparable_md) › [Annotation](#interfaces_comparable_annotationmd)

## Interface: Annotation

### Hierarchy

* **Annotation**

### Index

#### Properties

* [file](#file)

### Properties

####  file

• **file**: *string*

Defined in src/Comparable.ts:151


<a name="interfaces_comparable_comparablemd"></a>

[functional-types](#globalsmd) › ["Comparable"](#modules_comparable_md) › [Comparable](#interfaces_comparable_comparablemd)

## Interface: Comparable <**T**>

### Type parameters

▪ **T**

### Hierarchy

* **Comparable**

### Index

#### Properties

* [attributes](#attributes)
* [created_at](#created_at)
* [files](#files)
* [id](#id)
* [schema_id](#schema_id)
* [updated_at](#updated_at)

### Properties

####  attributes

• **attributes**: *[Tree](#interfaces_comparable_treemd)‹T›*

Defined in src/Comparable.ts:111

___

####  created_at

• **created_at**: *string*

Defined in src/Comparable.ts:112

___

####  files

• **files**: *string[]*

Defined in src/Comparable.ts:110

___

####  id

• **id**: *string*

Defined in src/Comparable.ts:108

___

####  schema_id

• **schema_id**: *string*

Defined in src/Comparable.ts:109

___

####  updated_at

• **updated_at**: *string*

Defined in src/Comparable.ts:113


<a name="interfaces_comparable_comparableviewmd"></a>

[functional-types](#globalsmd) › ["Comparable"](#modules_comparable_md) › [ComparableView](#interfaces_comparable_comparableviewmd)

## Interface: ComparableView

### Hierarchy

* object

  ↳ **ComparableView**

### Index

#### Properties

* [attributes](#attributes)

### Properties

####  attributes

• **attributes**: *[TreeView](#treeview)*

Defined in src/Comparable.ts:129


<a name="interfaces_comparable_fromleafoptionsmd"></a>

[functional-types](#globalsmd) › ["Comparable"](#modules_comparable_md) › [FromLeafOptions](#interfaces_comparable_fromleafoptionsmd)

## Interface: FromLeafOptions

### Hierarchy

* [FromTableOptions](#interfaces_comparable_fromtableoptionsmd)

  ↳ **FromLeafOptions**

### Index

#### Properties

* [key](#optional-key)
* [mergeKey](#optional-mergekey)
* [predicate](#predicate)
* [splitBy](#splitby)

### Properties

#### `Optional` key

• **key**? : *[Predicate](#predicate)*

*Inherited from [FromTableOptions](#interfaces_comparable_fromtableoptionsmd).[key](#optional-key)*

Defined in src/Comparable.ts:139

___

#### `Optional` mergeKey

• **mergeKey**? : *boolean*

*Inherited from [FromTableOptions](#interfaces_comparable_fromtableoptionsmd).[mergeKey](#optional-mergekey)*

Defined in src/Comparable.ts:140

___

####  predicate

• **predicate**: *[Predicate](#predicate)*

Defined in src/Comparable.ts:145

___

####  splitBy

• **splitBy**: *[Direction](#direction)*

*Inherited from [FromTableOptions](#interfaces_comparable_fromtableoptionsmd).[splitBy](#splitby)*

Defined in src/Comparable.ts:141


<a name="interfaces_comparable_fromtableoptionsmd"></a>

[functional-types](#globalsmd) › ["Comparable"](#modules_comparable_md) › [FromTableOptions](#interfaces_comparable_fromtableoptionsmd)

## Interface: FromTableOptions

### Hierarchy

* **FromTableOptions**

  ↳ [FromLeafOptions](#interfaces_comparable_fromleafoptionsmd)

### Index

#### Properties

* [key](#optional-key)
* [mergeKey](#optional-mergekey)
* [splitBy](#splitby)

### Properties

#### `Optional` key

• **key**? : *[Predicate](#predicate)*

Defined in src/Comparable.ts:139

___

#### `Optional` mergeKey

• **mergeKey**? : *boolean*

Defined in src/Comparable.ts:140

___

####  splitBy

• **splitBy**: *[Direction](#direction)*

Defined in src/Comparable.ts:141


<a name="interfaces_comparable_leafmd"></a>

[functional-types](#globalsmd) › ["Comparable"](#modules_comparable_md) › [Leaf](#interfaces_comparable_leafmd)

## Interface: Leaf

### Hierarchy

* **Leaf**

### Index

#### Properties

* [metadata](#optional-metadata)
* [value](#value)

### Properties

#### `Optional` metadata

• **metadata**? : *[Metadata](#interfaces_comparable_metadatamd)*

Defined in src/Comparable.ts:96

___

####  value

• **value**: *string*

Defined in src/Comparable.ts:95


<a name="interfaces_comparable_metadatamd"></a>

[functional-types](#globalsmd) › ["Comparable"](#modules_comparable_md) › [Metadata](#interfaces_comparable_metadatamd)

## Interface: Metadata

### Hierarchy

* **Metadata**

### Index

#### Properties

* [bounding_poly](#optional-bounding_poly)
* [excel_position](#optional-excel_position)
* [json_position](#optional-json_position)

### Properties

#### `Optional` bounding_poly

• **bounding_poly**? : *[Poly](#poly)*

Defined in src/Comparable.ts:89

___

#### `Optional` excel_position

• **excel_position**? : *[Position](#interfaces_excel_positionmd)*

Defined in src/Comparable.ts:90

___

#### `Optional` json_position

• **json_position**? : *[Reference](#interfaces_folder_index_referencemd)*

Defined in src/Comparable.ts:91


<a name="interfaces_comparable_partitionedgettablesmd"></a>

[functional-types](#globalsmd) › ["Comparable"](#modules_comparable_md) › [PartitionedGettables](#interfaces_comparable_partitionedgettablesmd)

## Interface: PartitionedGettables <**T**>

### Type parameters

▪ **T**: *[Annotation](#interfaces_comparable_annotationmd)*

### Hierarchy

* **PartitionedGettables**

### Index

#### Properties

* [annotation](#annotation)
* [gettables](#gettables)

### Properties

####  annotation

• **annotation**: *T*

Defined in src/Comparable.ts:155

___

####  gettables

• **gettables**: *S.Gettables*

Defined in src/Comparable.ts:156


<a name="interfaces_comparable_partitionsmd"></a>

[functional-types](#globalsmd) › ["Comparable"](#modules_comparable_md) › [Partitions](#interfaces_comparable_partitionsmd)

## Interface: Partitions

### Hierarchy

* **Partitions**

### Index

#### Properties

* [branchByLabel](#branchbylabel)
* [cellByLabel](#cellbylabel)
* [tableByLabel](#tablebylabel)

### Properties

####  branchByLabel

• **branchByLabel**: *Dictionary‹[Branch](#interfaces_documentannotation_branchmd)›*

Defined in src/Comparable.ts:133

___

####  cellByLabel

• **cellByLabel**: *Dictionary‹D.CellByName›*

Defined in src/Comparable.ts:135

___

####  tableByLabel

• **tableByLabel**: *Dictionary‹D.TableByName›*

Defined in src/Comparable.ts:134


<a name="interfaces_comparable_treemd"></a>

[functional-types](#globalsmd) › ["Comparable"](#modules_comparable_md) › [Tree](#interfaces_comparable_treemd)

## Interface: Tree <**T**>

### Type parameters

▪ **T**

### Hierarchy

* **Tree**

### Indexable

* \[ **index**: *string*\]: [Node](#node)‹T›


<a name="interfaces_comparableschema_comparableschemamd"></a>

[functional-types](#globalsmd) › ["ComparableSchema"](#modules_comparableschema_md) › [ComparableSchema](#interfaces_comparableschema_comparableschemamd)

## Interface: ComparableSchema

### Hierarchy

* [Pair](#interfaces_types_pairmd)‹[SchemaPath](#schemapath)›

  ↳ **ComparableSchema**

### Index

#### Properties

* [created_at](#created_at)
* [id](#id)
* [left](#left)
* [name](#name)
* [right](#right)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *string*

Defined in src/ComparableSchema.ts:27

___

####  id

• **id**: *string*

Defined in src/ComparableSchema.ts:25

___

####  left

• **left**: *[SchemaPath](#schemapath)*

*Inherited from [Pair](#interfaces_types_pairmd).[left](#left)*

Defined in src/Types.ts:21

___

####  name

• **name**: *string*

Defined in src/ComparableSchema.ts:26

___

####  right

• **right**: *[SchemaPath](#schemapath)*

*Inherited from [Pair](#interfaces_types_pairmd).[right](#right)*

Defined in src/Types.ts:22

___

####  updated_at

• **updated_at**: *string*

Defined in src/ComparableSchema.ts:28


<a name="interfaces_comparison_comparisonmd"></a>

[functional-types](#globalsmd) › ["Comparison"](#modules_comparison_md) › [Comparison](#interfaces_comparison_comparisonmd)

## Interface: Comparison

### Hierarchy

* object

  ↳ **Comparison**

### Index

#### Properties

* [file_type](#file_type)
* [files](#files)
* [schema_id](#schema_id)

### Properties

####  file_type

• **file_type**: *[Pair](#interfaces_types_pairmd)‹[DocumentType](#documenttype)›*

Defined in src/Comparison.ts:32

___

####  files

• **files**: *[Pair](#interfaces_types_pairmd)‹string[]›*

Defined in src/Comparison.ts:30

___

####  schema_id

• **schema_id**: *[Pair](#interfaces_types_pairmd)‹string›*

Defined in src/Comparison.ts:31


<a name="interfaces_comparison_leafmd"></a>

[functional-types](#globalsmd) › ["Comparison"](#modules_comparison_md) › [Leaf](#interfaces_comparison_leafmd)

## Interface: Leaf

### Hierarchy

* **Leaf**

### Index

#### Properties

* [details](#details)
* [label](#label)
* [metadata](#metadata)
* [order](#order)
* [severity](#severity)
* [value](#value)

### Properties

####  details

• **details**: *string*

Defined in src/Comparison.ts:18

___

####  label

• **label**: *string*

Defined in src/Comparison.ts:16

___

####  metadata

• **metadata**: *[Metadata](#interfaces_comparable_metadatamd)*

Defined in src/Comparison.ts:21

___

####  order

• **order**: *[Pair](#interfaces_types_pairmd)‹number›*

Defined in src/Comparison.ts:20

___

####  severity

• **severity**: *[Severity](#severity)*

Defined in src/Comparison.ts:17

___

####  value

• **value**: *[Pair](#interfaces_types_pairmd)‹string›*

Defined in src/Comparison.ts:19


<a name="interfaces_documentannotation_branchmd"></a>

[functional-types](#globalsmd) › ["DocumentAnnotation"](#modules_documentannotation_md) › [Branch](#interfaces_documentannotation_branchmd)

## Interface: Branch

### Hierarchy

* [Node](#interfaces_documentannotation_nodemd)

  ↳ **Branch**

  ↳ [Descendant](#interfaces_documentannotation_descendantmd)

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

Defined in src/DocumentAnnotation.ts:73

___

####  children

• **children**: *[Tree](#tree)[]*

Defined in src/DocumentAnnotation.ts:107

___

####  id

• **id**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[id](#id)*

Defined in src/DocumentAnnotation.ts:71

___

####  label

• **label**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[label](#label)*

Defined in src/DocumentAnnotation.ts:72

___

#### `Optional` parent

• **parent**? : *[Branch](#interfaces_documentannotation_branchmd)*

Defined in src/DocumentAnnotation.ts:106


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

Defined in src/DocumentAnnotation.ts:73

___

####  id

• **id**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[id](#id)*

Defined in src/DocumentAnnotation.ts:71

___

####  label

• **label**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[label](#label)*

Defined in src/DocumentAnnotation.ts:72

___

####  text

• **text**: *string*

Defined in src/DocumentAnnotation.ts:78

___

####  words

• **words**: *[Word](#interfaces_textannotation_wordmd)[]*

Defined in src/DocumentAnnotation.ts:77


<a name="interfaces_documentannotation_descendantmd"></a>

[functional-types](#globalsmd) › ["DocumentAnnotation"](#modules_documentannotation_md) › [Descendant](#interfaces_documentannotation_descendantmd)

## Interface: Descendant

### Hierarchy

  ↳ [Branch](#interfaces_documentannotation_branchmd)

  ↳ **Descendant**

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

Defined in src/DocumentAnnotation.ts:73

___

####  children

• **children**: *[Leaf](#leaf)[]*

*Overrides [Branch](#interfaces_documentannotation_branchmd).[children](#children)*

Defined in src/DocumentAnnotation.ts:111

___

####  id

• **id**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[id](#id)*

Defined in src/DocumentAnnotation.ts:71

___

####  label

• **label**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[label](#label)*

Defined in src/DocumentAnnotation.ts:72

___

#### `Optional` parent

• **parent**? : *[Branch](#interfaces_documentannotation_branchmd)*

*Inherited from [Branch](#interfaces_documentannotation_branchmd).[parent](#optional-parent)*

Defined in src/DocumentAnnotation.ts:106


<a name="interfaces_documentannotation_documentannotationmd"></a>

[functional-types](#globalsmd) › ["DocumentAnnotation"](#modules_documentannotation_md) › [DocumentAnnotation](#interfaces_documentannotation_documentannotationmd)

## Interface: DocumentAnnotation

### Hierarchy

* **DocumentAnnotation**

### Index

#### Properties

* [created_at](#created_at)
* [file](#file)
* [forestByPage](#forestbypage)
* [id](#id)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *string*

Defined in src/DocumentAnnotation.ts:126

___

####  file

• **file**: *string*

Defined in src/DocumentAnnotation.ts:124

___

####  forestByPage

• **forestByPage**: *[ForestByPage](#forestbypage)*

Defined in src/DocumentAnnotation.ts:125

___

####  id

• **id**: *string*

Defined in src/DocumentAnnotation.ts:123

___

####  updated_at

• **updated_at**: *string*

Defined in src/DocumentAnnotation.ts:127


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

Defined in src/DocumentAnnotation.ts:73

___

####  id

• **id**: *string*

Defined in src/DocumentAnnotation.ts:71

___

####  label

• **label**: *string*

Defined in src/DocumentAnnotation.ts:72


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

Defined in src/DocumentAnnotation.ts:73

___

####  cellById

• **cellById**: *[TableCellById](#tablecellbyid)*

Defined in src/DocumentAnnotation.ts:96

___

####  columnHeaders

• **columnHeaders**: *[Cell](#interfaces_documentannotation_cellmd)[]*

Defined in src/DocumentAnnotation.ts:92

___

####  id

• **id**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[id](#id)*

Defined in src/DocumentAnnotation.ts:71

___

####  intersectHeader

• **intersectHeader**: *[Cell](#interfaces_documentannotation_cellmd)*

Defined in src/DocumentAnnotation.ts:93

___

####  label

• **label**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[label](#label)*

Defined in src/DocumentAnnotation.ts:72

___

####  mergedColumnHeader

• **mergedColumnHeader**: *[Cell](#interfaces_documentannotation_cellmd)*

Defined in src/DocumentAnnotation.ts:95

___

####  mergedRowHeader

• **mergedRowHeader**: *[Cell](#interfaces_documentannotation_cellmd)*

Defined in src/DocumentAnnotation.ts:94

___

####  rowHeaders

• **rowHeaders**: *[Cell](#interfaces_documentannotation_cellmd)[]*

Defined in src/DocumentAnnotation.ts:91


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

Defined in src/DocumentAnnotation.ts:73

___

####  columnHeader

• **columnHeader**: *[Cell](#interfaces_documentannotation_cellmd)*

Defined in src/DocumentAnnotation.ts:85

___

####  id

• **id**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[id](#id)*

Defined in src/DocumentAnnotation.ts:71

___

####  label

• **label**: *string*

*Inherited from [Node](#interfaces_documentannotation_nodemd).[label](#label)*

Defined in src/DocumentAnnotation.ts:72

___

####  rowHeader

• **rowHeader**: *[Cell](#interfaces_documentannotation_cellmd)*

Defined in src/DocumentAnnotation.ts:84

___

####  text

• **text**: *string*

*Inherited from [Cell](#interfaces_documentannotation_cellmd).[text](#text)*

Defined in src/DocumentAnnotation.ts:78

___

####  words

• **words**: *[Word](#interfaces_textannotation_wordmd)[]*

*Inherited from [Cell](#interfaces_documentannotation_cellmd).[words](#words)*

Defined in src/DocumentAnnotation.ts:77


<a name="interfaces_excel_excelmd"></a>

[functional-types](#globalsmd) › ["Excel"](#modules_excel_md) › [Excel](#interfaces_excel_excelmd)

## Interface: Excel

### Hierarchy

* **Excel**

### Index

#### Properties

* [file](#file)
* [sheetByName](#sheetbyname)

### Properties

####  file

• **file**: *string*

Defined in src/Excel.ts:28

___

####  sheetByName

• **sheetByName**: *[SheetByName](#sheetbyname)*

Defined in src/Excel.ts:29


<a name="interfaces_excel_positionmd"></a>

[functional-types](#globalsmd) › ["Excel"](#modules_excel_md) › [Position](#interfaces_excel_positionmd)

## Interface: Position

### Hierarchy

* **Position**

### Index

#### Properties

* [cell](#cell)
* [file](#file)
* [sheet](#sheet)

### Properties

####  cell

• **cell**: *string*

Defined in src/Excel.ts:19

___

####  file

• **file**: *string*

Defined in src/Excel.ts:17

___

####  sheet

• **sheet**: *string*

Defined in src/Excel.ts:18


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

Defined in src/Folder/index.ts:57

___

####  id

• **id**: *string*

Defined in src/Folder/index.ts:56

___

####  name

• **name**: *string*

Defined in src/Folder/index.ts:58

___

####  type

• **type**: *FT.FileType*

Defined in src/Folder/index.ts:59


<a name="interfaces_folder_index_filesreferencemd"></a>

[functional-types](#globalsmd) › ["Folder/index"](#modules_folder_index_md) › [FilesReference](#interfaces_folder_index_filesreferencemd)

## Interface: FilesReference

### Hierarchy

* **FilesReference**

### Index

#### Properties

* [files](#files)

### Properties

####  files

• **files**: *string[]*

Defined in src/Folder/index.ts:85


<a name="interfaces_folder_index_foldermd"></a>

[functional-types](#globalsmd) › ["Folder/index"](#modules_folder_index_md) › [Folder](#interfaces_folder_index_foldermd)

## Interface: Folder

### Hierarchy

* **Folder**

### Index

#### Properties

* [created_at](#created_at)
* [deleted_at](#optional-deleted_at)
* [id](#id)
* [name](#name)
* [tags](#tags)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *string*

Defined in src/Folder/index.ts:50

___

#### `Optional` deleted_at

• **deleted_at**? : *string*

Defined in src/Folder/index.ts:52

___

####  id

• **id**: *string*

Defined in src/Folder/index.ts:47

___

####  name

• **name**: *string*

Defined in src/Folder/index.ts:48

___

####  tags

• **tags**: *[Tag](#tag)[]*

Defined in src/Folder/index.ts:49

___

####  updated_at

• **updated_at**: *string*

Defined in src/Folder/index.ts:51


<a name="interfaces_folder_index_folderreferencemd"></a>

[functional-types](#globalsmd) › ["Folder/index"](#modules_folder_index_md) › [FolderReference](#interfaces_folder_index_folderreferencemd)

## Interface: FolderReference

### Hierarchy

* **FolderReference**

### Index

#### Properties

* [folder](#folder)

### Properties

####  folder

• **folder**: *string*

Defined in src/Folder/index.ts:81


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

Defined in src/Folder/index.ts:68

___

####  content_type

• **content_type**: *string*

Defined in src/Folder/index.ts:70

___

####  created_at

• **created_at**: *string*

Defined in src/Folder/index.ts:72

___

####  generation

• **generation**: *string*

Defined in src/Folder/index.ts:69

___

####  id

• **id**: *string*

Defined in src/Folder/index.ts:64

___

####  kind

• **kind**: *string*

Defined in src/Folder/index.ts:63

___

####  media_link

• **media_link**: *string*

Defined in src/Folder/index.ts:66

___

####  name

• **name**: *string*

Defined in src/Folder/index.ts:67

___

####  self_link

• **self_link**: *string*

Defined in src/Folder/index.ts:65

___

####  size

• **size**: *string*

Defined in src/Folder/index.ts:71

___

####  updated_at

• **updated_at**: *string*

Defined in src/Folder/index.ts:73


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

Defined in src/Folder/index.ts:77


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


<a name="interfaces_response_failuremd"></a>

[functional-types](#globalsmd) › ["Response"](#modules_response_md) › [Failure](#interfaces_response_failuremd)

## Interface: Failure

### Hierarchy

* **Failure**

### Index

#### Properties

* [error](#error)

### Properties

####  error

• **error**: *string*

Defined in src/Response.ts:25


<a name="interfaces_response_successmd"></a>

[functional-types](#globalsmd) › ["Response"](#modules_response_md) › [Success](#interfaces_response_successmd)

## Interface: Success <**T**>

### Type parameters

▪ **T**

### Hierarchy

* **Success**

### Index

#### Properties

* [message](#message)
* [payload](#payload)

### Properties

####  message

• **message**: *string*

Defined in src/Response.ts:20

___

####  payload

• **payload**: *T*

Defined in src/Response.ts:21


<a name="interfaces_schema_filtersmd"></a>

[functional-types](#globalsmd) › ["Schema"](#modules_schema_md) › [Filters](#interfaces_schema_filtersmd)

## Interface: Filters

### Hierarchy

* **Filters**

### Index

#### Properties

* [keys](#optional-keys)
* [values](#optional-values)

### Properties

#### `Optional` keys

• **keys**? : *RegExp[]*

Defined in src/Schema.ts:43

___

#### `Optional` values

• **values**? : *RegExp[]*

Defined in src/Schema.ts:44


<a name="interfaces_schema_gettablemd"></a>

[functional-types](#globalsmd) › ["Schema"](#modules_schema_md) › [Gettable](#interfaces_schema_gettablemd)

## Interface: Gettable

### Hierarchy

* **Gettable**

### Index

#### Properties

* [attribute](#attribute)
* [file](#file)
* [options](#optional-options)

### Properties

####  attribute

• **attribute**: *[Path](#path)*

Defined in src/Schema.ts:86

___

####  file

• **file**: *[FilePath](#filepath)*

Defined in src/Schema.ts:85

___

#### `Optional` options

• **options**? : *[GettableOptions](#interfaces_schema_gettableoptionsmd)*

Defined in src/Schema.ts:87


<a name="interfaces_schema_gettableoptionsmd"></a>

[functional-types](#globalsmd) › ["Schema"](#modules_schema_md) › [GettableOptions](#interfaces_schema_gettableoptionsmd)

## Interface: GettableOptions

### Hierarchy

* **GettableOptions**

### Index

#### Properties

* [direction](#optional-direction)
* [dividend](#optional-dividend)
* [end](#optional-end)
* [filters](#optional-filters)
* [key](#optional-key)
* [lifts](#optional-lifts)
* [merge_type](#optional-merge_type)
* [multiplies](#optional-multiplies)
* [rejects](#optional-rejects)
* [replacements](#optional-replacements)
* [unnest](#optional-unnest)

### Properties

#### `Optional` direction

• **direction**? : *[Direction](#direction)*

Defined in src/Schema.ts:72

___

#### `Optional` dividend

• **dividend**? : *boolean*

Defined in src/Schema.ts:81

___

#### `Optional` end

• **end**? : *RegExp*

Defined in src/Schema.ts:79

___

#### `Optional` filters

• **filters**? : *[Filters](#interfaces_schema_filtersmd)*

Defined in src/Schema.ts:78

___

#### `Optional` key

• **key**? : *RegExp*

Defined in src/Schema.ts:73

___

#### `Optional` lifts

• **lifts**? : *RegExp[]*

Defined in src/Schema.ts:76

___

#### `Optional` merge_type

• **merge_type**? : *[MergeType](#mergetype)[]*

Defined in src/Schema.ts:71

___

#### `Optional` multiplies

• **multiplies**? : *[Multiply](#interfaces_schema_multiplymd)[]*

Defined in src/Schema.ts:80

___

#### `Optional` rejects

• **rejects**? : *[Filters](#interfaces_schema_filtersmd)*

Defined in src/Schema.ts:77

___

#### `Optional` replacements

• **replacements**? : *[Replacements](#interfaces_schema_replacementsmd)*

Defined in src/Schema.ts:74

___

#### `Optional` unnest

• **unnest**? : *number*

Defined in src/Schema.ts:75


<a name="interfaces_schema_multiplymd"></a>

[functional-types](#globalsmd) › ["Schema"](#modules_schema_md) › [Multiply](#interfaces_schema_multiplymd)

## Interface: Multiply

### Hierarchy

* **Multiply**

### Index

#### Properties

* [pattern](#pattern)
* [scale](#scale)

### Properties

####  pattern

• **pattern**: *RegExp*

Defined in src/Schema.ts:66

___

####  scale

• **scale**: *number*

Defined in src/Schema.ts:67


<a name="interfaces_schema_predicatemd"></a>

[functional-types](#globalsmd) › ["Schema"](#modules_schema_md) › [Predicate](#interfaces_schema_predicatemd)

## Interface: Predicate

### Hierarchy

* **Predicate**

### Index

#### Properties

* [properties](#optional-properties)
* [value](#value)

### Properties

#### `Optional` properties

• **properties**? : *[Property](#interfaces_schema_propertymd)[]*

Defined in src/Schema.ts:54

___

####  value

• **value**: *RegExp*

Defined in src/Schema.ts:53


<a name="interfaces_schema_propertymd"></a>

[functional-types](#globalsmd) › ["Schema"](#modules_schema_md) › [Property](#interfaces_schema_propertymd)

## Interface: Property

### Hierarchy

* **Property**

### Index

#### Properties

* [pattern](#pattern)
* [property](#property)

### Properties

####  pattern

• **pattern**: *RegExp*

Defined in src/Schema.ts:49

___

####  property

• **property**: *string*

Defined in src/Schema.ts:48


<a name="interfaces_schema_replacementmd"></a>

[functional-types](#globalsmd) › ["Schema"](#modules_schema_md) › [Replacement](#interfaces_schema_replacementmd)

## Interface: Replacement

### Hierarchy

* **Replacement**

### Index

#### Properties

* [pattern](#pattern)
* [value](#value)

### Properties

####  pattern

• **pattern**: *RegExp*

Defined in src/Schema.ts:32

___

####  value

• **value**: *string*

Defined in src/Schema.ts:33


<a name="interfaces_schema_replacementsmd"></a>

[functional-types](#globalsmd) › ["Schema"](#modules_schema_md) › [Replacements](#interfaces_schema_replacementsmd)

## Interface: Replacements

### Hierarchy

* **Replacements**

### Index

#### Properties

* [keys](#optional-keys)
* [leaf_values](#optional-leaf_values)
* [values](#optional-values)

### Properties

#### `Optional` keys

• **keys**? : *[Replacement](#interfaces_schema_replacementmd)[]*

Defined in src/Schema.ts:37

___

#### `Optional` leaf_values

• **leaf_values**? : *[Replacement](#interfaces_schema_replacementmd)[]*

Defined in src/Schema.ts:39

___

#### `Optional` values

• **values**? : *[Replacement](#interfaces_schema_replacementmd)[]*

Defined in src/Schema.ts:38


<a name="interfaces_schema_schemamd"></a>

[functional-types](#globalsmd) › ["Schema"](#modules_schema_md) › [Schema](#interfaces_schema_schemamd)

## Interface: Schema

### Hierarchy

* **Schema**

### Index

#### Properties

* [created_at](#created_at)
* [file_type](#file_type)
* [files](#files)
* [gettables](#gettables)
* [id](#id)
* [name](#name)
* [options](#optional-options)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *string*

Defined in src/Schema.ts:103

___

####  file_type

• **file_type**: *[DocumentType](#documenttype)*

Defined in src/Schema.ts:101

___

####  files

• **files**: *[FilePath](#filepath)[]*

Defined in src/Schema.ts:100

___

####  gettables

• **gettables**: *[Gettables](#gettables)*

Defined in src/Schema.ts:99

___

####  id

• **id**: *string*

Defined in src/Schema.ts:97

___

####  name

• **name**: *string*

Defined in src/Schema.ts:98

___

#### `Optional` options

• **options**? : *[SchemaOptions](#interfaces_schema_schemaoptionsmd)*

Defined in src/Schema.ts:102

___

####  updated_at

• **updated_at**: *string*

Defined in src/Schema.ts:104


<a name="interfaces_schema_schemaoptionsmd"></a>

[functional-types](#globalsmd) › ["Schema"](#modules_schema_md) › [SchemaOptions](#interfaces_schema_schemaoptionsmd)

## Interface: SchemaOptions

### Hierarchy

* **SchemaOptions**

### Index

#### Properties

* [merge](#optional-merge)

### Properties

#### `Optional` merge

• **merge**? : *boolean*

Defined in src/Schema.ts:93


<a name="interfaces_serialize_comparableschema_comparableschemamd"></a>

[functional-types](#globalsmd) › ["Serialize/ComparableSchema"](#modules_serialize_comparableschema_md) › [ComparableSchema](#interfaces_serialize_comparableschema_comparableschemamd)

## Interface: ComparableSchema

### Hierarchy

* [Pair](#interfaces_types_pairmd)‹[SchemaPath](#schemapath)›

  ↳ **ComparableSchema**

### Index

#### Properties

* [created_at](#created_at)
* [id](#id)
* [left](#left)
* [name](#name)
* [right](#right)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *string*

Defined in src/Serialize/ComparableSchema.ts:13

___

####  id

• **id**: *string*

Defined in src/Serialize/ComparableSchema.ts:11

___

####  left

• **left**: *[SchemaPath](#schemapath)*

*Inherited from [Pair](#interfaces_types_pairmd).[left](#left)*

Defined in src/Types.ts:21

___

####  name

• **name**: *string*

Defined in src/Serialize/ComparableSchema.ts:12

___

####  right

• **right**: *[SchemaPath](#schemapath)*

*Inherited from [Pair](#interfaces_types_pairmd).[right](#right)*

Defined in src/Types.ts:22

___

####  updated_at

• **updated_at**: *string*

Defined in src/Serialize/ComparableSchema.ts:14


<a name="interfaces_serialize_schema_filtersmd"></a>

[functional-types](#globalsmd) › ["Serialize/Schema"](#modules_serialize_schema_md) › [Filters](#interfaces_serialize_schema_filtersmd)

## Interface: Filters

### Hierarchy

* **Filters**

### Index

#### Properties

* [keys](#optional-keys)
* [values](#optional-values)

### Properties

#### `Optional` keys

• **keys**? : *string[]*

Defined in src/Serialize/Schema.ts:45

___

#### `Optional` values

• **values**? : *string[]*

Defined in src/Serialize/Schema.ts:46


<a name="interfaces_serialize_schema_gettablemd"></a>

[functional-types](#globalsmd) › ["Serialize/Schema"](#modules_serialize_schema_md) › [Gettable](#interfaces_serialize_schema_gettablemd)

## Interface: Gettable

### Hierarchy

* **Gettable**

### Index

#### Properties

* [attribute](#attribute)
* [file](#file)
* [options](#optional-options)

### Properties

####  attribute

• **attribute**: *[Path](#path)*

Defined in src/Serialize/Schema.ts:86

___

####  file

• **file**: *[FilePath](#filepath)*

Defined in src/Serialize/Schema.ts:85

___

#### `Optional` options

• **options**? : *[GettableOptions](#interfaces_serialize_schema_gettableoptionsmd)*

Defined in src/Serialize/Schema.ts:87


<a name="interfaces_serialize_schema_gettableoptionsmd"></a>

[functional-types](#globalsmd) › ["Serialize/Schema"](#modules_serialize_schema_md) › [GettableOptions](#interfaces_serialize_schema_gettableoptionsmd)

## Interface: GettableOptions

### Hierarchy

* **GettableOptions**

### Index

#### Properties

* [direction](#optional-direction)
* [dividend](#optional-dividend)
* [end](#optional-end)
* [filters](#optional-filters)
* [key](#optional-key)
* [lifts](#optional-lifts)
* [merge_type](#optional-merge_type)
* [multiplies](#optional-multiplies)
* [rejects](#optional-rejects)
* [replacements](#optional-replacements)
* [unnest](#optional-unnest)

### Properties

#### `Optional` direction

• **direction**? : *[Direction](#direction)*

Defined in src/Serialize/Schema.ts:72

___

#### `Optional` dividend

• **dividend**? : *boolean*

Defined in src/Serialize/Schema.ts:81

___

#### `Optional` end

• **end**? : *string*

Defined in src/Serialize/Schema.ts:79

___

#### `Optional` filters

• **filters**? : *[Filters](#interfaces_serialize_schema_filtersmd)*

Defined in src/Serialize/Schema.ts:78

___

#### `Optional` key

• **key**? : *string*

Defined in src/Serialize/Schema.ts:73

___

#### `Optional` lifts

• **lifts**? : *string[]*

Defined in src/Serialize/Schema.ts:76

___

#### `Optional` merge_type

• **merge_type**? : *[MergeType](#mergetype)[]*

Defined in src/Serialize/Schema.ts:71

___

#### `Optional` multiplies

• **multiplies**? : *[Multiply](#interfaces_serialize_schema_multiplymd)[]*

Defined in src/Serialize/Schema.ts:80

___

#### `Optional` rejects

• **rejects**? : *[Filters](#interfaces_serialize_schema_filtersmd)*

Defined in src/Serialize/Schema.ts:77

___

#### `Optional` replacements

• **replacements**? : *[Replacements](#interfaces_serialize_schema_replacementsmd)*

Defined in src/Serialize/Schema.ts:74

___

#### `Optional` unnest

• **unnest**? : *number*

Defined in src/Serialize/Schema.ts:75


<a name="interfaces_serialize_schema_multiplymd"></a>

[functional-types](#globalsmd) › ["Serialize/Schema"](#modules_serialize_schema_md) › [Multiply](#interfaces_serialize_schema_multiplymd)

## Interface: Multiply

### Hierarchy

* **Multiply**

### Index

#### Properties

* [pattern](#pattern)
* [scale](#scale)

### Properties

####  pattern

• **pattern**: *string*

Defined in src/Serialize/Schema.ts:66

___

####  scale

• **scale**: *number*

Defined in src/Serialize/Schema.ts:67


<a name="interfaces_serialize_schema_predicatemd"></a>

[functional-types](#globalsmd) › ["Serialize/Schema"](#modules_serialize_schema_md) › [Predicate](#interfaces_serialize_schema_predicatemd)

## Interface: Predicate

### Hierarchy

* **Predicate**

### Index

#### Properties

* [properties](#optional-properties)
* [value](#value)

### Properties

#### `Optional` properties

• **properties**? : *[Property](#interfaces_serialize_schema_propertymd)[]*

Defined in src/Serialize/Schema.ts:56

___

####  value

• **value**: *string*

Defined in src/Serialize/Schema.ts:55


<a name="interfaces_serialize_schema_propertymd"></a>

[functional-types](#globalsmd) › ["Serialize/Schema"](#modules_serialize_schema_md) › [Property](#interfaces_serialize_schema_propertymd)

## Interface: Property

### Hierarchy

* **Property**

### Index

#### Properties

* [pattern](#pattern)
* [property](#property)

### Properties

####  pattern

• **pattern**: *string*

Defined in src/Serialize/Schema.ts:51

___

####  property

• **property**: *string*

Defined in src/Serialize/Schema.ts:50


<a name="interfaces_serialize_schema_replacementmd"></a>

[functional-types](#globalsmd) › ["Serialize/Schema"](#modules_serialize_schema_md) › [Replacement](#interfaces_serialize_schema_replacementmd)

## Interface: Replacement

### Hierarchy

* **Replacement**

### Index

#### Properties

* [pattern](#pattern)
* [value](#value)

### Properties

####  pattern

• **pattern**: *string*

Defined in src/Serialize/Schema.ts:35

___

####  value

• **value**: *string*

Defined in src/Serialize/Schema.ts:36


<a name="interfaces_serialize_schema_replacementsmd"></a>

[functional-types](#globalsmd) › ["Serialize/Schema"](#modules_serialize_schema_md) › [Replacements](#interfaces_serialize_schema_replacementsmd)

## Interface: Replacements

### Hierarchy

* **Replacements**

### Index

#### Properties

* [keys](#optional-keys)
* [values](#optional-values)

### Properties

#### `Optional` keys

• **keys**? : *[Replacement](#interfaces_serialize_schema_replacementmd)[]*

Defined in src/Serialize/Schema.ts:40

___

#### `Optional` values

• **values**? : *[Replacement](#interfaces_serialize_schema_replacementmd)[]*

Defined in src/Serialize/Schema.ts:41


<a name="interfaces_serialize_schema_schemamd"></a>

[functional-types](#globalsmd) › ["Serialize/Schema"](#modules_serialize_schema_md) › [Schema](#interfaces_serialize_schema_schemamd)

## Interface: Schema

### Hierarchy

* **Schema**

### Index

#### Properties

* [created_at](#created_at)
* [file_type](#file_type)
* [files](#files)
* [gettables](#gettables)
* [id](#id)
* [name](#name)
* [options](#optional-options)
* [updated_at](#updated_at)

### Properties

####  created_at

• **created_at**: *string*

Defined in src/Serialize/Schema.ts:103

___

####  file_type

• **file_type**: *[DocumentType](#documenttype)*

Defined in src/Serialize/Schema.ts:101

___

####  files

• **files**: *[FilePath](#filepath)[]*

Defined in src/Serialize/Schema.ts:100

___

####  gettables

• **gettables**: *[Gettables](#gettables)*

Defined in src/Serialize/Schema.ts:99

___

####  id

• **id**: *string*

Defined in src/Serialize/Schema.ts:97

___

####  name

• **name**: *string*

Defined in src/Serialize/Schema.ts:98

___

#### `Optional` options

• **options**? : *[SchemaOptions](#interfaces_serialize_schema_schemaoptionsmd)*

Defined in src/Serialize/Schema.ts:102

___

####  updated_at

• **updated_at**: *string*

Defined in src/Serialize/Schema.ts:104


<a name="interfaces_serialize_schema_schemaoptionsmd"></a>

[functional-types](#globalsmd) › ["Serialize/Schema"](#modules_serialize_schema_md) › [SchemaOptions](#interfaces_serialize_schema_schemaoptionsmd)

## Interface: SchemaOptions

### Hierarchy

* **SchemaOptions**

### Index

#### Properties

* [merge](#optional-merge)

### Properties

#### `Optional` merge

• **merge**? : *boolean*

Defined in src/Serialize/Schema.ts:93


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

Defined in src/TableAnnotation.ts:34

___

####  created_at

• **created_at**: *string*

Defined in src/TableAnnotation.ts:35

___

####  file

• **file**: *string*

Defined in src/TableAnnotation.ts:33

___

####  id

• **id**: *string*

Defined in src/TableAnnotation.ts:32

___

####  updated_at

• **updated_at**: *string*

Defined in src/TableAnnotation.ts:36


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

Defined in src/TextAnnotation.ts:72

___

####  wordsById

• **wordsById**: *[WordsById](#wordsbyid)*

Defined in src/TextAnnotation.ts:71


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

Defined in src/TextAnnotation.ts:62

___

####  confidence

• **confidence**: *number*

Defined in src/TextAnnotation.ts:63

___

####  id

• **id**: *string*

Defined in src/TextAnnotation.ts:61


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

Defined in src/TextAnnotation.ts:79

___

####  file

• **file**: *string*

Defined in src/TextAnnotation.ts:77

___

####  id

• **id**: *string*

Defined in src/TextAnnotation.ts:76

___

####  pages

• **pages**: *[Page](#interfaces_textannotation_pagemd)[]*

Defined in src/TextAnnotation.ts:78

___

####  updated_at

• **updated_at**: *string*

Defined in src/TextAnnotation.ts:80


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

Defined in src/TextAnnotation.ts:55

___

####  breakType

• **breakType**: *[BreakType](#breaktype)*

Defined in src/TextAnnotation.ts:54

___

####  confidence

• **confidence**: *number*

Defined in src/TextAnnotation.ts:57

___

####  id

• **id**: *string*

Defined in src/TextAnnotation.ts:52

___

####  paragraph

• **paragraph**: *string*

Defined in src/TextAnnotation.ts:53

___

####  text

• **text**: *string*

Defined in src/TextAnnotation.ts:56


<a name="interfaces_types_pairmd"></a>

[functional-types](#globalsmd) › ["Types"](#modules_types_md) › [Pair](#interfaces_types_pairmd)

## Interface: Pair <**T**>

### Type parameters

▪ **T**

### Hierarchy

* **Pair**

  ↳ [ComparableSchema](#interfaces_comparableschema_comparableschemamd)

  ↳ [ComparableSchema](#interfaces_serialize_comparableschema_comparableschemamd)

### Index

#### Properties

* [left](#left)
* [right](#right)

### Properties

####  left

• **left**: *T*

Defined in src/Types.ts:21

___

####  right

• **right**: *T*

Defined in src/Types.ts:22


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

Defined in src/Vertex/index.ts:63

___

####  columns

• **columns**: *[Line](#line)[]*

Defined in src/Vertex/index.ts:65

___

####  rows

• **rows**: *[Line](#line)[]*

Defined in src/Vertex/index.ts:64


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

Defined in src/Vertex/index.ts:99

___

####  start

• **start**: *[Vertex](#interfaces_vertex_index_vertexmd)*

Defined in src/Vertex/index.ts:98


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
* [score](#optional-score)

### Properties

####  boundingPoly

• **boundingPoly**: *[Poly](#poly)*

*Inherited from [BoundingBox](#interfaces_vertex_index_boundingboxmd).[boundingPoly](#boundingpoly)*

Defined in src/Vertex/index.ts:63

___

####  columns

• **columns**: *[Line](#line)[]*

*Inherited from [BoundingBox](#interfaces_vertex_index_boundingboxmd).[columns](#columns)*

Defined in src/Vertex/index.ts:65

___

####  id

• **id**: *string*

Defined in src/Vertex/index.ts:92

___

####  label

• **label**: *string*

Defined in src/Vertex/index.ts:93

___

####  rows

• **rows**: *[Line](#line)[]*

*Inherited from [BoundingBox](#interfaces_vertex_index_boundingboxmd).[rows](#rows)*

Defined in src/Vertex/index.ts:64

___

#### `Optional` score

• **score**? : *number*

Defined in src/Vertex/index.ts:94


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

Defined in src/Vertex/index.ts:103

___

####  x1

• **x1**: *number*

Defined in src/Vertex/index.ts:105

___

####  y0

• **y0**: *number*

Defined in src/Vertex/index.ts:104

___

####  y1

• **y1**: *number*

Defined in src/Vertex/index.ts:106


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

Defined in src/Vertex/index.ts:51

___

####  y

• **y**: *number*

Defined in src/Vertex/index.ts:52


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


<a name="modules_annotationpair_md"></a>

[functional-types](#globalsmd) › ["AnnotationPair"](#modules_annotationpair_md)

## Module: "AnnotationPair"

### Index

#### Interfaces

* [AnnotationPair](#interfaces_annotationpair_annotationpairmd)

#### Functions

* [isAnnotationPair](#const-isannotationpair)

### Functions

#### `Const` isAnnotationPair

▸ **isAnnotationPair**(`a`: unknown): *a is AnnotationPair*

Defined in src/AnnotationPair.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is AnnotationPair*


<a name="modules_array_arbitraries_md"></a>

[functional-types](#globalsmd) › ["Array/Arbitraries"](#modules_array_arbitraries_md)

## Module: "Array/Arbitraries"

### Index

#### Functions

* [arrays](#const-arrays)

### Functions

#### `Const` arrays

▸ **arrays**(): *Arbitrary‹object›*

Defined in src/Array/Arbitraries.ts:4

**Returns:** *Arbitrary‹object›*


<a name="modules_array_index_md"></a>

[functional-types](#globalsmd) › ["Array/index"](#modules_array_index_md)

## Module: "Array/index"

### Index

#### Functions

* [includesAll](#const-includesall)

### Functions

#### `Const` includesAll

▸ **includesAll**<**A**>(`a`: A[]): *(Anonymous function)*

Defined in src/Array/index.ts:9

```haskell
includesAll :: [a] -> Reader [a] bool
```

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | A[] |

**Returns:** *(Anonymous function)*


<a name="modules_comparable_md"></a>

[functional-types](#globalsmd) › ["Comparable"](#modules_comparable_md)

## Module: "Comparable"

### Index

#### Interfaces

* [Annotation](#interfaces_comparable_annotationmd)
* [Comparable](#interfaces_comparable_comparablemd)
* [ComparableView](#interfaces_comparable_comparableviewmd)
* [FromLeafOptions](#interfaces_comparable_fromleafoptionsmd)
* [FromTableOptions](#interfaces_comparable_fromtableoptionsmd)
* [Leaf](#interfaces_comparable_leafmd)
* [Metadata](#interfaces_comparable_metadatamd)
* [PartitionedGettables](#interfaces_comparable_partitionedgettablesmd)
* [Partitions](#interfaces_comparable_partitionsmd)
* [Tree](#interfaces_comparable_treemd)

#### Type aliases

* [AnnotationTransducer](#annotationtransducer)
* [ComparableBase](#comparablebase)
* [ComparableBasePredicate](#comparablebasepredicate)
* [ComparablePredicate](#comparablepredicate)
* [ComparablesByType](#comparablesbytype)
* [Direction](#direction)
* [FromBranchOptions](#frombranchoptions)
* [MakeComparables](#makecomparables)
* [Mapping](#mapping)
* [Node](#node)
* [Path](#path)
* [Predicate](#predicate)
* [SchemaTransducer](#schematransducer)
* [TreeByFile](#treebyfile)
* [TreePredicate](#treepredicate)
* [TreeView](#treeview)

#### Variables

* [applyGettables](#const-applygettables)
* [applySchema](#const-applyschema)
* [applySchemaToDocumentAnnotations](#const-applyschematodocumentannotations)
* [fromForest](#const-fromforest)
* [fromForestByLabel](#const-fromforestbylabel)
* [fromForestByPage](#const-fromforestbypage)
* [fromTable](#const-fromtable)
* [fromTableByName](#const-fromtablebyname)
* [getBranchOptionsFromGettables](#const-getbranchoptionsfromgettables)
* [getKeysFromPredicate](#const-getkeysfrompredicate)
* [getLeafOptionsFromGettable](#const-getleafoptionsfromgettable)
* [getPredicateFromPathSegment](#const-getpredicatefrompathsegment)
* [hasNameSatisfyingFilePath](#const-hasnamesatisfyingfilepath)
* [isComparable](#const-iscomparable)
* [isTree](#const-istree)
* [makeComparables](#const-makecomparables)
* [mergeComparables](#const-mergecomparables)
* [nameSatisfiesFilePath](#const-namesatisfiesfilepath)
* [postProcessTree](#const-postprocesstree)
* [view](#const-view)

#### Functions

* [applyPath](#const-applypath)
* [applySchemaWith](#const-applyschemawith)
* [filtersNode](#const-filtersnode)
* [filtersTree](#const-filterstree)
* [findKeyFromPredicate](#const-findkeyfrompredicate)
* [findLeafFromPredicate](#const-findleaffrompredicate)
* [fromBranch](#frombranch)
* [fromCell](#const-fromcell)
* [fromCellByName](#const-fromcellbyname)
* [getKeyFromPredicate](#const-getkeyfrompredicate)
* [getTableOptions](#const-gettableoptions)
* [isComparableBaseSatisfying](#iscomparablebasesatisfying)
* [isComparableSatisfying](#iscomparablesatisfying)
* [isComparablesByType](#const-iscomparablesbytype)
* [isLeaf](#const-isleaf)
* [isMetadata](#const-ismetadata)
* [isTreeSatisfying](#istreesatisfying)
* [leafs](#const-leafs)
* [liftNode](#const-liftnode)
* [liftTree](#const-lifttree)
* [makeComparable](#const-makecomparable)
* [makeComparablesWith](#const-makecomparableswith)
* [makeLeaf](#const-makeleaf)
* [partition](#const-partition)
* [partitionGettables](#const-partitiongettables)
* [rejectsNode](#const-rejectsnode)
* [rejectsTree](#const-rejectstree)
* [satisfyProperties](#const-satisfyproperties)
* [setKeys](#const-setkeys)
* [splitTable](#const-splittable)
* [translateLeafValue](#const-translateleafvalue)
* [translateNode](#const-translatenode)
* [translateTree](#const-translatetree)
* [unnest](#const-unnest)
* [viewTree](#viewtree)

### Type aliases

####  AnnotationTransducer

Ƭ **AnnotationTransducer**: *function*

Defined in src/Comparable.ts:159

##### Type declaration:

▸ (`annotation`: A): *Reader‹S.Gettables, [Tree](#interfaces_comparable_treemd)›*

**Parameters:**

Name | Type |
------ | ------ |
`annotation` | A |

___

####  ComparableBase

Ƭ **ComparableBase**: *Omit‹[Comparable](#interfaces_comparable_comparablemd)‹T›, "id" | "created_at" | "updated_at"›*

Defined in src/Comparable.ts:116

___

####  ComparableBasePredicate

Ƭ **ComparableBasePredicate**: *[TypePredicate](#typepredicate)‹[ComparableBase](#comparablebase)‹T››*

Defined in src/Comparable.ts:172

___

####  ComparablePredicate

Ƭ **ComparablePredicate**: *[TypePredicate](#typepredicate)‹[Comparable](#interfaces_comparable_comparablemd)‹T››*

Defined in src/Comparable.ts:173

___

####  ComparablesByType

Ƭ **ComparablesByType**: *Record‹FT.DocumentType, [Comparable](#interfaces_comparable_comparablemd)‹T›[]›*

Defined in src/Comparable.ts:121

___

####  Direction

Ƭ **Direction**: *"column" | "row"*

Defined in src/Comparable.ts:83

___

####  FromBranchOptions

Ƭ **FromBranchOptions**: *[FromLeafOptions](#interfaces_comparable_fromleafoptionsmd)[]*

Defined in src/Comparable.ts:148

___

####  MakeComparables

Ƭ **MakeComparables**: *function*

Defined in src/Comparable.ts:167

##### Type declaration:

▸ (`annotations`: A[]): *RIO.ReaderIO‹[Schema](#interfaces_schema_schemamd), [Comparable](#interfaces_comparable_comparablemd)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`annotations` | A[] |

___

####  Mapping

Ƭ **Mapping**: *Dictionary‹string›*

Defined in src/Comparable.ts:86

___

####  Node

Ƭ **Node**: *[Tree](#interfaces_comparable_treemd)‹T› | T*

Defined in src/Comparable.ts:105

___

####  Path

Ƭ **Path**: *[Predicate](#predicate)[]*

Defined in src/Comparable.ts:85

___

####  Predicate

Ƭ **Predicate**: *function*

Defined in src/Comparable.ts:84

##### Type declaration:

▸ (`value`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

___

####  SchemaTransducer

Ƭ **SchemaTransducer**: *function*

Defined in src/Comparable.ts:163

##### Type declaration:

▸ (`annotations`: A[]): *Reader‹[Schema](#interfaces_schema_schemamd), [TreeByFile](#treebyfile)›*

**Parameters:**

Name | Type |
------ | ------ |
`annotations` | A[] |

___

####  TreeByFile

Ƭ **TreeByFile**: *Dictionary‹[Tree](#interfaces_comparable_treemd)‹T››*

Defined in src/Comparable.ts:103

___

####  TreePredicate

Ƭ **TreePredicate**: *[TypePredicate](#typepredicate)‹[Tree](#interfaces_comparable_treemd)‹T››*

Defined in src/Comparable.ts:171

___

####  TreeView

Ƭ **TreeView**: *Dictionary‹[TreeView](#treeview) | string›*

Defined in src/Comparable.ts:126

### Variables

#### `Const` applyGettables

• **applyGettables**: *function* = pipe(
  pipe(fromForestByLabel, R.local(getBranchOptionsFromGettables)),
  R.map<Tree, R.Reader<S.Gettable, O.Option<Node>>>(
    pipe(applyPath, R.local<S.Gettable, S.Path>(prop('attribute')))
  ),
  R.chain(
    mapObjIndexed as (
      fa: R.Reader<S.Gettable, O.Option<Node>>
    ) => R.Reader<S.Gettables, Dictionary<O.Option<Node>>>
  ),
  R.map(filter(O.isSome)),
  R.map(mapObjIndexed((some: O.Some<Node>) => some.value))
)

Defined in src/Comparable.ts:1013

```haskell
applyGettables :: ForestByLabel -> Reader Gettables Tree
```

##### Type declaration:

▸ (`forest`: D.ForestByLabel): *Reader‹S.Gettables, [Tree](#interfaces_comparable_treemd)›*

**Parameters:**

Name | Type |
------ | ------ |
`forest` | D.ForestByLabel |

___

#### `Const` applySchema

• **applySchema**: *function* = applySchemaToDocumentAnnotations

Defined in src/Comparable.ts:1278

```haskell
applySchema :: [DocumentAnnotation] -> Reader Schema TreeByFile
```

##### Type declaration:

▸ (`annotations`: [DocumentAnnotation](#interfaces_documentannotation_documentannotationmd)[]): *Reader‹[Schema](#interfaces_schema_schemamd), [TreeByFile](#treebyfile)›*

**Parameters:**

Name | Type |
------ | ------ |
`annotations` | [DocumentAnnotation](#interfaces_documentannotation_documentannotationmd)[] |

___

#### `Const` applySchemaToDocumentAnnotations

• **applySchemaToDocumentAnnotations**: *function* = applySchemaWith(
  pipe(prop('forestByPage'), D.mergeForestByPage, applyGettables)
)

Defined in src/Comparable.ts:1268

```haskell
applySchemaToDocumentAnnotations :: [DocumentAnnotation] -> Reader Schema TreeByFile
```

##### Type declaration:

▸ (`annotations`: [DocumentAnnotation](#interfaces_documentannotation_documentannotationmd)[]): *Reader‹[Schema](#interfaces_schema_schemamd), [TreeByFile](#treebyfile)›*

**Parameters:**

Name | Type |
------ | ------ |
`annotations` | [DocumentAnnotation](#interfaces_documentannotation_documentannotationmd)[] |

___

#### `Const` fromForest

• **fromForest**: *function* = pipe(D.mergeForest, fromForestByLabel)

Defined in src/Comparable.ts:685

```haskell
fromForest :: Forest -> Reader FromBranchOptions Tree
```

##### Type declaration:

▸ (`forest`: D.Forest): *Reader‹[FromBranchOptions](#frombranchoptions), [Tree](#interfaces_comparable_treemd)›*

**Parameters:**

Name | Type |
------ | ------ |
`forest` | D.Forest |

___

#### `Const` fromForestByLabel

• **fromForestByLabel**: *function* = pipe(
  mapObjIndexed(fromBranch),
  sequenceS(R.reader)
)

Defined in src/Comparable.ts:673

```haskell
fromForestByLabel :: ForestByLabel -> Reader FromBranchOptions Tree
```

##### Type declaration:

▸ (`forest`: D.ForestByLabel): *Reader‹[FromBranchOptions](#frombranchoptions), [Tree](#interfaces_comparable_treemd)›*

**Parameters:**

Name | Type |
------ | ------ |
`forest` | D.ForestByLabel |

___

#### `Const` fromForestByPage

• **fromForestByPage**: *function* = pipe(
  D.mergeForestByPage,
  fromForestByLabel
)

Defined in src/Comparable.ts:694

```haskell
fromForestByPage :: ForestByPage -> Reader FromBranchOptions Tree
```

##### Type declaration:

▸ (`forestByPage`: D.ForestByPage): *Reader‹[FromBranchOptions](#frombranchoptions), [Tree](#interfaces_comparable_treemd)›*

**Parameters:**

Name | Type |
------ | ------ |
`forestByPage` | D.ForestByPage |

___

#### `Const` fromTable

• **fromTable**: *function* = pipe(splitTable, R.chain(setKeys))

Defined in src/Comparable.ts:493

```haskell
fromTable :: Table -> Reader FromTableOptions Tree
```

##### Type declaration:

▸ (`table`: [Table](#interfaces_documentannotation_tablemd)): *Reader‹[FromTableOptions](#interfaces_comparable_fromtableoptionsmd), [Tree](#interfaces_comparable_treemd)›*

**Parameters:**

Name | Type |
------ | ------ |
`table` | [Table](#interfaces_documentannotation_tablemd) |

___

#### `Const` fromTableByName

• **fromTableByName**: *function* = pipe(
  mapObjIndexed<D.Table, R.Reader<FromBranchOptions, O.Option<Tree>>, string>(
    (table, key) => pipe(getTableOptions(key), O.map(fromTable(table)))
  ),
  sequenceS(R.reader),
  R.map(
    pipe(
      mapObjIndexed<O.Option<Tree>, Tree | false>(
        O.getOrElse<Tree | false>(() => false)
      ),
      reject<Tree | false>(equals(false)) as R.Reader<
        Dictionary<Tree | false>,
        Tree
      >
    )
  )
)

Defined in src/Comparable.ts:593

```haskell
fromTableByName :: TableByName -> Reader FromBranchOptions Tree
```

##### Type declaration:

▸ (`tables`: D.TableByName): *Reader‹[FromBranchOptions](#frombranchoptions), [Tree](#interfaces_comparable_treemd)›*

**Parameters:**

Name | Type |
------ | ------ |
`tables` | D.TableByName |

___

#### `Const` getBranchOptionsFromGettables

• **getBranchOptionsFromGettables**: *function* = pipe(
  values as R.Reader<S.Gettables, S.Gettable[]>,
  arrayMap(getLeafOptionsFromGettable)
)

Defined in src/Comparable.ts:788

```haskell
getBranchOptionsFromGettables :: Gettables -> FromBranchOptions
```

##### Type declaration:

▸ (`gettables`: S.Gettables): *[FromBranchOptions](#frombranchoptions)*

**Parameters:**

Name | Type |
------ | ------ |
`gettables` | S.Gettables |

___

#### `Const` getKeysFromPredicate

• **getKeysFromPredicate**: *function* = pipe(
  mapObjIndexed((node: Tree, key: string) =>
    pipe(getKeyFromPredicate, R.map(O.getOrElse(() => key)))(node)
  ),
  sequenceS(R.reader)
)

Defined in src/Comparable.ts:458

```haskell
getKeysFromPredicate :: Tree -> Reader Predicate String
```

##### Type declaration:

▸ (`tree`: [Tree](#interfaces_comparable_treemd)): *Reader‹[Predicate](#predicate), [Mapping](#mapping)›*

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](#interfaces_comparable_treemd) |

___

#### `Const` getLeafOptionsFromGettable

• **getLeafOptionsFromGettable**: *function* = applySpec({
  predicate: getPredicateFromGettable,
  key: getKeyPredicateFromGettable,
  mergeKey: hasMergeType('header'),
  splitBy: getDirectionFromGettable,
})

Defined in src/Comparable.ts:774

```haskell
getLeafOptionsFromGettable :: Gettable -> FromLeafOptions
```

##### Type declaration:

▸ (`gettable`: [Gettable](#interfaces_schema_gettablemd)): *[FromLeafOptions](#interfaces_comparable_fromleafoptionsmd)*

**Parameters:**

Name | Type |
------ | ------ |
`gettable` | [Gettable](#interfaces_schema_gettablemd) |

___

#### `Const` getPredicateFromPathSegment

• **getPredicateFromPathSegment**: *function* = pipe(when(S.isPredicate, prop('value')), regExpTest)

Defined in src/Comparable.ts:800

```haskell
getPredicateFromPathSegment :: PathSegment -> Predicate
```

##### Type declaration:

▸ (`segment`: [PathSegment](#pathsegment)): *[Predicate](#predicate)*

**Parameters:**

Name | Type |
------ | ------ |
`segment` | [PathSegment](#pathsegment) |

___

#### `Const` hasNameSatisfyingFilePath

• **hasNameSatisfyingFilePath**: *function* = pipe(nameSatisfiesFilePath, any)

Defined in src/Comparable.ts:1043

```haskell
hasNameSatisfyingFilePath :: FilePath -> Reader [String] Bool
```

##### Type declaration:

▸ (`filepath`: S.FilePath): *Reader‹string[], boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`filepath` | S.FilePath |

___

#### `Const` isComparable

• **isComparable**: *[ComparablePredicate](#comparablepredicate)‹[Leaf](#interfaces_comparable_leafmd)›* = isComparableSatisfying(
  isLeaf
)

Defined in src/Comparable.ts:287

```haskell
isComparable :: a -> bool
```

___

#### `Const` isTree

• **isTree**: *[TreePredicate](#treepredicate)‹[Leaf](#interfaces_comparable_leafmd)›* = isTreeSatisfying(isLeaf)

Defined in src/Comparable.ts:235

```haskell
isTree :: a -> bool
```

___

#### `Const` makeComparables

• **makeComparables**: *[MakeComparables](#makecomparables)‹[DocumentAnnotation](#interfaces_documentannotation_documentannotationmd)›* = pipe(
  reject(propSatisfies(isEmpty, 'forestByPage')),
  makeComparablesWith(applySchema)
)

Defined in src/Comparable.ts:1380

```haskell
makeComparables :: [DocumentAnnotation] -> ReaderIO Schema [Comparable]
```

___

#### `Const` mergeComparables

• **mergeComparables**: *function* = pipe(
  reduce<
    Comparable | Record<string, unknown>,
    Comparable | Record<string, unknown>
  >(
    (acc, value) =>
      mergeDeepRight(
        acc,
        assoc(
          'files',
          concat(
            (acc.files ?? []) as string[],
            (value.files ?? []) as string[]
          ),
          value
        )
      ),
    {}
  ),
  O.fromPredicate(isComparable),
  O.map(
    evolve({
      files: uniq,
    }) as R.Reader<Comparable, Comparable>
  )
)

Defined in src/Comparable.ts:1309

```haskell
mergeComparables :: [Comparable] -> Comparable
```

##### Type declaration:

▸ (`comparables`: [Comparable](#interfaces_comparable_comparablemd)[]): *O.Option‹[Comparable](#interfaces_comparable_comparablemd)›*

**Parameters:**

Name | Type |
------ | ------ |
`comparables` | [Comparable](#interfaces_comparable_comparablemd)[] |

___

#### `Const` nameSatisfiesFilePath

• **nameSatisfiesFilePath**: *function* = pipe(head, regExpTest)

Defined in src/Comparable.ts:1034

```haskell
nameSatisfiesFilePath :: String -> Reader FilePath Bool
```

##### Type declaration:

▸ (`filepath`: S.FilePath): *Reader‹string, boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`filepath` | S.FilePath |

___

#### `Const` postProcessTree

• **postProcessTree**: *function* = pipe(
  mergeTreeFromGettables,
  R.chain(rejectsTree),
  R.chain(filtersTree),
  R.chain(unnestTreeFromGettables),
  R.chain(translateTree),
  R.chain(liftTree)
)

Defined in src/Comparable.ts:1229

```haskell
postProcessTree :: Tree -> Reader Gettables Tree
```

##### Type declaration:

▸ (`tree`: [Tree](#interfaces_comparable_treemd)): *Reader‹S.Gettables, [Tree](#interfaces_comparable_treemd)›*

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](#interfaces_comparable_treemd) |

___

#### `Const` view

• **view**: *function* = evolve({
  attributes: viewTree,
})

Defined in src/Comparable.ts:715

```haskell
view :: Comparable -> ComparableView
```

##### Type declaration:

▸ (`comparable`: [Comparable](#interfaces_comparable_comparablemd)): *[ComparableView](#interfaces_comparable_comparableviewmd)*

**Parameters:**

Name | Type |
------ | ------ |
`comparable` | [Comparable](#interfaces_comparable_comparablemd) |

### Functions

#### `Const` applyPath

▸ **applyPath**(`node`: [Leaf](#interfaces_comparable_leafmd) | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *(Anonymous function)*

Defined in src/Comparable.ts:838

```haskell
applyPath :: Tree -> Reader Path (Option Tree)
```

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Leaf](#interfaces_comparable_leafmd) &#124; [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *(Anonymous function)*

___

#### `Const` applySchemaWith

▸ **applySchemaWith**<**A**>(`fa`: function): *function*

Defined in src/Comparable.ts:1247

```haskell
applySchemaWith :: Reader (PartitionedGettables A) Tree -> [A] -> Reader Schema TreeByFile
```

**Type parameters:**

▪ **A**: *[Annotation](#interfaces_comparable_annotationmd)*

**Parameters:**

▪ **fa**: *function*

▸ (`annotation`: A): *Reader‹S.Gettables, [Tree](#interfaces_comparable_treemd)›*

**Parameters:**

Name | Type |
------ | ------ |
`annotation` | A |

**Returns:** *function*

▸ (`x0`: V0): *T2*

**Parameters:**

Name | Type |
------ | ------ |
`x0` | V0 |

___

#### `Const` filtersNode

▸ **filtersNode**(`node`: [Leaf](#interfaces_comparable_leafmd) | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *(Anonymous function)*

Defined in src/Comparable.ts:986

```haskell
filtersNode :: Node -> Reader Filters Node
```

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Leaf](#interfaces_comparable_leafmd) &#124; [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *(Anonymous function)*

___

#### `Const` filtersTree

▸ **filtersTree**(`tree`: [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *(Anonymous function)*

Defined in src/Comparable.ts:1145

```haskell
filtersTree :: Tree -> Reader Gettables Tree
```

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *(Anonymous function)*

___

#### `Const` findKeyFromPredicate

▸ **findKeyFromPredicate**(`tree`: [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *(Anonymous function)*

Defined in src/Comparable.ts:420

```haskell
findKeyFromPredicate :: Tree -> Reader Predicate (Option String)
```

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *(Anonymous function)*

___

#### `Const` findLeafFromPredicate

▸ **findLeafFromPredicate**(`tree`: [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *Reader‹function, None | Some‹[Leaf](#interfaces_comparable_leafmd)››*

Defined in src/Comparable.ts:432

```haskell
findLeafFromPredicate :: Tree -> Reader Predicate (Option Node)
```

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *Reader‹function, None | Some‹[Leaf](#interfaces_comparable_leafmd)››*

___

####  fromBranch

▸ **fromBranch**(`branch`: [Branch](#interfaces_documentannotation_branchmd)): *Reader‹[FromBranchOptions](#frombranchoptions), [Tree](#interfaces_comparable_treemd)›*

Defined in src/Comparable.ts:640

```haskell
fromBranch :: Branch -> Reader FromBranchOptions Tree
```

**Parameters:**

Name | Type |
------ | ------ |
`branch` | [Branch](#interfaces_documentannotation_branchmd) |

**Returns:** *Reader‹[FromBranchOptions](#frombranchoptions), [Tree](#interfaces_comparable_treemd)›*

___

#### `Const` fromCell

▸ **fromCell**(`cell`: [Cell](#interfaces_documentannotation_cellmd)): *object*

Defined in src/Comparable.ts:618

```haskell
fromCell :: Cell -> Node
```

**Parameters:**

Name | Type |
------ | ------ |
`cell` | [Cell](#interfaces_documentannotation_cellmd) |

**Returns:** *object*

* **value**: *string* = cell.text

* ### **metadata**: *object*

  * **bounding_poly**: *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]* = getPolyFromCell(cell)

___

#### `Const` fromCellByName

▸ **fromCellByName**(`cells`: Dictionary‹[Cell](#interfaces_documentannotation_cellmd)›): *(Anonymous function)*

Defined in src/Comparable.ts:632

```haskell
fromCellByName :: CellByName -> Reader FromBranchOptions Node
```

**Parameters:**

Name | Type |
------ | ------ |
`cells` | Dictionary‹[Cell](#interfaces_documentannotation_cellmd)› |

**Returns:** *(Anonymous function)*

___

#### `Const` getKeyFromPredicate

▸ **getKeyFromPredicate**(`tree`: [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *Reader‹function, None | Some‹string››*

Defined in src/Comparable.ts:446

```haskell
getKeyFromPredicate :: Tree -> Reader Predicate (Option String)
```

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *Reader‹function, None | Some‹string››*

___

#### `Const` getTableOptions

▸ **getTableOptions**(`key`: string): *function*

Defined in src/Comparable.ts:582

```haskell
getTableOptions :: String -> Reader FromBranchOptions (Option FromTableOptions)
```

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *function*

▸ (`x0`: V0): *T2*

**Parameters:**

Name | Type |
------ | ------ |
`x0` | V0 |

___

####  isComparableBaseSatisfying

▸ **isComparableBaseSatisfying**<**T**>(`predicate`: [TypePredicate](#typepredicate)‹T›): *[ComparableBasePredicate](#comparablebasepredicate)‹T›*

Defined in src/Comparable.ts:242

```haskell
isComparableBaseSatisfying :: a -> bool
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [TypePredicate](#typepredicate)‹T› |

**Returns:** *[ComparableBasePredicate](#comparablebasepredicate)‹T›*

___

####  isComparableSatisfying

▸ **isComparableSatisfying**<**T**>(`predicate`: [TypePredicate](#typepredicate)‹T›): *[ComparablePredicate](#comparablepredicate)‹T›*

Defined in src/Comparable.ts:265

```haskell
isComparableSatisfying :: a -> bool
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [TypePredicate](#typepredicate)‹T› |

**Returns:** *[ComparablePredicate](#comparablepredicate)‹T›*

___

#### `Const` isComparablesByType

▸ **isComparablesByType**(`a`: unknown): *a is ComparablesByType*

Defined in src/Comparable.ts:296

```haskell
isComparablesByType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ComparablesByType*

___

#### `Const` isLeaf

▸ **isLeaf**(`a`: unknown): *a is Leaf*

Defined in src/Comparable.ts:193

```haskell
isLeaf :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Leaf*

___

#### `Const` isMetadata

▸ **isMetadata**(`a`: unknown): *a is Metadata*

Defined in src/Comparable.ts:180

```haskell
isMetadata :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Metadata*

___

####  isTreeSatisfying

▸ **isTreeSatisfying**<**T**>(`predicate`: [TypePredicate](#typepredicate)‹T›): *[TreePredicate](#treepredicate)‹T›*

Defined in src/Comparable.ts:205

```haskell
isTreeSatisfying :: a -> bool
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [TypePredicate](#typepredicate)‹T› |

**Returns:** *[TreePredicate](#treepredicate)‹T›*

___

#### `Const` leafs

▸ **leafs**<**T**>(`predicate`: [TypePredicate](#typepredicate)‹T›): *Reader‹[Tree](#interfaces_comparable_treemd)‹T›, T[]›*

Defined in src/Comparable.ts:311

```haskell
leafs :: Tree -> Leaf[]
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [TypePredicate](#typepredicate)‹T› |

**Returns:** *Reader‹[Tree](#interfaces_comparable_treemd)‹T›, T[]›*

___

#### `Const` liftNode

▸ **liftNode**(`node`: [Leaf](#interfaces_comparable_leafmd) | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *(Anonymous function)*

Defined in src/Comparable.ts:940

```haskell
liftNode :: Node -> Reader Path Node
```

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Leaf](#interfaces_comparable_leafmd) &#124; [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *(Anonymous function)*

___

#### `Const` liftTree

▸ **liftTree**(`tree`: [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *(Anonymous function)*

Defined in src/Comparable.ts:1119

```haskell
liftTree :: Tree -> Reader Gettables Tree
```

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *(Anonymous function)*

___

#### `Const` makeComparable

▸ **makeComparable**(`tree`: [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›, `file`: string): *(Anonymous function)*

Defined in src/Comparable.ts:1290

```haskell
makeComparables :: (Tree, String) -> ReaderIO Schema Comparable
```

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |
`file` | string |

**Returns:** *(Anonymous function)*

___

#### `Const` makeComparablesWith

▸ **makeComparablesWith**(`fa`: function): *function*

Defined in src/Comparable.ts:1345

```haskell
makeComparablesWith :: [DocumentAnnotation] -> ReaderIO Schema [Comparable]
```

**Parameters:**

▪ **fa**: *function*

▸ (`annotations`: A[]): *Reader‹[Schema](#interfaces_schema_schemamd), [TreeByFile](#treebyfile)›*

**Parameters:**

Name | Type |
------ | ------ |
`annotations` | A[] |

**Returns:** *function*

▸ (`x`: V0): *T3*

**Parameters:**

Name | Type |
------ | ------ |
`x` | V0 |

___

#### `Const` makeLeaf

▸ **makeLeaf**(`value`: string): *object*

Defined in src/Comparable.ts:364

```haskell
makeLeaf :: String -> Leaf
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *object*

* **value**: *string*

___

#### `Const` partition

▸ **partition**(`branch`: [Branch](#interfaces_documentannotation_branchmd)): *(Anonymous function)*

Defined in src/Comparable.ts:560

```haskell
partition :: Descendant -> Reader FromBranchOptions Format DescendantByLabel
```

**Parameters:**

Name | Type |
------ | ------ |
`branch` | [Branch](#interfaces_documentannotation_branchmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` partitionGettables

▸ **partitionGettables**<**T**>(`annotations`: T[]): *function*

Defined in src/Comparable.ts:1064

```haskell
partitionGettables :: [DocumentAnnotation] -> Reader Gettables (Dictionary Gettables)
```

**Type parameters:**

▪ **T**: *[Annotation](#interfaces_comparable_annotationmd)*

**Parameters:**

Name | Type |
------ | ------ |
`annotations` | T[] |

**Returns:** *function*

▸ (`x`: V0): *T5*

**Parameters:**

Name | Type |
------ | ------ |
`x` | V0 |

___

#### `Const` rejectsNode

▸ **rejectsNode**(`node`: [Leaf](#interfaces_comparable_leafmd) | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *(Anonymous function)*

Defined in src/Comparable.ts:959

```haskell
rejectsNode :: Node -> Reader Filters Node
```

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Leaf](#interfaces_comparable_leafmd) &#124; [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *(Anonymous function)*

___

#### `Const` rejectsTree

▸ **rejectsTree**(`tree`: [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *(Anonymous function)*

Defined in src/Comparable.ts:1132

```haskell
rejectsTree :: Tree -> Reader Gettables Tree
```

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *(Anonymous function)*

___

#### `Const` satisfyProperties

▸ **satisfyProperties**(`node`: [Leaf](#interfaces_comparable_leafmd) | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *function*

Defined in src/Comparable.ts:822

```haskell
satisfyProperties :: Tree -> Reader [Property] Bool
```

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Leaf](#interfaces_comparable_leafmd) &#124; [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *function*

▸ (`list`: keyof T[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`list` | keyof T[] |

___

#### `Const` setKeys

▸ **setKeys**(`tree`: [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *Reader‹[FromTableOptions](#interfaces_comparable_fromtableoptionsmd), object›*

Defined in src/Comparable.ts:472

```haskell
setKeys :: Tree -> Reader PredicateStr Tree
```

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *Reader‹[FromTableOptions](#interfaces_comparable_fromtableoptionsmd), object›*

___

#### `Const` splitTable

▸ **splitTable**(`table`: [Table](#interfaces_documentannotation_tablemd)): *(Anonymous function)*

Defined in src/Comparable.ts:392

```haskell
splitTable :: Table -> Reader Direction Tree
```

**Parameters:**

Name | Type |
------ | ------ |
`table` | [Table](#interfaces_documentannotation_tablemd) |

**Returns:** *(Anonymous function)*

___

#### `Const` translateLeafValue

▸ **translateLeafValue**(`leaf`: [Leaf](#interfaces_comparable_leafmd)): *(Anonymous function)*

Defined in src/Comparable.ts:887

```haskell
translateLeafValue :: Leaf -> Reader Replacements Leaf
```

**Parameters:**

Name | Type |
------ | ------ |
`leaf` | [Leaf](#interfaces_comparable_leafmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` translateNode

▸ **translateNode**(`node`: [Leaf](#interfaces_comparable_leafmd) | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *(Anonymous function)*

Defined in src/Comparable.ts:903

```haskell
translateNode :: Node -> Reader Replacements Node
```

**Parameters:**

Name | Type |
------ | ------ |
`node` | [Leaf](#interfaces_comparable_leafmd) &#124; [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *(Anonymous function)*

___

#### `Const` translateTree

▸ **translateTree**(`tree`: [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)›): *(Anonymous function)*

Defined in src/Comparable.ts:1106

```haskell
translateTree :: Tree -> Reader Gettables Tree
```

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparable_leafmd)› |

**Returns:** *(Anonymous function)*

___

#### `Const` unnest

▸ **unnest**(`key`: string): *function*

Defined in src/Comparable.ts:373

```haskell
unnest :: String -> Reader Tree Tree
```

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *function*

▸ (`obj`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |

___

####  viewTree

▸ **viewTree**(`tree`: [Tree](#interfaces_comparable_treemd)): *[TreeView](#treeview)*

Defined in src/Comparable.ts:706

```haskell
viewTree :: Tree -> TreeView
```

**Parameters:**

Name | Type |
------ | ------ |
`tree` | [Tree](#interfaces_comparable_treemd) |

**Returns:** *[TreeView](#treeview)*


<a name="modules_comparableschema_md"></a>

[functional-types](#globalsmd) › ["ComparableSchema"](#modules_comparableschema_md)

## Module: "ComparableSchema"

### Index

#### Interfaces

* [ComparableSchema](#interfaces_comparableschema_comparableschemamd)

#### Type aliases

* [ComparablePair](#comparablepair)
* [ComparableSchemaBase](#comparableschemabase)
* [SchemaPath](#schemapath)

#### Functions

* [isComparableSchema](#const-iscomparableschema)
* [isComparableSchemaBase](#const-iscomparableschemabase)
* [isSchemaPath](#const-isschemapath)
* [makeComparablePairs](#const-makecomparablepairs)
* [makeComparableSchema](#const-makecomparableschema)
* [satisfySchemaPath](#const-satisfyschemapath)

### Type aliases

####  ComparablePair

Ƭ **ComparablePair**: *[Pair](#interfaces_types_pairmd)‹[Comparable](#interfaces_comparable_comparablemd)›*

Defined in src/ComparableSchema.ts:36

___

####  ComparableSchemaBase

Ƭ **ComparableSchemaBase**: *Omit‹[ComparableSchema](#interfaces_comparableschema_comparableschemamd), "created_at" | "updated_at"›*

Defined in src/ComparableSchema.ts:31

___

####  SchemaPath

Ƭ **SchemaPath**: *RegExp | [RegExp]*

Defined in src/ComparableSchema.ts:22

### Functions

#### `Const` isComparableSchema

▸ **isComparableSchema**(`a`: unknown): *a is ComparableSchema*

Defined in src/ComparableSchema.ts:70

```haskell
isComparableSchema :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ComparableSchema*

___

#### `Const` isComparableSchemaBase

▸ **isComparableSchemaBase**(`a`: unknown): *a is ComparableSchemaBase*

Defined in src/ComparableSchema.ts:58

```haskell
isComparableSchemaBase :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ComparableSchemaBase*

___

#### `Const` isSchemaPath

▸ **isSchemaPath**(`a`: unknown): *a is SchemaPath*

Defined in src/ComparableSchema.ts:50

```haskell
isSchemaPath :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is SchemaPath*

___

#### `Const` makeComparablePairs

▸ **makeComparablePairs**(`__namedParameters`: object): *function*

Defined in src/ComparableSchema.ts:131

```haskell
makeComparablePairs :: ComparableSchema -> Reader [Comparables] [ComparablePair]
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`leftPath` | RegExp‹› &#124; [RegExp‹›] |
`rightPath` | RegExp‹› &#124; [RegExp‹›] |

**Returns:** *function*

▸ (): *T2*

___

#### `Const` makeComparableSchema

▸ **makeComparableSchema**(`base`: object): *(Anonymous function)*

Defined in src/ComparableSchema.ts:115

```haskell
makeComparableSchema :: ComparableSchemaBase -> IO ComparableSchema
```

**Parameters:**

Name | Type |
------ | ------ |
`base` | object |

**Returns:** *(Anonymous function)*

___

#### `Const` satisfySchemaPath

▸ **satisfySchemaPath**(`schemaPath`: RegExp‹› | [RegExp‹›]): *(Anonymous function)*

Defined in src/ComparableSchema.ts:95

```haskell
satisfySchemaPath :: SchemaPath -> Reader Schema Bool
```

**Parameters:**

Name | Type |
------ | ------ |
`schemaPath` | RegExp‹› &#124; [RegExp‹›] |

**Returns:** *(Anonymous function)*


<a name="modules_comparison_md"></a>

[functional-types](#globalsmd) › ["Comparison"](#modules_comparison_md)

## Module: "Comparison"

### Index

#### Interfaces

* [Comparison](#interfaces_comparison_comparisonmd)
* [Leaf](#interfaces_comparison_leafmd)

#### Type aliases

* [Node](#node)
* [Severity](#severity)
* [Tree](#tree)

#### Functions

* [isComparison](#iscomparison)
* [isLeaf](#const-isleaf)
* [isNode](#const-isnode)
* [isSeverity](#const-isseverity)
* [isTree](#const-istree)

### Type aliases

####  Node

Ƭ **Node**: *C.Node‹[Leaf](#interfaces_comparison_leafmd)›*

Defined in src/Comparison.ts:24

___

####  Severity

Ƭ **Severity**: *"error" | "info" | "warning"*

Defined in src/Comparison.ts:13

___

####  Tree

Ƭ **Tree**: *[Tree](#interfaces_comparable_treemd)‹[Leaf](#interfaces_comparison_leafmd)›*

Defined in src/Comparison.ts:26

### Functions

####  isComparison

▸ **isComparison**(`a`: unknown): *a is Comparison*

Defined in src/Comparison.ts:79

```haskell
isComparison :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Comparison*

___

#### `Const` isLeaf

▸ **isLeaf**(`a`: unknown): *a is Leaf*

Defined in src/Comparison.ts:48

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

Defined in src/Comparison.ts:71

```haskell
isNode :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Node*

___

#### `Const` isSeverity

▸ **isSeverity**(`a`: unknown): *a is Severity*

Defined in src/Comparison.ts:40

```haskell
isSeverity :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Severity*

___

#### `Const` isTree

▸ **isTree**(`a`: unknown): *a is Tree*

Defined in src/Comparison.ts:64

```haskell
isTree :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Tree*


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
* [Descendant](#interfaces_documentannotation_descendantmd)
* [DocumentAnnotation](#interfaces_documentannotation_documentannotationmd)
* [Node](#interfaces_documentannotation_nodemd)
* [Table](#interfaces_documentannotation_tablemd)
* [TableCell](#interfaces_documentannotation_tablecellmd)

#### Type aliases

* [CellByName](#cellbyname)
* [DocumentAnnotationBase](#documentannotationbase)
* [Forest](#forest)
* [ForestByLabel](#forestbylabel)
* [ForestByPage](#forestbypage)
* [Leaf](#leaf)
* [TableBase](#tablebase)
* [TableByName](#tablebyname)
* [TableCellById](#tablecellbyid)
* [TextCell](#textcell)
* [TextTableCell](#texttablecell)
* [Tree](#tree)

#### Variables

* [getKeyFromLeaf](#const-getkeyfromleaf)
* [make](#const-make)
* [makeForest](#const-makeforest)
* [makeLeaf](#const-makeleaf)
* [mergeForest](#const-mergeforest)
* [mergeForestByPage](#const-mergeforestbypage)
* [toTextCell](#const-totextcell)
* [toTextTableCell](#const-totexttablecell)

#### Functions

* [isBranch](#const-isbranch)
* [isCell](#const-iscell)
* [isCellArray](#const-iscellarray)
* [isDocumentAnnotation](#const-isdocumentannotation)
* [isForest](#const-isforest)
* [isForestByPage](#const-isforestbypage)
* [isLeaf](#const-isleaf)
* [isNode](#const-isnode)
* [isTable](#const-istable)
* [isTableCell](#const-istablecell)
* [isTableCellById](#const-istablecellbyid)
* [isTree](#const-istree)
* [makeCell](#const-makecell)
* [makeForestByPage](#const-makeforestbypage)
* [makeNode](#const-makenode)
* [makeTable](#const-maketable)
* [makeTableCell](#const-maketablecell)
* [makeTextCell](#const-maketextcell)
* [makeTextTableCell](#const-maketexttablecell)

### Type aliases

####  CellByName

Ƭ **CellByName**: *Dictionary‹[Cell](#interfaces_documentannotation_cellmd)›*

Defined in src/DocumentAnnotation.ts:81

___

####  DocumentAnnotationBase

Ƭ **DocumentAnnotationBase**: *Pick‹[DocumentAnnotation](#interfaces_documentannotation_documentannotationmd), "file" | "forestByPage"›*

Defined in src/DocumentAnnotation.ts:130

___

####  Forest

Ƭ **Forest**: *Dictionary‹[Tree](#tree)›*

Defined in src/DocumentAnnotation.ts:116

___

####  ForestByLabel

Ƭ **ForestByLabel**: *Dictionary‹[Branch](#interfaces_documentannotation_branchmd)›*

Defined in src/DocumentAnnotation.ts:120

___

####  ForestByPage

Ƭ **ForestByPage**: *[Forest](#forest)[]*

Defined in src/DocumentAnnotation.ts:118

___

####  Leaf

Ƭ **Leaf**: *[Cell](#interfaces_documentannotation_cellmd) | [Table](#interfaces_documentannotation_tablemd)*

Defined in src/DocumentAnnotation.ts:103

___

####  TableBase

Ƭ **TableBase**: *Omit‹[Table](#interfaces_documentannotation_tablemd), "id" | "label" | "boundingPoly"›*

Defined in src/DocumentAnnotation.ts:101

___

####  TableByName

Ƭ **TableByName**: *Dictionary‹[Table](#interfaces_documentannotation_tablemd)›*

Defined in src/DocumentAnnotation.ts:99

___

####  TableCellById

Ƭ **TableCellById**: *Dictionary‹[TableCell](#interfaces_documentannotation_tablecellmd)›*

Defined in src/DocumentAnnotation.ts:88

___

####  TextCell

Ƭ **TextCell**: *Pick‹[Cell](#interfaces_documentannotation_cellmd), "text"›*

Defined in src/DocumentAnnotation.ts:135

___

####  TextTableCell

Ƭ **TextTableCell**: *[TextCell](#textcell) & object*

Defined in src/DocumentAnnotation.ts:137

___

####  Tree

Ƭ **Tree**: *[Branch](#interfaces_documentannotation_branchmd) | [Leaf](#leaf)*

Defined in src/DocumentAnnotation.ts:114

### Variables

#### `Const` getKeyFromLeaf

• **getKeyFromLeaf**: *function* = ifElse(
  isTable,
  path(['intersectHeader', 'text']),
  prop('text')
)

Defined in src/DocumentAnnotation.ts:672

getKeyFromLeaf :: Leaf -> String

##### Type declaration:

▸ (`leaf`: [Leaf](#leaf)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`leaf` | [Leaf](#leaf) |

___

#### `Const` make

• **make**: *function* = pipe(
  sequenceS(R.reader)({
    file: getFileNameIO,
    forestByPage: makeForestByPage,
  }),
  sequenceS(R.reader),
  R.map(sequenceS(IO.io)),
  RIO.chainIOK(fromDocumentBase)
)

Defined in src/DocumentAnnotation.ts:615

```haskell
makeComparableSchema :: TableAnnotation -> ReaderIO TextAnnotation DocumentAnnotation
```

##### Type declaration:

▸ (`tableAnnotation`: [TableAnnotation](#interfaces_tableannotation_tableannotationmd)): *RIO.ReaderIO‹[TextAnnotation](#interfaces_textannotation_textannotationmd), [DocumentAnnotation](#interfaces_documentannotation_documentannotationmd)›*

**Parameters:**

Name | Type |
------ | ------ |
`tableAnnotation` | [TableAnnotation](#interfaces_tableannotation_tableannotationmd) |

___

#### `Const` makeForest

• **makeForest**: *function* = pipe(
  values,
  makeTrees,
  RIO.map(reduce((acc: Forest, child: Tree) => assoc(child.id, child, acc), {}))
)

Defined in src/DocumentAnnotation.ts:544

```haskell
makeForest :: BoundingBoxes -> ReaderIO Page Forest
```

##### Type declaration:

▸ (`boundingBoxes`: [BoundingBoxes](#boundingboxes)): *RIO.ReaderIO‹[Page](#interfaces_textannotation_pagemd), [Forest](#forest)›*

**Parameters:**

Name | Type |
------ | ------ |
`boundingBoxes` | [BoundingBoxes](#boundingboxes) |

___

#### `Const` makeLeaf

• **makeLeaf**: *function* = ifElse(hasRowsOrColumns, makeTable, makeCell)

Defined in src/DocumentAnnotation.ts:471

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

#### `Const` mergeForest

• **mergeForest**: *function* = pipe(
  values as R.Reader<Forest, Tree[]>,
  reduce<Tree, Dictionary<Branch>>((acc, newTree: Tree) => {
    const { label } = newTree;

    const oldTree = acc[label];
    const accChildren = oldTree?.children || [];
    const newChildren = isLeaf(newTree) ? [newTree] : newTree.children;

    const id = oldTree ? `${oldTree.id},${newTree.id}` : newTree.id;
    const boundingPoly = oldTree
      ? unions(oldTree.boundingPoly)(newTree.boundingPoly)
      : newTree.boundingPoly;
    const children = concat(accChildren, newChildren);

    const tree = { id, label, boundingPoly, children };
    return assoc(label, tree, acc);
  }, {})
)

Defined in src/DocumentAnnotation.ts:681

mergeForest :: Forest -> ForestByLabel

##### Type declaration:

▸ (`forest`: [Forest](#forest)): *[ForestByLabel](#forestbylabel)*

**Parameters:**

Name | Type |
------ | ------ |
`forest` | [Forest](#forest) |

___

#### `Const` mergeForestByPage

• **mergeForestByPage**: *function* = pipe(mergeAll, mergeForest)

Defined in src/DocumentAnnotation.ts:704

mergeForestByPage :: ForestByPage -> ForestByLabel

##### Type declaration:

▸ (`forestByPage`: [ForestByPage](#forestbypage)): *[ForestByLabel](#forestbylabel)*

**Parameters:**

Name | Type |
------ | ------ |
`forestByPage` | [ForestByPage](#forestbypage) |

___

#### `Const` toTextCell

• **toTextCell**: *function* = pick(['text'])

Defined in src/DocumentAnnotation.ts:654

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

Defined in src/DocumentAnnotation.ts:661

```haskell
toTextTableCell :: TableCell -> TextTableCell
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

Defined in src/DocumentAnnotation.ts:233

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

Defined in src/DocumentAnnotation.ts:160

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

Defined in src/DocumentAnnotation.ts:172

```haskell
isCellArray :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Cell[]*

___

#### `Const` isDocumentAnnotation

▸ **isDocumentAnnotation**(`a`: unknown): *a is DocumentAnnotation*

Defined in src/DocumentAnnotation.ts:272

```haskell
isDocumentAnnotation :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is DocumentAnnotation*

___

#### `Const` isForest

▸ **isForest**(`a`: unknown): *a is Forest*

Defined in src/DocumentAnnotation.ts:256

```haskell
isForest :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Forest*

___

#### `Const` isForestByPage

▸ **isForestByPage**(`a`: unknown): *a is ForestByPage*

Defined in src/DocumentAnnotation.ts:264

```haskell
isForestByPage :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ForestByPage*

___

#### `Const` isLeaf

▸ **isLeaf**(`a`: unknown): *a is Leaf*

Defined in src/DocumentAnnotation.ts:226

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

Defined in src/DocumentAnnotation.ts:147

```haskell
isLeaf :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Node*

___

#### `Const` isTable

▸ **isTable**(`a`: unknown): *a is Table*

Defined in src/DocumentAnnotation.ts:210

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

Defined in src/DocumentAnnotation.ts:180

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

Defined in src/DocumentAnnotation.ts:192

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

Defined in src/DocumentAnnotation.ts:249

```haskell
isTree :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Tree*

___

#### `Const` makeCell

▸ **makeCell**(`boundingBox`: [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)): *(Anonymous function)*

Defined in src/DocumentAnnotation.ts:302

```haskell
makeCell :: LabeledBoundingBox -> ReaderIO Page Cell
```

**Parameters:**

Name | Type |
------ | ------ |
`boundingBox` | [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` makeForestByPage

▸ **makeForestByPage**(`tableAnnotation`: [TableAnnotation](#interfaces_tableannotation_tableannotationmd)): *(Anonymous function)*

Defined in src/DocumentAnnotation.ts:582

```haskell
makeForestByPage :: TableAnnotation -> ReaderIO TextAnnotation ForestByPage
```

**Parameters:**

Name | Type |
------ | ------ |
`tableAnnotation` | [TableAnnotation](#interfaces_tableannotation_tableannotationmd) |

**Returns:** *(Anonymous function)*

___

#### `Const` makeNode

▸ **makeNode**(`__namedParameters`: object): *(Anonymous function)*

Defined in src/DocumentAnnotation.ts:286

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

Defined in src/DocumentAnnotation.ts:388

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

Defined in src/DocumentAnnotation.ts:325

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

Defined in src/DocumentAnnotation.ts:632

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

Defined in src/DocumentAnnotation.ts:643

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


<a name="modules_excel_md"></a>

[functional-types](#globalsmd) › ["Excel"](#modules_excel_md)

## Module: "Excel"

### Index

#### Interfaces

* [Excel](#interfaces_excel_excelmd)
* [Position](#interfaces_excel_positionmd)

#### Type aliases

* [Cell](#cell)
* [Row](#row)
* [Sheet](#sheet)
* [SheetByName](#sheetbyname)

#### Functions

* [isCell](#const-iscell)
* [isExcel](#const-isexcel)
* [isPosition](#const-isposition)
* [isRow](#const-isrow)
* [isSheet](#const-issheet)
* [isSheetByName](#const-issheetbyname)

### Type aliases

####  Cell

Ƭ **Cell**: *string*

Defined in src/Excel.ts:22

___

####  Row

Ƭ **Row**: *Dictionary‹[Cell](#cell)›*

Defined in src/Excel.ts:23

___

####  Sheet

Ƭ **Sheet**: *[Row](#row)[]*

Defined in src/Excel.ts:24

___

####  SheetByName

Ƭ **SheetByName**: *Dictionary‹[Sheet](#sheet)›*

Defined in src/Excel.ts:25

### Functions

#### `Const` isCell

▸ **isCell**(`a`: unknown): *a is Row*

Defined in src/Excel.ts:50

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

Defined in src/Excel.ts:82

```haskell
isExcel :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Excel*

___

#### `Const` isPosition

▸ **isPosition**(`a`: unknown): *a is Position*

Defined in src/Excel.ts:37

```haskell
isPosition :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Position*

___

#### `Const` isRow

▸ **isRow**(`a`: unknown): *a is Row*

Defined in src/Excel.ts:58

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

Defined in src/Excel.ts:66

```haskell
isSheet :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Row*

___

#### `Const` isSheetByName

▸ **isSheetByName**(`a`: unknown): *a is SheetByName*

Defined in src/Excel.ts:74

```haskell
isSheetByName :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is SheetByName*


<a name="modules_filetype_md"></a>

[functional-types](#globalsmd) › ["FileType"](#modules_filetype_md)

## Module: "FileType"

### Index

#### Type aliases

* [ArchiveContentType](#archivecontenttype)
* [ArchiveType](#archivetype)
* [ContentType](#contenttype)
* [DocumentContentType](#documentcontenttype)
* [DocumentType](#documenttype)
* [FileType](#filetype)
* [ImageContentType](#imagecontenttype)
* [ImageType](#imagetype)
* [LegacyDocumentContentType](#legacydocumentcontenttype)
* [LegacyDocumentType](#legacydocumenttype)

#### Variables

* [archiveContentTypes](#const-archivecontenttypes)
* [archiveTypes](#const-archivetypes)
* [contentTypes](#const-contenttypes)
* [documentContentTypes](#const-documentcontenttypes)
* [documentTypes](#const-documenttypes)
* [fileContentTypes](#const-filecontenttypes)
* [fileTypes](#const-filetypes)
* [fromArchiveContentType](#const-fromarchivecontenttype)
* [fromContentType](#const-fromcontenttype)
* [fromDocumentContentType](#const-fromdocumentcontenttype)
* [fromImageContentType](#const-fromimagecontenttype)
* [fromLegacyDocumentContentType](#const-fromlegacydocumentcontenttype)
* [imageContentTypes](#const-imagecontenttypes)
* [imageTypes](#const-imagetypes)
* [legacyDocumentContentTypes](#const-legacydocumentcontenttypes)
* [legacyDocumentTypes](#const-legacydocumenttypes)
* [toArchiveContentType](#const-toarchivecontenttype)
* [toContentType](#const-tocontenttype)
* [toDocumentContentType](#const-todocumentcontenttype)
* [toImageContentType](#const-toimagecontenttype)
* [toLegacyDocumentContentType](#const-tolegacydocumentcontenttype)

#### Functions

* [isArchiveContentType](#const-isarchivecontenttype)
* [isArchiveType](#const-isarchivetype)
* [isContentType](#const-iscontenttype)
* [isDocumentContentType](#const-isdocumentcontenttype)
* [isDocumentType](#const-isdocumenttype)
* [isFileType](#const-isfiletype)
* [isImageContentType](#const-isimagecontenttype)
* [isImageType](#const-isimagetype)
* [isLegacyDocumentContentType](#const-islegacydocumentcontenttype)
* [isLegacyDocumentType](#const-islegacydocumenttype)
* [toUnionContentType](#const-tounioncontenttype)

### Type aliases

####  ArchiveContentType

Ƭ **ArchiveContentType**: *"application/zip" | "application/x-zip" | "application/x-zip-compressed"*

Defined in src/FileType.ts:35

___

####  ArchiveType

Ƭ **ArchiveType**: *"zip"*

Defined in src/FileType.ts:18

___

####  ContentType

Ƭ **ContentType**: *[DocumentContentType](#documentcontenttype) | [LegacyDocumentContentType](#legacydocumentcontenttype) | [ArchiveContentType](#archivecontenttype) | [ImageContentType](#imagecontenttype)*

Defined in src/FileType.ts:42

___

####  DocumentContentType

Ƭ **DocumentContentType**: *"application/pdf" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/json"*

Defined in src/FileType.ts:28

___

####  DocumentType

Ƭ **DocumentType**: *"pdf" | "excel" | "json"*

Defined in src/FileType.ts:14

___

####  FileType

Ƭ **FileType**: *[DocumentType](#documenttype) | [LegacyDocumentType](#legacydocumenttype) | [ArchiveType](#archivetype) | [ImageType](#imagetype)*

Defined in src/FileType.ts:22

___

####  ImageContentType

Ƭ **ImageContentType**: *"image/png" | "image/jpeg"*

Defined in src/FileType.ts:40

___

####  ImageType

Ƭ **ImageType**: *"png" | "jpeg"*

Defined in src/FileType.ts:20

___

####  LegacyDocumentContentType

Ƭ **LegacyDocumentContentType**: *"application/vnd.ms-excel"*

Defined in src/FileType.ts:33

___

####  LegacyDocumentType

Ƭ **LegacyDocumentType**: *"ms-excel"*

Defined in src/FileType.ts:16

### Variables

#### `Const` archiveContentTypes

• **archiveContentTypes**: *[ArchiveContentType](#archivecontenttype)[]* = keys(
  ContentTypeToArchiveType
)

Defined in src/FileType.ts:257

```haskell
archiveContentTypes: [ArchiveContentType]
```

___

#### `Const` archiveTypes

• **archiveTypes**: *[ArchiveType](#archivetype)[]* = keys(ArchiveTypeToContentType)

Defined in src/FileType.ts:211

```haskell
archiveTypes: [ArchiveType]
```

___

#### `Const` contentTypes

• **contentTypes**: *[ContentType](#contenttype)[]* = values(FileTypeToContentType)

Defined in src/FileType.ts:275

```haskell
contentTypes: [ContentType]
```

___

#### `Const` documentContentTypes

• **documentContentTypes**: *[DocumentContentType](#documentcontenttype)[]* = fileContentTypes

Defined in src/FileType.ts:241

```haskell
documentContentTypes: [DocumentContentType]
```

___

#### `Const` documentTypes

• **documentTypes**: *[DocumentType](#documenttype)[]* = keys(DocumentTypeToContentType)

Defined in src/FileType.ts:196

```haskell
documentTypes: [DocumentType]
```

___

#### `Const` fileContentTypes

• **fileContentTypes**: *[DocumentContentType](#documentcontenttype)[]* = values(
  DocumentTypeToContentType
)

Defined in src/FileType.ts:232

```haskell
fileContentTypes: [DocumentContentType]
```

___

#### `Const` fileTypes

• **fileTypes**: *[FileType](#filetype)[]* = keys(FileTypeToContentType)

Defined in src/FileType.ts:225

```haskell
fileTypes: [FileType]
```

___

#### `Const` fromArchiveContentType

• **fromArchiveContentType**: *function* = prop(__, ContentTypeToArchiveType)

Defined in src/FileType.ts:449

```haskell
fromArchiveContentType :: ArchiveContentType -> ArchiveType
```

##### Type declaration:

▸ (`contentType`: [ArchiveContentType](#archivecontenttype)): *[ArchiveType](#archivetype)*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | [ArchiveContentType](#archivecontenttype) |

___

#### `Const` fromContentType

• **fromContentType**: *function* = prop(
  __,
  ContentTypeToFileType
)

Defined in src/FileType.ts:467

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

Defined in src/FileType.ts:431

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

Defined in src/FileType.ts:458

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

#### `Const` fromLegacyDocumentContentType

• **fromLegacyDocumentContentType**: *function* = prop(__, ContentTypeToLegacyDocumentType)

Defined in src/FileType.ts:440

```haskell
fromLegacyDocumentContentType :: LegacyDocumentContentType -> LegacyDocumentType
```

##### Type declaration:

▸ (`contentType`: [LegacyDocumentContentType](#legacydocumentcontenttype)): *[LegacyDocumentType](#legacydocumenttype)*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | [LegacyDocumentContentType](#legacydocumentcontenttype) |

___

#### `Const` imageContentTypes

• **imageContentTypes**: *[ImageContentType](#imagecontenttype)[]* = values(
  ImageTypeToContentType
)

Defined in src/FileType.ts:266

```haskell
imageContentTypes: [DocumentContentType]
```

___

#### `Const` imageTypes

• **imageTypes**: *[ImageType](#imagetype)[]* = keys(ImageTypeToContentType)

Defined in src/FileType.ts:218

```haskell
imageTypes: [DocumentType]
```

___

#### `Const` legacyDocumentContentTypes

• **legacyDocumentContentTypes**: *[LegacyDocumentContentType](#legacydocumentcontenttype)[]* = values(
  LegacyDocumentTypeToContentType
)

Defined in src/FileType.ts:248

```haskell
legacyDocumentContentTypes: [DocumentContentType]
```

___

#### `Const` legacyDocumentTypes

• **legacyDocumentTypes**: *[LegacyDocumentType](#legacydocumenttype)[]* = keys(
  LegacyDocumentTypeToContentType
)

Defined in src/FileType.ts:202

```haskell
legacyDocumentTypes: [LegacyDocumentType]
```

___

#### `Const` toArchiveContentType

• **toArchiveContentType**: *function* = prop(__, ArchiveTypeToContentType)

Defined in src/FileType.ts:389

```haskell
toArchiveContentType :: ArchiveType -> ArchiveContentType
```

##### Type declaration:

▸ (`fileType`: [ArchiveType](#archivetype)): *[ArchiveContentType](#archivecontenttype)*

**Parameters:**

Name | Type |
------ | ------ |
`fileType` | [ArchiveType](#archivetype) |

___

#### `Const` toContentType

• **toContentType**: *function* = prop(
  __,
  FileTypeToContentType
)

Defined in src/FileType.ts:407

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

Defined in src/FileType.ts:371

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

Defined in src/FileType.ts:398

```haskell
toImageContentType :: DocumentType -> ImageContentType
```

##### Type declaration:

▸ (`imageType`: [ImageType](#imagetype)): *[ImageContentType](#imagecontenttype)*

**Parameters:**

Name | Type |
------ | ------ |
`imageType` | [ImageType](#imagetype) |

___

#### `Const` toLegacyDocumentContentType

• **toLegacyDocumentContentType**: *function* = prop(__, LegacyDocumentTypeToContentType)

Defined in src/FileType.ts:380

```haskell
toLegacyDocumentContentType :: LegacyDocumentType -> LegacyDocumentContentType
```

##### Type declaration:

▸ (`fileType`: [LegacyDocumentType](#legacydocumenttype)): *[LegacyDocumentContentType](#legacydocumentcontenttype)*

**Parameters:**

Name | Type |
------ | ------ |
`fileType` | [LegacyDocumentType](#legacydocumenttype) |

### Functions

#### `Const` isArchiveContentType

▸ **isArchiveContentType**(`a`: unknown): *a is ArchiveContentType*

Defined in src/FileType.ts:342

```haskell
isArchiveContentType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ArchiveContentType*

___

#### `Const` isArchiveType

▸ **isArchiveType**(`a`: unknown): *a is ArchiveType*

Defined in src/FileType.ts:298

```haskell
isArchiveType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ArchiveType*

___

#### `Const` isContentType

▸ **isContentType**(`a`: unknown): *a is ContentType*

Defined in src/FileType.ts:358

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

Defined in src/FileType.ts:324

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

Defined in src/FileType.ts:282

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

Defined in src/FileType.ts:314

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

Defined in src/FileType.ts:350

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

Defined in src/FileType.ts:306

```haskell
isImageType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ImageType*

___

#### `Const` isLegacyDocumentContentType

▸ **isLegacyDocumentContentType**(`a`: unknown): *a is LegacyDocumentContentType*

Defined in src/FileType.ts:332

```haskell
isLegacyDocumentContentType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is LegacyDocumentContentType*

___

#### `Const` isLegacyDocumentType

▸ **isLegacyDocumentType**(`a`: unknown): *a is LegacyDocumentType*

Defined in src/FileType.ts:290

```haskell
isLegacyDocumentType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is LegacyDocumentType*

___

#### `Const` toUnionContentType

▸ **toUnionContentType**(`fileType`: "pdf" | "excel" | "json" | "ms-excel" | "zip" | "png" | "jpeg"): *string*

Defined in src/FileType.ts:417

```haskell
toUnionContentType :: FileType -> String
```

**Parameters:**

Name | Type |
------ | ------ |
`fileType` | "pdf" &#124; "excel" &#124; "json" &#124; "ms-excel" &#124; "zip" &#124; "png" &#124; "jpeg" |

**Returns:** *string*


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
* [FilesReference](#interfaces_folder_index_filesreferencemd)
* [Folder](#interfaces_folder_index_foldermd)
* [FolderReference](#interfaces_folder_index_folderreferencemd)
* [Metadata](#interfaces_folder_index_metadatamd)
* [Reference](#interfaces_folder_index_referencemd)

#### Type aliases

* [File](#file)
* [FileReferences](#filereferences)
* [FilesByType](#filesbytype)
* [Relationship](#relationship)
* [Tag](#tag)

#### Variables

* [getAttributesFromName](#const-getattributesfromname)
* [getFileNameFromId](#const-getfilenamefromid)
* [getFolderFromReference](#const-getfolderfromreference)
* [getRelated](#const-getrelated)

#### Functions

* [deleteFolder](#const-deletefolder)
* [fromMetadata](#const-frommetadata)
* [isDeleted](#const-isdeleted)
* [isFile](#const-isfile)
* [isFileArray](#const-isfilearray)
* [isFileReferences](#const-isfilereferences)
* [isFilesByType](#const-isfilesbytype)
* [isFilesReference](#const-isfilesreference)
* [isFolder](#const-isfolder)
* [isFolderReference](#const-isfolderreference)
* [isMetadata](#const-ismetadata)
* [isReference](#const-isreference)
* [isRelationship](#const-isrelationship)
* [isTag](#const-istag)
* [make](#const-make)
* [makeFolderReference](#const-makefolderreference)
* [makeReference](#const-makereference)
* [makeRelationship](#const-makerelationship)

### Type aliases

####  File

Ƭ **File**: *[Attributes](#interfaces_folder_index_attributesmd) & object*

Defined in src/Folder/index.ts:90

___

####  FileReferences

Ƭ **FileReferences**: *[FilesReference](#interfaces_folder_index_filesreferencemd) & [FolderReference](#interfaces_folder_index_folderreferencemd)*

Defined in src/Folder/index.ts:88

___

####  FilesByType

Ƭ **FilesByType**: *Record‹FT.DocumentType, [File](#file)[]›*

Defined in src/Folder/index.ts:92

___

####  Relationship

Ƭ **Relationship**: *string & RelationshipBrand*

Defined in src/Folder/index.ts:37

___

####  Tag

Ƭ **Tag**: *"offline" | "online" | "singapore" | "hong_kong" | [Relationship](#relationship)*

Defined in src/Folder/index.ts:39

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

Defined in src/Folder/index.ts:246

```haskell
getAttributesFromName :: String -> Either Attributes Error
```

##### Type declaration:

▸ (`name`: string): *E.Either‹Error, Omit‹[Attributes](#interfaces_folder_index_attributesmd), "type"››*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

___

#### `Const` getFileNameFromId

• **getFileNameFromId**: *function* = pipe(
  split('/'),
  last as R.Reader<string[], string>
)

Defined in src/Folder/index.ts:330

```haskell
getFileNameFromId :: String -> String
```

##### Type declaration:

▸ (`id`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

___

#### `Const` getFolderFromReference

• **getFolderFromReference**: *function* = prop('folder')

Defined in src/Folder/index.ts:359

```haskell
getFolderFromReference :: FolderReference -> String
```

##### Type declaration:

▸ (`reference`: [FolderReference](#interfaces_folder_index_folderreferencemd)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`reference` | [FolderReference](#interfaces_folder_index_folderreferencemd) |

___

#### `Const` getRelated

• **getRelated**: *function* = pipe(
  prop('tags'),
  filter(isRelationship),
  map(replace(/^has:/, ''))
)

Defined in src/Folder/index.ts:376

```haskell
getRelated :: Folder -> [String]
```

##### Type declaration:

▸ (`folder`: [Folder](#interfaces_folder_index_foldermd)): *string[]*

**Parameters:**

Name | Type |
------ | ------ |
`folder` | [Folder](#interfaces_folder_index_foldermd) |

### Functions

#### `Const` deleteFolder

▸ **deleteFolder**(`folder`: [Folder](#interfaces_folder_index_foldermd)): *(Anonymous function)*

Defined in src/Folder/index.ts:162

```haskell
deleteFolder :: Folder -> IO Folder
```

**Parameters:**

Name | Type |
------ | ------ |
`folder` | [Folder](#interfaces_folder_index_foldermd) |

**Returns:** *(Anonymous function)*

___

#### `Const` fromMetadata

▸ **fromMetadata**(`metadata`: [Metadata](#interfaces_folder_index_metadatamd)): *Left‹Error› | Right‹object›*

Defined in src/Folder/index.ts:269

```haskell
fromMetadata :: Metadata -> Either
```

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [Metadata](#interfaces_folder_index_metadatamd) |

**Returns:** *Left‹Error› | Right‹object›*

___

#### `Const` isDeleted

▸ **isDeleted**(`folder`: [Folder](#interfaces_folder_index_foldermd)): *boolean*

Defined in src/Folder/index.ts:135

```haskell
isDeleted -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`folder` | [Folder](#interfaces_folder_index_foldermd) |

**Returns:** *boolean*

___

#### `Const` isFile

▸ **isFile**(`a`: unknown): *a is File*

Defined in src/Folder/index.ts:219

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

Defined in src/Folder/index.ts:227

```haskell
isFileArray :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is File[]*

___

#### `Const` isFileReferences

▸ **isFileReferences**(`a`: unknown): *a is FileReferences*

Defined in src/Folder/index.ts:309

```haskell
isFileReferences :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is FileReferences*

___

#### `Const` isFilesByType

▸ **isFilesByType**(`a`: unknown): *a is FilesByType*

Defined in src/Folder/index.ts:235

```haskell
isFilesByType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is FilesByType*

___

#### `Const` isFilesReference

▸ **isFilesReference**(`a`: unknown): *a is FilesReference*

Defined in src/Folder/index.ts:298

```haskell
isFilesReference :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is FilesReference*

___

#### `Const` isFolder

▸ **isFolder**(`a`: unknown): *a is Folder*

Defined in src/Folder/index.ts:119

```haskell
isFolder -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Folder*

___

#### `Const` isFolderReference

▸ **isFolderReference**(`a`: unknown): *a is FolderReference*

Defined in src/Folder/index.ts:351

```haskell
isFolderReference :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is FolderReference*

___

#### `Const` isMetadata

▸ **isMetadata**(`a`: unknown): *a is Metadata*

Defined in src/Folder/index.ts:196

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

Defined in src/Folder/index.ts:290

```haskell
isReference :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Reference*

___

#### `Const` isRelationship

▸ **isRelationship**(`a`: unknown): *a is Relationship*

Defined in src/Folder/index.ts:99

```haskell
isRelationship -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Relationship*

___

#### `Const` isTag

▸ **isTag**(`a`: unknown): *a is Tag*

Defined in src/Folder/index.ts:107

```haskell
isTag -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Tag*

___

#### `Const` make

▸ **make**(`name`: string, `tags`: "offline" | "online" | "singapore" | "hong_kong" | string & RelationshipBrand[]): *(Anonymous function)*

Defined in src/Folder/index.ts:143

```haskell
make :: String -> Folder
```

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`tags` | "offline" &#124; "online" &#124; "singapore" &#124; "hong_kong" &#124; string & RelationshipBrand[] |

**Returns:** *(Anonymous function)*

___

#### `Const` makeFolderReference

▸ **makeFolderReference**(`folder`: string): *object*

Defined in src/Folder/index.ts:340

```haskell
makeFolderReference :: String -> FolderReference
```

**Parameters:**

Name | Type |
------ | ------ |
`folder` | string |

**Returns:** *object*

* **folder**: *string*

___

#### `Const` makeReference

▸ **makeReference**(`file`: string): *object*

Defined in src/Folder/index.ts:321

```haskell
makeReference :: String -> Reference
```

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |

**Returns:** *object*

* **file**: *string*

___

#### `Const` makeRelationship

▸ **makeRelationship**(`target`: string): *string & RelationshipBrand*

Defined in src/Folder/index.ts:368

```haskell
makeRelationship :: String -> Relationship
```

**Parameters:**

Name | Type |
------ | ------ |
`target` | string |

**Returns:** *string & RelationshipBrand*


<a name="modules_fp_ts_reader_md"></a>

[functional-types](#globalsmd) › ["fp-ts/Reader"](#modules_fp_ts_reader_md)

## Module: "fp-ts/Reader"

### Index

#### Functions

* [flip](#const-flip)

### Functions

#### `Const` flip

▸ **flip**<**R**, **A**, **B**>(`fa`: function): *function*

Defined in src/fp-ts/Reader.ts:8

```haskell
flip :: (A -> Reader R B) -> (R -> Reader A B)
```

**Type parameters:**

▪ **R**

▪ **A**

▪ **B**

**Parameters:**

▪ **fa**: *function*

▸ (`ma`: A): *Reader‹R, B›*

**Parameters:**

Name | Type |
------ | ------ |
`ma` | A |

**Returns:** *function*

▸ (`ma`: R): *Reader‹A, B›*

**Parameters:**

Name | Type |
------ | ------ |
`ma` | R |


<a name="modules_fp_ts_readerio_md"></a>

[functional-types](#globalsmd) › ["fp-ts/ReaderIO"](#modules_fp_ts_readerio_md)

## Module: "fp-ts/ReaderIO"

### Index

#### Type aliases

* [ReaderIO](#readerio)

#### Variables

* [chainIOK](#const-chainiok)
* [fromReader](#const-fromreader)
* [map](#const-map)

#### Functions

* [chain](#const-chain)
* [chainReaderK](#const-chainreaderk)
* [sequenceReaderIO](#const-sequencereaderio)

### Type aliases

####  ReaderIO

Ƭ **ReaderIO**: *Reader‹R, IO‹A››*

Defined in src/fp-ts/ReaderIO.ts:6

### Variables

#### `Const` chainIOK

• **chainIOK**: *function* = pipe(IO.chain, R.map)

Defined in src/fp-ts/ReaderIO.ts:22

```haskell
map :: ( A -> IO B ) -> ReaderIO R A -> ReaderIO R B
```

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

#### `Const` fromReader

• **fromReader**: *function* = R.map(
  IO.of
)

Defined in src/fp-ts/ReaderIO.ts:55

```haskell
fromReader :: Reader R A -> ReaderIO R A
```

##### Type declaration:

▸ <**R**, **A**>(`r`: Reader‹R, A›): *[ReaderIO](#readerio)‹R, A›*

**Type parameters:**

▪ **R**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`r` | Reader‹R, A› |

___

#### `Const` map

• **map**: *function* = pipe(IO.map, R.map)

Defined in src/fp-ts/ReaderIO.ts:13

```haskell
map :: ( A -> B ) -> ReaderIO R A -> ReaderIO R B
```

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

#### `Const` chain

▸ **chain**<**R**, **A**, **B**>(`f`: function): *function*

Defined in src/fp-ts/ReaderIO.ts:43

```haskell
chain :: ( A -> ReaderIO R B ) -> ReaderIO R A -> ReaderIO R B
```

**Type parameters:**

▪ **R**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *[ReaderIO](#readerio)‹R, B›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *function*

▸ (`fa`: [ReaderIO](#readerio)‹R, A›): *[ReaderIO](#readerio)‹R, B›*

**Parameters:**

Name | Type |
------ | ------ |
`fa` | [ReaderIO](#readerio)‹R, A› |

___

#### `Const` chainReaderK

▸ **chainReaderK**<**R**, **A**, **B**>(`f`: function): *function*

Defined in src/fp-ts/ReaderIO.ts:31

```haskell
map :: ( A -> Reader R B ) -> ReaderIO R A -> ReaderIO R B
```

**Type parameters:**

▪ **R**

▪ **A**

▪ **B**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *Reader‹R, B›*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *function*

▸ (`fa`: [ReaderIO](#readerio)‹R, A›): *[ReaderIO](#readerio)‹R, B›*

**Parameters:**

Name | Type |
------ | ------ |
`fa` | [ReaderIO](#readerio)‹R, A› |

___

#### `Const` sequenceReaderIO

▸ **sequenceReaderIO**<**R**, **A**>(`r`: [ReaderIO](#readerio)‹R, A›[]): *[ReaderIO](#readerio)‹R, A[]›*

Defined in src/fp-ts/ReaderIO.ts:64

```haskell
sequenceReaderIO :: [Reader a IO] -> Reader a [IO]
```

**Type parameters:**

▪ **R**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`r` | [ReaderIO](#readerio)‹R, A›[] |

**Returns:** *[ReaderIO](#readerio)‹R, A[]›*


<a name="modules_fp_ts_taskeither_md"></a>

[functional-types](#globalsmd) › ["fp-ts/TaskEither"](#modules_fp_ts_taskeither_md)

## Module: "fp-ts/TaskEither"

### Index

#### Functions

* [fromTask](#const-fromtask)

### Functions

#### `Const` fromTask

▸ **fromTask**(`task`: Task‹A›): *TaskEither‹Error, A›*

Defined in src/fp-ts/TaskEither.ts:10

```haskell
fromThunk :: Task -> TaskEither
```

**Parameters:**

Name | Type |
------ | ------ |
`task` | Task‹A› |

**Returns:** *TaskEither‹Error, A›*


<a name="modules_index_md"></a>

[functional-types](#globalsmd) › ["index"](#modules_index_md)

## Module: "index"

### Index

#### References

* [ArrayPredicate](#arraypredicate)
* [Pair](#pair)
* [PairPredicate](#pairpredicate)
* [TypePredicate](#typepredicate)
* [fromPair](#frompair)
* [isArray](#isarray)
* [isArraySatisfying](#isarraysatisfying)
* [isBoolean](#isboolean)
* [isDictionary](#isdictionary)
* [isNat](#isnat)
* [isNotEmpty](#isnotempty)
* [isNotNil](#isnotnil)
* [isNumber](#isnumber)
* [isPair](#ispair)
* [isPairSatisfying](#ispairsatisfying)
* [isRegExp](#isregexp)
* [isString](#isstring)
* [isStringArray](#isstringarray)
* [propSatisfiesIfExists](#propsatisfiesifexists)
* [toPair](#topair)

### References

####  ArrayPredicate

• **ArrayPredicate**:

___

####  Pair

• **Pair**:

___

####  PairPredicate

• **PairPredicate**:

___

####  TypePredicate

• **TypePredicate**:

___

####  fromPair

• **fromPair**:

___

####  isArray

• **isArray**:

___

####  isArraySatisfying

• **isArraySatisfying**:

___

####  isBoolean

• **isBoolean**:

___

####  isDictionary

• **isDictionary**:

___

####  isNat

• **isNat**:

___

####  isNotEmpty

• **isNotEmpty**:

___

####  isNotNil

• **isNotNil**:

___

####  isNumber

• **isNumber**:

___

####  isPair

• **isPair**:

___

####  isPairSatisfying

• **isPairSatisfying**:

___

####  isRegExp

• **isRegExp**:

___

####  isString

• **isString**:

___

####  isStringArray

• **isStringArray**:

___

####  propSatisfiesIfExists

• **propSatisfiesIfExists**:

___

####  toPair

• **toPair**:


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


<a name="modules_response_md"></a>

[functional-types](#globalsmd) › ["Response"](#modules_response_md)

## Module: "Response"

### Index

#### Interfaces

* [Failure](#interfaces_response_failuremd)
* [Success](#interfaces_response_successmd)

#### Type aliases

* [Response](#response)
* [Status](#status)

#### Variables

* [fromEither](#const-fromeither)
* [getPayload](#const-getpayload)
* [getStatusFromResponse](#const-getstatusfromresponse)
* [toEither](#const-toeither)
* [toEmptyResponse](#const-toemptyresponse)

#### Functions

* [fromError](#const-fromerror)
* [fromPredicate](#const-frompredicate)
* [getPayloadOrElse](#const-getpayloadorelse)
* [isFailure](#const-isfailure)
* [isResponse](#const-isresponse)
* [isSuccess](#const-issuccess)
* [map](#const-map)
* [success](#const-success)
* [withMessage](#const-withmessage)

### Type aliases

####  Response

Ƭ **Response**: *[Success](#interfaces_response_successmd)‹T› | [Failure](#interfaces_response_failuremd)*

Defined in src/Response.ts:28

___

####  Status

Ƭ **Status**: *400 | 200*

Defined in src/Response.ts:30

### Variables

#### `Const` fromEither

• **fromEither**: *function* = ifElse(
  E.isRight,
  pipe(prop('right'), success),
  pipe(prop('left'), fromError)
)

Defined in src/Response.ts:80

```haskell
fromEither :: Either Error a -> Response a
```

##### Type declaration:

▸ <**A**>(`either`: E.Either‹Error, A›): *[Response](#response)‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`either` | E.Either‹Error, A› |

___

#### `Const` getPayload

• **getPayload**: *function* = prop('payload')

Defined in src/Response.ts:155

```haskell
getPayload :: Success a -> a
```

##### Type declaration:

▸ <**A**>(`response`: [Success](#interfaces_response_successmd)‹A›): *A*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`response` | [Success](#interfaces_response_successmd)‹A› |

___

#### `Const` getStatusFromResponse

• **getStatusFromResponse**: *function* = ifElse(
  isSuccess,
  () => 200,
  () => 400
)

Defined in src/Response.ts:103

```haskell
getStatusFromResponse :: Response -> Status
```

##### Type declaration:

▸ (`response`: [Response](#response)‹unknown›): *[Status](#status)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [Response](#response)‹unknown› |

___

#### `Const` toEither

• **toEither**: *function* = ifElse(
  isSuccess,
  E.right,
  pipe((failure: Failure): Error => new Error(failure.error), E.left)
)

Defined in src/Response.ts:142

```haskell
toEither :: Response -> Either Response Error
```

##### Type declaration:

▸ <**A**>(`response`: [Response](#response)‹A›): *E.Either‹Error, [Success](#interfaces_response_successmd)‹A››*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`response` | [Response](#response)‹A› |

___

#### `Const` toEmptyResponse

• **toEmptyResponse**: *function* = unless(isFailure, () => undefined)

Defined in src/Response.ts:172

```haskell
toEmptyResponse :: Response -> Empty | Failure
```

##### Type declaration:

▸ <**T**>(`response`: [Response](#response)‹T›): *[Failure](#interfaces_response_failuremd) | undefined*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`response` | [Response](#response)‹T› |

### Functions

#### `Const` fromError

▸ **fromError**(`error`: Error): *object*

Defined in src/Response.ts:61

```haskell
fromError :: Error -> Failure
```

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *object*

* **error**: *string* = error.message

___

#### `Const` fromPredicate

▸ **fromPredicate**(`predicate`: function, `onFalse`: function): *function*

Defined in src/Response.ts:119

```haskell
fromPredicate :: PredicateStr -> Response
```

**Parameters:**

▪ **predicate**: *function*

▸ (`a`: unknown): *a is A*

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

▪ **onFalse**: *function*

▸ (`a`: unknown): *Error*

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *function*

▸ (`obj`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |

___

#### `Const` getPayloadOrElse

▸ **getPayloadOrElse**(`onFailure`: function): *function*

Defined in src/Response.ts:164

```haskell
getPayloadOrElse :: ((Failure) -> E) -> Reader (Response a) a
```

**Parameters:**

▪ **onFailure**: *function*

▸ (`failure`: [Failure](#interfaces_response_failuremd)): *E*

**Parameters:**

Name | Type |
------ | ------ |
`failure` | [Failure](#interfaces_response_failuremd) |

**Returns:** *function*

▸ (`a`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`a` | any |

___

#### `Const` isFailure

▸ **isFailure**(`a`: unknown): *a is Failure*

Defined in src/Response.ts:45

```haskell
isFailure :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Failure*

___

#### `Const` isResponse

▸ **isResponse**(`a`: unknown): *a is Response<unknown>*

Defined in src/Response.ts:53

```haskell
isResponse :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Response<unknown>*

___

#### `Const` isSuccess

▸ **isSuccess**(`a`: unknown): *a is Success<unknown>*

Defined in src/Response.ts:37

```haskell
isSuccess :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Success<unknown>*

___

#### `Const` map

▸ **map**<**A**, **B**>(`fa`: function): *function*

Defined in src/Response.ts:129

```haskell
map :: (A -> B) -> Reader (Response A) (Response B)
```

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fa**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *function*

▸ (`obj`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |

___

#### `Const` success

▸ **success**(`a`: A): *object*

Defined in src/Response.ts:70

```haskell
success :: a -> Success
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

**Returns:** *object*

* **message**: *string* = ""

* **payload**: *A* = a

___

#### `Const` withMessage

▸ **withMessage**<**A**>(`message`: any): *function*

Defined in src/Response.ts:95

```haskell
withMessage :: string -> Reader (Response a) (Response a)`
```

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`message` | any |

**Returns:** *function*

▸ (`obj`: T): *U*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | T |


<a name="modules_schema_md"></a>

[functional-types](#globalsmd) › ["Schema"](#modules_schema_md)

## Module: "Schema"

### Index

#### Interfaces

* [Filters](#interfaces_schema_filtersmd)
* [Gettable](#interfaces_schema_gettablemd)
* [GettableOptions](#interfaces_schema_gettableoptionsmd)
* [Multiply](#interfaces_schema_multiplymd)
* [Predicate](#interfaces_schema_predicatemd)
* [Property](#interfaces_schema_propertymd)
* [Replacement](#interfaces_schema_replacementmd)
* [Replacements](#interfaces_schema_replacementsmd)
* [Schema](#interfaces_schema_schemamd)
* [SchemaOptions](#interfaces_schema_schemaoptionsmd)

#### Type aliases

* [FilePath](#filepath)
* [Gettables](#gettables)
* [MergeType](#mergetype)
* [Path](#path)
* [PathSegment](#pathsegment)
* [SchemaBase](#schemabase)

#### Functions

* [isDirection](#const-isdirection)
* [isFilePath](#const-isfilepath)
* [isFilePathArray](#const-isfilepatharray)
* [isFilters](#const-isfilters)
* [isGettable](#const-isgettable)
* [isGettableOptions](#const-isgettableoptions)
* [isGettables](#const-isgettables)
* [isMergeType](#const-ismergetype)
* [isMergeTypeArray](#const-ismergetypearray)
* [isMultiply](#const-ismultiply)
* [isPath](#const-ispath)
* [isPathSegment](#const-ispathsegment)
* [isPredicate](#const-ispredicate)
* [isProperty](#const-isproperty)
* [isReplacement](#const-isreplacement)
* [isReplacements](#const-isreplacements)
* [isSchema](#const-isschema)
* [isSchemaBase](#const-isschemabase)
* [isSchemaOptions](#const-isschemaoptions)
* [makeSchema](#const-makeschema)

### Type aliases

####  FilePath

Ƭ **FilePath**: *[RegExp]*

Defined in src/Schema.ts:61

___

####  Gettables

Ƭ **Gettables**: *Dictionary‹[Gettable](#interfaces_schema_gettablemd)›*

Defined in src/Schema.ts:90

___

####  MergeType

Ƭ **MergeType**: *"header" | "table" | "key"*

Defined in src/Schema.ts:63

___

####  Path

Ƭ **Path**: *[PathSegment](#pathsegment)[]*

Defined in src/Schema.ts:59

___

####  PathSegment

Ƭ **PathSegment**: *RegExp | [Predicate](#interfaces_schema_predicatemd)*

Defined in src/Schema.ts:57

___

####  SchemaBase

Ƭ **SchemaBase**: *Omit‹[Schema](#interfaces_schema_schemamd), "created_at" | "updated_at"›*

Defined in src/Schema.ts:107

### Functions

#### `Const` isDirection

▸ **isDirection**(`a`: unknown): *a is Direction*

Defined in src/Schema.ts:222

```haskell
isDirection :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Direction*

___

#### `Const` isFilePath

▸ **isFilePath**(`a`: unknown): *a is FilePath*

Defined in src/Schema.ts:190

```haskell
isFilePath :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is FilePath*

___

#### `Const` isFilePathArray

▸ **isFilePathArray**(`a`: unknown): *a is FilePath[]*

Defined in src/Schema.ts:198

```haskell
isFilePathArray :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is FilePath[]*

___

#### `Const` isFilters

▸ **isFilters**(`a`: unknown): *a is Filters*

Defined in src/Schema.ts:142

```haskell
isFilters :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Filters*

___

#### `Const` isGettable

▸ **isGettable**(`a`: unknown): *a is Gettable*

Defined in src/Schema.ts:262

```haskell
isGettable :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Gettable*

___

#### `Const` isGettableOptions

▸ **isGettableOptions**(`a`: unknown): *a is GettableOptions*

Defined in src/Schema.ts:242

```haskell
isGettableOptions :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is GettableOptions*

___

#### `Const` isGettables

▸ **isGettables**(`a`: unknown): *a is Gettables*

Defined in src/Schema.ts:274

```haskell
isGettables :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Gettables*

___

#### `Const` isMergeType

▸ **isMergeType**(`a`: unknown): *a is MergeType*

Defined in src/Schema.ts:206

```haskell
isMergeType :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is MergeType*

___

#### `Const` isMergeTypeArray

▸ **isMergeTypeArray**(`a`: unknown): *a is MergeType[]*

Defined in src/Schema.ts:214

```haskell
isMergeTypeArray :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is MergeType[]*

___

#### `Const` isMultiply

▸ **isMultiply**(`a`: unknown): *a is Multiply*

Defined in src/Schema.ts:230

```haskell
isMultiply :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Multiply*

___

#### `Const` isPath

▸ **isPath**(`a`: unknown): *a is Path*

Defined in src/Schema.ts:182

```haskell
isPath :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Path*

___

#### `Const` isPathSegment

▸ **isPathSegment**(`a`: unknown): *a is PathSegment*

Defined in src/Schema.ts:174

```haskell
isPathSegment :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is PathSegment*

___

#### `Const` isPredicate

▸ **isPredicate**(`a`: unknown): *a is Predicate*

Defined in src/Schema.ts:162

```haskell
isPredicate :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Predicate*

___

#### `Const` isProperty

▸ **isProperty**(`a`: unknown): *a is Property*

Defined in src/Schema.ts:154

```haskell
isProperty :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Property*

___

#### `Const` isReplacement

▸ **isReplacement**(`a`: unknown): *a is Replacement*

Defined in src/Schema.ts:114

```haskell
isReplacement :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Replacement*

___

#### `Const` isReplacements

▸ **isReplacements**(`a`: unknown): *a is Replacements*

Defined in src/Schema.ts:126

```haskell
isReplacements :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Replacements*

___

#### `Const` isSchema

▸ **isSchema**(`a`: unknown): *a is Schema*

Defined in src/Schema.ts:306

```haskell
isSchema :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Schema*

___

#### `Const` isSchemaBase

▸ **isSchemaBase**(`a`: unknown): *a is SchemaBase*

Defined in src/Schema.ts:290

```haskell
isSchemaBase :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is SchemaBase*

___

#### `Const` isSchemaOptions

▸ **isSchemaOptions**(`a`: unknown): *a is SchemaOptions*

Defined in src/Schema.ts:282

```haskell
isSchemaOptions :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is SchemaOptions*

___

#### `Const` makeSchema

▸ **makeSchema**(`schemaBase`: [SchemaBase](#schemabase)): *(Anonymous function)*

Defined in src/Schema.ts:318

```haskell
makeSchema :: SchemaBase -> IO Schema
```

**Parameters:**

Name | Type |
------ | ------ |
`schemaBase` | [SchemaBase](#schemabase) |

**Returns:** *(Anonymous function)*


<a name="modules_serialize_arbitraries_md"></a>

[functional-types](#globalsmd) › ["Serialize/Arbitraries"](#modules_serialize_arbitraries_md)

## Module: "Serialize/Arbitraries"

### Index

#### Functions

* [regExp](#const-regexp)
* [serializable](#const-serializable)

### Functions

#### `Const` regExp

▸ **regExp**(): *Arbitrary‹RegExp›*

Defined in src/Serialize/Arbitraries.ts:4

**Returns:** *Arbitrary‹RegExp›*

___

#### `Const` serializable

▸ **serializable**(): *Arbitrary‹[Serializable](#serializable)›*

Defined in src/Serialize/Arbitraries.ts:7

**Returns:** *Arbitrary‹[Serializable](#serializable)›*


<a name="modules_serialize_comparableschema_md"></a>

[functional-types](#globalsmd) › ["Serialize/ComparableSchema"](#modules_serialize_comparableschema_md)

## Module: "Serialize/ComparableSchema"

### Index

#### Interfaces

* [ComparableSchema](#interfaces_serialize_comparableschema_comparableschemamd)

#### Type aliases

* [ComparableSchemaBase](#comparableschemabase)
* [SchemaPath](#schemapath)

#### Functions

* [deserialize](#deserialize)
* [isComparableSchema](#const-iscomparableschema)
* [isComparableSchemaBase](#const-iscomparableschemabase)
* [isSchemaPath](#const-isschemapath)
* [serialize](#serialize)

### Type aliases

####  ComparableSchemaBase

Ƭ **ComparableSchemaBase**: *Omit‹[ComparableSchema](#interfaces_serialize_comparableschema_comparableschemamd), "created_at" | "updated_at"›*

Defined in src/Serialize/ComparableSchema.ts:17

___

####  SchemaPath

Ƭ **SchemaPath**: *string | [string]*

Defined in src/Serialize/ComparableSchema.ts:8

### Functions

####  deserialize

▸ **deserialize**(`deserializable`: [ComparableSchema](#interfaces_serialize_comparableschema_comparableschemamd)): *E.Either‹Error, [ComparableSchema](#interfaces_comparableschema_comparableschemamd)›*

Defined in src/Serialize/ComparableSchema.ts:89

```haskell
deserialize :: Schema -> SerializableSchema
```

**Parameters:**

Name | Type |
------ | ------ |
`deserializable` | [ComparableSchema](#interfaces_serialize_comparableschema_comparableschemamd) |

**Returns:** *E.Either‹Error, [ComparableSchema](#interfaces_comparableschema_comparableschemamd)›*

▸ **deserialize**(`deserializable`: [ComparableSchemaBase](#comparableschemabase)): *E.Either‹Error, Deserialized.ComparableSchemaBase›*

Defined in src/Serialize/ComparableSchema.ts:93

**Parameters:**

Name | Type |
------ | ------ |
`deserializable` | [ComparableSchemaBase](#comparableschemabase) |

**Returns:** *E.Either‹Error, Deserialized.ComparableSchemaBase›*

___

#### `Const` isComparableSchema

▸ **isComparableSchema**(`a`: unknown): *a is ComparableSchema*

Defined in src/Serialize/ComparableSchema.ts:54

```haskell
isComparableSchemaBase :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ComparableSchema*

___

#### `Const` isComparableSchemaBase

▸ **isComparableSchemaBase**(`a`: unknown): *a is ComparableSchemaBase*

Defined in src/Serialize/ComparableSchema.ts:42

```haskell
isComparableSchemaBase :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is ComparableSchemaBase*

___

#### `Const` isSchemaPath

▸ **isSchemaPath**(`a`: unknown): *a is SchemaPath*

Defined in src/Serialize/ComparableSchema.ts:34

```haskell
isSchemaPath :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is SchemaPath*

___

####  serialize

▸ **serialize**(`serializable`: [ComparableSchema](#interfaces_comparableschema_comparableschemamd)): *[ComparableSchema](#interfaces_serialize_comparableschema_comparableschemamd)*

Defined in src/Serialize/ComparableSchema.ts:66

```haskell
serialize :: SerializableSchema -> Schema
```

**Parameters:**

Name | Type |
------ | ------ |
`serializable` | [ComparableSchema](#interfaces_comparableschema_comparableschemamd) |

**Returns:** *[ComparableSchema](#interfaces_serialize_comparableschema_comparableschemamd)*

▸ **serialize**(`serializable`: Deserialized.ComparableSchemaBase): *[ComparableSchemaBase](#comparableschemabase)*

Defined in src/Serialize/ComparableSchema.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`serializable` | Deserialized.ComparableSchemaBase |

**Returns:** *[ComparableSchemaBase](#comparableschemabase)*


<a name="modules_serialize_index_md"></a>

[functional-types](#globalsmd) › ["Serialize/index"](#modules_serialize_index_md)

## Module: "Serialize/index"

### Index

#### Type aliases

* [Deserializable](#deserializable)
* [Serializable](#serializable)

#### Variables

* [deserializeArray](#const-deserializearray)
* [deserializeRegExp](#const-deserializeregexp)
* [serializeRegExp](#const-serializeregexp)

#### Functions

* [deserialize](#deserialize)
* [isRegExp](#const-isregexp)
* [serialize](#serialize)
* [serializeArray](#const-serializearray)

### Type aliases

####  Deserializable

Ƭ **Deserializable**: *string | number | boolean | [Deserializable](#deserializable)[] | Dictionary‹[Deserializable](#deserializable)›*

Defined in src/Serialize/index.ts:33

___

####  Serializable

Ƭ **Serializable**: *string | number | boolean | RegExp | [Serializable](#serializable)[] | Dictionary‹[Serializable](#serializable)›*

Defined in src/Serialize/index.ts:25

### Variables

#### `Const` deserializeArray

• **deserializeArray**: *function* = values

Defined in src/Serialize/index.ts:98

```haskell
deserializeArray :: Dictionary A -> [A]
```

##### Type declaration:

▸ <**A**>(`array`: Dictionary‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`array` | Dictionary‹A› |

___

#### `Const` deserializeRegExp

• **deserializeRegExp**: *function* = pipe(
  E.fromPredicate(
    isRegExp,
    () => new Error('String is not a serialized RegExp instance.')
  ),
  E.chain(
    pipe((regExpStr: string) => {
      const expression = replace(regExpValidator, '$1', regExpStr);
      const flag = replace(regExpValidator, '$2', regExpStr);
      return E.tryCatch((): RegExp => new RegExp(expression, flag), E.toError);
    })
  )
)

Defined in src/Serialize/index.ts:65

```haskell
deserializeRegExp :: String -> Either RegExp Error
```

##### Type declaration:

▸ (`regExpStr`: string): *E.Either‹Error, RegExp›*

**Parameters:**

Name | Type |
------ | ------ |
`regExpStr` | string |

___

#### `Const` serializeRegExp

• **serializeRegExp**: *function* = pipe(
  toString as R.Reader<RegExp, string>,
  concat('__REGEXP__')
)

Defined in src/Serialize/index.ts:47

```haskell
serializeRegExp :: RegExp -> String
```

##### Type declaration:

▸ (`regExp`: RegExp): *string*

**Parameters:**

Name | Type |
------ | ------ |
`regExp` | RegExp |

### Functions

####  deserialize

▸ **deserialize**(`value`: [Deserializable](#deserializable)): *E.Either‹Error, [Serializable](#serializable)›*

Defined in src/Serialize/index.ts:118

```haskell
deserialize :: Deserializable -> Either Serializable Error
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Deserializable](#deserializable) |

**Returns:** *E.Either‹Error, [Serializable](#serializable)›*

___

#### `Const` isRegExp

▸ **isRegExp**(`a`: unknown): *a is string*

Defined in src/Serialize/index.ts:57

```haskell
isRegExp :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is string*

___

####  serialize

▸ **serialize**(`value`: [Serializable](#serializable)): *[Deserializable](#deserializable)*

Defined in src/Serialize/index.ts:105

```haskell
serialize :: Serializable -> Deserializable
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Serializable](#serializable) |

**Returns:** *[Deserializable](#deserializable)*

___

#### `Const` serializeArray

▸ **serializeArray**<**A**>(`array`: A[]): *Dictionary‹A›*

Defined in src/Serialize/index.ts:86

```haskell
serializeArray :: [A] -> Dictionary A
```

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`array` | A[] |

**Returns:** *Dictionary‹A›*


<a name="modules_serialize_schema_md"></a>

[functional-types](#globalsmd) › ["Serialize/Schema"](#modules_serialize_schema_md)

## Module: "Serialize/Schema"

### Index

#### Interfaces

* [Filters](#interfaces_serialize_schema_filtersmd)
* [Gettable](#interfaces_serialize_schema_gettablemd)
* [GettableOptions](#interfaces_serialize_schema_gettableoptionsmd)
* [Multiply](#interfaces_serialize_schema_multiplymd)
* [Predicate](#interfaces_serialize_schema_predicatemd)
* [Property](#interfaces_serialize_schema_propertymd)
* [Replacement](#interfaces_serialize_schema_replacementmd)
* [Replacements](#interfaces_serialize_schema_replacementsmd)
* [Schema](#interfaces_serialize_schema_schemamd)
* [SchemaOptions](#interfaces_serialize_schema_schemaoptionsmd)

#### Type aliases

* [FilePath](#filepath)
* [Gettables](#gettables)
* [Path](#path)
* [PathSegment](#pathsegment)
* [SchemaBase](#schemabase)

#### Functions

* [deserialize](#deserialize)
* [isFilePath](#const-isfilepath)
* [isFilePathArray](#const-isfilepatharray)
* [isFilters](#const-isfilters)
* [isGettable](#const-isgettable)
* [isGettableOptions](#const-isgettableoptions)
* [isGettables](#const-isgettables)
* [isMultiply](#const-ismultiply)
* [isPath](#const-ispath)
* [isPathSegment](#const-ispathsegment)
* [isPredicate](#const-ispredicate)
* [isProperty](#const-isproperty)
* [isReplacement](#const-isreplacement)
* [isReplacements](#const-isreplacements)
* [isSchema](#const-isschema)
* [isSchemaBase](#const-isschemabase)
* [serialize](#serialize)

### Type aliases

####  FilePath

Ƭ **FilePath**: *[string]*

Defined in src/Serialize/Schema.ts:63

___

####  Gettables

Ƭ **Gettables**: *Dictionary‹[Gettable](#interfaces_serialize_schema_gettablemd)›*

Defined in src/Serialize/Schema.ts:90

___

####  Path

Ƭ **Path**: *[PathSegment](#pathsegment)[]*

Defined in src/Serialize/Schema.ts:61

___

####  PathSegment

Ƭ **PathSegment**: *string | [Predicate](#interfaces_serialize_schema_predicatemd)*

Defined in src/Serialize/Schema.ts:59

___

####  SchemaBase

Ƭ **SchemaBase**: *Omit‹[Schema](#interfaces_serialize_schema_schemamd), "created_at" | "updated_at"›*

Defined in src/Serialize/Schema.ts:107

### Functions

####  deserialize

▸ **deserialize**(`deserializable`: [SchemaBase](#schemabase)): *E.Either‹Error, Deserialized.SchemaBase›*

Defined in src/Serialize/Schema.ts:298

```haskell
deserialize :: Schema -> SerializableSchema
```

**Parameters:**

Name | Type |
------ | ------ |
`deserializable` | [SchemaBase](#schemabase) |

**Returns:** *E.Either‹Error, Deserialized.SchemaBase›*

▸ **deserialize**(`deserializable`: [Schema](#interfaces_serialize_schema_schemamd)): *E.Either‹Error, [Schema](#interfaces_schema_schemamd)›*

Defined in src/Serialize/Schema.ts:302

**Parameters:**

Name | Type |
------ | ------ |
`deserializable` | [Schema](#interfaces_serialize_schema_schemamd) |

**Returns:** *E.Either‹Error, [Schema](#interfaces_schema_schemamd)›*

___

#### `Const` isFilePath

▸ **isFilePath**(`a`: unknown): *a is FilePath*

Defined in src/Serialize/Schema.ts:188

```haskell
isFilePath :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is FilePath*

___

#### `Const` isFilePathArray

▸ **isFilePathArray**(`a`: unknown): *a is FilePath[]*

Defined in src/Serialize/Schema.ts:196

```haskell
isFilePathArray :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is FilePath[]*

___

#### `Const` isFilters

▸ **isFilters**(`a`: unknown): *a is Filters*

Defined in src/Serialize/Schema.ts:138

```haskell
isFilters :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Filters*

___

#### `Const` isGettable

▸ **isGettable**(`a`: unknown): *a is Gettable*

Defined in src/Serialize/Schema.ts:234

```haskell
isGettable :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Gettable*

___

#### `Const` isGettableOptions

▸ **isGettableOptions**(`a`: unknown): *a is GettableOptions*

Defined in src/Serialize/Schema.ts:214

```haskell
isGettableOptions :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is GettableOptions*

___

#### `Const` isGettables

▸ **isGettables**(`a`: unknown): *a is Gettables*

Defined in src/Serialize/Schema.ts:246

```haskell
isGettables :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Gettables*

___

#### `Const` isMultiply

▸ **isMultiply**(`a`: unknown): *a is Multiply*

Defined in src/Serialize/Schema.ts:204

```haskell
isMultiply :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Multiply*

___

#### `Const` isPath

▸ **isPath**(`a`: unknown): *a is Path*

Defined in src/Serialize/Schema.ts:180

```haskell
isPath :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Path*

___

#### `Const` isPathSegment

▸ **isPathSegment**(`a`: unknown): *a is PathSegment*

Defined in src/Serialize/Schema.ts:172

```haskell
isPathSegment :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is PathSegment*

___

#### `Const` isPredicate

▸ **isPredicate**(`a`: unknown): *a is Predicate*

Defined in src/Serialize/Schema.ts:160

```haskell
isPredicate :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Predicate*

___

#### `Const` isProperty

▸ **isProperty**(`a`: unknown): *a is Property*

Defined in src/Serialize/Schema.ts:150

```haskell
isProperty :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Property*

___

#### `Const` isReplacement

▸ **isReplacement**(`a`: unknown): *a is Replacement*

Defined in src/Serialize/Schema.ts:114

```haskell
isReplacement :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Replacement*

___

#### `Const` isReplacements

▸ **isReplacements**(`a`: unknown): *a is Replacements*

Defined in src/Serialize/Schema.ts:126

```haskell
isReplacements :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Replacements*

___

#### `Const` isSchema

▸ **isSchema**(`a`: unknown): *a is Schema*

Defined in src/Serialize/Schema.ts:270

```haskell
isSchema :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Schema*

___

#### `Const` isSchemaBase

▸ **isSchemaBase**(`a`: unknown): *a is SchemaBase*

Defined in src/Serialize/Schema.ts:254

```haskell
isSchemaBase :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is SchemaBase*

___

####  serialize

▸ **serialize**(`serializable`: [Schema](#interfaces_schema_schemamd)): *[Schema](#interfaces_serialize_schema_schemamd)*

Defined in src/Serialize/Schema.ts:282

```haskell
serialize :: SerializableSchema -> Schema
```

**Parameters:**

Name | Type |
------ | ------ |
`serializable` | [Schema](#interfaces_schema_schemamd) |

**Returns:** *[Schema](#interfaces_serialize_schema_schemamd)*

▸ **serialize**(`serializable`: Deserialized.SchemaBase): *[SchemaBase](#schemabase)*

Defined in src/Serialize/Schema.ts:283

**Parameters:**

Name | Type |
------ | ------ |
`serializable` | Deserialized.SchemaBase |

**Returns:** *[SchemaBase](#schemabase)*


<a name="modules_string_md"></a>

[functional-types](#globalsmd) › ["String"](#modules_string_md)

## Module: "String"

### Index

#### Functions

* [getRandomId](#const-getrandomid)

### Functions

#### `Const` getRandomId

▸ **getRandomId**(): *string*

Defined in src/String.ts:9

```haskell
getRandomId: IO String
```

**Returns:** *string*


<a name="modules_tableannotation_md"></a>

[functional-types](#globalsmd) › ["TableAnnotation"](#modules_tableannotation_md)

## Module: "TableAnnotation"

### Index

#### Interfaces

* [TableAnnotation](#interfaces_tableannotation_tableannotationmd)

#### Type aliases

* [BoundingBox](#boundingbox)
* [BoundingBoxes](#boundingboxes)
* [BoundingBoxesByPage](#boundingboxesbypage)
* [TableAnnotationBase](#tableannotationbase)

#### Variables

* [rejectsEmptyBoundingBoxes](#const-rejectsemptyboundingboxes)
* [toBoundingBoxes](#const-toboundingboxes)

#### Functions

* [isBoundingBoxes](#const-isboundingboxes)
* [isBoundingBoxesByPage](#const-isboundingboxesbypage)
* [isTableAnnotation](#const-istableannotation)
* [isTableAnnotationBase](#const-istableannotationbase)
* [make](#const-make)

### Type aliases

####  BoundingBox

Ƭ **BoundingBox**: *[WithHeader](#withheader)‹[LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)› | [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)*

Defined in src/TableAnnotation.ts:26

___

####  BoundingBoxes

Ƭ **BoundingBoxes**: *Dictionary‹[BoundingBox](#boundingbox)›*

Defined in src/TableAnnotation.ts:27

___

####  BoundingBoxesByPage

Ƭ **BoundingBoxesByPage**: *[BoundingBoxes](#boundingboxes)[]*

Defined in src/TableAnnotation.ts:29

___

####  TableAnnotationBase

Ƭ **TableAnnotationBase**: *Pick‹[TableAnnotation](#interfaces_tableannotation_tableannotationmd), "file" | "boundingBoxesByPage"›*

Defined in src/TableAnnotation.ts:39

### Variables

#### `Const` rejectsEmptyBoundingBoxes

• **rejectsEmptyBoundingBoxes**: *function* = evolve({
  boundingBoxesByPage: map(reject(propSatisfies(isEmptyPoly, 'boundingPoly'))),
}) as <A extends TableAnnotationBase>(annotations: A) => A

Defined in src/TableAnnotation.ts:104

```haskell
rejectsEmptyBoundingBoxes :: TableAnnotationBase -> TableAnnotationBase
```

##### Type declaration:

▸ <**A**>(`annotations`: A): *A*

**Type parameters:**

▪ **A**: *[TableAnnotationBase](#tableannotationbase)*

**Parameters:**

Name | Type |
------ | ------ |
`annotations` | A |

___

#### `Const` toBoundingBoxes

• **toBoundingBoxes**: *function* = reduce(
  (acc: BoundingBoxes, value) => assoc(value.id, value, acc),
  {}
)

Defined in src/TableAnnotation.ts:93

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

Defined in src/TableAnnotation.ts:49

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

Defined in src/TableAnnotation.ts:60

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

Defined in src/TableAnnotation.ts:80

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

Defined in src/TableAnnotation.ts:68

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

Defined in src/TableAnnotation.ts:117

```haskell
makeComparableSchema :: TableAnnotationBase -> IO TableAnnotation
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

Defined in src/TextAnnotation.ts:34

___

####  ParagraphsById

Ƭ **ParagraphsById**: *Dictionary‹[Paragraph](#interfaces_textannotation_paragraphmd)›*

Defined in src/TextAnnotation.ts:68

___

####  WordsById

Ƭ **WordsById**: *Dictionary‹[Word](#interfaces_textannotation_wordmd)›*

Defined in src/TextAnnotation.ts:66

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

Defined in src/TextAnnotation.ts:42

___

#### `Const` fromAnnotateImageResponse

• **fromAnnotateImageResponse**: *function* = pipe(
  Vision.getPagesFromAnnotateImageResponse,
  map(fromVisionPage),
  A.array.sequence(IO.io)
)

Defined in src/TextAnnotation.ts:304

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
    reduce((acc: Page, page: Page) => mergeDeepLeft(acc, page) as Page, {
      wordsById: {},
      paragraphsById: {},
    })
  )
)

Defined in src/TextAnnotation.ts:287

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

Defined in src/TextAnnotation.ts:196

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

Defined in src/TextAnnotation.ts:348

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
  replace(/\n$/, ''),
  trim
)

Defined in src/TextAnnotation.ts:358

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

Defined in src/TextAnnotation.ts:319

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

Defined in src/TextAnnotation.ts:250

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

Defined in src/TextAnnotation.ts:231

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

Defined in src/TextAnnotation.ts:88

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

Defined in src/TextAnnotation.ts:163

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

Defined in src/TextAnnotation.ts:174

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

Defined in src/TextAnnotation.ts:127

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

Defined in src/TextAnnotation.ts:155

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

Defined in src/TextAnnotation.ts:182

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

Defined in src/TextAnnotation.ts:96

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

Defined in src/TextAnnotation.ts:119

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

Defined in src/TextAnnotation.ts:139

```haskell
isWordsById :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is WordsById*


<a name="modules_types_md"></a>

[functional-types](#globalsmd) › ["Types"](#modules_types_md)

## Module: "Types"

### Index

#### Interfaces

* [Pair](#interfaces_types_pairmd)

#### Type aliases

* [ArrayPredicate](#arraypredicate)
* [PairPredicate](#pairpredicate)
* [TypePredicate](#typepredicate)

#### Variables

* [isNotEmpty](#const-isnotempty)
* [isNotNil](#const-isnotnil)
* [toPair](#const-topair)

#### Functions

* [fromPair](#const-frompair)
* [isArray](#const-isarray)
* [isArraySatisfying](#isarraysatisfying)
* [isBoolean](#const-isboolean)
* [isDictionary](#const-isdictionary)
* [isNat](#const-isnat)
* [isNumber](#const-isnumber)
* [isPair](#const-ispair)
* [isPairSatisfying](#ispairsatisfying)
* [isRegExp](#const-isregexp)
* [isString](#const-isstring)
* [isStringArray](#const-isstringarray)
* [propSatisfiesIfExists](#const-propsatisfiesifexists)

### Type aliases

####  ArrayPredicate

Ƭ **ArrayPredicate**: *[TypePredicate](#typepredicate)‹T[]›*

Defined in src/Types.ts:27

___

####  PairPredicate

Ƭ **PairPredicate**: *[TypePredicate](#typepredicate)‹[Pair](#interfaces_types_pairmd)‹T››*

Defined in src/Types.ts:29

___

####  TypePredicate

Ƭ **TypePredicate**: *function*

Defined in src/Types.ts:25

##### Type declaration:

▸ (`a`: unknown): *a is T*

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

### Variables

#### `Const` isNotEmpty

• **isNotEmpty**: *function* = pipe(isEmpty, not)

Defined in src/Types.ts:175

```haskell
isNotEmpty :: a -> bool
```

##### Type declaration:

▸ (`a`: unknown): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

___

#### `Const` isNotNil

• **isNotNil**: *function* = pipe(isNil, not)

Defined in src/Types.ts:107

```haskell
isNotNil :: a -> bool
```

##### Type declaration:

▸ (`a`: unknown): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

___

#### `Const` toPair

• **toPair**: *function* = pipe(
  split(';'),
  ([left, right]): Pair<string> => ({ left, right: right ?? '' })
)

Defined in src/Types.ts:86

```haskell
toPair :: String -> Pair String
```

##### Type declaration:

▸ (`pairStr`: string): *[Pair](#interfaces_types_pairmd)‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`pairStr` | string |

### Functions

#### `Const` fromPair

▸ **fromPair**(`__namedParameters`: object): *string*

Defined in src/Types.ts:78

```haskell
fromPair :: Pair String -> String
```

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`left` | string |
`right` | string |

**Returns:** *string*

___

#### `Const` isArray

▸ **isArray**(`a`: unknown): *a is unknown[]*

Defined in src/Types.ts:143

```haskell
isArray :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is unknown[]*

___

####  isArraySatisfying

▸ **isArraySatisfying**<**T**>(`predicate`: [TypePredicate](#typepredicate)‹T›): *[ArrayPredicate](#arraypredicate)‹T›*

Defined in src/Types.ts:36

```haskell
isArraySatisfying :: a ->  bool
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [TypePredicate](#typepredicate)‹T› |

**Returns:** *[ArrayPredicate](#arraypredicate)‹T›*

___

#### `Const` isBoolean

▸ **isBoolean**(`a`: unknown): *a is boolean*

Defined in src/Types.ts:158

```haskell
isBoolean :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is boolean*

___

#### `Const` isDictionary

▸ **isDictionary**(`a`: unknown): *a is Dictionary<unknown>*

Defined in src/Types.ts:150

```haskell
isDictionary :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Dictionary<unknown>*

___

#### `Const` isNat

▸ **isNat**(`a`: unknown): *a is number*

Defined in src/Types.ts:128

```haskell
isNat :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is number*

___

#### `Const` isNumber

▸ **isNumber**(`a`: unknown): *a is number*

Defined in src/Types.ts:121

```haskell
isNumber :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is number*

___

#### `Const` isPair

▸ **isPair**(`a`: unknown): *a is Pair<unknown>*

Defined in src/Types.ts:51

```haskell
isPair :: a ->  bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is Pair<unknown>*

___

####  isPairSatisfying

▸ **isPairSatisfying**<**T**>(`predicate`: [TypePredicate](#typepredicate)‹T›): *[PairPredicate](#pairpredicate)‹T›*

Defined in src/Types.ts:59

```haskell
isPairSatisfying :: a ->  bool
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [TypePredicate](#typepredicate)‹T› |

**Returns:** *[PairPredicate](#pairpredicate)‹T›*

___

#### `Const` isRegExp

▸ **isRegExp**(`a`: unknown): *a is RegExp*

Defined in src/Types.ts:114

```haskell
isRegExp :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is RegExp*

___

#### `Const` isString

▸ **isString**(`a`: unknown): *a is string*

Defined in src/Types.ts:136

```haskell
isString :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is string*

___

#### `Const` isStringArray

▸ **isStringArray**(`a`: unknown): *a is string[]*

Defined in src/Types.ts:166

```haskell
isStringArray :: a -> bool
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

**Returns:** *a is string[]*

___

#### `Const` propSatisfiesIfExists

▸ **propSatisfiesIfExists**(`pred`: function, `name`: string): *function*

Defined in src/Types.ts:99

```haskell
propSatisfiesIfExists :: (Pred, String) -> Reader a bool
```

**Parameters:**

▪ **pred**: *function*

▸ (`a`: unknown): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | unknown |

▪ **name**: *string*

**Returns:** *function*

▸ (...`a`: keyof A[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`...a` | keyof A[] |


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
* [isEmptyPoly](#const-isemptypoly)
* [unionOf](#const-unionof)
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
* [unions](#const-unions)
* [withHeader](#const-withheader)
* [withHeaderColumn](#const-withheadercolumn)
* [withHeaderRow](#const-withheaderrow)

### Type aliases

####  Line

Ƭ **Line**: *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

Defined in src/Vertex/index.ts:55

___

####  Poly

Ƭ **Poly**: *[[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)]*

Defined in src/Vertex/index.ts:60

[TopLeft, TopRight, BottomLeft, BottomRight]

___

####  WithColumns

Ƭ **WithColumns**: *A & object*

Defined in src/Vertex/index.ts:72

___

####  WithHeader

Ƭ **WithHeader**: *[WithHeaderRow](#withheaderrow)‹A› | [WithHeaderColumn](#withheadercolumn)‹A›*

Defined in src/Vertex/index.ts:84

___

####  WithHeaderColumn

Ƭ **WithHeaderColumn**: *A & object*

Defined in src/Vertex/index.ts:80

___

####  WithHeaderRow

Ƭ **WithHeaderRow**: *A & object*

Defined in src/Vertex/index.ts:76

___

####  WithHeaders

Ƭ **WithHeaders**: *[WithHeaderRow](#withheaderrow)‹A› & [WithHeaderColumn](#withheadercolumn)‹A›*

Defined in src/Vertex/index.ts:88

___

####  WithRows

Ƭ **WithRows**: *A & object*

Defined in src/Vertex/index.ts:68

### Variables

#### `Const` areaOf

• **areaOf**: *function* = converge(multiply, [
  widthOf,
  heightOf,
])

Defined in src/Vertex/index.ts:667

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

Defined in src/Vertex/index.ts:535

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

Defined in src/Vertex/index.ts:542

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
}) as R.Reader<Poly, Corners>

Defined in src/Vertex/index.ts:330

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

Defined in src/Vertex/index.ts:521

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

Defined in src/Vertex/index.ts:528

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

Defined in src/Vertex/index.ts:440

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

Defined in src/Vertex/index.ts:454

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

Defined in src/Vertex/index.ts:433

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

Defined in src/Vertex/index.ts:447

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

• **heightOf**: *function* = pipe(
  converge(subtract, [
    pipe(getBottomLeft, prop('y')),
    pipe(getTopLeft, prop('y')),
  ]),
  Math.abs
)

Defined in src/Vertex/index.ts:654

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

#### `Const` isEmptyPoly

• **isEmptyPoly**: *function* = pipe(areaOf, gte(0))

Defined in src/Vertex/index.ts:677

```haskell
isEmpty :: Poly -> Bool
```

##### Type declaration:

▸ (`poly`: [Poly](#poly)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | [Poly](#poly) |

___

#### `Const` unionOf

• **unionOf**: *function* = converge(
  reduce((acc: Poly, value: Poly) => unions(acc)(value)),
  [head, tail]
)

Defined in src/Vertex/index.ts:767

```haskell
unionOf :: [Poly] -> Poly
```

##### Type declaration:

▸ (`polygons`: [Poly](#poly)[]): *[Poly](#poly)*

**Parameters:**

Name | Type |
------ | ------ |
`polygons` | [Poly](#poly)[] |

___

#### `Const` widthOf

• **widthOf**: *function* = pipe(
  converge(subtract, [
    pipe(getTopRight, prop('x')),
    pipe(getTopLeft, prop('x')),
  ]),
  Math.abs
)

Defined in src/Vertex/index.ts:641

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

Defined in src/Vertex/index.ts:504

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

▸ **containedBy**(`container`: [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)], `threshold`: number): *(Anonymous function)*

Defined in src/Vertex/index.ts:821

```haskell
containedBy :: Poly -> Reader Poly bool
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`container` | [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)] | - |
`threshold` | number | 0.8 |

**Returns:** *(Anonymous function)*

___

#### `Const` contains

▸ **contains**(`containee`: [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)], `threshold`: number): *(Anonymous function)*

Defined in src/Vertex/index.ts:805

```haskell
contains :: Poly -> Reader Poly bool
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`containee` | [[Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd), [Vertex](#interfaces_vertex_index_vertexmd)] | - |
`threshold` | number | 0.8 |

**Returns:** *(Anonymous function)*

___

#### `Const` getChildlessBoundingBoxes

▸ **getChildlessBoundingBoxes**(`boundingBoxes`: [LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)[]): *any[]*

Defined in src/Vertex/index.ts:866

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

Defined in src/Vertex/index.ts:182

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

Defined in src/Vertex/index.ts:217

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

Defined in src/Vertex/index.ts:208

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

Defined in src/Vertex/index.ts:199

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

Defined in src/Vertex/index.ts:225

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

Defined in src/Vertex/index.ts:174

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

Defined in src/Vertex/index.ts:190

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

Defined in src/Vertex/index.ts:719

```haskell
intersects :: Poly -> Reader Poly (Option Poly)
```

**Parameters:**

Name | Type |
------ | ------ |
`p0` | [Poly](#poly) |

**Returns:** *(Anonymous function)*

___

#### `Const` isBoundingBox

▸ **isBoundingBox**(`a`: unknown): *a is BoundingBox*

Defined in src/Vertex/index.ts:162

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

Defined in src/Vertex/index.ts:461

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

Defined in src/Vertex/index.ts:122

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

Defined in src/Vertex/index.ts:134

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

Defined in src/Vertex/index.ts:114

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

Defined in src/Vertex/index.ts:684

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

Defined in src/Vertex/index.ts:414

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

▸ **makeLabeledBoundingBox**(`id`: string, `label`: string, `poly`: [Poly](#poly), `ys`: number[], `xs`: number[], `score?`: number): *[LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)*

Defined in src/Vertex/index.ts:474

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
`score?` | number |

**Returns:** *[LabeledBoundingBox](#interfaces_vertex_index_labeledboundingboxmd)*

___

#### `Const` makeLine

▸ **makeLine**(`x0`: number, `y0`: number, `x1`: number, `y1`: number): *[Line](#line)*

Defined in src/Vertex/index.ts:240

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

Defined in src/Vertex/index.ts:305

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

Defined in src/Vertex/index.ts:233

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

Defined in src/Vertex/index.ts:777

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

Defined in src/Vertex/index.ts:793

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

Defined in src/Vertex/index.ts:317

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

Defined in src/Vertex/index.ts:847

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

Defined in src/Vertex/index.ts:830

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

Defined in src/Vertex/index.ts:711

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

Defined in src/Vertex/index.ts:694

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

#### `Const` unions

▸ **unions**(`p0`: [Poly](#poly)): *(Anonymous function)*

Defined in src/Vertex/index.ts:745

```haskell
unions :: Poly -> Reader Poly Poly
```

**Parameters:**

Name | Type |
------ | ------ |
`p0` | [Poly](#poly) |

**Returns:** *(Anonymous function)*

___

#### `Const` withHeader

▸ **withHeader**(`vertex`: [Vertex](#interfaces_vertex_index_vertexmd)): *(Anonymous function)*

Defined in src/Vertex/index.ts:626

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

Defined in src/Vertex/index.ts:589

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

Defined in src/Vertex/index.ts:551

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
